import { mkdir, readdir, stat as fsStat, unlink } from 'node:fs/promises';
import { join, dirname, relative, resolve } from 'node:path';
import { createHmac, timingSafeEqual } from 'node:crypto';
import { logger } from '@repo/logger';
import type { StorageProvider, StorageStat, StorageObject } from './types';

export interface FsStorageConfig {
  storagePath: string;
  publicUrl: string;
  encryptionSecret: string;
  maxUploadSize?: number;
}

const DEFAULT_MAX_UPLOAD_SIZE = 50 * 1024 * 1024; // 50 MB

export class FsStorageService implements StorageProvider {
  private basePath: string;
  private publicUrl: string;
  private secret: string;
  readonly maxUploadSize: number;

  constructor(config: FsStorageConfig) {
    this.basePath = resolve(config.storagePath);
    this.publicUrl = config.publicUrl.replace(/\/$/, '');
    this.secret = config.encryptionSecret;
    this.maxUploadSize = config.maxUploadSize ?? DEFAULT_MAX_UPLOAD_SIZE;
  }

  private safePath(key: string): string {
    const clean = key.replace(/^\/+/, '');
    if (!clean) throw new Error('Empty storage key');
    const full = resolve(this.basePath, clean);
    if (!full.startsWith(this.basePath + '/')) {
      throw new Error('Invalid storage key');
    }
    return full;
  }

  static normalizeKey(key: string): string {
    return key.replace(/^\/+/, '');
  }

  async upload(path: string, data: ArrayBuffer | Uint8Array | string, _contentType?: string): Promise<string> {
    const dest = this.safePath(path);
    await mkdir(dirname(dest), { recursive: true });
    await Bun.write(dest, data);
    return this.getFileUrl(path);
  }

  async download(path: string): Promise<Uint8Array> {
    const file = Bun.file(this.safePath(path));
    return new Uint8Array(await file.arrayBuffer());
  }

  async delete(path: string): Promise<boolean> {
    try {
      await unlink(this.safePath(path));
      return true;
    } catch {
      return false;
    }
  }

  async exists(path: string): Promise<boolean> {
    try {
      return await Bun.file(this.safePath(path)).exists();
    } catch {
      return false;
    }
  }

  async stat(path: string): Promise<StorageStat | null> {
    try {
      const s = await fsStat(this.safePath(path));
      return {
        size: s.size,
        lastModified: s.mtime,
      };
    } catch {
      return null;
    }
  }

  async list(prefix?: string): Promise<StorageObject[]> {
    const objects: StorageObject[] = [];
    let searchDir: string;

    if (prefix) {
      try {
        searchDir = this.safePath(prefix);
      } catch {
        return objects;
      }
    } else {
      searchDir = this.basePath;
    }

    try {
      const entries = await readdir(searchDir, { withFileTypes: true, recursive: true });
      for (const entry of entries) {
        if (!entry.isFile()) continue;
        const fullPath = join((entry as any).parentPath ?? (entry as any).path ?? searchDir, entry.name);
        const key = relative(this.basePath, fullPath);
        const s = await fsStat(fullPath);
        objects.push({
          key,
          size: s.size,
          lastModified: s.mtime,
        });
      }
    } catch (e) {
      logger.error({ err: e }, 'Storage list error');
    }

    return objects;
  }

  getFileUrl(path: string): string {
    const cleanPath = FsStorageService.normalizeKey(path);
    return `${this.publicUrl}/storage/files/${cleanPath}`;
  }

  async getUploadUrl(key: string, options?: { expiresIn?: number }): Promise<string> {
    const normalizedKey = FsStorageService.normalizeKey(key);
    const expires = Math.floor(Date.now() / 1000) + (options?.expiresIn ?? 900);
    const token = FsStorageService.signToken(normalizedKey, expires, this.secret);
    return `${this.publicUrl}/storage/upload/${normalizedKey}?token=${token}&expires=${expires}`;
  }

  async handleUpload(key: string, data: ArrayBuffer | Uint8Array, contentType?: string): Promise<string> {
    return this.upload(key, data, contentType);
  }

  async serveFile(key: string): Promise<Response> {
    try {
      const filePath = this.safePath(key);
      const file = Bun.file(filePath);
      if (!(await file.exists())) {
        return new Response('Not found', { status: 404 });
      }
      return new Response(file);
    } catch {
      return new Response('Not found', { status: 404 });
    }
  }

  async healthCheck(): Promise<void> {
    await mkdir(this.basePath, { recursive: true });
    await fsStat(this.basePath);
  }

  static signToken(key: string, expires: number, secret: string): string {
    return createHmac('sha256', secret)
      .update(`${key}|${expires}`)
      .digest('hex');
  }

  static verifyToken(key: string, expires: number, token: string, secret: string): boolean {
    if (Date.now() / 1000 > expires) return false;
    const expected = FsStorageService.signToken(key, expires, secret);
    if (expected.length !== token.length) return false;
    return timingSafeEqual(Buffer.from(expected), Buffer.from(token));
  }
}
