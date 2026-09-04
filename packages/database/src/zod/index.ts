/**
 * Prisma Zod Generator - Single File (inlined)
 * Auto-generated. Do not edit.
 */

import * as z from 'zod';
import type { Prisma } from '../generated/client';
// File: TransactionIsolationLevel.schema.ts

export const TransactionIsolationLevelSchema = z.enum(['ReadUncommitted', 'ReadCommitted', 'RepeatableRead', 'Serializable'])

export type TransactionIsolationLevel = z.infer<typeof TransactionIsolationLevelSchema>;

// File: AccountScalarFieldEnum.schema.ts

export const AccountScalarFieldEnumSchema = z.enum(['id', 'userId', 'accountId', 'providerId', 'accessToken', 'refreshToken', 'accessTokenExpiresAt', 'refreshTokenExpiresAt', 'scope', 'idToken', 'password', 'createdAt', 'updatedAt'])

export type AccountScalarFieldEnum = z.infer<typeof AccountScalarFieldEnumSchema>;

// File: ContactScalarFieldEnum.schema.ts

export const ContactScalarFieldEnumSchema = z.enum(['id', 'email', 'firstName', 'lastName', 'createdAt'])

export type ContactScalarFieldEnum = z.infer<typeof ContactScalarFieldEnumSchema>;

// File: MediaScalarFieldEnum.schema.ts

export const MediaScalarFieldEnumSchema = z.enum(['id', 'url', 'key', 'mimeType', 'size', 'avatarUserId', 'coverUserId', 'createdAt'])

export type MediaScalarFieldEnum = z.infer<typeof MediaScalarFieldEnumSchema>;

// File: ProjectScalarFieldEnum.schema.ts

export const ProjectScalarFieldEnumSchema = z.enum(['id', 'slug', 'name', 'weeks', 'link', 'cover', 'video', 'gallery', 'description', 'techStack', 'date', 'services', 'team', 'notes', 'createdAt', 'updatedAt'])

export type ProjectScalarFieldEnum = z.infer<typeof ProjectScalarFieldEnumSchema>;

// File: SessionScalarFieldEnum.schema.ts

export const SessionScalarFieldEnumSchema = z.enum(['id', 'userId', 'token', 'expiresAt', 'ipAddress', 'userAgent', 'createdAt', 'updatedAt'])

export type SessionScalarFieldEnum = z.infer<typeof SessionScalarFieldEnumSchema>;

// File: UserScalarFieldEnum.schema.ts

export const UserScalarFieldEnumSchema = z.enum(['id', 'email', 'firstName', 'lastName', 'password', 'emailVerified', 'role', 'status', 'lastLoginAt', 'lastLoginIp', 'createdAt', 'updatedAt'])

export type UserScalarFieldEnum = z.infer<typeof UserScalarFieldEnumSchema>;

// File: VerificationScalarFieldEnum.schema.ts

export const VerificationScalarFieldEnumSchema = z.enum(['id', 'hashedIdentifier', 'hashedValue', 'expiresAt', 'createdAt', 'updatedAt'])

export type VerificationScalarFieldEnum = z.infer<typeof VerificationScalarFieldEnumSchema>;

// File: SortOrder.schema.ts

export const SortOrderSchema = z.enum(['asc', 'desc'])

export type SortOrder = z.infer<typeof SortOrderSchema>;

// File: QueryMode.schema.ts

export const QueryModeSchema = z.enum(['default', 'insensitive'])

export type QueryMode = z.infer<typeof QueryModeSchema>;

// File: NullsOrder.schema.ts

export const NullsOrderSchema = z.enum(['first', 'last'])

export type NullsOrder = z.infer<typeof NullsOrderSchema>;

// File: TeamMembers.schema.ts

export const TeamMembersSchema = z.enum(['mezz', 'fanga', 'gian', 'cami'])

export type TeamMembers = z.infer<typeof TeamMembersSchema>;

// File: UserRole.schema.ts

export const UserRoleSchema = z.enum(['USER', 'ADMIN'])

export type UserRole = z.infer<typeof UserRoleSchema>;

// File: UserStatus.schema.ts

export const UserStatusSchema = z.enum(['ACTIVE', 'SUSPENDED', 'BANNED', 'PENDING'])

export type UserStatus = z.infer<typeof UserStatusSchema>;

// File: AccountWhereInput.schema.ts

const accountwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => AccountWhereInputObjectSchema), z.lazy(() => AccountWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => AccountWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => AccountWhereInputObjectSchema), z.lazy(() => AccountWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  userId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  accountId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  providerId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  accessToken: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  refreshToken: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  accessTokenExpiresAt: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  refreshTokenExpiresAt: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  scope: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  idToken: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  password: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  user: z.union([z.lazy(() => UserScalarRelationFilterObjectSchema), z.lazy(() => UserWhereInputObjectSchema)]).optional()
}).strict();
export const AccountWhereInputObjectSchema: z.ZodType<Prisma.AccountWhereInput> = accountwhereinputSchema as unknown as z.ZodType<Prisma.AccountWhereInput>;
export const AccountWhereInputObjectZodSchema = accountwhereinputSchema;


// File: AccountOrderByWithRelationInput.schema.ts
const __makeSchema_AccountOrderByWithRelationInput_schema = () => z.object({
  id: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  accountId: SortOrderSchema.optional(),
  providerId: SortOrderSchema.optional(),
  accessToken: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  refreshToken: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  accessTokenExpiresAt: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  refreshTokenExpiresAt: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  scope: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  idToken: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  password: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  user: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const AccountOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.AccountOrderByWithRelationInput> = __makeSchema_AccountOrderByWithRelationInput_schema() as unknown as z.ZodType<Prisma.AccountOrderByWithRelationInput>;
export const AccountOrderByWithRelationInputObjectZodSchema = __makeSchema_AccountOrderByWithRelationInput_schema();


// File: AccountWhereUniqueInput.schema.ts
const __makeSchema_AccountWhereUniqueInput_schema = () => z.object({
  id: z.string().optional(),
  providerId_accountId: z.lazy(() => AccountProviderIdAccountIdCompoundUniqueInputObjectSchema).optional()
}).strict();
export const AccountWhereUniqueInputObjectSchema: z.ZodType<Prisma.AccountWhereUniqueInput> = __makeSchema_AccountWhereUniqueInput_schema() as unknown as z.ZodType<Prisma.AccountWhereUniqueInput>;
export const AccountWhereUniqueInputObjectZodSchema = __makeSchema_AccountWhereUniqueInput_schema();


// File: AccountOrderByWithAggregationInput.schema.ts
const __makeSchema_AccountOrderByWithAggregationInput_schema = () => z.object({
  id: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  accountId: SortOrderSchema.optional(),
  providerId: SortOrderSchema.optional(),
  accessToken: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  refreshToken: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  accessTokenExpiresAt: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  refreshTokenExpiresAt: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  scope: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  idToken: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  password: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  _count: z.lazy(() => AccountCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => AccountMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => AccountMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const AccountOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.AccountOrderByWithAggregationInput> = __makeSchema_AccountOrderByWithAggregationInput_schema() as unknown as z.ZodType<Prisma.AccountOrderByWithAggregationInput>;
export const AccountOrderByWithAggregationInputObjectZodSchema = __makeSchema_AccountOrderByWithAggregationInput_schema();


// File: AccountScalarWhereWithAggregatesInput.schema.ts

const accountscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => AccountScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => AccountScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => AccountScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => AccountScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => AccountScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  userId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  accountId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  providerId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  accessToken: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  refreshToken: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  accessTokenExpiresAt: z.union([z.lazy(() => DateTimeNullableWithAggregatesFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  refreshTokenExpiresAt: z.union([z.lazy(() => DateTimeNullableWithAggregatesFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  scope: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  idToken: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  password: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const AccountScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.AccountScalarWhereWithAggregatesInput> = accountscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.AccountScalarWhereWithAggregatesInput>;
export const AccountScalarWhereWithAggregatesInputObjectZodSchema = accountscalarwherewithaggregatesinputSchema;


// File: ContactWhereInput.schema.ts

const contactwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ContactWhereInputObjectSchema), z.lazy(() => ContactWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ContactWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ContactWhereInputObjectSchema), z.lazy(() => ContactWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  email: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  firstName: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  lastName: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const ContactWhereInputObjectSchema: z.ZodType<Prisma.ContactWhereInput> = contactwhereinputSchema as unknown as z.ZodType<Prisma.ContactWhereInput>;
export const ContactWhereInputObjectZodSchema = contactwhereinputSchema;


// File: ContactOrderByWithRelationInput.schema.ts
const __makeSchema_ContactOrderByWithRelationInput_schema = () => z.object({
  id: SortOrderSchema.optional(),
  email: SortOrderSchema.optional(),
  firstName: SortOrderSchema.optional(),
  lastName: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional()
}).strict();
export const ContactOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.ContactOrderByWithRelationInput> = __makeSchema_ContactOrderByWithRelationInput_schema() as unknown as z.ZodType<Prisma.ContactOrderByWithRelationInput>;
export const ContactOrderByWithRelationInputObjectZodSchema = __makeSchema_ContactOrderByWithRelationInput_schema();


// File: ContactWhereUniqueInput.schema.ts
const __makeSchema_ContactWhereUniqueInput_schema = () => z.object({
  id: z.string().optional(),
  email: z.string().optional()
}).strict();
export const ContactWhereUniqueInputObjectSchema: z.ZodType<Prisma.ContactWhereUniqueInput> = __makeSchema_ContactWhereUniqueInput_schema() as unknown as z.ZodType<Prisma.ContactWhereUniqueInput>;
export const ContactWhereUniqueInputObjectZodSchema = __makeSchema_ContactWhereUniqueInput_schema();


// File: ContactOrderByWithAggregationInput.schema.ts
const __makeSchema_ContactOrderByWithAggregationInput_schema = () => z.object({
  id: SortOrderSchema.optional(),
  email: SortOrderSchema.optional(),
  firstName: SortOrderSchema.optional(),
  lastName: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  _count: z.lazy(() => ContactCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => ContactMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => ContactMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const ContactOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.ContactOrderByWithAggregationInput> = __makeSchema_ContactOrderByWithAggregationInput_schema() as unknown as z.ZodType<Prisma.ContactOrderByWithAggregationInput>;
export const ContactOrderByWithAggregationInputObjectZodSchema = __makeSchema_ContactOrderByWithAggregationInput_schema();


// File: ContactScalarWhereWithAggregatesInput.schema.ts

const contactscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => ContactScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => ContactScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ContactScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ContactScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => ContactScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  email: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  firstName: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  lastName: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const ContactScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.ContactScalarWhereWithAggregatesInput> = contactscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.ContactScalarWhereWithAggregatesInput>;
export const ContactScalarWhereWithAggregatesInputObjectZodSchema = contactscalarwherewithaggregatesinputSchema;


// File: MediaWhereInput.schema.ts

const mediawhereinputSchema = z.object({
  AND: z.union([z.lazy(() => MediaWhereInputObjectSchema), z.lazy(() => MediaWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => MediaWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => MediaWhereInputObjectSchema), z.lazy(() => MediaWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  url: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  key: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  mimeType: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  size: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  avatarUserId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  coverUserId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  avatarUser: z.union([z.lazy(() => UserNullableScalarRelationFilterObjectSchema), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  coverUser: z.union([z.lazy(() => UserNullableScalarRelationFilterObjectSchema), z.lazy(() => UserWhereInputObjectSchema)]).optional()
}).strict();
export const MediaWhereInputObjectSchema: z.ZodType<Prisma.MediaWhereInput> = mediawhereinputSchema as unknown as z.ZodType<Prisma.MediaWhereInput>;
export const MediaWhereInputObjectZodSchema = mediawhereinputSchema;


// File: MediaOrderByWithRelationInput.schema.ts
const __makeSchema_MediaOrderByWithRelationInput_schema = () => z.object({
  id: SortOrderSchema.optional(),
  url: SortOrderSchema.optional(),
  key: SortOrderSchema.optional(),
  mimeType: SortOrderSchema.optional(),
  size: SortOrderSchema.optional(),
  avatarUserId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  coverUserId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  avatarUser: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
  coverUser: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const MediaOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.MediaOrderByWithRelationInput> = __makeSchema_MediaOrderByWithRelationInput_schema() as unknown as z.ZodType<Prisma.MediaOrderByWithRelationInput>;
export const MediaOrderByWithRelationInputObjectZodSchema = __makeSchema_MediaOrderByWithRelationInput_schema();


// File: MediaWhereUniqueInput.schema.ts
const __makeSchema_MediaWhereUniqueInput_schema = () => z.object({
  id: z.string().optional(),
  key: z.string().optional(),
  avatarUserId: z.string().optional(),
  coverUserId: z.string().optional()
}).strict();
export const MediaWhereUniqueInputObjectSchema: z.ZodType<Prisma.MediaWhereUniqueInput> = __makeSchema_MediaWhereUniqueInput_schema() as unknown as z.ZodType<Prisma.MediaWhereUniqueInput>;
export const MediaWhereUniqueInputObjectZodSchema = __makeSchema_MediaWhereUniqueInput_schema();


// File: MediaOrderByWithAggregationInput.schema.ts
const __makeSchema_MediaOrderByWithAggregationInput_schema = () => z.object({
  id: SortOrderSchema.optional(),
  url: SortOrderSchema.optional(),
  key: SortOrderSchema.optional(),
  mimeType: SortOrderSchema.optional(),
  size: SortOrderSchema.optional(),
  avatarUserId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  coverUserId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  _count: z.lazy(() => MediaCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => MediaAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => MediaMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => MediaMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => MediaSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const MediaOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.MediaOrderByWithAggregationInput> = __makeSchema_MediaOrderByWithAggregationInput_schema() as unknown as z.ZodType<Prisma.MediaOrderByWithAggregationInput>;
export const MediaOrderByWithAggregationInputObjectZodSchema = __makeSchema_MediaOrderByWithAggregationInput_schema();


// File: MediaScalarWhereWithAggregatesInput.schema.ts

const mediascalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => MediaScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => MediaScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => MediaScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => MediaScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => MediaScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  url: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  key: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  mimeType: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  size: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  avatarUserId: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  coverUserId: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const MediaScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.MediaScalarWhereWithAggregatesInput> = mediascalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.MediaScalarWhereWithAggregatesInput>;
export const MediaScalarWhereWithAggregatesInputObjectZodSchema = mediascalarwherewithaggregatesinputSchema;


// File: ProjectWhereInput.schema.ts

const projectwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ProjectWhereInputObjectSchema), z.lazy(() => ProjectWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ProjectWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ProjectWhereInputObjectSchema), z.lazy(() => ProjectWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  slug: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  weeks: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  link: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  cover: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  video: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  gallery: z.lazy(() => StringNullableListFilterObjectSchema).optional(),
  description: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  techStack: z.lazy(() => StringNullableListFilterObjectSchema).optional(),
  date: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  services: z.lazy(() => StringNullableListFilterObjectSchema).optional(),
  team: z.lazy(() => EnumTeamMembersNullableListFilterObjectSchema).optional(),
  notes: z.lazy(() => StringNullableListFilterObjectSchema).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const ProjectWhereInputObjectSchema: z.ZodType<Prisma.ProjectWhereInput> = projectwhereinputSchema as unknown as z.ZodType<Prisma.ProjectWhereInput>;
export const ProjectWhereInputObjectZodSchema = projectwhereinputSchema;


// File: ProjectOrderByWithRelationInput.schema.ts
const __makeSchema_ProjectOrderByWithRelationInput_schema = () => z.object({
  id: SortOrderSchema.optional(),
  slug: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  weeks: SortOrderSchema.optional(),
  link: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  cover: SortOrderSchema.optional(),
  video: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  gallery: SortOrderSchema.optional(),
  description: SortOrderSchema.optional(),
  techStack: SortOrderSchema.optional(),
  date: SortOrderSchema.optional(),
  services: SortOrderSchema.optional(),
  team: SortOrderSchema.optional(),
  notes: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const ProjectOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.ProjectOrderByWithRelationInput> = __makeSchema_ProjectOrderByWithRelationInput_schema() as unknown as z.ZodType<Prisma.ProjectOrderByWithRelationInput>;
export const ProjectOrderByWithRelationInputObjectZodSchema = __makeSchema_ProjectOrderByWithRelationInput_schema();


// File: ProjectWhereUniqueInput.schema.ts
const __makeSchema_ProjectWhereUniqueInput_schema = () => z.object({
  id: z.number().int().optional(),
  slug: z.string().optional()
}).strict();
export const ProjectWhereUniqueInputObjectSchema: z.ZodType<Prisma.ProjectWhereUniqueInput> = __makeSchema_ProjectWhereUniqueInput_schema() as unknown as z.ZodType<Prisma.ProjectWhereUniqueInput>;
export const ProjectWhereUniqueInputObjectZodSchema = __makeSchema_ProjectWhereUniqueInput_schema();


// File: ProjectOrderByWithAggregationInput.schema.ts
const __makeSchema_ProjectOrderByWithAggregationInput_schema = () => z.object({
  id: SortOrderSchema.optional(),
  slug: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  weeks: SortOrderSchema.optional(),
  link: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  cover: SortOrderSchema.optional(),
  video: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  gallery: SortOrderSchema.optional(),
  description: SortOrderSchema.optional(),
  techStack: SortOrderSchema.optional(),
  date: SortOrderSchema.optional(),
  services: SortOrderSchema.optional(),
  team: SortOrderSchema.optional(),
  notes: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  _count: z.lazy(() => ProjectCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => ProjectAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => ProjectMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => ProjectMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => ProjectSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const ProjectOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.ProjectOrderByWithAggregationInput> = __makeSchema_ProjectOrderByWithAggregationInput_schema() as unknown as z.ZodType<Prisma.ProjectOrderByWithAggregationInput>;
export const ProjectOrderByWithAggregationInputObjectZodSchema = __makeSchema_ProjectOrderByWithAggregationInput_schema();


// File: ProjectScalarWhereWithAggregatesInput.schema.ts

const projectscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => ProjectScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => ProjectScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ProjectScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ProjectScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => ProjectScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  slug: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  weeks: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  link: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  cover: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  video: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  gallery: z.lazy(() => StringNullableListFilterObjectSchema).optional(),
  description: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  techStack: z.lazy(() => StringNullableListFilterObjectSchema).optional(),
  date: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  services: z.lazy(() => StringNullableListFilterObjectSchema).optional(),
  team: z.lazy(() => EnumTeamMembersNullableListFilterObjectSchema).optional(),
  notes: z.lazy(() => StringNullableListFilterObjectSchema).optional(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const ProjectScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.ProjectScalarWhereWithAggregatesInput> = projectscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.ProjectScalarWhereWithAggregatesInput>;
export const ProjectScalarWhereWithAggregatesInputObjectZodSchema = projectscalarwherewithaggregatesinputSchema;


// File: SessionWhereInput.schema.ts

const sessionwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => SessionWhereInputObjectSchema), z.lazy(() => SessionWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => SessionWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => SessionWhereInputObjectSchema), z.lazy(() => SessionWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  userId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  token: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  expiresAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  ipAddress: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  userAgent: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  user: z.union([z.lazy(() => UserScalarRelationFilterObjectSchema), z.lazy(() => UserWhereInputObjectSchema)]).optional()
}).strict();
export const SessionWhereInputObjectSchema: z.ZodType<Prisma.SessionWhereInput> = sessionwhereinputSchema as unknown as z.ZodType<Prisma.SessionWhereInput>;
export const SessionWhereInputObjectZodSchema = sessionwhereinputSchema;


// File: SessionOrderByWithRelationInput.schema.ts
const __makeSchema_SessionOrderByWithRelationInput_schema = () => z.object({
  id: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  token: SortOrderSchema.optional(),
  expiresAt: SortOrderSchema.optional(),
  ipAddress: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  userAgent: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  user: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const SessionOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.SessionOrderByWithRelationInput> = __makeSchema_SessionOrderByWithRelationInput_schema() as unknown as z.ZodType<Prisma.SessionOrderByWithRelationInput>;
export const SessionOrderByWithRelationInputObjectZodSchema = __makeSchema_SessionOrderByWithRelationInput_schema();


// File: SessionWhereUniqueInput.schema.ts
const __makeSchema_SessionWhereUniqueInput_schema = () => z.object({
  id: z.string().optional(),
  token: z.string().optional()
}).strict();
export const SessionWhereUniqueInputObjectSchema: z.ZodType<Prisma.SessionWhereUniqueInput> = __makeSchema_SessionWhereUniqueInput_schema() as unknown as z.ZodType<Prisma.SessionWhereUniqueInput>;
export const SessionWhereUniqueInputObjectZodSchema = __makeSchema_SessionWhereUniqueInput_schema();


// File: SessionOrderByWithAggregationInput.schema.ts
const __makeSchema_SessionOrderByWithAggregationInput_schema = () => z.object({
  id: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  token: SortOrderSchema.optional(),
  expiresAt: SortOrderSchema.optional(),
  ipAddress: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  userAgent: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  _count: z.lazy(() => SessionCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => SessionMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => SessionMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const SessionOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.SessionOrderByWithAggregationInput> = __makeSchema_SessionOrderByWithAggregationInput_schema() as unknown as z.ZodType<Prisma.SessionOrderByWithAggregationInput>;
export const SessionOrderByWithAggregationInputObjectZodSchema = __makeSchema_SessionOrderByWithAggregationInput_schema();


// File: SessionScalarWhereWithAggregatesInput.schema.ts

const sessionscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => SessionScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => SessionScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => SessionScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => SessionScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => SessionScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  userId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  token: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  expiresAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  ipAddress: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  userAgent: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const SessionScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.SessionScalarWhereWithAggregatesInput> = sessionscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.SessionScalarWhereWithAggregatesInput>;
export const SessionScalarWhereWithAggregatesInputObjectZodSchema = sessionscalarwherewithaggregatesinputSchema;


// File: UserWhereInput.schema.ts

const userwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => UserWhereInputObjectSchema), z.lazy(() => UserWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => UserWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => UserWhereInputObjectSchema), z.lazy(() => UserWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  email: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  firstName: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  lastName: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  password: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  emailVerified: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  role: z.union([z.lazy(() => EnumUserRoleFilterObjectSchema), UserRoleSchema]).optional(),
  status: z.union([z.lazy(() => EnumUserStatusFilterObjectSchema), UserStatusSchema]).optional(),
  lastLoginAt: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  lastLoginIp: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  avatar: z.union([z.lazy(() => MediaNullableScalarRelationFilterObjectSchema), z.lazy(() => MediaWhereInputObjectSchema)]).optional(),
  coverImage: z.union([z.lazy(() => MediaNullableScalarRelationFilterObjectSchema), z.lazy(() => MediaWhereInputObjectSchema)]).optional(),
  sessions: z.lazy(() => SessionListRelationFilterObjectSchema).optional(),
  accounts: z.lazy(() => AccountListRelationFilterObjectSchema).optional()
}).strict();
export const UserWhereInputObjectSchema: z.ZodType<Prisma.UserWhereInput> = userwhereinputSchema as unknown as z.ZodType<Prisma.UserWhereInput>;
export const UserWhereInputObjectZodSchema = userwhereinputSchema;


// File: UserOrderByWithRelationInput.schema.ts
const __makeSchema_UserOrderByWithRelationInput_schema = () => z.object({
  id: SortOrderSchema.optional(),
  email: SortOrderSchema.optional(),
  firstName: SortOrderSchema.optional(),
  lastName: SortOrderSchema.optional(),
  password: SortOrderSchema.optional(),
  emailVerified: SortOrderSchema.optional(),
  role: SortOrderSchema.optional(),
  status: SortOrderSchema.optional(),
  lastLoginAt: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  lastLoginIp: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  avatar: z.lazy(() => MediaOrderByWithRelationInputObjectSchema).optional(),
  coverImage: z.lazy(() => MediaOrderByWithRelationInputObjectSchema).optional(),
  sessions: z.lazy(() => SessionOrderByRelationAggregateInputObjectSchema).optional(),
  accounts: z.lazy(() => AccountOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const UserOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.UserOrderByWithRelationInput> = __makeSchema_UserOrderByWithRelationInput_schema() as unknown as z.ZodType<Prisma.UserOrderByWithRelationInput>;
export const UserOrderByWithRelationInputObjectZodSchema = __makeSchema_UserOrderByWithRelationInput_schema();


// File: UserWhereUniqueInput.schema.ts
const __makeSchema_UserWhereUniqueInput_schema = () => z.object({
  id: z.string().optional(),
  email: z.string().optional()
}).strict();
export const UserWhereUniqueInputObjectSchema: z.ZodType<Prisma.UserWhereUniqueInput> = __makeSchema_UserWhereUniqueInput_schema() as unknown as z.ZodType<Prisma.UserWhereUniqueInput>;
export const UserWhereUniqueInputObjectZodSchema = __makeSchema_UserWhereUniqueInput_schema();


// File: UserOrderByWithAggregationInput.schema.ts
const __makeSchema_UserOrderByWithAggregationInput_schema = () => z.object({
  id: SortOrderSchema.optional(),
  email: SortOrderSchema.optional(),
  firstName: SortOrderSchema.optional(),
  lastName: SortOrderSchema.optional(),
  password: SortOrderSchema.optional(),
  emailVerified: SortOrderSchema.optional(),
  role: SortOrderSchema.optional(),
  status: SortOrderSchema.optional(),
  lastLoginAt: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  lastLoginIp: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  _count: z.lazy(() => UserCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => UserMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => UserMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const UserOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.UserOrderByWithAggregationInput> = __makeSchema_UserOrderByWithAggregationInput_schema() as unknown as z.ZodType<Prisma.UserOrderByWithAggregationInput>;
export const UserOrderByWithAggregationInputObjectZodSchema = __makeSchema_UserOrderByWithAggregationInput_schema();


// File: UserScalarWhereWithAggregatesInput.schema.ts

const userscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => UserScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => UserScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => UserScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => UserScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => UserScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  email: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  firstName: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  lastName: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  password: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  emailVerified: z.union([z.lazy(() => BoolWithAggregatesFilterObjectSchema), z.boolean()]).optional(),
  role: z.union([z.lazy(() => EnumUserRoleWithAggregatesFilterObjectSchema), UserRoleSchema]).optional(),
  status: z.union([z.lazy(() => EnumUserStatusWithAggregatesFilterObjectSchema), UserStatusSchema]).optional(),
  lastLoginAt: z.union([z.lazy(() => DateTimeNullableWithAggregatesFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  lastLoginIp: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const UserScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.UserScalarWhereWithAggregatesInput> = userscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.UserScalarWhereWithAggregatesInput>;
export const UserScalarWhereWithAggregatesInputObjectZodSchema = userscalarwherewithaggregatesinputSchema;


// File: VerificationWhereInput.schema.ts

const verificationwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => VerificationWhereInputObjectSchema), z.lazy(() => VerificationWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => VerificationWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => VerificationWhereInputObjectSchema), z.lazy(() => VerificationWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  hashedIdentifier: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  hashedValue: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  expiresAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const VerificationWhereInputObjectSchema: z.ZodType<Prisma.VerificationWhereInput> = verificationwhereinputSchema as unknown as z.ZodType<Prisma.VerificationWhereInput>;
export const VerificationWhereInputObjectZodSchema = verificationwhereinputSchema;


// File: VerificationOrderByWithRelationInput.schema.ts
const __makeSchema_VerificationOrderByWithRelationInput_schema = () => z.object({
  id: SortOrderSchema.optional(),
  hashedIdentifier: SortOrderSchema.optional(),
  hashedValue: SortOrderSchema.optional(),
  expiresAt: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const VerificationOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.VerificationOrderByWithRelationInput> = __makeSchema_VerificationOrderByWithRelationInput_schema() as unknown as z.ZodType<Prisma.VerificationOrderByWithRelationInput>;
export const VerificationOrderByWithRelationInputObjectZodSchema = __makeSchema_VerificationOrderByWithRelationInput_schema();


// File: VerificationWhereUniqueInput.schema.ts
const __makeSchema_VerificationWhereUniqueInput_schema = () => z.object({
  id: z.string().optional(),
  hashedIdentifier_hashedValue: z.lazy(() => VerificationHashedIdentifierHashedValueCompoundUniqueInputObjectSchema).optional()
}).strict();
export const VerificationWhereUniqueInputObjectSchema: z.ZodType<Prisma.VerificationWhereUniqueInput> = __makeSchema_VerificationWhereUniqueInput_schema() as unknown as z.ZodType<Prisma.VerificationWhereUniqueInput>;
export const VerificationWhereUniqueInputObjectZodSchema = __makeSchema_VerificationWhereUniqueInput_schema();


// File: VerificationOrderByWithAggregationInput.schema.ts
const __makeSchema_VerificationOrderByWithAggregationInput_schema = () => z.object({
  id: SortOrderSchema.optional(),
  hashedIdentifier: SortOrderSchema.optional(),
  hashedValue: SortOrderSchema.optional(),
  expiresAt: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  _count: z.lazy(() => VerificationCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => VerificationMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => VerificationMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const VerificationOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.VerificationOrderByWithAggregationInput> = __makeSchema_VerificationOrderByWithAggregationInput_schema() as unknown as z.ZodType<Prisma.VerificationOrderByWithAggregationInput>;
export const VerificationOrderByWithAggregationInputObjectZodSchema = __makeSchema_VerificationOrderByWithAggregationInput_schema();


// File: VerificationScalarWhereWithAggregatesInput.schema.ts

const verificationscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => VerificationScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => VerificationScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => VerificationScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => VerificationScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => VerificationScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  hashedIdentifier: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  hashedValue: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  expiresAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const VerificationScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.VerificationScalarWhereWithAggregatesInput> = verificationscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.VerificationScalarWhereWithAggregatesInput>;
export const VerificationScalarWhereWithAggregatesInputObjectZodSchema = verificationscalarwherewithaggregatesinputSchema;


// File: AccountCreateInput.schema.ts
const __makeSchema_AccountCreateInput_schema = () => z.object({
  id: z.string(),
  accountId: z.string(),
  providerId: z.string(),
  accessToken: z.string().optional().nullable(),
  refreshToken: z.string().optional().nullable(),
  accessTokenExpiresAt: z.coerce.date().optional().nullable(),
  refreshTokenExpiresAt: z.coerce.date().optional().nullable(),
  scope: z.string().optional().nullable(),
  idToken: z.string().optional().nullable(),
  password: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutAccountsInputObjectSchema)
}).strict();
export const AccountCreateInputObjectSchema: z.ZodType<Prisma.AccountCreateInput> = __makeSchema_AccountCreateInput_schema() as unknown as z.ZodType<Prisma.AccountCreateInput>;
export const AccountCreateInputObjectZodSchema = __makeSchema_AccountCreateInput_schema();


// File: AccountUncheckedCreateInput.schema.ts
const __makeSchema_AccountUncheckedCreateInput_schema = () => z.object({
  id: z.string(),
  userId: z.string(),
  accountId: z.string(),
  providerId: z.string(),
  accessToken: z.string().optional().nullable(),
  refreshToken: z.string().optional().nullable(),
  accessTokenExpiresAt: z.coerce.date().optional().nullable(),
  refreshTokenExpiresAt: z.coerce.date().optional().nullable(),
  scope: z.string().optional().nullable(),
  idToken: z.string().optional().nullable(),
  password: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional()
}).strict();
export const AccountUncheckedCreateInputObjectSchema: z.ZodType<Prisma.AccountUncheckedCreateInput> = __makeSchema_AccountUncheckedCreateInput_schema() as unknown as z.ZodType<Prisma.AccountUncheckedCreateInput>;
export const AccountUncheckedCreateInputObjectZodSchema = __makeSchema_AccountUncheckedCreateInput_schema();


// File: AccountUpdateInput.schema.ts
const __makeSchema_AccountUpdateInput_schema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  accountId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  providerId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  accessToken: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  refreshToken: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  accessTokenExpiresAt: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  refreshTokenExpiresAt: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  scope: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  idToken: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  password: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutAccountsNestedInputObjectSchema).optional()
}).strict();
export const AccountUpdateInputObjectSchema: z.ZodType<Prisma.AccountUpdateInput> = __makeSchema_AccountUpdateInput_schema() as unknown as z.ZodType<Prisma.AccountUpdateInput>;
export const AccountUpdateInputObjectZodSchema = __makeSchema_AccountUpdateInput_schema();


// File: AccountUncheckedUpdateInput.schema.ts
const __makeSchema_AccountUncheckedUpdateInput_schema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  userId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  accountId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  providerId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  accessToken: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  refreshToken: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  accessTokenExpiresAt: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  refreshTokenExpiresAt: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  scope: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  idToken: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  password: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const AccountUncheckedUpdateInputObjectSchema: z.ZodType<Prisma.AccountUncheckedUpdateInput> = __makeSchema_AccountUncheckedUpdateInput_schema() as unknown as z.ZodType<Prisma.AccountUncheckedUpdateInput>;
export const AccountUncheckedUpdateInputObjectZodSchema = __makeSchema_AccountUncheckedUpdateInput_schema();


// File: AccountCreateManyInput.schema.ts
const __makeSchema_AccountCreateManyInput_schema = () => z.object({
  id: z.string(),
  userId: z.string(),
  accountId: z.string(),
  providerId: z.string(),
  accessToken: z.string().optional().nullable(),
  refreshToken: z.string().optional().nullable(),
  accessTokenExpiresAt: z.coerce.date().optional().nullable(),
  refreshTokenExpiresAt: z.coerce.date().optional().nullable(),
  scope: z.string().optional().nullable(),
  idToken: z.string().optional().nullable(),
  password: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const AccountCreateManyInputObjectSchema: z.ZodType<Prisma.AccountCreateManyInput> = __makeSchema_AccountCreateManyInput_schema() as unknown as z.ZodType<Prisma.AccountCreateManyInput>;
export const AccountCreateManyInputObjectZodSchema = __makeSchema_AccountCreateManyInput_schema();


// File: AccountUpdateManyMutationInput.schema.ts
const __makeSchema_AccountUpdateManyMutationInput_schema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  accountId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  providerId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  accessToken: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  refreshToken: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  accessTokenExpiresAt: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  refreshTokenExpiresAt: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  scope: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  idToken: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  password: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const AccountUpdateManyMutationInputObjectSchema: z.ZodType<Prisma.AccountUpdateManyMutationInput> = __makeSchema_AccountUpdateManyMutationInput_schema() as unknown as z.ZodType<Prisma.AccountUpdateManyMutationInput>;
export const AccountUpdateManyMutationInputObjectZodSchema = __makeSchema_AccountUpdateManyMutationInput_schema();


// File: AccountUncheckedUpdateManyInput.schema.ts
const __makeSchema_AccountUncheckedUpdateManyInput_schema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  userId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  accountId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  providerId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  accessToken: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  refreshToken: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  accessTokenExpiresAt: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  refreshTokenExpiresAt: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  scope: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  idToken: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  password: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const AccountUncheckedUpdateManyInputObjectSchema: z.ZodType<Prisma.AccountUncheckedUpdateManyInput> = __makeSchema_AccountUncheckedUpdateManyInput_schema() as unknown as z.ZodType<Prisma.AccountUncheckedUpdateManyInput>;
export const AccountUncheckedUpdateManyInputObjectZodSchema = __makeSchema_AccountUncheckedUpdateManyInput_schema();


// File: ContactCreateInput.schema.ts
const __makeSchema_ContactCreateInput_schema = () => z.object({
  id: z.string().optional(),
  email: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  createdAt: z.coerce.date().optional()
}).strict();
export const ContactCreateInputObjectSchema: z.ZodType<Prisma.ContactCreateInput> = __makeSchema_ContactCreateInput_schema() as unknown as z.ZodType<Prisma.ContactCreateInput>;
export const ContactCreateInputObjectZodSchema = __makeSchema_ContactCreateInput_schema();


// File: ContactUncheckedCreateInput.schema.ts
const __makeSchema_ContactUncheckedCreateInput_schema = () => z.object({
  id: z.string().optional(),
  email: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  createdAt: z.coerce.date().optional()
}).strict();
export const ContactUncheckedCreateInputObjectSchema: z.ZodType<Prisma.ContactUncheckedCreateInput> = __makeSchema_ContactUncheckedCreateInput_schema() as unknown as z.ZodType<Prisma.ContactUncheckedCreateInput>;
export const ContactUncheckedCreateInputObjectZodSchema = __makeSchema_ContactUncheckedCreateInput_schema();


// File: ContactUpdateInput.schema.ts
const __makeSchema_ContactUpdateInput_schema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  email: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  firstName: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  lastName: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const ContactUpdateInputObjectSchema: z.ZodType<Prisma.ContactUpdateInput> = __makeSchema_ContactUpdateInput_schema() as unknown as z.ZodType<Prisma.ContactUpdateInput>;
export const ContactUpdateInputObjectZodSchema = __makeSchema_ContactUpdateInput_schema();


// File: ContactUncheckedUpdateInput.schema.ts
const __makeSchema_ContactUncheckedUpdateInput_schema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  email: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  firstName: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  lastName: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const ContactUncheckedUpdateInputObjectSchema: z.ZodType<Prisma.ContactUncheckedUpdateInput> = __makeSchema_ContactUncheckedUpdateInput_schema() as unknown as z.ZodType<Prisma.ContactUncheckedUpdateInput>;
export const ContactUncheckedUpdateInputObjectZodSchema = __makeSchema_ContactUncheckedUpdateInput_schema();


// File: ContactCreateManyInput.schema.ts
const __makeSchema_ContactCreateManyInput_schema = () => z.object({
  id: z.string().optional(),
  email: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  createdAt: z.coerce.date().optional()
}).strict();
export const ContactCreateManyInputObjectSchema: z.ZodType<Prisma.ContactCreateManyInput> = __makeSchema_ContactCreateManyInput_schema() as unknown as z.ZodType<Prisma.ContactCreateManyInput>;
export const ContactCreateManyInputObjectZodSchema = __makeSchema_ContactCreateManyInput_schema();


// File: ContactUpdateManyMutationInput.schema.ts
const __makeSchema_ContactUpdateManyMutationInput_schema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  email: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  firstName: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  lastName: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const ContactUpdateManyMutationInputObjectSchema: z.ZodType<Prisma.ContactUpdateManyMutationInput> = __makeSchema_ContactUpdateManyMutationInput_schema() as unknown as z.ZodType<Prisma.ContactUpdateManyMutationInput>;
export const ContactUpdateManyMutationInputObjectZodSchema = __makeSchema_ContactUpdateManyMutationInput_schema();


// File: ContactUncheckedUpdateManyInput.schema.ts
const __makeSchema_ContactUncheckedUpdateManyInput_schema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  email: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  firstName: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  lastName: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const ContactUncheckedUpdateManyInputObjectSchema: z.ZodType<Prisma.ContactUncheckedUpdateManyInput> = __makeSchema_ContactUncheckedUpdateManyInput_schema() as unknown as z.ZodType<Prisma.ContactUncheckedUpdateManyInput>;
export const ContactUncheckedUpdateManyInputObjectZodSchema = __makeSchema_ContactUncheckedUpdateManyInput_schema();


// File: MediaCreateInput.schema.ts
const __makeSchema_MediaCreateInput_schema = () => z.object({
  id: z.string().optional(),
  url: z.string(),
  key: z.string(),
  mimeType: z.string(),
  size: z.number().int(),
  createdAt: z.coerce.date().optional(),
  avatarUser: z.lazy(() => UserCreateNestedOneWithoutAvatarInputObjectSchema).optional(),
  coverUser: z.lazy(() => UserCreateNestedOneWithoutCoverImageInputObjectSchema).optional()
}).strict();
export const MediaCreateInputObjectSchema: z.ZodType<Prisma.MediaCreateInput> = __makeSchema_MediaCreateInput_schema() as unknown as z.ZodType<Prisma.MediaCreateInput>;
export const MediaCreateInputObjectZodSchema = __makeSchema_MediaCreateInput_schema();


// File: MediaUncheckedCreateInput.schema.ts
const __makeSchema_MediaUncheckedCreateInput_schema = () => z.object({
  id: z.string().optional(),
  url: z.string(),
  key: z.string(),
  mimeType: z.string(),
  size: z.number().int(),
  avatarUserId: z.string().optional().nullable(),
  coverUserId: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional()
}).strict();
export const MediaUncheckedCreateInputObjectSchema: z.ZodType<Prisma.MediaUncheckedCreateInput> = __makeSchema_MediaUncheckedCreateInput_schema() as unknown as z.ZodType<Prisma.MediaUncheckedCreateInput>;
export const MediaUncheckedCreateInputObjectZodSchema = __makeSchema_MediaUncheckedCreateInput_schema();


// File: MediaUpdateInput.schema.ts
const __makeSchema_MediaUpdateInput_schema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  url: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  key: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  mimeType: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  size: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  avatarUser: z.lazy(() => UserUpdateOneWithoutAvatarNestedInputObjectSchema).optional(),
  coverUser: z.lazy(() => UserUpdateOneWithoutCoverImageNestedInputObjectSchema).optional()
}).strict();
export const MediaUpdateInputObjectSchema: z.ZodType<Prisma.MediaUpdateInput> = __makeSchema_MediaUpdateInput_schema() as unknown as z.ZodType<Prisma.MediaUpdateInput>;
export const MediaUpdateInputObjectZodSchema = __makeSchema_MediaUpdateInput_schema();


// File: MediaUncheckedUpdateInput.schema.ts
const __makeSchema_MediaUncheckedUpdateInput_schema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  url: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  key: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  mimeType: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  size: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  avatarUserId: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  coverUserId: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const MediaUncheckedUpdateInputObjectSchema: z.ZodType<Prisma.MediaUncheckedUpdateInput> = __makeSchema_MediaUncheckedUpdateInput_schema() as unknown as z.ZodType<Prisma.MediaUncheckedUpdateInput>;
export const MediaUncheckedUpdateInputObjectZodSchema = __makeSchema_MediaUncheckedUpdateInput_schema();


// File: MediaCreateManyInput.schema.ts
const __makeSchema_MediaCreateManyInput_schema = () => z.object({
  id: z.string().optional(),
  url: z.string(),
  key: z.string(),
  mimeType: z.string(),
  size: z.number().int(),
  avatarUserId: z.string().optional().nullable(),
  coverUserId: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional()
}).strict();
export const MediaCreateManyInputObjectSchema: z.ZodType<Prisma.MediaCreateManyInput> = __makeSchema_MediaCreateManyInput_schema() as unknown as z.ZodType<Prisma.MediaCreateManyInput>;
export const MediaCreateManyInputObjectZodSchema = __makeSchema_MediaCreateManyInput_schema();


// File: MediaUpdateManyMutationInput.schema.ts
const __makeSchema_MediaUpdateManyMutationInput_schema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  url: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  key: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  mimeType: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  size: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const MediaUpdateManyMutationInputObjectSchema: z.ZodType<Prisma.MediaUpdateManyMutationInput> = __makeSchema_MediaUpdateManyMutationInput_schema() as unknown as z.ZodType<Prisma.MediaUpdateManyMutationInput>;
export const MediaUpdateManyMutationInputObjectZodSchema = __makeSchema_MediaUpdateManyMutationInput_schema();


// File: MediaUncheckedUpdateManyInput.schema.ts
const __makeSchema_MediaUncheckedUpdateManyInput_schema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  url: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  key: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  mimeType: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  size: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  avatarUserId: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  coverUserId: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const MediaUncheckedUpdateManyInputObjectSchema: z.ZodType<Prisma.MediaUncheckedUpdateManyInput> = __makeSchema_MediaUncheckedUpdateManyInput_schema() as unknown as z.ZodType<Prisma.MediaUncheckedUpdateManyInput>;
export const MediaUncheckedUpdateManyInputObjectZodSchema = __makeSchema_MediaUncheckedUpdateManyInput_schema();


// File: ProjectCreateInput.schema.ts
const __makeSchema_ProjectCreateInput_schema = () => z.object({
  slug: z.string(),
  name: z.string(),
  weeks: z.number().int(),
  link: z.string().optional().nullable(),
  cover: z.string(),
  video: z.string().optional().nullable(),
  gallery: z.union([z.lazy(() => ProjectCreategalleryInputObjectSchema), z.string().array()]).optional(),
  description: z.string(),
  techStack: z.union([z.lazy(() => ProjectCreatetechStackInputObjectSchema), z.string().array()]).optional(),
  date: z.coerce.date(),
  services: z.union([z.lazy(() => ProjectCreateservicesInputObjectSchema), z.string().array()]).optional(),
  team: z.union([z.lazy(() => ProjectCreateteamInputObjectSchema), TeamMembersSchema.array()]).optional(),
  notes: z.union([z.lazy(() => ProjectCreatenotesInputObjectSchema), z.string().array()]).optional(),
  createdAt: z.coerce.date().optional()
}).strict();
export const ProjectCreateInputObjectSchema: z.ZodType<Prisma.ProjectCreateInput> = __makeSchema_ProjectCreateInput_schema() as unknown as z.ZodType<Prisma.ProjectCreateInput>;
export const ProjectCreateInputObjectZodSchema = __makeSchema_ProjectCreateInput_schema();


// File: ProjectUncheckedCreateInput.schema.ts
const __makeSchema_ProjectUncheckedCreateInput_schema = () => z.object({
  id: z.number().int().optional(),
  slug: z.string(),
  name: z.string(),
  weeks: z.number().int(),
  link: z.string().optional().nullable(),
  cover: z.string(),
  video: z.string().optional().nullable(),
  gallery: z.union([z.lazy(() => ProjectCreategalleryInputObjectSchema), z.string().array()]).optional(),
  description: z.string(),
  techStack: z.union([z.lazy(() => ProjectCreatetechStackInputObjectSchema), z.string().array()]).optional(),
  date: z.coerce.date(),
  services: z.union([z.lazy(() => ProjectCreateservicesInputObjectSchema), z.string().array()]).optional(),
  team: z.union([z.lazy(() => ProjectCreateteamInputObjectSchema), TeamMembersSchema.array()]).optional(),
  notes: z.union([z.lazy(() => ProjectCreatenotesInputObjectSchema), z.string().array()]).optional(),
  createdAt: z.coerce.date().optional()
}).strict();
export const ProjectUncheckedCreateInputObjectSchema: z.ZodType<Prisma.ProjectUncheckedCreateInput> = __makeSchema_ProjectUncheckedCreateInput_schema() as unknown as z.ZodType<Prisma.ProjectUncheckedCreateInput>;
export const ProjectUncheckedCreateInputObjectZodSchema = __makeSchema_ProjectUncheckedCreateInput_schema();


// File: ProjectUpdateInput.schema.ts
const __makeSchema_ProjectUpdateInput_schema = () => z.object({
  slug: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  weeks: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  link: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  cover: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  video: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  gallery: z.union([z.lazy(() => ProjectUpdategalleryInputObjectSchema), z.string().array()]).optional(),
  description: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  techStack: z.union([z.lazy(() => ProjectUpdatetechStackInputObjectSchema), z.string().array()]).optional(),
  date: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  services: z.union([z.lazy(() => ProjectUpdateservicesInputObjectSchema), z.string().array()]).optional(),
  team: z.union([z.lazy(() => ProjectUpdateteamInputObjectSchema), TeamMembersSchema.array()]).optional(),
  notes: z.union([z.lazy(() => ProjectUpdatenotesInputObjectSchema), z.string().array()]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const ProjectUpdateInputObjectSchema: z.ZodType<Prisma.ProjectUpdateInput> = __makeSchema_ProjectUpdateInput_schema() as unknown as z.ZodType<Prisma.ProjectUpdateInput>;
export const ProjectUpdateInputObjectZodSchema = __makeSchema_ProjectUpdateInput_schema();


// File: ProjectUncheckedUpdateInput.schema.ts
const __makeSchema_ProjectUncheckedUpdateInput_schema = () => z.object({
  id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  slug: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  weeks: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  link: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  cover: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  video: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  gallery: z.union([z.lazy(() => ProjectUpdategalleryInputObjectSchema), z.string().array()]).optional(),
  description: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  techStack: z.union([z.lazy(() => ProjectUpdatetechStackInputObjectSchema), z.string().array()]).optional(),
  date: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  services: z.union([z.lazy(() => ProjectUpdateservicesInputObjectSchema), z.string().array()]).optional(),
  team: z.union([z.lazy(() => ProjectUpdateteamInputObjectSchema), TeamMembersSchema.array()]).optional(),
  notes: z.union([z.lazy(() => ProjectUpdatenotesInputObjectSchema), z.string().array()]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const ProjectUncheckedUpdateInputObjectSchema: z.ZodType<Prisma.ProjectUncheckedUpdateInput> = __makeSchema_ProjectUncheckedUpdateInput_schema() as unknown as z.ZodType<Prisma.ProjectUncheckedUpdateInput>;
export const ProjectUncheckedUpdateInputObjectZodSchema = __makeSchema_ProjectUncheckedUpdateInput_schema();


// File: ProjectCreateManyInput.schema.ts
const __makeSchema_ProjectCreateManyInput_schema = () => z.object({
  id: z.number().int().optional(),
  slug: z.string(),
  name: z.string(),
  weeks: z.number().int(),
  link: z.string().optional().nullable(),
  cover: z.string(),
  video: z.string().optional().nullable(),
  gallery: z.union([z.lazy(() => ProjectCreategalleryInputObjectSchema), z.string().array()]).optional(),
  description: z.string(),
  techStack: z.union([z.lazy(() => ProjectCreatetechStackInputObjectSchema), z.string().array()]).optional(),
  date: z.coerce.date(),
  services: z.union([z.lazy(() => ProjectCreateservicesInputObjectSchema), z.string().array()]).optional(),
  team: z.union([z.lazy(() => ProjectCreateteamInputObjectSchema), TeamMembersSchema.array()]).optional(),
  notes: z.union([z.lazy(() => ProjectCreatenotesInputObjectSchema), z.string().array()]).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const ProjectCreateManyInputObjectSchema: z.ZodType<Prisma.ProjectCreateManyInput> = __makeSchema_ProjectCreateManyInput_schema() as unknown as z.ZodType<Prisma.ProjectCreateManyInput>;
export const ProjectCreateManyInputObjectZodSchema = __makeSchema_ProjectCreateManyInput_schema();


// File: ProjectUpdateManyMutationInput.schema.ts
const __makeSchema_ProjectUpdateManyMutationInput_schema = () => z.object({
  slug: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  weeks: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  link: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  cover: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  video: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  gallery: z.union([z.lazy(() => ProjectUpdategalleryInputObjectSchema), z.string().array()]).optional(),
  description: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  techStack: z.union([z.lazy(() => ProjectUpdatetechStackInputObjectSchema), z.string().array()]).optional(),
  date: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  services: z.union([z.lazy(() => ProjectUpdateservicesInputObjectSchema), z.string().array()]).optional(),
  team: z.union([z.lazy(() => ProjectUpdateteamInputObjectSchema), TeamMembersSchema.array()]).optional(),
  notes: z.union([z.lazy(() => ProjectUpdatenotesInputObjectSchema), z.string().array()]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const ProjectUpdateManyMutationInputObjectSchema: z.ZodType<Prisma.ProjectUpdateManyMutationInput> = __makeSchema_ProjectUpdateManyMutationInput_schema() as unknown as z.ZodType<Prisma.ProjectUpdateManyMutationInput>;
export const ProjectUpdateManyMutationInputObjectZodSchema = __makeSchema_ProjectUpdateManyMutationInput_schema();


// File: ProjectUncheckedUpdateManyInput.schema.ts
const __makeSchema_ProjectUncheckedUpdateManyInput_schema = () => z.object({
  id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  slug: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  weeks: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  link: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  cover: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  video: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  gallery: z.union([z.lazy(() => ProjectUpdategalleryInputObjectSchema), z.string().array()]).optional(),
  description: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  techStack: z.union([z.lazy(() => ProjectUpdatetechStackInputObjectSchema), z.string().array()]).optional(),
  date: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  services: z.union([z.lazy(() => ProjectUpdateservicesInputObjectSchema), z.string().array()]).optional(),
  team: z.union([z.lazy(() => ProjectUpdateteamInputObjectSchema), TeamMembersSchema.array()]).optional(),
  notes: z.union([z.lazy(() => ProjectUpdatenotesInputObjectSchema), z.string().array()]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const ProjectUncheckedUpdateManyInputObjectSchema: z.ZodType<Prisma.ProjectUncheckedUpdateManyInput> = __makeSchema_ProjectUncheckedUpdateManyInput_schema() as unknown as z.ZodType<Prisma.ProjectUncheckedUpdateManyInput>;
export const ProjectUncheckedUpdateManyInputObjectZodSchema = __makeSchema_ProjectUncheckedUpdateManyInput_schema();


// File: SessionCreateInput.schema.ts
const __makeSchema_SessionCreateInput_schema = () => z.object({
  id: z.string(),
  token: z.string(),
  expiresAt: z.coerce.date(),
  ipAddress: z.string().optional().nullable(),
  userAgent: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutSessionsInputObjectSchema)
}).strict();
export const SessionCreateInputObjectSchema: z.ZodType<Prisma.SessionCreateInput> = __makeSchema_SessionCreateInput_schema() as unknown as z.ZodType<Prisma.SessionCreateInput>;
export const SessionCreateInputObjectZodSchema = __makeSchema_SessionCreateInput_schema();


// File: SessionUncheckedCreateInput.schema.ts
const __makeSchema_SessionUncheckedCreateInput_schema = () => z.object({
  id: z.string(),
  userId: z.string(),
  token: z.string(),
  expiresAt: z.coerce.date(),
  ipAddress: z.string().optional().nullable(),
  userAgent: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional()
}).strict();
export const SessionUncheckedCreateInputObjectSchema: z.ZodType<Prisma.SessionUncheckedCreateInput> = __makeSchema_SessionUncheckedCreateInput_schema() as unknown as z.ZodType<Prisma.SessionUncheckedCreateInput>;
export const SessionUncheckedCreateInputObjectZodSchema = __makeSchema_SessionUncheckedCreateInput_schema();


// File: SessionUpdateInput.schema.ts
const __makeSchema_SessionUpdateInput_schema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  token: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  expiresAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  ipAddress: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  userAgent: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutSessionsNestedInputObjectSchema).optional()
}).strict();
export const SessionUpdateInputObjectSchema: z.ZodType<Prisma.SessionUpdateInput> = __makeSchema_SessionUpdateInput_schema() as unknown as z.ZodType<Prisma.SessionUpdateInput>;
export const SessionUpdateInputObjectZodSchema = __makeSchema_SessionUpdateInput_schema();


// File: SessionUncheckedUpdateInput.schema.ts
const __makeSchema_SessionUncheckedUpdateInput_schema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  userId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  token: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  expiresAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  ipAddress: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  userAgent: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const SessionUncheckedUpdateInputObjectSchema: z.ZodType<Prisma.SessionUncheckedUpdateInput> = __makeSchema_SessionUncheckedUpdateInput_schema() as unknown as z.ZodType<Prisma.SessionUncheckedUpdateInput>;
export const SessionUncheckedUpdateInputObjectZodSchema = __makeSchema_SessionUncheckedUpdateInput_schema();


// File: SessionCreateManyInput.schema.ts
const __makeSchema_SessionCreateManyInput_schema = () => z.object({
  id: z.string(),
  userId: z.string(),
  token: z.string(),
  expiresAt: z.coerce.date(),
  ipAddress: z.string().optional().nullable(),
  userAgent: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const SessionCreateManyInputObjectSchema: z.ZodType<Prisma.SessionCreateManyInput> = __makeSchema_SessionCreateManyInput_schema() as unknown as z.ZodType<Prisma.SessionCreateManyInput>;
export const SessionCreateManyInputObjectZodSchema = __makeSchema_SessionCreateManyInput_schema();


// File: SessionUpdateManyMutationInput.schema.ts
const __makeSchema_SessionUpdateManyMutationInput_schema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  token: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  expiresAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  ipAddress: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  userAgent: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const SessionUpdateManyMutationInputObjectSchema: z.ZodType<Prisma.SessionUpdateManyMutationInput> = __makeSchema_SessionUpdateManyMutationInput_schema() as unknown as z.ZodType<Prisma.SessionUpdateManyMutationInput>;
export const SessionUpdateManyMutationInputObjectZodSchema = __makeSchema_SessionUpdateManyMutationInput_schema();


// File: SessionUncheckedUpdateManyInput.schema.ts
const __makeSchema_SessionUncheckedUpdateManyInput_schema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  userId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  token: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  expiresAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  ipAddress: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  userAgent: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const SessionUncheckedUpdateManyInputObjectSchema: z.ZodType<Prisma.SessionUncheckedUpdateManyInput> = __makeSchema_SessionUncheckedUpdateManyInput_schema() as unknown as z.ZodType<Prisma.SessionUncheckedUpdateManyInput>;
export const SessionUncheckedUpdateManyInputObjectZodSchema = __makeSchema_SessionUncheckedUpdateManyInput_schema();


// File: UserCreateInput.schema.ts
const __makeSchema_UserCreateInput_schema = () => z.object({
  id: z.string().optional(),
  email: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  password: z.string(),
  emailVerified: z.boolean().optional(),
  role: UserRoleSchema.optional(),
  status: UserStatusSchema.optional(),
  lastLoginAt: z.coerce.date().optional().nullable(),
  lastLoginIp: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  avatar: z.lazy(() => MediaCreateNestedOneWithoutAvatarUserInputObjectSchema).optional(),
  coverImage: z.lazy(() => MediaCreateNestedOneWithoutCoverUserInputObjectSchema).optional(),
  sessions: z.lazy(() => SessionCreateNestedManyWithoutUserInputObjectSchema).optional(),
  accounts: z.lazy(() => AccountCreateNestedManyWithoutUserInputObjectSchema).optional()
}).strict();
export const UserCreateInputObjectSchema: z.ZodType<Prisma.UserCreateInput> = __makeSchema_UserCreateInput_schema() as unknown as z.ZodType<Prisma.UserCreateInput>;
export const UserCreateInputObjectZodSchema = __makeSchema_UserCreateInput_schema();


// File: UserUncheckedCreateInput.schema.ts
const __makeSchema_UserUncheckedCreateInput_schema = () => z.object({
  id: z.string().optional(),
  email: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  password: z.string(),
  emailVerified: z.boolean().optional(),
  role: UserRoleSchema.optional(),
  status: UserStatusSchema.optional(),
  lastLoginAt: z.coerce.date().optional().nullable(),
  lastLoginIp: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  avatar: z.lazy(() => MediaUncheckedCreateNestedOneWithoutAvatarUserInputObjectSchema).optional(),
  coverImage: z.lazy(() => MediaUncheckedCreateNestedOneWithoutCoverUserInputObjectSchema).optional(),
  sessions: z.lazy(() => SessionUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional(),
  accounts: z.lazy(() => AccountUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional()
}).strict();
export const UserUncheckedCreateInputObjectSchema: z.ZodType<Prisma.UserUncheckedCreateInput> = __makeSchema_UserUncheckedCreateInput_schema() as unknown as z.ZodType<Prisma.UserUncheckedCreateInput>;
export const UserUncheckedCreateInputObjectZodSchema = __makeSchema_UserUncheckedCreateInput_schema();


// File: UserUpdateInput.schema.ts
const __makeSchema_UserUpdateInput_schema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  email: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  firstName: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  lastName: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  password: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  emailVerified: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  role: z.union([UserRoleSchema, z.lazy(() => EnumUserRoleFieldUpdateOperationsInputObjectSchema)]).optional(),
  status: z.union([UserStatusSchema, z.lazy(() => EnumUserStatusFieldUpdateOperationsInputObjectSchema)]).optional(),
  lastLoginAt: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  lastLoginIp: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  avatar: z.lazy(() => MediaUpdateOneWithoutAvatarUserNestedInputObjectSchema).optional(),
  coverImage: z.lazy(() => MediaUpdateOneWithoutCoverUserNestedInputObjectSchema).optional(),
  sessions: z.lazy(() => SessionUpdateManyWithoutUserNestedInputObjectSchema).optional(),
  accounts: z.lazy(() => AccountUpdateManyWithoutUserNestedInputObjectSchema).optional()
}).strict();
export const UserUpdateInputObjectSchema: z.ZodType<Prisma.UserUpdateInput> = __makeSchema_UserUpdateInput_schema() as unknown as z.ZodType<Prisma.UserUpdateInput>;
export const UserUpdateInputObjectZodSchema = __makeSchema_UserUpdateInput_schema();


// File: UserUncheckedUpdateInput.schema.ts
const __makeSchema_UserUncheckedUpdateInput_schema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  email: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  firstName: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  lastName: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  password: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  emailVerified: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  role: z.union([UserRoleSchema, z.lazy(() => EnumUserRoleFieldUpdateOperationsInputObjectSchema)]).optional(),
  status: z.union([UserStatusSchema, z.lazy(() => EnumUserStatusFieldUpdateOperationsInputObjectSchema)]).optional(),
  lastLoginAt: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  lastLoginIp: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  avatar: z.lazy(() => MediaUncheckedUpdateOneWithoutAvatarUserNestedInputObjectSchema).optional(),
  coverImage: z.lazy(() => MediaUncheckedUpdateOneWithoutCoverUserNestedInputObjectSchema).optional(),
  sessions: z.lazy(() => SessionUncheckedUpdateManyWithoutUserNestedInputObjectSchema).optional(),
  accounts: z.lazy(() => AccountUncheckedUpdateManyWithoutUserNestedInputObjectSchema).optional()
}).strict();
export const UserUncheckedUpdateInputObjectSchema: z.ZodType<Prisma.UserUncheckedUpdateInput> = __makeSchema_UserUncheckedUpdateInput_schema() as unknown as z.ZodType<Prisma.UserUncheckedUpdateInput>;
export const UserUncheckedUpdateInputObjectZodSchema = __makeSchema_UserUncheckedUpdateInput_schema();


// File: UserCreateManyInput.schema.ts
const __makeSchema_UserCreateManyInput_schema = () => z.object({
  id: z.string().optional(),
  email: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  password: z.string(),
  emailVerified: z.boolean().optional(),
  role: UserRoleSchema.optional(),
  status: UserStatusSchema.optional(),
  lastLoginAt: z.coerce.date().optional().nullable(),
  lastLoginIp: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const UserCreateManyInputObjectSchema: z.ZodType<Prisma.UserCreateManyInput> = __makeSchema_UserCreateManyInput_schema() as unknown as z.ZodType<Prisma.UserCreateManyInput>;
export const UserCreateManyInputObjectZodSchema = __makeSchema_UserCreateManyInput_schema();


// File: UserUpdateManyMutationInput.schema.ts
const __makeSchema_UserUpdateManyMutationInput_schema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  email: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  firstName: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  lastName: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  password: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  emailVerified: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  role: z.union([UserRoleSchema, z.lazy(() => EnumUserRoleFieldUpdateOperationsInputObjectSchema)]).optional(),
  status: z.union([UserStatusSchema, z.lazy(() => EnumUserStatusFieldUpdateOperationsInputObjectSchema)]).optional(),
  lastLoginAt: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  lastLoginIp: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const UserUpdateManyMutationInputObjectSchema: z.ZodType<Prisma.UserUpdateManyMutationInput> = __makeSchema_UserUpdateManyMutationInput_schema() as unknown as z.ZodType<Prisma.UserUpdateManyMutationInput>;
export const UserUpdateManyMutationInputObjectZodSchema = __makeSchema_UserUpdateManyMutationInput_schema();


// File: UserUncheckedUpdateManyInput.schema.ts
const __makeSchema_UserUncheckedUpdateManyInput_schema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  email: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  firstName: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  lastName: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  password: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  emailVerified: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  role: z.union([UserRoleSchema, z.lazy(() => EnumUserRoleFieldUpdateOperationsInputObjectSchema)]).optional(),
  status: z.union([UserStatusSchema, z.lazy(() => EnumUserStatusFieldUpdateOperationsInputObjectSchema)]).optional(),
  lastLoginAt: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  lastLoginIp: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const UserUncheckedUpdateManyInputObjectSchema: z.ZodType<Prisma.UserUncheckedUpdateManyInput> = __makeSchema_UserUncheckedUpdateManyInput_schema() as unknown as z.ZodType<Prisma.UserUncheckedUpdateManyInput>;
export const UserUncheckedUpdateManyInputObjectZodSchema = __makeSchema_UserUncheckedUpdateManyInput_schema();


// File: VerificationCreateInput.schema.ts
const __makeSchema_VerificationCreateInput_schema = () => z.object({
  id: z.string(),
  hashedIdentifier: z.string(),
  hashedValue: z.string(),
  expiresAt: z.coerce.date(),
  createdAt: z.coerce.date().optional()
}).strict();
export const VerificationCreateInputObjectSchema: z.ZodType<Prisma.VerificationCreateInput> = __makeSchema_VerificationCreateInput_schema() as unknown as z.ZodType<Prisma.VerificationCreateInput>;
export const VerificationCreateInputObjectZodSchema = __makeSchema_VerificationCreateInput_schema();


// File: VerificationUncheckedCreateInput.schema.ts
const __makeSchema_VerificationUncheckedCreateInput_schema = () => z.object({
  id: z.string(),
  hashedIdentifier: z.string(),
  hashedValue: z.string(),
  expiresAt: z.coerce.date(),
  createdAt: z.coerce.date().optional()
}).strict();
export const VerificationUncheckedCreateInputObjectSchema: z.ZodType<Prisma.VerificationUncheckedCreateInput> = __makeSchema_VerificationUncheckedCreateInput_schema() as unknown as z.ZodType<Prisma.VerificationUncheckedCreateInput>;
export const VerificationUncheckedCreateInputObjectZodSchema = __makeSchema_VerificationUncheckedCreateInput_schema();


// File: VerificationUpdateInput.schema.ts
const __makeSchema_VerificationUpdateInput_schema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  hashedIdentifier: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  hashedValue: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  expiresAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const VerificationUpdateInputObjectSchema: z.ZodType<Prisma.VerificationUpdateInput> = __makeSchema_VerificationUpdateInput_schema() as unknown as z.ZodType<Prisma.VerificationUpdateInput>;
export const VerificationUpdateInputObjectZodSchema = __makeSchema_VerificationUpdateInput_schema();


// File: VerificationUncheckedUpdateInput.schema.ts
const __makeSchema_VerificationUncheckedUpdateInput_schema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  hashedIdentifier: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  hashedValue: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  expiresAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const VerificationUncheckedUpdateInputObjectSchema: z.ZodType<Prisma.VerificationUncheckedUpdateInput> = __makeSchema_VerificationUncheckedUpdateInput_schema() as unknown as z.ZodType<Prisma.VerificationUncheckedUpdateInput>;
export const VerificationUncheckedUpdateInputObjectZodSchema = __makeSchema_VerificationUncheckedUpdateInput_schema();


// File: VerificationCreateManyInput.schema.ts
const __makeSchema_VerificationCreateManyInput_schema = () => z.object({
  id: z.string(),
  hashedIdentifier: z.string(),
  hashedValue: z.string(),
  expiresAt: z.coerce.date(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const VerificationCreateManyInputObjectSchema: z.ZodType<Prisma.VerificationCreateManyInput> = __makeSchema_VerificationCreateManyInput_schema() as unknown as z.ZodType<Prisma.VerificationCreateManyInput>;
export const VerificationCreateManyInputObjectZodSchema = __makeSchema_VerificationCreateManyInput_schema();


// File: VerificationUpdateManyMutationInput.schema.ts
const __makeSchema_VerificationUpdateManyMutationInput_schema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  hashedIdentifier: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  hashedValue: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  expiresAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const VerificationUpdateManyMutationInputObjectSchema: z.ZodType<Prisma.VerificationUpdateManyMutationInput> = __makeSchema_VerificationUpdateManyMutationInput_schema() as unknown as z.ZodType<Prisma.VerificationUpdateManyMutationInput>;
export const VerificationUpdateManyMutationInputObjectZodSchema = __makeSchema_VerificationUpdateManyMutationInput_schema();


// File: VerificationUncheckedUpdateManyInput.schema.ts
const __makeSchema_VerificationUncheckedUpdateManyInput_schema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  hashedIdentifier: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  hashedValue: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  expiresAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const VerificationUncheckedUpdateManyInputObjectSchema: z.ZodType<Prisma.VerificationUncheckedUpdateManyInput> = __makeSchema_VerificationUncheckedUpdateManyInput_schema() as unknown as z.ZodType<Prisma.VerificationUncheckedUpdateManyInput>;
export const VerificationUncheckedUpdateManyInputObjectZodSchema = __makeSchema_VerificationUncheckedUpdateManyInput_schema();


// File: StringFilter.schema.ts
const __makeSchema_StringFilter_schema = () => z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: QueryModeSchema.optional(),
  not: z.union([z.string(), z.lazy(() => NestedStringFilterObjectSchema)]).optional()
}).strict();
export const StringFilterObjectSchema: z.ZodType<Prisma.StringFilter> = __makeSchema_StringFilter_schema() as unknown as z.ZodType<Prisma.StringFilter>;
export const StringFilterObjectZodSchema = __makeSchema_StringFilter_schema();


// File: StringNullableFilter.schema.ts
const __makeSchema_StringNullableFilter_schema = () => z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: QueryModeSchema.optional(),
  not: z.union([z.string(), z.lazy(() => NestedStringNullableFilterObjectSchema)]).optional().nullable()
}).strict();
export const StringNullableFilterObjectSchema: z.ZodType<Prisma.StringNullableFilter> = __makeSchema_StringNullableFilter_schema() as unknown as z.ZodType<Prisma.StringNullableFilter>;
export const StringNullableFilterObjectZodSchema = __makeSchema_StringNullableFilter_schema();


// File: DateTimeNullableFilter.schema.ts
const __makeSchema_DateTimeNullableFilter_schema = () => z.object({
  equals: z.date().optional().nullable(),
  in: z.union([z.date().array(), z.string().datetime().array()]).optional().nullable(),
  notIn: z.union([z.date().array(), z.string().datetime().array()]).optional().nullable(),
  lt: z.date().optional(),
  lte: z.date().optional(),
  gt: z.date().optional(),
  gte: z.date().optional(),
  not: z.union([z.date(), z.lazy(() => NestedDateTimeNullableFilterObjectSchema)]).optional().nullable()
}).strict();
export const DateTimeNullableFilterObjectSchema: z.ZodType<Prisma.DateTimeNullableFilter> = __makeSchema_DateTimeNullableFilter_schema() as unknown as z.ZodType<Prisma.DateTimeNullableFilter>;
export const DateTimeNullableFilterObjectZodSchema = __makeSchema_DateTimeNullableFilter_schema();


// File: DateTimeFilter.schema.ts
const __makeSchema_DateTimeFilter_schema = () => z.object({
  equals: z.date().optional(),
  in: z.union([z.date().array(), z.string().datetime().array()]).optional(),
  notIn: z.union([z.date().array(), z.string().datetime().array()]).optional(),
  lt: z.date().optional(),
  lte: z.date().optional(),
  gt: z.date().optional(),
  gte: z.date().optional(),
  not: z.union([z.date(), z.lazy(() => NestedDateTimeFilterObjectSchema)]).optional()
}).strict();
export const DateTimeFilterObjectSchema: z.ZodType<Prisma.DateTimeFilter> = __makeSchema_DateTimeFilter_schema() as unknown as z.ZodType<Prisma.DateTimeFilter>;
export const DateTimeFilterObjectZodSchema = __makeSchema_DateTimeFilter_schema();


// File: UserScalarRelationFilter.schema.ts
const __makeSchema_UserScalarRelationFilter_schema = () => z.object({
  is: z.lazy(() => UserWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict();
export const UserScalarRelationFilterObjectSchema: z.ZodType<Prisma.UserScalarRelationFilter> = __makeSchema_UserScalarRelationFilter_schema() as unknown as z.ZodType<Prisma.UserScalarRelationFilter>;
export const UserScalarRelationFilterObjectZodSchema = __makeSchema_UserScalarRelationFilter_schema();


// File: SortOrderInput.schema.ts
const __makeSchema_SortOrderInput_schema = () => z.object({
  sort: SortOrderSchema,
  nulls: NullsOrderSchema.optional()
}).strict();
export const SortOrderInputObjectSchema: z.ZodType<Prisma.SortOrderInput> = __makeSchema_SortOrderInput_schema() as unknown as z.ZodType<Prisma.SortOrderInput>;
export const SortOrderInputObjectZodSchema = __makeSchema_SortOrderInput_schema();


// File: AccountProviderIdAccountIdCompoundUniqueInput.schema.ts
const __makeSchema_AccountProviderIdAccountIdCompoundUniqueInput_schema = () => z.object({
  providerId: z.string(),
  accountId: z.string()
}).strict();
export const AccountProviderIdAccountIdCompoundUniqueInputObjectSchema: z.ZodType<Prisma.AccountProviderIdAccountIdCompoundUniqueInput> = __makeSchema_AccountProviderIdAccountIdCompoundUniqueInput_schema() as unknown as z.ZodType<Prisma.AccountProviderIdAccountIdCompoundUniqueInput>;
export const AccountProviderIdAccountIdCompoundUniqueInputObjectZodSchema = __makeSchema_AccountProviderIdAccountIdCompoundUniqueInput_schema();


// File: AccountCountOrderByAggregateInput.schema.ts
const __makeSchema_AccountCountOrderByAggregateInput_schema = () => z.object({
  id: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  accountId: SortOrderSchema.optional(),
  providerId: SortOrderSchema.optional(),
  accessToken: SortOrderSchema.optional(),
  refreshToken: SortOrderSchema.optional(),
  accessTokenExpiresAt: SortOrderSchema.optional(),
  refreshTokenExpiresAt: SortOrderSchema.optional(),
  scope: SortOrderSchema.optional(),
  idToken: SortOrderSchema.optional(),
  password: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const AccountCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.AccountCountOrderByAggregateInput> = __makeSchema_AccountCountOrderByAggregateInput_schema() as unknown as z.ZodType<Prisma.AccountCountOrderByAggregateInput>;
export const AccountCountOrderByAggregateInputObjectZodSchema = __makeSchema_AccountCountOrderByAggregateInput_schema();


// File: AccountMaxOrderByAggregateInput.schema.ts
const __makeSchema_AccountMaxOrderByAggregateInput_schema = () => z.object({
  id: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  accountId: SortOrderSchema.optional(),
  providerId: SortOrderSchema.optional(),
  accessToken: SortOrderSchema.optional(),
  refreshToken: SortOrderSchema.optional(),
  accessTokenExpiresAt: SortOrderSchema.optional(),
  refreshTokenExpiresAt: SortOrderSchema.optional(),
  scope: SortOrderSchema.optional(),
  idToken: SortOrderSchema.optional(),
  password: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const AccountMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.AccountMaxOrderByAggregateInput> = __makeSchema_AccountMaxOrderByAggregateInput_schema() as unknown as z.ZodType<Prisma.AccountMaxOrderByAggregateInput>;
export const AccountMaxOrderByAggregateInputObjectZodSchema = __makeSchema_AccountMaxOrderByAggregateInput_schema();


// File: AccountMinOrderByAggregateInput.schema.ts
const __makeSchema_AccountMinOrderByAggregateInput_schema = () => z.object({
  id: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  accountId: SortOrderSchema.optional(),
  providerId: SortOrderSchema.optional(),
  accessToken: SortOrderSchema.optional(),
  refreshToken: SortOrderSchema.optional(),
  accessTokenExpiresAt: SortOrderSchema.optional(),
  refreshTokenExpiresAt: SortOrderSchema.optional(),
  scope: SortOrderSchema.optional(),
  idToken: SortOrderSchema.optional(),
  password: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const AccountMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.AccountMinOrderByAggregateInput> = __makeSchema_AccountMinOrderByAggregateInput_schema() as unknown as z.ZodType<Prisma.AccountMinOrderByAggregateInput>;
export const AccountMinOrderByAggregateInputObjectZodSchema = __makeSchema_AccountMinOrderByAggregateInput_schema();


// File: StringWithAggregatesFilter.schema.ts
const __makeSchema_StringWithAggregatesFilter_schema = () => z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: QueryModeSchema.optional(),
  not: z.union([z.string(), z.lazy(() => NestedStringWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedStringFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedStringFilterObjectSchema).optional()
}).strict();
export const StringWithAggregatesFilterObjectSchema: z.ZodType<Prisma.StringWithAggregatesFilter> = __makeSchema_StringWithAggregatesFilter_schema() as unknown as z.ZodType<Prisma.StringWithAggregatesFilter>;
export const StringWithAggregatesFilterObjectZodSchema = __makeSchema_StringWithAggregatesFilter_schema();


// File: StringNullableWithAggregatesFilter.schema.ts
const __makeSchema_StringNullableWithAggregatesFilter_schema = () => z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: QueryModeSchema.optional(),
  not: z.union([z.string(), z.lazy(() => NestedStringNullableWithAggregatesFilterObjectSchema)]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedStringNullableFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedStringNullableFilterObjectSchema).optional()
}).strict();
export const StringNullableWithAggregatesFilterObjectSchema: z.ZodType<Prisma.StringNullableWithAggregatesFilter> = __makeSchema_StringNullableWithAggregatesFilter_schema() as unknown as z.ZodType<Prisma.StringNullableWithAggregatesFilter>;
export const StringNullableWithAggregatesFilterObjectZodSchema = __makeSchema_StringNullableWithAggregatesFilter_schema();


// File: DateTimeNullableWithAggregatesFilter.schema.ts
const __makeSchema_DateTimeNullableWithAggregatesFilter_schema = () => z.object({
  equals: z.date().optional().nullable(),
  in: z.union([z.date().array(), z.string().datetime().array()]).optional().nullable(),
  notIn: z.union([z.date().array(), z.string().datetime().array()]).optional().nullable(),
  lt: z.date().optional(),
  lte: z.date().optional(),
  gt: z.date().optional(),
  gte: z.date().optional(),
  not: z.union([z.date(), z.lazy(() => NestedDateTimeNullableWithAggregatesFilterObjectSchema)]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedDateTimeNullableFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedDateTimeNullableFilterObjectSchema).optional()
}).strict();
export const DateTimeNullableWithAggregatesFilterObjectSchema: z.ZodType<Prisma.DateTimeNullableWithAggregatesFilter> = __makeSchema_DateTimeNullableWithAggregatesFilter_schema() as unknown as z.ZodType<Prisma.DateTimeNullableWithAggregatesFilter>;
export const DateTimeNullableWithAggregatesFilterObjectZodSchema = __makeSchema_DateTimeNullableWithAggregatesFilter_schema();


// File: DateTimeWithAggregatesFilter.schema.ts
const __makeSchema_DateTimeWithAggregatesFilter_schema = () => z.object({
  equals: z.date().optional(),
  in: z.union([z.date().array(), z.string().datetime().array()]).optional(),
  notIn: z.union([z.date().array(), z.string().datetime().array()]).optional(),
  lt: z.date().optional(),
  lte: z.date().optional(),
  gt: z.date().optional(),
  gte: z.date().optional(),
  not: z.union([z.date(), z.lazy(() => NestedDateTimeWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedDateTimeFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedDateTimeFilterObjectSchema).optional()
}).strict();
export const DateTimeWithAggregatesFilterObjectSchema: z.ZodType<Prisma.DateTimeWithAggregatesFilter> = __makeSchema_DateTimeWithAggregatesFilter_schema() as unknown as z.ZodType<Prisma.DateTimeWithAggregatesFilter>;
export const DateTimeWithAggregatesFilterObjectZodSchema = __makeSchema_DateTimeWithAggregatesFilter_schema();


// File: ContactCountOrderByAggregateInput.schema.ts
const __makeSchema_ContactCountOrderByAggregateInput_schema = () => z.object({
  id: SortOrderSchema.optional(),
  email: SortOrderSchema.optional(),
  firstName: SortOrderSchema.optional(),
  lastName: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional()
}).strict();
export const ContactCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ContactCountOrderByAggregateInput> = __makeSchema_ContactCountOrderByAggregateInput_schema() as unknown as z.ZodType<Prisma.ContactCountOrderByAggregateInput>;
export const ContactCountOrderByAggregateInputObjectZodSchema = __makeSchema_ContactCountOrderByAggregateInput_schema();


// File: ContactMaxOrderByAggregateInput.schema.ts
const __makeSchema_ContactMaxOrderByAggregateInput_schema = () => z.object({
  id: SortOrderSchema.optional(),
  email: SortOrderSchema.optional(),
  firstName: SortOrderSchema.optional(),
  lastName: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional()
}).strict();
export const ContactMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ContactMaxOrderByAggregateInput> = __makeSchema_ContactMaxOrderByAggregateInput_schema() as unknown as z.ZodType<Prisma.ContactMaxOrderByAggregateInput>;
export const ContactMaxOrderByAggregateInputObjectZodSchema = __makeSchema_ContactMaxOrderByAggregateInput_schema();


// File: ContactMinOrderByAggregateInput.schema.ts
const __makeSchema_ContactMinOrderByAggregateInput_schema = () => z.object({
  id: SortOrderSchema.optional(),
  email: SortOrderSchema.optional(),
  firstName: SortOrderSchema.optional(),
  lastName: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional()
}).strict();
export const ContactMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ContactMinOrderByAggregateInput> = __makeSchema_ContactMinOrderByAggregateInput_schema() as unknown as z.ZodType<Prisma.ContactMinOrderByAggregateInput>;
export const ContactMinOrderByAggregateInputObjectZodSchema = __makeSchema_ContactMinOrderByAggregateInput_schema();


// File: IntFilter.schema.ts
const __makeSchema_IntFilter_schema = () => z.object({
  equals: z.number().int().optional(),
  in: z.number().int().array().optional(),
  notIn: z.number().int().array().optional(),
  lt: z.number().int().optional(),
  lte: z.number().int().optional(),
  gt: z.number().int().optional(),
  gte: z.number().int().optional(),
  not: z.union([z.number().int(), z.lazy(() => NestedIntFilterObjectSchema)]).optional()
}).strict();
export const IntFilterObjectSchema: z.ZodType<Prisma.IntFilter> = __makeSchema_IntFilter_schema() as unknown as z.ZodType<Prisma.IntFilter>;
export const IntFilterObjectZodSchema = __makeSchema_IntFilter_schema();


// File: UserNullableScalarRelationFilter.schema.ts
const __makeSchema_UserNullableScalarRelationFilter_schema = () => z.object({
  is: z.lazy(() => UserWhereInputObjectSchema).optional().nullable(),
  isNot: z.lazy(() => UserWhereInputObjectSchema).optional().nullable()
}).strict();
export const UserNullableScalarRelationFilterObjectSchema: z.ZodType<Prisma.UserNullableScalarRelationFilter> = __makeSchema_UserNullableScalarRelationFilter_schema() as unknown as z.ZodType<Prisma.UserNullableScalarRelationFilter>;
export const UserNullableScalarRelationFilterObjectZodSchema = __makeSchema_UserNullableScalarRelationFilter_schema();


// File: MediaCountOrderByAggregateInput.schema.ts
const __makeSchema_MediaCountOrderByAggregateInput_schema = () => z.object({
  id: SortOrderSchema.optional(),
  url: SortOrderSchema.optional(),
  key: SortOrderSchema.optional(),
  mimeType: SortOrderSchema.optional(),
  size: SortOrderSchema.optional(),
  avatarUserId: SortOrderSchema.optional(),
  coverUserId: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional()
}).strict();
export const MediaCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.MediaCountOrderByAggregateInput> = __makeSchema_MediaCountOrderByAggregateInput_schema() as unknown as z.ZodType<Prisma.MediaCountOrderByAggregateInput>;
export const MediaCountOrderByAggregateInputObjectZodSchema = __makeSchema_MediaCountOrderByAggregateInput_schema();


// File: MediaAvgOrderByAggregateInput.schema.ts
const __makeSchema_MediaAvgOrderByAggregateInput_schema = () => z.object({
  size: SortOrderSchema.optional()
}).strict();
export const MediaAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.MediaAvgOrderByAggregateInput> = __makeSchema_MediaAvgOrderByAggregateInput_schema() as unknown as z.ZodType<Prisma.MediaAvgOrderByAggregateInput>;
export const MediaAvgOrderByAggregateInputObjectZodSchema = __makeSchema_MediaAvgOrderByAggregateInput_schema();


// File: MediaMaxOrderByAggregateInput.schema.ts
const __makeSchema_MediaMaxOrderByAggregateInput_schema = () => z.object({
  id: SortOrderSchema.optional(),
  url: SortOrderSchema.optional(),
  key: SortOrderSchema.optional(),
  mimeType: SortOrderSchema.optional(),
  size: SortOrderSchema.optional(),
  avatarUserId: SortOrderSchema.optional(),
  coverUserId: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional()
}).strict();
export const MediaMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.MediaMaxOrderByAggregateInput> = __makeSchema_MediaMaxOrderByAggregateInput_schema() as unknown as z.ZodType<Prisma.MediaMaxOrderByAggregateInput>;
export const MediaMaxOrderByAggregateInputObjectZodSchema = __makeSchema_MediaMaxOrderByAggregateInput_schema();


// File: MediaMinOrderByAggregateInput.schema.ts
const __makeSchema_MediaMinOrderByAggregateInput_schema = () => z.object({
  id: SortOrderSchema.optional(),
  url: SortOrderSchema.optional(),
  key: SortOrderSchema.optional(),
  mimeType: SortOrderSchema.optional(),
  size: SortOrderSchema.optional(),
  avatarUserId: SortOrderSchema.optional(),
  coverUserId: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional()
}).strict();
export const MediaMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.MediaMinOrderByAggregateInput> = __makeSchema_MediaMinOrderByAggregateInput_schema() as unknown as z.ZodType<Prisma.MediaMinOrderByAggregateInput>;
export const MediaMinOrderByAggregateInputObjectZodSchema = __makeSchema_MediaMinOrderByAggregateInput_schema();


// File: MediaSumOrderByAggregateInput.schema.ts
const __makeSchema_MediaSumOrderByAggregateInput_schema = () => z.object({
  size: SortOrderSchema.optional()
}).strict();
export const MediaSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.MediaSumOrderByAggregateInput> = __makeSchema_MediaSumOrderByAggregateInput_schema() as unknown as z.ZodType<Prisma.MediaSumOrderByAggregateInput>;
export const MediaSumOrderByAggregateInputObjectZodSchema = __makeSchema_MediaSumOrderByAggregateInput_schema();


// File: IntWithAggregatesFilter.schema.ts
const __makeSchema_IntWithAggregatesFilter_schema = () => z.object({
  equals: z.number().int().optional(),
  in: z.number().int().array().optional(),
  notIn: z.number().int().array().optional(),
  lt: z.number().int().optional(),
  lte: z.number().int().optional(),
  gt: z.number().int().optional(),
  gte: z.number().int().optional(),
  not: z.union([z.number().int(), z.lazy(() => NestedIntWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterObjectSchema).optional(),
  _sum: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedIntFilterObjectSchema).optional()
}).strict();
export const IntWithAggregatesFilterObjectSchema: z.ZodType<Prisma.IntWithAggregatesFilter> = __makeSchema_IntWithAggregatesFilter_schema() as unknown as z.ZodType<Prisma.IntWithAggregatesFilter>;
export const IntWithAggregatesFilterObjectZodSchema = __makeSchema_IntWithAggregatesFilter_schema();


// File: StringNullableListFilter.schema.ts
const __makeSchema_StringNullableListFilter_schema = () => z.object({
  equals: z.string().array().optional().nullable(),
  has: z.string().optional().nullable(),
  hasEvery: z.string().array().optional(),
  hasSome: z.string().array().optional(),
  isEmpty: z.boolean().optional()
}).strict();
export const StringNullableListFilterObjectSchema: z.ZodType<Prisma.StringNullableListFilter> = __makeSchema_StringNullableListFilter_schema() as unknown as z.ZodType<Prisma.StringNullableListFilter>;
export const StringNullableListFilterObjectZodSchema = __makeSchema_StringNullableListFilter_schema();


// File: EnumTeamMembersNullableListFilter.schema.ts
const __makeSchema_EnumTeamMembersNullableListFilter_schema = () => z.object({
  equals: TeamMembersSchema.array().optional().nullable(),
  has: TeamMembersSchema.optional().nullable(),
  hasEvery: TeamMembersSchema.array().optional(),
  hasSome: TeamMembersSchema.array().optional(),
  isEmpty: z.boolean().optional()
}).strict();
export const EnumTeamMembersNullableListFilterObjectSchema: z.ZodType<Prisma.EnumTeamMembersNullableListFilter> = __makeSchema_EnumTeamMembersNullableListFilter_schema() as unknown as z.ZodType<Prisma.EnumTeamMembersNullableListFilter>;
export const EnumTeamMembersNullableListFilterObjectZodSchema = __makeSchema_EnumTeamMembersNullableListFilter_schema();


// File: ProjectCountOrderByAggregateInput.schema.ts
const __makeSchema_ProjectCountOrderByAggregateInput_schema = () => z.object({
  id: SortOrderSchema.optional(),
  slug: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  weeks: SortOrderSchema.optional(),
  link: SortOrderSchema.optional(),
  cover: SortOrderSchema.optional(),
  video: SortOrderSchema.optional(),
  gallery: SortOrderSchema.optional(),
  description: SortOrderSchema.optional(),
  techStack: SortOrderSchema.optional(),
  date: SortOrderSchema.optional(),
  services: SortOrderSchema.optional(),
  team: SortOrderSchema.optional(),
  notes: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const ProjectCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ProjectCountOrderByAggregateInput> = __makeSchema_ProjectCountOrderByAggregateInput_schema() as unknown as z.ZodType<Prisma.ProjectCountOrderByAggregateInput>;
export const ProjectCountOrderByAggregateInputObjectZodSchema = __makeSchema_ProjectCountOrderByAggregateInput_schema();


// File: ProjectAvgOrderByAggregateInput.schema.ts
const __makeSchema_ProjectAvgOrderByAggregateInput_schema = () => z.object({
  id: SortOrderSchema.optional(),
  weeks: SortOrderSchema.optional()
}).strict();
export const ProjectAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ProjectAvgOrderByAggregateInput> = __makeSchema_ProjectAvgOrderByAggregateInput_schema() as unknown as z.ZodType<Prisma.ProjectAvgOrderByAggregateInput>;
export const ProjectAvgOrderByAggregateInputObjectZodSchema = __makeSchema_ProjectAvgOrderByAggregateInput_schema();


// File: ProjectMaxOrderByAggregateInput.schema.ts
const __makeSchema_ProjectMaxOrderByAggregateInput_schema = () => z.object({
  id: SortOrderSchema.optional(),
  slug: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  weeks: SortOrderSchema.optional(),
  link: SortOrderSchema.optional(),
  cover: SortOrderSchema.optional(),
  video: SortOrderSchema.optional(),
  description: SortOrderSchema.optional(),
  date: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const ProjectMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ProjectMaxOrderByAggregateInput> = __makeSchema_ProjectMaxOrderByAggregateInput_schema() as unknown as z.ZodType<Prisma.ProjectMaxOrderByAggregateInput>;
export const ProjectMaxOrderByAggregateInputObjectZodSchema = __makeSchema_ProjectMaxOrderByAggregateInput_schema();


// File: ProjectMinOrderByAggregateInput.schema.ts
const __makeSchema_ProjectMinOrderByAggregateInput_schema = () => z.object({
  id: SortOrderSchema.optional(),
  slug: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  weeks: SortOrderSchema.optional(),
  link: SortOrderSchema.optional(),
  cover: SortOrderSchema.optional(),
  video: SortOrderSchema.optional(),
  description: SortOrderSchema.optional(),
  date: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const ProjectMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ProjectMinOrderByAggregateInput> = __makeSchema_ProjectMinOrderByAggregateInput_schema() as unknown as z.ZodType<Prisma.ProjectMinOrderByAggregateInput>;
export const ProjectMinOrderByAggregateInputObjectZodSchema = __makeSchema_ProjectMinOrderByAggregateInput_schema();


// File: ProjectSumOrderByAggregateInput.schema.ts
const __makeSchema_ProjectSumOrderByAggregateInput_schema = () => z.object({
  id: SortOrderSchema.optional(),
  weeks: SortOrderSchema.optional()
}).strict();
export const ProjectSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ProjectSumOrderByAggregateInput> = __makeSchema_ProjectSumOrderByAggregateInput_schema() as unknown as z.ZodType<Prisma.ProjectSumOrderByAggregateInput>;
export const ProjectSumOrderByAggregateInputObjectZodSchema = __makeSchema_ProjectSumOrderByAggregateInput_schema();


// File: SessionCountOrderByAggregateInput.schema.ts
const __makeSchema_SessionCountOrderByAggregateInput_schema = () => z.object({
  id: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  token: SortOrderSchema.optional(),
  expiresAt: SortOrderSchema.optional(),
  ipAddress: SortOrderSchema.optional(),
  userAgent: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const SessionCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.SessionCountOrderByAggregateInput> = __makeSchema_SessionCountOrderByAggregateInput_schema() as unknown as z.ZodType<Prisma.SessionCountOrderByAggregateInput>;
export const SessionCountOrderByAggregateInputObjectZodSchema = __makeSchema_SessionCountOrderByAggregateInput_schema();


// File: SessionMaxOrderByAggregateInput.schema.ts
const __makeSchema_SessionMaxOrderByAggregateInput_schema = () => z.object({
  id: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  token: SortOrderSchema.optional(),
  expiresAt: SortOrderSchema.optional(),
  ipAddress: SortOrderSchema.optional(),
  userAgent: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const SessionMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.SessionMaxOrderByAggregateInput> = __makeSchema_SessionMaxOrderByAggregateInput_schema() as unknown as z.ZodType<Prisma.SessionMaxOrderByAggregateInput>;
export const SessionMaxOrderByAggregateInputObjectZodSchema = __makeSchema_SessionMaxOrderByAggregateInput_schema();


// File: SessionMinOrderByAggregateInput.schema.ts
const __makeSchema_SessionMinOrderByAggregateInput_schema = () => z.object({
  id: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  token: SortOrderSchema.optional(),
  expiresAt: SortOrderSchema.optional(),
  ipAddress: SortOrderSchema.optional(),
  userAgent: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const SessionMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.SessionMinOrderByAggregateInput> = __makeSchema_SessionMinOrderByAggregateInput_schema() as unknown as z.ZodType<Prisma.SessionMinOrderByAggregateInput>;
export const SessionMinOrderByAggregateInputObjectZodSchema = __makeSchema_SessionMinOrderByAggregateInput_schema();


// File: BoolFilter.schema.ts
const __makeSchema_BoolFilter_schema = () => z.object({
  equals: z.boolean().optional(),
  not: z.union([z.boolean(), z.lazy(() => NestedBoolFilterObjectSchema)]).optional()
}).strict();
export const BoolFilterObjectSchema: z.ZodType<Prisma.BoolFilter> = __makeSchema_BoolFilter_schema() as unknown as z.ZodType<Prisma.BoolFilter>;
export const BoolFilterObjectZodSchema = __makeSchema_BoolFilter_schema();


// File: EnumUserRoleFilter.schema.ts
const __makeSchema_EnumUserRoleFilter_schema = () => z.object({
  equals: UserRoleSchema.optional(),
  in: UserRoleSchema.array().optional(),
  notIn: UserRoleSchema.array().optional(),
  not: z.union([UserRoleSchema, z.lazy(() => NestedEnumUserRoleFilterObjectSchema)]).optional()
}).strict();
export const EnumUserRoleFilterObjectSchema: z.ZodType<Prisma.EnumUserRoleFilter> = __makeSchema_EnumUserRoleFilter_schema() as unknown as z.ZodType<Prisma.EnumUserRoleFilter>;
export const EnumUserRoleFilterObjectZodSchema = __makeSchema_EnumUserRoleFilter_schema();


// File: EnumUserStatusFilter.schema.ts
const __makeSchema_EnumUserStatusFilter_schema = () => z.object({
  equals: UserStatusSchema.optional(),
  in: UserStatusSchema.array().optional(),
  notIn: UserStatusSchema.array().optional(),
  not: z.union([UserStatusSchema, z.lazy(() => NestedEnumUserStatusFilterObjectSchema)]).optional()
}).strict();
export const EnumUserStatusFilterObjectSchema: z.ZodType<Prisma.EnumUserStatusFilter> = __makeSchema_EnumUserStatusFilter_schema() as unknown as z.ZodType<Prisma.EnumUserStatusFilter>;
export const EnumUserStatusFilterObjectZodSchema = __makeSchema_EnumUserStatusFilter_schema();


// File: MediaNullableScalarRelationFilter.schema.ts
const __makeSchema_MediaNullableScalarRelationFilter_schema = () => z.object({
  is: z.lazy(() => MediaWhereInputObjectSchema).optional().nullable(),
  isNot: z.lazy(() => MediaWhereInputObjectSchema).optional().nullable()
}).strict();
export const MediaNullableScalarRelationFilterObjectSchema: z.ZodType<Prisma.MediaNullableScalarRelationFilter> = __makeSchema_MediaNullableScalarRelationFilter_schema() as unknown as z.ZodType<Prisma.MediaNullableScalarRelationFilter>;
export const MediaNullableScalarRelationFilterObjectZodSchema = __makeSchema_MediaNullableScalarRelationFilter_schema();


// File: SessionListRelationFilter.schema.ts
const __makeSchema_SessionListRelationFilter_schema = () => z.object({
  every: z.lazy(() => SessionWhereInputObjectSchema).optional(),
  some: z.lazy(() => SessionWhereInputObjectSchema).optional(),
  none: z.lazy(() => SessionWhereInputObjectSchema).optional()
}).strict();
export const SessionListRelationFilterObjectSchema: z.ZodType<Prisma.SessionListRelationFilter> = __makeSchema_SessionListRelationFilter_schema() as unknown as z.ZodType<Prisma.SessionListRelationFilter>;
export const SessionListRelationFilterObjectZodSchema = __makeSchema_SessionListRelationFilter_schema();


// File: AccountListRelationFilter.schema.ts
const __makeSchema_AccountListRelationFilter_schema = () => z.object({
  every: z.lazy(() => AccountWhereInputObjectSchema).optional(),
  some: z.lazy(() => AccountWhereInputObjectSchema).optional(),
  none: z.lazy(() => AccountWhereInputObjectSchema).optional()
}).strict();
export const AccountListRelationFilterObjectSchema: z.ZodType<Prisma.AccountListRelationFilter> = __makeSchema_AccountListRelationFilter_schema() as unknown as z.ZodType<Prisma.AccountListRelationFilter>;
export const AccountListRelationFilterObjectZodSchema = __makeSchema_AccountListRelationFilter_schema();


// File: SessionOrderByRelationAggregateInput.schema.ts
const __makeSchema_SessionOrderByRelationAggregateInput_schema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const SessionOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.SessionOrderByRelationAggregateInput> = __makeSchema_SessionOrderByRelationAggregateInput_schema() as unknown as z.ZodType<Prisma.SessionOrderByRelationAggregateInput>;
export const SessionOrderByRelationAggregateInputObjectZodSchema = __makeSchema_SessionOrderByRelationAggregateInput_schema();


// File: AccountOrderByRelationAggregateInput.schema.ts
const __makeSchema_AccountOrderByRelationAggregateInput_schema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const AccountOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.AccountOrderByRelationAggregateInput> = __makeSchema_AccountOrderByRelationAggregateInput_schema() as unknown as z.ZodType<Prisma.AccountOrderByRelationAggregateInput>;
export const AccountOrderByRelationAggregateInputObjectZodSchema = __makeSchema_AccountOrderByRelationAggregateInput_schema();


// File: UserCountOrderByAggregateInput.schema.ts
const __makeSchema_UserCountOrderByAggregateInput_schema = () => z.object({
  id: SortOrderSchema.optional(),
  email: SortOrderSchema.optional(),
  firstName: SortOrderSchema.optional(),
  lastName: SortOrderSchema.optional(),
  password: SortOrderSchema.optional(),
  emailVerified: SortOrderSchema.optional(),
  role: SortOrderSchema.optional(),
  status: SortOrderSchema.optional(),
  lastLoginAt: SortOrderSchema.optional(),
  lastLoginIp: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const UserCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.UserCountOrderByAggregateInput> = __makeSchema_UserCountOrderByAggregateInput_schema() as unknown as z.ZodType<Prisma.UserCountOrderByAggregateInput>;
export const UserCountOrderByAggregateInputObjectZodSchema = __makeSchema_UserCountOrderByAggregateInput_schema();


// File: UserMaxOrderByAggregateInput.schema.ts
const __makeSchema_UserMaxOrderByAggregateInput_schema = () => z.object({
  id: SortOrderSchema.optional(),
  email: SortOrderSchema.optional(),
  firstName: SortOrderSchema.optional(),
  lastName: SortOrderSchema.optional(),
  password: SortOrderSchema.optional(),
  emailVerified: SortOrderSchema.optional(),
  role: SortOrderSchema.optional(),
  status: SortOrderSchema.optional(),
  lastLoginAt: SortOrderSchema.optional(),
  lastLoginIp: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const UserMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.UserMaxOrderByAggregateInput> = __makeSchema_UserMaxOrderByAggregateInput_schema() as unknown as z.ZodType<Prisma.UserMaxOrderByAggregateInput>;
export const UserMaxOrderByAggregateInputObjectZodSchema = __makeSchema_UserMaxOrderByAggregateInput_schema();


// File: UserMinOrderByAggregateInput.schema.ts
const __makeSchema_UserMinOrderByAggregateInput_schema = () => z.object({
  id: SortOrderSchema.optional(),
  email: SortOrderSchema.optional(),
  firstName: SortOrderSchema.optional(),
  lastName: SortOrderSchema.optional(),
  password: SortOrderSchema.optional(),
  emailVerified: SortOrderSchema.optional(),
  role: SortOrderSchema.optional(),
  status: SortOrderSchema.optional(),
  lastLoginAt: SortOrderSchema.optional(),
  lastLoginIp: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const UserMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.UserMinOrderByAggregateInput> = __makeSchema_UserMinOrderByAggregateInput_schema() as unknown as z.ZodType<Prisma.UserMinOrderByAggregateInput>;
export const UserMinOrderByAggregateInputObjectZodSchema = __makeSchema_UserMinOrderByAggregateInput_schema();


// File: BoolWithAggregatesFilter.schema.ts
const __makeSchema_BoolWithAggregatesFilter_schema = () => z.object({
  equals: z.boolean().optional(),
  not: z.union([z.boolean(), z.lazy(() => NestedBoolWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedBoolFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedBoolFilterObjectSchema).optional()
}).strict();
export const BoolWithAggregatesFilterObjectSchema: z.ZodType<Prisma.BoolWithAggregatesFilter> = __makeSchema_BoolWithAggregatesFilter_schema() as unknown as z.ZodType<Prisma.BoolWithAggregatesFilter>;
export const BoolWithAggregatesFilterObjectZodSchema = __makeSchema_BoolWithAggregatesFilter_schema();


// File: EnumUserRoleWithAggregatesFilter.schema.ts
const __makeSchema_EnumUserRoleWithAggregatesFilter_schema = () => z.object({
  equals: UserRoleSchema.optional(),
  in: UserRoleSchema.array().optional(),
  notIn: UserRoleSchema.array().optional(),
  not: z.union([UserRoleSchema, z.lazy(() => NestedEnumUserRoleWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumUserRoleFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumUserRoleFilterObjectSchema).optional()
}).strict();
export const EnumUserRoleWithAggregatesFilterObjectSchema: z.ZodType<Prisma.EnumUserRoleWithAggregatesFilter> = __makeSchema_EnumUserRoleWithAggregatesFilter_schema() as unknown as z.ZodType<Prisma.EnumUserRoleWithAggregatesFilter>;
export const EnumUserRoleWithAggregatesFilterObjectZodSchema = __makeSchema_EnumUserRoleWithAggregatesFilter_schema();


// File: EnumUserStatusWithAggregatesFilter.schema.ts
const __makeSchema_EnumUserStatusWithAggregatesFilter_schema = () => z.object({
  equals: UserStatusSchema.optional(),
  in: UserStatusSchema.array().optional(),
  notIn: UserStatusSchema.array().optional(),
  not: z.union([UserStatusSchema, z.lazy(() => NestedEnumUserStatusWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumUserStatusFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumUserStatusFilterObjectSchema).optional()
}).strict();
export const EnumUserStatusWithAggregatesFilterObjectSchema: z.ZodType<Prisma.EnumUserStatusWithAggregatesFilter> = __makeSchema_EnumUserStatusWithAggregatesFilter_schema() as unknown as z.ZodType<Prisma.EnumUserStatusWithAggregatesFilter>;
export const EnumUserStatusWithAggregatesFilterObjectZodSchema = __makeSchema_EnumUserStatusWithAggregatesFilter_schema();


// File: VerificationHashedIdentifierHashedValueCompoundUniqueInput.schema.ts
const __makeSchema_VerificationHashedIdentifierHashedValueCompoundUniqueInput_schema = () => z.object({
  hashedIdentifier: z.string(),
  hashedValue: z.string()
}).strict();
export const VerificationHashedIdentifierHashedValueCompoundUniqueInputObjectSchema: z.ZodType<Prisma.VerificationHashedIdentifierHashedValueCompoundUniqueInput> = __makeSchema_VerificationHashedIdentifierHashedValueCompoundUniqueInput_schema() as unknown as z.ZodType<Prisma.VerificationHashedIdentifierHashedValueCompoundUniqueInput>;
export const VerificationHashedIdentifierHashedValueCompoundUniqueInputObjectZodSchema = __makeSchema_VerificationHashedIdentifierHashedValueCompoundUniqueInput_schema();


// File: VerificationCountOrderByAggregateInput.schema.ts
const __makeSchema_VerificationCountOrderByAggregateInput_schema = () => z.object({
  id: SortOrderSchema.optional(),
  hashedIdentifier: SortOrderSchema.optional(),
  hashedValue: SortOrderSchema.optional(),
  expiresAt: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const VerificationCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.VerificationCountOrderByAggregateInput> = __makeSchema_VerificationCountOrderByAggregateInput_schema() as unknown as z.ZodType<Prisma.VerificationCountOrderByAggregateInput>;
export const VerificationCountOrderByAggregateInputObjectZodSchema = __makeSchema_VerificationCountOrderByAggregateInput_schema();


// File: VerificationMaxOrderByAggregateInput.schema.ts
const __makeSchema_VerificationMaxOrderByAggregateInput_schema = () => z.object({
  id: SortOrderSchema.optional(),
  hashedIdentifier: SortOrderSchema.optional(),
  hashedValue: SortOrderSchema.optional(),
  expiresAt: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const VerificationMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.VerificationMaxOrderByAggregateInput> = __makeSchema_VerificationMaxOrderByAggregateInput_schema() as unknown as z.ZodType<Prisma.VerificationMaxOrderByAggregateInput>;
export const VerificationMaxOrderByAggregateInputObjectZodSchema = __makeSchema_VerificationMaxOrderByAggregateInput_schema();


// File: VerificationMinOrderByAggregateInput.schema.ts
const __makeSchema_VerificationMinOrderByAggregateInput_schema = () => z.object({
  id: SortOrderSchema.optional(),
  hashedIdentifier: SortOrderSchema.optional(),
  hashedValue: SortOrderSchema.optional(),
  expiresAt: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const VerificationMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.VerificationMinOrderByAggregateInput> = __makeSchema_VerificationMinOrderByAggregateInput_schema() as unknown as z.ZodType<Prisma.VerificationMinOrderByAggregateInput>;
export const VerificationMinOrderByAggregateInputObjectZodSchema = __makeSchema_VerificationMinOrderByAggregateInput_schema();


// File: UserCreateNestedOneWithoutAccountsInput.schema.ts
const __makeSchema_UserCreateNestedOneWithoutAccountsInput_schema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutAccountsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutAccountsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutAccountsInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserCreateNestedOneWithoutAccountsInputObjectSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutAccountsInput> = __makeSchema_UserCreateNestedOneWithoutAccountsInput_schema() as unknown as z.ZodType<Prisma.UserCreateNestedOneWithoutAccountsInput>;
export const UserCreateNestedOneWithoutAccountsInputObjectZodSchema = __makeSchema_UserCreateNestedOneWithoutAccountsInput_schema();


// File: StringFieldUpdateOperationsInput.schema.ts
const __makeSchema_StringFieldUpdateOperationsInput_schema = () => z.object({
  set: z.string().optional()
}).strict();
export const StringFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.StringFieldUpdateOperationsInput> = __makeSchema_StringFieldUpdateOperationsInput_schema() as unknown as z.ZodType<Prisma.StringFieldUpdateOperationsInput>;
export const StringFieldUpdateOperationsInputObjectZodSchema = __makeSchema_StringFieldUpdateOperationsInput_schema();


// File: NullableStringFieldUpdateOperationsInput.schema.ts
const __makeSchema_NullableStringFieldUpdateOperationsInput_schema = () => z.object({
  set: z.string().optional()
}).strict();
export const NullableStringFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.NullableStringFieldUpdateOperationsInput> = __makeSchema_NullableStringFieldUpdateOperationsInput_schema() as unknown as z.ZodType<Prisma.NullableStringFieldUpdateOperationsInput>;
export const NullableStringFieldUpdateOperationsInputObjectZodSchema = __makeSchema_NullableStringFieldUpdateOperationsInput_schema();


// File: NullableDateTimeFieldUpdateOperationsInput.schema.ts
const __makeSchema_NullableDateTimeFieldUpdateOperationsInput_schema = () => z.object({
  set: z.coerce.date().optional()
}).strict();
export const NullableDateTimeFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.NullableDateTimeFieldUpdateOperationsInput> = __makeSchema_NullableDateTimeFieldUpdateOperationsInput_schema() as unknown as z.ZodType<Prisma.NullableDateTimeFieldUpdateOperationsInput>;
export const NullableDateTimeFieldUpdateOperationsInputObjectZodSchema = __makeSchema_NullableDateTimeFieldUpdateOperationsInput_schema();


// File: DateTimeFieldUpdateOperationsInput.schema.ts
const __makeSchema_DateTimeFieldUpdateOperationsInput_schema = () => z.object({
  set: z.coerce.date().optional()
}).strict();
export const DateTimeFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.DateTimeFieldUpdateOperationsInput> = __makeSchema_DateTimeFieldUpdateOperationsInput_schema() as unknown as z.ZodType<Prisma.DateTimeFieldUpdateOperationsInput>;
export const DateTimeFieldUpdateOperationsInputObjectZodSchema = __makeSchema_DateTimeFieldUpdateOperationsInput_schema();


// File: UserUpdateOneRequiredWithoutAccountsNestedInput.schema.ts
const __makeSchema_UserUpdateOneRequiredWithoutAccountsNestedInput_schema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutAccountsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutAccountsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutAccountsInputObjectSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutAccountsInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutAccountsInputObjectSchema), z.lazy(() => UserUpdateWithoutAccountsInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutAccountsInputObjectSchema)]).optional()
}).strict();
export const UserUpdateOneRequiredWithoutAccountsNestedInputObjectSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutAccountsNestedInput> = __makeSchema_UserUpdateOneRequiredWithoutAccountsNestedInput_schema() as unknown as z.ZodType<Prisma.UserUpdateOneRequiredWithoutAccountsNestedInput>;
export const UserUpdateOneRequiredWithoutAccountsNestedInputObjectZodSchema = __makeSchema_UserUpdateOneRequiredWithoutAccountsNestedInput_schema();


// File: UserCreateNestedOneWithoutAvatarInput.schema.ts
const __makeSchema_UserCreateNestedOneWithoutAvatarInput_schema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutAvatarInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutAvatarInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutAvatarInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserCreateNestedOneWithoutAvatarInputObjectSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutAvatarInput> = __makeSchema_UserCreateNestedOneWithoutAvatarInput_schema() as unknown as z.ZodType<Prisma.UserCreateNestedOneWithoutAvatarInput>;
export const UserCreateNestedOneWithoutAvatarInputObjectZodSchema = __makeSchema_UserCreateNestedOneWithoutAvatarInput_schema();


// File: UserCreateNestedOneWithoutCoverImageInput.schema.ts
const __makeSchema_UserCreateNestedOneWithoutCoverImageInput_schema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutCoverImageInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutCoverImageInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutCoverImageInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserCreateNestedOneWithoutCoverImageInputObjectSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutCoverImageInput> = __makeSchema_UserCreateNestedOneWithoutCoverImageInput_schema() as unknown as z.ZodType<Prisma.UserCreateNestedOneWithoutCoverImageInput>;
export const UserCreateNestedOneWithoutCoverImageInputObjectZodSchema = __makeSchema_UserCreateNestedOneWithoutCoverImageInput_schema();


// File: IntFieldUpdateOperationsInput.schema.ts
const __makeSchema_IntFieldUpdateOperationsInput_schema = () => z.object({
  set: z.number().int().optional(),
  increment: z.number().int().optional(),
  decrement: z.number().int().optional(),
  multiply: z.number().int().optional(),
  divide: z.number().int().optional()
}).strict();
export const IntFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.IntFieldUpdateOperationsInput> = __makeSchema_IntFieldUpdateOperationsInput_schema() as unknown as z.ZodType<Prisma.IntFieldUpdateOperationsInput>;
export const IntFieldUpdateOperationsInputObjectZodSchema = __makeSchema_IntFieldUpdateOperationsInput_schema();


// File: UserUpdateOneWithoutAvatarNestedInput.schema.ts
const __makeSchema_UserUpdateOneWithoutAvatarNestedInput_schema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutAvatarInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutAvatarInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutAvatarInputObjectSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutAvatarInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutAvatarInputObjectSchema), z.lazy(() => UserUpdateWithoutAvatarInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutAvatarInputObjectSchema)]).optional()
}).strict();
export const UserUpdateOneWithoutAvatarNestedInputObjectSchema: z.ZodType<Prisma.UserUpdateOneWithoutAvatarNestedInput> = __makeSchema_UserUpdateOneWithoutAvatarNestedInput_schema() as unknown as z.ZodType<Prisma.UserUpdateOneWithoutAvatarNestedInput>;
export const UserUpdateOneWithoutAvatarNestedInputObjectZodSchema = __makeSchema_UserUpdateOneWithoutAvatarNestedInput_schema();


// File: UserUpdateOneWithoutCoverImageNestedInput.schema.ts
const __makeSchema_UserUpdateOneWithoutCoverImageNestedInput_schema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutCoverImageInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutCoverImageInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutCoverImageInputObjectSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutCoverImageInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutCoverImageInputObjectSchema), z.lazy(() => UserUpdateWithoutCoverImageInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutCoverImageInputObjectSchema)]).optional()
}).strict();
export const UserUpdateOneWithoutCoverImageNestedInputObjectSchema: z.ZodType<Prisma.UserUpdateOneWithoutCoverImageNestedInput> = __makeSchema_UserUpdateOneWithoutCoverImageNestedInput_schema() as unknown as z.ZodType<Prisma.UserUpdateOneWithoutCoverImageNestedInput>;
export const UserUpdateOneWithoutCoverImageNestedInputObjectZodSchema = __makeSchema_UserUpdateOneWithoutCoverImageNestedInput_schema();


// File: ProjectCreategalleryInput.schema.ts
const __makeSchema_ProjectCreategalleryInput_schema = () => z.object({
  set: z.string().array()
}).strict();
export const ProjectCreategalleryInputObjectSchema: z.ZodType<Prisma.ProjectCreategalleryInput> = __makeSchema_ProjectCreategalleryInput_schema() as unknown as z.ZodType<Prisma.ProjectCreategalleryInput>;
export const ProjectCreategalleryInputObjectZodSchema = __makeSchema_ProjectCreategalleryInput_schema();


// File: ProjectCreatetechStackInput.schema.ts
const __makeSchema_ProjectCreatetechStackInput_schema = () => z.object({
  set: z.string().array()
}).strict();
export const ProjectCreatetechStackInputObjectSchema: z.ZodType<Prisma.ProjectCreatetechStackInput> = __makeSchema_ProjectCreatetechStackInput_schema() as unknown as z.ZodType<Prisma.ProjectCreatetechStackInput>;
export const ProjectCreatetechStackInputObjectZodSchema = __makeSchema_ProjectCreatetechStackInput_schema();


// File: ProjectCreateservicesInput.schema.ts
const __makeSchema_ProjectCreateservicesInput_schema = () => z.object({
  set: z.string().array()
}).strict();
export const ProjectCreateservicesInputObjectSchema: z.ZodType<Prisma.ProjectCreateservicesInput> = __makeSchema_ProjectCreateservicesInput_schema() as unknown as z.ZodType<Prisma.ProjectCreateservicesInput>;
export const ProjectCreateservicesInputObjectZodSchema = __makeSchema_ProjectCreateservicesInput_schema();


// File: ProjectCreateteamInput.schema.ts
const __makeSchema_ProjectCreateteamInput_schema = () => z.object({
  set: TeamMembersSchema.array()
}).strict();
export const ProjectCreateteamInputObjectSchema: z.ZodType<Prisma.ProjectCreateteamInput> = __makeSchema_ProjectCreateteamInput_schema() as unknown as z.ZodType<Prisma.ProjectCreateteamInput>;
export const ProjectCreateteamInputObjectZodSchema = __makeSchema_ProjectCreateteamInput_schema();


// File: ProjectCreatenotesInput.schema.ts
const __makeSchema_ProjectCreatenotesInput_schema = () => z.object({
  set: z.string().array()
}).strict();
export const ProjectCreatenotesInputObjectSchema: z.ZodType<Prisma.ProjectCreatenotesInput> = __makeSchema_ProjectCreatenotesInput_schema() as unknown as z.ZodType<Prisma.ProjectCreatenotesInput>;
export const ProjectCreatenotesInputObjectZodSchema = __makeSchema_ProjectCreatenotesInput_schema();


// File: ProjectUpdategalleryInput.schema.ts
const __makeSchema_ProjectUpdategalleryInput_schema = () => z.object({
  set: z.string().array().optional(),
  push: z.union([z.string(), z.string().array()]).optional()
}).strict();
export const ProjectUpdategalleryInputObjectSchema: z.ZodType<Prisma.ProjectUpdategalleryInput> = __makeSchema_ProjectUpdategalleryInput_schema() as unknown as z.ZodType<Prisma.ProjectUpdategalleryInput>;
export const ProjectUpdategalleryInputObjectZodSchema = __makeSchema_ProjectUpdategalleryInput_schema();


// File: ProjectUpdatetechStackInput.schema.ts
const __makeSchema_ProjectUpdatetechStackInput_schema = () => z.object({
  set: z.string().array().optional(),
  push: z.union([z.string(), z.string().array()]).optional()
}).strict();
export const ProjectUpdatetechStackInputObjectSchema: z.ZodType<Prisma.ProjectUpdatetechStackInput> = __makeSchema_ProjectUpdatetechStackInput_schema() as unknown as z.ZodType<Prisma.ProjectUpdatetechStackInput>;
export const ProjectUpdatetechStackInputObjectZodSchema = __makeSchema_ProjectUpdatetechStackInput_schema();


// File: ProjectUpdateservicesInput.schema.ts
const __makeSchema_ProjectUpdateservicesInput_schema = () => z.object({
  set: z.string().array().optional(),
  push: z.union([z.string(), z.string().array()]).optional()
}).strict();
export const ProjectUpdateservicesInputObjectSchema: z.ZodType<Prisma.ProjectUpdateservicesInput> = __makeSchema_ProjectUpdateservicesInput_schema() as unknown as z.ZodType<Prisma.ProjectUpdateservicesInput>;
export const ProjectUpdateservicesInputObjectZodSchema = __makeSchema_ProjectUpdateservicesInput_schema();


// File: ProjectUpdateteamInput.schema.ts
const __makeSchema_ProjectUpdateteamInput_schema = () => z.object({
  set: TeamMembersSchema.array().optional(),
  push: z.union([TeamMembersSchema, TeamMembersSchema.array()]).optional()
}).strict();
export const ProjectUpdateteamInputObjectSchema: z.ZodType<Prisma.ProjectUpdateteamInput> = __makeSchema_ProjectUpdateteamInput_schema() as unknown as z.ZodType<Prisma.ProjectUpdateteamInput>;
export const ProjectUpdateteamInputObjectZodSchema = __makeSchema_ProjectUpdateteamInput_schema();


// File: ProjectUpdatenotesInput.schema.ts
const __makeSchema_ProjectUpdatenotesInput_schema = () => z.object({
  set: z.string().array().optional(),
  push: z.union([z.string(), z.string().array()]).optional()
}).strict();
export const ProjectUpdatenotesInputObjectSchema: z.ZodType<Prisma.ProjectUpdatenotesInput> = __makeSchema_ProjectUpdatenotesInput_schema() as unknown as z.ZodType<Prisma.ProjectUpdatenotesInput>;
export const ProjectUpdatenotesInputObjectZodSchema = __makeSchema_ProjectUpdatenotesInput_schema();


// File: UserCreateNestedOneWithoutSessionsInput.schema.ts
const __makeSchema_UserCreateNestedOneWithoutSessionsInput_schema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutSessionsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutSessionsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutSessionsInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserCreateNestedOneWithoutSessionsInputObjectSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutSessionsInput> = __makeSchema_UserCreateNestedOneWithoutSessionsInput_schema() as unknown as z.ZodType<Prisma.UserCreateNestedOneWithoutSessionsInput>;
export const UserCreateNestedOneWithoutSessionsInputObjectZodSchema = __makeSchema_UserCreateNestedOneWithoutSessionsInput_schema();


// File: UserUpdateOneRequiredWithoutSessionsNestedInput.schema.ts
const __makeSchema_UserUpdateOneRequiredWithoutSessionsNestedInput_schema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutSessionsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutSessionsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutSessionsInputObjectSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutSessionsInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutSessionsInputObjectSchema), z.lazy(() => UserUpdateWithoutSessionsInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutSessionsInputObjectSchema)]).optional()
}).strict();
export const UserUpdateOneRequiredWithoutSessionsNestedInputObjectSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutSessionsNestedInput> = __makeSchema_UserUpdateOneRequiredWithoutSessionsNestedInput_schema() as unknown as z.ZodType<Prisma.UserUpdateOneRequiredWithoutSessionsNestedInput>;
export const UserUpdateOneRequiredWithoutSessionsNestedInputObjectZodSchema = __makeSchema_UserUpdateOneRequiredWithoutSessionsNestedInput_schema();


// File: MediaCreateNestedOneWithoutAvatarUserInput.schema.ts
const __makeSchema_MediaCreateNestedOneWithoutAvatarUserInput_schema = () => z.object({
  create: z.union([z.lazy(() => MediaCreateWithoutAvatarUserInputObjectSchema), z.lazy(() => MediaUncheckedCreateWithoutAvatarUserInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => MediaCreateOrConnectWithoutAvatarUserInputObjectSchema).optional(),
  connect: z.lazy(() => MediaWhereUniqueInputObjectSchema).optional()
}).strict();
export const MediaCreateNestedOneWithoutAvatarUserInputObjectSchema: z.ZodType<Prisma.MediaCreateNestedOneWithoutAvatarUserInput> = __makeSchema_MediaCreateNestedOneWithoutAvatarUserInput_schema() as unknown as z.ZodType<Prisma.MediaCreateNestedOneWithoutAvatarUserInput>;
export const MediaCreateNestedOneWithoutAvatarUserInputObjectZodSchema = __makeSchema_MediaCreateNestedOneWithoutAvatarUserInput_schema();


// File: MediaCreateNestedOneWithoutCoverUserInput.schema.ts
const __makeSchema_MediaCreateNestedOneWithoutCoverUserInput_schema = () => z.object({
  create: z.union([z.lazy(() => MediaCreateWithoutCoverUserInputObjectSchema), z.lazy(() => MediaUncheckedCreateWithoutCoverUserInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => MediaCreateOrConnectWithoutCoverUserInputObjectSchema).optional(),
  connect: z.lazy(() => MediaWhereUniqueInputObjectSchema).optional()
}).strict();
export const MediaCreateNestedOneWithoutCoverUserInputObjectSchema: z.ZodType<Prisma.MediaCreateNestedOneWithoutCoverUserInput> = __makeSchema_MediaCreateNestedOneWithoutCoverUserInput_schema() as unknown as z.ZodType<Prisma.MediaCreateNestedOneWithoutCoverUserInput>;
export const MediaCreateNestedOneWithoutCoverUserInputObjectZodSchema = __makeSchema_MediaCreateNestedOneWithoutCoverUserInput_schema();


// File: SessionCreateNestedManyWithoutUserInput.schema.ts
const __makeSchema_SessionCreateNestedManyWithoutUserInput_schema = () => z.object({
  create: z.union([z.lazy(() => SessionCreateWithoutUserInputObjectSchema), z.lazy(() => SessionCreateWithoutUserInputObjectSchema).array(), z.lazy(() => SessionUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => SessionUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => SessionCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => SessionCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => SessionCreateManyUserInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => SessionWhereUniqueInputObjectSchema), z.lazy(() => SessionWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const SessionCreateNestedManyWithoutUserInputObjectSchema: z.ZodType<Prisma.SessionCreateNestedManyWithoutUserInput> = __makeSchema_SessionCreateNestedManyWithoutUserInput_schema() as unknown as z.ZodType<Prisma.SessionCreateNestedManyWithoutUserInput>;
export const SessionCreateNestedManyWithoutUserInputObjectZodSchema = __makeSchema_SessionCreateNestedManyWithoutUserInput_schema();


// File: AccountCreateNestedManyWithoutUserInput.schema.ts
const __makeSchema_AccountCreateNestedManyWithoutUserInput_schema = () => z.object({
  create: z.union([z.lazy(() => AccountCreateWithoutUserInputObjectSchema), z.lazy(() => AccountCreateWithoutUserInputObjectSchema).array(), z.lazy(() => AccountUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => AccountUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => AccountCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => AccountCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => AccountCreateManyUserInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => AccountWhereUniqueInputObjectSchema), z.lazy(() => AccountWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const AccountCreateNestedManyWithoutUserInputObjectSchema: z.ZodType<Prisma.AccountCreateNestedManyWithoutUserInput> = __makeSchema_AccountCreateNestedManyWithoutUserInput_schema() as unknown as z.ZodType<Prisma.AccountCreateNestedManyWithoutUserInput>;
export const AccountCreateNestedManyWithoutUserInputObjectZodSchema = __makeSchema_AccountCreateNestedManyWithoutUserInput_schema();


// File: MediaUncheckedCreateNestedOneWithoutAvatarUserInput.schema.ts
const __makeSchema_MediaUncheckedCreateNestedOneWithoutAvatarUserInput_schema = () => z.object({
  create: z.union([z.lazy(() => MediaCreateWithoutAvatarUserInputObjectSchema), z.lazy(() => MediaUncheckedCreateWithoutAvatarUserInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => MediaCreateOrConnectWithoutAvatarUserInputObjectSchema).optional(),
  connect: z.lazy(() => MediaWhereUniqueInputObjectSchema).optional()
}).strict();
export const MediaUncheckedCreateNestedOneWithoutAvatarUserInputObjectSchema: z.ZodType<Prisma.MediaUncheckedCreateNestedOneWithoutAvatarUserInput> = __makeSchema_MediaUncheckedCreateNestedOneWithoutAvatarUserInput_schema() as unknown as z.ZodType<Prisma.MediaUncheckedCreateNestedOneWithoutAvatarUserInput>;
export const MediaUncheckedCreateNestedOneWithoutAvatarUserInputObjectZodSchema = __makeSchema_MediaUncheckedCreateNestedOneWithoutAvatarUserInput_schema();


// File: MediaUncheckedCreateNestedOneWithoutCoverUserInput.schema.ts
const __makeSchema_MediaUncheckedCreateNestedOneWithoutCoverUserInput_schema = () => z.object({
  create: z.union([z.lazy(() => MediaCreateWithoutCoverUserInputObjectSchema), z.lazy(() => MediaUncheckedCreateWithoutCoverUserInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => MediaCreateOrConnectWithoutCoverUserInputObjectSchema).optional(),
  connect: z.lazy(() => MediaWhereUniqueInputObjectSchema).optional()
}).strict();
export const MediaUncheckedCreateNestedOneWithoutCoverUserInputObjectSchema: z.ZodType<Prisma.MediaUncheckedCreateNestedOneWithoutCoverUserInput> = __makeSchema_MediaUncheckedCreateNestedOneWithoutCoverUserInput_schema() as unknown as z.ZodType<Prisma.MediaUncheckedCreateNestedOneWithoutCoverUserInput>;
export const MediaUncheckedCreateNestedOneWithoutCoverUserInputObjectZodSchema = __makeSchema_MediaUncheckedCreateNestedOneWithoutCoverUserInput_schema();


// File: SessionUncheckedCreateNestedManyWithoutUserInput.schema.ts
const __makeSchema_SessionUncheckedCreateNestedManyWithoutUserInput_schema = () => z.object({
  create: z.union([z.lazy(() => SessionCreateWithoutUserInputObjectSchema), z.lazy(() => SessionCreateWithoutUserInputObjectSchema).array(), z.lazy(() => SessionUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => SessionUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => SessionCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => SessionCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => SessionCreateManyUserInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => SessionWhereUniqueInputObjectSchema), z.lazy(() => SessionWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const SessionUncheckedCreateNestedManyWithoutUserInputObjectSchema: z.ZodType<Prisma.SessionUncheckedCreateNestedManyWithoutUserInput> = __makeSchema_SessionUncheckedCreateNestedManyWithoutUserInput_schema() as unknown as z.ZodType<Prisma.SessionUncheckedCreateNestedManyWithoutUserInput>;
export const SessionUncheckedCreateNestedManyWithoutUserInputObjectZodSchema = __makeSchema_SessionUncheckedCreateNestedManyWithoutUserInput_schema();


// File: AccountUncheckedCreateNestedManyWithoutUserInput.schema.ts
const __makeSchema_AccountUncheckedCreateNestedManyWithoutUserInput_schema = () => z.object({
  create: z.union([z.lazy(() => AccountCreateWithoutUserInputObjectSchema), z.lazy(() => AccountCreateWithoutUserInputObjectSchema).array(), z.lazy(() => AccountUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => AccountUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => AccountCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => AccountCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => AccountCreateManyUserInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => AccountWhereUniqueInputObjectSchema), z.lazy(() => AccountWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const AccountUncheckedCreateNestedManyWithoutUserInputObjectSchema: z.ZodType<Prisma.AccountUncheckedCreateNestedManyWithoutUserInput> = __makeSchema_AccountUncheckedCreateNestedManyWithoutUserInput_schema() as unknown as z.ZodType<Prisma.AccountUncheckedCreateNestedManyWithoutUserInput>;
export const AccountUncheckedCreateNestedManyWithoutUserInputObjectZodSchema = __makeSchema_AccountUncheckedCreateNestedManyWithoutUserInput_schema();


// File: BoolFieldUpdateOperationsInput.schema.ts
const __makeSchema_BoolFieldUpdateOperationsInput_schema = () => z.object({
  set: z.boolean().optional()
}).strict();
export const BoolFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.BoolFieldUpdateOperationsInput> = __makeSchema_BoolFieldUpdateOperationsInput_schema() as unknown as z.ZodType<Prisma.BoolFieldUpdateOperationsInput>;
export const BoolFieldUpdateOperationsInputObjectZodSchema = __makeSchema_BoolFieldUpdateOperationsInput_schema();


// File: EnumUserRoleFieldUpdateOperationsInput.schema.ts
const __makeSchema_EnumUserRoleFieldUpdateOperationsInput_schema = () => z.object({
  set: UserRoleSchema.optional()
}).strict();
export const EnumUserRoleFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.EnumUserRoleFieldUpdateOperationsInput> = __makeSchema_EnumUserRoleFieldUpdateOperationsInput_schema() as unknown as z.ZodType<Prisma.EnumUserRoleFieldUpdateOperationsInput>;
export const EnumUserRoleFieldUpdateOperationsInputObjectZodSchema = __makeSchema_EnumUserRoleFieldUpdateOperationsInput_schema();


// File: EnumUserStatusFieldUpdateOperationsInput.schema.ts
const __makeSchema_EnumUserStatusFieldUpdateOperationsInput_schema = () => z.object({
  set: UserStatusSchema.optional()
}).strict();
export const EnumUserStatusFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.EnumUserStatusFieldUpdateOperationsInput> = __makeSchema_EnumUserStatusFieldUpdateOperationsInput_schema() as unknown as z.ZodType<Prisma.EnumUserStatusFieldUpdateOperationsInput>;
export const EnumUserStatusFieldUpdateOperationsInputObjectZodSchema = __makeSchema_EnumUserStatusFieldUpdateOperationsInput_schema();


// File: MediaUpdateOneWithoutAvatarUserNestedInput.schema.ts
const __makeSchema_MediaUpdateOneWithoutAvatarUserNestedInput_schema = () => z.object({
  create: z.union([z.lazy(() => MediaCreateWithoutAvatarUserInputObjectSchema), z.lazy(() => MediaUncheckedCreateWithoutAvatarUserInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => MediaCreateOrConnectWithoutAvatarUserInputObjectSchema).optional(),
  upsert: z.lazy(() => MediaUpsertWithoutAvatarUserInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => MediaWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => MediaWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => MediaWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => MediaUpdateToOneWithWhereWithoutAvatarUserInputObjectSchema), z.lazy(() => MediaUpdateWithoutAvatarUserInputObjectSchema), z.lazy(() => MediaUncheckedUpdateWithoutAvatarUserInputObjectSchema)]).optional()
}).strict();
export const MediaUpdateOneWithoutAvatarUserNestedInputObjectSchema: z.ZodType<Prisma.MediaUpdateOneWithoutAvatarUserNestedInput> = __makeSchema_MediaUpdateOneWithoutAvatarUserNestedInput_schema() as unknown as z.ZodType<Prisma.MediaUpdateOneWithoutAvatarUserNestedInput>;
export const MediaUpdateOneWithoutAvatarUserNestedInputObjectZodSchema = __makeSchema_MediaUpdateOneWithoutAvatarUserNestedInput_schema();


// File: MediaUpdateOneWithoutCoverUserNestedInput.schema.ts
const __makeSchema_MediaUpdateOneWithoutCoverUserNestedInput_schema = () => z.object({
  create: z.union([z.lazy(() => MediaCreateWithoutCoverUserInputObjectSchema), z.lazy(() => MediaUncheckedCreateWithoutCoverUserInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => MediaCreateOrConnectWithoutCoverUserInputObjectSchema).optional(),
  upsert: z.lazy(() => MediaUpsertWithoutCoverUserInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => MediaWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => MediaWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => MediaWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => MediaUpdateToOneWithWhereWithoutCoverUserInputObjectSchema), z.lazy(() => MediaUpdateWithoutCoverUserInputObjectSchema), z.lazy(() => MediaUncheckedUpdateWithoutCoverUserInputObjectSchema)]).optional()
}).strict();
export const MediaUpdateOneWithoutCoverUserNestedInputObjectSchema: z.ZodType<Prisma.MediaUpdateOneWithoutCoverUserNestedInput> = __makeSchema_MediaUpdateOneWithoutCoverUserNestedInput_schema() as unknown as z.ZodType<Prisma.MediaUpdateOneWithoutCoverUserNestedInput>;
export const MediaUpdateOneWithoutCoverUserNestedInputObjectZodSchema = __makeSchema_MediaUpdateOneWithoutCoverUserNestedInput_schema();


// File: SessionUpdateManyWithoutUserNestedInput.schema.ts
const __makeSchema_SessionUpdateManyWithoutUserNestedInput_schema = () => z.object({
  create: z.union([z.lazy(() => SessionCreateWithoutUserInputObjectSchema), z.lazy(() => SessionCreateWithoutUserInputObjectSchema).array(), z.lazy(() => SessionUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => SessionUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => SessionCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => SessionCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => SessionUpsertWithWhereUniqueWithoutUserInputObjectSchema), z.lazy(() => SessionUpsertWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => SessionCreateManyUserInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => SessionWhereUniqueInputObjectSchema), z.lazy(() => SessionWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => SessionWhereUniqueInputObjectSchema), z.lazy(() => SessionWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => SessionWhereUniqueInputObjectSchema), z.lazy(() => SessionWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => SessionWhereUniqueInputObjectSchema), z.lazy(() => SessionWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => SessionUpdateWithWhereUniqueWithoutUserInputObjectSchema), z.lazy(() => SessionUpdateWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => SessionUpdateManyWithWhereWithoutUserInputObjectSchema), z.lazy(() => SessionUpdateManyWithWhereWithoutUserInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => SessionScalarWhereInputObjectSchema), z.lazy(() => SessionScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const SessionUpdateManyWithoutUserNestedInputObjectSchema: z.ZodType<Prisma.SessionUpdateManyWithoutUserNestedInput> = __makeSchema_SessionUpdateManyWithoutUserNestedInput_schema() as unknown as z.ZodType<Prisma.SessionUpdateManyWithoutUserNestedInput>;
export const SessionUpdateManyWithoutUserNestedInputObjectZodSchema = __makeSchema_SessionUpdateManyWithoutUserNestedInput_schema();


// File: AccountUpdateManyWithoutUserNestedInput.schema.ts
const __makeSchema_AccountUpdateManyWithoutUserNestedInput_schema = () => z.object({
  create: z.union([z.lazy(() => AccountCreateWithoutUserInputObjectSchema), z.lazy(() => AccountCreateWithoutUserInputObjectSchema).array(), z.lazy(() => AccountUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => AccountUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => AccountCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => AccountCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => AccountUpsertWithWhereUniqueWithoutUserInputObjectSchema), z.lazy(() => AccountUpsertWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => AccountCreateManyUserInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => AccountWhereUniqueInputObjectSchema), z.lazy(() => AccountWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => AccountWhereUniqueInputObjectSchema), z.lazy(() => AccountWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => AccountWhereUniqueInputObjectSchema), z.lazy(() => AccountWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => AccountWhereUniqueInputObjectSchema), z.lazy(() => AccountWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => AccountUpdateWithWhereUniqueWithoutUserInputObjectSchema), z.lazy(() => AccountUpdateWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => AccountUpdateManyWithWhereWithoutUserInputObjectSchema), z.lazy(() => AccountUpdateManyWithWhereWithoutUserInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => AccountScalarWhereInputObjectSchema), z.lazy(() => AccountScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const AccountUpdateManyWithoutUserNestedInputObjectSchema: z.ZodType<Prisma.AccountUpdateManyWithoutUserNestedInput> = __makeSchema_AccountUpdateManyWithoutUserNestedInput_schema() as unknown as z.ZodType<Prisma.AccountUpdateManyWithoutUserNestedInput>;
export const AccountUpdateManyWithoutUserNestedInputObjectZodSchema = __makeSchema_AccountUpdateManyWithoutUserNestedInput_schema();


// File: MediaUncheckedUpdateOneWithoutAvatarUserNestedInput.schema.ts
const __makeSchema_MediaUncheckedUpdateOneWithoutAvatarUserNestedInput_schema = () => z.object({
  create: z.union([z.lazy(() => MediaCreateWithoutAvatarUserInputObjectSchema), z.lazy(() => MediaUncheckedCreateWithoutAvatarUserInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => MediaCreateOrConnectWithoutAvatarUserInputObjectSchema).optional(),
  upsert: z.lazy(() => MediaUpsertWithoutAvatarUserInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => MediaWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => MediaWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => MediaWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => MediaUpdateToOneWithWhereWithoutAvatarUserInputObjectSchema), z.lazy(() => MediaUpdateWithoutAvatarUserInputObjectSchema), z.lazy(() => MediaUncheckedUpdateWithoutAvatarUserInputObjectSchema)]).optional()
}).strict();
export const MediaUncheckedUpdateOneWithoutAvatarUserNestedInputObjectSchema: z.ZodType<Prisma.MediaUncheckedUpdateOneWithoutAvatarUserNestedInput> = __makeSchema_MediaUncheckedUpdateOneWithoutAvatarUserNestedInput_schema() as unknown as z.ZodType<Prisma.MediaUncheckedUpdateOneWithoutAvatarUserNestedInput>;
export const MediaUncheckedUpdateOneWithoutAvatarUserNestedInputObjectZodSchema = __makeSchema_MediaUncheckedUpdateOneWithoutAvatarUserNestedInput_schema();


// File: MediaUncheckedUpdateOneWithoutCoverUserNestedInput.schema.ts
const __makeSchema_MediaUncheckedUpdateOneWithoutCoverUserNestedInput_schema = () => z.object({
  create: z.union([z.lazy(() => MediaCreateWithoutCoverUserInputObjectSchema), z.lazy(() => MediaUncheckedCreateWithoutCoverUserInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => MediaCreateOrConnectWithoutCoverUserInputObjectSchema).optional(),
  upsert: z.lazy(() => MediaUpsertWithoutCoverUserInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => MediaWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => MediaWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => MediaWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => MediaUpdateToOneWithWhereWithoutCoverUserInputObjectSchema), z.lazy(() => MediaUpdateWithoutCoverUserInputObjectSchema), z.lazy(() => MediaUncheckedUpdateWithoutCoverUserInputObjectSchema)]).optional()
}).strict();
export const MediaUncheckedUpdateOneWithoutCoverUserNestedInputObjectSchema: z.ZodType<Prisma.MediaUncheckedUpdateOneWithoutCoverUserNestedInput> = __makeSchema_MediaUncheckedUpdateOneWithoutCoverUserNestedInput_schema() as unknown as z.ZodType<Prisma.MediaUncheckedUpdateOneWithoutCoverUserNestedInput>;
export const MediaUncheckedUpdateOneWithoutCoverUserNestedInputObjectZodSchema = __makeSchema_MediaUncheckedUpdateOneWithoutCoverUserNestedInput_schema();


// File: SessionUncheckedUpdateManyWithoutUserNestedInput.schema.ts
const __makeSchema_SessionUncheckedUpdateManyWithoutUserNestedInput_schema = () => z.object({
  create: z.union([z.lazy(() => SessionCreateWithoutUserInputObjectSchema), z.lazy(() => SessionCreateWithoutUserInputObjectSchema).array(), z.lazy(() => SessionUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => SessionUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => SessionCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => SessionCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => SessionUpsertWithWhereUniqueWithoutUserInputObjectSchema), z.lazy(() => SessionUpsertWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => SessionCreateManyUserInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => SessionWhereUniqueInputObjectSchema), z.lazy(() => SessionWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => SessionWhereUniqueInputObjectSchema), z.lazy(() => SessionWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => SessionWhereUniqueInputObjectSchema), z.lazy(() => SessionWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => SessionWhereUniqueInputObjectSchema), z.lazy(() => SessionWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => SessionUpdateWithWhereUniqueWithoutUserInputObjectSchema), z.lazy(() => SessionUpdateWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => SessionUpdateManyWithWhereWithoutUserInputObjectSchema), z.lazy(() => SessionUpdateManyWithWhereWithoutUserInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => SessionScalarWhereInputObjectSchema), z.lazy(() => SessionScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const SessionUncheckedUpdateManyWithoutUserNestedInputObjectSchema: z.ZodType<Prisma.SessionUncheckedUpdateManyWithoutUserNestedInput> = __makeSchema_SessionUncheckedUpdateManyWithoutUserNestedInput_schema() as unknown as z.ZodType<Prisma.SessionUncheckedUpdateManyWithoutUserNestedInput>;
export const SessionUncheckedUpdateManyWithoutUserNestedInputObjectZodSchema = __makeSchema_SessionUncheckedUpdateManyWithoutUserNestedInput_schema();


// File: AccountUncheckedUpdateManyWithoutUserNestedInput.schema.ts
const __makeSchema_AccountUncheckedUpdateManyWithoutUserNestedInput_schema = () => z.object({
  create: z.union([z.lazy(() => AccountCreateWithoutUserInputObjectSchema), z.lazy(() => AccountCreateWithoutUserInputObjectSchema).array(), z.lazy(() => AccountUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => AccountUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => AccountCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => AccountCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => AccountUpsertWithWhereUniqueWithoutUserInputObjectSchema), z.lazy(() => AccountUpsertWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => AccountCreateManyUserInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => AccountWhereUniqueInputObjectSchema), z.lazy(() => AccountWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => AccountWhereUniqueInputObjectSchema), z.lazy(() => AccountWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => AccountWhereUniqueInputObjectSchema), z.lazy(() => AccountWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => AccountWhereUniqueInputObjectSchema), z.lazy(() => AccountWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => AccountUpdateWithWhereUniqueWithoutUserInputObjectSchema), z.lazy(() => AccountUpdateWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => AccountUpdateManyWithWhereWithoutUserInputObjectSchema), z.lazy(() => AccountUpdateManyWithWhereWithoutUserInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => AccountScalarWhereInputObjectSchema), z.lazy(() => AccountScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const AccountUncheckedUpdateManyWithoutUserNestedInputObjectSchema: z.ZodType<Prisma.AccountUncheckedUpdateManyWithoutUserNestedInput> = __makeSchema_AccountUncheckedUpdateManyWithoutUserNestedInput_schema() as unknown as z.ZodType<Prisma.AccountUncheckedUpdateManyWithoutUserNestedInput>;
export const AccountUncheckedUpdateManyWithoutUserNestedInputObjectZodSchema = __makeSchema_AccountUncheckedUpdateManyWithoutUserNestedInput_schema();


// File: NestedStringFilter.schema.ts


const nestedstringfilterSchema = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([z.string(), z.lazy(() => NestedStringFilterObjectSchema)]).optional()
}).strict();
export const NestedStringFilterObjectSchema: z.ZodType<Prisma.NestedStringFilter> = nestedstringfilterSchema as unknown as z.ZodType<Prisma.NestedStringFilter>;
export const NestedStringFilterObjectZodSchema = nestedstringfilterSchema;


// File: NestedStringNullableFilter.schema.ts


const nestedstringnullablefilterSchema = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([z.string(), z.lazy(() => NestedStringNullableFilterObjectSchema)]).optional().nullable()
}).strict();
export const NestedStringNullableFilterObjectSchema: z.ZodType<Prisma.NestedStringNullableFilter> = nestedstringnullablefilterSchema as unknown as z.ZodType<Prisma.NestedStringNullableFilter>;
export const NestedStringNullableFilterObjectZodSchema = nestedstringnullablefilterSchema;


// File: NestedDateTimeNullableFilter.schema.ts


const nesteddatetimenullablefilterSchema = z.object({
  equals: z.date().optional().nullable(),
  in: z.union([z.date().array(), z.string().datetime().array()]).optional().nullable(),
  notIn: z.union([z.date().array(), z.string().datetime().array()]).optional().nullable(),
  lt: z.date().optional(),
  lte: z.date().optional(),
  gt: z.date().optional(),
  gte: z.date().optional(),
  not: z.union([z.date(), z.lazy(() => NestedDateTimeNullableFilterObjectSchema)]).optional().nullable()
}).strict();
export const NestedDateTimeNullableFilterObjectSchema: z.ZodType<Prisma.NestedDateTimeNullableFilter> = nesteddatetimenullablefilterSchema as unknown as z.ZodType<Prisma.NestedDateTimeNullableFilter>;
export const NestedDateTimeNullableFilterObjectZodSchema = nesteddatetimenullablefilterSchema;


// File: NestedDateTimeFilter.schema.ts


const nesteddatetimefilterSchema = z.object({
  equals: z.date().optional(),
  in: z.union([z.date().array(), z.string().datetime().array()]).optional(),
  notIn: z.union([z.date().array(), z.string().datetime().array()]).optional(),
  lt: z.date().optional(),
  lte: z.date().optional(),
  gt: z.date().optional(),
  gte: z.date().optional(),
  not: z.union([z.date(), z.lazy(() => NestedDateTimeFilterObjectSchema)]).optional()
}).strict();
export const NestedDateTimeFilterObjectSchema: z.ZodType<Prisma.NestedDateTimeFilter> = nesteddatetimefilterSchema as unknown as z.ZodType<Prisma.NestedDateTimeFilter>;
export const NestedDateTimeFilterObjectZodSchema = nesteddatetimefilterSchema;


// File: NestedStringWithAggregatesFilter.schema.ts

const nestedstringwithaggregatesfilterSchema = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([z.string(), z.lazy(() => NestedStringWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedStringFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedStringFilterObjectSchema).optional()
}).strict();
export const NestedStringWithAggregatesFilterObjectSchema: z.ZodType<Prisma.NestedStringWithAggregatesFilter> = nestedstringwithaggregatesfilterSchema as unknown as z.ZodType<Prisma.NestedStringWithAggregatesFilter>;
export const NestedStringWithAggregatesFilterObjectZodSchema = nestedstringwithaggregatesfilterSchema;


// File: NestedIntFilter.schema.ts


const nestedintfilterSchema = z.object({
  equals: z.number().int().optional(),
  in: z.number().int().array().optional(),
  notIn: z.number().int().array().optional(),
  lt: z.number().int().optional(),
  lte: z.number().int().optional(),
  gt: z.number().int().optional(),
  gte: z.number().int().optional(),
  not: z.union([z.number().int(), z.lazy(() => NestedIntFilterObjectSchema)]).optional()
}).strict();
export const NestedIntFilterObjectSchema: z.ZodType<Prisma.NestedIntFilter> = nestedintfilterSchema as unknown as z.ZodType<Prisma.NestedIntFilter>;
export const NestedIntFilterObjectZodSchema = nestedintfilterSchema;


// File: NestedStringNullableWithAggregatesFilter.schema.ts

const nestedstringnullablewithaggregatesfilterSchema = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([z.string(), z.lazy(() => NestedStringNullableWithAggregatesFilterObjectSchema)]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedStringNullableFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedStringNullableFilterObjectSchema).optional()
}).strict();
export const NestedStringNullableWithAggregatesFilterObjectSchema: z.ZodType<Prisma.NestedStringNullableWithAggregatesFilter> = nestedstringnullablewithaggregatesfilterSchema as unknown as z.ZodType<Prisma.NestedStringNullableWithAggregatesFilter>;
export const NestedStringNullableWithAggregatesFilterObjectZodSchema = nestedstringnullablewithaggregatesfilterSchema;


// File: NestedIntNullableFilter.schema.ts


const nestedintnullablefilterSchema = z.object({
  equals: z.number().int().optional().nullable(),
  in: z.number().int().array().optional().nullable(),
  notIn: z.number().int().array().optional().nullable(),
  lt: z.number().int().optional(),
  lte: z.number().int().optional(),
  gt: z.number().int().optional(),
  gte: z.number().int().optional(),
  not: z.union([z.number().int(), z.lazy(() => NestedIntNullableFilterObjectSchema)]).optional().nullable()
}).strict();
export const NestedIntNullableFilterObjectSchema: z.ZodType<Prisma.NestedIntNullableFilter> = nestedintnullablefilterSchema as unknown as z.ZodType<Prisma.NestedIntNullableFilter>;
export const NestedIntNullableFilterObjectZodSchema = nestedintnullablefilterSchema;


// File: NestedDateTimeNullableWithAggregatesFilter.schema.ts

const nesteddatetimenullablewithaggregatesfilterSchema = z.object({
  equals: z.date().optional().nullable(),
  in: z.union([z.date().array(), z.string().datetime().array()]).optional().nullable(),
  notIn: z.union([z.date().array(), z.string().datetime().array()]).optional().nullable(),
  lt: z.date().optional(),
  lte: z.date().optional(),
  gt: z.date().optional(),
  gte: z.date().optional(),
  not: z.union([z.date(), z.lazy(() => NestedDateTimeNullableWithAggregatesFilterObjectSchema)]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedDateTimeNullableFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedDateTimeNullableFilterObjectSchema).optional()
}).strict();
export const NestedDateTimeNullableWithAggregatesFilterObjectSchema: z.ZodType<Prisma.NestedDateTimeNullableWithAggregatesFilter> = nesteddatetimenullablewithaggregatesfilterSchema as unknown as z.ZodType<Prisma.NestedDateTimeNullableWithAggregatesFilter>;
export const NestedDateTimeNullableWithAggregatesFilterObjectZodSchema = nesteddatetimenullablewithaggregatesfilterSchema;


// File: NestedDateTimeWithAggregatesFilter.schema.ts

const nesteddatetimewithaggregatesfilterSchema = z.object({
  equals: z.date().optional(),
  in: z.union([z.date().array(), z.string().datetime().array()]).optional(),
  notIn: z.union([z.date().array(), z.string().datetime().array()]).optional(),
  lt: z.date().optional(),
  lte: z.date().optional(),
  gt: z.date().optional(),
  gte: z.date().optional(),
  not: z.union([z.date(), z.lazy(() => NestedDateTimeWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedDateTimeFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedDateTimeFilterObjectSchema).optional()
}).strict();
export const NestedDateTimeWithAggregatesFilterObjectSchema: z.ZodType<Prisma.NestedDateTimeWithAggregatesFilter> = nesteddatetimewithaggregatesfilterSchema as unknown as z.ZodType<Prisma.NestedDateTimeWithAggregatesFilter>;
export const NestedDateTimeWithAggregatesFilterObjectZodSchema = nesteddatetimewithaggregatesfilterSchema;


// File: NestedIntWithAggregatesFilter.schema.ts

const nestedintwithaggregatesfilterSchema = z.object({
  equals: z.number().int().optional(),
  in: z.number().int().array().optional(),
  notIn: z.number().int().array().optional(),
  lt: z.number().int().optional(),
  lte: z.number().int().optional(),
  gt: z.number().int().optional(),
  gte: z.number().int().optional(),
  not: z.union([z.number().int(), z.lazy(() => NestedIntWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterObjectSchema).optional(),
  _sum: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedIntFilterObjectSchema).optional()
}).strict();
export const NestedIntWithAggregatesFilterObjectSchema: z.ZodType<Prisma.NestedIntWithAggregatesFilter> = nestedintwithaggregatesfilterSchema as unknown as z.ZodType<Prisma.NestedIntWithAggregatesFilter>;
export const NestedIntWithAggregatesFilterObjectZodSchema = nestedintwithaggregatesfilterSchema;


// File: NestedFloatFilter.schema.ts


const nestedfloatfilterSchema = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([z.number(), z.lazy(() => NestedFloatFilterObjectSchema)]).optional()
}).strict();
export const NestedFloatFilterObjectSchema: z.ZodType<Prisma.NestedFloatFilter> = nestedfloatfilterSchema as unknown as z.ZodType<Prisma.NestedFloatFilter>;
export const NestedFloatFilterObjectZodSchema = nestedfloatfilterSchema;


// File: NestedBoolFilter.schema.ts


const nestedboolfilterSchema = z.object({
  equals: z.boolean().optional(),
  not: z.union([z.boolean(), z.lazy(() => NestedBoolFilterObjectSchema)]).optional()
}).strict();
export const NestedBoolFilterObjectSchema: z.ZodType<Prisma.NestedBoolFilter> = nestedboolfilterSchema as unknown as z.ZodType<Prisma.NestedBoolFilter>;
export const NestedBoolFilterObjectZodSchema = nestedboolfilterSchema;


// File: NestedEnumUserRoleFilter.schema.ts

const nestedenumuserrolefilterSchema = z.object({
  equals: UserRoleSchema.optional(),
  in: UserRoleSchema.array().optional(),
  notIn: UserRoleSchema.array().optional(),
  not: z.union([UserRoleSchema, z.lazy(() => NestedEnumUserRoleFilterObjectSchema)]).optional()
}).strict();
export const NestedEnumUserRoleFilterObjectSchema: z.ZodType<Prisma.NestedEnumUserRoleFilter> = nestedenumuserrolefilterSchema as unknown as z.ZodType<Prisma.NestedEnumUserRoleFilter>;
export const NestedEnumUserRoleFilterObjectZodSchema = nestedenumuserrolefilterSchema;


// File: NestedEnumUserStatusFilter.schema.ts

const nestedenumuserstatusfilterSchema = z.object({
  equals: UserStatusSchema.optional(),
  in: UserStatusSchema.array().optional(),
  notIn: UserStatusSchema.array().optional(),
  not: z.union([UserStatusSchema, z.lazy(() => NestedEnumUserStatusFilterObjectSchema)]).optional()
}).strict();
export const NestedEnumUserStatusFilterObjectSchema: z.ZodType<Prisma.NestedEnumUserStatusFilter> = nestedenumuserstatusfilterSchema as unknown as z.ZodType<Prisma.NestedEnumUserStatusFilter>;
export const NestedEnumUserStatusFilterObjectZodSchema = nestedenumuserstatusfilterSchema;


// File: NestedBoolWithAggregatesFilter.schema.ts

const nestedboolwithaggregatesfilterSchema = z.object({
  equals: z.boolean().optional(),
  not: z.union([z.boolean(), z.lazy(() => NestedBoolWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedBoolFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedBoolFilterObjectSchema).optional()
}).strict();
export const NestedBoolWithAggregatesFilterObjectSchema: z.ZodType<Prisma.NestedBoolWithAggregatesFilter> = nestedboolwithaggregatesfilterSchema as unknown as z.ZodType<Prisma.NestedBoolWithAggregatesFilter>;
export const NestedBoolWithAggregatesFilterObjectZodSchema = nestedboolwithaggregatesfilterSchema;


// File: NestedEnumUserRoleWithAggregatesFilter.schema.ts

const nestedenumuserrolewithaggregatesfilterSchema = z.object({
  equals: UserRoleSchema.optional(),
  in: UserRoleSchema.array().optional(),
  notIn: UserRoleSchema.array().optional(),
  not: z.union([UserRoleSchema, z.lazy(() => NestedEnumUserRoleWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumUserRoleFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumUserRoleFilterObjectSchema).optional()
}).strict();
export const NestedEnumUserRoleWithAggregatesFilterObjectSchema: z.ZodType<Prisma.NestedEnumUserRoleWithAggregatesFilter> = nestedenumuserrolewithaggregatesfilterSchema as unknown as z.ZodType<Prisma.NestedEnumUserRoleWithAggregatesFilter>;
export const NestedEnumUserRoleWithAggregatesFilterObjectZodSchema = nestedenumuserrolewithaggregatesfilterSchema;


// File: NestedEnumUserStatusWithAggregatesFilter.schema.ts

const nestedenumuserstatuswithaggregatesfilterSchema = z.object({
  equals: UserStatusSchema.optional(),
  in: UserStatusSchema.array().optional(),
  notIn: UserStatusSchema.array().optional(),
  not: z.union([UserStatusSchema, z.lazy(() => NestedEnumUserStatusWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumUserStatusFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumUserStatusFilterObjectSchema).optional()
}).strict();
export const NestedEnumUserStatusWithAggregatesFilterObjectSchema: z.ZodType<Prisma.NestedEnumUserStatusWithAggregatesFilter> = nestedenumuserstatuswithaggregatesfilterSchema as unknown as z.ZodType<Prisma.NestedEnumUserStatusWithAggregatesFilter>;
export const NestedEnumUserStatusWithAggregatesFilterObjectZodSchema = nestedenumuserstatuswithaggregatesfilterSchema;


// File: UserCreateWithoutAccountsInput.schema.ts
const __makeSchema_UserCreateWithoutAccountsInput_schema = () => z.object({
  id: z.string().optional(),
  email: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  password: z.string(),
  emailVerified: z.boolean().optional(),
  role: UserRoleSchema.optional(),
  status: UserStatusSchema.optional(),
  lastLoginAt: z.coerce.date().optional().nullable(),
  lastLoginIp: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  avatar: z.lazy(() => MediaCreateNestedOneWithoutAvatarUserInputObjectSchema).optional(),
  coverImage: z.lazy(() => MediaCreateNestedOneWithoutCoverUserInputObjectSchema).optional(),
  sessions: z.lazy(() => SessionCreateNestedManyWithoutUserInputObjectSchema).optional()
}).strict();
export const UserCreateWithoutAccountsInputObjectSchema: z.ZodType<Prisma.UserCreateWithoutAccountsInput> = __makeSchema_UserCreateWithoutAccountsInput_schema() as unknown as z.ZodType<Prisma.UserCreateWithoutAccountsInput>;
export const UserCreateWithoutAccountsInputObjectZodSchema = __makeSchema_UserCreateWithoutAccountsInput_schema();


// File: UserUncheckedCreateWithoutAccountsInput.schema.ts
const __makeSchema_UserUncheckedCreateWithoutAccountsInput_schema = () => z.object({
  id: z.string().optional(),
  email: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  password: z.string(),
  emailVerified: z.boolean().optional(),
  role: UserRoleSchema.optional(),
  status: UserStatusSchema.optional(),
  lastLoginAt: z.coerce.date().optional().nullable(),
  lastLoginIp: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  avatar: z.lazy(() => MediaUncheckedCreateNestedOneWithoutAvatarUserInputObjectSchema).optional(),
  coverImage: z.lazy(() => MediaUncheckedCreateNestedOneWithoutCoverUserInputObjectSchema).optional(),
  sessions: z.lazy(() => SessionUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional()
}).strict();
export const UserUncheckedCreateWithoutAccountsInputObjectSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutAccountsInput> = __makeSchema_UserUncheckedCreateWithoutAccountsInput_schema() as unknown as z.ZodType<Prisma.UserUncheckedCreateWithoutAccountsInput>;
export const UserUncheckedCreateWithoutAccountsInputObjectZodSchema = __makeSchema_UserUncheckedCreateWithoutAccountsInput_schema();


// File: UserCreateOrConnectWithoutAccountsInput.schema.ts
const __makeSchema_UserCreateOrConnectWithoutAccountsInput_schema = () => z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserCreateWithoutAccountsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutAccountsInputObjectSchema)])
}).strict();
export const UserCreateOrConnectWithoutAccountsInputObjectSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutAccountsInput> = __makeSchema_UserCreateOrConnectWithoutAccountsInput_schema() as unknown as z.ZodType<Prisma.UserCreateOrConnectWithoutAccountsInput>;
export const UserCreateOrConnectWithoutAccountsInputObjectZodSchema = __makeSchema_UserCreateOrConnectWithoutAccountsInput_schema();


// File: UserUpsertWithoutAccountsInput.schema.ts
const __makeSchema_UserUpsertWithoutAccountsInput_schema = () => z.object({
  update: z.union([z.lazy(() => UserUpdateWithoutAccountsInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutAccountsInputObjectSchema)]),
  create: z.union([z.lazy(() => UserCreateWithoutAccountsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutAccountsInputObjectSchema)]),
  where: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict();
export const UserUpsertWithoutAccountsInputObjectSchema: z.ZodType<Prisma.UserUpsertWithoutAccountsInput> = __makeSchema_UserUpsertWithoutAccountsInput_schema() as unknown as z.ZodType<Prisma.UserUpsertWithoutAccountsInput>;
export const UserUpsertWithoutAccountsInputObjectZodSchema = __makeSchema_UserUpsertWithoutAccountsInput_schema();


// File: UserUpdateToOneWithWhereWithoutAccountsInput.schema.ts
const __makeSchema_UserUpdateToOneWithWhereWithoutAccountsInput_schema = () => z.object({
  where: z.lazy(() => UserWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserUpdateWithoutAccountsInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutAccountsInputObjectSchema)])
}).strict();
export const UserUpdateToOneWithWhereWithoutAccountsInputObjectSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutAccountsInput> = __makeSchema_UserUpdateToOneWithWhereWithoutAccountsInput_schema() as unknown as z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutAccountsInput>;
export const UserUpdateToOneWithWhereWithoutAccountsInputObjectZodSchema = __makeSchema_UserUpdateToOneWithWhereWithoutAccountsInput_schema();


// File: UserUpdateWithoutAccountsInput.schema.ts
const __makeSchema_UserUpdateWithoutAccountsInput_schema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  email: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  firstName: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  lastName: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  password: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  emailVerified: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  role: z.union([UserRoleSchema, z.lazy(() => EnumUserRoleFieldUpdateOperationsInputObjectSchema)]).optional(),
  status: z.union([UserStatusSchema, z.lazy(() => EnumUserStatusFieldUpdateOperationsInputObjectSchema)]).optional(),
  lastLoginAt: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  lastLoginIp: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  avatar: z.lazy(() => MediaUpdateOneWithoutAvatarUserNestedInputObjectSchema).optional(),
  coverImage: z.lazy(() => MediaUpdateOneWithoutCoverUserNestedInputObjectSchema).optional(),
  sessions: z.lazy(() => SessionUpdateManyWithoutUserNestedInputObjectSchema).optional()
}).strict();
export const UserUpdateWithoutAccountsInputObjectSchema: z.ZodType<Prisma.UserUpdateWithoutAccountsInput> = __makeSchema_UserUpdateWithoutAccountsInput_schema() as unknown as z.ZodType<Prisma.UserUpdateWithoutAccountsInput>;
export const UserUpdateWithoutAccountsInputObjectZodSchema = __makeSchema_UserUpdateWithoutAccountsInput_schema();


// File: UserUncheckedUpdateWithoutAccountsInput.schema.ts
const __makeSchema_UserUncheckedUpdateWithoutAccountsInput_schema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  email: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  firstName: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  lastName: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  password: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  emailVerified: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  role: z.union([UserRoleSchema, z.lazy(() => EnumUserRoleFieldUpdateOperationsInputObjectSchema)]).optional(),
  status: z.union([UserStatusSchema, z.lazy(() => EnumUserStatusFieldUpdateOperationsInputObjectSchema)]).optional(),
  lastLoginAt: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  lastLoginIp: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  avatar: z.lazy(() => MediaUncheckedUpdateOneWithoutAvatarUserNestedInputObjectSchema).optional(),
  coverImage: z.lazy(() => MediaUncheckedUpdateOneWithoutCoverUserNestedInputObjectSchema).optional(),
  sessions: z.lazy(() => SessionUncheckedUpdateManyWithoutUserNestedInputObjectSchema).optional()
}).strict();
export const UserUncheckedUpdateWithoutAccountsInputObjectSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutAccountsInput> = __makeSchema_UserUncheckedUpdateWithoutAccountsInput_schema() as unknown as z.ZodType<Prisma.UserUncheckedUpdateWithoutAccountsInput>;
export const UserUncheckedUpdateWithoutAccountsInputObjectZodSchema = __makeSchema_UserUncheckedUpdateWithoutAccountsInput_schema();


// File: UserCreateWithoutAvatarInput.schema.ts
const __makeSchema_UserCreateWithoutAvatarInput_schema = () => z.object({
  id: z.string().optional(),
  email: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  password: z.string(),
  emailVerified: z.boolean().optional(),
  role: UserRoleSchema.optional(),
  status: UserStatusSchema.optional(),
  lastLoginAt: z.coerce.date().optional().nullable(),
  lastLoginIp: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  coverImage: z.lazy(() => MediaCreateNestedOneWithoutCoverUserInputObjectSchema).optional(),
  sessions: z.lazy(() => SessionCreateNestedManyWithoutUserInputObjectSchema).optional(),
  accounts: z.lazy(() => AccountCreateNestedManyWithoutUserInputObjectSchema).optional()
}).strict();
export const UserCreateWithoutAvatarInputObjectSchema: z.ZodType<Prisma.UserCreateWithoutAvatarInput> = __makeSchema_UserCreateWithoutAvatarInput_schema() as unknown as z.ZodType<Prisma.UserCreateWithoutAvatarInput>;
export const UserCreateWithoutAvatarInputObjectZodSchema = __makeSchema_UserCreateWithoutAvatarInput_schema();


// File: UserUncheckedCreateWithoutAvatarInput.schema.ts
const __makeSchema_UserUncheckedCreateWithoutAvatarInput_schema = () => z.object({
  id: z.string().optional(),
  email: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  password: z.string(),
  emailVerified: z.boolean().optional(),
  role: UserRoleSchema.optional(),
  status: UserStatusSchema.optional(),
  lastLoginAt: z.coerce.date().optional().nullable(),
  lastLoginIp: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  coverImage: z.lazy(() => MediaUncheckedCreateNestedOneWithoutCoverUserInputObjectSchema).optional(),
  sessions: z.lazy(() => SessionUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional(),
  accounts: z.lazy(() => AccountUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional()
}).strict();
export const UserUncheckedCreateWithoutAvatarInputObjectSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutAvatarInput> = __makeSchema_UserUncheckedCreateWithoutAvatarInput_schema() as unknown as z.ZodType<Prisma.UserUncheckedCreateWithoutAvatarInput>;
export const UserUncheckedCreateWithoutAvatarInputObjectZodSchema = __makeSchema_UserUncheckedCreateWithoutAvatarInput_schema();


// File: UserCreateOrConnectWithoutAvatarInput.schema.ts
const __makeSchema_UserCreateOrConnectWithoutAvatarInput_schema = () => z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserCreateWithoutAvatarInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutAvatarInputObjectSchema)])
}).strict();
export const UserCreateOrConnectWithoutAvatarInputObjectSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutAvatarInput> = __makeSchema_UserCreateOrConnectWithoutAvatarInput_schema() as unknown as z.ZodType<Prisma.UserCreateOrConnectWithoutAvatarInput>;
export const UserCreateOrConnectWithoutAvatarInputObjectZodSchema = __makeSchema_UserCreateOrConnectWithoutAvatarInput_schema();


// File: UserCreateWithoutCoverImageInput.schema.ts
const __makeSchema_UserCreateWithoutCoverImageInput_schema = () => z.object({
  id: z.string().optional(),
  email: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  password: z.string(),
  emailVerified: z.boolean().optional(),
  role: UserRoleSchema.optional(),
  status: UserStatusSchema.optional(),
  lastLoginAt: z.coerce.date().optional().nullable(),
  lastLoginIp: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  avatar: z.lazy(() => MediaCreateNestedOneWithoutAvatarUserInputObjectSchema).optional(),
  sessions: z.lazy(() => SessionCreateNestedManyWithoutUserInputObjectSchema).optional(),
  accounts: z.lazy(() => AccountCreateNestedManyWithoutUserInputObjectSchema).optional()
}).strict();
export const UserCreateWithoutCoverImageInputObjectSchema: z.ZodType<Prisma.UserCreateWithoutCoverImageInput> = __makeSchema_UserCreateWithoutCoverImageInput_schema() as unknown as z.ZodType<Prisma.UserCreateWithoutCoverImageInput>;
export const UserCreateWithoutCoverImageInputObjectZodSchema = __makeSchema_UserCreateWithoutCoverImageInput_schema();


// File: UserUncheckedCreateWithoutCoverImageInput.schema.ts
const __makeSchema_UserUncheckedCreateWithoutCoverImageInput_schema = () => z.object({
  id: z.string().optional(),
  email: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  password: z.string(),
  emailVerified: z.boolean().optional(),
  role: UserRoleSchema.optional(),
  status: UserStatusSchema.optional(),
  lastLoginAt: z.coerce.date().optional().nullable(),
  lastLoginIp: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  avatar: z.lazy(() => MediaUncheckedCreateNestedOneWithoutAvatarUserInputObjectSchema).optional(),
  sessions: z.lazy(() => SessionUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional(),
  accounts: z.lazy(() => AccountUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional()
}).strict();
export const UserUncheckedCreateWithoutCoverImageInputObjectSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutCoverImageInput> = __makeSchema_UserUncheckedCreateWithoutCoverImageInput_schema() as unknown as z.ZodType<Prisma.UserUncheckedCreateWithoutCoverImageInput>;
export const UserUncheckedCreateWithoutCoverImageInputObjectZodSchema = __makeSchema_UserUncheckedCreateWithoutCoverImageInput_schema();


// File: UserCreateOrConnectWithoutCoverImageInput.schema.ts
const __makeSchema_UserCreateOrConnectWithoutCoverImageInput_schema = () => z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserCreateWithoutCoverImageInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutCoverImageInputObjectSchema)])
}).strict();
export const UserCreateOrConnectWithoutCoverImageInputObjectSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutCoverImageInput> = __makeSchema_UserCreateOrConnectWithoutCoverImageInput_schema() as unknown as z.ZodType<Prisma.UserCreateOrConnectWithoutCoverImageInput>;
export const UserCreateOrConnectWithoutCoverImageInputObjectZodSchema = __makeSchema_UserCreateOrConnectWithoutCoverImageInput_schema();


// File: UserUpsertWithoutAvatarInput.schema.ts
const __makeSchema_UserUpsertWithoutAvatarInput_schema = () => z.object({
  update: z.union([z.lazy(() => UserUpdateWithoutAvatarInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutAvatarInputObjectSchema)]),
  create: z.union([z.lazy(() => UserCreateWithoutAvatarInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutAvatarInputObjectSchema)]),
  where: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict();
export const UserUpsertWithoutAvatarInputObjectSchema: z.ZodType<Prisma.UserUpsertWithoutAvatarInput> = __makeSchema_UserUpsertWithoutAvatarInput_schema() as unknown as z.ZodType<Prisma.UserUpsertWithoutAvatarInput>;
export const UserUpsertWithoutAvatarInputObjectZodSchema = __makeSchema_UserUpsertWithoutAvatarInput_schema();


// File: UserUpdateToOneWithWhereWithoutAvatarInput.schema.ts
const __makeSchema_UserUpdateToOneWithWhereWithoutAvatarInput_schema = () => z.object({
  where: z.lazy(() => UserWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserUpdateWithoutAvatarInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutAvatarInputObjectSchema)])
}).strict();
export const UserUpdateToOneWithWhereWithoutAvatarInputObjectSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutAvatarInput> = __makeSchema_UserUpdateToOneWithWhereWithoutAvatarInput_schema() as unknown as z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutAvatarInput>;
export const UserUpdateToOneWithWhereWithoutAvatarInputObjectZodSchema = __makeSchema_UserUpdateToOneWithWhereWithoutAvatarInput_schema();


// File: UserUpdateWithoutAvatarInput.schema.ts
const __makeSchema_UserUpdateWithoutAvatarInput_schema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  email: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  firstName: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  lastName: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  password: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  emailVerified: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  role: z.union([UserRoleSchema, z.lazy(() => EnumUserRoleFieldUpdateOperationsInputObjectSchema)]).optional(),
  status: z.union([UserStatusSchema, z.lazy(() => EnumUserStatusFieldUpdateOperationsInputObjectSchema)]).optional(),
  lastLoginAt: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  lastLoginIp: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  coverImage: z.lazy(() => MediaUpdateOneWithoutCoverUserNestedInputObjectSchema).optional(),
  sessions: z.lazy(() => SessionUpdateManyWithoutUserNestedInputObjectSchema).optional(),
  accounts: z.lazy(() => AccountUpdateManyWithoutUserNestedInputObjectSchema).optional()
}).strict();
export const UserUpdateWithoutAvatarInputObjectSchema: z.ZodType<Prisma.UserUpdateWithoutAvatarInput> = __makeSchema_UserUpdateWithoutAvatarInput_schema() as unknown as z.ZodType<Prisma.UserUpdateWithoutAvatarInput>;
export const UserUpdateWithoutAvatarInputObjectZodSchema = __makeSchema_UserUpdateWithoutAvatarInput_schema();


// File: UserUncheckedUpdateWithoutAvatarInput.schema.ts
const __makeSchema_UserUncheckedUpdateWithoutAvatarInput_schema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  email: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  firstName: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  lastName: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  password: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  emailVerified: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  role: z.union([UserRoleSchema, z.lazy(() => EnumUserRoleFieldUpdateOperationsInputObjectSchema)]).optional(),
  status: z.union([UserStatusSchema, z.lazy(() => EnumUserStatusFieldUpdateOperationsInputObjectSchema)]).optional(),
  lastLoginAt: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  lastLoginIp: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  coverImage: z.lazy(() => MediaUncheckedUpdateOneWithoutCoverUserNestedInputObjectSchema).optional(),
  sessions: z.lazy(() => SessionUncheckedUpdateManyWithoutUserNestedInputObjectSchema).optional(),
  accounts: z.lazy(() => AccountUncheckedUpdateManyWithoutUserNestedInputObjectSchema).optional()
}).strict();
export const UserUncheckedUpdateWithoutAvatarInputObjectSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutAvatarInput> = __makeSchema_UserUncheckedUpdateWithoutAvatarInput_schema() as unknown as z.ZodType<Prisma.UserUncheckedUpdateWithoutAvatarInput>;
export const UserUncheckedUpdateWithoutAvatarInputObjectZodSchema = __makeSchema_UserUncheckedUpdateWithoutAvatarInput_schema();


// File: UserUpsertWithoutCoverImageInput.schema.ts
const __makeSchema_UserUpsertWithoutCoverImageInput_schema = () => z.object({
  update: z.union([z.lazy(() => UserUpdateWithoutCoverImageInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutCoverImageInputObjectSchema)]),
  create: z.union([z.lazy(() => UserCreateWithoutCoverImageInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutCoverImageInputObjectSchema)]),
  where: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict();
export const UserUpsertWithoutCoverImageInputObjectSchema: z.ZodType<Prisma.UserUpsertWithoutCoverImageInput> = __makeSchema_UserUpsertWithoutCoverImageInput_schema() as unknown as z.ZodType<Prisma.UserUpsertWithoutCoverImageInput>;
export const UserUpsertWithoutCoverImageInputObjectZodSchema = __makeSchema_UserUpsertWithoutCoverImageInput_schema();


// File: UserUpdateToOneWithWhereWithoutCoverImageInput.schema.ts
const __makeSchema_UserUpdateToOneWithWhereWithoutCoverImageInput_schema = () => z.object({
  where: z.lazy(() => UserWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserUpdateWithoutCoverImageInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutCoverImageInputObjectSchema)])
}).strict();
export const UserUpdateToOneWithWhereWithoutCoverImageInputObjectSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutCoverImageInput> = __makeSchema_UserUpdateToOneWithWhereWithoutCoverImageInput_schema() as unknown as z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutCoverImageInput>;
export const UserUpdateToOneWithWhereWithoutCoverImageInputObjectZodSchema = __makeSchema_UserUpdateToOneWithWhereWithoutCoverImageInput_schema();


// File: UserUpdateWithoutCoverImageInput.schema.ts
const __makeSchema_UserUpdateWithoutCoverImageInput_schema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  email: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  firstName: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  lastName: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  password: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  emailVerified: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  role: z.union([UserRoleSchema, z.lazy(() => EnumUserRoleFieldUpdateOperationsInputObjectSchema)]).optional(),
  status: z.union([UserStatusSchema, z.lazy(() => EnumUserStatusFieldUpdateOperationsInputObjectSchema)]).optional(),
  lastLoginAt: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  lastLoginIp: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  avatar: z.lazy(() => MediaUpdateOneWithoutAvatarUserNestedInputObjectSchema).optional(),
  sessions: z.lazy(() => SessionUpdateManyWithoutUserNestedInputObjectSchema).optional(),
  accounts: z.lazy(() => AccountUpdateManyWithoutUserNestedInputObjectSchema).optional()
}).strict();
export const UserUpdateWithoutCoverImageInputObjectSchema: z.ZodType<Prisma.UserUpdateWithoutCoverImageInput> = __makeSchema_UserUpdateWithoutCoverImageInput_schema() as unknown as z.ZodType<Prisma.UserUpdateWithoutCoverImageInput>;
export const UserUpdateWithoutCoverImageInputObjectZodSchema = __makeSchema_UserUpdateWithoutCoverImageInput_schema();


// File: UserUncheckedUpdateWithoutCoverImageInput.schema.ts
const __makeSchema_UserUncheckedUpdateWithoutCoverImageInput_schema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  email: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  firstName: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  lastName: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  password: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  emailVerified: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  role: z.union([UserRoleSchema, z.lazy(() => EnumUserRoleFieldUpdateOperationsInputObjectSchema)]).optional(),
  status: z.union([UserStatusSchema, z.lazy(() => EnumUserStatusFieldUpdateOperationsInputObjectSchema)]).optional(),
  lastLoginAt: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  lastLoginIp: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  avatar: z.lazy(() => MediaUncheckedUpdateOneWithoutAvatarUserNestedInputObjectSchema).optional(),
  sessions: z.lazy(() => SessionUncheckedUpdateManyWithoutUserNestedInputObjectSchema).optional(),
  accounts: z.lazy(() => AccountUncheckedUpdateManyWithoutUserNestedInputObjectSchema).optional()
}).strict();
export const UserUncheckedUpdateWithoutCoverImageInputObjectSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutCoverImageInput> = __makeSchema_UserUncheckedUpdateWithoutCoverImageInput_schema() as unknown as z.ZodType<Prisma.UserUncheckedUpdateWithoutCoverImageInput>;
export const UserUncheckedUpdateWithoutCoverImageInputObjectZodSchema = __makeSchema_UserUncheckedUpdateWithoutCoverImageInput_schema();


// File: UserCreateWithoutSessionsInput.schema.ts
const __makeSchema_UserCreateWithoutSessionsInput_schema = () => z.object({
  id: z.string().optional(),
  email: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  password: z.string(),
  emailVerified: z.boolean().optional(),
  role: UserRoleSchema.optional(),
  status: UserStatusSchema.optional(),
  lastLoginAt: z.coerce.date().optional().nullable(),
  lastLoginIp: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  avatar: z.lazy(() => MediaCreateNestedOneWithoutAvatarUserInputObjectSchema).optional(),
  coverImage: z.lazy(() => MediaCreateNestedOneWithoutCoverUserInputObjectSchema).optional(),
  accounts: z.lazy(() => AccountCreateNestedManyWithoutUserInputObjectSchema).optional()
}).strict();
export const UserCreateWithoutSessionsInputObjectSchema: z.ZodType<Prisma.UserCreateWithoutSessionsInput> = __makeSchema_UserCreateWithoutSessionsInput_schema() as unknown as z.ZodType<Prisma.UserCreateWithoutSessionsInput>;
export const UserCreateWithoutSessionsInputObjectZodSchema = __makeSchema_UserCreateWithoutSessionsInput_schema();


// File: UserUncheckedCreateWithoutSessionsInput.schema.ts
const __makeSchema_UserUncheckedCreateWithoutSessionsInput_schema = () => z.object({
  id: z.string().optional(),
  email: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  password: z.string(),
  emailVerified: z.boolean().optional(),
  role: UserRoleSchema.optional(),
  status: UserStatusSchema.optional(),
  lastLoginAt: z.coerce.date().optional().nullable(),
  lastLoginIp: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  avatar: z.lazy(() => MediaUncheckedCreateNestedOneWithoutAvatarUserInputObjectSchema).optional(),
  coverImage: z.lazy(() => MediaUncheckedCreateNestedOneWithoutCoverUserInputObjectSchema).optional(),
  accounts: z.lazy(() => AccountUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional()
}).strict();
export const UserUncheckedCreateWithoutSessionsInputObjectSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutSessionsInput> = __makeSchema_UserUncheckedCreateWithoutSessionsInput_schema() as unknown as z.ZodType<Prisma.UserUncheckedCreateWithoutSessionsInput>;
export const UserUncheckedCreateWithoutSessionsInputObjectZodSchema = __makeSchema_UserUncheckedCreateWithoutSessionsInput_schema();


// File: UserCreateOrConnectWithoutSessionsInput.schema.ts
const __makeSchema_UserCreateOrConnectWithoutSessionsInput_schema = () => z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserCreateWithoutSessionsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutSessionsInputObjectSchema)])
}).strict();
export const UserCreateOrConnectWithoutSessionsInputObjectSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutSessionsInput> = __makeSchema_UserCreateOrConnectWithoutSessionsInput_schema() as unknown as z.ZodType<Prisma.UserCreateOrConnectWithoutSessionsInput>;
export const UserCreateOrConnectWithoutSessionsInputObjectZodSchema = __makeSchema_UserCreateOrConnectWithoutSessionsInput_schema();


// File: UserUpsertWithoutSessionsInput.schema.ts
const __makeSchema_UserUpsertWithoutSessionsInput_schema = () => z.object({
  update: z.union([z.lazy(() => UserUpdateWithoutSessionsInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutSessionsInputObjectSchema)]),
  create: z.union([z.lazy(() => UserCreateWithoutSessionsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutSessionsInputObjectSchema)]),
  where: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict();
export const UserUpsertWithoutSessionsInputObjectSchema: z.ZodType<Prisma.UserUpsertWithoutSessionsInput> = __makeSchema_UserUpsertWithoutSessionsInput_schema() as unknown as z.ZodType<Prisma.UserUpsertWithoutSessionsInput>;
export const UserUpsertWithoutSessionsInputObjectZodSchema = __makeSchema_UserUpsertWithoutSessionsInput_schema();


// File: UserUpdateToOneWithWhereWithoutSessionsInput.schema.ts
const __makeSchema_UserUpdateToOneWithWhereWithoutSessionsInput_schema = () => z.object({
  where: z.lazy(() => UserWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserUpdateWithoutSessionsInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutSessionsInputObjectSchema)])
}).strict();
export const UserUpdateToOneWithWhereWithoutSessionsInputObjectSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutSessionsInput> = __makeSchema_UserUpdateToOneWithWhereWithoutSessionsInput_schema() as unknown as z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutSessionsInput>;
export const UserUpdateToOneWithWhereWithoutSessionsInputObjectZodSchema = __makeSchema_UserUpdateToOneWithWhereWithoutSessionsInput_schema();


// File: UserUpdateWithoutSessionsInput.schema.ts
const __makeSchema_UserUpdateWithoutSessionsInput_schema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  email: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  firstName: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  lastName: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  password: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  emailVerified: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  role: z.union([UserRoleSchema, z.lazy(() => EnumUserRoleFieldUpdateOperationsInputObjectSchema)]).optional(),
  status: z.union([UserStatusSchema, z.lazy(() => EnumUserStatusFieldUpdateOperationsInputObjectSchema)]).optional(),
  lastLoginAt: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  lastLoginIp: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  avatar: z.lazy(() => MediaUpdateOneWithoutAvatarUserNestedInputObjectSchema).optional(),
  coverImage: z.lazy(() => MediaUpdateOneWithoutCoverUserNestedInputObjectSchema).optional(),
  accounts: z.lazy(() => AccountUpdateManyWithoutUserNestedInputObjectSchema).optional()
}).strict();
export const UserUpdateWithoutSessionsInputObjectSchema: z.ZodType<Prisma.UserUpdateWithoutSessionsInput> = __makeSchema_UserUpdateWithoutSessionsInput_schema() as unknown as z.ZodType<Prisma.UserUpdateWithoutSessionsInput>;
export const UserUpdateWithoutSessionsInputObjectZodSchema = __makeSchema_UserUpdateWithoutSessionsInput_schema();


// File: UserUncheckedUpdateWithoutSessionsInput.schema.ts
const __makeSchema_UserUncheckedUpdateWithoutSessionsInput_schema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  email: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  firstName: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  lastName: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  password: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  emailVerified: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  role: z.union([UserRoleSchema, z.lazy(() => EnumUserRoleFieldUpdateOperationsInputObjectSchema)]).optional(),
  status: z.union([UserStatusSchema, z.lazy(() => EnumUserStatusFieldUpdateOperationsInputObjectSchema)]).optional(),
  lastLoginAt: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  lastLoginIp: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  avatar: z.lazy(() => MediaUncheckedUpdateOneWithoutAvatarUserNestedInputObjectSchema).optional(),
  coverImage: z.lazy(() => MediaUncheckedUpdateOneWithoutCoverUserNestedInputObjectSchema).optional(),
  accounts: z.lazy(() => AccountUncheckedUpdateManyWithoutUserNestedInputObjectSchema).optional()
}).strict();
export const UserUncheckedUpdateWithoutSessionsInputObjectSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutSessionsInput> = __makeSchema_UserUncheckedUpdateWithoutSessionsInput_schema() as unknown as z.ZodType<Prisma.UserUncheckedUpdateWithoutSessionsInput>;
export const UserUncheckedUpdateWithoutSessionsInputObjectZodSchema = __makeSchema_UserUncheckedUpdateWithoutSessionsInput_schema();


// File: MediaCreateWithoutAvatarUserInput.schema.ts
const __makeSchema_MediaCreateWithoutAvatarUserInput_schema = () => z.object({
  id: z.string().optional(),
  url: z.string(),
  key: z.string(),
  mimeType: z.string(),
  size: z.number().int(),
  createdAt: z.coerce.date().optional(),
  coverUser: z.lazy(() => UserCreateNestedOneWithoutCoverImageInputObjectSchema).optional()
}).strict();
export const MediaCreateWithoutAvatarUserInputObjectSchema: z.ZodType<Prisma.MediaCreateWithoutAvatarUserInput> = __makeSchema_MediaCreateWithoutAvatarUserInput_schema() as unknown as z.ZodType<Prisma.MediaCreateWithoutAvatarUserInput>;
export const MediaCreateWithoutAvatarUserInputObjectZodSchema = __makeSchema_MediaCreateWithoutAvatarUserInput_schema();


// File: MediaUncheckedCreateWithoutAvatarUserInput.schema.ts
const __makeSchema_MediaUncheckedCreateWithoutAvatarUserInput_schema = () => z.object({
  id: z.string().optional(),
  url: z.string(),
  key: z.string(),
  mimeType: z.string(),
  size: z.number().int(),
  coverUserId: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional()
}).strict();
export const MediaUncheckedCreateWithoutAvatarUserInputObjectSchema: z.ZodType<Prisma.MediaUncheckedCreateWithoutAvatarUserInput> = __makeSchema_MediaUncheckedCreateWithoutAvatarUserInput_schema() as unknown as z.ZodType<Prisma.MediaUncheckedCreateWithoutAvatarUserInput>;
export const MediaUncheckedCreateWithoutAvatarUserInputObjectZodSchema = __makeSchema_MediaUncheckedCreateWithoutAvatarUserInput_schema();


// File: MediaCreateOrConnectWithoutAvatarUserInput.schema.ts
const __makeSchema_MediaCreateOrConnectWithoutAvatarUserInput_schema = () => z.object({
  where: z.lazy(() => MediaWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => MediaCreateWithoutAvatarUserInputObjectSchema), z.lazy(() => MediaUncheckedCreateWithoutAvatarUserInputObjectSchema)])
}).strict();
export const MediaCreateOrConnectWithoutAvatarUserInputObjectSchema: z.ZodType<Prisma.MediaCreateOrConnectWithoutAvatarUserInput> = __makeSchema_MediaCreateOrConnectWithoutAvatarUserInput_schema() as unknown as z.ZodType<Prisma.MediaCreateOrConnectWithoutAvatarUserInput>;
export const MediaCreateOrConnectWithoutAvatarUserInputObjectZodSchema = __makeSchema_MediaCreateOrConnectWithoutAvatarUserInput_schema();


// File: MediaCreateWithoutCoverUserInput.schema.ts
const __makeSchema_MediaCreateWithoutCoverUserInput_schema = () => z.object({
  id: z.string().optional(),
  url: z.string(),
  key: z.string(),
  mimeType: z.string(),
  size: z.number().int(),
  createdAt: z.coerce.date().optional(),
  avatarUser: z.lazy(() => UserCreateNestedOneWithoutAvatarInputObjectSchema).optional()
}).strict();
export const MediaCreateWithoutCoverUserInputObjectSchema: z.ZodType<Prisma.MediaCreateWithoutCoverUserInput> = __makeSchema_MediaCreateWithoutCoverUserInput_schema() as unknown as z.ZodType<Prisma.MediaCreateWithoutCoverUserInput>;
export const MediaCreateWithoutCoverUserInputObjectZodSchema = __makeSchema_MediaCreateWithoutCoverUserInput_schema();


// File: MediaUncheckedCreateWithoutCoverUserInput.schema.ts
const __makeSchema_MediaUncheckedCreateWithoutCoverUserInput_schema = () => z.object({
  id: z.string().optional(),
  url: z.string(),
  key: z.string(),
  mimeType: z.string(),
  size: z.number().int(),
  avatarUserId: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional()
}).strict();
export const MediaUncheckedCreateWithoutCoverUserInputObjectSchema: z.ZodType<Prisma.MediaUncheckedCreateWithoutCoverUserInput> = __makeSchema_MediaUncheckedCreateWithoutCoverUserInput_schema() as unknown as z.ZodType<Prisma.MediaUncheckedCreateWithoutCoverUserInput>;
export const MediaUncheckedCreateWithoutCoverUserInputObjectZodSchema = __makeSchema_MediaUncheckedCreateWithoutCoverUserInput_schema();


// File: MediaCreateOrConnectWithoutCoverUserInput.schema.ts
const __makeSchema_MediaCreateOrConnectWithoutCoverUserInput_schema = () => z.object({
  where: z.lazy(() => MediaWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => MediaCreateWithoutCoverUserInputObjectSchema), z.lazy(() => MediaUncheckedCreateWithoutCoverUserInputObjectSchema)])
}).strict();
export const MediaCreateOrConnectWithoutCoverUserInputObjectSchema: z.ZodType<Prisma.MediaCreateOrConnectWithoutCoverUserInput> = __makeSchema_MediaCreateOrConnectWithoutCoverUserInput_schema() as unknown as z.ZodType<Prisma.MediaCreateOrConnectWithoutCoverUserInput>;
export const MediaCreateOrConnectWithoutCoverUserInputObjectZodSchema = __makeSchema_MediaCreateOrConnectWithoutCoverUserInput_schema();


// File: SessionCreateWithoutUserInput.schema.ts
const __makeSchema_SessionCreateWithoutUserInput_schema = () => z.object({
  id: z.string(),
  token: z.string(),
  expiresAt: z.coerce.date(),
  ipAddress: z.string().optional().nullable(),
  userAgent: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const SessionCreateWithoutUserInputObjectSchema: z.ZodType<Prisma.SessionCreateWithoutUserInput> = __makeSchema_SessionCreateWithoutUserInput_schema() as unknown as z.ZodType<Prisma.SessionCreateWithoutUserInput>;
export const SessionCreateWithoutUserInputObjectZodSchema = __makeSchema_SessionCreateWithoutUserInput_schema();


// File: SessionUncheckedCreateWithoutUserInput.schema.ts
const __makeSchema_SessionUncheckedCreateWithoutUserInput_schema = () => z.object({
  id: z.string(),
  token: z.string(),
  expiresAt: z.coerce.date(),
  ipAddress: z.string().optional().nullable(),
  userAgent: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const SessionUncheckedCreateWithoutUserInputObjectSchema: z.ZodType<Prisma.SessionUncheckedCreateWithoutUserInput> = __makeSchema_SessionUncheckedCreateWithoutUserInput_schema() as unknown as z.ZodType<Prisma.SessionUncheckedCreateWithoutUserInput>;
export const SessionUncheckedCreateWithoutUserInputObjectZodSchema = __makeSchema_SessionUncheckedCreateWithoutUserInput_schema();


// File: SessionCreateOrConnectWithoutUserInput.schema.ts
const __makeSchema_SessionCreateOrConnectWithoutUserInput_schema = () => z.object({
  where: z.lazy(() => SessionWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => SessionCreateWithoutUserInputObjectSchema), z.lazy(() => SessionUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const SessionCreateOrConnectWithoutUserInputObjectSchema: z.ZodType<Prisma.SessionCreateOrConnectWithoutUserInput> = __makeSchema_SessionCreateOrConnectWithoutUserInput_schema() as unknown as z.ZodType<Prisma.SessionCreateOrConnectWithoutUserInput>;
export const SessionCreateOrConnectWithoutUserInputObjectZodSchema = __makeSchema_SessionCreateOrConnectWithoutUserInput_schema();


// File: SessionCreateManyUserInputEnvelope.schema.ts
const __makeSchema_SessionCreateManyUserInputEnvelope_schema = () => z.object({
  data: z.union([z.lazy(() => SessionCreateManyUserInputObjectSchema), z.lazy(() => SessionCreateManyUserInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const SessionCreateManyUserInputEnvelopeObjectSchema: z.ZodType<Prisma.SessionCreateManyUserInputEnvelope> = __makeSchema_SessionCreateManyUserInputEnvelope_schema() as unknown as z.ZodType<Prisma.SessionCreateManyUserInputEnvelope>;
export const SessionCreateManyUserInputEnvelopeObjectZodSchema = __makeSchema_SessionCreateManyUserInputEnvelope_schema();


// File: AccountCreateWithoutUserInput.schema.ts
const __makeSchema_AccountCreateWithoutUserInput_schema = () => z.object({
  id: z.string(),
  accountId: z.string(),
  providerId: z.string(),
  accessToken: z.string().optional().nullable(),
  refreshToken: z.string().optional().nullable(),
  accessTokenExpiresAt: z.coerce.date().optional().nullable(),
  refreshTokenExpiresAt: z.coerce.date().optional().nullable(),
  scope: z.string().optional().nullable(),
  idToken: z.string().optional().nullable(),
  password: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const AccountCreateWithoutUserInputObjectSchema: z.ZodType<Prisma.AccountCreateWithoutUserInput> = __makeSchema_AccountCreateWithoutUserInput_schema() as unknown as z.ZodType<Prisma.AccountCreateWithoutUserInput>;
export const AccountCreateWithoutUserInputObjectZodSchema = __makeSchema_AccountCreateWithoutUserInput_schema();


// File: AccountUncheckedCreateWithoutUserInput.schema.ts
const __makeSchema_AccountUncheckedCreateWithoutUserInput_schema = () => z.object({
  id: z.string(),
  accountId: z.string(),
  providerId: z.string(),
  accessToken: z.string().optional().nullable(),
  refreshToken: z.string().optional().nullable(),
  accessTokenExpiresAt: z.coerce.date().optional().nullable(),
  refreshTokenExpiresAt: z.coerce.date().optional().nullable(),
  scope: z.string().optional().nullable(),
  idToken: z.string().optional().nullable(),
  password: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const AccountUncheckedCreateWithoutUserInputObjectSchema: z.ZodType<Prisma.AccountUncheckedCreateWithoutUserInput> = __makeSchema_AccountUncheckedCreateWithoutUserInput_schema() as unknown as z.ZodType<Prisma.AccountUncheckedCreateWithoutUserInput>;
export const AccountUncheckedCreateWithoutUserInputObjectZodSchema = __makeSchema_AccountUncheckedCreateWithoutUserInput_schema();


// File: AccountCreateOrConnectWithoutUserInput.schema.ts
const __makeSchema_AccountCreateOrConnectWithoutUserInput_schema = () => z.object({
  where: z.lazy(() => AccountWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => AccountCreateWithoutUserInputObjectSchema), z.lazy(() => AccountUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const AccountCreateOrConnectWithoutUserInputObjectSchema: z.ZodType<Prisma.AccountCreateOrConnectWithoutUserInput> = __makeSchema_AccountCreateOrConnectWithoutUserInput_schema() as unknown as z.ZodType<Prisma.AccountCreateOrConnectWithoutUserInput>;
export const AccountCreateOrConnectWithoutUserInputObjectZodSchema = __makeSchema_AccountCreateOrConnectWithoutUserInput_schema();


// File: AccountCreateManyUserInputEnvelope.schema.ts
const __makeSchema_AccountCreateManyUserInputEnvelope_schema = () => z.object({
  data: z.union([z.lazy(() => AccountCreateManyUserInputObjectSchema), z.lazy(() => AccountCreateManyUserInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const AccountCreateManyUserInputEnvelopeObjectSchema: z.ZodType<Prisma.AccountCreateManyUserInputEnvelope> = __makeSchema_AccountCreateManyUserInputEnvelope_schema() as unknown as z.ZodType<Prisma.AccountCreateManyUserInputEnvelope>;
export const AccountCreateManyUserInputEnvelopeObjectZodSchema = __makeSchema_AccountCreateManyUserInputEnvelope_schema();


// File: MediaUpsertWithoutAvatarUserInput.schema.ts
const __makeSchema_MediaUpsertWithoutAvatarUserInput_schema = () => z.object({
  update: z.union([z.lazy(() => MediaUpdateWithoutAvatarUserInputObjectSchema), z.lazy(() => MediaUncheckedUpdateWithoutAvatarUserInputObjectSchema)]),
  create: z.union([z.lazy(() => MediaCreateWithoutAvatarUserInputObjectSchema), z.lazy(() => MediaUncheckedCreateWithoutAvatarUserInputObjectSchema)]),
  where: z.lazy(() => MediaWhereInputObjectSchema).optional()
}).strict();
export const MediaUpsertWithoutAvatarUserInputObjectSchema: z.ZodType<Prisma.MediaUpsertWithoutAvatarUserInput> = __makeSchema_MediaUpsertWithoutAvatarUserInput_schema() as unknown as z.ZodType<Prisma.MediaUpsertWithoutAvatarUserInput>;
export const MediaUpsertWithoutAvatarUserInputObjectZodSchema = __makeSchema_MediaUpsertWithoutAvatarUserInput_schema();


// File: MediaUpdateToOneWithWhereWithoutAvatarUserInput.schema.ts
const __makeSchema_MediaUpdateToOneWithWhereWithoutAvatarUserInput_schema = () => z.object({
  where: z.lazy(() => MediaWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => MediaUpdateWithoutAvatarUserInputObjectSchema), z.lazy(() => MediaUncheckedUpdateWithoutAvatarUserInputObjectSchema)])
}).strict();
export const MediaUpdateToOneWithWhereWithoutAvatarUserInputObjectSchema: z.ZodType<Prisma.MediaUpdateToOneWithWhereWithoutAvatarUserInput> = __makeSchema_MediaUpdateToOneWithWhereWithoutAvatarUserInput_schema() as unknown as z.ZodType<Prisma.MediaUpdateToOneWithWhereWithoutAvatarUserInput>;
export const MediaUpdateToOneWithWhereWithoutAvatarUserInputObjectZodSchema = __makeSchema_MediaUpdateToOneWithWhereWithoutAvatarUserInput_schema();


// File: MediaUpdateWithoutAvatarUserInput.schema.ts
const __makeSchema_MediaUpdateWithoutAvatarUserInput_schema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  url: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  key: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  mimeType: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  size: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  coverUser: z.lazy(() => UserUpdateOneWithoutCoverImageNestedInputObjectSchema).optional()
}).strict();
export const MediaUpdateWithoutAvatarUserInputObjectSchema: z.ZodType<Prisma.MediaUpdateWithoutAvatarUserInput> = __makeSchema_MediaUpdateWithoutAvatarUserInput_schema() as unknown as z.ZodType<Prisma.MediaUpdateWithoutAvatarUserInput>;
export const MediaUpdateWithoutAvatarUserInputObjectZodSchema = __makeSchema_MediaUpdateWithoutAvatarUserInput_schema();


// File: MediaUncheckedUpdateWithoutAvatarUserInput.schema.ts
const __makeSchema_MediaUncheckedUpdateWithoutAvatarUserInput_schema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  url: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  key: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  mimeType: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  size: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  coverUserId: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const MediaUncheckedUpdateWithoutAvatarUserInputObjectSchema: z.ZodType<Prisma.MediaUncheckedUpdateWithoutAvatarUserInput> = __makeSchema_MediaUncheckedUpdateWithoutAvatarUserInput_schema() as unknown as z.ZodType<Prisma.MediaUncheckedUpdateWithoutAvatarUserInput>;
export const MediaUncheckedUpdateWithoutAvatarUserInputObjectZodSchema = __makeSchema_MediaUncheckedUpdateWithoutAvatarUserInput_schema();


// File: MediaUpsertWithoutCoverUserInput.schema.ts
const __makeSchema_MediaUpsertWithoutCoverUserInput_schema = () => z.object({
  update: z.union([z.lazy(() => MediaUpdateWithoutCoverUserInputObjectSchema), z.lazy(() => MediaUncheckedUpdateWithoutCoverUserInputObjectSchema)]),
  create: z.union([z.lazy(() => MediaCreateWithoutCoverUserInputObjectSchema), z.lazy(() => MediaUncheckedCreateWithoutCoverUserInputObjectSchema)]),
  where: z.lazy(() => MediaWhereInputObjectSchema).optional()
}).strict();
export const MediaUpsertWithoutCoverUserInputObjectSchema: z.ZodType<Prisma.MediaUpsertWithoutCoverUserInput> = __makeSchema_MediaUpsertWithoutCoverUserInput_schema() as unknown as z.ZodType<Prisma.MediaUpsertWithoutCoverUserInput>;
export const MediaUpsertWithoutCoverUserInputObjectZodSchema = __makeSchema_MediaUpsertWithoutCoverUserInput_schema();


// File: MediaUpdateToOneWithWhereWithoutCoverUserInput.schema.ts
const __makeSchema_MediaUpdateToOneWithWhereWithoutCoverUserInput_schema = () => z.object({
  where: z.lazy(() => MediaWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => MediaUpdateWithoutCoverUserInputObjectSchema), z.lazy(() => MediaUncheckedUpdateWithoutCoverUserInputObjectSchema)])
}).strict();
export const MediaUpdateToOneWithWhereWithoutCoverUserInputObjectSchema: z.ZodType<Prisma.MediaUpdateToOneWithWhereWithoutCoverUserInput> = __makeSchema_MediaUpdateToOneWithWhereWithoutCoverUserInput_schema() as unknown as z.ZodType<Prisma.MediaUpdateToOneWithWhereWithoutCoverUserInput>;
export const MediaUpdateToOneWithWhereWithoutCoverUserInputObjectZodSchema = __makeSchema_MediaUpdateToOneWithWhereWithoutCoverUserInput_schema();


// File: MediaUpdateWithoutCoverUserInput.schema.ts
const __makeSchema_MediaUpdateWithoutCoverUserInput_schema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  url: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  key: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  mimeType: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  size: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  avatarUser: z.lazy(() => UserUpdateOneWithoutAvatarNestedInputObjectSchema).optional()
}).strict();
export const MediaUpdateWithoutCoverUserInputObjectSchema: z.ZodType<Prisma.MediaUpdateWithoutCoverUserInput> = __makeSchema_MediaUpdateWithoutCoverUserInput_schema() as unknown as z.ZodType<Prisma.MediaUpdateWithoutCoverUserInput>;
export const MediaUpdateWithoutCoverUserInputObjectZodSchema = __makeSchema_MediaUpdateWithoutCoverUserInput_schema();


// File: MediaUncheckedUpdateWithoutCoverUserInput.schema.ts
const __makeSchema_MediaUncheckedUpdateWithoutCoverUserInput_schema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  url: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  key: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  mimeType: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  size: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  avatarUserId: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const MediaUncheckedUpdateWithoutCoverUserInputObjectSchema: z.ZodType<Prisma.MediaUncheckedUpdateWithoutCoverUserInput> = __makeSchema_MediaUncheckedUpdateWithoutCoverUserInput_schema() as unknown as z.ZodType<Prisma.MediaUncheckedUpdateWithoutCoverUserInput>;
export const MediaUncheckedUpdateWithoutCoverUserInputObjectZodSchema = __makeSchema_MediaUncheckedUpdateWithoutCoverUserInput_schema();


// File: SessionUpsertWithWhereUniqueWithoutUserInput.schema.ts
const __makeSchema_SessionUpsertWithWhereUniqueWithoutUserInput_schema = () => z.object({
  where: z.lazy(() => SessionWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => SessionUpdateWithoutUserInputObjectSchema), z.lazy(() => SessionUncheckedUpdateWithoutUserInputObjectSchema)]),
  create: z.union([z.lazy(() => SessionCreateWithoutUserInputObjectSchema), z.lazy(() => SessionUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const SessionUpsertWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.SessionUpsertWithWhereUniqueWithoutUserInput> = __makeSchema_SessionUpsertWithWhereUniqueWithoutUserInput_schema() as unknown as z.ZodType<Prisma.SessionUpsertWithWhereUniqueWithoutUserInput>;
export const SessionUpsertWithWhereUniqueWithoutUserInputObjectZodSchema = __makeSchema_SessionUpsertWithWhereUniqueWithoutUserInput_schema();


// File: SessionUpdateWithWhereUniqueWithoutUserInput.schema.ts
const __makeSchema_SessionUpdateWithWhereUniqueWithoutUserInput_schema = () => z.object({
  where: z.lazy(() => SessionWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => SessionUpdateWithoutUserInputObjectSchema), z.lazy(() => SessionUncheckedUpdateWithoutUserInputObjectSchema)])
}).strict();
export const SessionUpdateWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.SessionUpdateWithWhereUniqueWithoutUserInput> = __makeSchema_SessionUpdateWithWhereUniqueWithoutUserInput_schema() as unknown as z.ZodType<Prisma.SessionUpdateWithWhereUniqueWithoutUserInput>;
export const SessionUpdateWithWhereUniqueWithoutUserInputObjectZodSchema = __makeSchema_SessionUpdateWithWhereUniqueWithoutUserInput_schema();


// File: SessionUpdateManyWithWhereWithoutUserInput.schema.ts
const __makeSchema_SessionUpdateManyWithWhereWithoutUserInput_schema = () => z.object({
  where: z.lazy(() => SessionScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => SessionUpdateManyMutationInputObjectSchema), z.lazy(() => SessionUncheckedUpdateManyWithoutUserInputObjectSchema)])
}).strict();
export const SessionUpdateManyWithWhereWithoutUserInputObjectSchema: z.ZodType<Prisma.SessionUpdateManyWithWhereWithoutUserInput> = __makeSchema_SessionUpdateManyWithWhereWithoutUserInput_schema() as unknown as z.ZodType<Prisma.SessionUpdateManyWithWhereWithoutUserInput>;
export const SessionUpdateManyWithWhereWithoutUserInputObjectZodSchema = __makeSchema_SessionUpdateManyWithWhereWithoutUserInput_schema();


// File: SessionScalarWhereInput.schema.ts

const sessionscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => SessionScalarWhereInputObjectSchema), z.lazy(() => SessionScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => SessionScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => SessionScalarWhereInputObjectSchema), z.lazy(() => SessionScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  userId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  token: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  expiresAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  ipAddress: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  userAgent: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const SessionScalarWhereInputObjectSchema: z.ZodType<Prisma.SessionScalarWhereInput> = sessionscalarwhereinputSchema as unknown as z.ZodType<Prisma.SessionScalarWhereInput>;
export const SessionScalarWhereInputObjectZodSchema = sessionscalarwhereinputSchema;


// File: AccountUpsertWithWhereUniqueWithoutUserInput.schema.ts
const __makeSchema_AccountUpsertWithWhereUniqueWithoutUserInput_schema = () => z.object({
  where: z.lazy(() => AccountWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => AccountUpdateWithoutUserInputObjectSchema), z.lazy(() => AccountUncheckedUpdateWithoutUserInputObjectSchema)]),
  create: z.union([z.lazy(() => AccountCreateWithoutUserInputObjectSchema), z.lazy(() => AccountUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const AccountUpsertWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.AccountUpsertWithWhereUniqueWithoutUserInput> = __makeSchema_AccountUpsertWithWhereUniqueWithoutUserInput_schema() as unknown as z.ZodType<Prisma.AccountUpsertWithWhereUniqueWithoutUserInput>;
export const AccountUpsertWithWhereUniqueWithoutUserInputObjectZodSchema = __makeSchema_AccountUpsertWithWhereUniqueWithoutUserInput_schema();


// File: AccountUpdateWithWhereUniqueWithoutUserInput.schema.ts
const __makeSchema_AccountUpdateWithWhereUniqueWithoutUserInput_schema = () => z.object({
  where: z.lazy(() => AccountWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => AccountUpdateWithoutUserInputObjectSchema), z.lazy(() => AccountUncheckedUpdateWithoutUserInputObjectSchema)])
}).strict();
export const AccountUpdateWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.AccountUpdateWithWhereUniqueWithoutUserInput> = __makeSchema_AccountUpdateWithWhereUniqueWithoutUserInput_schema() as unknown as z.ZodType<Prisma.AccountUpdateWithWhereUniqueWithoutUserInput>;
export const AccountUpdateWithWhereUniqueWithoutUserInputObjectZodSchema = __makeSchema_AccountUpdateWithWhereUniqueWithoutUserInput_schema();


// File: AccountUpdateManyWithWhereWithoutUserInput.schema.ts
const __makeSchema_AccountUpdateManyWithWhereWithoutUserInput_schema = () => z.object({
  where: z.lazy(() => AccountScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => AccountUpdateManyMutationInputObjectSchema), z.lazy(() => AccountUncheckedUpdateManyWithoutUserInputObjectSchema)])
}).strict();
export const AccountUpdateManyWithWhereWithoutUserInputObjectSchema: z.ZodType<Prisma.AccountUpdateManyWithWhereWithoutUserInput> = __makeSchema_AccountUpdateManyWithWhereWithoutUserInput_schema() as unknown as z.ZodType<Prisma.AccountUpdateManyWithWhereWithoutUserInput>;
export const AccountUpdateManyWithWhereWithoutUserInputObjectZodSchema = __makeSchema_AccountUpdateManyWithWhereWithoutUserInput_schema();


// File: AccountScalarWhereInput.schema.ts

const accountscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => AccountScalarWhereInputObjectSchema), z.lazy(() => AccountScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => AccountScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => AccountScalarWhereInputObjectSchema), z.lazy(() => AccountScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  userId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  accountId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  providerId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  accessToken: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  refreshToken: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  accessTokenExpiresAt: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  refreshTokenExpiresAt: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  scope: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  idToken: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  password: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const AccountScalarWhereInputObjectSchema: z.ZodType<Prisma.AccountScalarWhereInput> = accountscalarwhereinputSchema as unknown as z.ZodType<Prisma.AccountScalarWhereInput>;
export const AccountScalarWhereInputObjectZodSchema = accountscalarwhereinputSchema;


// File: SessionCreateManyUserInput.schema.ts
const __makeSchema_SessionCreateManyUserInput_schema = () => z.object({
  id: z.string(),
  token: z.string(),
  expiresAt: z.coerce.date(),
  ipAddress: z.string().optional().nullable(),
  userAgent: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const SessionCreateManyUserInputObjectSchema: z.ZodType<Prisma.SessionCreateManyUserInput> = __makeSchema_SessionCreateManyUserInput_schema() as unknown as z.ZodType<Prisma.SessionCreateManyUserInput>;
export const SessionCreateManyUserInputObjectZodSchema = __makeSchema_SessionCreateManyUserInput_schema();


// File: AccountCreateManyUserInput.schema.ts
const __makeSchema_AccountCreateManyUserInput_schema = () => z.object({
  id: z.string(),
  accountId: z.string(),
  providerId: z.string(),
  accessToken: z.string().optional().nullable(),
  refreshToken: z.string().optional().nullable(),
  accessTokenExpiresAt: z.coerce.date().optional().nullable(),
  refreshTokenExpiresAt: z.coerce.date().optional().nullable(),
  scope: z.string().optional().nullable(),
  idToken: z.string().optional().nullable(),
  password: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const AccountCreateManyUserInputObjectSchema: z.ZodType<Prisma.AccountCreateManyUserInput> = __makeSchema_AccountCreateManyUserInput_schema() as unknown as z.ZodType<Prisma.AccountCreateManyUserInput>;
export const AccountCreateManyUserInputObjectZodSchema = __makeSchema_AccountCreateManyUserInput_schema();


// File: SessionUpdateWithoutUserInput.schema.ts
const __makeSchema_SessionUpdateWithoutUserInput_schema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  token: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  expiresAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  ipAddress: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  userAgent: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const SessionUpdateWithoutUserInputObjectSchema: z.ZodType<Prisma.SessionUpdateWithoutUserInput> = __makeSchema_SessionUpdateWithoutUserInput_schema() as unknown as z.ZodType<Prisma.SessionUpdateWithoutUserInput>;
export const SessionUpdateWithoutUserInputObjectZodSchema = __makeSchema_SessionUpdateWithoutUserInput_schema();


// File: SessionUncheckedUpdateWithoutUserInput.schema.ts
const __makeSchema_SessionUncheckedUpdateWithoutUserInput_schema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  token: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  expiresAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  ipAddress: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  userAgent: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const SessionUncheckedUpdateWithoutUserInputObjectSchema: z.ZodType<Prisma.SessionUncheckedUpdateWithoutUserInput> = __makeSchema_SessionUncheckedUpdateWithoutUserInput_schema() as unknown as z.ZodType<Prisma.SessionUncheckedUpdateWithoutUserInput>;
export const SessionUncheckedUpdateWithoutUserInputObjectZodSchema = __makeSchema_SessionUncheckedUpdateWithoutUserInput_schema();


// File: SessionUncheckedUpdateManyWithoutUserInput.schema.ts
const __makeSchema_SessionUncheckedUpdateManyWithoutUserInput_schema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  token: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  expiresAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  ipAddress: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  userAgent: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const SessionUncheckedUpdateManyWithoutUserInputObjectSchema: z.ZodType<Prisma.SessionUncheckedUpdateManyWithoutUserInput> = __makeSchema_SessionUncheckedUpdateManyWithoutUserInput_schema() as unknown as z.ZodType<Prisma.SessionUncheckedUpdateManyWithoutUserInput>;
export const SessionUncheckedUpdateManyWithoutUserInputObjectZodSchema = __makeSchema_SessionUncheckedUpdateManyWithoutUserInput_schema();


// File: AccountUpdateWithoutUserInput.schema.ts
const __makeSchema_AccountUpdateWithoutUserInput_schema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  accountId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  providerId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  accessToken: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  refreshToken: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  accessTokenExpiresAt: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  refreshTokenExpiresAt: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  scope: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  idToken: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  password: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const AccountUpdateWithoutUserInputObjectSchema: z.ZodType<Prisma.AccountUpdateWithoutUserInput> = __makeSchema_AccountUpdateWithoutUserInput_schema() as unknown as z.ZodType<Prisma.AccountUpdateWithoutUserInput>;
export const AccountUpdateWithoutUserInputObjectZodSchema = __makeSchema_AccountUpdateWithoutUserInput_schema();


// File: AccountUncheckedUpdateWithoutUserInput.schema.ts
const __makeSchema_AccountUncheckedUpdateWithoutUserInput_schema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  accountId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  providerId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  accessToken: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  refreshToken: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  accessTokenExpiresAt: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  refreshTokenExpiresAt: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  scope: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  idToken: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  password: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const AccountUncheckedUpdateWithoutUserInputObjectSchema: z.ZodType<Prisma.AccountUncheckedUpdateWithoutUserInput> = __makeSchema_AccountUncheckedUpdateWithoutUserInput_schema() as unknown as z.ZodType<Prisma.AccountUncheckedUpdateWithoutUserInput>;
export const AccountUncheckedUpdateWithoutUserInputObjectZodSchema = __makeSchema_AccountUncheckedUpdateWithoutUserInput_schema();


// File: AccountUncheckedUpdateManyWithoutUserInput.schema.ts
const __makeSchema_AccountUncheckedUpdateManyWithoutUserInput_schema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  accountId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  providerId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  accessToken: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  refreshToken: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  accessTokenExpiresAt: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  refreshTokenExpiresAt: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  scope: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  idToken: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  password: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const AccountUncheckedUpdateManyWithoutUserInputObjectSchema: z.ZodType<Prisma.AccountUncheckedUpdateManyWithoutUserInput> = __makeSchema_AccountUncheckedUpdateManyWithoutUserInput_schema() as unknown as z.ZodType<Prisma.AccountUncheckedUpdateManyWithoutUserInput>;
export const AccountUncheckedUpdateManyWithoutUserInputObjectZodSchema = __makeSchema_AccountUncheckedUpdateManyWithoutUserInput_schema();


// File: AccountCountAggregateInput.schema.ts
const __makeSchema_AccountCountAggregateInput_schema = () => z.object({
  id: z.literal(true).optional(),
  userId: z.literal(true).optional(),
  accountId: z.literal(true).optional(),
  providerId: z.literal(true).optional(),
  accessToken: z.literal(true).optional(),
  refreshToken: z.literal(true).optional(),
  accessTokenExpiresAt: z.literal(true).optional(),
  refreshTokenExpiresAt: z.literal(true).optional(),
  scope: z.literal(true).optional(),
  idToken: z.literal(true).optional(),
  password: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const AccountCountAggregateInputObjectSchema: z.ZodType<Prisma.AccountCountAggregateInputType> = __makeSchema_AccountCountAggregateInput_schema() as unknown as z.ZodType<Prisma.AccountCountAggregateInputType>;
export const AccountCountAggregateInputObjectZodSchema = __makeSchema_AccountCountAggregateInput_schema();


// File: AccountMinAggregateInput.schema.ts
const __makeSchema_AccountMinAggregateInput_schema = () => z.object({
  id: z.literal(true).optional(),
  userId: z.literal(true).optional(),
  accountId: z.literal(true).optional(),
  providerId: z.literal(true).optional(),
  accessToken: z.literal(true).optional(),
  refreshToken: z.literal(true).optional(),
  accessTokenExpiresAt: z.literal(true).optional(),
  refreshTokenExpiresAt: z.literal(true).optional(),
  scope: z.literal(true).optional(),
  idToken: z.literal(true).optional(),
  password: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional()
}).strict();
export const AccountMinAggregateInputObjectSchema: z.ZodType<Prisma.AccountMinAggregateInputType> = __makeSchema_AccountMinAggregateInput_schema() as unknown as z.ZodType<Prisma.AccountMinAggregateInputType>;
export const AccountMinAggregateInputObjectZodSchema = __makeSchema_AccountMinAggregateInput_schema();


// File: AccountMaxAggregateInput.schema.ts
const __makeSchema_AccountMaxAggregateInput_schema = () => z.object({
  id: z.literal(true).optional(),
  userId: z.literal(true).optional(),
  accountId: z.literal(true).optional(),
  providerId: z.literal(true).optional(),
  accessToken: z.literal(true).optional(),
  refreshToken: z.literal(true).optional(),
  accessTokenExpiresAt: z.literal(true).optional(),
  refreshTokenExpiresAt: z.literal(true).optional(),
  scope: z.literal(true).optional(),
  idToken: z.literal(true).optional(),
  password: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional()
}).strict();
export const AccountMaxAggregateInputObjectSchema: z.ZodType<Prisma.AccountMaxAggregateInputType> = __makeSchema_AccountMaxAggregateInput_schema() as unknown as z.ZodType<Prisma.AccountMaxAggregateInputType>;
export const AccountMaxAggregateInputObjectZodSchema = __makeSchema_AccountMaxAggregateInput_schema();


// File: ContactCountAggregateInput.schema.ts
const __makeSchema_ContactCountAggregateInput_schema = () => z.object({
  id: z.literal(true).optional(),
  email: z.literal(true).optional(),
  firstName: z.literal(true).optional(),
  lastName: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const ContactCountAggregateInputObjectSchema: z.ZodType<Prisma.ContactCountAggregateInputType> = __makeSchema_ContactCountAggregateInput_schema() as unknown as z.ZodType<Prisma.ContactCountAggregateInputType>;
export const ContactCountAggregateInputObjectZodSchema = __makeSchema_ContactCountAggregateInput_schema();


// File: ContactMinAggregateInput.schema.ts
const __makeSchema_ContactMinAggregateInput_schema = () => z.object({
  id: z.literal(true).optional(),
  email: z.literal(true).optional(),
  firstName: z.literal(true).optional(),
  lastName: z.literal(true).optional(),
  createdAt: z.literal(true).optional()
}).strict();
export const ContactMinAggregateInputObjectSchema: z.ZodType<Prisma.ContactMinAggregateInputType> = __makeSchema_ContactMinAggregateInput_schema() as unknown as z.ZodType<Prisma.ContactMinAggregateInputType>;
export const ContactMinAggregateInputObjectZodSchema = __makeSchema_ContactMinAggregateInput_schema();


// File: ContactMaxAggregateInput.schema.ts
const __makeSchema_ContactMaxAggregateInput_schema = () => z.object({
  id: z.literal(true).optional(),
  email: z.literal(true).optional(),
  firstName: z.literal(true).optional(),
  lastName: z.literal(true).optional(),
  createdAt: z.literal(true).optional()
}).strict();
export const ContactMaxAggregateInputObjectSchema: z.ZodType<Prisma.ContactMaxAggregateInputType> = __makeSchema_ContactMaxAggregateInput_schema() as unknown as z.ZodType<Prisma.ContactMaxAggregateInputType>;
export const ContactMaxAggregateInputObjectZodSchema = __makeSchema_ContactMaxAggregateInput_schema();


// File: MediaCountAggregateInput.schema.ts
const __makeSchema_MediaCountAggregateInput_schema = () => z.object({
  id: z.literal(true).optional(),
  url: z.literal(true).optional(),
  key: z.literal(true).optional(),
  mimeType: z.literal(true).optional(),
  size: z.literal(true).optional(),
  avatarUserId: z.literal(true).optional(),
  coverUserId: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const MediaCountAggregateInputObjectSchema: z.ZodType<Prisma.MediaCountAggregateInputType> = __makeSchema_MediaCountAggregateInput_schema() as unknown as z.ZodType<Prisma.MediaCountAggregateInputType>;
export const MediaCountAggregateInputObjectZodSchema = __makeSchema_MediaCountAggregateInput_schema();


// File: MediaAvgAggregateInput.schema.ts
const __makeSchema_MediaAvgAggregateInput_schema = () => z.object({
  size: z.literal(true).optional()
}).strict();
export const MediaAvgAggregateInputObjectSchema: z.ZodType<Prisma.MediaAvgAggregateInputType> = __makeSchema_MediaAvgAggregateInput_schema() as unknown as z.ZodType<Prisma.MediaAvgAggregateInputType>;
export const MediaAvgAggregateInputObjectZodSchema = __makeSchema_MediaAvgAggregateInput_schema();


// File: MediaSumAggregateInput.schema.ts
const __makeSchema_MediaSumAggregateInput_schema = () => z.object({
  size: z.literal(true).optional()
}).strict();
export const MediaSumAggregateInputObjectSchema: z.ZodType<Prisma.MediaSumAggregateInputType> = __makeSchema_MediaSumAggregateInput_schema() as unknown as z.ZodType<Prisma.MediaSumAggregateInputType>;
export const MediaSumAggregateInputObjectZodSchema = __makeSchema_MediaSumAggregateInput_schema();


// File: MediaMinAggregateInput.schema.ts
const __makeSchema_MediaMinAggregateInput_schema = () => z.object({
  id: z.literal(true).optional(),
  url: z.literal(true).optional(),
  key: z.literal(true).optional(),
  mimeType: z.literal(true).optional(),
  size: z.literal(true).optional(),
  avatarUserId: z.literal(true).optional(),
  coverUserId: z.literal(true).optional(),
  createdAt: z.literal(true).optional()
}).strict();
export const MediaMinAggregateInputObjectSchema: z.ZodType<Prisma.MediaMinAggregateInputType> = __makeSchema_MediaMinAggregateInput_schema() as unknown as z.ZodType<Prisma.MediaMinAggregateInputType>;
export const MediaMinAggregateInputObjectZodSchema = __makeSchema_MediaMinAggregateInput_schema();


// File: MediaMaxAggregateInput.schema.ts
const __makeSchema_MediaMaxAggregateInput_schema = () => z.object({
  id: z.literal(true).optional(),
  url: z.literal(true).optional(),
  key: z.literal(true).optional(),
  mimeType: z.literal(true).optional(),
  size: z.literal(true).optional(),
  avatarUserId: z.literal(true).optional(),
  coverUserId: z.literal(true).optional(),
  createdAt: z.literal(true).optional()
}).strict();
export const MediaMaxAggregateInputObjectSchema: z.ZodType<Prisma.MediaMaxAggregateInputType> = __makeSchema_MediaMaxAggregateInput_schema() as unknown as z.ZodType<Prisma.MediaMaxAggregateInputType>;
export const MediaMaxAggregateInputObjectZodSchema = __makeSchema_MediaMaxAggregateInput_schema();


// File: ProjectCountAggregateInput.schema.ts
const __makeSchema_ProjectCountAggregateInput_schema = () => z.object({
  id: z.literal(true).optional(),
  slug: z.literal(true).optional(),
  name: z.literal(true).optional(),
  weeks: z.literal(true).optional(),
  link: z.literal(true).optional(),
  cover: z.literal(true).optional(),
  video: z.literal(true).optional(),
  gallery: z.literal(true).optional(),
  description: z.literal(true).optional(),
  techStack: z.literal(true).optional(),
  date: z.literal(true).optional(),
  services: z.literal(true).optional(),
  team: z.literal(true).optional(),
  notes: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const ProjectCountAggregateInputObjectSchema: z.ZodType<Prisma.ProjectCountAggregateInputType> = __makeSchema_ProjectCountAggregateInput_schema() as unknown as z.ZodType<Prisma.ProjectCountAggregateInputType>;
export const ProjectCountAggregateInputObjectZodSchema = __makeSchema_ProjectCountAggregateInput_schema();


// File: ProjectAvgAggregateInput.schema.ts
const __makeSchema_ProjectAvgAggregateInput_schema = () => z.object({
  id: z.literal(true).optional(),
  weeks: z.literal(true).optional()
}).strict();
export const ProjectAvgAggregateInputObjectSchema: z.ZodType<Prisma.ProjectAvgAggregateInputType> = __makeSchema_ProjectAvgAggregateInput_schema() as unknown as z.ZodType<Prisma.ProjectAvgAggregateInputType>;
export const ProjectAvgAggregateInputObjectZodSchema = __makeSchema_ProjectAvgAggregateInput_schema();


// File: ProjectSumAggregateInput.schema.ts
const __makeSchema_ProjectSumAggregateInput_schema = () => z.object({
  id: z.literal(true).optional(),
  weeks: z.literal(true).optional()
}).strict();
export const ProjectSumAggregateInputObjectSchema: z.ZodType<Prisma.ProjectSumAggregateInputType> = __makeSchema_ProjectSumAggregateInput_schema() as unknown as z.ZodType<Prisma.ProjectSumAggregateInputType>;
export const ProjectSumAggregateInputObjectZodSchema = __makeSchema_ProjectSumAggregateInput_schema();


// File: ProjectMinAggregateInput.schema.ts
const __makeSchema_ProjectMinAggregateInput_schema = () => z.object({
  id: z.literal(true).optional(),
  slug: z.literal(true).optional(),
  name: z.literal(true).optional(),
  weeks: z.literal(true).optional(),
  link: z.literal(true).optional(),
  cover: z.literal(true).optional(),
  video: z.literal(true).optional(),
  description: z.literal(true).optional(),
  date: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional()
}).strict();
export const ProjectMinAggregateInputObjectSchema: z.ZodType<Prisma.ProjectMinAggregateInputType> = __makeSchema_ProjectMinAggregateInput_schema() as unknown as z.ZodType<Prisma.ProjectMinAggregateInputType>;
export const ProjectMinAggregateInputObjectZodSchema = __makeSchema_ProjectMinAggregateInput_schema();


// File: ProjectMaxAggregateInput.schema.ts
const __makeSchema_ProjectMaxAggregateInput_schema = () => z.object({
  id: z.literal(true).optional(),
  slug: z.literal(true).optional(),
  name: z.literal(true).optional(),
  weeks: z.literal(true).optional(),
  link: z.literal(true).optional(),
  cover: z.literal(true).optional(),
  video: z.literal(true).optional(),
  description: z.literal(true).optional(),
  date: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional()
}).strict();
export const ProjectMaxAggregateInputObjectSchema: z.ZodType<Prisma.ProjectMaxAggregateInputType> = __makeSchema_ProjectMaxAggregateInput_schema() as unknown as z.ZodType<Prisma.ProjectMaxAggregateInputType>;
export const ProjectMaxAggregateInputObjectZodSchema = __makeSchema_ProjectMaxAggregateInput_schema();


// File: SessionCountAggregateInput.schema.ts
const __makeSchema_SessionCountAggregateInput_schema = () => z.object({
  id: z.literal(true).optional(),
  userId: z.literal(true).optional(),
  token: z.literal(true).optional(),
  expiresAt: z.literal(true).optional(),
  ipAddress: z.literal(true).optional(),
  userAgent: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const SessionCountAggregateInputObjectSchema: z.ZodType<Prisma.SessionCountAggregateInputType> = __makeSchema_SessionCountAggregateInput_schema() as unknown as z.ZodType<Prisma.SessionCountAggregateInputType>;
export const SessionCountAggregateInputObjectZodSchema = __makeSchema_SessionCountAggregateInput_schema();


// File: SessionMinAggregateInput.schema.ts
const __makeSchema_SessionMinAggregateInput_schema = () => z.object({
  id: z.literal(true).optional(),
  userId: z.literal(true).optional(),
  token: z.literal(true).optional(),
  expiresAt: z.literal(true).optional(),
  ipAddress: z.literal(true).optional(),
  userAgent: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional()
}).strict();
export const SessionMinAggregateInputObjectSchema: z.ZodType<Prisma.SessionMinAggregateInputType> = __makeSchema_SessionMinAggregateInput_schema() as unknown as z.ZodType<Prisma.SessionMinAggregateInputType>;
export const SessionMinAggregateInputObjectZodSchema = __makeSchema_SessionMinAggregateInput_schema();


// File: SessionMaxAggregateInput.schema.ts
const __makeSchema_SessionMaxAggregateInput_schema = () => z.object({
  id: z.literal(true).optional(),
  userId: z.literal(true).optional(),
  token: z.literal(true).optional(),
  expiresAt: z.literal(true).optional(),
  ipAddress: z.literal(true).optional(),
  userAgent: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional()
}).strict();
export const SessionMaxAggregateInputObjectSchema: z.ZodType<Prisma.SessionMaxAggregateInputType> = __makeSchema_SessionMaxAggregateInput_schema() as unknown as z.ZodType<Prisma.SessionMaxAggregateInputType>;
export const SessionMaxAggregateInputObjectZodSchema = __makeSchema_SessionMaxAggregateInput_schema();


// File: UserCountAggregateInput.schema.ts
const __makeSchema_UserCountAggregateInput_schema = () => z.object({
  id: z.literal(true).optional(),
  email: z.literal(true).optional(),
  firstName: z.literal(true).optional(),
  lastName: z.literal(true).optional(),
  password: z.literal(true).optional(),
  emailVerified: z.literal(true).optional(),
  role: z.literal(true).optional(),
  status: z.literal(true).optional(),
  lastLoginAt: z.literal(true).optional(),
  lastLoginIp: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const UserCountAggregateInputObjectSchema: z.ZodType<Prisma.UserCountAggregateInputType> = __makeSchema_UserCountAggregateInput_schema() as unknown as z.ZodType<Prisma.UserCountAggregateInputType>;
export const UserCountAggregateInputObjectZodSchema = __makeSchema_UserCountAggregateInput_schema();


// File: UserMinAggregateInput.schema.ts
const __makeSchema_UserMinAggregateInput_schema = () => z.object({
  id: z.literal(true).optional(),
  email: z.literal(true).optional(),
  firstName: z.literal(true).optional(),
  lastName: z.literal(true).optional(),
  password: z.literal(true).optional(),
  emailVerified: z.literal(true).optional(),
  role: z.literal(true).optional(),
  status: z.literal(true).optional(),
  lastLoginAt: z.literal(true).optional(),
  lastLoginIp: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional()
}).strict();
export const UserMinAggregateInputObjectSchema: z.ZodType<Prisma.UserMinAggregateInputType> = __makeSchema_UserMinAggregateInput_schema() as unknown as z.ZodType<Prisma.UserMinAggregateInputType>;
export const UserMinAggregateInputObjectZodSchema = __makeSchema_UserMinAggregateInput_schema();


// File: UserMaxAggregateInput.schema.ts
const __makeSchema_UserMaxAggregateInput_schema = () => z.object({
  id: z.literal(true).optional(),
  email: z.literal(true).optional(),
  firstName: z.literal(true).optional(),
  lastName: z.literal(true).optional(),
  password: z.literal(true).optional(),
  emailVerified: z.literal(true).optional(),
  role: z.literal(true).optional(),
  status: z.literal(true).optional(),
  lastLoginAt: z.literal(true).optional(),
  lastLoginIp: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional()
}).strict();
export const UserMaxAggregateInputObjectSchema: z.ZodType<Prisma.UserMaxAggregateInputType> = __makeSchema_UserMaxAggregateInput_schema() as unknown as z.ZodType<Prisma.UserMaxAggregateInputType>;
export const UserMaxAggregateInputObjectZodSchema = __makeSchema_UserMaxAggregateInput_schema();


// File: VerificationCountAggregateInput.schema.ts
const __makeSchema_VerificationCountAggregateInput_schema = () => z.object({
  id: z.literal(true).optional(),
  hashedIdentifier: z.literal(true).optional(),
  hashedValue: z.literal(true).optional(),
  expiresAt: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const VerificationCountAggregateInputObjectSchema: z.ZodType<Prisma.VerificationCountAggregateInputType> = __makeSchema_VerificationCountAggregateInput_schema() as unknown as z.ZodType<Prisma.VerificationCountAggregateInputType>;
export const VerificationCountAggregateInputObjectZodSchema = __makeSchema_VerificationCountAggregateInput_schema();


// File: VerificationMinAggregateInput.schema.ts
const __makeSchema_VerificationMinAggregateInput_schema = () => z.object({
  id: z.literal(true).optional(),
  hashedIdentifier: z.literal(true).optional(),
  hashedValue: z.literal(true).optional(),
  expiresAt: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional()
}).strict();
export const VerificationMinAggregateInputObjectSchema: z.ZodType<Prisma.VerificationMinAggregateInputType> = __makeSchema_VerificationMinAggregateInput_schema() as unknown as z.ZodType<Prisma.VerificationMinAggregateInputType>;
export const VerificationMinAggregateInputObjectZodSchema = __makeSchema_VerificationMinAggregateInput_schema();


// File: VerificationMaxAggregateInput.schema.ts
const __makeSchema_VerificationMaxAggregateInput_schema = () => z.object({
  id: z.literal(true).optional(),
  hashedIdentifier: z.literal(true).optional(),
  hashedValue: z.literal(true).optional(),
  expiresAt: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional()
}).strict();
export const VerificationMaxAggregateInputObjectSchema: z.ZodType<Prisma.VerificationMaxAggregateInputType> = __makeSchema_VerificationMaxAggregateInput_schema() as unknown as z.ZodType<Prisma.VerificationMaxAggregateInputType>;
export const VerificationMaxAggregateInputObjectZodSchema = __makeSchema_VerificationMaxAggregateInput_schema();


// File: UserCountOutputTypeSelect.schema.ts
const __makeSchema_UserCountOutputTypeSelect_schema = () => z.object({
  sessions: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeCountSessionsArgsObjectSchema)]).optional(),
  accounts: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeCountAccountsArgsObjectSchema)]).optional()
}).strict();
export const UserCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.UserCountOutputTypeSelect> = __makeSchema_UserCountOutputTypeSelect_schema() as unknown as z.ZodType<Prisma.UserCountOutputTypeSelect>;
export const UserCountOutputTypeSelectObjectZodSchema = __makeSchema_UserCountOutputTypeSelect_schema();


// File: UserCountOutputTypeArgs.schema.ts
const __makeSchema_UserCountOutputTypeArgs_schema = () => z.object({
  select: z.lazy(() => UserCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const UserCountOutputTypeArgsObjectSchema = __makeSchema_UserCountOutputTypeArgs_schema();
export const UserCountOutputTypeArgsObjectZodSchema = __makeSchema_UserCountOutputTypeArgs_schema();


// File: UserCountOutputTypeCountSessionsArgs.schema.ts
const __makeSchema_UserCountOutputTypeCountSessionsArgs_schema = () => z.object({
  where: z.lazy(() => SessionWhereInputObjectSchema).optional()
}).strict();
export const UserCountOutputTypeCountSessionsArgsObjectSchema = __makeSchema_UserCountOutputTypeCountSessionsArgs_schema();
export const UserCountOutputTypeCountSessionsArgsObjectZodSchema = __makeSchema_UserCountOutputTypeCountSessionsArgs_schema();


// File: UserCountOutputTypeCountAccountsArgs.schema.ts
const __makeSchema_UserCountOutputTypeCountAccountsArgs_schema = () => z.object({
  where: z.lazy(() => AccountWhereInputObjectSchema).optional()
}).strict();
export const UserCountOutputTypeCountAccountsArgsObjectSchema = __makeSchema_UserCountOutputTypeCountAccountsArgs_schema();
export const UserCountOutputTypeCountAccountsArgsObjectZodSchema = __makeSchema_UserCountOutputTypeCountAccountsArgs_schema();


// File: AccountSelect.schema.ts
const __makeSchema_AccountSelect_schema = () => z.object({
  id: z.boolean().optional(),
  userId: z.boolean().optional(),
  accountId: z.boolean().optional(),
  providerId: z.boolean().optional(),
  accessToken: z.boolean().optional(),
  refreshToken: z.boolean().optional(),
  accessTokenExpiresAt: z.boolean().optional(),
  refreshTokenExpiresAt: z.boolean().optional(),
  scope: z.boolean().optional(),
  idToken: z.boolean().optional(),
  password: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional()
}).strict();
export const AccountSelectObjectSchema: z.ZodType<Prisma.AccountSelect> = __makeSchema_AccountSelect_schema() as unknown as z.ZodType<Prisma.AccountSelect>;
export const AccountSelectObjectZodSchema = __makeSchema_AccountSelect_schema();


// File: ContactSelect.schema.ts
const __makeSchema_ContactSelect_schema = () => z.object({
  id: z.boolean().optional(),
  email: z.boolean().optional(),
  firstName: z.boolean().optional(),
  lastName: z.boolean().optional(),
  createdAt: z.boolean().optional()
}).strict();
export const ContactSelectObjectSchema: z.ZodType<Prisma.ContactSelect> = __makeSchema_ContactSelect_schema() as unknown as z.ZodType<Prisma.ContactSelect>;
export const ContactSelectObjectZodSchema = __makeSchema_ContactSelect_schema();


// File: MediaSelect.schema.ts
const __makeSchema_MediaSelect_schema = () => z.object({
  id: z.boolean().optional(),
  url: z.boolean().optional(),
  key: z.boolean().optional(),
  mimeType: z.boolean().optional(),
  size: z.boolean().optional(),
  avatarUser: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  avatarUserId: z.boolean().optional(),
  coverUser: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  coverUserId: z.boolean().optional(),
  createdAt: z.boolean().optional()
}).strict();
export const MediaSelectObjectSchema: z.ZodType<Prisma.MediaSelect> = __makeSchema_MediaSelect_schema() as unknown as z.ZodType<Prisma.MediaSelect>;
export const MediaSelectObjectZodSchema = __makeSchema_MediaSelect_schema();


// File: ProjectSelect.schema.ts
const __makeSchema_ProjectSelect_schema = () => z.object({
  id: z.boolean().optional(),
  slug: z.boolean().optional(),
  name: z.boolean().optional(),
  weeks: z.boolean().optional(),
  link: z.boolean().optional(),
  cover: z.boolean().optional(),
  video: z.boolean().optional(),
  gallery: z.boolean().optional(),
  description: z.boolean().optional(),
  techStack: z.boolean().optional(),
  date: z.boolean().optional(),
  services: z.boolean().optional(),
  team: z.boolean().optional(),
  notes: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional()
}).strict();
export const ProjectSelectObjectSchema: z.ZodType<Prisma.ProjectSelect> = __makeSchema_ProjectSelect_schema() as unknown as z.ZodType<Prisma.ProjectSelect>;
export const ProjectSelectObjectZodSchema = __makeSchema_ProjectSelect_schema();


// File: SessionSelect.schema.ts
const __makeSchema_SessionSelect_schema = () => z.object({
  id: z.boolean().optional(),
  userId: z.boolean().optional(),
  token: z.boolean().optional(),
  expiresAt: z.boolean().optional(),
  ipAddress: z.boolean().optional(),
  userAgent: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional()
}).strict();
export const SessionSelectObjectSchema: z.ZodType<Prisma.SessionSelect> = __makeSchema_SessionSelect_schema() as unknown as z.ZodType<Prisma.SessionSelect>;
export const SessionSelectObjectZodSchema = __makeSchema_SessionSelect_schema();


// File: UserSelect.schema.ts
const __makeSchema_UserSelect_schema = () => z.object({
  id: z.boolean().optional(),
  email: z.boolean().optional(),
  firstName: z.boolean().optional(),
  lastName: z.boolean().optional(),
  password: z.boolean().optional(),
  emailVerified: z.boolean().optional(),
  role: z.boolean().optional(),
  status: z.boolean().optional(),
  lastLoginAt: z.boolean().optional(),
  lastLoginIp: z.boolean().optional(),
  avatar: z.union([z.boolean(), z.lazy(() => MediaArgsObjectSchema)]).optional(),
  coverImage: z.union([z.boolean(), z.lazy(() => MediaArgsObjectSchema)]).optional(),
  sessions: z.union([z.boolean(), z.lazy(() => SessionFindManySchema)]).optional(),
  accounts: z.union([z.boolean(), z.lazy(() => AccountFindManySchema)]).optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  _count: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const UserSelectObjectSchema: z.ZodType<Prisma.UserSelect> = __makeSchema_UserSelect_schema() as unknown as z.ZodType<Prisma.UserSelect>;
export const UserSelectObjectZodSchema = __makeSchema_UserSelect_schema();


// File: VerificationSelect.schema.ts
const __makeSchema_VerificationSelect_schema = () => z.object({
  id: z.boolean().optional(),
  hashedIdentifier: z.boolean().optional(),
  hashedValue: z.boolean().optional(),
  expiresAt: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional()
}).strict();
export const VerificationSelectObjectSchema: z.ZodType<Prisma.VerificationSelect> = __makeSchema_VerificationSelect_schema() as unknown as z.ZodType<Prisma.VerificationSelect>;
export const VerificationSelectObjectZodSchema = __makeSchema_VerificationSelect_schema();


// File: AccountArgs.schema.ts
const __makeSchema_AccountArgs_schema = () => z.object({
  select: z.lazy(() => AccountSelectObjectSchema).optional(),
  include: z.lazy(() => AccountIncludeObjectSchema).optional()
}).strict();
export const AccountArgsObjectSchema = __makeSchema_AccountArgs_schema();
export const AccountArgsObjectZodSchema = __makeSchema_AccountArgs_schema();


// File: ContactArgs.schema.ts
const __makeSchema_ContactArgs_schema = () => z.object({
  select: z.lazy(() => ContactSelectObjectSchema).optional()
}).strict();
export const ContactArgsObjectSchema = __makeSchema_ContactArgs_schema();
export const ContactArgsObjectZodSchema = __makeSchema_ContactArgs_schema();


// File: MediaArgs.schema.ts
const __makeSchema_MediaArgs_schema = () => z.object({
  select: z.lazy(() => MediaSelectObjectSchema).optional(),
  include: z.lazy(() => MediaIncludeObjectSchema).optional()
}).strict();
export const MediaArgsObjectSchema = __makeSchema_MediaArgs_schema();
export const MediaArgsObjectZodSchema = __makeSchema_MediaArgs_schema();


// File: ProjectArgs.schema.ts
const __makeSchema_ProjectArgs_schema = () => z.object({
  select: z.lazy(() => ProjectSelectObjectSchema).optional()
}).strict();
export const ProjectArgsObjectSchema = __makeSchema_ProjectArgs_schema();
export const ProjectArgsObjectZodSchema = __makeSchema_ProjectArgs_schema();


// File: SessionArgs.schema.ts
const __makeSchema_SessionArgs_schema = () => z.object({
  select: z.lazy(() => SessionSelectObjectSchema).optional(),
  include: z.lazy(() => SessionIncludeObjectSchema).optional()
}).strict();
export const SessionArgsObjectSchema = __makeSchema_SessionArgs_schema();
export const SessionArgsObjectZodSchema = __makeSchema_SessionArgs_schema();


// File: UserArgs.schema.ts
const __makeSchema_UserArgs_schema = () => z.object({
  select: z.lazy(() => UserSelectObjectSchema).optional(),
  include: z.lazy(() => UserIncludeObjectSchema).optional()
}).strict();
export const UserArgsObjectSchema = __makeSchema_UserArgs_schema();
export const UserArgsObjectZodSchema = __makeSchema_UserArgs_schema();


// File: VerificationArgs.schema.ts
const __makeSchema_VerificationArgs_schema = () => z.object({
  select: z.lazy(() => VerificationSelectObjectSchema).optional()
}).strict();
export const VerificationArgsObjectSchema = __makeSchema_VerificationArgs_schema();
export const VerificationArgsObjectZodSchema = __makeSchema_VerificationArgs_schema();


// File: AccountInclude.schema.ts
const __makeSchema_AccountInclude_schema = () => z.object({
  user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional()
}).strict();
export const AccountIncludeObjectSchema: z.ZodType<Prisma.AccountInclude> = __makeSchema_AccountInclude_schema() as unknown as z.ZodType<Prisma.AccountInclude>;
export const AccountIncludeObjectZodSchema = __makeSchema_AccountInclude_schema();


// File: MediaInclude.schema.ts
const __makeSchema_MediaInclude_schema = () => z.object({
  avatarUser: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  coverUser: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional()
}).strict();
export const MediaIncludeObjectSchema: z.ZodType<Prisma.MediaInclude> = __makeSchema_MediaInclude_schema() as unknown as z.ZodType<Prisma.MediaInclude>;
export const MediaIncludeObjectZodSchema = __makeSchema_MediaInclude_schema();


// File: SessionInclude.schema.ts
const __makeSchema_SessionInclude_schema = () => z.object({
  user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional()
}).strict();
export const SessionIncludeObjectSchema: z.ZodType<Prisma.SessionInclude> = __makeSchema_SessionInclude_schema() as unknown as z.ZodType<Prisma.SessionInclude>;
export const SessionIncludeObjectZodSchema = __makeSchema_SessionInclude_schema();


// File: UserInclude.schema.ts
const __makeSchema_UserInclude_schema = () => z.object({
  avatar: z.union([z.boolean(), z.lazy(() => MediaArgsObjectSchema)]).optional(),
  coverImage: z.union([z.boolean(), z.lazy(() => MediaArgsObjectSchema)]).optional(),
  sessions: z.union([z.boolean(), z.lazy(() => SessionFindManySchema)]).optional(),
  accounts: z.union([z.boolean(), z.lazy(() => AccountFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const UserIncludeObjectSchema: z.ZodType<Prisma.UserInclude> = __makeSchema_UserInclude_schema() as unknown as z.ZodType<Prisma.UserInclude>;
export const UserIncludeObjectZodSchema = __makeSchema_UserInclude_schema();


// File: findUniqueAccount.schema.ts

export const AccountFindUniqueSchema: z.ZodType<Prisma.AccountFindUniqueArgs> = z.object({ select: AccountSelectObjectSchema.optional(), include: AccountIncludeObjectSchema.optional(), where: AccountWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.AccountFindUniqueArgs>;

export const AccountFindUniqueZodSchema = z.object({ select: AccountSelectObjectSchema.optional(), include: AccountIncludeObjectSchema.optional(), where: AccountWhereUniqueInputObjectSchema }).strict();

// File: findUniqueOrThrowAccount.schema.ts

export const AccountFindUniqueOrThrowSchema: z.ZodType<Prisma.AccountFindUniqueOrThrowArgs> = z.object({ select: AccountSelectObjectSchema.optional(), include: AccountIncludeObjectSchema.optional(), where: AccountWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.AccountFindUniqueOrThrowArgs>;

export const AccountFindUniqueOrThrowZodSchema = z.object({ select: AccountSelectObjectSchema.optional(), include: AccountIncludeObjectSchema.optional(), where: AccountWhereUniqueInputObjectSchema }).strict();

// File: findFirstAccount.schema.ts

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const AccountFindFirstSelectSchema__findFirstAccount_schema: z.ZodType<Prisma.AccountSelect> = z.object({
    id: z.boolean().optional(),
    userId: z.boolean().optional(),
    accountId: z.boolean().optional(),
    providerId: z.boolean().optional(),
    accessToken: z.boolean().optional(),
    refreshToken: z.boolean().optional(),
    accessTokenExpiresAt: z.boolean().optional(),
    refreshTokenExpiresAt: z.boolean().optional(),
    scope: z.boolean().optional(),
    idToken: z.boolean().optional(),
    password: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional()
  }).strict() as unknown as z.ZodType<Prisma.AccountSelect>;

export const AccountFindFirstSelectZodSchema__findFirstAccount_schema = z.object({
    id: z.boolean().optional(),
    userId: z.boolean().optional(),
    accountId: z.boolean().optional(),
    providerId: z.boolean().optional(),
    accessToken: z.boolean().optional(),
    refreshToken: z.boolean().optional(),
    accessTokenExpiresAt: z.boolean().optional(),
    refreshTokenExpiresAt: z.boolean().optional(),
    scope: z.boolean().optional(),
    idToken: z.boolean().optional(),
    password: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional()
  }).strict();

export const AccountFindFirstSchema: z.ZodType<Prisma.AccountFindFirstArgs> = z.object({ select: AccountFindFirstSelectSchema__findFirstAccount_schema.optional(), include: z.lazy(() => AccountIncludeObjectSchema.optional()), orderBy: z.union([AccountOrderByWithRelationInputObjectSchema, AccountOrderByWithRelationInputObjectSchema.array()]).optional(), where: AccountWhereInputObjectSchema.optional(), cursor: AccountWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([AccountScalarFieldEnumSchema, AccountScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.AccountFindFirstArgs>;

export const AccountFindFirstZodSchema = z.object({ select: AccountFindFirstSelectSchema__findFirstAccount_schema.optional(), include: z.lazy(() => AccountIncludeObjectSchema.optional()), orderBy: z.union([AccountOrderByWithRelationInputObjectSchema, AccountOrderByWithRelationInputObjectSchema.array()]).optional(), where: AccountWhereInputObjectSchema.optional(), cursor: AccountWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([AccountScalarFieldEnumSchema, AccountScalarFieldEnumSchema.array()]).optional() }).strict();

// File: findFirstOrThrowAccount.schema.ts

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const AccountFindFirstOrThrowSelectSchema__findFirstOrThrowAccount_schema: z.ZodType<Prisma.AccountSelect> = z.object({
    id: z.boolean().optional(),
    userId: z.boolean().optional(),
    accountId: z.boolean().optional(),
    providerId: z.boolean().optional(),
    accessToken: z.boolean().optional(),
    refreshToken: z.boolean().optional(),
    accessTokenExpiresAt: z.boolean().optional(),
    refreshTokenExpiresAt: z.boolean().optional(),
    scope: z.boolean().optional(),
    idToken: z.boolean().optional(),
    password: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional()
  }).strict() as unknown as z.ZodType<Prisma.AccountSelect>;

export const AccountFindFirstOrThrowSelectZodSchema__findFirstOrThrowAccount_schema = z.object({
    id: z.boolean().optional(),
    userId: z.boolean().optional(),
    accountId: z.boolean().optional(),
    providerId: z.boolean().optional(),
    accessToken: z.boolean().optional(),
    refreshToken: z.boolean().optional(),
    accessTokenExpiresAt: z.boolean().optional(),
    refreshTokenExpiresAt: z.boolean().optional(),
    scope: z.boolean().optional(),
    idToken: z.boolean().optional(),
    password: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional()
  }).strict();

export const AccountFindFirstOrThrowSchema: z.ZodType<Prisma.AccountFindFirstOrThrowArgs> = z.object({ select: AccountFindFirstOrThrowSelectSchema__findFirstOrThrowAccount_schema.optional(), include: z.lazy(() => AccountIncludeObjectSchema.optional()), orderBy: z.union([AccountOrderByWithRelationInputObjectSchema, AccountOrderByWithRelationInputObjectSchema.array()]).optional(), where: AccountWhereInputObjectSchema.optional(), cursor: AccountWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([AccountScalarFieldEnumSchema, AccountScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.AccountFindFirstOrThrowArgs>;

export const AccountFindFirstOrThrowZodSchema = z.object({ select: AccountFindFirstOrThrowSelectSchema__findFirstOrThrowAccount_schema.optional(), include: z.lazy(() => AccountIncludeObjectSchema.optional()), orderBy: z.union([AccountOrderByWithRelationInputObjectSchema, AccountOrderByWithRelationInputObjectSchema.array()]).optional(), where: AccountWhereInputObjectSchema.optional(), cursor: AccountWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([AccountScalarFieldEnumSchema, AccountScalarFieldEnumSchema.array()]).optional() }).strict();

// File: findManyAccount.schema.ts

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const AccountFindManySelectSchema__findManyAccount_schema: z.ZodType<Prisma.AccountSelect> = z.object({
    id: z.boolean().optional(),
    userId: z.boolean().optional(),
    accountId: z.boolean().optional(),
    providerId: z.boolean().optional(),
    accessToken: z.boolean().optional(),
    refreshToken: z.boolean().optional(),
    accessTokenExpiresAt: z.boolean().optional(),
    refreshTokenExpiresAt: z.boolean().optional(),
    scope: z.boolean().optional(),
    idToken: z.boolean().optional(),
    password: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional()
  }).strict() as unknown as z.ZodType<Prisma.AccountSelect>;

export const AccountFindManySelectZodSchema__findManyAccount_schema = z.object({
    id: z.boolean().optional(),
    userId: z.boolean().optional(),
    accountId: z.boolean().optional(),
    providerId: z.boolean().optional(),
    accessToken: z.boolean().optional(),
    refreshToken: z.boolean().optional(),
    accessTokenExpiresAt: z.boolean().optional(),
    refreshTokenExpiresAt: z.boolean().optional(),
    scope: z.boolean().optional(),
    idToken: z.boolean().optional(),
    password: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional()
  }).strict();

export const AccountFindManySchema: z.ZodType<Prisma.AccountFindManyArgs> = z.object({ select: AccountFindManySelectSchema__findManyAccount_schema.optional(), include: z.lazy(() => AccountIncludeObjectSchema.optional()), orderBy: z.union([AccountOrderByWithRelationInputObjectSchema, AccountOrderByWithRelationInputObjectSchema.array()]).optional(), where: AccountWhereInputObjectSchema.optional(), cursor: AccountWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([AccountScalarFieldEnumSchema, AccountScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.AccountFindManyArgs>;

export const AccountFindManyZodSchema = z.object({ select: AccountFindManySelectSchema__findManyAccount_schema.optional(), include: z.lazy(() => AccountIncludeObjectSchema.optional()), orderBy: z.union([AccountOrderByWithRelationInputObjectSchema, AccountOrderByWithRelationInputObjectSchema.array()]).optional(), where: AccountWhereInputObjectSchema.optional(), cursor: AccountWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([AccountScalarFieldEnumSchema, AccountScalarFieldEnumSchema.array()]).optional() }).strict();

// File: countAccount.schema.ts

export const AccountCountSchema: z.ZodType<Prisma.AccountCountArgs> = z.object({ orderBy: z.union([AccountOrderByWithRelationInputObjectSchema, AccountOrderByWithRelationInputObjectSchema.array()]).optional(), where: AccountWhereInputObjectSchema.optional(), cursor: AccountWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), AccountCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.AccountCountArgs>;

export const AccountCountZodSchema = z.object({ orderBy: z.union([AccountOrderByWithRelationInputObjectSchema, AccountOrderByWithRelationInputObjectSchema.array()]).optional(), where: AccountWhereInputObjectSchema.optional(), cursor: AccountWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), AccountCountAggregateInputObjectSchema ]).optional() }).strict();

// File: createOneAccount.schema.ts

export const AccountCreateOneSchema: z.ZodType<Prisma.AccountCreateArgs> = z.object({ select: AccountSelectObjectSchema.optional(), include: AccountIncludeObjectSchema.optional(), data: z.union([AccountCreateInputObjectSchema, AccountUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.AccountCreateArgs>;

export const AccountCreateOneZodSchema = z.object({ select: AccountSelectObjectSchema.optional(), include: AccountIncludeObjectSchema.optional(), data: z.union([AccountCreateInputObjectSchema, AccountUncheckedCreateInputObjectSchema]) }).strict();

// File: createManyAccount.schema.ts

export const AccountCreateManySchema: z.ZodType<Prisma.AccountCreateManyArgs> = z.object({ data: z.union([ AccountCreateManyInputObjectSchema, z.array(AccountCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.AccountCreateManyArgs>;

export const AccountCreateManyZodSchema = z.object({ data: z.union([ AccountCreateManyInputObjectSchema, z.array(AccountCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();

// File: createManyAndReturnAccount.schema.ts

export const AccountCreateManyAndReturnSchema: z.ZodType<Prisma.AccountCreateManyAndReturnArgs> = z.object({ select: AccountSelectObjectSchema.optional(), data: z.union([ AccountCreateManyInputObjectSchema, z.array(AccountCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.AccountCreateManyAndReturnArgs>;

export const AccountCreateManyAndReturnZodSchema = z.object({ select: AccountSelectObjectSchema.optional(), data: z.union([ AccountCreateManyInputObjectSchema, z.array(AccountCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();

// File: deleteOneAccount.schema.ts

export const AccountDeleteOneSchema: z.ZodType<Prisma.AccountDeleteArgs> = z.object({ select: AccountSelectObjectSchema.optional(), include: AccountIncludeObjectSchema.optional(), where: AccountWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.AccountDeleteArgs>;

export const AccountDeleteOneZodSchema = z.object({ select: AccountSelectObjectSchema.optional(), include: AccountIncludeObjectSchema.optional(), where: AccountWhereUniqueInputObjectSchema }).strict();

// File: deleteManyAccount.schema.ts

export const AccountDeleteManySchema: z.ZodType<Prisma.AccountDeleteManyArgs> = z.object({ where: AccountWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.AccountDeleteManyArgs>;

export const AccountDeleteManyZodSchema = z.object({ where: AccountWhereInputObjectSchema.optional() }).strict();

// File: updateOneAccount.schema.ts

export const AccountUpdateOneSchema: z.ZodType<Prisma.AccountUpdateArgs> = z.object({ select: AccountSelectObjectSchema.optional(), include: AccountIncludeObjectSchema.optional(), data: z.union([AccountUpdateInputObjectSchema, AccountUncheckedUpdateInputObjectSchema]), where: AccountWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.AccountUpdateArgs>;

export const AccountUpdateOneZodSchema = z.object({ select: AccountSelectObjectSchema.optional(), include: AccountIncludeObjectSchema.optional(), data: z.union([AccountUpdateInputObjectSchema, AccountUncheckedUpdateInputObjectSchema]), where: AccountWhereUniqueInputObjectSchema }).strict();

// File: updateManyAccount.schema.ts

export const AccountUpdateManySchema: z.ZodType<Prisma.AccountUpdateManyArgs> = z.object({ data: AccountUpdateManyMutationInputObjectSchema, where: AccountWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.AccountUpdateManyArgs>;

export const AccountUpdateManyZodSchema = z.object({ data: AccountUpdateManyMutationInputObjectSchema, where: AccountWhereInputObjectSchema.optional() }).strict();

// File: updateManyAndReturnAccount.schema.ts

export const AccountUpdateManyAndReturnSchema: z.ZodType<Prisma.AccountUpdateManyAndReturnArgs> = z.object({ select: AccountSelectObjectSchema.optional(), data: AccountUpdateManyMutationInputObjectSchema, where: AccountWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.AccountUpdateManyAndReturnArgs>;

export const AccountUpdateManyAndReturnZodSchema = z.object({ select: AccountSelectObjectSchema.optional(), data: AccountUpdateManyMutationInputObjectSchema, where: AccountWhereInputObjectSchema.optional() }).strict();

// File: upsertOneAccount.schema.ts

export const AccountUpsertOneSchema: z.ZodType<Prisma.AccountUpsertArgs> = z.object({ select: AccountSelectObjectSchema.optional(), include: AccountIncludeObjectSchema.optional(), where: AccountWhereUniqueInputObjectSchema, create: z.union([ AccountCreateInputObjectSchema, AccountUncheckedCreateInputObjectSchema ]), update: z.union([ AccountUpdateInputObjectSchema, AccountUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.AccountUpsertArgs>;

export const AccountUpsertOneZodSchema = z.object({ select: AccountSelectObjectSchema.optional(), include: AccountIncludeObjectSchema.optional(), where: AccountWhereUniqueInputObjectSchema, create: z.union([ AccountCreateInputObjectSchema, AccountUncheckedCreateInputObjectSchema ]), update: z.union([ AccountUpdateInputObjectSchema, AccountUncheckedUpdateInputObjectSchema ]) }).strict();

// File: aggregateAccount.schema.ts

export const AccountAggregateSchema: z.ZodType<Prisma.AccountAggregateArgs> = z.object({ orderBy: z.union([AccountOrderByWithRelationInputObjectSchema, AccountOrderByWithRelationInputObjectSchema.array()]).optional(), where: AccountWhereInputObjectSchema.optional(), cursor: AccountWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), AccountCountAggregateInputObjectSchema ]).optional(), _min: AccountMinAggregateInputObjectSchema.optional(), _max: AccountMaxAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.AccountAggregateArgs>;

export const AccountAggregateZodSchema = z.object({ orderBy: z.union([AccountOrderByWithRelationInputObjectSchema, AccountOrderByWithRelationInputObjectSchema.array()]).optional(), where: AccountWhereInputObjectSchema.optional(), cursor: AccountWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), AccountCountAggregateInputObjectSchema ]).optional(), _min: AccountMinAggregateInputObjectSchema.optional(), _max: AccountMaxAggregateInputObjectSchema.optional() }).strict();

// File: groupByAccount.schema.ts

export const AccountGroupBySchema: z.ZodType<Prisma.AccountGroupByArgs> = z.object({ where: AccountWhereInputObjectSchema.optional(), orderBy: z.union([AccountOrderByWithAggregationInputObjectSchema, AccountOrderByWithAggregationInputObjectSchema.array()]).optional(), having: AccountScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(AccountScalarFieldEnumSchema), _count: z.union([ z.literal(true), AccountCountAggregateInputObjectSchema ]).optional(), _min: AccountMinAggregateInputObjectSchema.optional(), _max: AccountMaxAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.AccountGroupByArgs>;

export const AccountGroupByZodSchema = z.object({ where: AccountWhereInputObjectSchema.optional(), orderBy: z.union([AccountOrderByWithAggregationInputObjectSchema, AccountOrderByWithAggregationInputObjectSchema.array()]).optional(), having: AccountScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(AccountScalarFieldEnumSchema), _count: z.union([ z.literal(true), AccountCountAggregateInputObjectSchema ]).optional(), _min: AccountMinAggregateInputObjectSchema.optional(), _max: AccountMaxAggregateInputObjectSchema.optional() }).strict();

// File: findUniqueContact.schema.ts

export const ContactFindUniqueSchema: z.ZodType<Prisma.ContactFindUniqueArgs> = z.object({ select: ContactSelectObjectSchema.optional(),  where: ContactWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ContactFindUniqueArgs>;

export const ContactFindUniqueZodSchema = z.object({ select: ContactSelectObjectSchema.optional(),  where: ContactWhereUniqueInputObjectSchema }).strict();

// File: findUniqueOrThrowContact.schema.ts

export const ContactFindUniqueOrThrowSchema: z.ZodType<Prisma.ContactFindUniqueOrThrowArgs> = z.object({ select: ContactSelectObjectSchema.optional(),  where: ContactWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ContactFindUniqueOrThrowArgs>;

export const ContactFindUniqueOrThrowZodSchema = z.object({ select: ContactSelectObjectSchema.optional(),  where: ContactWhereUniqueInputObjectSchema }).strict();

// File: findFirstContact.schema.ts

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ContactFindFirstSelectSchema__findFirstContact_schema: z.ZodType<Prisma.ContactSelect> = z.object({
    id: z.boolean().optional(),
    email: z.boolean().optional(),
    firstName: z.boolean().optional(),
    lastName: z.boolean().optional(),
    createdAt: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.ContactSelect>;

export const ContactFindFirstSelectZodSchema__findFirstContact_schema = z.object({
    id: z.boolean().optional(),
    email: z.boolean().optional(),
    firstName: z.boolean().optional(),
    lastName: z.boolean().optional(),
    createdAt: z.boolean().optional()
  }).strict();

export const ContactFindFirstSchema: z.ZodType<Prisma.ContactFindFirstArgs> = z.object({ select: ContactFindFirstSelectSchema__findFirstContact_schema.optional(),  orderBy: z.union([ContactOrderByWithRelationInputObjectSchema, ContactOrderByWithRelationInputObjectSchema.array()]).optional(), where: ContactWhereInputObjectSchema.optional(), cursor: ContactWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ContactScalarFieldEnumSchema, ContactScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.ContactFindFirstArgs>;

export const ContactFindFirstZodSchema = z.object({ select: ContactFindFirstSelectSchema__findFirstContact_schema.optional(),  orderBy: z.union([ContactOrderByWithRelationInputObjectSchema, ContactOrderByWithRelationInputObjectSchema.array()]).optional(), where: ContactWhereInputObjectSchema.optional(), cursor: ContactWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ContactScalarFieldEnumSchema, ContactScalarFieldEnumSchema.array()]).optional() }).strict();

// File: findFirstOrThrowContact.schema.ts

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ContactFindFirstOrThrowSelectSchema__findFirstOrThrowContact_schema: z.ZodType<Prisma.ContactSelect> = z.object({
    id: z.boolean().optional(),
    email: z.boolean().optional(),
    firstName: z.boolean().optional(),
    lastName: z.boolean().optional(),
    createdAt: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.ContactSelect>;

export const ContactFindFirstOrThrowSelectZodSchema__findFirstOrThrowContact_schema = z.object({
    id: z.boolean().optional(),
    email: z.boolean().optional(),
    firstName: z.boolean().optional(),
    lastName: z.boolean().optional(),
    createdAt: z.boolean().optional()
  }).strict();

export const ContactFindFirstOrThrowSchema: z.ZodType<Prisma.ContactFindFirstOrThrowArgs> = z.object({ select: ContactFindFirstOrThrowSelectSchema__findFirstOrThrowContact_schema.optional(),  orderBy: z.union([ContactOrderByWithRelationInputObjectSchema, ContactOrderByWithRelationInputObjectSchema.array()]).optional(), where: ContactWhereInputObjectSchema.optional(), cursor: ContactWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ContactScalarFieldEnumSchema, ContactScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.ContactFindFirstOrThrowArgs>;

export const ContactFindFirstOrThrowZodSchema = z.object({ select: ContactFindFirstOrThrowSelectSchema__findFirstOrThrowContact_schema.optional(),  orderBy: z.union([ContactOrderByWithRelationInputObjectSchema, ContactOrderByWithRelationInputObjectSchema.array()]).optional(), where: ContactWhereInputObjectSchema.optional(), cursor: ContactWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ContactScalarFieldEnumSchema, ContactScalarFieldEnumSchema.array()]).optional() }).strict();

// File: findManyContact.schema.ts

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ContactFindManySelectSchema__findManyContact_schema: z.ZodType<Prisma.ContactSelect> = z.object({
    id: z.boolean().optional(),
    email: z.boolean().optional(),
    firstName: z.boolean().optional(),
    lastName: z.boolean().optional(),
    createdAt: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.ContactSelect>;

export const ContactFindManySelectZodSchema__findManyContact_schema = z.object({
    id: z.boolean().optional(),
    email: z.boolean().optional(),
    firstName: z.boolean().optional(),
    lastName: z.boolean().optional(),
    createdAt: z.boolean().optional()
  }).strict();

export const ContactFindManySchema: z.ZodType<Prisma.ContactFindManyArgs> = z.object({ select: ContactFindManySelectSchema__findManyContact_schema.optional(),  orderBy: z.union([ContactOrderByWithRelationInputObjectSchema, ContactOrderByWithRelationInputObjectSchema.array()]).optional(), where: ContactWhereInputObjectSchema.optional(), cursor: ContactWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ContactScalarFieldEnumSchema, ContactScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.ContactFindManyArgs>;

export const ContactFindManyZodSchema = z.object({ select: ContactFindManySelectSchema__findManyContact_schema.optional(),  orderBy: z.union([ContactOrderByWithRelationInputObjectSchema, ContactOrderByWithRelationInputObjectSchema.array()]).optional(), where: ContactWhereInputObjectSchema.optional(), cursor: ContactWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ContactScalarFieldEnumSchema, ContactScalarFieldEnumSchema.array()]).optional() }).strict();

// File: countContact.schema.ts

export const ContactCountSchema: z.ZodType<Prisma.ContactCountArgs> = z.object({ orderBy: z.union([ContactOrderByWithRelationInputObjectSchema, ContactOrderByWithRelationInputObjectSchema.array()]).optional(), where: ContactWhereInputObjectSchema.optional(), cursor: ContactWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), ContactCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.ContactCountArgs>;

export const ContactCountZodSchema = z.object({ orderBy: z.union([ContactOrderByWithRelationInputObjectSchema, ContactOrderByWithRelationInputObjectSchema.array()]).optional(), where: ContactWhereInputObjectSchema.optional(), cursor: ContactWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), ContactCountAggregateInputObjectSchema ]).optional() }).strict();

// File: createOneContact.schema.ts

export const ContactCreateOneSchema: z.ZodType<Prisma.ContactCreateArgs> = z.object({ select: ContactSelectObjectSchema.optional(),  data: z.union([ContactCreateInputObjectSchema, ContactUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.ContactCreateArgs>;

export const ContactCreateOneZodSchema = z.object({ select: ContactSelectObjectSchema.optional(),  data: z.union([ContactCreateInputObjectSchema, ContactUncheckedCreateInputObjectSchema]) }).strict();

// File: createManyContact.schema.ts

export const ContactCreateManySchema: z.ZodType<Prisma.ContactCreateManyArgs> = z.object({ data: z.union([ ContactCreateManyInputObjectSchema, z.array(ContactCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.ContactCreateManyArgs>;

export const ContactCreateManyZodSchema = z.object({ data: z.union([ ContactCreateManyInputObjectSchema, z.array(ContactCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();

// File: createManyAndReturnContact.schema.ts

export const ContactCreateManyAndReturnSchema: z.ZodType<Prisma.ContactCreateManyAndReturnArgs> = z.object({ select: ContactSelectObjectSchema.optional(), data: z.union([ ContactCreateManyInputObjectSchema, z.array(ContactCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.ContactCreateManyAndReturnArgs>;

export const ContactCreateManyAndReturnZodSchema = z.object({ select: ContactSelectObjectSchema.optional(), data: z.union([ ContactCreateManyInputObjectSchema, z.array(ContactCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();

// File: deleteOneContact.schema.ts

export const ContactDeleteOneSchema: z.ZodType<Prisma.ContactDeleteArgs> = z.object({ select: ContactSelectObjectSchema.optional(),  where: ContactWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ContactDeleteArgs>;

export const ContactDeleteOneZodSchema = z.object({ select: ContactSelectObjectSchema.optional(),  where: ContactWhereUniqueInputObjectSchema }).strict();

// File: deleteManyContact.schema.ts

export const ContactDeleteManySchema: z.ZodType<Prisma.ContactDeleteManyArgs> = z.object({ where: ContactWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ContactDeleteManyArgs>;

export const ContactDeleteManyZodSchema = z.object({ where: ContactWhereInputObjectSchema.optional() }).strict();

// File: updateOneContact.schema.ts

export const ContactUpdateOneSchema: z.ZodType<Prisma.ContactUpdateArgs> = z.object({ select: ContactSelectObjectSchema.optional(),  data: z.union([ContactUpdateInputObjectSchema, ContactUncheckedUpdateInputObjectSchema]), where: ContactWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ContactUpdateArgs>;

export const ContactUpdateOneZodSchema = z.object({ select: ContactSelectObjectSchema.optional(),  data: z.union([ContactUpdateInputObjectSchema, ContactUncheckedUpdateInputObjectSchema]), where: ContactWhereUniqueInputObjectSchema }).strict();

// File: updateManyContact.schema.ts

export const ContactUpdateManySchema: z.ZodType<Prisma.ContactUpdateManyArgs> = z.object({ data: ContactUpdateManyMutationInputObjectSchema, where: ContactWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ContactUpdateManyArgs>;

export const ContactUpdateManyZodSchema = z.object({ data: ContactUpdateManyMutationInputObjectSchema, where: ContactWhereInputObjectSchema.optional() }).strict();

// File: updateManyAndReturnContact.schema.ts

export const ContactUpdateManyAndReturnSchema: z.ZodType<Prisma.ContactUpdateManyAndReturnArgs> = z.object({ select: ContactSelectObjectSchema.optional(), data: ContactUpdateManyMutationInputObjectSchema, where: ContactWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ContactUpdateManyAndReturnArgs>;

export const ContactUpdateManyAndReturnZodSchema = z.object({ select: ContactSelectObjectSchema.optional(), data: ContactUpdateManyMutationInputObjectSchema, where: ContactWhereInputObjectSchema.optional() }).strict();

// File: upsertOneContact.schema.ts

export const ContactUpsertOneSchema: z.ZodType<Prisma.ContactUpsertArgs> = z.object({ select: ContactSelectObjectSchema.optional(),  where: ContactWhereUniqueInputObjectSchema, create: z.union([ ContactCreateInputObjectSchema, ContactUncheckedCreateInputObjectSchema ]), update: z.union([ ContactUpdateInputObjectSchema, ContactUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.ContactUpsertArgs>;

export const ContactUpsertOneZodSchema = z.object({ select: ContactSelectObjectSchema.optional(),  where: ContactWhereUniqueInputObjectSchema, create: z.union([ ContactCreateInputObjectSchema, ContactUncheckedCreateInputObjectSchema ]), update: z.union([ ContactUpdateInputObjectSchema, ContactUncheckedUpdateInputObjectSchema ]) }).strict();

// File: aggregateContact.schema.ts

export const ContactAggregateSchema: z.ZodType<Prisma.ContactAggregateArgs> = z.object({ orderBy: z.union([ContactOrderByWithRelationInputObjectSchema, ContactOrderByWithRelationInputObjectSchema.array()]).optional(), where: ContactWhereInputObjectSchema.optional(), cursor: ContactWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), ContactCountAggregateInputObjectSchema ]).optional(), _min: ContactMinAggregateInputObjectSchema.optional(), _max: ContactMaxAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ContactAggregateArgs>;

export const ContactAggregateZodSchema = z.object({ orderBy: z.union([ContactOrderByWithRelationInputObjectSchema, ContactOrderByWithRelationInputObjectSchema.array()]).optional(), where: ContactWhereInputObjectSchema.optional(), cursor: ContactWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), ContactCountAggregateInputObjectSchema ]).optional(), _min: ContactMinAggregateInputObjectSchema.optional(), _max: ContactMaxAggregateInputObjectSchema.optional() }).strict();

// File: groupByContact.schema.ts

export const ContactGroupBySchema: z.ZodType<Prisma.ContactGroupByArgs> = z.object({ where: ContactWhereInputObjectSchema.optional(), orderBy: z.union([ContactOrderByWithAggregationInputObjectSchema, ContactOrderByWithAggregationInputObjectSchema.array()]).optional(), having: ContactScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(ContactScalarFieldEnumSchema), _count: z.union([ z.literal(true), ContactCountAggregateInputObjectSchema ]).optional(), _min: ContactMinAggregateInputObjectSchema.optional(), _max: ContactMaxAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ContactGroupByArgs>;

export const ContactGroupByZodSchema = z.object({ where: ContactWhereInputObjectSchema.optional(), orderBy: z.union([ContactOrderByWithAggregationInputObjectSchema, ContactOrderByWithAggregationInputObjectSchema.array()]).optional(), having: ContactScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(ContactScalarFieldEnumSchema), _count: z.union([ z.literal(true), ContactCountAggregateInputObjectSchema ]).optional(), _min: ContactMinAggregateInputObjectSchema.optional(), _max: ContactMaxAggregateInputObjectSchema.optional() }).strict();

// File: findUniqueMedia.schema.ts

export const MediaFindUniqueSchema: z.ZodType<Prisma.MediaFindUniqueArgs> = z.object({ select: MediaSelectObjectSchema.optional(), include: MediaIncludeObjectSchema.optional(), where: MediaWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.MediaFindUniqueArgs>;

export const MediaFindUniqueZodSchema = z.object({ select: MediaSelectObjectSchema.optional(), include: MediaIncludeObjectSchema.optional(), where: MediaWhereUniqueInputObjectSchema }).strict();

// File: findUniqueOrThrowMedia.schema.ts

export const MediaFindUniqueOrThrowSchema: z.ZodType<Prisma.MediaFindUniqueOrThrowArgs> = z.object({ select: MediaSelectObjectSchema.optional(), include: MediaIncludeObjectSchema.optional(), where: MediaWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.MediaFindUniqueOrThrowArgs>;

export const MediaFindUniqueOrThrowZodSchema = z.object({ select: MediaSelectObjectSchema.optional(), include: MediaIncludeObjectSchema.optional(), where: MediaWhereUniqueInputObjectSchema }).strict();

// File: findFirstMedia.schema.ts

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const MediaFindFirstSelectSchema__findFirstMedia_schema: z.ZodType<Prisma.MediaSelect> = z.object({
    id: z.boolean().optional(),
    url: z.boolean().optional(),
    key: z.boolean().optional(),
    mimeType: z.boolean().optional(),
    size: z.boolean().optional(),
    avatarUser: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
    avatarUserId: z.boolean().optional(),
    coverUser: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
    coverUserId: z.boolean().optional(),
    createdAt: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.MediaSelect>;

export const MediaFindFirstSelectZodSchema__findFirstMedia_schema = z.object({
    id: z.boolean().optional(),
    url: z.boolean().optional(),
    key: z.boolean().optional(),
    mimeType: z.boolean().optional(),
    size: z.boolean().optional(),
    avatarUser: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
    avatarUserId: z.boolean().optional(),
    coverUser: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
    coverUserId: z.boolean().optional(),
    createdAt: z.boolean().optional()
  }).strict();

export const MediaFindFirstSchema: z.ZodType<Prisma.MediaFindFirstArgs> = z.object({ select: MediaFindFirstSelectSchema__findFirstMedia_schema.optional(), include: z.lazy(() => MediaIncludeObjectSchema.optional()), orderBy: z.union([MediaOrderByWithRelationInputObjectSchema, MediaOrderByWithRelationInputObjectSchema.array()]).optional(), where: MediaWhereInputObjectSchema.optional(), cursor: MediaWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([MediaScalarFieldEnumSchema, MediaScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.MediaFindFirstArgs>;

export const MediaFindFirstZodSchema = z.object({ select: MediaFindFirstSelectSchema__findFirstMedia_schema.optional(), include: z.lazy(() => MediaIncludeObjectSchema.optional()), orderBy: z.union([MediaOrderByWithRelationInputObjectSchema, MediaOrderByWithRelationInputObjectSchema.array()]).optional(), where: MediaWhereInputObjectSchema.optional(), cursor: MediaWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([MediaScalarFieldEnumSchema, MediaScalarFieldEnumSchema.array()]).optional() }).strict();

// File: findFirstOrThrowMedia.schema.ts

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const MediaFindFirstOrThrowSelectSchema__findFirstOrThrowMedia_schema: z.ZodType<Prisma.MediaSelect> = z.object({
    id: z.boolean().optional(),
    url: z.boolean().optional(),
    key: z.boolean().optional(),
    mimeType: z.boolean().optional(),
    size: z.boolean().optional(),
    avatarUser: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
    avatarUserId: z.boolean().optional(),
    coverUser: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
    coverUserId: z.boolean().optional(),
    createdAt: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.MediaSelect>;

export const MediaFindFirstOrThrowSelectZodSchema__findFirstOrThrowMedia_schema = z.object({
    id: z.boolean().optional(),
    url: z.boolean().optional(),
    key: z.boolean().optional(),
    mimeType: z.boolean().optional(),
    size: z.boolean().optional(),
    avatarUser: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
    avatarUserId: z.boolean().optional(),
    coverUser: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
    coverUserId: z.boolean().optional(),
    createdAt: z.boolean().optional()
  }).strict();

export const MediaFindFirstOrThrowSchema: z.ZodType<Prisma.MediaFindFirstOrThrowArgs> = z.object({ select: MediaFindFirstOrThrowSelectSchema__findFirstOrThrowMedia_schema.optional(), include: z.lazy(() => MediaIncludeObjectSchema.optional()), orderBy: z.union([MediaOrderByWithRelationInputObjectSchema, MediaOrderByWithRelationInputObjectSchema.array()]).optional(), where: MediaWhereInputObjectSchema.optional(), cursor: MediaWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([MediaScalarFieldEnumSchema, MediaScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.MediaFindFirstOrThrowArgs>;

export const MediaFindFirstOrThrowZodSchema = z.object({ select: MediaFindFirstOrThrowSelectSchema__findFirstOrThrowMedia_schema.optional(), include: z.lazy(() => MediaIncludeObjectSchema.optional()), orderBy: z.union([MediaOrderByWithRelationInputObjectSchema, MediaOrderByWithRelationInputObjectSchema.array()]).optional(), where: MediaWhereInputObjectSchema.optional(), cursor: MediaWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([MediaScalarFieldEnumSchema, MediaScalarFieldEnumSchema.array()]).optional() }).strict();

// File: findManyMedia.schema.ts

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const MediaFindManySelectSchema__findManyMedia_schema: z.ZodType<Prisma.MediaSelect> = z.object({
    id: z.boolean().optional(),
    url: z.boolean().optional(),
    key: z.boolean().optional(),
    mimeType: z.boolean().optional(),
    size: z.boolean().optional(),
    avatarUser: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
    avatarUserId: z.boolean().optional(),
    coverUser: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
    coverUserId: z.boolean().optional(),
    createdAt: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.MediaSelect>;

export const MediaFindManySelectZodSchema__findManyMedia_schema = z.object({
    id: z.boolean().optional(),
    url: z.boolean().optional(),
    key: z.boolean().optional(),
    mimeType: z.boolean().optional(),
    size: z.boolean().optional(),
    avatarUser: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
    avatarUserId: z.boolean().optional(),
    coverUser: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
    coverUserId: z.boolean().optional(),
    createdAt: z.boolean().optional()
  }).strict();

export const MediaFindManySchema: z.ZodType<Prisma.MediaFindManyArgs> = z.object({ select: MediaFindManySelectSchema__findManyMedia_schema.optional(), include: z.lazy(() => MediaIncludeObjectSchema.optional()), orderBy: z.union([MediaOrderByWithRelationInputObjectSchema, MediaOrderByWithRelationInputObjectSchema.array()]).optional(), where: MediaWhereInputObjectSchema.optional(), cursor: MediaWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([MediaScalarFieldEnumSchema, MediaScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.MediaFindManyArgs>;

export const MediaFindManyZodSchema = z.object({ select: MediaFindManySelectSchema__findManyMedia_schema.optional(), include: z.lazy(() => MediaIncludeObjectSchema.optional()), orderBy: z.union([MediaOrderByWithRelationInputObjectSchema, MediaOrderByWithRelationInputObjectSchema.array()]).optional(), where: MediaWhereInputObjectSchema.optional(), cursor: MediaWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([MediaScalarFieldEnumSchema, MediaScalarFieldEnumSchema.array()]).optional() }).strict();

// File: countMedia.schema.ts

export const MediaCountSchema: z.ZodType<Prisma.MediaCountArgs> = z.object({ orderBy: z.union([MediaOrderByWithRelationInputObjectSchema, MediaOrderByWithRelationInputObjectSchema.array()]).optional(), where: MediaWhereInputObjectSchema.optional(), cursor: MediaWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), MediaCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.MediaCountArgs>;

export const MediaCountZodSchema = z.object({ orderBy: z.union([MediaOrderByWithRelationInputObjectSchema, MediaOrderByWithRelationInputObjectSchema.array()]).optional(), where: MediaWhereInputObjectSchema.optional(), cursor: MediaWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), MediaCountAggregateInputObjectSchema ]).optional() }).strict();

// File: createOneMedia.schema.ts

export const MediaCreateOneSchema: z.ZodType<Prisma.MediaCreateArgs> = z.object({ select: MediaSelectObjectSchema.optional(), include: MediaIncludeObjectSchema.optional(), data: z.union([MediaCreateInputObjectSchema, MediaUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.MediaCreateArgs>;

export const MediaCreateOneZodSchema = z.object({ select: MediaSelectObjectSchema.optional(), include: MediaIncludeObjectSchema.optional(), data: z.union([MediaCreateInputObjectSchema, MediaUncheckedCreateInputObjectSchema]) }).strict();

// File: createManyMedia.schema.ts

export const MediaCreateManySchema: z.ZodType<Prisma.MediaCreateManyArgs> = z.object({ data: z.union([ MediaCreateManyInputObjectSchema, z.array(MediaCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.MediaCreateManyArgs>;

export const MediaCreateManyZodSchema = z.object({ data: z.union([ MediaCreateManyInputObjectSchema, z.array(MediaCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();

// File: createManyAndReturnMedia.schema.ts

export const MediaCreateManyAndReturnSchema: z.ZodType<Prisma.MediaCreateManyAndReturnArgs> = z.object({ select: MediaSelectObjectSchema.optional(), data: z.union([ MediaCreateManyInputObjectSchema, z.array(MediaCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.MediaCreateManyAndReturnArgs>;

export const MediaCreateManyAndReturnZodSchema = z.object({ select: MediaSelectObjectSchema.optional(), data: z.union([ MediaCreateManyInputObjectSchema, z.array(MediaCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();

// File: deleteOneMedia.schema.ts

export const MediaDeleteOneSchema: z.ZodType<Prisma.MediaDeleteArgs> = z.object({ select: MediaSelectObjectSchema.optional(), include: MediaIncludeObjectSchema.optional(), where: MediaWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.MediaDeleteArgs>;

export const MediaDeleteOneZodSchema = z.object({ select: MediaSelectObjectSchema.optional(), include: MediaIncludeObjectSchema.optional(), where: MediaWhereUniqueInputObjectSchema }).strict();

// File: deleteManyMedia.schema.ts

export const MediaDeleteManySchema: z.ZodType<Prisma.MediaDeleteManyArgs> = z.object({ where: MediaWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.MediaDeleteManyArgs>;

export const MediaDeleteManyZodSchema = z.object({ where: MediaWhereInputObjectSchema.optional() }).strict();

// File: updateOneMedia.schema.ts

export const MediaUpdateOneSchema: z.ZodType<Prisma.MediaUpdateArgs> = z.object({ select: MediaSelectObjectSchema.optional(), include: MediaIncludeObjectSchema.optional(), data: z.union([MediaUpdateInputObjectSchema, MediaUncheckedUpdateInputObjectSchema]), where: MediaWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.MediaUpdateArgs>;

export const MediaUpdateOneZodSchema = z.object({ select: MediaSelectObjectSchema.optional(), include: MediaIncludeObjectSchema.optional(), data: z.union([MediaUpdateInputObjectSchema, MediaUncheckedUpdateInputObjectSchema]), where: MediaWhereUniqueInputObjectSchema }).strict();

// File: updateManyMedia.schema.ts

export const MediaUpdateManySchema: z.ZodType<Prisma.MediaUpdateManyArgs> = z.object({ data: MediaUpdateManyMutationInputObjectSchema, where: MediaWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.MediaUpdateManyArgs>;

export const MediaUpdateManyZodSchema = z.object({ data: MediaUpdateManyMutationInputObjectSchema, where: MediaWhereInputObjectSchema.optional() }).strict();

// File: updateManyAndReturnMedia.schema.ts

export const MediaUpdateManyAndReturnSchema: z.ZodType<Prisma.MediaUpdateManyAndReturnArgs> = z.object({ select: MediaSelectObjectSchema.optional(), data: MediaUpdateManyMutationInputObjectSchema, where: MediaWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.MediaUpdateManyAndReturnArgs>;

export const MediaUpdateManyAndReturnZodSchema = z.object({ select: MediaSelectObjectSchema.optional(), data: MediaUpdateManyMutationInputObjectSchema, where: MediaWhereInputObjectSchema.optional() }).strict();

// File: upsertOneMedia.schema.ts

export const MediaUpsertOneSchema: z.ZodType<Prisma.MediaUpsertArgs> = z.object({ select: MediaSelectObjectSchema.optional(), include: MediaIncludeObjectSchema.optional(), where: MediaWhereUniqueInputObjectSchema, create: z.union([ MediaCreateInputObjectSchema, MediaUncheckedCreateInputObjectSchema ]), update: z.union([ MediaUpdateInputObjectSchema, MediaUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.MediaUpsertArgs>;

export const MediaUpsertOneZodSchema = z.object({ select: MediaSelectObjectSchema.optional(), include: MediaIncludeObjectSchema.optional(), where: MediaWhereUniqueInputObjectSchema, create: z.union([ MediaCreateInputObjectSchema, MediaUncheckedCreateInputObjectSchema ]), update: z.union([ MediaUpdateInputObjectSchema, MediaUncheckedUpdateInputObjectSchema ]) }).strict();

// File: aggregateMedia.schema.ts

export const MediaAggregateSchema: z.ZodType<Prisma.MediaAggregateArgs> = z.object({ orderBy: z.union([MediaOrderByWithRelationInputObjectSchema, MediaOrderByWithRelationInputObjectSchema.array()]).optional(), where: MediaWhereInputObjectSchema.optional(), cursor: MediaWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), MediaCountAggregateInputObjectSchema ]).optional(), _min: MediaMinAggregateInputObjectSchema.optional(), _max: MediaMaxAggregateInputObjectSchema.optional(), _avg: MediaAvgAggregateInputObjectSchema.optional(), _sum: MediaSumAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.MediaAggregateArgs>;

export const MediaAggregateZodSchema = z.object({ orderBy: z.union([MediaOrderByWithRelationInputObjectSchema, MediaOrderByWithRelationInputObjectSchema.array()]).optional(), where: MediaWhereInputObjectSchema.optional(), cursor: MediaWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), MediaCountAggregateInputObjectSchema ]).optional(), _min: MediaMinAggregateInputObjectSchema.optional(), _max: MediaMaxAggregateInputObjectSchema.optional(), _avg: MediaAvgAggregateInputObjectSchema.optional(), _sum: MediaSumAggregateInputObjectSchema.optional() }).strict();

// File: groupByMedia.schema.ts

export const MediaGroupBySchema: z.ZodType<Prisma.MediaGroupByArgs> = z.object({ where: MediaWhereInputObjectSchema.optional(), orderBy: z.union([MediaOrderByWithAggregationInputObjectSchema, MediaOrderByWithAggregationInputObjectSchema.array()]).optional(), having: MediaScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(MediaScalarFieldEnumSchema), _count: z.union([ z.literal(true), MediaCountAggregateInputObjectSchema ]).optional(), _min: MediaMinAggregateInputObjectSchema.optional(), _max: MediaMaxAggregateInputObjectSchema.optional(), _avg: MediaAvgAggregateInputObjectSchema.optional(), _sum: MediaSumAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.MediaGroupByArgs>;

export const MediaGroupByZodSchema = z.object({ where: MediaWhereInputObjectSchema.optional(), orderBy: z.union([MediaOrderByWithAggregationInputObjectSchema, MediaOrderByWithAggregationInputObjectSchema.array()]).optional(), having: MediaScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(MediaScalarFieldEnumSchema), _count: z.union([ z.literal(true), MediaCountAggregateInputObjectSchema ]).optional(), _min: MediaMinAggregateInputObjectSchema.optional(), _max: MediaMaxAggregateInputObjectSchema.optional(), _avg: MediaAvgAggregateInputObjectSchema.optional(), _sum: MediaSumAggregateInputObjectSchema.optional() }).strict();

// File: findUniqueProject.schema.ts

export const ProjectFindUniqueSchema: z.ZodType<Prisma.ProjectFindUniqueArgs> = z.object({ select: ProjectSelectObjectSchema.optional(),  where: ProjectWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ProjectFindUniqueArgs>;

export const ProjectFindUniqueZodSchema = z.object({ select: ProjectSelectObjectSchema.optional(),  where: ProjectWhereUniqueInputObjectSchema }).strict();

// File: findUniqueOrThrowProject.schema.ts

export const ProjectFindUniqueOrThrowSchema: z.ZodType<Prisma.ProjectFindUniqueOrThrowArgs> = z.object({ select: ProjectSelectObjectSchema.optional(),  where: ProjectWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ProjectFindUniqueOrThrowArgs>;

export const ProjectFindUniqueOrThrowZodSchema = z.object({ select: ProjectSelectObjectSchema.optional(),  where: ProjectWhereUniqueInputObjectSchema }).strict();

// File: findFirstProject.schema.ts

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ProjectFindFirstSelectSchema__findFirstProject_schema: z.ZodType<Prisma.ProjectSelect> = z.object({
    id: z.boolean().optional(),
    slug: z.boolean().optional(),
    name: z.boolean().optional(),
    weeks: z.boolean().optional(),
    link: z.boolean().optional(),
    cover: z.boolean().optional(),
    video: z.boolean().optional(),
    gallery: z.boolean().optional(),
    description: z.boolean().optional(),
    techStack: z.boolean().optional(),
    date: z.boolean().optional(),
    services: z.boolean().optional(),
    team: z.boolean().optional(),
    notes: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.ProjectSelect>;

export const ProjectFindFirstSelectZodSchema__findFirstProject_schema = z.object({
    id: z.boolean().optional(),
    slug: z.boolean().optional(),
    name: z.boolean().optional(),
    weeks: z.boolean().optional(),
    link: z.boolean().optional(),
    cover: z.boolean().optional(),
    video: z.boolean().optional(),
    gallery: z.boolean().optional(),
    description: z.boolean().optional(),
    techStack: z.boolean().optional(),
    date: z.boolean().optional(),
    services: z.boolean().optional(),
    team: z.boolean().optional(),
    notes: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional()
  }).strict();

export const ProjectFindFirstSchema: z.ZodType<Prisma.ProjectFindFirstArgs> = z.object({ select: ProjectFindFirstSelectSchema__findFirstProject_schema.optional(),  orderBy: z.union([ProjectOrderByWithRelationInputObjectSchema, ProjectOrderByWithRelationInputObjectSchema.array()]).optional(), where: ProjectWhereInputObjectSchema.optional(), cursor: ProjectWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ProjectScalarFieldEnumSchema, ProjectScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.ProjectFindFirstArgs>;

export const ProjectFindFirstZodSchema = z.object({ select: ProjectFindFirstSelectSchema__findFirstProject_schema.optional(),  orderBy: z.union([ProjectOrderByWithRelationInputObjectSchema, ProjectOrderByWithRelationInputObjectSchema.array()]).optional(), where: ProjectWhereInputObjectSchema.optional(), cursor: ProjectWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ProjectScalarFieldEnumSchema, ProjectScalarFieldEnumSchema.array()]).optional() }).strict();

// File: findFirstOrThrowProject.schema.ts

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ProjectFindFirstOrThrowSelectSchema__findFirstOrThrowProject_schema: z.ZodType<Prisma.ProjectSelect> = z.object({
    id: z.boolean().optional(),
    slug: z.boolean().optional(),
    name: z.boolean().optional(),
    weeks: z.boolean().optional(),
    link: z.boolean().optional(),
    cover: z.boolean().optional(),
    video: z.boolean().optional(),
    gallery: z.boolean().optional(),
    description: z.boolean().optional(),
    techStack: z.boolean().optional(),
    date: z.boolean().optional(),
    services: z.boolean().optional(),
    team: z.boolean().optional(),
    notes: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.ProjectSelect>;

export const ProjectFindFirstOrThrowSelectZodSchema__findFirstOrThrowProject_schema = z.object({
    id: z.boolean().optional(),
    slug: z.boolean().optional(),
    name: z.boolean().optional(),
    weeks: z.boolean().optional(),
    link: z.boolean().optional(),
    cover: z.boolean().optional(),
    video: z.boolean().optional(),
    gallery: z.boolean().optional(),
    description: z.boolean().optional(),
    techStack: z.boolean().optional(),
    date: z.boolean().optional(),
    services: z.boolean().optional(),
    team: z.boolean().optional(),
    notes: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional()
  }).strict();

export const ProjectFindFirstOrThrowSchema: z.ZodType<Prisma.ProjectFindFirstOrThrowArgs> = z.object({ select: ProjectFindFirstOrThrowSelectSchema__findFirstOrThrowProject_schema.optional(),  orderBy: z.union([ProjectOrderByWithRelationInputObjectSchema, ProjectOrderByWithRelationInputObjectSchema.array()]).optional(), where: ProjectWhereInputObjectSchema.optional(), cursor: ProjectWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ProjectScalarFieldEnumSchema, ProjectScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.ProjectFindFirstOrThrowArgs>;

export const ProjectFindFirstOrThrowZodSchema = z.object({ select: ProjectFindFirstOrThrowSelectSchema__findFirstOrThrowProject_schema.optional(),  orderBy: z.union([ProjectOrderByWithRelationInputObjectSchema, ProjectOrderByWithRelationInputObjectSchema.array()]).optional(), where: ProjectWhereInputObjectSchema.optional(), cursor: ProjectWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ProjectScalarFieldEnumSchema, ProjectScalarFieldEnumSchema.array()]).optional() }).strict();

// File: findManyProject.schema.ts

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ProjectFindManySelectSchema__findManyProject_schema: z.ZodType<Prisma.ProjectSelect> = z.object({
    id: z.boolean().optional(),
    slug: z.boolean().optional(),
    name: z.boolean().optional(),
    weeks: z.boolean().optional(),
    link: z.boolean().optional(),
    cover: z.boolean().optional(),
    video: z.boolean().optional(),
    gallery: z.boolean().optional(),
    description: z.boolean().optional(),
    techStack: z.boolean().optional(),
    date: z.boolean().optional(),
    services: z.boolean().optional(),
    team: z.boolean().optional(),
    notes: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.ProjectSelect>;

export const ProjectFindManySelectZodSchema__findManyProject_schema = z.object({
    id: z.boolean().optional(),
    slug: z.boolean().optional(),
    name: z.boolean().optional(),
    weeks: z.boolean().optional(),
    link: z.boolean().optional(),
    cover: z.boolean().optional(),
    video: z.boolean().optional(),
    gallery: z.boolean().optional(),
    description: z.boolean().optional(),
    techStack: z.boolean().optional(),
    date: z.boolean().optional(),
    services: z.boolean().optional(),
    team: z.boolean().optional(),
    notes: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional()
  }).strict();

export const ProjectFindManySchema: z.ZodType<Prisma.ProjectFindManyArgs> = z.object({ select: ProjectFindManySelectSchema__findManyProject_schema.optional(),  orderBy: z.union([ProjectOrderByWithRelationInputObjectSchema, ProjectOrderByWithRelationInputObjectSchema.array()]).optional(), where: ProjectWhereInputObjectSchema.optional(), cursor: ProjectWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ProjectScalarFieldEnumSchema, ProjectScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.ProjectFindManyArgs>;

export const ProjectFindManyZodSchema = z.object({ select: ProjectFindManySelectSchema__findManyProject_schema.optional(),  orderBy: z.union([ProjectOrderByWithRelationInputObjectSchema, ProjectOrderByWithRelationInputObjectSchema.array()]).optional(), where: ProjectWhereInputObjectSchema.optional(), cursor: ProjectWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ProjectScalarFieldEnumSchema, ProjectScalarFieldEnumSchema.array()]).optional() }).strict();

// File: countProject.schema.ts

export const ProjectCountSchema: z.ZodType<Prisma.ProjectCountArgs> = z.object({ orderBy: z.union([ProjectOrderByWithRelationInputObjectSchema, ProjectOrderByWithRelationInputObjectSchema.array()]).optional(), where: ProjectWhereInputObjectSchema.optional(), cursor: ProjectWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), ProjectCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.ProjectCountArgs>;

export const ProjectCountZodSchema = z.object({ orderBy: z.union([ProjectOrderByWithRelationInputObjectSchema, ProjectOrderByWithRelationInputObjectSchema.array()]).optional(), where: ProjectWhereInputObjectSchema.optional(), cursor: ProjectWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), ProjectCountAggregateInputObjectSchema ]).optional() }).strict();

// File: createOneProject.schema.ts

export const ProjectCreateOneSchema: z.ZodType<Prisma.ProjectCreateArgs> = z.object({ select: ProjectSelectObjectSchema.optional(),  data: z.union([ProjectCreateInputObjectSchema, ProjectUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.ProjectCreateArgs>;

export const ProjectCreateOneZodSchema = z.object({ select: ProjectSelectObjectSchema.optional(),  data: z.union([ProjectCreateInputObjectSchema, ProjectUncheckedCreateInputObjectSchema]) }).strict();

// File: createManyProject.schema.ts

export const ProjectCreateManySchema: z.ZodType<Prisma.ProjectCreateManyArgs> = z.object({ data: z.union([ ProjectCreateManyInputObjectSchema, z.array(ProjectCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.ProjectCreateManyArgs>;

export const ProjectCreateManyZodSchema = z.object({ data: z.union([ ProjectCreateManyInputObjectSchema, z.array(ProjectCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();

// File: createManyAndReturnProject.schema.ts

export const ProjectCreateManyAndReturnSchema: z.ZodType<Prisma.ProjectCreateManyAndReturnArgs> = z.object({ select: ProjectSelectObjectSchema.optional(), data: z.union([ ProjectCreateManyInputObjectSchema, z.array(ProjectCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.ProjectCreateManyAndReturnArgs>;

export const ProjectCreateManyAndReturnZodSchema = z.object({ select: ProjectSelectObjectSchema.optional(), data: z.union([ ProjectCreateManyInputObjectSchema, z.array(ProjectCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();

// File: deleteOneProject.schema.ts

export const ProjectDeleteOneSchema: z.ZodType<Prisma.ProjectDeleteArgs> = z.object({ select: ProjectSelectObjectSchema.optional(),  where: ProjectWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ProjectDeleteArgs>;

export const ProjectDeleteOneZodSchema = z.object({ select: ProjectSelectObjectSchema.optional(),  where: ProjectWhereUniqueInputObjectSchema }).strict();

// File: deleteManyProject.schema.ts

export const ProjectDeleteManySchema: z.ZodType<Prisma.ProjectDeleteManyArgs> = z.object({ where: ProjectWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ProjectDeleteManyArgs>;

export const ProjectDeleteManyZodSchema = z.object({ where: ProjectWhereInputObjectSchema.optional() }).strict();

// File: updateOneProject.schema.ts

export const ProjectUpdateOneSchema: z.ZodType<Prisma.ProjectUpdateArgs> = z.object({ select: ProjectSelectObjectSchema.optional(),  data: z.union([ProjectUpdateInputObjectSchema, ProjectUncheckedUpdateInputObjectSchema]), where: ProjectWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ProjectUpdateArgs>;

export const ProjectUpdateOneZodSchema = z.object({ select: ProjectSelectObjectSchema.optional(),  data: z.union([ProjectUpdateInputObjectSchema, ProjectUncheckedUpdateInputObjectSchema]), where: ProjectWhereUniqueInputObjectSchema }).strict();

// File: updateManyProject.schema.ts

export const ProjectUpdateManySchema: z.ZodType<Prisma.ProjectUpdateManyArgs> = z.object({ data: ProjectUpdateManyMutationInputObjectSchema, where: ProjectWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ProjectUpdateManyArgs>;

export const ProjectUpdateManyZodSchema = z.object({ data: ProjectUpdateManyMutationInputObjectSchema, where: ProjectWhereInputObjectSchema.optional() }).strict();

// File: updateManyAndReturnProject.schema.ts

export const ProjectUpdateManyAndReturnSchema: z.ZodType<Prisma.ProjectUpdateManyAndReturnArgs> = z.object({ select: ProjectSelectObjectSchema.optional(), data: ProjectUpdateManyMutationInputObjectSchema, where: ProjectWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ProjectUpdateManyAndReturnArgs>;

export const ProjectUpdateManyAndReturnZodSchema = z.object({ select: ProjectSelectObjectSchema.optional(), data: ProjectUpdateManyMutationInputObjectSchema, where: ProjectWhereInputObjectSchema.optional() }).strict();

// File: upsertOneProject.schema.ts

export const ProjectUpsertOneSchema: z.ZodType<Prisma.ProjectUpsertArgs> = z.object({ select: ProjectSelectObjectSchema.optional(),  where: ProjectWhereUniqueInputObjectSchema, create: z.union([ ProjectCreateInputObjectSchema, ProjectUncheckedCreateInputObjectSchema ]), update: z.union([ ProjectUpdateInputObjectSchema, ProjectUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.ProjectUpsertArgs>;

export const ProjectUpsertOneZodSchema = z.object({ select: ProjectSelectObjectSchema.optional(),  where: ProjectWhereUniqueInputObjectSchema, create: z.union([ ProjectCreateInputObjectSchema, ProjectUncheckedCreateInputObjectSchema ]), update: z.union([ ProjectUpdateInputObjectSchema, ProjectUncheckedUpdateInputObjectSchema ]) }).strict();

// File: aggregateProject.schema.ts

export const ProjectAggregateSchema: z.ZodType<Prisma.ProjectAggregateArgs> = z.object({ orderBy: z.union([ProjectOrderByWithRelationInputObjectSchema, ProjectOrderByWithRelationInputObjectSchema.array()]).optional(), where: ProjectWhereInputObjectSchema.optional(), cursor: ProjectWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), ProjectCountAggregateInputObjectSchema ]).optional(), _min: ProjectMinAggregateInputObjectSchema.optional(), _max: ProjectMaxAggregateInputObjectSchema.optional(), _avg: ProjectAvgAggregateInputObjectSchema.optional(), _sum: ProjectSumAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ProjectAggregateArgs>;

export const ProjectAggregateZodSchema = z.object({ orderBy: z.union([ProjectOrderByWithRelationInputObjectSchema, ProjectOrderByWithRelationInputObjectSchema.array()]).optional(), where: ProjectWhereInputObjectSchema.optional(), cursor: ProjectWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), ProjectCountAggregateInputObjectSchema ]).optional(), _min: ProjectMinAggregateInputObjectSchema.optional(), _max: ProjectMaxAggregateInputObjectSchema.optional(), _avg: ProjectAvgAggregateInputObjectSchema.optional(), _sum: ProjectSumAggregateInputObjectSchema.optional() }).strict();

// File: groupByProject.schema.ts

export const ProjectGroupBySchema: z.ZodType<Prisma.ProjectGroupByArgs> = z.object({ where: ProjectWhereInputObjectSchema.optional(), orderBy: z.union([ProjectOrderByWithAggregationInputObjectSchema, ProjectOrderByWithAggregationInputObjectSchema.array()]).optional(), having: ProjectScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(ProjectScalarFieldEnumSchema), _count: z.union([ z.literal(true), ProjectCountAggregateInputObjectSchema ]).optional(), _min: ProjectMinAggregateInputObjectSchema.optional(), _max: ProjectMaxAggregateInputObjectSchema.optional(), _avg: ProjectAvgAggregateInputObjectSchema.optional(), _sum: ProjectSumAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ProjectGroupByArgs>;

export const ProjectGroupByZodSchema = z.object({ where: ProjectWhereInputObjectSchema.optional(), orderBy: z.union([ProjectOrderByWithAggregationInputObjectSchema, ProjectOrderByWithAggregationInputObjectSchema.array()]).optional(), having: ProjectScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(ProjectScalarFieldEnumSchema), _count: z.union([ z.literal(true), ProjectCountAggregateInputObjectSchema ]).optional(), _min: ProjectMinAggregateInputObjectSchema.optional(), _max: ProjectMaxAggregateInputObjectSchema.optional(), _avg: ProjectAvgAggregateInputObjectSchema.optional(), _sum: ProjectSumAggregateInputObjectSchema.optional() }).strict();

// File: findUniqueSession.schema.ts

export const SessionFindUniqueSchema: z.ZodType<Prisma.SessionFindUniqueArgs> = z.object({ select: SessionSelectObjectSchema.optional(), include: SessionIncludeObjectSchema.optional(), where: SessionWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.SessionFindUniqueArgs>;

export const SessionFindUniqueZodSchema = z.object({ select: SessionSelectObjectSchema.optional(), include: SessionIncludeObjectSchema.optional(), where: SessionWhereUniqueInputObjectSchema }).strict();

// File: findUniqueOrThrowSession.schema.ts

export const SessionFindUniqueOrThrowSchema: z.ZodType<Prisma.SessionFindUniqueOrThrowArgs> = z.object({ select: SessionSelectObjectSchema.optional(), include: SessionIncludeObjectSchema.optional(), where: SessionWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.SessionFindUniqueOrThrowArgs>;

export const SessionFindUniqueOrThrowZodSchema = z.object({ select: SessionSelectObjectSchema.optional(), include: SessionIncludeObjectSchema.optional(), where: SessionWhereUniqueInputObjectSchema }).strict();

// File: findFirstSession.schema.ts

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const SessionFindFirstSelectSchema__findFirstSession_schema: z.ZodType<Prisma.SessionSelect> = z.object({
    id: z.boolean().optional(),
    userId: z.boolean().optional(),
    token: z.boolean().optional(),
    expiresAt: z.boolean().optional(),
    ipAddress: z.boolean().optional(),
    userAgent: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional()
  }).strict() as unknown as z.ZodType<Prisma.SessionSelect>;

export const SessionFindFirstSelectZodSchema__findFirstSession_schema = z.object({
    id: z.boolean().optional(),
    userId: z.boolean().optional(),
    token: z.boolean().optional(),
    expiresAt: z.boolean().optional(),
    ipAddress: z.boolean().optional(),
    userAgent: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional()
  }).strict();

export const SessionFindFirstSchema: z.ZodType<Prisma.SessionFindFirstArgs> = z.object({ select: SessionFindFirstSelectSchema__findFirstSession_schema.optional(), include: z.lazy(() => SessionIncludeObjectSchema.optional()), orderBy: z.union([SessionOrderByWithRelationInputObjectSchema, SessionOrderByWithRelationInputObjectSchema.array()]).optional(), where: SessionWhereInputObjectSchema.optional(), cursor: SessionWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([SessionScalarFieldEnumSchema, SessionScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.SessionFindFirstArgs>;

export const SessionFindFirstZodSchema = z.object({ select: SessionFindFirstSelectSchema__findFirstSession_schema.optional(), include: z.lazy(() => SessionIncludeObjectSchema.optional()), orderBy: z.union([SessionOrderByWithRelationInputObjectSchema, SessionOrderByWithRelationInputObjectSchema.array()]).optional(), where: SessionWhereInputObjectSchema.optional(), cursor: SessionWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([SessionScalarFieldEnumSchema, SessionScalarFieldEnumSchema.array()]).optional() }).strict();

// File: findFirstOrThrowSession.schema.ts

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const SessionFindFirstOrThrowSelectSchema__findFirstOrThrowSession_schema: z.ZodType<Prisma.SessionSelect> = z.object({
    id: z.boolean().optional(),
    userId: z.boolean().optional(),
    token: z.boolean().optional(),
    expiresAt: z.boolean().optional(),
    ipAddress: z.boolean().optional(),
    userAgent: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional()
  }).strict() as unknown as z.ZodType<Prisma.SessionSelect>;

export const SessionFindFirstOrThrowSelectZodSchema__findFirstOrThrowSession_schema = z.object({
    id: z.boolean().optional(),
    userId: z.boolean().optional(),
    token: z.boolean().optional(),
    expiresAt: z.boolean().optional(),
    ipAddress: z.boolean().optional(),
    userAgent: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional()
  }).strict();

export const SessionFindFirstOrThrowSchema: z.ZodType<Prisma.SessionFindFirstOrThrowArgs> = z.object({ select: SessionFindFirstOrThrowSelectSchema__findFirstOrThrowSession_schema.optional(), include: z.lazy(() => SessionIncludeObjectSchema.optional()), orderBy: z.union([SessionOrderByWithRelationInputObjectSchema, SessionOrderByWithRelationInputObjectSchema.array()]).optional(), where: SessionWhereInputObjectSchema.optional(), cursor: SessionWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([SessionScalarFieldEnumSchema, SessionScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.SessionFindFirstOrThrowArgs>;

export const SessionFindFirstOrThrowZodSchema = z.object({ select: SessionFindFirstOrThrowSelectSchema__findFirstOrThrowSession_schema.optional(), include: z.lazy(() => SessionIncludeObjectSchema.optional()), orderBy: z.union([SessionOrderByWithRelationInputObjectSchema, SessionOrderByWithRelationInputObjectSchema.array()]).optional(), where: SessionWhereInputObjectSchema.optional(), cursor: SessionWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([SessionScalarFieldEnumSchema, SessionScalarFieldEnumSchema.array()]).optional() }).strict();

// File: findManySession.schema.ts

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const SessionFindManySelectSchema__findManySession_schema: z.ZodType<Prisma.SessionSelect> = z.object({
    id: z.boolean().optional(),
    userId: z.boolean().optional(),
    token: z.boolean().optional(),
    expiresAt: z.boolean().optional(),
    ipAddress: z.boolean().optional(),
    userAgent: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional()
  }).strict() as unknown as z.ZodType<Prisma.SessionSelect>;

export const SessionFindManySelectZodSchema__findManySession_schema = z.object({
    id: z.boolean().optional(),
    userId: z.boolean().optional(),
    token: z.boolean().optional(),
    expiresAt: z.boolean().optional(),
    ipAddress: z.boolean().optional(),
    userAgent: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional()
  }).strict();

export const SessionFindManySchema: z.ZodType<Prisma.SessionFindManyArgs> = z.object({ select: SessionFindManySelectSchema__findManySession_schema.optional(), include: z.lazy(() => SessionIncludeObjectSchema.optional()), orderBy: z.union([SessionOrderByWithRelationInputObjectSchema, SessionOrderByWithRelationInputObjectSchema.array()]).optional(), where: SessionWhereInputObjectSchema.optional(), cursor: SessionWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([SessionScalarFieldEnumSchema, SessionScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.SessionFindManyArgs>;

export const SessionFindManyZodSchema = z.object({ select: SessionFindManySelectSchema__findManySession_schema.optional(), include: z.lazy(() => SessionIncludeObjectSchema.optional()), orderBy: z.union([SessionOrderByWithRelationInputObjectSchema, SessionOrderByWithRelationInputObjectSchema.array()]).optional(), where: SessionWhereInputObjectSchema.optional(), cursor: SessionWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([SessionScalarFieldEnumSchema, SessionScalarFieldEnumSchema.array()]).optional() }).strict();

// File: countSession.schema.ts

export const SessionCountSchema: z.ZodType<Prisma.SessionCountArgs> = z.object({ orderBy: z.union([SessionOrderByWithRelationInputObjectSchema, SessionOrderByWithRelationInputObjectSchema.array()]).optional(), where: SessionWhereInputObjectSchema.optional(), cursor: SessionWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), SessionCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.SessionCountArgs>;

export const SessionCountZodSchema = z.object({ orderBy: z.union([SessionOrderByWithRelationInputObjectSchema, SessionOrderByWithRelationInputObjectSchema.array()]).optional(), where: SessionWhereInputObjectSchema.optional(), cursor: SessionWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), SessionCountAggregateInputObjectSchema ]).optional() }).strict();

// File: createOneSession.schema.ts

export const SessionCreateOneSchema: z.ZodType<Prisma.SessionCreateArgs> = z.object({ select: SessionSelectObjectSchema.optional(), include: SessionIncludeObjectSchema.optional(), data: z.union([SessionCreateInputObjectSchema, SessionUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.SessionCreateArgs>;

export const SessionCreateOneZodSchema = z.object({ select: SessionSelectObjectSchema.optional(), include: SessionIncludeObjectSchema.optional(), data: z.union([SessionCreateInputObjectSchema, SessionUncheckedCreateInputObjectSchema]) }).strict();

// File: createManySession.schema.ts

export const SessionCreateManySchema: z.ZodType<Prisma.SessionCreateManyArgs> = z.object({ data: z.union([ SessionCreateManyInputObjectSchema, z.array(SessionCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.SessionCreateManyArgs>;

export const SessionCreateManyZodSchema = z.object({ data: z.union([ SessionCreateManyInputObjectSchema, z.array(SessionCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();

// File: createManyAndReturnSession.schema.ts

export const SessionCreateManyAndReturnSchema: z.ZodType<Prisma.SessionCreateManyAndReturnArgs> = z.object({ select: SessionSelectObjectSchema.optional(), data: z.union([ SessionCreateManyInputObjectSchema, z.array(SessionCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.SessionCreateManyAndReturnArgs>;

export const SessionCreateManyAndReturnZodSchema = z.object({ select: SessionSelectObjectSchema.optional(), data: z.union([ SessionCreateManyInputObjectSchema, z.array(SessionCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();

// File: deleteOneSession.schema.ts

export const SessionDeleteOneSchema: z.ZodType<Prisma.SessionDeleteArgs> = z.object({ select: SessionSelectObjectSchema.optional(), include: SessionIncludeObjectSchema.optional(), where: SessionWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.SessionDeleteArgs>;

export const SessionDeleteOneZodSchema = z.object({ select: SessionSelectObjectSchema.optional(), include: SessionIncludeObjectSchema.optional(), where: SessionWhereUniqueInputObjectSchema }).strict();

// File: deleteManySession.schema.ts

export const SessionDeleteManySchema: z.ZodType<Prisma.SessionDeleteManyArgs> = z.object({ where: SessionWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.SessionDeleteManyArgs>;

export const SessionDeleteManyZodSchema = z.object({ where: SessionWhereInputObjectSchema.optional() }).strict();

// File: updateOneSession.schema.ts

export const SessionUpdateOneSchema: z.ZodType<Prisma.SessionUpdateArgs> = z.object({ select: SessionSelectObjectSchema.optional(), include: SessionIncludeObjectSchema.optional(), data: z.union([SessionUpdateInputObjectSchema, SessionUncheckedUpdateInputObjectSchema]), where: SessionWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.SessionUpdateArgs>;

export const SessionUpdateOneZodSchema = z.object({ select: SessionSelectObjectSchema.optional(), include: SessionIncludeObjectSchema.optional(), data: z.union([SessionUpdateInputObjectSchema, SessionUncheckedUpdateInputObjectSchema]), where: SessionWhereUniqueInputObjectSchema }).strict();

// File: updateManySession.schema.ts

export const SessionUpdateManySchema: z.ZodType<Prisma.SessionUpdateManyArgs> = z.object({ data: SessionUpdateManyMutationInputObjectSchema, where: SessionWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.SessionUpdateManyArgs>;

export const SessionUpdateManyZodSchema = z.object({ data: SessionUpdateManyMutationInputObjectSchema, where: SessionWhereInputObjectSchema.optional() }).strict();

// File: updateManyAndReturnSession.schema.ts

export const SessionUpdateManyAndReturnSchema: z.ZodType<Prisma.SessionUpdateManyAndReturnArgs> = z.object({ select: SessionSelectObjectSchema.optional(), data: SessionUpdateManyMutationInputObjectSchema, where: SessionWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.SessionUpdateManyAndReturnArgs>;

export const SessionUpdateManyAndReturnZodSchema = z.object({ select: SessionSelectObjectSchema.optional(), data: SessionUpdateManyMutationInputObjectSchema, where: SessionWhereInputObjectSchema.optional() }).strict();

// File: upsertOneSession.schema.ts

export const SessionUpsertOneSchema: z.ZodType<Prisma.SessionUpsertArgs> = z.object({ select: SessionSelectObjectSchema.optional(), include: SessionIncludeObjectSchema.optional(), where: SessionWhereUniqueInputObjectSchema, create: z.union([ SessionCreateInputObjectSchema, SessionUncheckedCreateInputObjectSchema ]), update: z.union([ SessionUpdateInputObjectSchema, SessionUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.SessionUpsertArgs>;

export const SessionUpsertOneZodSchema = z.object({ select: SessionSelectObjectSchema.optional(), include: SessionIncludeObjectSchema.optional(), where: SessionWhereUniqueInputObjectSchema, create: z.union([ SessionCreateInputObjectSchema, SessionUncheckedCreateInputObjectSchema ]), update: z.union([ SessionUpdateInputObjectSchema, SessionUncheckedUpdateInputObjectSchema ]) }).strict();

// File: aggregateSession.schema.ts

export const SessionAggregateSchema: z.ZodType<Prisma.SessionAggregateArgs> = z.object({ orderBy: z.union([SessionOrderByWithRelationInputObjectSchema, SessionOrderByWithRelationInputObjectSchema.array()]).optional(), where: SessionWhereInputObjectSchema.optional(), cursor: SessionWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), SessionCountAggregateInputObjectSchema ]).optional(), _min: SessionMinAggregateInputObjectSchema.optional(), _max: SessionMaxAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.SessionAggregateArgs>;

export const SessionAggregateZodSchema = z.object({ orderBy: z.union([SessionOrderByWithRelationInputObjectSchema, SessionOrderByWithRelationInputObjectSchema.array()]).optional(), where: SessionWhereInputObjectSchema.optional(), cursor: SessionWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), SessionCountAggregateInputObjectSchema ]).optional(), _min: SessionMinAggregateInputObjectSchema.optional(), _max: SessionMaxAggregateInputObjectSchema.optional() }).strict();

// File: groupBySession.schema.ts

export const SessionGroupBySchema: z.ZodType<Prisma.SessionGroupByArgs> = z.object({ where: SessionWhereInputObjectSchema.optional(), orderBy: z.union([SessionOrderByWithAggregationInputObjectSchema, SessionOrderByWithAggregationInputObjectSchema.array()]).optional(), having: SessionScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(SessionScalarFieldEnumSchema), _count: z.union([ z.literal(true), SessionCountAggregateInputObjectSchema ]).optional(), _min: SessionMinAggregateInputObjectSchema.optional(), _max: SessionMaxAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.SessionGroupByArgs>;

export const SessionGroupByZodSchema = z.object({ where: SessionWhereInputObjectSchema.optional(), orderBy: z.union([SessionOrderByWithAggregationInputObjectSchema, SessionOrderByWithAggregationInputObjectSchema.array()]).optional(), having: SessionScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(SessionScalarFieldEnumSchema), _count: z.union([ z.literal(true), SessionCountAggregateInputObjectSchema ]).optional(), _min: SessionMinAggregateInputObjectSchema.optional(), _max: SessionMaxAggregateInputObjectSchema.optional() }).strict();

// File: findUniqueUser.schema.ts

export const UserFindUniqueSchema: z.ZodType<Prisma.UserFindUniqueArgs> = z.object({ select: UserSelectObjectSchema.optional(), include: UserIncludeObjectSchema.optional(), where: UserWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.UserFindUniqueArgs>;

export const UserFindUniqueZodSchema = z.object({ select: UserSelectObjectSchema.optional(), include: UserIncludeObjectSchema.optional(), where: UserWhereUniqueInputObjectSchema }).strict();

// File: findUniqueOrThrowUser.schema.ts

export const UserFindUniqueOrThrowSchema: z.ZodType<Prisma.UserFindUniqueOrThrowArgs> = z.object({ select: UserSelectObjectSchema.optional(), include: UserIncludeObjectSchema.optional(), where: UserWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.UserFindUniqueOrThrowArgs>;

export const UserFindUniqueOrThrowZodSchema = z.object({ select: UserSelectObjectSchema.optional(), include: UserIncludeObjectSchema.optional(), where: UserWhereUniqueInputObjectSchema }).strict();

// File: findFirstUser.schema.ts

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const UserFindFirstSelectSchema__findFirstUser_schema: z.ZodType<Prisma.UserSelect> = z.object({
    id: z.boolean().optional(),
    email: z.boolean().optional(),
    firstName: z.boolean().optional(),
    lastName: z.boolean().optional(),
    password: z.boolean().optional(),
    emailVerified: z.boolean().optional(),
    role: z.boolean().optional(),
    status: z.boolean().optional(),
    lastLoginAt: z.boolean().optional(),
    lastLoginIp: z.boolean().optional(),
    avatar: z.union([z.boolean(), z.lazy(() => MediaArgsObjectSchema)]).optional(),
    coverImage: z.union([z.boolean(), z.lazy(() => MediaArgsObjectSchema)]).optional(),
    sessions: z.union([z.boolean(), z.lazy(() => SessionFindManySchema)]).optional(),
    accounts: z.union([z.boolean(), z.lazy(() => AccountFindManySchema)]).optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    _count: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeArgsObjectSchema)]).optional()
  }).strict() as unknown as z.ZodType<Prisma.UserSelect>;

export const UserFindFirstSelectZodSchema__findFirstUser_schema = z.object({
    id: z.boolean().optional(),
    email: z.boolean().optional(),
    firstName: z.boolean().optional(),
    lastName: z.boolean().optional(),
    password: z.boolean().optional(),
    emailVerified: z.boolean().optional(),
    role: z.boolean().optional(),
    status: z.boolean().optional(),
    lastLoginAt: z.boolean().optional(),
    lastLoginIp: z.boolean().optional(),
    avatar: z.union([z.boolean(), z.lazy(() => MediaArgsObjectSchema)]).optional(),
    coverImage: z.union([z.boolean(), z.lazy(() => MediaArgsObjectSchema)]).optional(),
    sessions: z.union([z.boolean(), z.lazy(() => SessionFindManySchema)]).optional(),
    accounts: z.union([z.boolean(), z.lazy(() => AccountFindManySchema)]).optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    _count: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeArgsObjectSchema)]).optional()
  }).strict();

export const UserFindFirstSchema: z.ZodType<Prisma.UserFindFirstArgs> = z.object({ select: UserFindFirstSelectSchema__findFirstUser_schema.optional(), include: z.lazy(() => UserIncludeObjectSchema.optional()), orderBy: z.union([UserOrderByWithRelationInputObjectSchema, UserOrderByWithRelationInputObjectSchema.array()]).optional(), where: UserWhereInputObjectSchema.optional(), cursor: UserWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([UserScalarFieldEnumSchema, UserScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.UserFindFirstArgs>;

export const UserFindFirstZodSchema = z.object({ select: UserFindFirstSelectSchema__findFirstUser_schema.optional(), include: z.lazy(() => UserIncludeObjectSchema.optional()), orderBy: z.union([UserOrderByWithRelationInputObjectSchema, UserOrderByWithRelationInputObjectSchema.array()]).optional(), where: UserWhereInputObjectSchema.optional(), cursor: UserWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([UserScalarFieldEnumSchema, UserScalarFieldEnumSchema.array()]).optional() }).strict();

// File: findFirstOrThrowUser.schema.ts

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const UserFindFirstOrThrowSelectSchema__findFirstOrThrowUser_schema: z.ZodType<Prisma.UserSelect> = z.object({
    id: z.boolean().optional(),
    email: z.boolean().optional(),
    firstName: z.boolean().optional(),
    lastName: z.boolean().optional(),
    password: z.boolean().optional(),
    emailVerified: z.boolean().optional(),
    role: z.boolean().optional(),
    status: z.boolean().optional(),
    lastLoginAt: z.boolean().optional(),
    lastLoginIp: z.boolean().optional(),
    avatar: z.union([z.boolean(), z.lazy(() => MediaArgsObjectSchema)]).optional(),
    coverImage: z.union([z.boolean(), z.lazy(() => MediaArgsObjectSchema)]).optional(),
    sessions: z.union([z.boolean(), z.lazy(() => SessionFindManySchema)]).optional(),
    accounts: z.union([z.boolean(), z.lazy(() => AccountFindManySchema)]).optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    _count: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeArgsObjectSchema)]).optional()
  }).strict() as unknown as z.ZodType<Prisma.UserSelect>;

export const UserFindFirstOrThrowSelectZodSchema__findFirstOrThrowUser_schema = z.object({
    id: z.boolean().optional(),
    email: z.boolean().optional(),
    firstName: z.boolean().optional(),
    lastName: z.boolean().optional(),
    password: z.boolean().optional(),
    emailVerified: z.boolean().optional(),
    role: z.boolean().optional(),
    status: z.boolean().optional(),
    lastLoginAt: z.boolean().optional(),
    lastLoginIp: z.boolean().optional(),
    avatar: z.union([z.boolean(), z.lazy(() => MediaArgsObjectSchema)]).optional(),
    coverImage: z.union([z.boolean(), z.lazy(() => MediaArgsObjectSchema)]).optional(),
    sessions: z.union([z.boolean(), z.lazy(() => SessionFindManySchema)]).optional(),
    accounts: z.union([z.boolean(), z.lazy(() => AccountFindManySchema)]).optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    _count: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeArgsObjectSchema)]).optional()
  }).strict();

export const UserFindFirstOrThrowSchema: z.ZodType<Prisma.UserFindFirstOrThrowArgs> = z.object({ select: UserFindFirstOrThrowSelectSchema__findFirstOrThrowUser_schema.optional(), include: z.lazy(() => UserIncludeObjectSchema.optional()), orderBy: z.union([UserOrderByWithRelationInputObjectSchema, UserOrderByWithRelationInputObjectSchema.array()]).optional(), where: UserWhereInputObjectSchema.optional(), cursor: UserWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([UserScalarFieldEnumSchema, UserScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.UserFindFirstOrThrowArgs>;

export const UserFindFirstOrThrowZodSchema = z.object({ select: UserFindFirstOrThrowSelectSchema__findFirstOrThrowUser_schema.optional(), include: z.lazy(() => UserIncludeObjectSchema.optional()), orderBy: z.union([UserOrderByWithRelationInputObjectSchema, UserOrderByWithRelationInputObjectSchema.array()]).optional(), where: UserWhereInputObjectSchema.optional(), cursor: UserWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([UserScalarFieldEnumSchema, UserScalarFieldEnumSchema.array()]).optional() }).strict();

// File: findManyUser.schema.ts

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const UserFindManySelectSchema__findManyUser_schema: z.ZodType<Prisma.UserSelect> = z.object({
    id: z.boolean().optional(),
    email: z.boolean().optional(),
    firstName: z.boolean().optional(),
    lastName: z.boolean().optional(),
    password: z.boolean().optional(),
    emailVerified: z.boolean().optional(),
    role: z.boolean().optional(),
    status: z.boolean().optional(),
    lastLoginAt: z.boolean().optional(),
    lastLoginIp: z.boolean().optional(),
    avatar: z.union([z.boolean(), z.lazy(() => MediaArgsObjectSchema)]).optional(),
    coverImage: z.union([z.boolean(), z.lazy(() => MediaArgsObjectSchema)]).optional(),
    sessions: z.union([z.boolean(), z.lazy(() => SessionFindManySchema)]).optional(),
    accounts: z.union([z.boolean(), z.lazy(() => AccountFindManySchema)]).optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    _count: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeArgsObjectSchema)]).optional()
  }).strict() as unknown as z.ZodType<Prisma.UserSelect>;

export const UserFindManySelectZodSchema__findManyUser_schema = z.object({
    id: z.boolean().optional(),
    email: z.boolean().optional(),
    firstName: z.boolean().optional(),
    lastName: z.boolean().optional(),
    password: z.boolean().optional(),
    emailVerified: z.boolean().optional(),
    role: z.boolean().optional(),
    status: z.boolean().optional(),
    lastLoginAt: z.boolean().optional(),
    lastLoginIp: z.boolean().optional(),
    avatar: z.union([z.boolean(), z.lazy(() => MediaArgsObjectSchema)]).optional(),
    coverImage: z.union([z.boolean(), z.lazy(() => MediaArgsObjectSchema)]).optional(),
    sessions: z.union([z.boolean(), z.lazy(() => SessionFindManySchema)]).optional(),
    accounts: z.union([z.boolean(), z.lazy(() => AccountFindManySchema)]).optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    _count: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeArgsObjectSchema)]).optional()
  }).strict();

export const UserFindManySchema: z.ZodType<Prisma.UserFindManyArgs> = z.object({ select: UserFindManySelectSchema__findManyUser_schema.optional(), include: z.lazy(() => UserIncludeObjectSchema.optional()), orderBy: z.union([UserOrderByWithRelationInputObjectSchema, UserOrderByWithRelationInputObjectSchema.array()]).optional(), where: UserWhereInputObjectSchema.optional(), cursor: UserWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([UserScalarFieldEnumSchema, UserScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.UserFindManyArgs>;

export const UserFindManyZodSchema = z.object({ select: UserFindManySelectSchema__findManyUser_schema.optional(), include: z.lazy(() => UserIncludeObjectSchema.optional()), orderBy: z.union([UserOrderByWithRelationInputObjectSchema, UserOrderByWithRelationInputObjectSchema.array()]).optional(), where: UserWhereInputObjectSchema.optional(), cursor: UserWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([UserScalarFieldEnumSchema, UserScalarFieldEnumSchema.array()]).optional() }).strict();

// File: countUser.schema.ts

export const UserCountSchema: z.ZodType<Prisma.UserCountArgs> = z.object({ orderBy: z.union([UserOrderByWithRelationInputObjectSchema, UserOrderByWithRelationInputObjectSchema.array()]).optional(), where: UserWhereInputObjectSchema.optional(), cursor: UserWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), UserCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.UserCountArgs>;

export const UserCountZodSchema = z.object({ orderBy: z.union([UserOrderByWithRelationInputObjectSchema, UserOrderByWithRelationInputObjectSchema.array()]).optional(), where: UserWhereInputObjectSchema.optional(), cursor: UserWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), UserCountAggregateInputObjectSchema ]).optional() }).strict();

// File: createOneUser.schema.ts

export const UserCreateOneSchema: z.ZodType<Prisma.UserCreateArgs> = z.object({ select: UserSelectObjectSchema.optional(), include: UserIncludeObjectSchema.optional(), data: z.union([UserCreateInputObjectSchema, UserUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.UserCreateArgs>;

export const UserCreateOneZodSchema = z.object({ select: UserSelectObjectSchema.optional(), include: UserIncludeObjectSchema.optional(), data: z.union([UserCreateInputObjectSchema, UserUncheckedCreateInputObjectSchema]) }).strict();

// File: createManyUser.schema.ts

export const UserCreateManySchema: z.ZodType<Prisma.UserCreateManyArgs> = z.object({ data: z.union([ UserCreateManyInputObjectSchema, z.array(UserCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.UserCreateManyArgs>;

export const UserCreateManyZodSchema = z.object({ data: z.union([ UserCreateManyInputObjectSchema, z.array(UserCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();

// File: createManyAndReturnUser.schema.ts

export const UserCreateManyAndReturnSchema: z.ZodType<Prisma.UserCreateManyAndReturnArgs> = z.object({ select: UserSelectObjectSchema.optional(), data: z.union([ UserCreateManyInputObjectSchema, z.array(UserCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.UserCreateManyAndReturnArgs>;

export const UserCreateManyAndReturnZodSchema = z.object({ select: UserSelectObjectSchema.optional(), data: z.union([ UserCreateManyInputObjectSchema, z.array(UserCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();

// File: deleteOneUser.schema.ts

export const UserDeleteOneSchema: z.ZodType<Prisma.UserDeleteArgs> = z.object({ select: UserSelectObjectSchema.optional(), include: UserIncludeObjectSchema.optional(), where: UserWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.UserDeleteArgs>;

export const UserDeleteOneZodSchema = z.object({ select: UserSelectObjectSchema.optional(), include: UserIncludeObjectSchema.optional(), where: UserWhereUniqueInputObjectSchema }).strict();

// File: deleteManyUser.schema.ts

export const UserDeleteManySchema: z.ZodType<Prisma.UserDeleteManyArgs> = z.object({ where: UserWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.UserDeleteManyArgs>;

export const UserDeleteManyZodSchema = z.object({ where: UserWhereInputObjectSchema.optional() }).strict();

// File: updateOneUser.schema.ts

export const UserUpdateOneSchema: z.ZodType<Prisma.UserUpdateArgs> = z.object({ select: UserSelectObjectSchema.optional(), include: UserIncludeObjectSchema.optional(), data: z.union([UserUpdateInputObjectSchema, UserUncheckedUpdateInputObjectSchema]), where: UserWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.UserUpdateArgs>;

export const UserUpdateOneZodSchema = z.object({ select: UserSelectObjectSchema.optional(), include: UserIncludeObjectSchema.optional(), data: z.union([UserUpdateInputObjectSchema, UserUncheckedUpdateInputObjectSchema]), where: UserWhereUniqueInputObjectSchema }).strict();

// File: updateManyUser.schema.ts

export const UserUpdateManySchema: z.ZodType<Prisma.UserUpdateManyArgs> = z.object({ data: UserUpdateManyMutationInputObjectSchema, where: UserWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.UserUpdateManyArgs>;

export const UserUpdateManyZodSchema = z.object({ data: UserUpdateManyMutationInputObjectSchema, where: UserWhereInputObjectSchema.optional() }).strict();

// File: updateManyAndReturnUser.schema.ts

export const UserUpdateManyAndReturnSchema: z.ZodType<Prisma.UserUpdateManyAndReturnArgs> = z.object({ select: UserSelectObjectSchema.optional(), data: UserUpdateManyMutationInputObjectSchema, where: UserWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.UserUpdateManyAndReturnArgs>;

export const UserUpdateManyAndReturnZodSchema = z.object({ select: UserSelectObjectSchema.optional(), data: UserUpdateManyMutationInputObjectSchema, where: UserWhereInputObjectSchema.optional() }).strict();

// File: upsertOneUser.schema.ts

export const UserUpsertOneSchema: z.ZodType<Prisma.UserUpsertArgs> = z.object({ select: UserSelectObjectSchema.optional(), include: UserIncludeObjectSchema.optional(), where: UserWhereUniqueInputObjectSchema, create: z.union([ UserCreateInputObjectSchema, UserUncheckedCreateInputObjectSchema ]), update: z.union([ UserUpdateInputObjectSchema, UserUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.UserUpsertArgs>;

export const UserUpsertOneZodSchema = z.object({ select: UserSelectObjectSchema.optional(), include: UserIncludeObjectSchema.optional(), where: UserWhereUniqueInputObjectSchema, create: z.union([ UserCreateInputObjectSchema, UserUncheckedCreateInputObjectSchema ]), update: z.union([ UserUpdateInputObjectSchema, UserUncheckedUpdateInputObjectSchema ]) }).strict();

// File: aggregateUser.schema.ts

export const UserAggregateSchema: z.ZodType<Prisma.UserAggregateArgs> = z.object({ orderBy: z.union([UserOrderByWithRelationInputObjectSchema, UserOrderByWithRelationInputObjectSchema.array()]).optional(), where: UserWhereInputObjectSchema.optional(), cursor: UserWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), UserCountAggregateInputObjectSchema ]).optional(), _min: UserMinAggregateInputObjectSchema.optional(), _max: UserMaxAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.UserAggregateArgs>;

export const UserAggregateZodSchema = z.object({ orderBy: z.union([UserOrderByWithRelationInputObjectSchema, UserOrderByWithRelationInputObjectSchema.array()]).optional(), where: UserWhereInputObjectSchema.optional(), cursor: UserWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), UserCountAggregateInputObjectSchema ]).optional(), _min: UserMinAggregateInputObjectSchema.optional(), _max: UserMaxAggregateInputObjectSchema.optional() }).strict();

// File: groupByUser.schema.ts

export const UserGroupBySchema: z.ZodType<Prisma.UserGroupByArgs> = z.object({ where: UserWhereInputObjectSchema.optional(), orderBy: z.union([UserOrderByWithAggregationInputObjectSchema, UserOrderByWithAggregationInputObjectSchema.array()]).optional(), having: UserScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(UserScalarFieldEnumSchema), _count: z.union([ z.literal(true), UserCountAggregateInputObjectSchema ]).optional(), _min: UserMinAggregateInputObjectSchema.optional(), _max: UserMaxAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.UserGroupByArgs>;

export const UserGroupByZodSchema = z.object({ where: UserWhereInputObjectSchema.optional(), orderBy: z.union([UserOrderByWithAggregationInputObjectSchema, UserOrderByWithAggregationInputObjectSchema.array()]).optional(), having: UserScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(UserScalarFieldEnumSchema), _count: z.union([ z.literal(true), UserCountAggregateInputObjectSchema ]).optional(), _min: UserMinAggregateInputObjectSchema.optional(), _max: UserMaxAggregateInputObjectSchema.optional() }).strict();

// File: findUniqueVerification.schema.ts

export const VerificationFindUniqueSchema: z.ZodType<Prisma.VerificationFindUniqueArgs> = z.object({ select: VerificationSelectObjectSchema.optional(),  where: VerificationWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.VerificationFindUniqueArgs>;

export const VerificationFindUniqueZodSchema = z.object({ select: VerificationSelectObjectSchema.optional(),  where: VerificationWhereUniqueInputObjectSchema }).strict();

// File: findUniqueOrThrowVerification.schema.ts

export const VerificationFindUniqueOrThrowSchema: z.ZodType<Prisma.VerificationFindUniqueOrThrowArgs> = z.object({ select: VerificationSelectObjectSchema.optional(),  where: VerificationWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.VerificationFindUniqueOrThrowArgs>;

export const VerificationFindUniqueOrThrowZodSchema = z.object({ select: VerificationSelectObjectSchema.optional(),  where: VerificationWhereUniqueInputObjectSchema }).strict();

// File: findFirstVerification.schema.ts

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const VerificationFindFirstSelectSchema__findFirstVerification_schema: z.ZodType<Prisma.VerificationSelect> = z.object({
    id: z.boolean().optional(),
    hashedIdentifier: z.boolean().optional(),
    hashedValue: z.boolean().optional(),
    expiresAt: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.VerificationSelect>;

export const VerificationFindFirstSelectZodSchema__findFirstVerification_schema = z.object({
    id: z.boolean().optional(),
    hashedIdentifier: z.boolean().optional(),
    hashedValue: z.boolean().optional(),
    expiresAt: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional()
  }).strict();

export const VerificationFindFirstSchema: z.ZodType<Prisma.VerificationFindFirstArgs> = z.object({ select: VerificationFindFirstSelectSchema__findFirstVerification_schema.optional(),  orderBy: z.union([VerificationOrderByWithRelationInputObjectSchema, VerificationOrderByWithRelationInputObjectSchema.array()]).optional(), where: VerificationWhereInputObjectSchema.optional(), cursor: VerificationWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([VerificationScalarFieldEnumSchema, VerificationScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.VerificationFindFirstArgs>;

export const VerificationFindFirstZodSchema = z.object({ select: VerificationFindFirstSelectSchema__findFirstVerification_schema.optional(),  orderBy: z.union([VerificationOrderByWithRelationInputObjectSchema, VerificationOrderByWithRelationInputObjectSchema.array()]).optional(), where: VerificationWhereInputObjectSchema.optional(), cursor: VerificationWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([VerificationScalarFieldEnumSchema, VerificationScalarFieldEnumSchema.array()]).optional() }).strict();

// File: findFirstOrThrowVerification.schema.ts

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const VerificationFindFirstOrThrowSelectSchema__findFirstOrThrowVerification_schema: z.ZodType<Prisma.VerificationSelect> = z.object({
    id: z.boolean().optional(),
    hashedIdentifier: z.boolean().optional(),
    hashedValue: z.boolean().optional(),
    expiresAt: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.VerificationSelect>;

export const VerificationFindFirstOrThrowSelectZodSchema__findFirstOrThrowVerification_schema = z.object({
    id: z.boolean().optional(),
    hashedIdentifier: z.boolean().optional(),
    hashedValue: z.boolean().optional(),
    expiresAt: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional()
  }).strict();

export const VerificationFindFirstOrThrowSchema: z.ZodType<Prisma.VerificationFindFirstOrThrowArgs> = z.object({ select: VerificationFindFirstOrThrowSelectSchema__findFirstOrThrowVerification_schema.optional(),  orderBy: z.union([VerificationOrderByWithRelationInputObjectSchema, VerificationOrderByWithRelationInputObjectSchema.array()]).optional(), where: VerificationWhereInputObjectSchema.optional(), cursor: VerificationWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([VerificationScalarFieldEnumSchema, VerificationScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.VerificationFindFirstOrThrowArgs>;

export const VerificationFindFirstOrThrowZodSchema = z.object({ select: VerificationFindFirstOrThrowSelectSchema__findFirstOrThrowVerification_schema.optional(),  orderBy: z.union([VerificationOrderByWithRelationInputObjectSchema, VerificationOrderByWithRelationInputObjectSchema.array()]).optional(), where: VerificationWhereInputObjectSchema.optional(), cursor: VerificationWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([VerificationScalarFieldEnumSchema, VerificationScalarFieldEnumSchema.array()]).optional() }).strict();

// File: findManyVerification.schema.ts

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const VerificationFindManySelectSchema__findManyVerification_schema: z.ZodType<Prisma.VerificationSelect> = z.object({
    id: z.boolean().optional(),
    hashedIdentifier: z.boolean().optional(),
    hashedValue: z.boolean().optional(),
    expiresAt: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.VerificationSelect>;

export const VerificationFindManySelectZodSchema__findManyVerification_schema = z.object({
    id: z.boolean().optional(),
    hashedIdentifier: z.boolean().optional(),
    hashedValue: z.boolean().optional(),
    expiresAt: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional()
  }).strict();

export const VerificationFindManySchema: z.ZodType<Prisma.VerificationFindManyArgs> = z.object({ select: VerificationFindManySelectSchema__findManyVerification_schema.optional(),  orderBy: z.union([VerificationOrderByWithRelationInputObjectSchema, VerificationOrderByWithRelationInputObjectSchema.array()]).optional(), where: VerificationWhereInputObjectSchema.optional(), cursor: VerificationWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([VerificationScalarFieldEnumSchema, VerificationScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.VerificationFindManyArgs>;

export const VerificationFindManyZodSchema = z.object({ select: VerificationFindManySelectSchema__findManyVerification_schema.optional(),  orderBy: z.union([VerificationOrderByWithRelationInputObjectSchema, VerificationOrderByWithRelationInputObjectSchema.array()]).optional(), where: VerificationWhereInputObjectSchema.optional(), cursor: VerificationWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([VerificationScalarFieldEnumSchema, VerificationScalarFieldEnumSchema.array()]).optional() }).strict();

// File: countVerification.schema.ts

export const VerificationCountSchema: z.ZodType<Prisma.VerificationCountArgs> = z.object({ orderBy: z.union([VerificationOrderByWithRelationInputObjectSchema, VerificationOrderByWithRelationInputObjectSchema.array()]).optional(), where: VerificationWhereInputObjectSchema.optional(), cursor: VerificationWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), VerificationCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.VerificationCountArgs>;

export const VerificationCountZodSchema = z.object({ orderBy: z.union([VerificationOrderByWithRelationInputObjectSchema, VerificationOrderByWithRelationInputObjectSchema.array()]).optional(), where: VerificationWhereInputObjectSchema.optional(), cursor: VerificationWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), VerificationCountAggregateInputObjectSchema ]).optional() }).strict();

// File: createOneVerification.schema.ts

export const VerificationCreateOneSchema: z.ZodType<Prisma.VerificationCreateArgs> = z.object({ select: VerificationSelectObjectSchema.optional(),  data: z.union([VerificationCreateInputObjectSchema, VerificationUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.VerificationCreateArgs>;

export const VerificationCreateOneZodSchema = z.object({ select: VerificationSelectObjectSchema.optional(),  data: z.union([VerificationCreateInputObjectSchema, VerificationUncheckedCreateInputObjectSchema]) }).strict();

// File: createManyVerification.schema.ts

export const VerificationCreateManySchema: z.ZodType<Prisma.VerificationCreateManyArgs> = z.object({ data: z.union([ VerificationCreateManyInputObjectSchema, z.array(VerificationCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.VerificationCreateManyArgs>;

export const VerificationCreateManyZodSchema = z.object({ data: z.union([ VerificationCreateManyInputObjectSchema, z.array(VerificationCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();

// File: createManyAndReturnVerification.schema.ts

export const VerificationCreateManyAndReturnSchema: z.ZodType<Prisma.VerificationCreateManyAndReturnArgs> = z.object({ select: VerificationSelectObjectSchema.optional(), data: z.union([ VerificationCreateManyInputObjectSchema, z.array(VerificationCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.VerificationCreateManyAndReturnArgs>;

export const VerificationCreateManyAndReturnZodSchema = z.object({ select: VerificationSelectObjectSchema.optional(), data: z.union([ VerificationCreateManyInputObjectSchema, z.array(VerificationCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();

// File: deleteOneVerification.schema.ts

export const VerificationDeleteOneSchema: z.ZodType<Prisma.VerificationDeleteArgs> = z.object({ select: VerificationSelectObjectSchema.optional(),  where: VerificationWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.VerificationDeleteArgs>;

export const VerificationDeleteOneZodSchema = z.object({ select: VerificationSelectObjectSchema.optional(),  where: VerificationWhereUniqueInputObjectSchema }).strict();

// File: deleteManyVerification.schema.ts

export const VerificationDeleteManySchema: z.ZodType<Prisma.VerificationDeleteManyArgs> = z.object({ where: VerificationWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.VerificationDeleteManyArgs>;

export const VerificationDeleteManyZodSchema = z.object({ where: VerificationWhereInputObjectSchema.optional() }).strict();

// File: updateOneVerification.schema.ts

export const VerificationUpdateOneSchema: z.ZodType<Prisma.VerificationUpdateArgs> = z.object({ select: VerificationSelectObjectSchema.optional(),  data: z.union([VerificationUpdateInputObjectSchema, VerificationUncheckedUpdateInputObjectSchema]), where: VerificationWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.VerificationUpdateArgs>;

export const VerificationUpdateOneZodSchema = z.object({ select: VerificationSelectObjectSchema.optional(),  data: z.union([VerificationUpdateInputObjectSchema, VerificationUncheckedUpdateInputObjectSchema]), where: VerificationWhereUniqueInputObjectSchema }).strict();

// File: updateManyVerification.schema.ts

export const VerificationUpdateManySchema: z.ZodType<Prisma.VerificationUpdateManyArgs> = z.object({ data: VerificationUpdateManyMutationInputObjectSchema, where: VerificationWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.VerificationUpdateManyArgs>;

export const VerificationUpdateManyZodSchema = z.object({ data: VerificationUpdateManyMutationInputObjectSchema, where: VerificationWhereInputObjectSchema.optional() }).strict();

// File: updateManyAndReturnVerification.schema.ts

export const VerificationUpdateManyAndReturnSchema: z.ZodType<Prisma.VerificationUpdateManyAndReturnArgs> = z.object({ select: VerificationSelectObjectSchema.optional(), data: VerificationUpdateManyMutationInputObjectSchema, where: VerificationWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.VerificationUpdateManyAndReturnArgs>;

export const VerificationUpdateManyAndReturnZodSchema = z.object({ select: VerificationSelectObjectSchema.optional(), data: VerificationUpdateManyMutationInputObjectSchema, where: VerificationWhereInputObjectSchema.optional() }).strict();

// File: upsertOneVerification.schema.ts

export const VerificationUpsertOneSchema: z.ZodType<Prisma.VerificationUpsertArgs> = z.object({ select: VerificationSelectObjectSchema.optional(),  where: VerificationWhereUniqueInputObjectSchema, create: z.union([ VerificationCreateInputObjectSchema, VerificationUncheckedCreateInputObjectSchema ]), update: z.union([ VerificationUpdateInputObjectSchema, VerificationUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.VerificationUpsertArgs>;

export const VerificationUpsertOneZodSchema = z.object({ select: VerificationSelectObjectSchema.optional(),  where: VerificationWhereUniqueInputObjectSchema, create: z.union([ VerificationCreateInputObjectSchema, VerificationUncheckedCreateInputObjectSchema ]), update: z.union([ VerificationUpdateInputObjectSchema, VerificationUncheckedUpdateInputObjectSchema ]) }).strict();

// File: aggregateVerification.schema.ts

export const VerificationAggregateSchema: z.ZodType<Prisma.VerificationAggregateArgs> = z.object({ orderBy: z.union([VerificationOrderByWithRelationInputObjectSchema, VerificationOrderByWithRelationInputObjectSchema.array()]).optional(), where: VerificationWhereInputObjectSchema.optional(), cursor: VerificationWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), VerificationCountAggregateInputObjectSchema ]).optional(), _min: VerificationMinAggregateInputObjectSchema.optional(), _max: VerificationMaxAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.VerificationAggregateArgs>;

export const VerificationAggregateZodSchema = z.object({ orderBy: z.union([VerificationOrderByWithRelationInputObjectSchema, VerificationOrderByWithRelationInputObjectSchema.array()]).optional(), where: VerificationWhereInputObjectSchema.optional(), cursor: VerificationWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), VerificationCountAggregateInputObjectSchema ]).optional(), _min: VerificationMinAggregateInputObjectSchema.optional(), _max: VerificationMaxAggregateInputObjectSchema.optional() }).strict();

// File: groupByVerification.schema.ts

export const VerificationGroupBySchema: z.ZodType<Prisma.VerificationGroupByArgs> = z.object({ where: VerificationWhereInputObjectSchema.optional(), orderBy: z.union([VerificationOrderByWithAggregationInputObjectSchema, VerificationOrderByWithAggregationInputObjectSchema.array()]).optional(), having: VerificationScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(VerificationScalarFieldEnumSchema), _count: z.union([ z.literal(true), VerificationCountAggregateInputObjectSchema ]).optional(), _min: VerificationMinAggregateInputObjectSchema.optional(), _max: VerificationMaxAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.VerificationGroupByArgs>;

export const VerificationGroupByZodSchema = z.object({ where: VerificationWhereInputObjectSchema.optional(), orderBy: z.union([VerificationOrderByWithAggregationInputObjectSchema, VerificationOrderByWithAggregationInputObjectSchema.array()]).optional(), having: VerificationScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(VerificationScalarFieldEnumSchema), _count: z.union([ z.literal(true), VerificationCountAggregateInputObjectSchema ]).optional(), _min: VerificationMinAggregateInputObjectSchema.optional(), _max: VerificationMaxAggregateInputObjectSchema.optional() }).strict();

// File: index.ts


// File: Account.schema.ts

export const Account = z.object({
  id: z.string(),
  userId: z.string(),
  accountId: z.string(),
  providerId: z.string(),
  accessToken: z.string().nullish(),
  refreshToken: z.string().nullish(),
  accessTokenExpiresAt: z.date().nullish(),
  refreshTokenExpiresAt: z.date().nullish(),
  scope: z.string().nullish(),
  idToken: z.string().nullish(),
  password: z.string().nullish(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type Account = z.infer<typeof Account>;

// Legacy aliases
export const AccountSchema = Account;
export type AccountType = z.infer<typeof Account>;

// File: Contact.schema.ts

export const Contact = z.object({
  id: z.string(),
  email: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  createdAt: z.date(),
});

export type Contact = z.infer<typeof Contact>;

// Legacy aliases
export const ContactSchema = Contact;
export type ContactType = z.infer<typeof Contact>;

// File: Media.schema.ts

export const Media = z.object({
  id: z.string(),
  url: z.string(),
  key: z.string(),
  mimeType: z.string(),
  size: z.number().int(),
  avatarUserId: z.string().nullish(),
  coverUserId: z.string().nullish(),
  createdAt: z.date(),
});

export type Media = z.infer<typeof Media>;

// Legacy aliases
export const MediaSchema = Media;
export type MediaType = z.infer<typeof Media>;

// File: Project.schema.ts

export const Project = z.object({
  id: z.number().int(),
  slug: z.string(),
  name: z.string(),
  weeks: z.number().int(),
  link: z.string().nullish(),
  cover: z.string(),
  video: z.string().nullish(),
  gallery: z.array(z.string()),
  description: z.string(),
  techStack: z.array(z.string()),
  date: z.date(),
  services: z.array(z.string()),
  team: z.array(TeamMembersSchema),
  notes: z.array(z.string()),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type Project = z.infer<typeof Project>;

// Legacy aliases
export const ProjectSchema = Project;
export type ProjectType = z.infer<typeof Project>;

// File: Session.schema.ts

export const Session = z.object({
  id: z.string(),
  userId: z.string(),
  token: z.string(),
  expiresAt: z.date(),
  ipAddress: z.string().nullish(),
  userAgent: z.string().nullish(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type Session = z.infer<typeof Session>;

// Legacy aliases
export const SessionSchema = Session;
export type SessionType = z.infer<typeof Session>;

// File: User.schema.ts

export const User = z.object({
  id: z.string(),
  email: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  password: z.string(),
  emailVerified: z.boolean(),
  role: UserRoleSchema.default("USER"),
  status: UserStatusSchema.default("ACTIVE"),
  lastLoginAt: z.date().nullish(),
  lastLoginIp: z.string().nullish(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type User = z.infer<typeof User>;

// Legacy aliases
export const UserSchema = User;
export type UserType = z.infer<typeof User>;

// File: Verification.schema.ts

export const Verification = z.object({
  id: z.string(),
  hashedIdentifier: z.string(),
  hashedValue: z.string(),
  expiresAt: z.date(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type Verification = z.infer<typeof Verification>;

// Legacy aliases
export const VerificationSchema = Verification;
export type VerificationType = z.infer<typeof Verification>;
