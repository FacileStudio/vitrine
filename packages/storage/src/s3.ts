import { S3Client } from 'bun';
import { logger } from '@repo/logger';
import type { StorageProvider, StorageStat, StorageObject } from './types';

export interface S3StorageConfig {
  endpoint: string;
  accessKeyId: string;
  secretAccessKey: string;
  bucket: string;
  publicUrl?: string;
}

export class S3StorageService implements StorageProvider {
  private client: S3Client;
  private publicUrl: string;

  constructor(config: S3StorageConfig) {
    this.client = new S3Client({
      endpoint: config.endpoint,
      accessKeyId: config.accessKeyId,
      secretAccessKey: config.secretAccessKey,
      bucket: config.bucket,
    });

    this.publicUrl = config.publicUrl || `${config.endpoint}/${config.bucket}`;
  }

  async upload(path: string, data: ArrayBuffer | Uint8Array | string, contentType?: string): Promise<string> {
    const s3File = this.client.file(path);
    await (s3File as any).write(data, { type: contentType });
    return this.getFileUrl(path);
  }

  async stat(path: string): Promise<StorageStat | null> {
    try {
      const s = await this.client.file(path).stat();
      return {
        size: s.size,
        lastModified: s.lastModified,
        etag: s.etag,
        type: s.type,
      };
    } catch {
      return null;
    }
  }

  async delete(path: string): Promise<boolean> {
    const s3File = this.client.file(path);
    if (await s3File.exists()) {
      await s3File.delete();
      return true;
    }
    return false;
  }

  async exists(path: string): Promise<boolean> {
    return await this.client.file(path).exists();
  }

  getFileUrl(path: string): string {
    const cleanPath = path.startsWith('/') ? path.slice(1) : path;
    const cleanBase = this.publicUrl.endsWith('/') ? this.publicUrl.slice(0, -1) : this.publicUrl;
    return `${cleanBase}/${cleanPath}`;
  }

  async download(path: string): Promise<Uint8Array> {
    return new Uint8Array(await this.client.file(path).arrayBuffer());
  }

  async list(prefix?: string): Promise<StorageObject[]> {
    const objects: StorageObject[] = [];
    try {
      const result = await (this.client.list({ prefix }) as any);
      for await (const object of result) {
        objects.push(object);
      }
    } catch (e) {
      logger.error({ err: e }, 'Storage list error');
    }
    return objects;
  }

  async getUploadUrl(key: string, options?: { expiresIn?: number }): Promise<string> {
    return this.client.file(key).presign({
      expiresIn: options?.expiresIn ?? 900,
      method: 'PUT',
    });
  }

  async healthCheck(): Promise<void> {
    await this.client.file('__healthcheck__').exists();
  }
}
