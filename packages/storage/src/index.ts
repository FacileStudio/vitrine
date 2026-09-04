export type { StorageProvider, StorageStat, StorageObject } from './types';
export { S3StorageService, type S3StorageConfig } from './s3';
export { FsStorageService, type FsStorageConfig } from './fs';

import type { StorageProvider } from './types';
import { S3StorageService, type S3StorageConfig } from './s3';
import { FsStorageService, type FsStorageConfig } from './fs';

export type StorageConfig =
  | ({ driver: 's3' } & S3StorageConfig)
  | ({ driver: 'fs' } & FsStorageConfig);

export function createStorage(config: StorageConfig): StorageProvider {
  switch (config.driver) {
    case 's3':
      return new S3StorageService(config);
    case 'fs':
      return new FsStorageService(config);
  }
}

export type StorageService = StorageProvider;
