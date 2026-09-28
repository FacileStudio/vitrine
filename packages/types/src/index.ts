export * from "@repo/database";

export type { Contact, Prisma } from "@repo/database";

export type ContactCreateInput = Omit<
  import("@repo/database").Contact,
  "id" | "createdAt"
>;
export type ContactUpdateInput = Partial<ContactCreateInput>;

export interface ApiResponse<T = unknown> {
  data?: T;
  error?: string;
  success: boolean;
}

export interface PaginatedResponse<T = unknown> {
  data: T[];
  total: number;
  page: number;
  pageSize: number;
}

export type Serialized<T> =
  T extends Date ? string :
  T extends Array<infer U> ? Serialized<U>[] :
  T extends object ? { [K in keyof T]: Serialized<T[K]> } :
  T;

export type {
  User,
  Session,
  Verification,
  Media,
  PrismaClient,
} from '@repo/database';
