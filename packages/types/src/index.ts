export enum UserRole {
  USER = 'USER',
  ADMIN = 'ADMIN',
}

export type {
  User,
  Session,
  Verification,
  Contact,
  Media,
  Project,
  StorySection,
  StoryBlock,
  StorySwatch,
  StoryTile,
  StoryPerson,
  Prisma,
  PrismaClient,
} from '@repo/database';
export { BlockKind, CoverEffect, BlockSmalls } from '@repo/database';
