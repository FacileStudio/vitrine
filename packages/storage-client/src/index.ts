export interface UploadOptions {
  onProgress?: (percent: number) => void;
  signal?: AbortSignal;
}

export interface UploadResult {
  url: string;
  key: string;
}

export class UploadError extends Error {
  readonly statusCode?: number;
  readonly originalError?: unknown;
  /** S3 error code from the XML body, e.g. SignatureDoesNotMatch, AccessDenied, EntityTooLarge */
  readonly s3Code?: string;
  /** target origin without the signed query string */
  readonly target?: string;

  constructor(
    message: string,
    statusCode?: number,
    originalError?: unknown,
    details: { s3Code?: string; target?: string } = {}
  ) {
    super(message);
    this.name = 'UploadError';
    this.statusCode = statusCode;
    this.originalError = originalError;
    this.s3Code = details.s3Code;
    this.target = details.target;
  }
}

// the signed query string is a credential for its whole lifetime, never log it
function targetOf(presignedUrl: string): string {
  try {
    const { origin, pathname } = new URL(presignedUrl);
    return `${origin}${pathname}`;
  } catch {
    return 'invalid-url';
  }
}

function parseS3Error(body: string): { code?: string; message?: string } {
  return {
    code: body.match(/<Code>([^<]*)<\/Code>/)?.[1],
    message: body.match(/<Message>([^<]*)<\/Message>/)?.[1],
  };
}

function statusError(status: number, body: string, target: string): UploadError {
  const { code, message } = parseS3Error(body);
  const detail = [code, message].filter(Boolean).join(': ');
  return new UploadError(
    `Upload failed with status ${status}${detail ? ` (${detail})` : ''}`,
    status,
    undefined,
    { s3Code: code, target }
  );
}

export async function uploadFile(
  file: File,
  presignedUrl: string,
  options: UploadOptions = {}
): Promise<UploadResult> {
  const { onProgress, signal } = options;
  const target = targetOf(presignedUrl);

  try {
    const xhr = new XMLHttpRequest();

    const uploadPromise = new Promise<string>((resolve, reject) => {
      xhr.upload.addEventListener('progress', (event) => {
        if (event.lengthComputable && onProgress) {
          const percent = Math.round((event.loaded / event.total) * 100);
          onProgress(percent);
        }
      });

      xhr.addEventListener('load', () => {
        if (xhr.status >= 200 && xhr.status < 300) {
          const url = presignedUrl.split('?')[0];
          resolve(url);
        } else {
          reject(statusError(xhr.status, xhr.responseText ?? '', target));
        }
      });

      xhr.addEventListener('error', () => {
        reject(
          new UploadError('Network error during upload (unreachable host, CORS or TLS)', undefined, undefined, { target })
        );
      });

      xhr.addEventListener('abort', () => {
        reject(new UploadError('Upload aborted', undefined, undefined, { target }));
      });

      xhr.open('PUT', presignedUrl);
      xhr.setRequestHeader('Content-Type', file.type);
      xhr.send(file);
    });

    if (signal) {
      signal.addEventListener('abort', () => {
        xhr.abort();
      });
    }

    const url = await uploadPromise;

    const urlParts = new URL(presignedUrl);
    const key = urlParts.pathname.substring(1);

    return { url, key };
  } catch (error) {
    if (error instanceof UploadError) {
      throw error;
    }
    throw new UploadError('Unexpected error during upload', undefined, error, { target });
  }
}

export async function uploadFileSimple(file: File, presignedUrl: string): Promise<string> {
  const target = targetOf(presignedUrl);

  try {
    const response = await fetch(presignedUrl, {
      method: 'PUT',
      body: file,
      headers: {
        'Content-Type': file.type,
      },
    });

    if (!response.ok) {
      throw statusError(response.status, await response.text().catch(() => ''), target);
    }

    return presignedUrl.split('?')[0];
  } catch (error) {
    if (error instanceof UploadError) {
      throw error;
    }
    if (error instanceof TypeError) {
      // fetch hides the reason: CORS block, DNS failure, refused connection and TLS error all look alike
      throw new UploadError(
        'Network error during upload (unreachable host, CORS or TLS)',
        undefined,
        error,
        { target }
      );
    }
    throw new UploadError('Unexpected error during upload', undefined, error, { target });
  }
}
