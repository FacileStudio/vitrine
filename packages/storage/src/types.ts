export interface StorageStat {
  size: number;
  lastModified: Date;
  etag?: string;
  type?: string;
}

export interface StorageObject {
  key: string;
  size: number;
  lastModified: Date;
  etag?: string;
}

export interface StorageProvider {
  upload(path: string, data: ArrayBuffer | Uint8Array | string, contentType?: string): Promise<string>;
  download(path: string): Promise<Uint8Array>;
  delete(path: string): Promise<boolean>;
  exists(path: string): Promise<boolean>;
  stat(path: string): Promise<StorageStat | null>;
  list(prefix?: string): Promise<StorageObject[]>;
  getFileUrl(path: string): string;
  getUploadUrl(key: string, options?: { expiresIn?: number }): Promise<string>;
  healthCheck(): Promise<void>;
}
