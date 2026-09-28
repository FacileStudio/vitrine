/**
 * Prisma Zod Generator - Single File (inlined)
 * Auto-generated. Do not edit.
 */

import * as z from 'zod';
import type { Prisma } from '../generated/client';
// JSON helper schemas (hoisted)
const literalSchema = z.union([z.string(), z.number(), z.boolean()]);
const jsonSchema: any = z.lazy(() =>
  z.union([literalSchema, z.array(jsonSchema.nullable()), z.record(z.string(), jsonSchema.nullable())])
);
// File: TransactionIsolationLevel.schema.ts

export const TransactionIsolationLevelSchema = z.enum(['ReadUncommitted', 'ReadCommitted', 'RepeatableRead', 'Serializable'])

export type TransactionIsolationLevel = z.infer<typeof TransactionIsolationLevelSchema>;

// File: AccountScalarFieldEnum.schema.ts

export const AccountScalarFieldEnumSchema = z.enum(['id', 'userId', 'accountId', 'providerId', 'accessToken', 'refreshToken', 'accessTokenExpiresAt', 'refreshTokenExpiresAt', 'scope', 'idToken', 'password', 'createdAt', 'updatedAt'])

export type AccountScalarFieldEnum = z.infer<typeof AccountScalarFieldEnumSchema>;

// File: ContactScalarFieldEnum.schema.ts

export const ContactScalarFieldEnumSchema = z.enum(['id', 'email', 'firstName', 'lastName', 'message', 'createdAt'])

export type ContactScalarFieldEnum = z.infer<typeof ContactScalarFieldEnumSchema>;

// File: MediaScalarFieldEnum.schema.ts

export const MediaScalarFieldEnumSchema = z.enum(['id', 'url', 'key', 'mimeType', 'size', 'avatarUserId', 'coverUserId', 'createdAt'])

export type MediaScalarFieldEnum = z.infer<typeof MediaScalarFieldEnumSchema>;

// File: ProjectScalarFieldEnum.schema.ts

export const ProjectScalarFieldEnumSchema = z.enum(['slug', 'position', 'name', 'weeks', 'link', 'image', 'video', 'coverEffect', 'description', 'metaDescription', 'challenge', 'services', 'techStack', 'date', 'gallery', 'notes', 'createdAt', 'updatedAt'])

export type ProjectScalarFieldEnum = z.infer<typeof ProjectScalarFieldEnumSchema>;

// File: SessionScalarFieldEnum.schema.ts

export const SessionScalarFieldEnumSchema = z.enum(['id', 'userId', 'token', 'expiresAt', 'ipAddress', 'userAgent', 'createdAt', 'updatedAt'])

export type SessionScalarFieldEnum = z.infer<typeof SessionScalarFieldEnumSchema>;

// File: SiteVisitorScalarFieldEnum.schema.ts

export const SiteVisitorScalarFieldEnumSchema = z.enum(['id', 'visitorKey', 'firstSeenAt', 'lastSeenAt'])

export type SiteVisitorScalarFieldEnum = z.infer<typeof SiteVisitorScalarFieldEnumSchema>;

// File: SiteDailyStatScalarFieldEnum.schema.ts

export const SiteDailyStatScalarFieldEnumSchema = z.enum(['date', 'visits', 'uniqueVisitors', 'createdAt', 'updatedAt'])

export type SiteDailyStatScalarFieldEnum = z.infer<typeof SiteDailyStatScalarFieldEnumSchema>;

// File: SiteDailyVisitorScalarFieldEnum.schema.ts

export const SiteDailyVisitorScalarFieldEnumSchema = z.enum(['date', 'visitorId', 'firstVisitAt'])

export type SiteDailyVisitorScalarFieldEnum = z.infer<typeof SiteDailyVisitorScalarFieldEnumSchema>;

// File: StoryBlockScalarFieldEnum.schema.ts

export const StoryBlockScalarFieldEnumSchema = z.enum(['id', 'sectionId', 'position', 'type', 'media', 'eyebrow', 'title', 'text', 'tags', 'logos', 'tiles', 'link', 'linkLabel', 'effect', 'smalls', 'cols', 'font', 'fontFamily', 'description', 'secondFont', 'secondFontFamily', 'secondDescription', 'swatches'])

export type StoryBlockScalarFieldEnum = z.infer<typeof StoryBlockScalarFieldEnumSchema>;

// File: StorySectionScalarFieldEnum.schema.ts

export const StorySectionScalarFieldEnumSchema = z.enum(['id', 'projectSlug', 'position', 'title', 'by', 'layout'])

export type StorySectionScalarFieldEnum = z.infer<typeof StorySectionScalarFieldEnumSchema>;

// File: StudioMemberScalarFieldEnum.schema.ts

export const StudioMemberScalarFieldEnumSchema = z.enum(['slug', 'position', 'name', 'role', 'description', 'bio', 'model', 'scale', 'roughness', 'metalness', 'hair', 'rotation', 'highlight', 'socials', 'labels', 'projects', 'suite', 'facts', 'createdAt', 'updatedAt'])

export type StudioMemberScalarFieldEnum = z.infer<typeof StudioMemberScalarFieldEnumSchema>;

// File: UserScalarFieldEnum.schema.ts

export const UserScalarFieldEnumSchema = z.enum(['id', 'email', 'firstName', 'lastName', 'password', 'emailVerified', 'role', 'status', 'lastLoginAt', 'lastLoginIp', 'createdAt', 'updatedAt'])

export type UserScalarFieldEnum = z.infer<typeof UserScalarFieldEnumSchema>;

// File: VerificationScalarFieldEnum.schema.ts

export const VerificationScalarFieldEnumSchema = z.enum(['id', 'hashedIdentifier', 'hashedValue', 'expiresAt', 'createdAt', 'updatedAt'])

export type VerificationScalarFieldEnum = z.infer<typeof VerificationScalarFieldEnumSchema>;

// File: SortOrder.schema.ts

export const SortOrderSchema = z.enum(['asc', 'desc'])

export type SortOrder = z.infer<typeof SortOrderSchema>;

// File: JsonNullValueInput.schema.ts

export const JsonNullValueInputSchema = z.enum(['JsonNull'])

export type JsonNullValueInput = z.infer<typeof JsonNullValueInputSchema>;

// File: NullableJsonNullValueInput.schema.ts

export const NullableJsonNullValueInputSchema = z.enum(['DbNull', 'JsonNull'])

export type NullableJsonNullValueInput = z.infer<typeof NullableJsonNullValueInputSchema>;

// File: QueryMode.schema.ts

export const QueryModeSchema = z.enum(['default', 'insensitive'])

export type QueryMode = z.infer<typeof QueryModeSchema>;

// File: NullsOrder.schema.ts

export const NullsOrderSchema = z.enum(['first', 'last'])

export type NullsOrder = z.infer<typeof NullsOrderSchema>;

// File: JsonNullValueFilter.schema.ts

export const JsonNullValueFilterSchema = z.enum(['DbNull', 'JsonNull', 'AnyNull'])

export type JsonNullValueFilter = z.infer<typeof JsonNullValueFilterSchema>;

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
  message: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
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
  message: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional()
}).strict();
export const ContactOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.ContactOrderByWithRelationInput> = __makeSchema_ContactOrderByWithRelationInput_schema() as unknown as z.ZodType<Prisma.ContactOrderByWithRelationInput>;
export const ContactOrderByWithRelationInputObjectZodSchema = __makeSchema_ContactOrderByWithRelationInput_schema();


// File: ContactWhereUniqueInput.schema.ts
const __makeSchema_ContactWhereUniqueInput_schema = () => z.object({
  id: z.string().optional()
}).strict();
export const ContactWhereUniqueInputObjectSchema: z.ZodType<Prisma.ContactWhereUniqueInput> = __makeSchema_ContactWhereUniqueInput_schema() as unknown as z.ZodType<Prisma.ContactWhereUniqueInput>;
export const ContactWhereUniqueInputObjectZodSchema = __makeSchema_ContactWhereUniqueInput_schema();


// File: ContactOrderByWithAggregationInput.schema.ts
const __makeSchema_ContactOrderByWithAggregationInput_schema = () => z.object({
  id: SortOrderSchema.optional(),
  email: SortOrderSchema.optional(),
  firstName: SortOrderSchema.optional(),
  lastName: SortOrderSchema.optional(),
  message: SortOrderSchema.optional(),
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
  message: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
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
  slug: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  position: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  weeks: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  link: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  image: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  video: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  coverEffect: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  description: z.lazy(() => JsonFilterObjectSchema).optional(),
  metaDescription: z.lazy(() => JsonFilterObjectSchema).optional(),
  challenge: z.lazy(() => JsonNullableFilterObjectSchema).optional(),
  services: z.lazy(() => StringNullableListFilterObjectSchema).optional(),
  techStack: z.lazy(() => StringNullableListFilterObjectSchema).optional(),
  date: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  gallery: z.lazy(() => StringNullableListFilterObjectSchema).optional(),
  notes: z.lazy(() => JsonNullableListFilterObjectSchema).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  team: z.lazy(() => StudioMemberListRelationFilterObjectSchema).optional(),
  story: z.lazy(() => StorySectionListRelationFilterObjectSchema).optional()
}).strict();
export const ProjectWhereInputObjectSchema: z.ZodType<Prisma.ProjectWhereInput> = projectwhereinputSchema as unknown as z.ZodType<Prisma.ProjectWhereInput>;
export const ProjectWhereInputObjectZodSchema = projectwhereinputSchema;


// File: ProjectOrderByWithRelationInput.schema.ts
const __makeSchema_ProjectOrderByWithRelationInput_schema = () => z.object({
  slug: SortOrderSchema.optional(),
  position: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  weeks: SortOrderSchema.optional(),
  link: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  image: SortOrderSchema.optional(),
  video: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  coverEffect: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  description: SortOrderSchema.optional(),
  metaDescription: SortOrderSchema.optional(),
  challenge: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  services: SortOrderSchema.optional(),
  techStack: SortOrderSchema.optional(),
  date: SortOrderSchema.optional(),
  gallery: SortOrderSchema.optional(),
  notes: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  team: z.lazy(() => StudioMemberOrderByRelationAggregateInputObjectSchema).optional(),
  story: z.lazy(() => StorySectionOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const ProjectOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.ProjectOrderByWithRelationInput> = __makeSchema_ProjectOrderByWithRelationInput_schema() as unknown as z.ZodType<Prisma.ProjectOrderByWithRelationInput>;
export const ProjectOrderByWithRelationInputObjectZodSchema = __makeSchema_ProjectOrderByWithRelationInput_schema();


// File: ProjectWhereUniqueInput.schema.ts
const __makeSchema_ProjectWhereUniqueInput_schema = () => z.object({
  slug: z.string().optional(),
  position: z.number().int().optional()
}).strict();
export const ProjectWhereUniqueInputObjectSchema: z.ZodType<Prisma.ProjectWhereUniqueInput> = __makeSchema_ProjectWhereUniqueInput_schema() as unknown as z.ZodType<Prisma.ProjectWhereUniqueInput>;
export const ProjectWhereUniqueInputObjectZodSchema = __makeSchema_ProjectWhereUniqueInput_schema();


// File: ProjectOrderByWithAggregationInput.schema.ts
const __makeSchema_ProjectOrderByWithAggregationInput_schema = () => z.object({
  slug: SortOrderSchema.optional(),
  position: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  weeks: SortOrderSchema.optional(),
  link: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  image: SortOrderSchema.optional(),
  video: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  coverEffect: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  description: SortOrderSchema.optional(),
  metaDescription: SortOrderSchema.optional(),
  challenge: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  services: SortOrderSchema.optional(),
  techStack: SortOrderSchema.optional(),
  date: SortOrderSchema.optional(),
  gallery: SortOrderSchema.optional(),
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
  slug: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  position: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  name: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  weeks: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  link: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  image: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  video: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  coverEffect: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  description: z.lazy(() => JsonWithAggregatesFilterObjectSchema).optional(),
  metaDescription: z.lazy(() => JsonWithAggregatesFilterObjectSchema).optional(),
  challenge: z.lazy(() => JsonNullableWithAggregatesFilterObjectSchema).optional(),
  services: z.lazy(() => StringNullableListFilterObjectSchema).optional(),
  techStack: z.lazy(() => StringNullableListFilterObjectSchema).optional(),
  date: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  gallery: z.lazy(() => StringNullableListFilterObjectSchema).optional(),
  notes: z.lazy(() => JsonNullableListFilterObjectSchema).optional(),
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


// File: SiteVisitorWhereInput.schema.ts

const sitevisitorwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => SiteVisitorWhereInputObjectSchema), z.lazy(() => SiteVisitorWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => SiteVisitorWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => SiteVisitorWhereInputObjectSchema), z.lazy(() => SiteVisitorWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  visitorKey: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  firstSeenAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  lastSeenAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  dailyVisits: z.lazy(() => SiteDailyVisitorListRelationFilterObjectSchema).optional()
}).strict();
export const SiteVisitorWhereInputObjectSchema: z.ZodType<Prisma.SiteVisitorWhereInput> = sitevisitorwhereinputSchema as unknown as z.ZodType<Prisma.SiteVisitorWhereInput>;
export const SiteVisitorWhereInputObjectZodSchema = sitevisitorwhereinputSchema;


// File: SiteVisitorOrderByWithRelationInput.schema.ts
const __makeSchema_SiteVisitorOrderByWithRelationInput_schema = () => z.object({
  id: SortOrderSchema.optional(),
  visitorKey: SortOrderSchema.optional(),
  firstSeenAt: SortOrderSchema.optional(),
  lastSeenAt: SortOrderSchema.optional(),
  dailyVisits: z.lazy(() => SiteDailyVisitorOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const SiteVisitorOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.SiteVisitorOrderByWithRelationInput> = __makeSchema_SiteVisitorOrderByWithRelationInput_schema() as unknown as z.ZodType<Prisma.SiteVisitorOrderByWithRelationInput>;
export const SiteVisitorOrderByWithRelationInputObjectZodSchema = __makeSchema_SiteVisitorOrderByWithRelationInput_schema();


// File: SiteVisitorWhereUniqueInput.schema.ts
const __makeSchema_SiteVisitorWhereUniqueInput_schema = () => z.object({
  id: z.string().optional(),
  visitorKey: z.string().optional()
}).strict();
export const SiteVisitorWhereUniqueInputObjectSchema: z.ZodType<Prisma.SiteVisitorWhereUniqueInput> = __makeSchema_SiteVisitorWhereUniqueInput_schema() as unknown as z.ZodType<Prisma.SiteVisitorWhereUniqueInput>;
export const SiteVisitorWhereUniqueInputObjectZodSchema = __makeSchema_SiteVisitorWhereUniqueInput_schema();


// File: SiteVisitorOrderByWithAggregationInput.schema.ts
const __makeSchema_SiteVisitorOrderByWithAggregationInput_schema = () => z.object({
  id: SortOrderSchema.optional(),
  visitorKey: SortOrderSchema.optional(),
  firstSeenAt: SortOrderSchema.optional(),
  lastSeenAt: SortOrderSchema.optional(),
  _count: z.lazy(() => SiteVisitorCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => SiteVisitorMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => SiteVisitorMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const SiteVisitorOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.SiteVisitorOrderByWithAggregationInput> = __makeSchema_SiteVisitorOrderByWithAggregationInput_schema() as unknown as z.ZodType<Prisma.SiteVisitorOrderByWithAggregationInput>;
export const SiteVisitorOrderByWithAggregationInputObjectZodSchema = __makeSchema_SiteVisitorOrderByWithAggregationInput_schema();


// File: SiteVisitorScalarWhereWithAggregatesInput.schema.ts

const sitevisitorscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => SiteVisitorScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => SiteVisitorScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => SiteVisitorScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => SiteVisitorScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => SiteVisitorScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  visitorKey: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  firstSeenAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  lastSeenAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const SiteVisitorScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.SiteVisitorScalarWhereWithAggregatesInput> = sitevisitorscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.SiteVisitorScalarWhereWithAggregatesInput>;
export const SiteVisitorScalarWhereWithAggregatesInputObjectZodSchema = sitevisitorscalarwherewithaggregatesinputSchema;


// File: SiteDailyStatWhereInput.schema.ts

const sitedailystatwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => SiteDailyStatWhereInputObjectSchema), z.lazy(() => SiteDailyStatWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => SiteDailyStatWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => SiteDailyStatWhereInputObjectSchema), z.lazy(() => SiteDailyStatWhereInputObjectSchema).array()]).optional(),
  date: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  visits: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  uniqueVisitors: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  visitors: z.lazy(() => SiteDailyVisitorListRelationFilterObjectSchema).optional()
}).strict();
export const SiteDailyStatWhereInputObjectSchema: z.ZodType<Prisma.SiteDailyStatWhereInput> = sitedailystatwhereinputSchema as unknown as z.ZodType<Prisma.SiteDailyStatWhereInput>;
export const SiteDailyStatWhereInputObjectZodSchema = sitedailystatwhereinputSchema;


// File: SiteDailyStatOrderByWithRelationInput.schema.ts
const __makeSchema_SiteDailyStatOrderByWithRelationInput_schema = () => z.object({
  date: SortOrderSchema.optional(),
  visits: SortOrderSchema.optional(),
  uniqueVisitors: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  visitors: z.lazy(() => SiteDailyVisitorOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const SiteDailyStatOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.SiteDailyStatOrderByWithRelationInput> = __makeSchema_SiteDailyStatOrderByWithRelationInput_schema() as unknown as z.ZodType<Prisma.SiteDailyStatOrderByWithRelationInput>;
export const SiteDailyStatOrderByWithRelationInputObjectZodSchema = __makeSchema_SiteDailyStatOrderByWithRelationInput_schema();


// File: SiteDailyStatWhereUniqueInput.schema.ts
const __makeSchema_SiteDailyStatWhereUniqueInput_schema = () => z.object({
  date: z.coerce.date().optional()
}).strict();
export const SiteDailyStatWhereUniqueInputObjectSchema: z.ZodType<Prisma.SiteDailyStatWhereUniqueInput> = __makeSchema_SiteDailyStatWhereUniqueInput_schema() as unknown as z.ZodType<Prisma.SiteDailyStatWhereUniqueInput>;
export const SiteDailyStatWhereUniqueInputObjectZodSchema = __makeSchema_SiteDailyStatWhereUniqueInput_schema();


// File: SiteDailyStatOrderByWithAggregationInput.schema.ts
const __makeSchema_SiteDailyStatOrderByWithAggregationInput_schema = () => z.object({
  date: SortOrderSchema.optional(),
  visits: SortOrderSchema.optional(),
  uniqueVisitors: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  _count: z.lazy(() => SiteDailyStatCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => SiteDailyStatAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => SiteDailyStatMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => SiteDailyStatMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => SiteDailyStatSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const SiteDailyStatOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.SiteDailyStatOrderByWithAggregationInput> = __makeSchema_SiteDailyStatOrderByWithAggregationInput_schema() as unknown as z.ZodType<Prisma.SiteDailyStatOrderByWithAggregationInput>;
export const SiteDailyStatOrderByWithAggregationInputObjectZodSchema = __makeSchema_SiteDailyStatOrderByWithAggregationInput_schema();


// File: SiteDailyStatScalarWhereWithAggregatesInput.schema.ts

const sitedailystatscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => SiteDailyStatScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => SiteDailyStatScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => SiteDailyStatScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => SiteDailyStatScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => SiteDailyStatScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  date: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  visits: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  uniqueVisitors: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const SiteDailyStatScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.SiteDailyStatScalarWhereWithAggregatesInput> = sitedailystatscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.SiteDailyStatScalarWhereWithAggregatesInput>;
export const SiteDailyStatScalarWhereWithAggregatesInputObjectZodSchema = sitedailystatscalarwherewithaggregatesinputSchema;


// File: SiteDailyVisitorWhereInput.schema.ts

const sitedailyvisitorwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => SiteDailyVisitorWhereInputObjectSchema), z.lazy(() => SiteDailyVisitorWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => SiteDailyVisitorWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => SiteDailyVisitorWhereInputObjectSchema), z.lazy(() => SiteDailyVisitorWhereInputObjectSchema).array()]).optional(),
  date: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  visitorId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  firstVisitAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  day: z.union([z.lazy(() => SiteDailyStatScalarRelationFilterObjectSchema), z.lazy(() => SiteDailyStatWhereInputObjectSchema)]).optional(),
  visitor: z.union([z.lazy(() => SiteVisitorScalarRelationFilterObjectSchema), z.lazy(() => SiteVisitorWhereInputObjectSchema)]).optional()
}).strict();
export const SiteDailyVisitorWhereInputObjectSchema: z.ZodType<Prisma.SiteDailyVisitorWhereInput> = sitedailyvisitorwhereinputSchema as unknown as z.ZodType<Prisma.SiteDailyVisitorWhereInput>;
export const SiteDailyVisitorWhereInputObjectZodSchema = sitedailyvisitorwhereinputSchema;


// File: SiteDailyVisitorOrderByWithRelationInput.schema.ts
const __makeSchema_SiteDailyVisitorOrderByWithRelationInput_schema = () => z.object({
  date: SortOrderSchema.optional(),
  visitorId: SortOrderSchema.optional(),
  firstVisitAt: SortOrderSchema.optional(),
  day: z.lazy(() => SiteDailyStatOrderByWithRelationInputObjectSchema).optional(),
  visitor: z.lazy(() => SiteVisitorOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const SiteDailyVisitorOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.SiteDailyVisitorOrderByWithRelationInput> = __makeSchema_SiteDailyVisitorOrderByWithRelationInput_schema() as unknown as z.ZodType<Prisma.SiteDailyVisitorOrderByWithRelationInput>;
export const SiteDailyVisitorOrderByWithRelationInputObjectZodSchema = __makeSchema_SiteDailyVisitorOrderByWithRelationInput_schema();


// File: SiteDailyVisitorWhereUniqueInput.schema.ts
const __makeSchema_SiteDailyVisitorWhereUniqueInput_schema = () => z.object({
  date_visitorId: z.lazy(() => SiteDailyVisitorDateVisitorIdCompoundUniqueInputObjectSchema).optional()
}).strict();
export const SiteDailyVisitorWhereUniqueInputObjectSchema: z.ZodType<Prisma.SiteDailyVisitorWhereUniqueInput> = __makeSchema_SiteDailyVisitorWhereUniqueInput_schema() as unknown as z.ZodType<Prisma.SiteDailyVisitorWhereUniqueInput>;
export const SiteDailyVisitorWhereUniqueInputObjectZodSchema = __makeSchema_SiteDailyVisitorWhereUniqueInput_schema();


// File: SiteDailyVisitorOrderByWithAggregationInput.schema.ts
const __makeSchema_SiteDailyVisitorOrderByWithAggregationInput_schema = () => z.object({
  date: SortOrderSchema.optional(),
  visitorId: SortOrderSchema.optional(),
  firstVisitAt: SortOrderSchema.optional(),
  _count: z.lazy(() => SiteDailyVisitorCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => SiteDailyVisitorMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => SiteDailyVisitorMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const SiteDailyVisitorOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.SiteDailyVisitorOrderByWithAggregationInput> = __makeSchema_SiteDailyVisitorOrderByWithAggregationInput_schema() as unknown as z.ZodType<Prisma.SiteDailyVisitorOrderByWithAggregationInput>;
export const SiteDailyVisitorOrderByWithAggregationInputObjectZodSchema = __makeSchema_SiteDailyVisitorOrderByWithAggregationInput_schema();


// File: SiteDailyVisitorScalarWhereWithAggregatesInput.schema.ts

const sitedailyvisitorscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => SiteDailyVisitorScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => SiteDailyVisitorScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => SiteDailyVisitorScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => SiteDailyVisitorScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => SiteDailyVisitorScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  date: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  visitorId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  firstVisitAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const SiteDailyVisitorScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.SiteDailyVisitorScalarWhereWithAggregatesInput> = sitedailyvisitorscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.SiteDailyVisitorScalarWhereWithAggregatesInput>;
export const SiteDailyVisitorScalarWhereWithAggregatesInputObjectZodSchema = sitedailyvisitorscalarwherewithaggregatesinputSchema;


// File: StoryBlockWhereInput.schema.ts

const storyblockwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => StoryBlockWhereInputObjectSchema), z.lazy(() => StoryBlockWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => StoryBlockWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => StoryBlockWhereInputObjectSchema), z.lazy(() => StoryBlockWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  sectionId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  position: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  type: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  media: z.lazy(() => JsonNullableFilterObjectSchema).optional(),
  eyebrow: z.lazy(() => JsonNullableFilterObjectSchema).optional(),
  title: z.lazy(() => JsonNullableFilterObjectSchema).optional(),
  text: z.lazy(() => JsonNullableFilterObjectSchema).optional(),
  tags: z.lazy(() => JsonNullableFilterObjectSchema).optional(),
  logos: z.lazy(() => StringNullableListFilterObjectSchema).optional(),
  tiles: z.lazy(() => JsonNullableFilterObjectSchema).optional(),
  link: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  linkLabel: z.lazy(() => JsonNullableFilterObjectSchema).optional(),
  effect: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  smalls: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  cols: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  font: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  fontFamily: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  description: z.lazy(() => JsonNullableFilterObjectSchema).optional(),
  secondFont: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  secondFontFamily: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  secondDescription: z.lazy(() => JsonNullableFilterObjectSchema).optional(),
  swatches: z.lazy(() => JsonNullableFilterObjectSchema).optional(),
  section: z.union([z.lazy(() => StorySectionScalarRelationFilterObjectSchema), z.lazy(() => StorySectionWhereInputObjectSchema)]).optional()
}).strict();
export const StoryBlockWhereInputObjectSchema: z.ZodType<Prisma.StoryBlockWhereInput> = storyblockwhereinputSchema as unknown as z.ZodType<Prisma.StoryBlockWhereInput>;
export const StoryBlockWhereInputObjectZodSchema = storyblockwhereinputSchema;


// File: StoryBlockOrderByWithRelationInput.schema.ts
const __makeSchema_StoryBlockOrderByWithRelationInput_schema = () => z.object({
  id: SortOrderSchema.optional(),
  sectionId: SortOrderSchema.optional(),
  position: SortOrderSchema.optional(),
  type: SortOrderSchema.optional(),
  media: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  eyebrow: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  title: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  text: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  tags: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  logos: SortOrderSchema.optional(),
  tiles: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  link: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  linkLabel: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  effect: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  smalls: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  cols: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  font: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  fontFamily: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  description: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  secondFont: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  secondFontFamily: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  secondDescription: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  swatches: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  section: z.lazy(() => StorySectionOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const StoryBlockOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.StoryBlockOrderByWithRelationInput> = __makeSchema_StoryBlockOrderByWithRelationInput_schema() as unknown as z.ZodType<Prisma.StoryBlockOrderByWithRelationInput>;
export const StoryBlockOrderByWithRelationInputObjectZodSchema = __makeSchema_StoryBlockOrderByWithRelationInput_schema();


// File: StoryBlockWhereUniqueInput.schema.ts
const __makeSchema_StoryBlockWhereUniqueInput_schema = () => z.object({
  id: z.string().optional(),
  sectionId_position: z.lazy(() => StoryBlockSectionIdPositionCompoundUniqueInputObjectSchema).optional()
}).strict();
export const StoryBlockWhereUniqueInputObjectSchema: z.ZodType<Prisma.StoryBlockWhereUniqueInput> = __makeSchema_StoryBlockWhereUniqueInput_schema() as unknown as z.ZodType<Prisma.StoryBlockWhereUniqueInput>;
export const StoryBlockWhereUniqueInputObjectZodSchema = __makeSchema_StoryBlockWhereUniqueInput_schema();


// File: StoryBlockOrderByWithAggregationInput.schema.ts
const __makeSchema_StoryBlockOrderByWithAggregationInput_schema = () => z.object({
  id: SortOrderSchema.optional(),
  sectionId: SortOrderSchema.optional(),
  position: SortOrderSchema.optional(),
  type: SortOrderSchema.optional(),
  media: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  eyebrow: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  title: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  text: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  tags: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  logos: SortOrderSchema.optional(),
  tiles: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  link: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  linkLabel: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  effect: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  smalls: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  cols: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  font: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  fontFamily: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  description: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  secondFont: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  secondFontFamily: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  secondDescription: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  swatches: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  _count: z.lazy(() => StoryBlockCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => StoryBlockAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => StoryBlockMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => StoryBlockMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => StoryBlockSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const StoryBlockOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.StoryBlockOrderByWithAggregationInput> = __makeSchema_StoryBlockOrderByWithAggregationInput_schema() as unknown as z.ZodType<Prisma.StoryBlockOrderByWithAggregationInput>;
export const StoryBlockOrderByWithAggregationInputObjectZodSchema = __makeSchema_StoryBlockOrderByWithAggregationInput_schema();


// File: StoryBlockScalarWhereWithAggregatesInput.schema.ts

const storyblockscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => StoryBlockScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => StoryBlockScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => StoryBlockScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => StoryBlockScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => StoryBlockScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  sectionId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  position: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  type: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  media: z.lazy(() => JsonNullableWithAggregatesFilterObjectSchema).optional(),
  eyebrow: z.lazy(() => JsonNullableWithAggregatesFilterObjectSchema).optional(),
  title: z.lazy(() => JsonNullableWithAggregatesFilterObjectSchema).optional(),
  text: z.lazy(() => JsonNullableWithAggregatesFilterObjectSchema).optional(),
  tags: z.lazy(() => JsonNullableWithAggregatesFilterObjectSchema).optional(),
  logos: z.lazy(() => StringNullableListFilterObjectSchema).optional(),
  tiles: z.lazy(() => JsonNullableWithAggregatesFilterObjectSchema).optional(),
  link: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  linkLabel: z.lazy(() => JsonNullableWithAggregatesFilterObjectSchema).optional(),
  effect: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  smalls: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  cols: z.union([z.lazy(() => IntNullableWithAggregatesFilterObjectSchema), z.number().int()]).optional().nullable(),
  font: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  fontFamily: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  description: z.lazy(() => JsonNullableWithAggregatesFilterObjectSchema).optional(),
  secondFont: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  secondFontFamily: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  secondDescription: z.lazy(() => JsonNullableWithAggregatesFilterObjectSchema).optional(),
  swatches: z.lazy(() => JsonNullableWithAggregatesFilterObjectSchema).optional()
}).strict();
export const StoryBlockScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.StoryBlockScalarWhereWithAggregatesInput> = storyblockscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.StoryBlockScalarWhereWithAggregatesInput>;
export const StoryBlockScalarWhereWithAggregatesInputObjectZodSchema = storyblockscalarwherewithaggregatesinputSchema;


// File: StorySectionWhereInput.schema.ts

const storysectionwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => StorySectionWhereInputObjectSchema), z.lazy(() => StorySectionWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => StorySectionWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => StorySectionWhereInputObjectSchema), z.lazy(() => StorySectionWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  projectSlug: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  position: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  title: z.lazy(() => JsonNullableFilterObjectSchema).optional(),
  by: z.lazy(() => StringNullableListFilterObjectSchema).optional(),
  layout: z.lazy(() => JsonNullableFilterObjectSchema).optional(),
  project: z.union([z.lazy(() => ProjectScalarRelationFilterObjectSchema), z.lazy(() => ProjectWhereInputObjectSchema)]).optional(),
  blocks: z.lazy(() => StoryBlockListRelationFilterObjectSchema).optional()
}).strict();
export const StorySectionWhereInputObjectSchema: z.ZodType<Prisma.StorySectionWhereInput> = storysectionwhereinputSchema as unknown as z.ZodType<Prisma.StorySectionWhereInput>;
export const StorySectionWhereInputObjectZodSchema = storysectionwhereinputSchema;


// File: StorySectionOrderByWithRelationInput.schema.ts
const __makeSchema_StorySectionOrderByWithRelationInput_schema = () => z.object({
  id: SortOrderSchema.optional(),
  projectSlug: SortOrderSchema.optional(),
  position: SortOrderSchema.optional(),
  title: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  by: SortOrderSchema.optional(),
  layout: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  project: z.lazy(() => ProjectOrderByWithRelationInputObjectSchema).optional(),
  blocks: z.lazy(() => StoryBlockOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const StorySectionOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.StorySectionOrderByWithRelationInput> = __makeSchema_StorySectionOrderByWithRelationInput_schema() as unknown as z.ZodType<Prisma.StorySectionOrderByWithRelationInput>;
export const StorySectionOrderByWithRelationInputObjectZodSchema = __makeSchema_StorySectionOrderByWithRelationInput_schema();


// File: StorySectionWhereUniqueInput.schema.ts
const __makeSchema_StorySectionWhereUniqueInput_schema = () => z.object({
  id: z.string().optional(),
  projectSlug_position: z.lazy(() => StorySectionProjectSlugPositionCompoundUniqueInputObjectSchema).optional()
}).strict();
export const StorySectionWhereUniqueInputObjectSchema: z.ZodType<Prisma.StorySectionWhereUniqueInput> = __makeSchema_StorySectionWhereUniqueInput_schema() as unknown as z.ZodType<Prisma.StorySectionWhereUniqueInput>;
export const StorySectionWhereUniqueInputObjectZodSchema = __makeSchema_StorySectionWhereUniqueInput_schema();


// File: StorySectionOrderByWithAggregationInput.schema.ts
const __makeSchema_StorySectionOrderByWithAggregationInput_schema = () => z.object({
  id: SortOrderSchema.optional(),
  projectSlug: SortOrderSchema.optional(),
  position: SortOrderSchema.optional(),
  title: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  by: SortOrderSchema.optional(),
  layout: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  _count: z.lazy(() => StorySectionCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => StorySectionAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => StorySectionMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => StorySectionMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => StorySectionSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const StorySectionOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.StorySectionOrderByWithAggregationInput> = __makeSchema_StorySectionOrderByWithAggregationInput_schema() as unknown as z.ZodType<Prisma.StorySectionOrderByWithAggregationInput>;
export const StorySectionOrderByWithAggregationInputObjectZodSchema = __makeSchema_StorySectionOrderByWithAggregationInput_schema();


// File: StorySectionScalarWhereWithAggregatesInput.schema.ts

const storysectionscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => StorySectionScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => StorySectionScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => StorySectionScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => StorySectionScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => StorySectionScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  projectSlug: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  position: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  title: z.lazy(() => JsonNullableWithAggregatesFilterObjectSchema).optional(),
  by: z.lazy(() => StringNullableListFilterObjectSchema).optional(),
  layout: z.lazy(() => JsonNullableWithAggregatesFilterObjectSchema).optional()
}).strict();
export const StorySectionScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.StorySectionScalarWhereWithAggregatesInput> = storysectionscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.StorySectionScalarWhereWithAggregatesInput>;
export const StorySectionScalarWhereWithAggregatesInputObjectZodSchema = storysectionscalarwherewithaggregatesinputSchema;


// File: StudioMemberWhereInput.schema.ts

const studiomemberwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => StudioMemberWhereInputObjectSchema), z.lazy(() => StudioMemberWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => StudioMemberWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => StudioMemberWhereInputObjectSchema), z.lazy(() => StudioMemberWhereInputObjectSchema).array()]).optional(),
  slug: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  position: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  role: z.lazy(() => JsonFilterObjectSchema).optional(),
  description: z.lazy(() => JsonFilterObjectSchema).optional(),
  bio: z.lazy(() => JsonFilterObjectSchema).optional(),
  model: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  scale: z.union([z.lazy(() => FloatFilterObjectSchema), z.number()]).optional(),
  roughness: z.union([z.lazy(() => FloatFilterObjectSchema), z.number()]).optional(),
  metalness: z.union([z.lazy(() => FloatFilterObjectSchema), z.number()]).optional(),
  hair: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  rotation: z.lazy(() => FloatNullableListFilterObjectSchema).optional(),
  highlight: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  socials: z.lazy(() => JsonFilterObjectSchema).optional(),
  labels: z.lazy(() => JsonFilterObjectSchema).optional(),
  projects: z.lazy(() => StringNullableListFilterObjectSchema).optional(),
  suite: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  facts: z.lazy(() => JsonFilterObjectSchema).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  teamOf: z.lazy(() => ProjectListRelationFilterObjectSchema).optional()
}).strict();
export const StudioMemberWhereInputObjectSchema: z.ZodType<Prisma.StudioMemberWhereInput> = studiomemberwhereinputSchema as unknown as z.ZodType<Prisma.StudioMemberWhereInput>;
export const StudioMemberWhereInputObjectZodSchema = studiomemberwhereinputSchema;


// File: StudioMemberOrderByWithRelationInput.schema.ts
const __makeSchema_StudioMemberOrderByWithRelationInput_schema = () => z.object({
  slug: SortOrderSchema.optional(),
  position: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  role: SortOrderSchema.optional(),
  description: SortOrderSchema.optional(),
  bio: SortOrderSchema.optional(),
  model: SortOrderSchema.optional(),
  scale: SortOrderSchema.optional(),
  roughness: SortOrderSchema.optional(),
  metalness: SortOrderSchema.optional(),
  hair: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  rotation: SortOrderSchema.optional(),
  highlight: SortOrderSchema.optional(),
  socials: SortOrderSchema.optional(),
  labels: SortOrderSchema.optional(),
  projects: SortOrderSchema.optional(),
  suite: SortOrderSchema.optional(),
  facts: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  teamOf: z.lazy(() => ProjectOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const StudioMemberOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.StudioMemberOrderByWithRelationInput> = __makeSchema_StudioMemberOrderByWithRelationInput_schema() as unknown as z.ZodType<Prisma.StudioMemberOrderByWithRelationInput>;
export const StudioMemberOrderByWithRelationInputObjectZodSchema = __makeSchema_StudioMemberOrderByWithRelationInput_schema();


// File: StudioMemberWhereUniqueInput.schema.ts
const __makeSchema_StudioMemberWhereUniqueInput_schema = () => z.object({
  slug: z.string().optional(),
  position: z.number().int().optional()
}).strict();
export const StudioMemberWhereUniqueInputObjectSchema: z.ZodType<Prisma.StudioMemberWhereUniqueInput> = __makeSchema_StudioMemberWhereUniqueInput_schema() as unknown as z.ZodType<Prisma.StudioMemberWhereUniqueInput>;
export const StudioMemberWhereUniqueInputObjectZodSchema = __makeSchema_StudioMemberWhereUniqueInput_schema();


// File: StudioMemberOrderByWithAggregationInput.schema.ts
const __makeSchema_StudioMemberOrderByWithAggregationInput_schema = () => z.object({
  slug: SortOrderSchema.optional(),
  position: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  role: SortOrderSchema.optional(),
  description: SortOrderSchema.optional(),
  bio: SortOrderSchema.optional(),
  model: SortOrderSchema.optional(),
  scale: SortOrderSchema.optional(),
  roughness: SortOrderSchema.optional(),
  metalness: SortOrderSchema.optional(),
  hair: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  rotation: SortOrderSchema.optional(),
  highlight: SortOrderSchema.optional(),
  socials: SortOrderSchema.optional(),
  labels: SortOrderSchema.optional(),
  projects: SortOrderSchema.optional(),
  suite: SortOrderSchema.optional(),
  facts: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  _count: z.lazy(() => StudioMemberCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => StudioMemberAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => StudioMemberMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => StudioMemberMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => StudioMemberSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const StudioMemberOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.StudioMemberOrderByWithAggregationInput> = __makeSchema_StudioMemberOrderByWithAggregationInput_schema() as unknown as z.ZodType<Prisma.StudioMemberOrderByWithAggregationInput>;
export const StudioMemberOrderByWithAggregationInputObjectZodSchema = __makeSchema_StudioMemberOrderByWithAggregationInput_schema();


// File: StudioMemberScalarWhereWithAggregatesInput.schema.ts

const studiomemberscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => StudioMemberScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => StudioMemberScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => StudioMemberScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => StudioMemberScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => StudioMemberScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  slug: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  position: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  name: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  role: z.lazy(() => JsonWithAggregatesFilterObjectSchema).optional(),
  description: z.lazy(() => JsonWithAggregatesFilterObjectSchema).optional(),
  bio: z.lazy(() => JsonWithAggregatesFilterObjectSchema).optional(),
  model: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  scale: z.union([z.lazy(() => FloatWithAggregatesFilterObjectSchema), z.number()]).optional(),
  roughness: z.union([z.lazy(() => FloatWithAggregatesFilterObjectSchema), z.number()]).optional(),
  metalness: z.union([z.lazy(() => FloatWithAggregatesFilterObjectSchema), z.number()]).optional(),
  hair: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  rotation: z.lazy(() => FloatNullableListFilterObjectSchema).optional(),
  highlight: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  socials: z.lazy(() => JsonWithAggregatesFilterObjectSchema).optional(),
  labels: z.lazy(() => JsonWithAggregatesFilterObjectSchema).optional(),
  projects: z.lazy(() => StringNullableListFilterObjectSchema).optional(),
  suite: z.union([z.lazy(() => BoolWithAggregatesFilterObjectSchema), z.boolean()]).optional(),
  facts: z.lazy(() => JsonWithAggregatesFilterObjectSchema).optional(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const StudioMemberScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.StudioMemberScalarWhereWithAggregatesInput> = studiomemberscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.StudioMemberScalarWhereWithAggregatesInput>;
export const StudioMemberScalarWhereWithAggregatesInputObjectZodSchema = studiomemberscalarwherewithaggregatesinputSchema;


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
  message: z.string(),
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
  message: z.string(),
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
  message: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
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
  message: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
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
  message: z.string(),
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
  message: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
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
  message: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
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
  position: z.number().int(),
  name: z.string(),
  weeks: z.number().int(),
  link: z.string().optional().nullable(),
  image: z.string(),
  video: z.string().optional().nullable(),
  coverEffect: z.string().optional().nullable(),
  description: z.union([JsonNullValueInputSchema, jsonSchema]),
  metaDescription: z.union([JsonNullValueInputSchema, jsonSchema]),
  challenge: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  services: z.union([z.lazy(() => ProjectCreateservicesInputObjectSchema), z.string().array()]).optional(),
  techStack: z.union([z.lazy(() => ProjectCreatetechStackInputObjectSchema), z.string().array()]).optional(),
  date: z.string(),
  gallery: z.union([z.lazy(() => ProjectCreategalleryInputObjectSchema), z.string().array()]).optional(),
  notes: z.union([z.lazy(() => ProjectCreatenotesInputObjectSchema), jsonSchema.array()]).optional(),
  createdAt: z.coerce.date().optional(),
  team: z.lazy(() => StudioMemberCreateNestedManyWithoutTeamOfInputObjectSchema).optional(),
  story: z.lazy(() => StorySectionCreateNestedManyWithoutProjectInputObjectSchema).optional()
}).strict();
export const ProjectCreateInputObjectSchema: z.ZodType<Prisma.ProjectCreateInput> = __makeSchema_ProjectCreateInput_schema() as unknown as z.ZodType<Prisma.ProjectCreateInput>;
export const ProjectCreateInputObjectZodSchema = __makeSchema_ProjectCreateInput_schema();


// File: ProjectUncheckedCreateInput.schema.ts
const __makeSchema_ProjectUncheckedCreateInput_schema = () => z.object({
  slug: z.string(),
  position: z.number().int(),
  name: z.string(),
  weeks: z.number().int(),
  link: z.string().optional().nullable(),
  image: z.string(),
  video: z.string().optional().nullable(),
  coverEffect: z.string().optional().nullable(),
  description: z.union([JsonNullValueInputSchema, jsonSchema]),
  metaDescription: z.union([JsonNullValueInputSchema, jsonSchema]),
  challenge: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  services: z.union([z.lazy(() => ProjectCreateservicesInputObjectSchema), z.string().array()]).optional(),
  techStack: z.union([z.lazy(() => ProjectCreatetechStackInputObjectSchema), z.string().array()]).optional(),
  date: z.string(),
  gallery: z.union([z.lazy(() => ProjectCreategalleryInputObjectSchema), z.string().array()]).optional(),
  notes: z.union([z.lazy(() => ProjectCreatenotesInputObjectSchema), jsonSchema.array()]).optional(),
  createdAt: z.coerce.date().optional(),
  team: z.lazy(() => StudioMemberUncheckedCreateNestedManyWithoutTeamOfInputObjectSchema).optional(),
  story: z.lazy(() => StorySectionUncheckedCreateNestedManyWithoutProjectInputObjectSchema).optional()
}).strict();
export const ProjectUncheckedCreateInputObjectSchema: z.ZodType<Prisma.ProjectUncheckedCreateInput> = __makeSchema_ProjectUncheckedCreateInput_schema() as unknown as z.ZodType<Prisma.ProjectUncheckedCreateInput>;
export const ProjectUncheckedCreateInputObjectZodSchema = __makeSchema_ProjectUncheckedCreateInput_schema();


// File: ProjectUpdateInput.schema.ts
const __makeSchema_ProjectUpdateInput_schema = () => z.object({
  slug: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  position: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  weeks: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  link: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  image: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  video: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  coverEffect: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  description: z.union([JsonNullValueInputSchema, jsonSchema]).optional(),
  metaDescription: z.union([JsonNullValueInputSchema, jsonSchema]).optional(),
  challenge: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  services: z.union([z.lazy(() => ProjectUpdateservicesInputObjectSchema), z.string().array()]).optional(),
  techStack: z.union([z.lazy(() => ProjectUpdatetechStackInputObjectSchema), z.string().array()]).optional(),
  date: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  gallery: z.union([z.lazy(() => ProjectUpdategalleryInputObjectSchema), z.string().array()]).optional(),
  notes: z.union([z.lazy(() => ProjectUpdatenotesInputObjectSchema), jsonSchema.array()]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  team: z.lazy(() => StudioMemberUpdateManyWithoutTeamOfNestedInputObjectSchema).optional(),
  story: z.lazy(() => StorySectionUpdateManyWithoutProjectNestedInputObjectSchema).optional()
}).strict();
export const ProjectUpdateInputObjectSchema: z.ZodType<Prisma.ProjectUpdateInput> = __makeSchema_ProjectUpdateInput_schema() as unknown as z.ZodType<Prisma.ProjectUpdateInput>;
export const ProjectUpdateInputObjectZodSchema = __makeSchema_ProjectUpdateInput_schema();


// File: ProjectUncheckedUpdateInput.schema.ts
const __makeSchema_ProjectUncheckedUpdateInput_schema = () => z.object({
  slug: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  position: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  weeks: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  link: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  image: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  video: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  coverEffect: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  description: z.union([JsonNullValueInputSchema, jsonSchema]).optional(),
  metaDescription: z.union([JsonNullValueInputSchema, jsonSchema]).optional(),
  challenge: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  services: z.union([z.lazy(() => ProjectUpdateservicesInputObjectSchema), z.string().array()]).optional(),
  techStack: z.union([z.lazy(() => ProjectUpdatetechStackInputObjectSchema), z.string().array()]).optional(),
  date: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  gallery: z.union([z.lazy(() => ProjectUpdategalleryInputObjectSchema), z.string().array()]).optional(),
  notes: z.union([z.lazy(() => ProjectUpdatenotesInputObjectSchema), jsonSchema.array()]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  team: z.lazy(() => StudioMemberUncheckedUpdateManyWithoutTeamOfNestedInputObjectSchema).optional(),
  story: z.lazy(() => StorySectionUncheckedUpdateManyWithoutProjectNestedInputObjectSchema).optional()
}).strict();
export const ProjectUncheckedUpdateInputObjectSchema: z.ZodType<Prisma.ProjectUncheckedUpdateInput> = __makeSchema_ProjectUncheckedUpdateInput_schema() as unknown as z.ZodType<Prisma.ProjectUncheckedUpdateInput>;
export const ProjectUncheckedUpdateInputObjectZodSchema = __makeSchema_ProjectUncheckedUpdateInput_schema();


// File: ProjectCreateManyInput.schema.ts
const __makeSchema_ProjectCreateManyInput_schema = () => z.object({
  slug: z.string(),
  position: z.number().int(),
  name: z.string(),
  weeks: z.number().int(),
  link: z.string().optional().nullable(),
  image: z.string(),
  video: z.string().optional().nullable(),
  coverEffect: z.string().optional().nullable(),
  description: z.union([JsonNullValueInputSchema, jsonSchema]),
  metaDescription: z.union([JsonNullValueInputSchema, jsonSchema]),
  challenge: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  services: z.union([z.lazy(() => ProjectCreateservicesInputObjectSchema), z.string().array()]).optional(),
  techStack: z.union([z.lazy(() => ProjectCreatetechStackInputObjectSchema), z.string().array()]).optional(),
  date: z.string(),
  gallery: z.union([z.lazy(() => ProjectCreategalleryInputObjectSchema), z.string().array()]).optional(),
  notes: z.union([z.lazy(() => ProjectCreatenotesInputObjectSchema), jsonSchema.array()]).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const ProjectCreateManyInputObjectSchema: z.ZodType<Prisma.ProjectCreateManyInput> = __makeSchema_ProjectCreateManyInput_schema() as unknown as z.ZodType<Prisma.ProjectCreateManyInput>;
export const ProjectCreateManyInputObjectZodSchema = __makeSchema_ProjectCreateManyInput_schema();


// File: ProjectUpdateManyMutationInput.schema.ts
const __makeSchema_ProjectUpdateManyMutationInput_schema = () => z.object({
  slug: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  position: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  weeks: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  link: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  image: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  video: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  coverEffect: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  description: z.union([JsonNullValueInputSchema, jsonSchema]).optional(),
  metaDescription: z.union([JsonNullValueInputSchema, jsonSchema]).optional(),
  challenge: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  services: z.union([z.lazy(() => ProjectUpdateservicesInputObjectSchema), z.string().array()]).optional(),
  techStack: z.union([z.lazy(() => ProjectUpdatetechStackInputObjectSchema), z.string().array()]).optional(),
  date: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  gallery: z.union([z.lazy(() => ProjectUpdategalleryInputObjectSchema), z.string().array()]).optional(),
  notes: z.union([z.lazy(() => ProjectUpdatenotesInputObjectSchema), jsonSchema.array()]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const ProjectUpdateManyMutationInputObjectSchema: z.ZodType<Prisma.ProjectUpdateManyMutationInput> = __makeSchema_ProjectUpdateManyMutationInput_schema() as unknown as z.ZodType<Prisma.ProjectUpdateManyMutationInput>;
export const ProjectUpdateManyMutationInputObjectZodSchema = __makeSchema_ProjectUpdateManyMutationInput_schema();


// File: ProjectUncheckedUpdateManyInput.schema.ts
const __makeSchema_ProjectUncheckedUpdateManyInput_schema = () => z.object({
  slug: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  position: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  weeks: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  link: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  image: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  video: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  coverEffect: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  description: z.union([JsonNullValueInputSchema, jsonSchema]).optional(),
  metaDescription: z.union([JsonNullValueInputSchema, jsonSchema]).optional(),
  challenge: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  services: z.union([z.lazy(() => ProjectUpdateservicesInputObjectSchema), z.string().array()]).optional(),
  techStack: z.union([z.lazy(() => ProjectUpdatetechStackInputObjectSchema), z.string().array()]).optional(),
  date: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  gallery: z.union([z.lazy(() => ProjectUpdategalleryInputObjectSchema), z.string().array()]).optional(),
  notes: z.union([z.lazy(() => ProjectUpdatenotesInputObjectSchema), jsonSchema.array()]).optional(),
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


// File: SiteVisitorCreateInput.schema.ts
const __makeSchema_SiteVisitorCreateInput_schema = () => z.object({
  id: z.string().optional(),
  visitorKey: z.string(),
  firstSeenAt: z.coerce.date().optional(),
  lastSeenAt: z.coerce.date().optional(),
  dailyVisits: z.lazy(() => SiteDailyVisitorCreateNestedManyWithoutVisitorInputObjectSchema).optional()
}).strict();
export const SiteVisitorCreateInputObjectSchema: z.ZodType<Prisma.SiteVisitorCreateInput> = __makeSchema_SiteVisitorCreateInput_schema() as unknown as z.ZodType<Prisma.SiteVisitorCreateInput>;
export const SiteVisitorCreateInputObjectZodSchema = __makeSchema_SiteVisitorCreateInput_schema();


// File: SiteVisitorUncheckedCreateInput.schema.ts
const __makeSchema_SiteVisitorUncheckedCreateInput_schema = () => z.object({
  id: z.string().optional(),
  visitorKey: z.string(),
  firstSeenAt: z.coerce.date().optional(),
  lastSeenAt: z.coerce.date().optional(),
  dailyVisits: z.lazy(() => SiteDailyVisitorUncheckedCreateNestedManyWithoutVisitorInputObjectSchema).optional()
}).strict();
export const SiteVisitorUncheckedCreateInputObjectSchema: z.ZodType<Prisma.SiteVisitorUncheckedCreateInput> = __makeSchema_SiteVisitorUncheckedCreateInput_schema() as unknown as z.ZodType<Prisma.SiteVisitorUncheckedCreateInput>;
export const SiteVisitorUncheckedCreateInputObjectZodSchema = __makeSchema_SiteVisitorUncheckedCreateInput_schema();


// File: SiteVisitorUpdateInput.schema.ts
const __makeSchema_SiteVisitorUpdateInput_schema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  visitorKey: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  firstSeenAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  lastSeenAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  dailyVisits: z.lazy(() => SiteDailyVisitorUpdateManyWithoutVisitorNestedInputObjectSchema).optional()
}).strict();
export const SiteVisitorUpdateInputObjectSchema: z.ZodType<Prisma.SiteVisitorUpdateInput> = __makeSchema_SiteVisitorUpdateInput_schema() as unknown as z.ZodType<Prisma.SiteVisitorUpdateInput>;
export const SiteVisitorUpdateInputObjectZodSchema = __makeSchema_SiteVisitorUpdateInput_schema();


// File: SiteVisitorUncheckedUpdateInput.schema.ts
const __makeSchema_SiteVisitorUncheckedUpdateInput_schema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  visitorKey: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  firstSeenAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  lastSeenAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  dailyVisits: z.lazy(() => SiteDailyVisitorUncheckedUpdateManyWithoutVisitorNestedInputObjectSchema).optional()
}).strict();
export const SiteVisitorUncheckedUpdateInputObjectSchema: z.ZodType<Prisma.SiteVisitorUncheckedUpdateInput> = __makeSchema_SiteVisitorUncheckedUpdateInput_schema() as unknown as z.ZodType<Prisma.SiteVisitorUncheckedUpdateInput>;
export const SiteVisitorUncheckedUpdateInputObjectZodSchema = __makeSchema_SiteVisitorUncheckedUpdateInput_schema();


// File: SiteVisitorCreateManyInput.schema.ts
const __makeSchema_SiteVisitorCreateManyInput_schema = () => z.object({
  id: z.string().optional(),
  visitorKey: z.string(),
  firstSeenAt: z.coerce.date().optional(),
  lastSeenAt: z.coerce.date().optional()
}).strict();
export const SiteVisitorCreateManyInputObjectSchema: z.ZodType<Prisma.SiteVisitorCreateManyInput> = __makeSchema_SiteVisitorCreateManyInput_schema() as unknown as z.ZodType<Prisma.SiteVisitorCreateManyInput>;
export const SiteVisitorCreateManyInputObjectZodSchema = __makeSchema_SiteVisitorCreateManyInput_schema();


// File: SiteVisitorUpdateManyMutationInput.schema.ts
const __makeSchema_SiteVisitorUpdateManyMutationInput_schema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  visitorKey: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  firstSeenAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  lastSeenAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const SiteVisitorUpdateManyMutationInputObjectSchema: z.ZodType<Prisma.SiteVisitorUpdateManyMutationInput> = __makeSchema_SiteVisitorUpdateManyMutationInput_schema() as unknown as z.ZodType<Prisma.SiteVisitorUpdateManyMutationInput>;
export const SiteVisitorUpdateManyMutationInputObjectZodSchema = __makeSchema_SiteVisitorUpdateManyMutationInput_schema();


// File: SiteVisitorUncheckedUpdateManyInput.schema.ts
const __makeSchema_SiteVisitorUncheckedUpdateManyInput_schema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  visitorKey: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  firstSeenAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  lastSeenAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const SiteVisitorUncheckedUpdateManyInputObjectSchema: z.ZodType<Prisma.SiteVisitorUncheckedUpdateManyInput> = __makeSchema_SiteVisitorUncheckedUpdateManyInput_schema() as unknown as z.ZodType<Prisma.SiteVisitorUncheckedUpdateManyInput>;
export const SiteVisitorUncheckedUpdateManyInputObjectZodSchema = __makeSchema_SiteVisitorUncheckedUpdateManyInput_schema();


// File: SiteDailyStatCreateInput.schema.ts
const __makeSchema_SiteDailyStatCreateInput_schema = () => z.object({
  date: z.coerce.date(),
  visits: z.number().int().optional(),
  uniqueVisitors: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  visitors: z.lazy(() => SiteDailyVisitorCreateNestedManyWithoutDayInputObjectSchema).optional()
}).strict();
export const SiteDailyStatCreateInputObjectSchema: z.ZodType<Prisma.SiteDailyStatCreateInput> = __makeSchema_SiteDailyStatCreateInput_schema() as unknown as z.ZodType<Prisma.SiteDailyStatCreateInput>;
export const SiteDailyStatCreateInputObjectZodSchema = __makeSchema_SiteDailyStatCreateInput_schema();


// File: SiteDailyStatUncheckedCreateInput.schema.ts
const __makeSchema_SiteDailyStatUncheckedCreateInput_schema = () => z.object({
  date: z.coerce.date(),
  visits: z.number().int().optional(),
  uniqueVisitors: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  visitors: z.lazy(() => SiteDailyVisitorUncheckedCreateNestedManyWithoutDayInputObjectSchema).optional()
}).strict();
export const SiteDailyStatUncheckedCreateInputObjectSchema: z.ZodType<Prisma.SiteDailyStatUncheckedCreateInput> = __makeSchema_SiteDailyStatUncheckedCreateInput_schema() as unknown as z.ZodType<Prisma.SiteDailyStatUncheckedCreateInput>;
export const SiteDailyStatUncheckedCreateInputObjectZodSchema = __makeSchema_SiteDailyStatUncheckedCreateInput_schema();


// File: SiteDailyStatUpdateInput.schema.ts
const __makeSchema_SiteDailyStatUpdateInput_schema = () => z.object({
  date: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  visits: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  uniqueVisitors: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  visitors: z.lazy(() => SiteDailyVisitorUpdateManyWithoutDayNestedInputObjectSchema).optional()
}).strict();
export const SiteDailyStatUpdateInputObjectSchema: z.ZodType<Prisma.SiteDailyStatUpdateInput> = __makeSchema_SiteDailyStatUpdateInput_schema() as unknown as z.ZodType<Prisma.SiteDailyStatUpdateInput>;
export const SiteDailyStatUpdateInputObjectZodSchema = __makeSchema_SiteDailyStatUpdateInput_schema();


// File: SiteDailyStatUncheckedUpdateInput.schema.ts
const __makeSchema_SiteDailyStatUncheckedUpdateInput_schema = () => z.object({
  date: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  visits: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  uniqueVisitors: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  visitors: z.lazy(() => SiteDailyVisitorUncheckedUpdateManyWithoutDayNestedInputObjectSchema).optional()
}).strict();
export const SiteDailyStatUncheckedUpdateInputObjectSchema: z.ZodType<Prisma.SiteDailyStatUncheckedUpdateInput> = __makeSchema_SiteDailyStatUncheckedUpdateInput_schema() as unknown as z.ZodType<Prisma.SiteDailyStatUncheckedUpdateInput>;
export const SiteDailyStatUncheckedUpdateInputObjectZodSchema = __makeSchema_SiteDailyStatUncheckedUpdateInput_schema();


// File: SiteDailyStatCreateManyInput.schema.ts
const __makeSchema_SiteDailyStatCreateManyInput_schema = () => z.object({
  date: z.coerce.date(),
  visits: z.number().int().optional(),
  uniqueVisitors: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const SiteDailyStatCreateManyInputObjectSchema: z.ZodType<Prisma.SiteDailyStatCreateManyInput> = __makeSchema_SiteDailyStatCreateManyInput_schema() as unknown as z.ZodType<Prisma.SiteDailyStatCreateManyInput>;
export const SiteDailyStatCreateManyInputObjectZodSchema = __makeSchema_SiteDailyStatCreateManyInput_schema();


// File: SiteDailyStatUpdateManyMutationInput.schema.ts
const __makeSchema_SiteDailyStatUpdateManyMutationInput_schema = () => z.object({
  date: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  visits: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  uniqueVisitors: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const SiteDailyStatUpdateManyMutationInputObjectSchema: z.ZodType<Prisma.SiteDailyStatUpdateManyMutationInput> = __makeSchema_SiteDailyStatUpdateManyMutationInput_schema() as unknown as z.ZodType<Prisma.SiteDailyStatUpdateManyMutationInput>;
export const SiteDailyStatUpdateManyMutationInputObjectZodSchema = __makeSchema_SiteDailyStatUpdateManyMutationInput_schema();


// File: SiteDailyStatUncheckedUpdateManyInput.schema.ts
const __makeSchema_SiteDailyStatUncheckedUpdateManyInput_schema = () => z.object({
  date: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  visits: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  uniqueVisitors: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const SiteDailyStatUncheckedUpdateManyInputObjectSchema: z.ZodType<Prisma.SiteDailyStatUncheckedUpdateManyInput> = __makeSchema_SiteDailyStatUncheckedUpdateManyInput_schema() as unknown as z.ZodType<Prisma.SiteDailyStatUncheckedUpdateManyInput>;
export const SiteDailyStatUncheckedUpdateManyInputObjectZodSchema = __makeSchema_SiteDailyStatUncheckedUpdateManyInput_schema();


// File: SiteDailyVisitorCreateInput.schema.ts
const __makeSchema_SiteDailyVisitorCreateInput_schema = () => z.object({
  firstVisitAt: z.coerce.date().optional(),
  day: z.lazy(() => SiteDailyStatCreateNestedOneWithoutVisitorsInputObjectSchema),
  visitor: z.lazy(() => SiteVisitorCreateNestedOneWithoutDailyVisitsInputObjectSchema)
}).strict();
export const SiteDailyVisitorCreateInputObjectSchema: z.ZodType<Prisma.SiteDailyVisitorCreateInput> = __makeSchema_SiteDailyVisitorCreateInput_schema() as unknown as z.ZodType<Prisma.SiteDailyVisitorCreateInput>;
export const SiteDailyVisitorCreateInputObjectZodSchema = __makeSchema_SiteDailyVisitorCreateInput_schema();


// File: SiteDailyVisitorUncheckedCreateInput.schema.ts
const __makeSchema_SiteDailyVisitorUncheckedCreateInput_schema = () => z.object({
  date: z.coerce.date(),
  visitorId: z.string(),
  firstVisitAt: z.coerce.date().optional()
}).strict();
export const SiteDailyVisitorUncheckedCreateInputObjectSchema: z.ZodType<Prisma.SiteDailyVisitorUncheckedCreateInput> = __makeSchema_SiteDailyVisitorUncheckedCreateInput_schema() as unknown as z.ZodType<Prisma.SiteDailyVisitorUncheckedCreateInput>;
export const SiteDailyVisitorUncheckedCreateInputObjectZodSchema = __makeSchema_SiteDailyVisitorUncheckedCreateInput_schema();


// File: SiteDailyVisitorUpdateInput.schema.ts
const __makeSchema_SiteDailyVisitorUpdateInput_schema = () => z.object({
  firstVisitAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  day: z.lazy(() => SiteDailyStatUpdateOneRequiredWithoutVisitorsNestedInputObjectSchema).optional(),
  visitor: z.lazy(() => SiteVisitorUpdateOneRequiredWithoutDailyVisitsNestedInputObjectSchema).optional()
}).strict();
export const SiteDailyVisitorUpdateInputObjectSchema: z.ZodType<Prisma.SiteDailyVisitorUpdateInput> = __makeSchema_SiteDailyVisitorUpdateInput_schema() as unknown as z.ZodType<Prisma.SiteDailyVisitorUpdateInput>;
export const SiteDailyVisitorUpdateInputObjectZodSchema = __makeSchema_SiteDailyVisitorUpdateInput_schema();


// File: SiteDailyVisitorUncheckedUpdateInput.schema.ts
const __makeSchema_SiteDailyVisitorUncheckedUpdateInput_schema = () => z.object({
  date: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  visitorId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  firstVisitAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const SiteDailyVisitorUncheckedUpdateInputObjectSchema: z.ZodType<Prisma.SiteDailyVisitorUncheckedUpdateInput> = __makeSchema_SiteDailyVisitorUncheckedUpdateInput_schema() as unknown as z.ZodType<Prisma.SiteDailyVisitorUncheckedUpdateInput>;
export const SiteDailyVisitorUncheckedUpdateInputObjectZodSchema = __makeSchema_SiteDailyVisitorUncheckedUpdateInput_schema();


// File: SiteDailyVisitorCreateManyInput.schema.ts
const __makeSchema_SiteDailyVisitorCreateManyInput_schema = () => z.object({
  date: z.coerce.date(),
  visitorId: z.string(),
  firstVisitAt: z.coerce.date().optional()
}).strict();
export const SiteDailyVisitorCreateManyInputObjectSchema: z.ZodType<Prisma.SiteDailyVisitorCreateManyInput> = __makeSchema_SiteDailyVisitorCreateManyInput_schema() as unknown as z.ZodType<Prisma.SiteDailyVisitorCreateManyInput>;
export const SiteDailyVisitorCreateManyInputObjectZodSchema = __makeSchema_SiteDailyVisitorCreateManyInput_schema();


// File: SiteDailyVisitorUpdateManyMutationInput.schema.ts
const __makeSchema_SiteDailyVisitorUpdateManyMutationInput_schema = () => z.object({
  firstVisitAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const SiteDailyVisitorUpdateManyMutationInputObjectSchema: z.ZodType<Prisma.SiteDailyVisitorUpdateManyMutationInput> = __makeSchema_SiteDailyVisitorUpdateManyMutationInput_schema() as unknown as z.ZodType<Prisma.SiteDailyVisitorUpdateManyMutationInput>;
export const SiteDailyVisitorUpdateManyMutationInputObjectZodSchema = __makeSchema_SiteDailyVisitorUpdateManyMutationInput_schema();


// File: SiteDailyVisitorUncheckedUpdateManyInput.schema.ts
const __makeSchema_SiteDailyVisitorUncheckedUpdateManyInput_schema = () => z.object({
  date: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  visitorId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  firstVisitAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const SiteDailyVisitorUncheckedUpdateManyInputObjectSchema: z.ZodType<Prisma.SiteDailyVisitorUncheckedUpdateManyInput> = __makeSchema_SiteDailyVisitorUncheckedUpdateManyInput_schema() as unknown as z.ZodType<Prisma.SiteDailyVisitorUncheckedUpdateManyInput>;
export const SiteDailyVisitorUncheckedUpdateManyInputObjectZodSchema = __makeSchema_SiteDailyVisitorUncheckedUpdateManyInput_schema();


// File: StoryBlockCreateInput.schema.ts
const __makeSchema_StoryBlockCreateInput_schema = () => z.object({
  id: z.string().optional(),
  position: z.number().int(),
  type: z.string(),
  media: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  eyebrow: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  title: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  text: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  tags: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  logos: z.union([z.lazy(() => StoryBlockCreatelogosInputObjectSchema), z.string().array()]).optional(),
  tiles: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  link: z.string().optional().nullable(),
  linkLabel: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  effect: z.string().optional().nullable(),
  smalls: z.string().optional().nullable(),
  cols: z.number().int().optional().nullable(),
  font: z.string().optional().nullable(),
  fontFamily: z.string().optional().nullable(),
  description: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  secondFont: z.string().optional().nullable(),
  secondFontFamily: z.string().optional().nullable(),
  secondDescription: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  swatches: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  section: z.lazy(() => StorySectionCreateNestedOneWithoutBlocksInputObjectSchema)
}).strict();
export const StoryBlockCreateInputObjectSchema: z.ZodType<Prisma.StoryBlockCreateInput> = __makeSchema_StoryBlockCreateInput_schema() as unknown as z.ZodType<Prisma.StoryBlockCreateInput>;
export const StoryBlockCreateInputObjectZodSchema = __makeSchema_StoryBlockCreateInput_schema();


// File: StoryBlockUncheckedCreateInput.schema.ts
const __makeSchema_StoryBlockUncheckedCreateInput_schema = () => z.object({
  id: z.string().optional(),
  sectionId: z.string(),
  position: z.number().int(),
  type: z.string(),
  media: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  eyebrow: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  title: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  text: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  tags: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  logos: z.union([z.lazy(() => StoryBlockCreatelogosInputObjectSchema), z.string().array()]).optional(),
  tiles: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  link: z.string().optional().nullable(),
  linkLabel: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  effect: z.string().optional().nullable(),
  smalls: z.string().optional().nullable(),
  cols: z.number().int().optional().nullable(),
  font: z.string().optional().nullable(),
  fontFamily: z.string().optional().nullable(),
  description: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  secondFont: z.string().optional().nullable(),
  secondFontFamily: z.string().optional().nullable(),
  secondDescription: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  swatches: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional()
}).strict();
export const StoryBlockUncheckedCreateInputObjectSchema: z.ZodType<Prisma.StoryBlockUncheckedCreateInput> = __makeSchema_StoryBlockUncheckedCreateInput_schema() as unknown as z.ZodType<Prisma.StoryBlockUncheckedCreateInput>;
export const StoryBlockUncheckedCreateInputObjectZodSchema = __makeSchema_StoryBlockUncheckedCreateInput_schema();


// File: StoryBlockUpdateInput.schema.ts
const __makeSchema_StoryBlockUpdateInput_schema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  position: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  type: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  media: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  eyebrow: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  title: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  text: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  tags: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  logos: z.union([z.lazy(() => StoryBlockUpdatelogosInputObjectSchema), z.string().array()]).optional(),
  tiles: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  link: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  linkLabel: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  effect: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  smalls: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  cols: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  font: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  fontFamily: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  description: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  secondFont: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  secondFontFamily: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  secondDescription: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  swatches: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  section: z.lazy(() => StorySectionUpdateOneRequiredWithoutBlocksNestedInputObjectSchema).optional()
}).strict();
export const StoryBlockUpdateInputObjectSchema: z.ZodType<Prisma.StoryBlockUpdateInput> = __makeSchema_StoryBlockUpdateInput_schema() as unknown as z.ZodType<Prisma.StoryBlockUpdateInput>;
export const StoryBlockUpdateInputObjectZodSchema = __makeSchema_StoryBlockUpdateInput_schema();


// File: StoryBlockUncheckedUpdateInput.schema.ts
const __makeSchema_StoryBlockUncheckedUpdateInput_schema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  sectionId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  position: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  type: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  media: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  eyebrow: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  title: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  text: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  tags: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  logos: z.union([z.lazy(() => StoryBlockUpdatelogosInputObjectSchema), z.string().array()]).optional(),
  tiles: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  link: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  linkLabel: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  effect: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  smalls: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  cols: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  font: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  fontFamily: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  description: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  secondFont: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  secondFontFamily: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  secondDescription: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  swatches: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional()
}).strict();
export const StoryBlockUncheckedUpdateInputObjectSchema: z.ZodType<Prisma.StoryBlockUncheckedUpdateInput> = __makeSchema_StoryBlockUncheckedUpdateInput_schema() as unknown as z.ZodType<Prisma.StoryBlockUncheckedUpdateInput>;
export const StoryBlockUncheckedUpdateInputObjectZodSchema = __makeSchema_StoryBlockUncheckedUpdateInput_schema();


// File: StoryBlockCreateManyInput.schema.ts
const __makeSchema_StoryBlockCreateManyInput_schema = () => z.object({
  id: z.string().optional(),
  sectionId: z.string(),
  position: z.number().int(),
  type: z.string(),
  media: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  eyebrow: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  title: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  text: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  tags: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  logos: z.union([z.lazy(() => StoryBlockCreatelogosInputObjectSchema), z.string().array()]).optional(),
  tiles: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  link: z.string().optional().nullable(),
  linkLabel: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  effect: z.string().optional().nullable(),
  smalls: z.string().optional().nullable(),
  cols: z.number().int().optional().nullable(),
  font: z.string().optional().nullable(),
  fontFamily: z.string().optional().nullable(),
  description: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  secondFont: z.string().optional().nullable(),
  secondFontFamily: z.string().optional().nullable(),
  secondDescription: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  swatches: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional()
}).strict();
export const StoryBlockCreateManyInputObjectSchema: z.ZodType<Prisma.StoryBlockCreateManyInput> = __makeSchema_StoryBlockCreateManyInput_schema() as unknown as z.ZodType<Prisma.StoryBlockCreateManyInput>;
export const StoryBlockCreateManyInputObjectZodSchema = __makeSchema_StoryBlockCreateManyInput_schema();


// File: StoryBlockUpdateManyMutationInput.schema.ts
const __makeSchema_StoryBlockUpdateManyMutationInput_schema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  position: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  type: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  media: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  eyebrow: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  title: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  text: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  tags: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  logos: z.union([z.lazy(() => StoryBlockUpdatelogosInputObjectSchema), z.string().array()]).optional(),
  tiles: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  link: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  linkLabel: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  effect: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  smalls: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  cols: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  font: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  fontFamily: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  description: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  secondFont: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  secondFontFamily: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  secondDescription: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  swatches: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional()
}).strict();
export const StoryBlockUpdateManyMutationInputObjectSchema: z.ZodType<Prisma.StoryBlockUpdateManyMutationInput> = __makeSchema_StoryBlockUpdateManyMutationInput_schema() as unknown as z.ZodType<Prisma.StoryBlockUpdateManyMutationInput>;
export const StoryBlockUpdateManyMutationInputObjectZodSchema = __makeSchema_StoryBlockUpdateManyMutationInput_schema();


// File: StoryBlockUncheckedUpdateManyInput.schema.ts
const __makeSchema_StoryBlockUncheckedUpdateManyInput_schema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  sectionId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  position: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  type: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  media: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  eyebrow: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  title: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  text: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  tags: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  logos: z.union([z.lazy(() => StoryBlockUpdatelogosInputObjectSchema), z.string().array()]).optional(),
  tiles: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  link: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  linkLabel: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  effect: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  smalls: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  cols: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  font: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  fontFamily: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  description: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  secondFont: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  secondFontFamily: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  secondDescription: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  swatches: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional()
}).strict();
export const StoryBlockUncheckedUpdateManyInputObjectSchema: z.ZodType<Prisma.StoryBlockUncheckedUpdateManyInput> = __makeSchema_StoryBlockUncheckedUpdateManyInput_schema() as unknown as z.ZodType<Prisma.StoryBlockUncheckedUpdateManyInput>;
export const StoryBlockUncheckedUpdateManyInputObjectZodSchema = __makeSchema_StoryBlockUncheckedUpdateManyInput_schema();


// File: StorySectionCreateInput.schema.ts
const __makeSchema_StorySectionCreateInput_schema = () => z.object({
  id: z.string().optional(),
  position: z.number().int(),
  title: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  by: z.union([z.lazy(() => StorySectionCreatebyInputObjectSchema), z.string().array()]).optional(),
  layout: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  project: z.lazy(() => ProjectCreateNestedOneWithoutStoryInputObjectSchema),
  blocks: z.lazy(() => StoryBlockCreateNestedManyWithoutSectionInputObjectSchema).optional()
}).strict();
export const StorySectionCreateInputObjectSchema: z.ZodType<Prisma.StorySectionCreateInput> = __makeSchema_StorySectionCreateInput_schema() as unknown as z.ZodType<Prisma.StorySectionCreateInput>;
export const StorySectionCreateInputObjectZodSchema = __makeSchema_StorySectionCreateInput_schema();


// File: StorySectionUncheckedCreateInput.schema.ts
const __makeSchema_StorySectionUncheckedCreateInput_schema = () => z.object({
  id: z.string().optional(),
  projectSlug: z.string(),
  position: z.number().int(),
  title: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  by: z.union([z.lazy(() => StorySectionCreatebyInputObjectSchema), z.string().array()]).optional(),
  layout: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  blocks: z.lazy(() => StoryBlockUncheckedCreateNestedManyWithoutSectionInputObjectSchema).optional()
}).strict();
export const StorySectionUncheckedCreateInputObjectSchema: z.ZodType<Prisma.StorySectionUncheckedCreateInput> = __makeSchema_StorySectionUncheckedCreateInput_schema() as unknown as z.ZodType<Prisma.StorySectionUncheckedCreateInput>;
export const StorySectionUncheckedCreateInputObjectZodSchema = __makeSchema_StorySectionUncheckedCreateInput_schema();


// File: StorySectionUpdateInput.schema.ts
const __makeSchema_StorySectionUpdateInput_schema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  position: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  title: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  by: z.union([z.lazy(() => StorySectionUpdatebyInputObjectSchema), z.string().array()]).optional(),
  layout: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  project: z.lazy(() => ProjectUpdateOneRequiredWithoutStoryNestedInputObjectSchema).optional(),
  blocks: z.lazy(() => StoryBlockUpdateManyWithoutSectionNestedInputObjectSchema).optional()
}).strict();
export const StorySectionUpdateInputObjectSchema: z.ZodType<Prisma.StorySectionUpdateInput> = __makeSchema_StorySectionUpdateInput_schema() as unknown as z.ZodType<Prisma.StorySectionUpdateInput>;
export const StorySectionUpdateInputObjectZodSchema = __makeSchema_StorySectionUpdateInput_schema();


// File: StorySectionUncheckedUpdateInput.schema.ts
const __makeSchema_StorySectionUncheckedUpdateInput_schema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  projectSlug: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  position: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  title: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  by: z.union([z.lazy(() => StorySectionUpdatebyInputObjectSchema), z.string().array()]).optional(),
  layout: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  blocks: z.lazy(() => StoryBlockUncheckedUpdateManyWithoutSectionNestedInputObjectSchema).optional()
}).strict();
export const StorySectionUncheckedUpdateInputObjectSchema: z.ZodType<Prisma.StorySectionUncheckedUpdateInput> = __makeSchema_StorySectionUncheckedUpdateInput_schema() as unknown as z.ZodType<Prisma.StorySectionUncheckedUpdateInput>;
export const StorySectionUncheckedUpdateInputObjectZodSchema = __makeSchema_StorySectionUncheckedUpdateInput_schema();


// File: StorySectionCreateManyInput.schema.ts
const __makeSchema_StorySectionCreateManyInput_schema = () => z.object({
  id: z.string().optional(),
  projectSlug: z.string(),
  position: z.number().int(),
  title: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  by: z.union([z.lazy(() => StorySectionCreatebyInputObjectSchema), z.string().array()]).optional(),
  layout: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional()
}).strict();
export const StorySectionCreateManyInputObjectSchema: z.ZodType<Prisma.StorySectionCreateManyInput> = __makeSchema_StorySectionCreateManyInput_schema() as unknown as z.ZodType<Prisma.StorySectionCreateManyInput>;
export const StorySectionCreateManyInputObjectZodSchema = __makeSchema_StorySectionCreateManyInput_schema();


// File: StorySectionUpdateManyMutationInput.schema.ts
const __makeSchema_StorySectionUpdateManyMutationInput_schema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  position: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  title: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  by: z.union([z.lazy(() => StorySectionUpdatebyInputObjectSchema), z.string().array()]).optional(),
  layout: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional()
}).strict();
export const StorySectionUpdateManyMutationInputObjectSchema: z.ZodType<Prisma.StorySectionUpdateManyMutationInput> = __makeSchema_StorySectionUpdateManyMutationInput_schema() as unknown as z.ZodType<Prisma.StorySectionUpdateManyMutationInput>;
export const StorySectionUpdateManyMutationInputObjectZodSchema = __makeSchema_StorySectionUpdateManyMutationInput_schema();


// File: StorySectionUncheckedUpdateManyInput.schema.ts
const __makeSchema_StorySectionUncheckedUpdateManyInput_schema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  projectSlug: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  position: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  title: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  by: z.union([z.lazy(() => StorySectionUpdatebyInputObjectSchema), z.string().array()]).optional(),
  layout: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional()
}).strict();
export const StorySectionUncheckedUpdateManyInputObjectSchema: z.ZodType<Prisma.StorySectionUncheckedUpdateManyInput> = __makeSchema_StorySectionUncheckedUpdateManyInput_schema() as unknown as z.ZodType<Prisma.StorySectionUncheckedUpdateManyInput>;
export const StorySectionUncheckedUpdateManyInputObjectZodSchema = __makeSchema_StorySectionUncheckedUpdateManyInput_schema();


// File: StudioMemberCreateInput.schema.ts
const __makeSchema_StudioMemberCreateInput_schema = () => z.object({
  slug: z.string(),
  position: z.number().int(),
  name: z.string(),
  role: z.union([JsonNullValueInputSchema, jsonSchema]),
  description: z.union([JsonNullValueInputSchema, jsonSchema]),
  bio: z.union([JsonNullValueInputSchema, jsonSchema]),
  model: z.string(),
  scale: z.number(),
  roughness: z.number(),
  metalness: z.number(),
  hair: z.string().optional().nullable(),
  rotation: z.union([z.lazy(() => StudioMemberCreaterotationInputObjectSchema), z.number().array()]).optional(),
  highlight: z.string(),
  socials: z.union([JsonNullValueInputSchema, jsonSchema]),
  labels: z.union([JsonNullValueInputSchema, jsonSchema]),
  projects: z.union([z.lazy(() => StudioMemberCreateprojectsInputObjectSchema), z.string().array()]).optional(),
  suite: z.boolean().optional(),
  facts: z.union([JsonNullValueInputSchema, jsonSchema]),
  createdAt: z.coerce.date().optional(),
  teamOf: z.lazy(() => ProjectCreateNestedManyWithoutTeamInputObjectSchema).optional()
}).strict();
export const StudioMemberCreateInputObjectSchema: z.ZodType<Prisma.StudioMemberCreateInput> = __makeSchema_StudioMemberCreateInput_schema() as unknown as z.ZodType<Prisma.StudioMemberCreateInput>;
export const StudioMemberCreateInputObjectZodSchema = __makeSchema_StudioMemberCreateInput_schema();


// File: StudioMemberUncheckedCreateInput.schema.ts
const __makeSchema_StudioMemberUncheckedCreateInput_schema = () => z.object({
  slug: z.string(),
  position: z.number().int(),
  name: z.string(),
  role: z.union([JsonNullValueInputSchema, jsonSchema]),
  description: z.union([JsonNullValueInputSchema, jsonSchema]),
  bio: z.union([JsonNullValueInputSchema, jsonSchema]),
  model: z.string(),
  scale: z.number(),
  roughness: z.number(),
  metalness: z.number(),
  hair: z.string().optional().nullable(),
  rotation: z.union([z.lazy(() => StudioMemberCreaterotationInputObjectSchema), z.number().array()]).optional(),
  highlight: z.string(),
  socials: z.union([JsonNullValueInputSchema, jsonSchema]),
  labels: z.union([JsonNullValueInputSchema, jsonSchema]),
  projects: z.union([z.lazy(() => StudioMemberCreateprojectsInputObjectSchema), z.string().array()]).optional(),
  suite: z.boolean().optional(),
  facts: z.union([JsonNullValueInputSchema, jsonSchema]),
  createdAt: z.coerce.date().optional(),
  teamOf: z.lazy(() => ProjectUncheckedCreateNestedManyWithoutTeamInputObjectSchema).optional()
}).strict();
export const StudioMemberUncheckedCreateInputObjectSchema: z.ZodType<Prisma.StudioMemberUncheckedCreateInput> = __makeSchema_StudioMemberUncheckedCreateInput_schema() as unknown as z.ZodType<Prisma.StudioMemberUncheckedCreateInput>;
export const StudioMemberUncheckedCreateInputObjectZodSchema = __makeSchema_StudioMemberUncheckedCreateInput_schema();


// File: StudioMemberUpdateInput.schema.ts
const __makeSchema_StudioMemberUpdateInput_schema = () => z.object({
  slug: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  position: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  role: z.union([JsonNullValueInputSchema, jsonSchema]).optional(),
  description: z.union([JsonNullValueInputSchema, jsonSchema]).optional(),
  bio: z.union([JsonNullValueInputSchema, jsonSchema]).optional(),
  model: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  scale: z.union([z.number(), z.lazy(() => FloatFieldUpdateOperationsInputObjectSchema)]).optional(),
  roughness: z.union([z.number(), z.lazy(() => FloatFieldUpdateOperationsInputObjectSchema)]).optional(),
  metalness: z.union([z.number(), z.lazy(() => FloatFieldUpdateOperationsInputObjectSchema)]).optional(),
  hair: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  rotation: z.union([z.lazy(() => StudioMemberUpdaterotationInputObjectSchema), z.number().array()]).optional(),
  highlight: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  socials: z.union([JsonNullValueInputSchema, jsonSchema]).optional(),
  labels: z.union([JsonNullValueInputSchema, jsonSchema]).optional(),
  projects: z.union([z.lazy(() => StudioMemberUpdateprojectsInputObjectSchema), z.string().array()]).optional(),
  suite: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  facts: z.union([JsonNullValueInputSchema, jsonSchema]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  teamOf: z.lazy(() => ProjectUpdateManyWithoutTeamNestedInputObjectSchema).optional()
}).strict();
export const StudioMemberUpdateInputObjectSchema: z.ZodType<Prisma.StudioMemberUpdateInput> = __makeSchema_StudioMemberUpdateInput_schema() as unknown as z.ZodType<Prisma.StudioMemberUpdateInput>;
export const StudioMemberUpdateInputObjectZodSchema = __makeSchema_StudioMemberUpdateInput_schema();


// File: StudioMemberUncheckedUpdateInput.schema.ts
const __makeSchema_StudioMemberUncheckedUpdateInput_schema = () => z.object({
  slug: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  position: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  role: z.union([JsonNullValueInputSchema, jsonSchema]).optional(),
  description: z.union([JsonNullValueInputSchema, jsonSchema]).optional(),
  bio: z.union([JsonNullValueInputSchema, jsonSchema]).optional(),
  model: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  scale: z.union([z.number(), z.lazy(() => FloatFieldUpdateOperationsInputObjectSchema)]).optional(),
  roughness: z.union([z.number(), z.lazy(() => FloatFieldUpdateOperationsInputObjectSchema)]).optional(),
  metalness: z.union([z.number(), z.lazy(() => FloatFieldUpdateOperationsInputObjectSchema)]).optional(),
  hair: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  rotation: z.union([z.lazy(() => StudioMemberUpdaterotationInputObjectSchema), z.number().array()]).optional(),
  highlight: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  socials: z.union([JsonNullValueInputSchema, jsonSchema]).optional(),
  labels: z.union([JsonNullValueInputSchema, jsonSchema]).optional(),
  projects: z.union([z.lazy(() => StudioMemberUpdateprojectsInputObjectSchema), z.string().array()]).optional(),
  suite: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  facts: z.union([JsonNullValueInputSchema, jsonSchema]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  teamOf: z.lazy(() => ProjectUncheckedUpdateManyWithoutTeamNestedInputObjectSchema).optional()
}).strict();
export const StudioMemberUncheckedUpdateInputObjectSchema: z.ZodType<Prisma.StudioMemberUncheckedUpdateInput> = __makeSchema_StudioMemberUncheckedUpdateInput_schema() as unknown as z.ZodType<Prisma.StudioMemberUncheckedUpdateInput>;
export const StudioMemberUncheckedUpdateInputObjectZodSchema = __makeSchema_StudioMemberUncheckedUpdateInput_schema();


// File: StudioMemberCreateManyInput.schema.ts
const __makeSchema_StudioMemberCreateManyInput_schema = () => z.object({
  slug: z.string(),
  position: z.number().int(),
  name: z.string(),
  role: z.union([JsonNullValueInputSchema, jsonSchema]),
  description: z.union([JsonNullValueInputSchema, jsonSchema]),
  bio: z.union([JsonNullValueInputSchema, jsonSchema]),
  model: z.string(),
  scale: z.number(),
  roughness: z.number(),
  metalness: z.number(),
  hair: z.string().optional().nullable(),
  rotation: z.union([z.lazy(() => StudioMemberCreaterotationInputObjectSchema), z.number().array()]).optional(),
  highlight: z.string(),
  socials: z.union([JsonNullValueInputSchema, jsonSchema]),
  labels: z.union([JsonNullValueInputSchema, jsonSchema]),
  projects: z.union([z.lazy(() => StudioMemberCreateprojectsInputObjectSchema), z.string().array()]).optional(),
  suite: z.boolean().optional(),
  facts: z.union([JsonNullValueInputSchema, jsonSchema]),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const StudioMemberCreateManyInputObjectSchema: z.ZodType<Prisma.StudioMemberCreateManyInput> = __makeSchema_StudioMemberCreateManyInput_schema() as unknown as z.ZodType<Prisma.StudioMemberCreateManyInput>;
export const StudioMemberCreateManyInputObjectZodSchema = __makeSchema_StudioMemberCreateManyInput_schema();


// File: StudioMemberUpdateManyMutationInput.schema.ts
const __makeSchema_StudioMemberUpdateManyMutationInput_schema = () => z.object({
  slug: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  position: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  role: z.union([JsonNullValueInputSchema, jsonSchema]).optional(),
  description: z.union([JsonNullValueInputSchema, jsonSchema]).optional(),
  bio: z.union([JsonNullValueInputSchema, jsonSchema]).optional(),
  model: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  scale: z.union([z.number(), z.lazy(() => FloatFieldUpdateOperationsInputObjectSchema)]).optional(),
  roughness: z.union([z.number(), z.lazy(() => FloatFieldUpdateOperationsInputObjectSchema)]).optional(),
  metalness: z.union([z.number(), z.lazy(() => FloatFieldUpdateOperationsInputObjectSchema)]).optional(),
  hair: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  rotation: z.union([z.lazy(() => StudioMemberUpdaterotationInputObjectSchema), z.number().array()]).optional(),
  highlight: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  socials: z.union([JsonNullValueInputSchema, jsonSchema]).optional(),
  labels: z.union([JsonNullValueInputSchema, jsonSchema]).optional(),
  projects: z.union([z.lazy(() => StudioMemberUpdateprojectsInputObjectSchema), z.string().array()]).optional(),
  suite: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  facts: z.union([JsonNullValueInputSchema, jsonSchema]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const StudioMemberUpdateManyMutationInputObjectSchema: z.ZodType<Prisma.StudioMemberUpdateManyMutationInput> = __makeSchema_StudioMemberUpdateManyMutationInput_schema() as unknown as z.ZodType<Prisma.StudioMemberUpdateManyMutationInput>;
export const StudioMemberUpdateManyMutationInputObjectZodSchema = __makeSchema_StudioMemberUpdateManyMutationInput_schema();


// File: StudioMemberUncheckedUpdateManyInput.schema.ts
const __makeSchema_StudioMemberUncheckedUpdateManyInput_schema = () => z.object({
  slug: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  position: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  role: z.union([JsonNullValueInputSchema, jsonSchema]).optional(),
  description: z.union([JsonNullValueInputSchema, jsonSchema]).optional(),
  bio: z.union([JsonNullValueInputSchema, jsonSchema]).optional(),
  model: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  scale: z.union([z.number(), z.lazy(() => FloatFieldUpdateOperationsInputObjectSchema)]).optional(),
  roughness: z.union([z.number(), z.lazy(() => FloatFieldUpdateOperationsInputObjectSchema)]).optional(),
  metalness: z.union([z.number(), z.lazy(() => FloatFieldUpdateOperationsInputObjectSchema)]).optional(),
  hair: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  rotation: z.union([z.lazy(() => StudioMemberUpdaterotationInputObjectSchema), z.number().array()]).optional(),
  highlight: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  socials: z.union([JsonNullValueInputSchema, jsonSchema]).optional(),
  labels: z.union([JsonNullValueInputSchema, jsonSchema]).optional(),
  projects: z.union([z.lazy(() => StudioMemberUpdateprojectsInputObjectSchema), z.string().array()]).optional(),
  suite: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  facts: z.union([JsonNullValueInputSchema, jsonSchema]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const StudioMemberUncheckedUpdateManyInputObjectSchema: z.ZodType<Prisma.StudioMemberUncheckedUpdateManyInput> = __makeSchema_StudioMemberUncheckedUpdateManyInput_schema() as unknown as z.ZodType<Prisma.StudioMemberUncheckedUpdateManyInput>;
export const StudioMemberUncheckedUpdateManyInputObjectZodSchema = __makeSchema_StudioMemberUncheckedUpdateManyInput_schema();


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
  message: SortOrderSchema.optional(),
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
  message: SortOrderSchema.optional(),
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
  message: SortOrderSchema.optional(),
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


// File: JsonFilter.schema.ts
const __makeSchema_JsonFilter_schema = () => z.object({
  equals: jsonSchema.optional(),
  path: z.string().array().optional(),
  mode: QueryModeSchema.optional(),
  string_contains: z.string().optional(),
  string_starts_with: z.string().optional(),
  string_ends_with: z.string().optional(),
  array_starts_with: jsonSchema.optional().nullable(),
  array_ends_with: jsonSchema.optional().nullable(),
  array_contains: jsonSchema.optional().nullable(),
  lt: jsonSchema.optional(),
  lte: jsonSchema.optional(),
  gt: jsonSchema.optional(),
  gte: jsonSchema.optional(),
  not: jsonSchema.optional()
}).strict();
export const JsonFilterObjectSchema: z.ZodType<Prisma.JsonFilter> = __makeSchema_JsonFilter_schema() as unknown as z.ZodType<Prisma.JsonFilter>;
export const JsonFilterObjectZodSchema = __makeSchema_JsonFilter_schema();


// File: JsonNullableFilter.schema.ts
const __makeSchema_JsonNullableFilter_schema = () => z.object({
  equals: jsonSchema.optional(),
  path: z.string().array().optional(),
  mode: QueryModeSchema.optional(),
  string_contains: z.string().optional(),
  string_starts_with: z.string().optional(),
  string_ends_with: z.string().optional(),
  array_starts_with: jsonSchema.optional().nullable(),
  array_ends_with: jsonSchema.optional().nullable(),
  array_contains: jsonSchema.optional().nullable(),
  lt: jsonSchema.optional(),
  lte: jsonSchema.optional(),
  gt: jsonSchema.optional(),
  gte: jsonSchema.optional(),
  not: jsonSchema.optional()
}).strict();
export const JsonNullableFilterObjectSchema: z.ZodType<Prisma.JsonNullableFilter> = __makeSchema_JsonNullableFilter_schema() as unknown as z.ZodType<Prisma.JsonNullableFilter>;
export const JsonNullableFilterObjectZodSchema = __makeSchema_JsonNullableFilter_schema();


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


// File: JsonNullableListFilter.schema.ts
const __makeSchema_JsonNullableListFilter_schema = () => z.object({
  equals: jsonSchema.array().optional().nullable(),
  has: jsonSchema.optional().nullable(),
  hasEvery: jsonSchema.array().optional(),
  hasSome: jsonSchema.array().optional(),
  isEmpty: z.boolean().optional()
}).strict();
export const JsonNullableListFilterObjectSchema: z.ZodType<Prisma.JsonNullableListFilter> = __makeSchema_JsonNullableListFilter_schema() as unknown as z.ZodType<Prisma.JsonNullableListFilter>;
export const JsonNullableListFilterObjectZodSchema = __makeSchema_JsonNullableListFilter_schema();


// File: StudioMemberListRelationFilter.schema.ts
const __makeSchema_StudioMemberListRelationFilter_schema = () => z.object({
  every: z.lazy(() => StudioMemberWhereInputObjectSchema).optional(),
  some: z.lazy(() => StudioMemberWhereInputObjectSchema).optional(),
  none: z.lazy(() => StudioMemberWhereInputObjectSchema).optional()
}).strict();
export const StudioMemberListRelationFilterObjectSchema: z.ZodType<Prisma.StudioMemberListRelationFilter> = __makeSchema_StudioMemberListRelationFilter_schema() as unknown as z.ZodType<Prisma.StudioMemberListRelationFilter>;
export const StudioMemberListRelationFilterObjectZodSchema = __makeSchema_StudioMemberListRelationFilter_schema();


// File: StorySectionListRelationFilter.schema.ts
const __makeSchema_StorySectionListRelationFilter_schema = () => z.object({
  every: z.lazy(() => StorySectionWhereInputObjectSchema).optional(),
  some: z.lazy(() => StorySectionWhereInputObjectSchema).optional(),
  none: z.lazy(() => StorySectionWhereInputObjectSchema).optional()
}).strict();
export const StorySectionListRelationFilterObjectSchema: z.ZodType<Prisma.StorySectionListRelationFilter> = __makeSchema_StorySectionListRelationFilter_schema() as unknown as z.ZodType<Prisma.StorySectionListRelationFilter>;
export const StorySectionListRelationFilterObjectZodSchema = __makeSchema_StorySectionListRelationFilter_schema();


// File: StudioMemberOrderByRelationAggregateInput.schema.ts
const __makeSchema_StudioMemberOrderByRelationAggregateInput_schema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const StudioMemberOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.StudioMemberOrderByRelationAggregateInput> = __makeSchema_StudioMemberOrderByRelationAggregateInput_schema() as unknown as z.ZodType<Prisma.StudioMemberOrderByRelationAggregateInput>;
export const StudioMemberOrderByRelationAggregateInputObjectZodSchema = __makeSchema_StudioMemberOrderByRelationAggregateInput_schema();


// File: StorySectionOrderByRelationAggregateInput.schema.ts
const __makeSchema_StorySectionOrderByRelationAggregateInput_schema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const StorySectionOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.StorySectionOrderByRelationAggregateInput> = __makeSchema_StorySectionOrderByRelationAggregateInput_schema() as unknown as z.ZodType<Prisma.StorySectionOrderByRelationAggregateInput>;
export const StorySectionOrderByRelationAggregateInputObjectZodSchema = __makeSchema_StorySectionOrderByRelationAggregateInput_schema();


// File: ProjectCountOrderByAggregateInput.schema.ts
const __makeSchema_ProjectCountOrderByAggregateInput_schema = () => z.object({
  slug: SortOrderSchema.optional(),
  position: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  weeks: SortOrderSchema.optional(),
  link: SortOrderSchema.optional(),
  image: SortOrderSchema.optional(),
  video: SortOrderSchema.optional(),
  coverEffect: SortOrderSchema.optional(),
  description: SortOrderSchema.optional(),
  metaDescription: SortOrderSchema.optional(),
  challenge: SortOrderSchema.optional(),
  services: SortOrderSchema.optional(),
  techStack: SortOrderSchema.optional(),
  date: SortOrderSchema.optional(),
  gallery: SortOrderSchema.optional(),
  notes: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const ProjectCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ProjectCountOrderByAggregateInput> = __makeSchema_ProjectCountOrderByAggregateInput_schema() as unknown as z.ZodType<Prisma.ProjectCountOrderByAggregateInput>;
export const ProjectCountOrderByAggregateInputObjectZodSchema = __makeSchema_ProjectCountOrderByAggregateInput_schema();


// File: ProjectAvgOrderByAggregateInput.schema.ts
const __makeSchema_ProjectAvgOrderByAggregateInput_schema = () => z.object({
  position: SortOrderSchema.optional(),
  weeks: SortOrderSchema.optional()
}).strict();
export const ProjectAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ProjectAvgOrderByAggregateInput> = __makeSchema_ProjectAvgOrderByAggregateInput_schema() as unknown as z.ZodType<Prisma.ProjectAvgOrderByAggregateInput>;
export const ProjectAvgOrderByAggregateInputObjectZodSchema = __makeSchema_ProjectAvgOrderByAggregateInput_schema();


// File: ProjectMaxOrderByAggregateInput.schema.ts
const __makeSchema_ProjectMaxOrderByAggregateInput_schema = () => z.object({
  slug: SortOrderSchema.optional(),
  position: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  weeks: SortOrderSchema.optional(),
  link: SortOrderSchema.optional(),
  image: SortOrderSchema.optional(),
  video: SortOrderSchema.optional(),
  coverEffect: SortOrderSchema.optional(),
  date: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const ProjectMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ProjectMaxOrderByAggregateInput> = __makeSchema_ProjectMaxOrderByAggregateInput_schema() as unknown as z.ZodType<Prisma.ProjectMaxOrderByAggregateInput>;
export const ProjectMaxOrderByAggregateInputObjectZodSchema = __makeSchema_ProjectMaxOrderByAggregateInput_schema();


// File: ProjectMinOrderByAggregateInput.schema.ts
const __makeSchema_ProjectMinOrderByAggregateInput_schema = () => z.object({
  slug: SortOrderSchema.optional(),
  position: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  weeks: SortOrderSchema.optional(),
  link: SortOrderSchema.optional(),
  image: SortOrderSchema.optional(),
  video: SortOrderSchema.optional(),
  coverEffect: SortOrderSchema.optional(),
  date: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const ProjectMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ProjectMinOrderByAggregateInput> = __makeSchema_ProjectMinOrderByAggregateInput_schema() as unknown as z.ZodType<Prisma.ProjectMinOrderByAggregateInput>;
export const ProjectMinOrderByAggregateInputObjectZodSchema = __makeSchema_ProjectMinOrderByAggregateInput_schema();


// File: ProjectSumOrderByAggregateInput.schema.ts
const __makeSchema_ProjectSumOrderByAggregateInput_schema = () => z.object({
  position: SortOrderSchema.optional(),
  weeks: SortOrderSchema.optional()
}).strict();
export const ProjectSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ProjectSumOrderByAggregateInput> = __makeSchema_ProjectSumOrderByAggregateInput_schema() as unknown as z.ZodType<Prisma.ProjectSumOrderByAggregateInput>;
export const ProjectSumOrderByAggregateInputObjectZodSchema = __makeSchema_ProjectSumOrderByAggregateInput_schema();


// File: JsonWithAggregatesFilter.schema.ts
const __makeSchema_JsonWithAggregatesFilter_schema = () => z.object({
  equals: jsonSchema.optional(),
  path: z.string().array().optional(),
  mode: QueryModeSchema.optional(),
  string_contains: z.string().optional(),
  string_starts_with: z.string().optional(),
  string_ends_with: z.string().optional(),
  array_starts_with: jsonSchema.optional().nullable(),
  array_ends_with: jsonSchema.optional().nullable(),
  array_contains: jsonSchema.optional().nullable(),
  lt: jsonSchema.optional(),
  lte: jsonSchema.optional(),
  gt: jsonSchema.optional(),
  gte: jsonSchema.optional(),
  not: jsonSchema.optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedJsonFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedJsonFilterObjectSchema).optional()
}).strict();
export const JsonWithAggregatesFilterObjectSchema: z.ZodType<Prisma.JsonWithAggregatesFilter> = __makeSchema_JsonWithAggregatesFilter_schema() as unknown as z.ZodType<Prisma.JsonWithAggregatesFilter>;
export const JsonWithAggregatesFilterObjectZodSchema = __makeSchema_JsonWithAggregatesFilter_schema();


// File: JsonNullableWithAggregatesFilter.schema.ts
const __makeSchema_JsonNullableWithAggregatesFilter_schema = () => z.object({
  equals: jsonSchema.optional(),
  path: z.string().array().optional(),
  mode: QueryModeSchema.optional(),
  string_contains: z.string().optional(),
  string_starts_with: z.string().optional(),
  string_ends_with: z.string().optional(),
  array_starts_with: jsonSchema.optional().nullable(),
  array_ends_with: jsonSchema.optional().nullable(),
  array_contains: jsonSchema.optional().nullable(),
  lt: jsonSchema.optional(),
  lte: jsonSchema.optional(),
  gt: jsonSchema.optional(),
  gte: jsonSchema.optional(),
  not: jsonSchema.optional(),
  _count: z.lazy(() => NestedIntNullableFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedJsonNullableFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedJsonNullableFilterObjectSchema).optional()
}).strict();
export const JsonNullableWithAggregatesFilterObjectSchema: z.ZodType<Prisma.JsonNullableWithAggregatesFilter> = __makeSchema_JsonNullableWithAggregatesFilter_schema() as unknown as z.ZodType<Prisma.JsonNullableWithAggregatesFilter>;
export const JsonNullableWithAggregatesFilterObjectZodSchema = __makeSchema_JsonNullableWithAggregatesFilter_schema();


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


// File: SiteDailyVisitorListRelationFilter.schema.ts
const __makeSchema_SiteDailyVisitorListRelationFilter_schema = () => z.object({
  every: z.lazy(() => SiteDailyVisitorWhereInputObjectSchema).optional(),
  some: z.lazy(() => SiteDailyVisitorWhereInputObjectSchema).optional(),
  none: z.lazy(() => SiteDailyVisitorWhereInputObjectSchema).optional()
}).strict();
export const SiteDailyVisitorListRelationFilterObjectSchema: z.ZodType<Prisma.SiteDailyVisitorListRelationFilter> = __makeSchema_SiteDailyVisitorListRelationFilter_schema() as unknown as z.ZodType<Prisma.SiteDailyVisitorListRelationFilter>;
export const SiteDailyVisitorListRelationFilterObjectZodSchema = __makeSchema_SiteDailyVisitorListRelationFilter_schema();


// File: SiteDailyVisitorOrderByRelationAggregateInput.schema.ts
const __makeSchema_SiteDailyVisitorOrderByRelationAggregateInput_schema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const SiteDailyVisitorOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.SiteDailyVisitorOrderByRelationAggregateInput> = __makeSchema_SiteDailyVisitorOrderByRelationAggregateInput_schema() as unknown as z.ZodType<Prisma.SiteDailyVisitorOrderByRelationAggregateInput>;
export const SiteDailyVisitorOrderByRelationAggregateInputObjectZodSchema = __makeSchema_SiteDailyVisitorOrderByRelationAggregateInput_schema();


// File: SiteVisitorCountOrderByAggregateInput.schema.ts
const __makeSchema_SiteVisitorCountOrderByAggregateInput_schema = () => z.object({
  id: SortOrderSchema.optional(),
  visitorKey: SortOrderSchema.optional(),
  firstSeenAt: SortOrderSchema.optional(),
  lastSeenAt: SortOrderSchema.optional()
}).strict();
export const SiteVisitorCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.SiteVisitorCountOrderByAggregateInput> = __makeSchema_SiteVisitorCountOrderByAggregateInput_schema() as unknown as z.ZodType<Prisma.SiteVisitorCountOrderByAggregateInput>;
export const SiteVisitorCountOrderByAggregateInputObjectZodSchema = __makeSchema_SiteVisitorCountOrderByAggregateInput_schema();


// File: SiteVisitorMaxOrderByAggregateInput.schema.ts
const __makeSchema_SiteVisitorMaxOrderByAggregateInput_schema = () => z.object({
  id: SortOrderSchema.optional(),
  visitorKey: SortOrderSchema.optional(),
  firstSeenAt: SortOrderSchema.optional(),
  lastSeenAt: SortOrderSchema.optional()
}).strict();
export const SiteVisitorMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.SiteVisitorMaxOrderByAggregateInput> = __makeSchema_SiteVisitorMaxOrderByAggregateInput_schema() as unknown as z.ZodType<Prisma.SiteVisitorMaxOrderByAggregateInput>;
export const SiteVisitorMaxOrderByAggregateInputObjectZodSchema = __makeSchema_SiteVisitorMaxOrderByAggregateInput_schema();


// File: SiteVisitorMinOrderByAggregateInput.schema.ts
const __makeSchema_SiteVisitorMinOrderByAggregateInput_schema = () => z.object({
  id: SortOrderSchema.optional(),
  visitorKey: SortOrderSchema.optional(),
  firstSeenAt: SortOrderSchema.optional(),
  lastSeenAt: SortOrderSchema.optional()
}).strict();
export const SiteVisitorMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.SiteVisitorMinOrderByAggregateInput> = __makeSchema_SiteVisitorMinOrderByAggregateInput_schema() as unknown as z.ZodType<Prisma.SiteVisitorMinOrderByAggregateInput>;
export const SiteVisitorMinOrderByAggregateInputObjectZodSchema = __makeSchema_SiteVisitorMinOrderByAggregateInput_schema();


// File: SiteDailyStatCountOrderByAggregateInput.schema.ts
const __makeSchema_SiteDailyStatCountOrderByAggregateInput_schema = () => z.object({
  date: SortOrderSchema.optional(),
  visits: SortOrderSchema.optional(),
  uniqueVisitors: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const SiteDailyStatCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.SiteDailyStatCountOrderByAggregateInput> = __makeSchema_SiteDailyStatCountOrderByAggregateInput_schema() as unknown as z.ZodType<Prisma.SiteDailyStatCountOrderByAggregateInput>;
export const SiteDailyStatCountOrderByAggregateInputObjectZodSchema = __makeSchema_SiteDailyStatCountOrderByAggregateInput_schema();


// File: SiteDailyStatAvgOrderByAggregateInput.schema.ts
const __makeSchema_SiteDailyStatAvgOrderByAggregateInput_schema = () => z.object({
  visits: SortOrderSchema.optional(),
  uniqueVisitors: SortOrderSchema.optional()
}).strict();
export const SiteDailyStatAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.SiteDailyStatAvgOrderByAggregateInput> = __makeSchema_SiteDailyStatAvgOrderByAggregateInput_schema() as unknown as z.ZodType<Prisma.SiteDailyStatAvgOrderByAggregateInput>;
export const SiteDailyStatAvgOrderByAggregateInputObjectZodSchema = __makeSchema_SiteDailyStatAvgOrderByAggregateInput_schema();


// File: SiteDailyStatMaxOrderByAggregateInput.schema.ts
const __makeSchema_SiteDailyStatMaxOrderByAggregateInput_schema = () => z.object({
  date: SortOrderSchema.optional(),
  visits: SortOrderSchema.optional(),
  uniqueVisitors: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const SiteDailyStatMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.SiteDailyStatMaxOrderByAggregateInput> = __makeSchema_SiteDailyStatMaxOrderByAggregateInput_schema() as unknown as z.ZodType<Prisma.SiteDailyStatMaxOrderByAggregateInput>;
export const SiteDailyStatMaxOrderByAggregateInputObjectZodSchema = __makeSchema_SiteDailyStatMaxOrderByAggregateInput_schema();


// File: SiteDailyStatMinOrderByAggregateInput.schema.ts
const __makeSchema_SiteDailyStatMinOrderByAggregateInput_schema = () => z.object({
  date: SortOrderSchema.optional(),
  visits: SortOrderSchema.optional(),
  uniqueVisitors: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const SiteDailyStatMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.SiteDailyStatMinOrderByAggregateInput> = __makeSchema_SiteDailyStatMinOrderByAggregateInput_schema() as unknown as z.ZodType<Prisma.SiteDailyStatMinOrderByAggregateInput>;
export const SiteDailyStatMinOrderByAggregateInputObjectZodSchema = __makeSchema_SiteDailyStatMinOrderByAggregateInput_schema();


// File: SiteDailyStatSumOrderByAggregateInput.schema.ts
const __makeSchema_SiteDailyStatSumOrderByAggregateInput_schema = () => z.object({
  visits: SortOrderSchema.optional(),
  uniqueVisitors: SortOrderSchema.optional()
}).strict();
export const SiteDailyStatSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.SiteDailyStatSumOrderByAggregateInput> = __makeSchema_SiteDailyStatSumOrderByAggregateInput_schema() as unknown as z.ZodType<Prisma.SiteDailyStatSumOrderByAggregateInput>;
export const SiteDailyStatSumOrderByAggregateInputObjectZodSchema = __makeSchema_SiteDailyStatSumOrderByAggregateInput_schema();


// File: SiteDailyStatScalarRelationFilter.schema.ts
const __makeSchema_SiteDailyStatScalarRelationFilter_schema = () => z.object({
  is: z.lazy(() => SiteDailyStatWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => SiteDailyStatWhereInputObjectSchema).optional()
}).strict();
export const SiteDailyStatScalarRelationFilterObjectSchema: z.ZodType<Prisma.SiteDailyStatScalarRelationFilter> = __makeSchema_SiteDailyStatScalarRelationFilter_schema() as unknown as z.ZodType<Prisma.SiteDailyStatScalarRelationFilter>;
export const SiteDailyStatScalarRelationFilterObjectZodSchema = __makeSchema_SiteDailyStatScalarRelationFilter_schema();


// File: SiteVisitorScalarRelationFilter.schema.ts
const __makeSchema_SiteVisitorScalarRelationFilter_schema = () => z.object({
  is: z.lazy(() => SiteVisitorWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => SiteVisitorWhereInputObjectSchema).optional()
}).strict();
export const SiteVisitorScalarRelationFilterObjectSchema: z.ZodType<Prisma.SiteVisitorScalarRelationFilter> = __makeSchema_SiteVisitorScalarRelationFilter_schema() as unknown as z.ZodType<Prisma.SiteVisitorScalarRelationFilter>;
export const SiteVisitorScalarRelationFilterObjectZodSchema = __makeSchema_SiteVisitorScalarRelationFilter_schema();


// File: SiteDailyVisitorDateVisitorIdCompoundUniqueInput.schema.ts
const __makeSchema_SiteDailyVisitorDateVisitorIdCompoundUniqueInput_schema = () => z.object({
  date: z.date(),
  visitorId: z.string()
}).strict();
export const SiteDailyVisitorDateVisitorIdCompoundUniqueInputObjectSchema: z.ZodType<Prisma.SiteDailyVisitorDateVisitorIdCompoundUniqueInput> = __makeSchema_SiteDailyVisitorDateVisitorIdCompoundUniqueInput_schema() as unknown as z.ZodType<Prisma.SiteDailyVisitorDateVisitorIdCompoundUniqueInput>;
export const SiteDailyVisitorDateVisitorIdCompoundUniqueInputObjectZodSchema = __makeSchema_SiteDailyVisitorDateVisitorIdCompoundUniqueInput_schema();


// File: SiteDailyVisitorCountOrderByAggregateInput.schema.ts
const __makeSchema_SiteDailyVisitorCountOrderByAggregateInput_schema = () => z.object({
  date: SortOrderSchema.optional(),
  visitorId: SortOrderSchema.optional(),
  firstVisitAt: SortOrderSchema.optional()
}).strict();
export const SiteDailyVisitorCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.SiteDailyVisitorCountOrderByAggregateInput> = __makeSchema_SiteDailyVisitorCountOrderByAggregateInput_schema() as unknown as z.ZodType<Prisma.SiteDailyVisitorCountOrderByAggregateInput>;
export const SiteDailyVisitorCountOrderByAggregateInputObjectZodSchema = __makeSchema_SiteDailyVisitorCountOrderByAggregateInput_schema();


// File: SiteDailyVisitorMaxOrderByAggregateInput.schema.ts
const __makeSchema_SiteDailyVisitorMaxOrderByAggregateInput_schema = () => z.object({
  date: SortOrderSchema.optional(),
  visitorId: SortOrderSchema.optional(),
  firstVisitAt: SortOrderSchema.optional()
}).strict();
export const SiteDailyVisitorMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.SiteDailyVisitorMaxOrderByAggregateInput> = __makeSchema_SiteDailyVisitorMaxOrderByAggregateInput_schema() as unknown as z.ZodType<Prisma.SiteDailyVisitorMaxOrderByAggregateInput>;
export const SiteDailyVisitorMaxOrderByAggregateInputObjectZodSchema = __makeSchema_SiteDailyVisitorMaxOrderByAggregateInput_schema();


// File: SiteDailyVisitorMinOrderByAggregateInput.schema.ts
const __makeSchema_SiteDailyVisitorMinOrderByAggregateInput_schema = () => z.object({
  date: SortOrderSchema.optional(),
  visitorId: SortOrderSchema.optional(),
  firstVisitAt: SortOrderSchema.optional()
}).strict();
export const SiteDailyVisitorMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.SiteDailyVisitorMinOrderByAggregateInput> = __makeSchema_SiteDailyVisitorMinOrderByAggregateInput_schema() as unknown as z.ZodType<Prisma.SiteDailyVisitorMinOrderByAggregateInput>;
export const SiteDailyVisitorMinOrderByAggregateInputObjectZodSchema = __makeSchema_SiteDailyVisitorMinOrderByAggregateInput_schema();


// File: IntNullableFilter.schema.ts
const __makeSchema_IntNullableFilter_schema = () => z.object({
  equals: z.number().int().optional().nullable(),
  in: z.number().int().array().optional().nullable(),
  notIn: z.number().int().array().optional().nullable(),
  lt: z.number().int().optional(),
  lte: z.number().int().optional(),
  gt: z.number().int().optional(),
  gte: z.number().int().optional(),
  not: z.union([z.number().int(), z.lazy(() => NestedIntNullableFilterObjectSchema)]).optional().nullable()
}).strict();
export const IntNullableFilterObjectSchema: z.ZodType<Prisma.IntNullableFilter> = __makeSchema_IntNullableFilter_schema() as unknown as z.ZodType<Prisma.IntNullableFilter>;
export const IntNullableFilterObjectZodSchema = __makeSchema_IntNullableFilter_schema();


// File: StorySectionScalarRelationFilter.schema.ts
const __makeSchema_StorySectionScalarRelationFilter_schema = () => z.object({
  is: z.lazy(() => StorySectionWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => StorySectionWhereInputObjectSchema).optional()
}).strict();
export const StorySectionScalarRelationFilterObjectSchema: z.ZodType<Prisma.StorySectionScalarRelationFilter> = __makeSchema_StorySectionScalarRelationFilter_schema() as unknown as z.ZodType<Prisma.StorySectionScalarRelationFilter>;
export const StorySectionScalarRelationFilterObjectZodSchema = __makeSchema_StorySectionScalarRelationFilter_schema();


// File: StoryBlockSectionIdPositionCompoundUniqueInput.schema.ts
const __makeSchema_StoryBlockSectionIdPositionCompoundUniqueInput_schema = () => z.object({
  sectionId: z.string(),
  position: z.number().int()
}).strict();
export const StoryBlockSectionIdPositionCompoundUniqueInputObjectSchema: z.ZodType<Prisma.StoryBlockSectionIdPositionCompoundUniqueInput> = __makeSchema_StoryBlockSectionIdPositionCompoundUniqueInput_schema() as unknown as z.ZodType<Prisma.StoryBlockSectionIdPositionCompoundUniqueInput>;
export const StoryBlockSectionIdPositionCompoundUniqueInputObjectZodSchema = __makeSchema_StoryBlockSectionIdPositionCompoundUniqueInput_schema();


// File: StoryBlockCountOrderByAggregateInput.schema.ts
const __makeSchema_StoryBlockCountOrderByAggregateInput_schema = () => z.object({
  id: SortOrderSchema.optional(),
  sectionId: SortOrderSchema.optional(),
  position: SortOrderSchema.optional(),
  type: SortOrderSchema.optional(),
  media: SortOrderSchema.optional(),
  eyebrow: SortOrderSchema.optional(),
  title: SortOrderSchema.optional(),
  text: SortOrderSchema.optional(),
  tags: SortOrderSchema.optional(),
  logos: SortOrderSchema.optional(),
  tiles: SortOrderSchema.optional(),
  link: SortOrderSchema.optional(),
  linkLabel: SortOrderSchema.optional(),
  effect: SortOrderSchema.optional(),
  smalls: SortOrderSchema.optional(),
  cols: SortOrderSchema.optional(),
  font: SortOrderSchema.optional(),
  fontFamily: SortOrderSchema.optional(),
  description: SortOrderSchema.optional(),
  secondFont: SortOrderSchema.optional(),
  secondFontFamily: SortOrderSchema.optional(),
  secondDescription: SortOrderSchema.optional(),
  swatches: SortOrderSchema.optional()
}).strict();
export const StoryBlockCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.StoryBlockCountOrderByAggregateInput> = __makeSchema_StoryBlockCountOrderByAggregateInput_schema() as unknown as z.ZodType<Prisma.StoryBlockCountOrderByAggregateInput>;
export const StoryBlockCountOrderByAggregateInputObjectZodSchema = __makeSchema_StoryBlockCountOrderByAggregateInput_schema();


// File: StoryBlockAvgOrderByAggregateInput.schema.ts
const __makeSchema_StoryBlockAvgOrderByAggregateInput_schema = () => z.object({
  position: SortOrderSchema.optional(),
  cols: SortOrderSchema.optional()
}).strict();
export const StoryBlockAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.StoryBlockAvgOrderByAggregateInput> = __makeSchema_StoryBlockAvgOrderByAggregateInput_schema() as unknown as z.ZodType<Prisma.StoryBlockAvgOrderByAggregateInput>;
export const StoryBlockAvgOrderByAggregateInputObjectZodSchema = __makeSchema_StoryBlockAvgOrderByAggregateInput_schema();


// File: StoryBlockMaxOrderByAggregateInput.schema.ts
const __makeSchema_StoryBlockMaxOrderByAggregateInput_schema = () => z.object({
  id: SortOrderSchema.optional(),
  sectionId: SortOrderSchema.optional(),
  position: SortOrderSchema.optional(),
  type: SortOrderSchema.optional(),
  link: SortOrderSchema.optional(),
  effect: SortOrderSchema.optional(),
  smalls: SortOrderSchema.optional(),
  cols: SortOrderSchema.optional(),
  font: SortOrderSchema.optional(),
  fontFamily: SortOrderSchema.optional(),
  secondFont: SortOrderSchema.optional(),
  secondFontFamily: SortOrderSchema.optional()
}).strict();
export const StoryBlockMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.StoryBlockMaxOrderByAggregateInput> = __makeSchema_StoryBlockMaxOrderByAggregateInput_schema() as unknown as z.ZodType<Prisma.StoryBlockMaxOrderByAggregateInput>;
export const StoryBlockMaxOrderByAggregateInputObjectZodSchema = __makeSchema_StoryBlockMaxOrderByAggregateInput_schema();


// File: StoryBlockMinOrderByAggregateInput.schema.ts
const __makeSchema_StoryBlockMinOrderByAggregateInput_schema = () => z.object({
  id: SortOrderSchema.optional(),
  sectionId: SortOrderSchema.optional(),
  position: SortOrderSchema.optional(),
  type: SortOrderSchema.optional(),
  link: SortOrderSchema.optional(),
  effect: SortOrderSchema.optional(),
  smalls: SortOrderSchema.optional(),
  cols: SortOrderSchema.optional(),
  font: SortOrderSchema.optional(),
  fontFamily: SortOrderSchema.optional(),
  secondFont: SortOrderSchema.optional(),
  secondFontFamily: SortOrderSchema.optional()
}).strict();
export const StoryBlockMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.StoryBlockMinOrderByAggregateInput> = __makeSchema_StoryBlockMinOrderByAggregateInput_schema() as unknown as z.ZodType<Prisma.StoryBlockMinOrderByAggregateInput>;
export const StoryBlockMinOrderByAggregateInputObjectZodSchema = __makeSchema_StoryBlockMinOrderByAggregateInput_schema();


// File: StoryBlockSumOrderByAggregateInput.schema.ts
const __makeSchema_StoryBlockSumOrderByAggregateInput_schema = () => z.object({
  position: SortOrderSchema.optional(),
  cols: SortOrderSchema.optional()
}).strict();
export const StoryBlockSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.StoryBlockSumOrderByAggregateInput> = __makeSchema_StoryBlockSumOrderByAggregateInput_schema() as unknown as z.ZodType<Prisma.StoryBlockSumOrderByAggregateInput>;
export const StoryBlockSumOrderByAggregateInputObjectZodSchema = __makeSchema_StoryBlockSumOrderByAggregateInput_schema();


// File: IntNullableWithAggregatesFilter.schema.ts
const __makeSchema_IntNullableWithAggregatesFilter_schema = () => z.object({
  equals: z.number().int().optional().nullable(),
  in: z.number().int().array().optional().nullable(),
  notIn: z.number().int().array().optional().nullable(),
  lt: z.number().int().optional(),
  lte: z.number().int().optional(),
  gt: z.number().int().optional(),
  gte: z.number().int().optional(),
  not: z.union([z.number().int(), z.lazy(() => NestedIntNullableWithAggregatesFilterObjectSchema)]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterObjectSchema).optional(),
  _avg: z.lazy(() => NestedFloatNullableFilterObjectSchema).optional(),
  _sum: z.lazy(() => NestedIntNullableFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedIntNullableFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedIntNullableFilterObjectSchema).optional()
}).strict();
export const IntNullableWithAggregatesFilterObjectSchema: z.ZodType<Prisma.IntNullableWithAggregatesFilter> = __makeSchema_IntNullableWithAggregatesFilter_schema() as unknown as z.ZodType<Prisma.IntNullableWithAggregatesFilter>;
export const IntNullableWithAggregatesFilterObjectZodSchema = __makeSchema_IntNullableWithAggregatesFilter_schema();


// File: ProjectScalarRelationFilter.schema.ts
const __makeSchema_ProjectScalarRelationFilter_schema = () => z.object({
  is: z.lazy(() => ProjectWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => ProjectWhereInputObjectSchema).optional()
}).strict();
export const ProjectScalarRelationFilterObjectSchema: z.ZodType<Prisma.ProjectScalarRelationFilter> = __makeSchema_ProjectScalarRelationFilter_schema() as unknown as z.ZodType<Prisma.ProjectScalarRelationFilter>;
export const ProjectScalarRelationFilterObjectZodSchema = __makeSchema_ProjectScalarRelationFilter_schema();


// File: StoryBlockListRelationFilter.schema.ts
const __makeSchema_StoryBlockListRelationFilter_schema = () => z.object({
  every: z.lazy(() => StoryBlockWhereInputObjectSchema).optional(),
  some: z.lazy(() => StoryBlockWhereInputObjectSchema).optional(),
  none: z.lazy(() => StoryBlockWhereInputObjectSchema).optional()
}).strict();
export const StoryBlockListRelationFilterObjectSchema: z.ZodType<Prisma.StoryBlockListRelationFilter> = __makeSchema_StoryBlockListRelationFilter_schema() as unknown as z.ZodType<Prisma.StoryBlockListRelationFilter>;
export const StoryBlockListRelationFilterObjectZodSchema = __makeSchema_StoryBlockListRelationFilter_schema();


// File: StoryBlockOrderByRelationAggregateInput.schema.ts
const __makeSchema_StoryBlockOrderByRelationAggregateInput_schema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const StoryBlockOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.StoryBlockOrderByRelationAggregateInput> = __makeSchema_StoryBlockOrderByRelationAggregateInput_schema() as unknown as z.ZodType<Prisma.StoryBlockOrderByRelationAggregateInput>;
export const StoryBlockOrderByRelationAggregateInputObjectZodSchema = __makeSchema_StoryBlockOrderByRelationAggregateInput_schema();


// File: StorySectionProjectSlugPositionCompoundUniqueInput.schema.ts
const __makeSchema_StorySectionProjectSlugPositionCompoundUniqueInput_schema = () => z.object({
  projectSlug: z.string(),
  position: z.number().int()
}).strict();
export const StorySectionProjectSlugPositionCompoundUniqueInputObjectSchema: z.ZodType<Prisma.StorySectionProjectSlugPositionCompoundUniqueInput> = __makeSchema_StorySectionProjectSlugPositionCompoundUniqueInput_schema() as unknown as z.ZodType<Prisma.StorySectionProjectSlugPositionCompoundUniqueInput>;
export const StorySectionProjectSlugPositionCompoundUniqueInputObjectZodSchema = __makeSchema_StorySectionProjectSlugPositionCompoundUniqueInput_schema();


// File: StorySectionCountOrderByAggregateInput.schema.ts
const __makeSchema_StorySectionCountOrderByAggregateInput_schema = () => z.object({
  id: SortOrderSchema.optional(),
  projectSlug: SortOrderSchema.optional(),
  position: SortOrderSchema.optional(),
  title: SortOrderSchema.optional(),
  by: SortOrderSchema.optional(),
  layout: SortOrderSchema.optional()
}).strict();
export const StorySectionCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.StorySectionCountOrderByAggregateInput> = __makeSchema_StorySectionCountOrderByAggregateInput_schema() as unknown as z.ZodType<Prisma.StorySectionCountOrderByAggregateInput>;
export const StorySectionCountOrderByAggregateInputObjectZodSchema = __makeSchema_StorySectionCountOrderByAggregateInput_schema();


// File: StorySectionAvgOrderByAggregateInput.schema.ts
const __makeSchema_StorySectionAvgOrderByAggregateInput_schema = () => z.object({
  position: SortOrderSchema.optional()
}).strict();
export const StorySectionAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.StorySectionAvgOrderByAggregateInput> = __makeSchema_StorySectionAvgOrderByAggregateInput_schema() as unknown as z.ZodType<Prisma.StorySectionAvgOrderByAggregateInput>;
export const StorySectionAvgOrderByAggregateInputObjectZodSchema = __makeSchema_StorySectionAvgOrderByAggregateInput_schema();


// File: StorySectionMaxOrderByAggregateInput.schema.ts
const __makeSchema_StorySectionMaxOrderByAggregateInput_schema = () => z.object({
  id: SortOrderSchema.optional(),
  projectSlug: SortOrderSchema.optional(),
  position: SortOrderSchema.optional()
}).strict();
export const StorySectionMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.StorySectionMaxOrderByAggregateInput> = __makeSchema_StorySectionMaxOrderByAggregateInput_schema() as unknown as z.ZodType<Prisma.StorySectionMaxOrderByAggregateInput>;
export const StorySectionMaxOrderByAggregateInputObjectZodSchema = __makeSchema_StorySectionMaxOrderByAggregateInput_schema();


// File: StorySectionMinOrderByAggregateInput.schema.ts
const __makeSchema_StorySectionMinOrderByAggregateInput_schema = () => z.object({
  id: SortOrderSchema.optional(),
  projectSlug: SortOrderSchema.optional(),
  position: SortOrderSchema.optional()
}).strict();
export const StorySectionMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.StorySectionMinOrderByAggregateInput> = __makeSchema_StorySectionMinOrderByAggregateInput_schema() as unknown as z.ZodType<Prisma.StorySectionMinOrderByAggregateInput>;
export const StorySectionMinOrderByAggregateInputObjectZodSchema = __makeSchema_StorySectionMinOrderByAggregateInput_schema();


// File: StorySectionSumOrderByAggregateInput.schema.ts
const __makeSchema_StorySectionSumOrderByAggregateInput_schema = () => z.object({
  position: SortOrderSchema.optional()
}).strict();
export const StorySectionSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.StorySectionSumOrderByAggregateInput> = __makeSchema_StorySectionSumOrderByAggregateInput_schema() as unknown as z.ZodType<Prisma.StorySectionSumOrderByAggregateInput>;
export const StorySectionSumOrderByAggregateInputObjectZodSchema = __makeSchema_StorySectionSumOrderByAggregateInput_schema();


// File: FloatFilter.schema.ts
const __makeSchema_FloatFilter_schema = () => z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([z.number(), z.lazy(() => NestedFloatFilterObjectSchema)]).optional()
}).strict();
export const FloatFilterObjectSchema: z.ZodType<Prisma.FloatFilter> = __makeSchema_FloatFilter_schema() as unknown as z.ZodType<Prisma.FloatFilter>;
export const FloatFilterObjectZodSchema = __makeSchema_FloatFilter_schema();


// File: FloatNullableListFilter.schema.ts
const __makeSchema_FloatNullableListFilter_schema = () => z.object({
  equals: z.number().array().optional().nullable(),
  has: z.number().optional().nullable(),
  hasEvery: z.number().array().optional(),
  hasSome: z.number().array().optional(),
  isEmpty: z.boolean().optional()
}).strict();
export const FloatNullableListFilterObjectSchema: z.ZodType<Prisma.FloatNullableListFilter> = __makeSchema_FloatNullableListFilter_schema() as unknown as z.ZodType<Prisma.FloatNullableListFilter>;
export const FloatNullableListFilterObjectZodSchema = __makeSchema_FloatNullableListFilter_schema();


// File: BoolFilter.schema.ts
const __makeSchema_BoolFilter_schema = () => z.object({
  equals: z.boolean().optional(),
  not: z.union([z.boolean(), z.lazy(() => NestedBoolFilterObjectSchema)]).optional()
}).strict();
export const BoolFilterObjectSchema: z.ZodType<Prisma.BoolFilter> = __makeSchema_BoolFilter_schema() as unknown as z.ZodType<Prisma.BoolFilter>;
export const BoolFilterObjectZodSchema = __makeSchema_BoolFilter_schema();


// File: ProjectListRelationFilter.schema.ts
const __makeSchema_ProjectListRelationFilter_schema = () => z.object({
  every: z.lazy(() => ProjectWhereInputObjectSchema).optional(),
  some: z.lazy(() => ProjectWhereInputObjectSchema).optional(),
  none: z.lazy(() => ProjectWhereInputObjectSchema).optional()
}).strict();
export const ProjectListRelationFilterObjectSchema: z.ZodType<Prisma.ProjectListRelationFilter> = __makeSchema_ProjectListRelationFilter_schema() as unknown as z.ZodType<Prisma.ProjectListRelationFilter>;
export const ProjectListRelationFilterObjectZodSchema = __makeSchema_ProjectListRelationFilter_schema();


// File: ProjectOrderByRelationAggregateInput.schema.ts
const __makeSchema_ProjectOrderByRelationAggregateInput_schema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const ProjectOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.ProjectOrderByRelationAggregateInput> = __makeSchema_ProjectOrderByRelationAggregateInput_schema() as unknown as z.ZodType<Prisma.ProjectOrderByRelationAggregateInput>;
export const ProjectOrderByRelationAggregateInputObjectZodSchema = __makeSchema_ProjectOrderByRelationAggregateInput_schema();


// File: StudioMemberCountOrderByAggregateInput.schema.ts
const __makeSchema_StudioMemberCountOrderByAggregateInput_schema = () => z.object({
  slug: SortOrderSchema.optional(),
  position: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  role: SortOrderSchema.optional(),
  description: SortOrderSchema.optional(),
  bio: SortOrderSchema.optional(),
  model: SortOrderSchema.optional(),
  scale: SortOrderSchema.optional(),
  roughness: SortOrderSchema.optional(),
  metalness: SortOrderSchema.optional(),
  hair: SortOrderSchema.optional(),
  rotation: SortOrderSchema.optional(),
  highlight: SortOrderSchema.optional(),
  socials: SortOrderSchema.optional(),
  labels: SortOrderSchema.optional(),
  projects: SortOrderSchema.optional(),
  suite: SortOrderSchema.optional(),
  facts: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const StudioMemberCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.StudioMemberCountOrderByAggregateInput> = __makeSchema_StudioMemberCountOrderByAggregateInput_schema() as unknown as z.ZodType<Prisma.StudioMemberCountOrderByAggregateInput>;
export const StudioMemberCountOrderByAggregateInputObjectZodSchema = __makeSchema_StudioMemberCountOrderByAggregateInput_schema();


// File: StudioMemberAvgOrderByAggregateInput.schema.ts
const __makeSchema_StudioMemberAvgOrderByAggregateInput_schema = () => z.object({
  position: SortOrderSchema.optional(),
  scale: SortOrderSchema.optional(),
  roughness: SortOrderSchema.optional(),
  metalness: SortOrderSchema.optional(),
  rotation: SortOrderSchema.optional()
}).strict();
export const StudioMemberAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.StudioMemberAvgOrderByAggregateInput> = __makeSchema_StudioMemberAvgOrderByAggregateInput_schema() as unknown as z.ZodType<Prisma.StudioMemberAvgOrderByAggregateInput>;
export const StudioMemberAvgOrderByAggregateInputObjectZodSchema = __makeSchema_StudioMemberAvgOrderByAggregateInput_schema();


// File: StudioMemberMaxOrderByAggregateInput.schema.ts
const __makeSchema_StudioMemberMaxOrderByAggregateInput_schema = () => z.object({
  slug: SortOrderSchema.optional(),
  position: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  model: SortOrderSchema.optional(),
  scale: SortOrderSchema.optional(),
  roughness: SortOrderSchema.optional(),
  metalness: SortOrderSchema.optional(),
  hair: SortOrderSchema.optional(),
  highlight: SortOrderSchema.optional(),
  suite: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const StudioMemberMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.StudioMemberMaxOrderByAggregateInput> = __makeSchema_StudioMemberMaxOrderByAggregateInput_schema() as unknown as z.ZodType<Prisma.StudioMemberMaxOrderByAggregateInput>;
export const StudioMemberMaxOrderByAggregateInputObjectZodSchema = __makeSchema_StudioMemberMaxOrderByAggregateInput_schema();


// File: StudioMemberMinOrderByAggregateInput.schema.ts
const __makeSchema_StudioMemberMinOrderByAggregateInput_schema = () => z.object({
  slug: SortOrderSchema.optional(),
  position: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  model: SortOrderSchema.optional(),
  scale: SortOrderSchema.optional(),
  roughness: SortOrderSchema.optional(),
  metalness: SortOrderSchema.optional(),
  hair: SortOrderSchema.optional(),
  highlight: SortOrderSchema.optional(),
  suite: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const StudioMemberMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.StudioMemberMinOrderByAggregateInput> = __makeSchema_StudioMemberMinOrderByAggregateInput_schema() as unknown as z.ZodType<Prisma.StudioMemberMinOrderByAggregateInput>;
export const StudioMemberMinOrderByAggregateInputObjectZodSchema = __makeSchema_StudioMemberMinOrderByAggregateInput_schema();


// File: StudioMemberSumOrderByAggregateInput.schema.ts
const __makeSchema_StudioMemberSumOrderByAggregateInput_schema = () => z.object({
  position: SortOrderSchema.optional(),
  scale: SortOrderSchema.optional(),
  roughness: SortOrderSchema.optional(),
  metalness: SortOrderSchema.optional(),
  rotation: SortOrderSchema.optional()
}).strict();
export const StudioMemberSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.StudioMemberSumOrderByAggregateInput> = __makeSchema_StudioMemberSumOrderByAggregateInput_schema() as unknown as z.ZodType<Prisma.StudioMemberSumOrderByAggregateInput>;
export const StudioMemberSumOrderByAggregateInputObjectZodSchema = __makeSchema_StudioMemberSumOrderByAggregateInput_schema();


// File: FloatWithAggregatesFilter.schema.ts
const __makeSchema_FloatWithAggregatesFilter_schema = () => z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([z.number(), z.lazy(() => NestedFloatWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterObjectSchema).optional(),
  _sum: z.lazy(() => NestedFloatFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedFloatFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedFloatFilterObjectSchema).optional()
}).strict();
export const FloatWithAggregatesFilterObjectSchema: z.ZodType<Prisma.FloatWithAggregatesFilter> = __makeSchema_FloatWithAggregatesFilter_schema() as unknown as z.ZodType<Prisma.FloatWithAggregatesFilter>;
export const FloatWithAggregatesFilterObjectZodSchema = __makeSchema_FloatWithAggregatesFilter_schema();


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


// File: ProjectCreateservicesInput.schema.ts
const __makeSchema_ProjectCreateservicesInput_schema = () => z.object({
  set: z.string().array()
}).strict();
export const ProjectCreateservicesInputObjectSchema: z.ZodType<Prisma.ProjectCreateservicesInput> = __makeSchema_ProjectCreateservicesInput_schema() as unknown as z.ZodType<Prisma.ProjectCreateservicesInput>;
export const ProjectCreateservicesInputObjectZodSchema = __makeSchema_ProjectCreateservicesInput_schema();


// File: ProjectCreatetechStackInput.schema.ts
const __makeSchema_ProjectCreatetechStackInput_schema = () => z.object({
  set: z.string().array()
}).strict();
export const ProjectCreatetechStackInputObjectSchema: z.ZodType<Prisma.ProjectCreatetechStackInput> = __makeSchema_ProjectCreatetechStackInput_schema() as unknown as z.ZodType<Prisma.ProjectCreatetechStackInput>;
export const ProjectCreatetechStackInputObjectZodSchema = __makeSchema_ProjectCreatetechStackInput_schema();


// File: ProjectCreategalleryInput.schema.ts
const __makeSchema_ProjectCreategalleryInput_schema = () => z.object({
  set: z.string().array()
}).strict();
export const ProjectCreategalleryInputObjectSchema: z.ZodType<Prisma.ProjectCreategalleryInput> = __makeSchema_ProjectCreategalleryInput_schema() as unknown as z.ZodType<Prisma.ProjectCreategalleryInput>;
export const ProjectCreategalleryInputObjectZodSchema = __makeSchema_ProjectCreategalleryInput_schema();


// File: ProjectCreatenotesInput.schema.ts
const __makeSchema_ProjectCreatenotesInput_schema = () => z.object({
  set: jsonSchema.array()
}).strict();
export const ProjectCreatenotesInputObjectSchema: z.ZodType<Prisma.ProjectCreatenotesInput> = __makeSchema_ProjectCreatenotesInput_schema() as unknown as z.ZodType<Prisma.ProjectCreatenotesInput>;
export const ProjectCreatenotesInputObjectZodSchema = __makeSchema_ProjectCreatenotesInput_schema();


// File: StudioMemberCreateNestedManyWithoutTeamOfInput.schema.ts
const __makeSchema_StudioMemberCreateNestedManyWithoutTeamOfInput_schema = () => z.object({
  create: z.union([z.lazy(() => StudioMemberCreateWithoutTeamOfInputObjectSchema), z.lazy(() => StudioMemberCreateWithoutTeamOfInputObjectSchema).array(), z.lazy(() => StudioMemberUncheckedCreateWithoutTeamOfInputObjectSchema), z.lazy(() => StudioMemberUncheckedCreateWithoutTeamOfInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => StudioMemberCreateOrConnectWithoutTeamOfInputObjectSchema), z.lazy(() => StudioMemberCreateOrConnectWithoutTeamOfInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => StudioMemberWhereUniqueInputObjectSchema), z.lazy(() => StudioMemberWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const StudioMemberCreateNestedManyWithoutTeamOfInputObjectSchema: z.ZodType<Prisma.StudioMemberCreateNestedManyWithoutTeamOfInput> = __makeSchema_StudioMemberCreateNestedManyWithoutTeamOfInput_schema() as unknown as z.ZodType<Prisma.StudioMemberCreateNestedManyWithoutTeamOfInput>;
export const StudioMemberCreateNestedManyWithoutTeamOfInputObjectZodSchema = __makeSchema_StudioMemberCreateNestedManyWithoutTeamOfInput_schema();


// File: StorySectionCreateNestedManyWithoutProjectInput.schema.ts
const __makeSchema_StorySectionCreateNestedManyWithoutProjectInput_schema = () => z.object({
  create: z.union([z.lazy(() => StorySectionCreateWithoutProjectInputObjectSchema), z.lazy(() => StorySectionCreateWithoutProjectInputObjectSchema).array(), z.lazy(() => StorySectionUncheckedCreateWithoutProjectInputObjectSchema), z.lazy(() => StorySectionUncheckedCreateWithoutProjectInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => StorySectionCreateOrConnectWithoutProjectInputObjectSchema), z.lazy(() => StorySectionCreateOrConnectWithoutProjectInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => StorySectionCreateManyProjectInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => StorySectionWhereUniqueInputObjectSchema), z.lazy(() => StorySectionWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const StorySectionCreateNestedManyWithoutProjectInputObjectSchema: z.ZodType<Prisma.StorySectionCreateNestedManyWithoutProjectInput> = __makeSchema_StorySectionCreateNestedManyWithoutProjectInput_schema() as unknown as z.ZodType<Prisma.StorySectionCreateNestedManyWithoutProjectInput>;
export const StorySectionCreateNestedManyWithoutProjectInputObjectZodSchema = __makeSchema_StorySectionCreateNestedManyWithoutProjectInput_schema();


// File: StudioMemberUncheckedCreateNestedManyWithoutTeamOfInput.schema.ts
const __makeSchema_StudioMemberUncheckedCreateNestedManyWithoutTeamOfInput_schema = () => z.object({
  create: z.union([z.lazy(() => StudioMemberCreateWithoutTeamOfInputObjectSchema), z.lazy(() => StudioMemberCreateWithoutTeamOfInputObjectSchema).array(), z.lazy(() => StudioMemberUncheckedCreateWithoutTeamOfInputObjectSchema), z.lazy(() => StudioMemberUncheckedCreateWithoutTeamOfInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => StudioMemberCreateOrConnectWithoutTeamOfInputObjectSchema), z.lazy(() => StudioMemberCreateOrConnectWithoutTeamOfInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => StudioMemberWhereUniqueInputObjectSchema), z.lazy(() => StudioMemberWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const StudioMemberUncheckedCreateNestedManyWithoutTeamOfInputObjectSchema: z.ZodType<Prisma.StudioMemberUncheckedCreateNestedManyWithoutTeamOfInput> = __makeSchema_StudioMemberUncheckedCreateNestedManyWithoutTeamOfInput_schema() as unknown as z.ZodType<Prisma.StudioMemberUncheckedCreateNestedManyWithoutTeamOfInput>;
export const StudioMemberUncheckedCreateNestedManyWithoutTeamOfInputObjectZodSchema = __makeSchema_StudioMemberUncheckedCreateNestedManyWithoutTeamOfInput_schema();


// File: StorySectionUncheckedCreateNestedManyWithoutProjectInput.schema.ts
const __makeSchema_StorySectionUncheckedCreateNestedManyWithoutProjectInput_schema = () => z.object({
  create: z.union([z.lazy(() => StorySectionCreateWithoutProjectInputObjectSchema), z.lazy(() => StorySectionCreateWithoutProjectInputObjectSchema).array(), z.lazy(() => StorySectionUncheckedCreateWithoutProjectInputObjectSchema), z.lazy(() => StorySectionUncheckedCreateWithoutProjectInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => StorySectionCreateOrConnectWithoutProjectInputObjectSchema), z.lazy(() => StorySectionCreateOrConnectWithoutProjectInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => StorySectionCreateManyProjectInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => StorySectionWhereUniqueInputObjectSchema), z.lazy(() => StorySectionWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const StorySectionUncheckedCreateNestedManyWithoutProjectInputObjectSchema: z.ZodType<Prisma.StorySectionUncheckedCreateNestedManyWithoutProjectInput> = __makeSchema_StorySectionUncheckedCreateNestedManyWithoutProjectInput_schema() as unknown as z.ZodType<Prisma.StorySectionUncheckedCreateNestedManyWithoutProjectInput>;
export const StorySectionUncheckedCreateNestedManyWithoutProjectInputObjectZodSchema = __makeSchema_StorySectionUncheckedCreateNestedManyWithoutProjectInput_schema();


// File: ProjectUpdateservicesInput.schema.ts
const __makeSchema_ProjectUpdateservicesInput_schema = () => z.object({
  set: z.string().array().optional(),
  push: z.union([z.string(), z.string().array()]).optional()
}).strict();
export const ProjectUpdateservicesInputObjectSchema: z.ZodType<Prisma.ProjectUpdateservicesInput> = __makeSchema_ProjectUpdateservicesInput_schema() as unknown as z.ZodType<Prisma.ProjectUpdateservicesInput>;
export const ProjectUpdateservicesInputObjectZodSchema = __makeSchema_ProjectUpdateservicesInput_schema();


// File: ProjectUpdatetechStackInput.schema.ts
const __makeSchema_ProjectUpdatetechStackInput_schema = () => z.object({
  set: z.string().array().optional(),
  push: z.union([z.string(), z.string().array()]).optional()
}).strict();
export const ProjectUpdatetechStackInputObjectSchema: z.ZodType<Prisma.ProjectUpdatetechStackInput> = __makeSchema_ProjectUpdatetechStackInput_schema() as unknown as z.ZodType<Prisma.ProjectUpdatetechStackInput>;
export const ProjectUpdatetechStackInputObjectZodSchema = __makeSchema_ProjectUpdatetechStackInput_schema();


// File: ProjectUpdategalleryInput.schema.ts
const __makeSchema_ProjectUpdategalleryInput_schema = () => z.object({
  set: z.string().array().optional(),
  push: z.union([z.string(), z.string().array()]).optional()
}).strict();
export const ProjectUpdategalleryInputObjectSchema: z.ZodType<Prisma.ProjectUpdategalleryInput> = __makeSchema_ProjectUpdategalleryInput_schema() as unknown as z.ZodType<Prisma.ProjectUpdategalleryInput>;
export const ProjectUpdategalleryInputObjectZodSchema = __makeSchema_ProjectUpdategalleryInput_schema();


// File: ProjectUpdatenotesInput.schema.ts
const __makeSchema_ProjectUpdatenotesInput_schema = () => z.object({
  set: jsonSchema.array().optional(),
  push: z.union([jsonSchema, jsonSchema.array()]).optional()
}).strict();
export const ProjectUpdatenotesInputObjectSchema: z.ZodType<Prisma.ProjectUpdatenotesInput> = __makeSchema_ProjectUpdatenotesInput_schema() as unknown as z.ZodType<Prisma.ProjectUpdatenotesInput>;
export const ProjectUpdatenotesInputObjectZodSchema = __makeSchema_ProjectUpdatenotesInput_schema();


// File: StudioMemberUpdateManyWithoutTeamOfNestedInput.schema.ts
const __makeSchema_StudioMemberUpdateManyWithoutTeamOfNestedInput_schema = () => z.object({
  create: z.union([z.lazy(() => StudioMemberCreateWithoutTeamOfInputObjectSchema), z.lazy(() => StudioMemberCreateWithoutTeamOfInputObjectSchema).array(), z.lazy(() => StudioMemberUncheckedCreateWithoutTeamOfInputObjectSchema), z.lazy(() => StudioMemberUncheckedCreateWithoutTeamOfInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => StudioMemberCreateOrConnectWithoutTeamOfInputObjectSchema), z.lazy(() => StudioMemberCreateOrConnectWithoutTeamOfInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => StudioMemberUpsertWithWhereUniqueWithoutTeamOfInputObjectSchema), z.lazy(() => StudioMemberUpsertWithWhereUniqueWithoutTeamOfInputObjectSchema).array()]).optional(),
  set: z.union([z.lazy(() => StudioMemberWhereUniqueInputObjectSchema), z.lazy(() => StudioMemberWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => StudioMemberWhereUniqueInputObjectSchema), z.lazy(() => StudioMemberWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => StudioMemberWhereUniqueInputObjectSchema), z.lazy(() => StudioMemberWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => StudioMemberWhereUniqueInputObjectSchema), z.lazy(() => StudioMemberWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => StudioMemberUpdateWithWhereUniqueWithoutTeamOfInputObjectSchema), z.lazy(() => StudioMemberUpdateWithWhereUniqueWithoutTeamOfInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => StudioMemberUpdateManyWithWhereWithoutTeamOfInputObjectSchema), z.lazy(() => StudioMemberUpdateManyWithWhereWithoutTeamOfInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => StudioMemberScalarWhereInputObjectSchema), z.lazy(() => StudioMemberScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const StudioMemberUpdateManyWithoutTeamOfNestedInputObjectSchema: z.ZodType<Prisma.StudioMemberUpdateManyWithoutTeamOfNestedInput> = __makeSchema_StudioMemberUpdateManyWithoutTeamOfNestedInput_schema() as unknown as z.ZodType<Prisma.StudioMemberUpdateManyWithoutTeamOfNestedInput>;
export const StudioMemberUpdateManyWithoutTeamOfNestedInputObjectZodSchema = __makeSchema_StudioMemberUpdateManyWithoutTeamOfNestedInput_schema();


// File: StorySectionUpdateManyWithoutProjectNestedInput.schema.ts
const __makeSchema_StorySectionUpdateManyWithoutProjectNestedInput_schema = () => z.object({
  create: z.union([z.lazy(() => StorySectionCreateWithoutProjectInputObjectSchema), z.lazy(() => StorySectionCreateWithoutProjectInputObjectSchema).array(), z.lazy(() => StorySectionUncheckedCreateWithoutProjectInputObjectSchema), z.lazy(() => StorySectionUncheckedCreateWithoutProjectInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => StorySectionCreateOrConnectWithoutProjectInputObjectSchema), z.lazy(() => StorySectionCreateOrConnectWithoutProjectInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => StorySectionUpsertWithWhereUniqueWithoutProjectInputObjectSchema), z.lazy(() => StorySectionUpsertWithWhereUniqueWithoutProjectInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => StorySectionCreateManyProjectInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => StorySectionWhereUniqueInputObjectSchema), z.lazy(() => StorySectionWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => StorySectionWhereUniqueInputObjectSchema), z.lazy(() => StorySectionWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => StorySectionWhereUniqueInputObjectSchema), z.lazy(() => StorySectionWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => StorySectionWhereUniqueInputObjectSchema), z.lazy(() => StorySectionWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => StorySectionUpdateWithWhereUniqueWithoutProjectInputObjectSchema), z.lazy(() => StorySectionUpdateWithWhereUniqueWithoutProjectInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => StorySectionUpdateManyWithWhereWithoutProjectInputObjectSchema), z.lazy(() => StorySectionUpdateManyWithWhereWithoutProjectInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => StorySectionScalarWhereInputObjectSchema), z.lazy(() => StorySectionScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const StorySectionUpdateManyWithoutProjectNestedInputObjectSchema: z.ZodType<Prisma.StorySectionUpdateManyWithoutProjectNestedInput> = __makeSchema_StorySectionUpdateManyWithoutProjectNestedInput_schema() as unknown as z.ZodType<Prisma.StorySectionUpdateManyWithoutProjectNestedInput>;
export const StorySectionUpdateManyWithoutProjectNestedInputObjectZodSchema = __makeSchema_StorySectionUpdateManyWithoutProjectNestedInput_schema();


// File: StudioMemberUncheckedUpdateManyWithoutTeamOfNestedInput.schema.ts
const __makeSchema_StudioMemberUncheckedUpdateManyWithoutTeamOfNestedInput_schema = () => z.object({
  create: z.union([z.lazy(() => StudioMemberCreateWithoutTeamOfInputObjectSchema), z.lazy(() => StudioMemberCreateWithoutTeamOfInputObjectSchema).array(), z.lazy(() => StudioMemberUncheckedCreateWithoutTeamOfInputObjectSchema), z.lazy(() => StudioMemberUncheckedCreateWithoutTeamOfInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => StudioMemberCreateOrConnectWithoutTeamOfInputObjectSchema), z.lazy(() => StudioMemberCreateOrConnectWithoutTeamOfInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => StudioMemberUpsertWithWhereUniqueWithoutTeamOfInputObjectSchema), z.lazy(() => StudioMemberUpsertWithWhereUniqueWithoutTeamOfInputObjectSchema).array()]).optional(),
  set: z.union([z.lazy(() => StudioMemberWhereUniqueInputObjectSchema), z.lazy(() => StudioMemberWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => StudioMemberWhereUniqueInputObjectSchema), z.lazy(() => StudioMemberWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => StudioMemberWhereUniqueInputObjectSchema), z.lazy(() => StudioMemberWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => StudioMemberWhereUniqueInputObjectSchema), z.lazy(() => StudioMemberWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => StudioMemberUpdateWithWhereUniqueWithoutTeamOfInputObjectSchema), z.lazy(() => StudioMemberUpdateWithWhereUniqueWithoutTeamOfInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => StudioMemberUpdateManyWithWhereWithoutTeamOfInputObjectSchema), z.lazy(() => StudioMemberUpdateManyWithWhereWithoutTeamOfInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => StudioMemberScalarWhereInputObjectSchema), z.lazy(() => StudioMemberScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const StudioMemberUncheckedUpdateManyWithoutTeamOfNestedInputObjectSchema: z.ZodType<Prisma.StudioMemberUncheckedUpdateManyWithoutTeamOfNestedInput> = __makeSchema_StudioMemberUncheckedUpdateManyWithoutTeamOfNestedInput_schema() as unknown as z.ZodType<Prisma.StudioMemberUncheckedUpdateManyWithoutTeamOfNestedInput>;
export const StudioMemberUncheckedUpdateManyWithoutTeamOfNestedInputObjectZodSchema = __makeSchema_StudioMemberUncheckedUpdateManyWithoutTeamOfNestedInput_schema();


// File: StorySectionUncheckedUpdateManyWithoutProjectNestedInput.schema.ts
const __makeSchema_StorySectionUncheckedUpdateManyWithoutProjectNestedInput_schema = () => z.object({
  create: z.union([z.lazy(() => StorySectionCreateWithoutProjectInputObjectSchema), z.lazy(() => StorySectionCreateWithoutProjectInputObjectSchema).array(), z.lazy(() => StorySectionUncheckedCreateWithoutProjectInputObjectSchema), z.lazy(() => StorySectionUncheckedCreateWithoutProjectInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => StorySectionCreateOrConnectWithoutProjectInputObjectSchema), z.lazy(() => StorySectionCreateOrConnectWithoutProjectInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => StorySectionUpsertWithWhereUniqueWithoutProjectInputObjectSchema), z.lazy(() => StorySectionUpsertWithWhereUniqueWithoutProjectInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => StorySectionCreateManyProjectInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => StorySectionWhereUniqueInputObjectSchema), z.lazy(() => StorySectionWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => StorySectionWhereUniqueInputObjectSchema), z.lazy(() => StorySectionWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => StorySectionWhereUniqueInputObjectSchema), z.lazy(() => StorySectionWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => StorySectionWhereUniqueInputObjectSchema), z.lazy(() => StorySectionWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => StorySectionUpdateWithWhereUniqueWithoutProjectInputObjectSchema), z.lazy(() => StorySectionUpdateWithWhereUniqueWithoutProjectInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => StorySectionUpdateManyWithWhereWithoutProjectInputObjectSchema), z.lazy(() => StorySectionUpdateManyWithWhereWithoutProjectInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => StorySectionScalarWhereInputObjectSchema), z.lazy(() => StorySectionScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const StorySectionUncheckedUpdateManyWithoutProjectNestedInputObjectSchema: z.ZodType<Prisma.StorySectionUncheckedUpdateManyWithoutProjectNestedInput> = __makeSchema_StorySectionUncheckedUpdateManyWithoutProjectNestedInput_schema() as unknown as z.ZodType<Prisma.StorySectionUncheckedUpdateManyWithoutProjectNestedInput>;
export const StorySectionUncheckedUpdateManyWithoutProjectNestedInputObjectZodSchema = __makeSchema_StorySectionUncheckedUpdateManyWithoutProjectNestedInput_schema();


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


// File: SiteDailyVisitorCreateNestedManyWithoutVisitorInput.schema.ts
const __makeSchema_SiteDailyVisitorCreateNestedManyWithoutVisitorInput_schema = () => z.object({
  create: z.union([z.lazy(() => SiteDailyVisitorCreateWithoutVisitorInputObjectSchema), z.lazy(() => SiteDailyVisitorCreateWithoutVisitorInputObjectSchema).array(), z.lazy(() => SiteDailyVisitorUncheckedCreateWithoutVisitorInputObjectSchema), z.lazy(() => SiteDailyVisitorUncheckedCreateWithoutVisitorInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => SiteDailyVisitorCreateOrConnectWithoutVisitorInputObjectSchema), z.lazy(() => SiteDailyVisitorCreateOrConnectWithoutVisitorInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => SiteDailyVisitorCreateManyVisitorInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => SiteDailyVisitorWhereUniqueInputObjectSchema), z.lazy(() => SiteDailyVisitorWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const SiteDailyVisitorCreateNestedManyWithoutVisitorInputObjectSchema: z.ZodType<Prisma.SiteDailyVisitorCreateNestedManyWithoutVisitorInput> = __makeSchema_SiteDailyVisitorCreateNestedManyWithoutVisitorInput_schema() as unknown as z.ZodType<Prisma.SiteDailyVisitorCreateNestedManyWithoutVisitorInput>;
export const SiteDailyVisitorCreateNestedManyWithoutVisitorInputObjectZodSchema = __makeSchema_SiteDailyVisitorCreateNestedManyWithoutVisitorInput_schema();


// File: SiteDailyVisitorUncheckedCreateNestedManyWithoutVisitorInput.schema.ts
const __makeSchema_SiteDailyVisitorUncheckedCreateNestedManyWithoutVisitorInput_schema = () => z.object({
  create: z.union([z.lazy(() => SiteDailyVisitorCreateWithoutVisitorInputObjectSchema), z.lazy(() => SiteDailyVisitorCreateWithoutVisitorInputObjectSchema).array(), z.lazy(() => SiteDailyVisitorUncheckedCreateWithoutVisitorInputObjectSchema), z.lazy(() => SiteDailyVisitorUncheckedCreateWithoutVisitorInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => SiteDailyVisitorCreateOrConnectWithoutVisitorInputObjectSchema), z.lazy(() => SiteDailyVisitorCreateOrConnectWithoutVisitorInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => SiteDailyVisitorCreateManyVisitorInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => SiteDailyVisitorWhereUniqueInputObjectSchema), z.lazy(() => SiteDailyVisitorWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const SiteDailyVisitorUncheckedCreateNestedManyWithoutVisitorInputObjectSchema: z.ZodType<Prisma.SiteDailyVisitorUncheckedCreateNestedManyWithoutVisitorInput> = __makeSchema_SiteDailyVisitorUncheckedCreateNestedManyWithoutVisitorInput_schema() as unknown as z.ZodType<Prisma.SiteDailyVisitorUncheckedCreateNestedManyWithoutVisitorInput>;
export const SiteDailyVisitorUncheckedCreateNestedManyWithoutVisitorInputObjectZodSchema = __makeSchema_SiteDailyVisitorUncheckedCreateNestedManyWithoutVisitorInput_schema();


// File: SiteDailyVisitorUpdateManyWithoutVisitorNestedInput.schema.ts
const __makeSchema_SiteDailyVisitorUpdateManyWithoutVisitorNestedInput_schema = () => z.object({
  create: z.union([z.lazy(() => SiteDailyVisitorCreateWithoutVisitorInputObjectSchema), z.lazy(() => SiteDailyVisitorCreateWithoutVisitorInputObjectSchema).array(), z.lazy(() => SiteDailyVisitorUncheckedCreateWithoutVisitorInputObjectSchema), z.lazy(() => SiteDailyVisitorUncheckedCreateWithoutVisitorInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => SiteDailyVisitorCreateOrConnectWithoutVisitorInputObjectSchema), z.lazy(() => SiteDailyVisitorCreateOrConnectWithoutVisitorInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => SiteDailyVisitorUpsertWithWhereUniqueWithoutVisitorInputObjectSchema), z.lazy(() => SiteDailyVisitorUpsertWithWhereUniqueWithoutVisitorInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => SiteDailyVisitorCreateManyVisitorInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => SiteDailyVisitorWhereUniqueInputObjectSchema), z.lazy(() => SiteDailyVisitorWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => SiteDailyVisitorWhereUniqueInputObjectSchema), z.lazy(() => SiteDailyVisitorWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => SiteDailyVisitorWhereUniqueInputObjectSchema), z.lazy(() => SiteDailyVisitorWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => SiteDailyVisitorWhereUniqueInputObjectSchema), z.lazy(() => SiteDailyVisitorWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => SiteDailyVisitorUpdateWithWhereUniqueWithoutVisitorInputObjectSchema), z.lazy(() => SiteDailyVisitorUpdateWithWhereUniqueWithoutVisitorInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => SiteDailyVisitorUpdateManyWithWhereWithoutVisitorInputObjectSchema), z.lazy(() => SiteDailyVisitorUpdateManyWithWhereWithoutVisitorInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => SiteDailyVisitorScalarWhereInputObjectSchema), z.lazy(() => SiteDailyVisitorScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const SiteDailyVisitorUpdateManyWithoutVisitorNestedInputObjectSchema: z.ZodType<Prisma.SiteDailyVisitorUpdateManyWithoutVisitorNestedInput> = __makeSchema_SiteDailyVisitorUpdateManyWithoutVisitorNestedInput_schema() as unknown as z.ZodType<Prisma.SiteDailyVisitorUpdateManyWithoutVisitorNestedInput>;
export const SiteDailyVisitorUpdateManyWithoutVisitorNestedInputObjectZodSchema = __makeSchema_SiteDailyVisitorUpdateManyWithoutVisitorNestedInput_schema();


// File: SiteDailyVisitorUncheckedUpdateManyWithoutVisitorNestedInput.schema.ts
const __makeSchema_SiteDailyVisitorUncheckedUpdateManyWithoutVisitorNestedInput_schema = () => z.object({
  create: z.union([z.lazy(() => SiteDailyVisitorCreateWithoutVisitorInputObjectSchema), z.lazy(() => SiteDailyVisitorCreateWithoutVisitorInputObjectSchema).array(), z.lazy(() => SiteDailyVisitorUncheckedCreateWithoutVisitorInputObjectSchema), z.lazy(() => SiteDailyVisitorUncheckedCreateWithoutVisitorInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => SiteDailyVisitorCreateOrConnectWithoutVisitorInputObjectSchema), z.lazy(() => SiteDailyVisitorCreateOrConnectWithoutVisitorInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => SiteDailyVisitorUpsertWithWhereUniqueWithoutVisitorInputObjectSchema), z.lazy(() => SiteDailyVisitorUpsertWithWhereUniqueWithoutVisitorInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => SiteDailyVisitorCreateManyVisitorInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => SiteDailyVisitorWhereUniqueInputObjectSchema), z.lazy(() => SiteDailyVisitorWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => SiteDailyVisitorWhereUniqueInputObjectSchema), z.lazy(() => SiteDailyVisitorWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => SiteDailyVisitorWhereUniqueInputObjectSchema), z.lazy(() => SiteDailyVisitorWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => SiteDailyVisitorWhereUniqueInputObjectSchema), z.lazy(() => SiteDailyVisitorWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => SiteDailyVisitorUpdateWithWhereUniqueWithoutVisitorInputObjectSchema), z.lazy(() => SiteDailyVisitorUpdateWithWhereUniqueWithoutVisitorInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => SiteDailyVisitorUpdateManyWithWhereWithoutVisitorInputObjectSchema), z.lazy(() => SiteDailyVisitorUpdateManyWithWhereWithoutVisitorInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => SiteDailyVisitorScalarWhereInputObjectSchema), z.lazy(() => SiteDailyVisitorScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const SiteDailyVisitorUncheckedUpdateManyWithoutVisitorNestedInputObjectSchema: z.ZodType<Prisma.SiteDailyVisitorUncheckedUpdateManyWithoutVisitorNestedInput> = __makeSchema_SiteDailyVisitorUncheckedUpdateManyWithoutVisitorNestedInput_schema() as unknown as z.ZodType<Prisma.SiteDailyVisitorUncheckedUpdateManyWithoutVisitorNestedInput>;
export const SiteDailyVisitorUncheckedUpdateManyWithoutVisitorNestedInputObjectZodSchema = __makeSchema_SiteDailyVisitorUncheckedUpdateManyWithoutVisitorNestedInput_schema();


// File: SiteDailyVisitorCreateNestedManyWithoutDayInput.schema.ts
const __makeSchema_SiteDailyVisitorCreateNestedManyWithoutDayInput_schema = () => z.object({
  create: z.union([z.lazy(() => SiteDailyVisitorCreateWithoutDayInputObjectSchema), z.lazy(() => SiteDailyVisitorCreateWithoutDayInputObjectSchema).array(), z.lazy(() => SiteDailyVisitorUncheckedCreateWithoutDayInputObjectSchema), z.lazy(() => SiteDailyVisitorUncheckedCreateWithoutDayInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => SiteDailyVisitorCreateOrConnectWithoutDayInputObjectSchema), z.lazy(() => SiteDailyVisitorCreateOrConnectWithoutDayInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => SiteDailyVisitorCreateManyDayInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => SiteDailyVisitorWhereUniqueInputObjectSchema), z.lazy(() => SiteDailyVisitorWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const SiteDailyVisitorCreateNestedManyWithoutDayInputObjectSchema: z.ZodType<Prisma.SiteDailyVisitorCreateNestedManyWithoutDayInput> = __makeSchema_SiteDailyVisitorCreateNestedManyWithoutDayInput_schema() as unknown as z.ZodType<Prisma.SiteDailyVisitorCreateNestedManyWithoutDayInput>;
export const SiteDailyVisitorCreateNestedManyWithoutDayInputObjectZodSchema = __makeSchema_SiteDailyVisitorCreateNestedManyWithoutDayInput_schema();


// File: SiteDailyVisitorUncheckedCreateNestedManyWithoutDayInput.schema.ts
const __makeSchema_SiteDailyVisitorUncheckedCreateNestedManyWithoutDayInput_schema = () => z.object({
  create: z.union([z.lazy(() => SiteDailyVisitorCreateWithoutDayInputObjectSchema), z.lazy(() => SiteDailyVisitorCreateWithoutDayInputObjectSchema).array(), z.lazy(() => SiteDailyVisitorUncheckedCreateWithoutDayInputObjectSchema), z.lazy(() => SiteDailyVisitorUncheckedCreateWithoutDayInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => SiteDailyVisitorCreateOrConnectWithoutDayInputObjectSchema), z.lazy(() => SiteDailyVisitorCreateOrConnectWithoutDayInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => SiteDailyVisitorCreateManyDayInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => SiteDailyVisitorWhereUniqueInputObjectSchema), z.lazy(() => SiteDailyVisitorWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const SiteDailyVisitorUncheckedCreateNestedManyWithoutDayInputObjectSchema: z.ZodType<Prisma.SiteDailyVisitorUncheckedCreateNestedManyWithoutDayInput> = __makeSchema_SiteDailyVisitorUncheckedCreateNestedManyWithoutDayInput_schema() as unknown as z.ZodType<Prisma.SiteDailyVisitorUncheckedCreateNestedManyWithoutDayInput>;
export const SiteDailyVisitorUncheckedCreateNestedManyWithoutDayInputObjectZodSchema = __makeSchema_SiteDailyVisitorUncheckedCreateNestedManyWithoutDayInput_schema();


// File: SiteDailyVisitorUpdateManyWithoutDayNestedInput.schema.ts
const __makeSchema_SiteDailyVisitorUpdateManyWithoutDayNestedInput_schema = () => z.object({
  create: z.union([z.lazy(() => SiteDailyVisitorCreateWithoutDayInputObjectSchema), z.lazy(() => SiteDailyVisitorCreateWithoutDayInputObjectSchema).array(), z.lazy(() => SiteDailyVisitorUncheckedCreateWithoutDayInputObjectSchema), z.lazy(() => SiteDailyVisitorUncheckedCreateWithoutDayInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => SiteDailyVisitorCreateOrConnectWithoutDayInputObjectSchema), z.lazy(() => SiteDailyVisitorCreateOrConnectWithoutDayInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => SiteDailyVisitorUpsertWithWhereUniqueWithoutDayInputObjectSchema), z.lazy(() => SiteDailyVisitorUpsertWithWhereUniqueWithoutDayInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => SiteDailyVisitorCreateManyDayInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => SiteDailyVisitorWhereUniqueInputObjectSchema), z.lazy(() => SiteDailyVisitorWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => SiteDailyVisitorWhereUniqueInputObjectSchema), z.lazy(() => SiteDailyVisitorWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => SiteDailyVisitorWhereUniqueInputObjectSchema), z.lazy(() => SiteDailyVisitorWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => SiteDailyVisitorWhereUniqueInputObjectSchema), z.lazy(() => SiteDailyVisitorWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => SiteDailyVisitorUpdateWithWhereUniqueWithoutDayInputObjectSchema), z.lazy(() => SiteDailyVisitorUpdateWithWhereUniqueWithoutDayInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => SiteDailyVisitorUpdateManyWithWhereWithoutDayInputObjectSchema), z.lazy(() => SiteDailyVisitorUpdateManyWithWhereWithoutDayInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => SiteDailyVisitorScalarWhereInputObjectSchema), z.lazy(() => SiteDailyVisitorScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const SiteDailyVisitorUpdateManyWithoutDayNestedInputObjectSchema: z.ZodType<Prisma.SiteDailyVisitorUpdateManyWithoutDayNestedInput> = __makeSchema_SiteDailyVisitorUpdateManyWithoutDayNestedInput_schema() as unknown as z.ZodType<Prisma.SiteDailyVisitorUpdateManyWithoutDayNestedInput>;
export const SiteDailyVisitorUpdateManyWithoutDayNestedInputObjectZodSchema = __makeSchema_SiteDailyVisitorUpdateManyWithoutDayNestedInput_schema();


// File: SiteDailyVisitorUncheckedUpdateManyWithoutDayNestedInput.schema.ts
const __makeSchema_SiteDailyVisitorUncheckedUpdateManyWithoutDayNestedInput_schema = () => z.object({
  create: z.union([z.lazy(() => SiteDailyVisitorCreateWithoutDayInputObjectSchema), z.lazy(() => SiteDailyVisitorCreateWithoutDayInputObjectSchema).array(), z.lazy(() => SiteDailyVisitorUncheckedCreateWithoutDayInputObjectSchema), z.lazy(() => SiteDailyVisitorUncheckedCreateWithoutDayInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => SiteDailyVisitorCreateOrConnectWithoutDayInputObjectSchema), z.lazy(() => SiteDailyVisitorCreateOrConnectWithoutDayInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => SiteDailyVisitorUpsertWithWhereUniqueWithoutDayInputObjectSchema), z.lazy(() => SiteDailyVisitorUpsertWithWhereUniqueWithoutDayInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => SiteDailyVisitorCreateManyDayInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => SiteDailyVisitorWhereUniqueInputObjectSchema), z.lazy(() => SiteDailyVisitorWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => SiteDailyVisitorWhereUniqueInputObjectSchema), z.lazy(() => SiteDailyVisitorWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => SiteDailyVisitorWhereUniqueInputObjectSchema), z.lazy(() => SiteDailyVisitorWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => SiteDailyVisitorWhereUniqueInputObjectSchema), z.lazy(() => SiteDailyVisitorWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => SiteDailyVisitorUpdateWithWhereUniqueWithoutDayInputObjectSchema), z.lazy(() => SiteDailyVisitorUpdateWithWhereUniqueWithoutDayInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => SiteDailyVisitorUpdateManyWithWhereWithoutDayInputObjectSchema), z.lazy(() => SiteDailyVisitorUpdateManyWithWhereWithoutDayInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => SiteDailyVisitorScalarWhereInputObjectSchema), z.lazy(() => SiteDailyVisitorScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const SiteDailyVisitorUncheckedUpdateManyWithoutDayNestedInputObjectSchema: z.ZodType<Prisma.SiteDailyVisitorUncheckedUpdateManyWithoutDayNestedInput> = __makeSchema_SiteDailyVisitorUncheckedUpdateManyWithoutDayNestedInput_schema() as unknown as z.ZodType<Prisma.SiteDailyVisitorUncheckedUpdateManyWithoutDayNestedInput>;
export const SiteDailyVisitorUncheckedUpdateManyWithoutDayNestedInputObjectZodSchema = __makeSchema_SiteDailyVisitorUncheckedUpdateManyWithoutDayNestedInput_schema();


// File: SiteDailyStatCreateNestedOneWithoutVisitorsInput.schema.ts
const __makeSchema_SiteDailyStatCreateNestedOneWithoutVisitorsInput_schema = () => z.object({
  create: z.union([z.lazy(() => SiteDailyStatCreateWithoutVisitorsInputObjectSchema), z.lazy(() => SiteDailyStatUncheckedCreateWithoutVisitorsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => SiteDailyStatCreateOrConnectWithoutVisitorsInputObjectSchema).optional(),
  connect: z.lazy(() => SiteDailyStatWhereUniqueInputObjectSchema).optional()
}).strict();
export const SiteDailyStatCreateNestedOneWithoutVisitorsInputObjectSchema: z.ZodType<Prisma.SiteDailyStatCreateNestedOneWithoutVisitorsInput> = __makeSchema_SiteDailyStatCreateNestedOneWithoutVisitorsInput_schema() as unknown as z.ZodType<Prisma.SiteDailyStatCreateNestedOneWithoutVisitorsInput>;
export const SiteDailyStatCreateNestedOneWithoutVisitorsInputObjectZodSchema = __makeSchema_SiteDailyStatCreateNestedOneWithoutVisitorsInput_schema();


// File: SiteVisitorCreateNestedOneWithoutDailyVisitsInput.schema.ts
const __makeSchema_SiteVisitorCreateNestedOneWithoutDailyVisitsInput_schema = () => z.object({
  create: z.union([z.lazy(() => SiteVisitorCreateWithoutDailyVisitsInputObjectSchema), z.lazy(() => SiteVisitorUncheckedCreateWithoutDailyVisitsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => SiteVisitorCreateOrConnectWithoutDailyVisitsInputObjectSchema).optional(),
  connect: z.lazy(() => SiteVisitorWhereUniqueInputObjectSchema).optional()
}).strict();
export const SiteVisitorCreateNestedOneWithoutDailyVisitsInputObjectSchema: z.ZodType<Prisma.SiteVisitorCreateNestedOneWithoutDailyVisitsInput> = __makeSchema_SiteVisitorCreateNestedOneWithoutDailyVisitsInput_schema() as unknown as z.ZodType<Prisma.SiteVisitorCreateNestedOneWithoutDailyVisitsInput>;
export const SiteVisitorCreateNestedOneWithoutDailyVisitsInputObjectZodSchema = __makeSchema_SiteVisitorCreateNestedOneWithoutDailyVisitsInput_schema();


// File: SiteDailyStatUpdateOneRequiredWithoutVisitorsNestedInput.schema.ts
const __makeSchema_SiteDailyStatUpdateOneRequiredWithoutVisitorsNestedInput_schema = () => z.object({
  create: z.union([z.lazy(() => SiteDailyStatCreateWithoutVisitorsInputObjectSchema), z.lazy(() => SiteDailyStatUncheckedCreateWithoutVisitorsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => SiteDailyStatCreateOrConnectWithoutVisitorsInputObjectSchema).optional(),
  upsert: z.lazy(() => SiteDailyStatUpsertWithoutVisitorsInputObjectSchema).optional(),
  connect: z.lazy(() => SiteDailyStatWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => SiteDailyStatUpdateToOneWithWhereWithoutVisitorsInputObjectSchema), z.lazy(() => SiteDailyStatUpdateWithoutVisitorsInputObjectSchema), z.lazy(() => SiteDailyStatUncheckedUpdateWithoutVisitorsInputObjectSchema)]).optional()
}).strict();
export const SiteDailyStatUpdateOneRequiredWithoutVisitorsNestedInputObjectSchema: z.ZodType<Prisma.SiteDailyStatUpdateOneRequiredWithoutVisitorsNestedInput> = __makeSchema_SiteDailyStatUpdateOneRequiredWithoutVisitorsNestedInput_schema() as unknown as z.ZodType<Prisma.SiteDailyStatUpdateOneRequiredWithoutVisitorsNestedInput>;
export const SiteDailyStatUpdateOneRequiredWithoutVisitorsNestedInputObjectZodSchema = __makeSchema_SiteDailyStatUpdateOneRequiredWithoutVisitorsNestedInput_schema();


// File: SiteVisitorUpdateOneRequiredWithoutDailyVisitsNestedInput.schema.ts
const __makeSchema_SiteVisitorUpdateOneRequiredWithoutDailyVisitsNestedInput_schema = () => z.object({
  create: z.union([z.lazy(() => SiteVisitorCreateWithoutDailyVisitsInputObjectSchema), z.lazy(() => SiteVisitorUncheckedCreateWithoutDailyVisitsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => SiteVisitorCreateOrConnectWithoutDailyVisitsInputObjectSchema).optional(),
  upsert: z.lazy(() => SiteVisitorUpsertWithoutDailyVisitsInputObjectSchema).optional(),
  connect: z.lazy(() => SiteVisitorWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => SiteVisitorUpdateToOneWithWhereWithoutDailyVisitsInputObjectSchema), z.lazy(() => SiteVisitorUpdateWithoutDailyVisitsInputObjectSchema), z.lazy(() => SiteVisitorUncheckedUpdateWithoutDailyVisitsInputObjectSchema)]).optional()
}).strict();
export const SiteVisitorUpdateOneRequiredWithoutDailyVisitsNestedInputObjectSchema: z.ZodType<Prisma.SiteVisitorUpdateOneRequiredWithoutDailyVisitsNestedInput> = __makeSchema_SiteVisitorUpdateOneRequiredWithoutDailyVisitsNestedInput_schema() as unknown as z.ZodType<Prisma.SiteVisitorUpdateOneRequiredWithoutDailyVisitsNestedInput>;
export const SiteVisitorUpdateOneRequiredWithoutDailyVisitsNestedInputObjectZodSchema = __makeSchema_SiteVisitorUpdateOneRequiredWithoutDailyVisitsNestedInput_schema();


// File: StoryBlockCreatelogosInput.schema.ts
const __makeSchema_StoryBlockCreatelogosInput_schema = () => z.object({
  set: z.string().array()
}).strict();
export const StoryBlockCreatelogosInputObjectSchema: z.ZodType<Prisma.StoryBlockCreatelogosInput> = __makeSchema_StoryBlockCreatelogosInput_schema() as unknown as z.ZodType<Prisma.StoryBlockCreatelogosInput>;
export const StoryBlockCreatelogosInputObjectZodSchema = __makeSchema_StoryBlockCreatelogosInput_schema();


// File: StorySectionCreateNestedOneWithoutBlocksInput.schema.ts
const __makeSchema_StorySectionCreateNestedOneWithoutBlocksInput_schema = () => z.object({
  create: z.union([z.lazy(() => StorySectionCreateWithoutBlocksInputObjectSchema), z.lazy(() => StorySectionUncheckedCreateWithoutBlocksInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => StorySectionCreateOrConnectWithoutBlocksInputObjectSchema).optional(),
  connect: z.lazy(() => StorySectionWhereUniqueInputObjectSchema).optional()
}).strict();
export const StorySectionCreateNestedOneWithoutBlocksInputObjectSchema: z.ZodType<Prisma.StorySectionCreateNestedOneWithoutBlocksInput> = __makeSchema_StorySectionCreateNestedOneWithoutBlocksInput_schema() as unknown as z.ZodType<Prisma.StorySectionCreateNestedOneWithoutBlocksInput>;
export const StorySectionCreateNestedOneWithoutBlocksInputObjectZodSchema = __makeSchema_StorySectionCreateNestedOneWithoutBlocksInput_schema();


// File: StoryBlockUpdatelogosInput.schema.ts
const __makeSchema_StoryBlockUpdatelogosInput_schema = () => z.object({
  set: z.string().array().optional(),
  push: z.union([z.string(), z.string().array()]).optional()
}).strict();
export const StoryBlockUpdatelogosInputObjectSchema: z.ZodType<Prisma.StoryBlockUpdatelogosInput> = __makeSchema_StoryBlockUpdatelogosInput_schema() as unknown as z.ZodType<Prisma.StoryBlockUpdatelogosInput>;
export const StoryBlockUpdatelogosInputObjectZodSchema = __makeSchema_StoryBlockUpdatelogosInput_schema();


// File: NullableIntFieldUpdateOperationsInput.schema.ts
const __makeSchema_NullableIntFieldUpdateOperationsInput_schema = () => z.object({
  set: z.number().int().optional(),
  increment: z.number().int().optional(),
  decrement: z.number().int().optional(),
  multiply: z.number().int().optional(),
  divide: z.number().int().optional()
}).strict();
export const NullableIntFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.NullableIntFieldUpdateOperationsInput> = __makeSchema_NullableIntFieldUpdateOperationsInput_schema() as unknown as z.ZodType<Prisma.NullableIntFieldUpdateOperationsInput>;
export const NullableIntFieldUpdateOperationsInputObjectZodSchema = __makeSchema_NullableIntFieldUpdateOperationsInput_schema();


// File: StorySectionUpdateOneRequiredWithoutBlocksNestedInput.schema.ts
const __makeSchema_StorySectionUpdateOneRequiredWithoutBlocksNestedInput_schema = () => z.object({
  create: z.union([z.lazy(() => StorySectionCreateWithoutBlocksInputObjectSchema), z.lazy(() => StorySectionUncheckedCreateWithoutBlocksInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => StorySectionCreateOrConnectWithoutBlocksInputObjectSchema).optional(),
  upsert: z.lazy(() => StorySectionUpsertWithoutBlocksInputObjectSchema).optional(),
  connect: z.lazy(() => StorySectionWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => StorySectionUpdateToOneWithWhereWithoutBlocksInputObjectSchema), z.lazy(() => StorySectionUpdateWithoutBlocksInputObjectSchema), z.lazy(() => StorySectionUncheckedUpdateWithoutBlocksInputObjectSchema)]).optional()
}).strict();
export const StorySectionUpdateOneRequiredWithoutBlocksNestedInputObjectSchema: z.ZodType<Prisma.StorySectionUpdateOneRequiredWithoutBlocksNestedInput> = __makeSchema_StorySectionUpdateOneRequiredWithoutBlocksNestedInput_schema() as unknown as z.ZodType<Prisma.StorySectionUpdateOneRequiredWithoutBlocksNestedInput>;
export const StorySectionUpdateOneRequiredWithoutBlocksNestedInputObjectZodSchema = __makeSchema_StorySectionUpdateOneRequiredWithoutBlocksNestedInput_schema();


// File: StorySectionCreatebyInput.schema.ts
const __makeSchema_StorySectionCreatebyInput_schema = () => z.object({
  set: z.string().array()
}).strict();
export const StorySectionCreatebyInputObjectSchema: z.ZodType<Prisma.StorySectionCreatebyInput> = __makeSchema_StorySectionCreatebyInput_schema() as unknown as z.ZodType<Prisma.StorySectionCreatebyInput>;
export const StorySectionCreatebyInputObjectZodSchema = __makeSchema_StorySectionCreatebyInput_schema();


// File: ProjectCreateNestedOneWithoutStoryInput.schema.ts
const __makeSchema_ProjectCreateNestedOneWithoutStoryInput_schema = () => z.object({
  create: z.union([z.lazy(() => ProjectCreateWithoutStoryInputObjectSchema), z.lazy(() => ProjectUncheckedCreateWithoutStoryInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ProjectCreateOrConnectWithoutStoryInputObjectSchema).optional(),
  connect: z.lazy(() => ProjectWhereUniqueInputObjectSchema).optional()
}).strict();
export const ProjectCreateNestedOneWithoutStoryInputObjectSchema: z.ZodType<Prisma.ProjectCreateNestedOneWithoutStoryInput> = __makeSchema_ProjectCreateNestedOneWithoutStoryInput_schema() as unknown as z.ZodType<Prisma.ProjectCreateNestedOneWithoutStoryInput>;
export const ProjectCreateNestedOneWithoutStoryInputObjectZodSchema = __makeSchema_ProjectCreateNestedOneWithoutStoryInput_schema();


// File: StoryBlockCreateNestedManyWithoutSectionInput.schema.ts
const __makeSchema_StoryBlockCreateNestedManyWithoutSectionInput_schema = () => z.object({
  create: z.union([z.lazy(() => StoryBlockCreateWithoutSectionInputObjectSchema), z.lazy(() => StoryBlockCreateWithoutSectionInputObjectSchema).array(), z.lazy(() => StoryBlockUncheckedCreateWithoutSectionInputObjectSchema), z.lazy(() => StoryBlockUncheckedCreateWithoutSectionInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => StoryBlockCreateOrConnectWithoutSectionInputObjectSchema), z.lazy(() => StoryBlockCreateOrConnectWithoutSectionInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => StoryBlockCreateManySectionInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => StoryBlockWhereUniqueInputObjectSchema), z.lazy(() => StoryBlockWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const StoryBlockCreateNestedManyWithoutSectionInputObjectSchema: z.ZodType<Prisma.StoryBlockCreateNestedManyWithoutSectionInput> = __makeSchema_StoryBlockCreateNestedManyWithoutSectionInput_schema() as unknown as z.ZodType<Prisma.StoryBlockCreateNestedManyWithoutSectionInput>;
export const StoryBlockCreateNestedManyWithoutSectionInputObjectZodSchema = __makeSchema_StoryBlockCreateNestedManyWithoutSectionInput_schema();


// File: StoryBlockUncheckedCreateNestedManyWithoutSectionInput.schema.ts
const __makeSchema_StoryBlockUncheckedCreateNestedManyWithoutSectionInput_schema = () => z.object({
  create: z.union([z.lazy(() => StoryBlockCreateWithoutSectionInputObjectSchema), z.lazy(() => StoryBlockCreateWithoutSectionInputObjectSchema).array(), z.lazy(() => StoryBlockUncheckedCreateWithoutSectionInputObjectSchema), z.lazy(() => StoryBlockUncheckedCreateWithoutSectionInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => StoryBlockCreateOrConnectWithoutSectionInputObjectSchema), z.lazy(() => StoryBlockCreateOrConnectWithoutSectionInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => StoryBlockCreateManySectionInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => StoryBlockWhereUniqueInputObjectSchema), z.lazy(() => StoryBlockWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const StoryBlockUncheckedCreateNestedManyWithoutSectionInputObjectSchema: z.ZodType<Prisma.StoryBlockUncheckedCreateNestedManyWithoutSectionInput> = __makeSchema_StoryBlockUncheckedCreateNestedManyWithoutSectionInput_schema() as unknown as z.ZodType<Prisma.StoryBlockUncheckedCreateNestedManyWithoutSectionInput>;
export const StoryBlockUncheckedCreateNestedManyWithoutSectionInputObjectZodSchema = __makeSchema_StoryBlockUncheckedCreateNestedManyWithoutSectionInput_schema();


// File: StorySectionUpdatebyInput.schema.ts
const __makeSchema_StorySectionUpdatebyInput_schema = () => z.object({
  set: z.string().array().optional(),
  push: z.union([z.string(), z.string().array()]).optional()
}).strict();
export const StorySectionUpdatebyInputObjectSchema: z.ZodType<Prisma.StorySectionUpdatebyInput> = __makeSchema_StorySectionUpdatebyInput_schema() as unknown as z.ZodType<Prisma.StorySectionUpdatebyInput>;
export const StorySectionUpdatebyInputObjectZodSchema = __makeSchema_StorySectionUpdatebyInput_schema();


// File: ProjectUpdateOneRequiredWithoutStoryNestedInput.schema.ts
const __makeSchema_ProjectUpdateOneRequiredWithoutStoryNestedInput_schema = () => z.object({
  create: z.union([z.lazy(() => ProjectCreateWithoutStoryInputObjectSchema), z.lazy(() => ProjectUncheckedCreateWithoutStoryInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ProjectCreateOrConnectWithoutStoryInputObjectSchema).optional(),
  upsert: z.lazy(() => ProjectUpsertWithoutStoryInputObjectSchema).optional(),
  connect: z.lazy(() => ProjectWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => ProjectUpdateToOneWithWhereWithoutStoryInputObjectSchema), z.lazy(() => ProjectUpdateWithoutStoryInputObjectSchema), z.lazy(() => ProjectUncheckedUpdateWithoutStoryInputObjectSchema)]).optional()
}).strict();
export const ProjectUpdateOneRequiredWithoutStoryNestedInputObjectSchema: z.ZodType<Prisma.ProjectUpdateOneRequiredWithoutStoryNestedInput> = __makeSchema_ProjectUpdateOneRequiredWithoutStoryNestedInput_schema() as unknown as z.ZodType<Prisma.ProjectUpdateOneRequiredWithoutStoryNestedInput>;
export const ProjectUpdateOneRequiredWithoutStoryNestedInputObjectZodSchema = __makeSchema_ProjectUpdateOneRequiredWithoutStoryNestedInput_schema();


// File: StoryBlockUpdateManyWithoutSectionNestedInput.schema.ts
const __makeSchema_StoryBlockUpdateManyWithoutSectionNestedInput_schema = () => z.object({
  create: z.union([z.lazy(() => StoryBlockCreateWithoutSectionInputObjectSchema), z.lazy(() => StoryBlockCreateWithoutSectionInputObjectSchema).array(), z.lazy(() => StoryBlockUncheckedCreateWithoutSectionInputObjectSchema), z.lazy(() => StoryBlockUncheckedCreateWithoutSectionInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => StoryBlockCreateOrConnectWithoutSectionInputObjectSchema), z.lazy(() => StoryBlockCreateOrConnectWithoutSectionInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => StoryBlockUpsertWithWhereUniqueWithoutSectionInputObjectSchema), z.lazy(() => StoryBlockUpsertWithWhereUniqueWithoutSectionInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => StoryBlockCreateManySectionInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => StoryBlockWhereUniqueInputObjectSchema), z.lazy(() => StoryBlockWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => StoryBlockWhereUniqueInputObjectSchema), z.lazy(() => StoryBlockWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => StoryBlockWhereUniqueInputObjectSchema), z.lazy(() => StoryBlockWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => StoryBlockWhereUniqueInputObjectSchema), z.lazy(() => StoryBlockWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => StoryBlockUpdateWithWhereUniqueWithoutSectionInputObjectSchema), z.lazy(() => StoryBlockUpdateWithWhereUniqueWithoutSectionInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => StoryBlockUpdateManyWithWhereWithoutSectionInputObjectSchema), z.lazy(() => StoryBlockUpdateManyWithWhereWithoutSectionInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => StoryBlockScalarWhereInputObjectSchema), z.lazy(() => StoryBlockScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const StoryBlockUpdateManyWithoutSectionNestedInputObjectSchema: z.ZodType<Prisma.StoryBlockUpdateManyWithoutSectionNestedInput> = __makeSchema_StoryBlockUpdateManyWithoutSectionNestedInput_schema() as unknown as z.ZodType<Prisma.StoryBlockUpdateManyWithoutSectionNestedInput>;
export const StoryBlockUpdateManyWithoutSectionNestedInputObjectZodSchema = __makeSchema_StoryBlockUpdateManyWithoutSectionNestedInput_schema();


// File: StoryBlockUncheckedUpdateManyWithoutSectionNestedInput.schema.ts
const __makeSchema_StoryBlockUncheckedUpdateManyWithoutSectionNestedInput_schema = () => z.object({
  create: z.union([z.lazy(() => StoryBlockCreateWithoutSectionInputObjectSchema), z.lazy(() => StoryBlockCreateWithoutSectionInputObjectSchema).array(), z.lazy(() => StoryBlockUncheckedCreateWithoutSectionInputObjectSchema), z.lazy(() => StoryBlockUncheckedCreateWithoutSectionInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => StoryBlockCreateOrConnectWithoutSectionInputObjectSchema), z.lazy(() => StoryBlockCreateOrConnectWithoutSectionInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => StoryBlockUpsertWithWhereUniqueWithoutSectionInputObjectSchema), z.lazy(() => StoryBlockUpsertWithWhereUniqueWithoutSectionInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => StoryBlockCreateManySectionInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => StoryBlockWhereUniqueInputObjectSchema), z.lazy(() => StoryBlockWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => StoryBlockWhereUniqueInputObjectSchema), z.lazy(() => StoryBlockWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => StoryBlockWhereUniqueInputObjectSchema), z.lazy(() => StoryBlockWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => StoryBlockWhereUniqueInputObjectSchema), z.lazy(() => StoryBlockWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => StoryBlockUpdateWithWhereUniqueWithoutSectionInputObjectSchema), z.lazy(() => StoryBlockUpdateWithWhereUniqueWithoutSectionInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => StoryBlockUpdateManyWithWhereWithoutSectionInputObjectSchema), z.lazy(() => StoryBlockUpdateManyWithWhereWithoutSectionInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => StoryBlockScalarWhereInputObjectSchema), z.lazy(() => StoryBlockScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const StoryBlockUncheckedUpdateManyWithoutSectionNestedInputObjectSchema: z.ZodType<Prisma.StoryBlockUncheckedUpdateManyWithoutSectionNestedInput> = __makeSchema_StoryBlockUncheckedUpdateManyWithoutSectionNestedInput_schema() as unknown as z.ZodType<Prisma.StoryBlockUncheckedUpdateManyWithoutSectionNestedInput>;
export const StoryBlockUncheckedUpdateManyWithoutSectionNestedInputObjectZodSchema = __makeSchema_StoryBlockUncheckedUpdateManyWithoutSectionNestedInput_schema();


// File: StudioMemberCreaterotationInput.schema.ts
const __makeSchema_StudioMemberCreaterotationInput_schema = () => z.object({
  set: z.number().array()
}).strict();
export const StudioMemberCreaterotationInputObjectSchema: z.ZodType<Prisma.StudioMemberCreaterotationInput> = __makeSchema_StudioMemberCreaterotationInput_schema() as unknown as z.ZodType<Prisma.StudioMemberCreaterotationInput>;
export const StudioMemberCreaterotationInputObjectZodSchema = __makeSchema_StudioMemberCreaterotationInput_schema();


// File: StudioMemberCreateprojectsInput.schema.ts
const __makeSchema_StudioMemberCreateprojectsInput_schema = () => z.object({
  set: z.string().array()
}).strict();
export const StudioMemberCreateprojectsInputObjectSchema: z.ZodType<Prisma.StudioMemberCreateprojectsInput> = __makeSchema_StudioMemberCreateprojectsInput_schema() as unknown as z.ZodType<Prisma.StudioMemberCreateprojectsInput>;
export const StudioMemberCreateprojectsInputObjectZodSchema = __makeSchema_StudioMemberCreateprojectsInput_schema();


// File: ProjectCreateNestedManyWithoutTeamInput.schema.ts
const __makeSchema_ProjectCreateNestedManyWithoutTeamInput_schema = () => z.object({
  create: z.union([z.lazy(() => ProjectCreateWithoutTeamInputObjectSchema), z.lazy(() => ProjectCreateWithoutTeamInputObjectSchema).array(), z.lazy(() => ProjectUncheckedCreateWithoutTeamInputObjectSchema), z.lazy(() => ProjectUncheckedCreateWithoutTeamInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ProjectCreateOrConnectWithoutTeamInputObjectSchema), z.lazy(() => ProjectCreateOrConnectWithoutTeamInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => ProjectWhereUniqueInputObjectSchema), z.lazy(() => ProjectWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const ProjectCreateNestedManyWithoutTeamInputObjectSchema: z.ZodType<Prisma.ProjectCreateNestedManyWithoutTeamInput> = __makeSchema_ProjectCreateNestedManyWithoutTeamInput_schema() as unknown as z.ZodType<Prisma.ProjectCreateNestedManyWithoutTeamInput>;
export const ProjectCreateNestedManyWithoutTeamInputObjectZodSchema = __makeSchema_ProjectCreateNestedManyWithoutTeamInput_schema();


// File: ProjectUncheckedCreateNestedManyWithoutTeamInput.schema.ts
const __makeSchema_ProjectUncheckedCreateNestedManyWithoutTeamInput_schema = () => z.object({
  create: z.union([z.lazy(() => ProjectCreateWithoutTeamInputObjectSchema), z.lazy(() => ProjectCreateWithoutTeamInputObjectSchema).array(), z.lazy(() => ProjectUncheckedCreateWithoutTeamInputObjectSchema), z.lazy(() => ProjectUncheckedCreateWithoutTeamInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ProjectCreateOrConnectWithoutTeamInputObjectSchema), z.lazy(() => ProjectCreateOrConnectWithoutTeamInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => ProjectWhereUniqueInputObjectSchema), z.lazy(() => ProjectWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const ProjectUncheckedCreateNestedManyWithoutTeamInputObjectSchema: z.ZodType<Prisma.ProjectUncheckedCreateNestedManyWithoutTeamInput> = __makeSchema_ProjectUncheckedCreateNestedManyWithoutTeamInput_schema() as unknown as z.ZodType<Prisma.ProjectUncheckedCreateNestedManyWithoutTeamInput>;
export const ProjectUncheckedCreateNestedManyWithoutTeamInputObjectZodSchema = __makeSchema_ProjectUncheckedCreateNestedManyWithoutTeamInput_schema();


// File: FloatFieldUpdateOperationsInput.schema.ts
const __makeSchema_FloatFieldUpdateOperationsInput_schema = () => z.object({
  set: z.number().optional(),
  increment: z.number().optional(),
  decrement: z.number().optional(),
  multiply: z.number().optional(),
  divide: z.number().optional()
}).strict();
export const FloatFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.FloatFieldUpdateOperationsInput> = __makeSchema_FloatFieldUpdateOperationsInput_schema() as unknown as z.ZodType<Prisma.FloatFieldUpdateOperationsInput>;
export const FloatFieldUpdateOperationsInputObjectZodSchema = __makeSchema_FloatFieldUpdateOperationsInput_schema();


// File: StudioMemberUpdaterotationInput.schema.ts
const __makeSchema_StudioMemberUpdaterotationInput_schema = () => z.object({
  set: z.number().array().optional(),
  push: z.union([z.number(), z.number().array()]).optional()
}).strict();
export const StudioMemberUpdaterotationInputObjectSchema: z.ZodType<Prisma.StudioMemberUpdaterotationInput> = __makeSchema_StudioMemberUpdaterotationInput_schema() as unknown as z.ZodType<Prisma.StudioMemberUpdaterotationInput>;
export const StudioMemberUpdaterotationInputObjectZodSchema = __makeSchema_StudioMemberUpdaterotationInput_schema();


// File: StudioMemberUpdateprojectsInput.schema.ts
const __makeSchema_StudioMemberUpdateprojectsInput_schema = () => z.object({
  set: z.string().array().optional(),
  push: z.union([z.string(), z.string().array()]).optional()
}).strict();
export const StudioMemberUpdateprojectsInputObjectSchema: z.ZodType<Prisma.StudioMemberUpdateprojectsInput> = __makeSchema_StudioMemberUpdateprojectsInput_schema() as unknown as z.ZodType<Prisma.StudioMemberUpdateprojectsInput>;
export const StudioMemberUpdateprojectsInputObjectZodSchema = __makeSchema_StudioMemberUpdateprojectsInput_schema();


// File: BoolFieldUpdateOperationsInput.schema.ts
const __makeSchema_BoolFieldUpdateOperationsInput_schema = () => z.object({
  set: z.boolean().optional()
}).strict();
export const BoolFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.BoolFieldUpdateOperationsInput> = __makeSchema_BoolFieldUpdateOperationsInput_schema() as unknown as z.ZodType<Prisma.BoolFieldUpdateOperationsInput>;
export const BoolFieldUpdateOperationsInputObjectZodSchema = __makeSchema_BoolFieldUpdateOperationsInput_schema();


// File: ProjectUpdateManyWithoutTeamNestedInput.schema.ts
const __makeSchema_ProjectUpdateManyWithoutTeamNestedInput_schema = () => z.object({
  create: z.union([z.lazy(() => ProjectCreateWithoutTeamInputObjectSchema), z.lazy(() => ProjectCreateWithoutTeamInputObjectSchema).array(), z.lazy(() => ProjectUncheckedCreateWithoutTeamInputObjectSchema), z.lazy(() => ProjectUncheckedCreateWithoutTeamInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ProjectCreateOrConnectWithoutTeamInputObjectSchema), z.lazy(() => ProjectCreateOrConnectWithoutTeamInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => ProjectUpsertWithWhereUniqueWithoutTeamInputObjectSchema), z.lazy(() => ProjectUpsertWithWhereUniqueWithoutTeamInputObjectSchema).array()]).optional(),
  set: z.union([z.lazy(() => ProjectWhereUniqueInputObjectSchema), z.lazy(() => ProjectWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => ProjectWhereUniqueInputObjectSchema), z.lazy(() => ProjectWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => ProjectWhereUniqueInputObjectSchema), z.lazy(() => ProjectWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => ProjectWhereUniqueInputObjectSchema), z.lazy(() => ProjectWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => ProjectUpdateWithWhereUniqueWithoutTeamInputObjectSchema), z.lazy(() => ProjectUpdateWithWhereUniqueWithoutTeamInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => ProjectUpdateManyWithWhereWithoutTeamInputObjectSchema), z.lazy(() => ProjectUpdateManyWithWhereWithoutTeamInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => ProjectScalarWhereInputObjectSchema), z.lazy(() => ProjectScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const ProjectUpdateManyWithoutTeamNestedInputObjectSchema: z.ZodType<Prisma.ProjectUpdateManyWithoutTeamNestedInput> = __makeSchema_ProjectUpdateManyWithoutTeamNestedInput_schema() as unknown as z.ZodType<Prisma.ProjectUpdateManyWithoutTeamNestedInput>;
export const ProjectUpdateManyWithoutTeamNestedInputObjectZodSchema = __makeSchema_ProjectUpdateManyWithoutTeamNestedInput_schema();


// File: ProjectUncheckedUpdateManyWithoutTeamNestedInput.schema.ts
const __makeSchema_ProjectUncheckedUpdateManyWithoutTeamNestedInput_schema = () => z.object({
  create: z.union([z.lazy(() => ProjectCreateWithoutTeamInputObjectSchema), z.lazy(() => ProjectCreateWithoutTeamInputObjectSchema).array(), z.lazy(() => ProjectUncheckedCreateWithoutTeamInputObjectSchema), z.lazy(() => ProjectUncheckedCreateWithoutTeamInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ProjectCreateOrConnectWithoutTeamInputObjectSchema), z.lazy(() => ProjectCreateOrConnectWithoutTeamInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => ProjectUpsertWithWhereUniqueWithoutTeamInputObjectSchema), z.lazy(() => ProjectUpsertWithWhereUniqueWithoutTeamInputObjectSchema).array()]).optional(),
  set: z.union([z.lazy(() => ProjectWhereUniqueInputObjectSchema), z.lazy(() => ProjectWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => ProjectWhereUniqueInputObjectSchema), z.lazy(() => ProjectWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => ProjectWhereUniqueInputObjectSchema), z.lazy(() => ProjectWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => ProjectWhereUniqueInputObjectSchema), z.lazy(() => ProjectWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => ProjectUpdateWithWhereUniqueWithoutTeamInputObjectSchema), z.lazy(() => ProjectUpdateWithWhereUniqueWithoutTeamInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => ProjectUpdateManyWithWhereWithoutTeamInputObjectSchema), z.lazy(() => ProjectUpdateManyWithWhereWithoutTeamInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => ProjectScalarWhereInputObjectSchema), z.lazy(() => ProjectScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const ProjectUncheckedUpdateManyWithoutTeamNestedInputObjectSchema: z.ZodType<Prisma.ProjectUncheckedUpdateManyWithoutTeamNestedInput> = __makeSchema_ProjectUncheckedUpdateManyWithoutTeamNestedInput_schema() as unknown as z.ZodType<Prisma.ProjectUncheckedUpdateManyWithoutTeamNestedInput>;
export const ProjectUncheckedUpdateManyWithoutTeamNestedInputObjectZodSchema = __makeSchema_ProjectUncheckedUpdateManyWithoutTeamNestedInput_schema();


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


// File: NestedJsonFilter.schema.ts
const __makeSchema_NestedJsonFilter_schema = () => z.object({
  equals: jsonSchema.optional(),
  path: z.string().array().optional(),
  mode: QueryModeSchema.optional(),
  string_contains: z.string().optional(),
  string_starts_with: z.string().optional(),
  string_ends_with: z.string().optional(),
  array_starts_with: jsonSchema.optional().nullable(),
  array_ends_with: jsonSchema.optional().nullable(),
  array_contains: jsonSchema.optional().nullable(),
  lt: jsonSchema.optional(),
  lte: jsonSchema.optional(),
  gt: jsonSchema.optional(),
  gte: jsonSchema.optional(),
  not: jsonSchema.optional()
}).strict();
export const NestedJsonFilterObjectSchema: z.ZodType<Prisma.NestedJsonFilter> = __makeSchema_NestedJsonFilter_schema() as unknown as z.ZodType<Prisma.NestedJsonFilter>;
export const NestedJsonFilterObjectZodSchema = __makeSchema_NestedJsonFilter_schema();


// File: NestedJsonNullableFilter.schema.ts
const __makeSchema_NestedJsonNullableFilter_schema = () => z.object({
  equals: jsonSchema.optional(),
  path: z.string().array().optional(),
  mode: QueryModeSchema.optional(),
  string_contains: z.string().optional(),
  string_starts_with: z.string().optional(),
  string_ends_with: z.string().optional(),
  array_starts_with: jsonSchema.optional().nullable(),
  array_ends_with: jsonSchema.optional().nullable(),
  array_contains: jsonSchema.optional().nullable(),
  lt: jsonSchema.optional(),
  lte: jsonSchema.optional(),
  gt: jsonSchema.optional(),
  gte: jsonSchema.optional(),
  not: jsonSchema.optional()
}).strict();
export const NestedJsonNullableFilterObjectSchema: z.ZodType<Prisma.NestedJsonNullableFilter> = __makeSchema_NestedJsonNullableFilter_schema() as unknown as z.ZodType<Prisma.NestedJsonNullableFilter>;
export const NestedJsonNullableFilterObjectZodSchema = __makeSchema_NestedJsonNullableFilter_schema();


// File: NestedIntNullableWithAggregatesFilter.schema.ts

const nestedintnullablewithaggregatesfilterSchema = z.object({
  equals: z.number().int().optional().nullable(),
  in: z.number().int().array().optional().nullable(),
  notIn: z.number().int().array().optional().nullable(),
  lt: z.number().int().optional(),
  lte: z.number().int().optional(),
  gt: z.number().int().optional(),
  gte: z.number().int().optional(),
  not: z.union([z.number().int(), z.lazy(() => NestedIntNullableWithAggregatesFilterObjectSchema)]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterObjectSchema).optional(),
  _avg: z.lazy(() => NestedFloatNullableFilterObjectSchema).optional(),
  _sum: z.lazy(() => NestedIntNullableFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedIntNullableFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedIntNullableFilterObjectSchema).optional()
}).strict();
export const NestedIntNullableWithAggregatesFilterObjectSchema: z.ZodType<Prisma.NestedIntNullableWithAggregatesFilter> = nestedintnullablewithaggregatesfilterSchema as unknown as z.ZodType<Prisma.NestedIntNullableWithAggregatesFilter>;
export const NestedIntNullableWithAggregatesFilterObjectZodSchema = nestedintnullablewithaggregatesfilterSchema;


// File: NestedFloatNullableFilter.schema.ts


const nestedfloatnullablefilterSchema = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([z.number(), z.lazy(() => NestedFloatNullableFilterObjectSchema)]).optional().nullable()
}).strict();
export const NestedFloatNullableFilterObjectSchema: z.ZodType<Prisma.NestedFloatNullableFilter> = nestedfloatnullablefilterSchema as unknown as z.ZodType<Prisma.NestedFloatNullableFilter>;
export const NestedFloatNullableFilterObjectZodSchema = nestedfloatnullablefilterSchema;


// File: NestedBoolFilter.schema.ts


const nestedboolfilterSchema = z.object({
  equals: z.boolean().optional(),
  not: z.union([z.boolean(), z.lazy(() => NestedBoolFilterObjectSchema)]).optional()
}).strict();
export const NestedBoolFilterObjectSchema: z.ZodType<Prisma.NestedBoolFilter> = nestedboolfilterSchema as unknown as z.ZodType<Prisma.NestedBoolFilter>;
export const NestedBoolFilterObjectZodSchema = nestedboolfilterSchema;


// File: NestedFloatWithAggregatesFilter.schema.ts

const nestedfloatwithaggregatesfilterSchema = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([z.number(), z.lazy(() => NestedFloatWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterObjectSchema).optional(),
  _sum: z.lazy(() => NestedFloatFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedFloatFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedFloatFilterObjectSchema).optional()
}).strict();
export const NestedFloatWithAggregatesFilterObjectSchema: z.ZodType<Prisma.NestedFloatWithAggregatesFilter> = nestedfloatwithaggregatesfilterSchema as unknown as z.ZodType<Prisma.NestedFloatWithAggregatesFilter>;
export const NestedFloatWithAggregatesFilterObjectZodSchema = nestedfloatwithaggregatesfilterSchema;


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


// File: StudioMemberCreateWithoutTeamOfInput.schema.ts
const __makeSchema_StudioMemberCreateWithoutTeamOfInput_schema = () => z.object({
  slug: z.string(),
  position: z.number().int(),
  name: z.string(),
  role: z.union([JsonNullValueInputSchema, jsonSchema]),
  description: z.union([JsonNullValueInputSchema, jsonSchema]),
  bio: z.union([JsonNullValueInputSchema, jsonSchema]),
  model: z.string(),
  scale: z.number(),
  roughness: z.number(),
  metalness: z.number(),
  hair: z.string().optional().nullable(),
  rotation: z.union([z.lazy(() => StudioMemberCreaterotationInputObjectSchema), z.number().array()]).optional(),
  highlight: z.string(),
  socials: z.union([JsonNullValueInputSchema, jsonSchema]),
  labels: z.union([JsonNullValueInputSchema, jsonSchema]),
  projects: z.union([z.lazy(() => StudioMemberCreateprojectsInputObjectSchema), z.string().array()]).optional(),
  suite: z.boolean().optional(),
  facts: z.union([JsonNullValueInputSchema, jsonSchema]),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const StudioMemberCreateWithoutTeamOfInputObjectSchema: z.ZodType<Prisma.StudioMemberCreateWithoutTeamOfInput> = __makeSchema_StudioMemberCreateWithoutTeamOfInput_schema() as unknown as z.ZodType<Prisma.StudioMemberCreateWithoutTeamOfInput>;
export const StudioMemberCreateWithoutTeamOfInputObjectZodSchema = __makeSchema_StudioMemberCreateWithoutTeamOfInput_schema();


// File: StudioMemberUncheckedCreateWithoutTeamOfInput.schema.ts
const __makeSchema_StudioMemberUncheckedCreateWithoutTeamOfInput_schema = () => z.object({
  slug: z.string(),
  position: z.number().int(),
  name: z.string(),
  role: z.union([JsonNullValueInputSchema, jsonSchema]),
  description: z.union([JsonNullValueInputSchema, jsonSchema]),
  bio: z.union([JsonNullValueInputSchema, jsonSchema]),
  model: z.string(),
  scale: z.number(),
  roughness: z.number(),
  metalness: z.number(),
  hair: z.string().optional().nullable(),
  rotation: z.union([z.lazy(() => StudioMemberCreaterotationInputObjectSchema), z.number().array()]).optional(),
  highlight: z.string(),
  socials: z.union([JsonNullValueInputSchema, jsonSchema]),
  labels: z.union([JsonNullValueInputSchema, jsonSchema]),
  projects: z.union([z.lazy(() => StudioMemberCreateprojectsInputObjectSchema), z.string().array()]).optional(),
  suite: z.boolean().optional(),
  facts: z.union([JsonNullValueInputSchema, jsonSchema]),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const StudioMemberUncheckedCreateWithoutTeamOfInputObjectSchema: z.ZodType<Prisma.StudioMemberUncheckedCreateWithoutTeamOfInput> = __makeSchema_StudioMemberUncheckedCreateWithoutTeamOfInput_schema() as unknown as z.ZodType<Prisma.StudioMemberUncheckedCreateWithoutTeamOfInput>;
export const StudioMemberUncheckedCreateWithoutTeamOfInputObjectZodSchema = __makeSchema_StudioMemberUncheckedCreateWithoutTeamOfInput_schema();


// File: StudioMemberCreateOrConnectWithoutTeamOfInput.schema.ts
const __makeSchema_StudioMemberCreateOrConnectWithoutTeamOfInput_schema = () => z.object({
  where: z.lazy(() => StudioMemberWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => StudioMemberCreateWithoutTeamOfInputObjectSchema), z.lazy(() => StudioMemberUncheckedCreateWithoutTeamOfInputObjectSchema)])
}).strict();
export const StudioMemberCreateOrConnectWithoutTeamOfInputObjectSchema: z.ZodType<Prisma.StudioMemberCreateOrConnectWithoutTeamOfInput> = __makeSchema_StudioMemberCreateOrConnectWithoutTeamOfInput_schema() as unknown as z.ZodType<Prisma.StudioMemberCreateOrConnectWithoutTeamOfInput>;
export const StudioMemberCreateOrConnectWithoutTeamOfInputObjectZodSchema = __makeSchema_StudioMemberCreateOrConnectWithoutTeamOfInput_schema();


// File: StorySectionCreateWithoutProjectInput.schema.ts
const __makeSchema_StorySectionCreateWithoutProjectInput_schema = () => z.object({
  id: z.string().optional(),
  position: z.number().int(),
  title: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  by: z.union([z.lazy(() => StorySectionCreatebyInputObjectSchema), z.string().array()]).optional(),
  layout: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  blocks: z.lazy(() => StoryBlockCreateNestedManyWithoutSectionInputObjectSchema).optional()
}).strict();
export const StorySectionCreateWithoutProjectInputObjectSchema: z.ZodType<Prisma.StorySectionCreateWithoutProjectInput> = __makeSchema_StorySectionCreateWithoutProjectInput_schema() as unknown as z.ZodType<Prisma.StorySectionCreateWithoutProjectInput>;
export const StorySectionCreateWithoutProjectInputObjectZodSchema = __makeSchema_StorySectionCreateWithoutProjectInput_schema();


// File: StorySectionUncheckedCreateWithoutProjectInput.schema.ts
const __makeSchema_StorySectionUncheckedCreateWithoutProjectInput_schema = () => z.object({
  id: z.string().optional(),
  position: z.number().int(),
  title: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  by: z.union([z.lazy(() => StorySectionCreatebyInputObjectSchema), z.string().array()]).optional(),
  layout: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  blocks: z.lazy(() => StoryBlockUncheckedCreateNestedManyWithoutSectionInputObjectSchema).optional()
}).strict();
export const StorySectionUncheckedCreateWithoutProjectInputObjectSchema: z.ZodType<Prisma.StorySectionUncheckedCreateWithoutProjectInput> = __makeSchema_StorySectionUncheckedCreateWithoutProjectInput_schema() as unknown as z.ZodType<Prisma.StorySectionUncheckedCreateWithoutProjectInput>;
export const StorySectionUncheckedCreateWithoutProjectInputObjectZodSchema = __makeSchema_StorySectionUncheckedCreateWithoutProjectInput_schema();


// File: StorySectionCreateOrConnectWithoutProjectInput.schema.ts
const __makeSchema_StorySectionCreateOrConnectWithoutProjectInput_schema = () => z.object({
  where: z.lazy(() => StorySectionWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => StorySectionCreateWithoutProjectInputObjectSchema), z.lazy(() => StorySectionUncheckedCreateWithoutProjectInputObjectSchema)])
}).strict();
export const StorySectionCreateOrConnectWithoutProjectInputObjectSchema: z.ZodType<Prisma.StorySectionCreateOrConnectWithoutProjectInput> = __makeSchema_StorySectionCreateOrConnectWithoutProjectInput_schema() as unknown as z.ZodType<Prisma.StorySectionCreateOrConnectWithoutProjectInput>;
export const StorySectionCreateOrConnectWithoutProjectInputObjectZodSchema = __makeSchema_StorySectionCreateOrConnectWithoutProjectInput_schema();


// File: StorySectionCreateManyProjectInputEnvelope.schema.ts
const __makeSchema_StorySectionCreateManyProjectInputEnvelope_schema = () => z.object({
  data: z.union([z.lazy(() => StorySectionCreateManyProjectInputObjectSchema), z.lazy(() => StorySectionCreateManyProjectInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const StorySectionCreateManyProjectInputEnvelopeObjectSchema: z.ZodType<Prisma.StorySectionCreateManyProjectInputEnvelope> = __makeSchema_StorySectionCreateManyProjectInputEnvelope_schema() as unknown as z.ZodType<Prisma.StorySectionCreateManyProjectInputEnvelope>;
export const StorySectionCreateManyProjectInputEnvelopeObjectZodSchema = __makeSchema_StorySectionCreateManyProjectInputEnvelope_schema();


// File: StudioMemberUpsertWithWhereUniqueWithoutTeamOfInput.schema.ts
const __makeSchema_StudioMemberUpsertWithWhereUniqueWithoutTeamOfInput_schema = () => z.object({
  where: z.lazy(() => StudioMemberWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => StudioMemberUpdateWithoutTeamOfInputObjectSchema), z.lazy(() => StudioMemberUncheckedUpdateWithoutTeamOfInputObjectSchema)]),
  create: z.union([z.lazy(() => StudioMemberCreateWithoutTeamOfInputObjectSchema), z.lazy(() => StudioMemberUncheckedCreateWithoutTeamOfInputObjectSchema)])
}).strict();
export const StudioMemberUpsertWithWhereUniqueWithoutTeamOfInputObjectSchema: z.ZodType<Prisma.StudioMemberUpsertWithWhereUniqueWithoutTeamOfInput> = __makeSchema_StudioMemberUpsertWithWhereUniqueWithoutTeamOfInput_schema() as unknown as z.ZodType<Prisma.StudioMemberUpsertWithWhereUniqueWithoutTeamOfInput>;
export const StudioMemberUpsertWithWhereUniqueWithoutTeamOfInputObjectZodSchema = __makeSchema_StudioMemberUpsertWithWhereUniqueWithoutTeamOfInput_schema();


// File: StudioMemberUpdateWithWhereUniqueWithoutTeamOfInput.schema.ts
const __makeSchema_StudioMemberUpdateWithWhereUniqueWithoutTeamOfInput_schema = () => z.object({
  where: z.lazy(() => StudioMemberWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => StudioMemberUpdateWithoutTeamOfInputObjectSchema), z.lazy(() => StudioMemberUncheckedUpdateWithoutTeamOfInputObjectSchema)])
}).strict();
export const StudioMemberUpdateWithWhereUniqueWithoutTeamOfInputObjectSchema: z.ZodType<Prisma.StudioMemberUpdateWithWhereUniqueWithoutTeamOfInput> = __makeSchema_StudioMemberUpdateWithWhereUniqueWithoutTeamOfInput_schema() as unknown as z.ZodType<Prisma.StudioMemberUpdateWithWhereUniqueWithoutTeamOfInput>;
export const StudioMemberUpdateWithWhereUniqueWithoutTeamOfInputObjectZodSchema = __makeSchema_StudioMemberUpdateWithWhereUniqueWithoutTeamOfInput_schema();


// File: StudioMemberUpdateManyWithWhereWithoutTeamOfInput.schema.ts
const __makeSchema_StudioMemberUpdateManyWithWhereWithoutTeamOfInput_schema = () => z.object({
  where: z.lazy(() => StudioMemberScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => StudioMemberUpdateManyMutationInputObjectSchema), z.lazy(() => StudioMemberUncheckedUpdateManyWithoutTeamOfInputObjectSchema)])
}).strict();
export const StudioMemberUpdateManyWithWhereWithoutTeamOfInputObjectSchema: z.ZodType<Prisma.StudioMemberUpdateManyWithWhereWithoutTeamOfInput> = __makeSchema_StudioMemberUpdateManyWithWhereWithoutTeamOfInput_schema() as unknown as z.ZodType<Prisma.StudioMemberUpdateManyWithWhereWithoutTeamOfInput>;
export const StudioMemberUpdateManyWithWhereWithoutTeamOfInputObjectZodSchema = __makeSchema_StudioMemberUpdateManyWithWhereWithoutTeamOfInput_schema();


// File: StudioMemberScalarWhereInput.schema.ts

const studiomemberscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => StudioMemberScalarWhereInputObjectSchema), z.lazy(() => StudioMemberScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => StudioMemberScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => StudioMemberScalarWhereInputObjectSchema), z.lazy(() => StudioMemberScalarWhereInputObjectSchema).array()]).optional(),
  slug: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  position: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  role: z.lazy(() => JsonFilterObjectSchema).optional(),
  description: z.lazy(() => JsonFilterObjectSchema).optional(),
  bio: z.lazy(() => JsonFilterObjectSchema).optional(),
  model: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  scale: z.union([z.lazy(() => FloatFilterObjectSchema), z.number()]).optional(),
  roughness: z.union([z.lazy(() => FloatFilterObjectSchema), z.number()]).optional(),
  metalness: z.union([z.lazy(() => FloatFilterObjectSchema), z.number()]).optional(),
  hair: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  rotation: z.lazy(() => FloatNullableListFilterObjectSchema).optional(),
  highlight: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  socials: z.lazy(() => JsonFilterObjectSchema).optional(),
  labels: z.lazy(() => JsonFilterObjectSchema).optional(),
  projects: z.lazy(() => StringNullableListFilterObjectSchema).optional(),
  suite: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  facts: z.lazy(() => JsonFilterObjectSchema).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const StudioMemberScalarWhereInputObjectSchema: z.ZodType<Prisma.StudioMemberScalarWhereInput> = studiomemberscalarwhereinputSchema as unknown as z.ZodType<Prisma.StudioMemberScalarWhereInput>;
export const StudioMemberScalarWhereInputObjectZodSchema = studiomemberscalarwhereinputSchema;


// File: StorySectionUpsertWithWhereUniqueWithoutProjectInput.schema.ts
const __makeSchema_StorySectionUpsertWithWhereUniqueWithoutProjectInput_schema = () => z.object({
  where: z.lazy(() => StorySectionWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => StorySectionUpdateWithoutProjectInputObjectSchema), z.lazy(() => StorySectionUncheckedUpdateWithoutProjectInputObjectSchema)]),
  create: z.union([z.lazy(() => StorySectionCreateWithoutProjectInputObjectSchema), z.lazy(() => StorySectionUncheckedCreateWithoutProjectInputObjectSchema)])
}).strict();
export const StorySectionUpsertWithWhereUniqueWithoutProjectInputObjectSchema: z.ZodType<Prisma.StorySectionUpsertWithWhereUniqueWithoutProjectInput> = __makeSchema_StorySectionUpsertWithWhereUniqueWithoutProjectInput_schema() as unknown as z.ZodType<Prisma.StorySectionUpsertWithWhereUniqueWithoutProjectInput>;
export const StorySectionUpsertWithWhereUniqueWithoutProjectInputObjectZodSchema = __makeSchema_StorySectionUpsertWithWhereUniqueWithoutProjectInput_schema();


// File: StorySectionUpdateWithWhereUniqueWithoutProjectInput.schema.ts
const __makeSchema_StorySectionUpdateWithWhereUniqueWithoutProjectInput_schema = () => z.object({
  where: z.lazy(() => StorySectionWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => StorySectionUpdateWithoutProjectInputObjectSchema), z.lazy(() => StorySectionUncheckedUpdateWithoutProjectInputObjectSchema)])
}).strict();
export const StorySectionUpdateWithWhereUniqueWithoutProjectInputObjectSchema: z.ZodType<Prisma.StorySectionUpdateWithWhereUniqueWithoutProjectInput> = __makeSchema_StorySectionUpdateWithWhereUniqueWithoutProjectInput_schema() as unknown as z.ZodType<Prisma.StorySectionUpdateWithWhereUniqueWithoutProjectInput>;
export const StorySectionUpdateWithWhereUniqueWithoutProjectInputObjectZodSchema = __makeSchema_StorySectionUpdateWithWhereUniqueWithoutProjectInput_schema();


// File: StorySectionUpdateManyWithWhereWithoutProjectInput.schema.ts
const __makeSchema_StorySectionUpdateManyWithWhereWithoutProjectInput_schema = () => z.object({
  where: z.lazy(() => StorySectionScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => StorySectionUpdateManyMutationInputObjectSchema), z.lazy(() => StorySectionUncheckedUpdateManyWithoutProjectInputObjectSchema)])
}).strict();
export const StorySectionUpdateManyWithWhereWithoutProjectInputObjectSchema: z.ZodType<Prisma.StorySectionUpdateManyWithWhereWithoutProjectInput> = __makeSchema_StorySectionUpdateManyWithWhereWithoutProjectInput_schema() as unknown as z.ZodType<Prisma.StorySectionUpdateManyWithWhereWithoutProjectInput>;
export const StorySectionUpdateManyWithWhereWithoutProjectInputObjectZodSchema = __makeSchema_StorySectionUpdateManyWithWhereWithoutProjectInput_schema();


// File: StorySectionScalarWhereInput.schema.ts

const storysectionscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => StorySectionScalarWhereInputObjectSchema), z.lazy(() => StorySectionScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => StorySectionScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => StorySectionScalarWhereInputObjectSchema), z.lazy(() => StorySectionScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  projectSlug: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  position: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  title: z.lazy(() => JsonNullableFilterObjectSchema).optional(),
  by: z.lazy(() => StringNullableListFilterObjectSchema).optional(),
  layout: z.lazy(() => JsonNullableFilterObjectSchema).optional()
}).strict();
export const StorySectionScalarWhereInputObjectSchema: z.ZodType<Prisma.StorySectionScalarWhereInput> = storysectionscalarwhereinputSchema as unknown as z.ZodType<Prisma.StorySectionScalarWhereInput>;
export const StorySectionScalarWhereInputObjectZodSchema = storysectionscalarwhereinputSchema;


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


// File: SiteDailyVisitorCreateWithoutVisitorInput.schema.ts
const __makeSchema_SiteDailyVisitorCreateWithoutVisitorInput_schema = () => z.object({
  firstVisitAt: z.coerce.date().optional(),
  day: z.lazy(() => SiteDailyStatCreateNestedOneWithoutVisitorsInputObjectSchema)
}).strict();
export const SiteDailyVisitorCreateWithoutVisitorInputObjectSchema: z.ZodType<Prisma.SiteDailyVisitorCreateWithoutVisitorInput> = __makeSchema_SiteDailyVisitorCreateWithoutVisitorInput_schema() as unknown as z.ZodType<Prisma.SiteDailyVisitorCreateWithoutVisitorInput>;
export const SiteDailyVisitorCreateWithoutVisitorInputObjectZodSchema = __makeSchema_SiteDailyVisitorCreateWithoutVisitorInput_schema();


// File: SiteDailyVisitorUncheckedCreateWithoutVisitorInput.schema.ts
const __makeSchema_SiteDailyVisitorUncheckedCreateWithoutVisitorInput_schema = () => z.object({
  date: z.coerce.date(),
  firstVisitAt: z.coerce.date().optional()
}).strict();
export const SiteDailyVisitorUncheckedCreateWithoutVisitorInputObjectSchema: z.ZodType<Prisma.SiteDailyVisitorUncheckedCreateWithoutVisitorInput> = __makeSchema_SiteDailyVisitorUncheckedCreateWithoutVisitorInput_schema() as unknown as z.ZodType<Prisma.SiteDailyVisitorUncheckedCreateWithoutVisitorInput>;
export const SiteDailyVisitorUncheckedCreateWithoutVisitorInputObjectZodSchema = __makeSchema_SiteDailyVisitorUncheckedCreateWithoutVisitorInput_schema();


// File: SiteDailyVisitorCreateOrConnectWithoutVisitorInput.schema.ts
const __makeSchema_SiteDailyVisitorCreateOrConnectWithoutVisitorInput_schema = () => z.object({
  where: z.lazy(() => SiteDailyVisitorWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => SiteDailyVisitorCreateWithoutVisitorInputObjectSchema), z.lazy(() => SiteDailyVisitorUncheckedCreateWithoutVisitorInputObjectSchema)])
}).strict();
export const SiteDailyVisitorCreateOrConnectWithoutVisitorInputObjectSchema: z.ZodType<Prisma.SiteDailyVisitorCreateOrConnectWithoutVisitorInput> = __makeSchema_SiteDailyVisitorCreateOrConnectWithoutVisitorInput_schema() as unknown as z.ZodType<Prisma.SiteDailyVisitorCreateOrConnectWithoutVisitorInput>;
export const SiteDailyVisitorCreateOrConnectWithoutVisitorInputObjectZodSchema = __makeSchema_SiteDailyVisitorCreateOrConnectWithoutVisitorInput_schema();


// File: SiteDailyVisitorCreateManyVisitorInputEnvelope.schema.ts
const __makeSchema_SiteDailyVisitorCreateManyVisitorInputEnvelope_schema = () => z.object({
  data: z.union([z.lazy(() => SiteDailyVisitorCreateManyVisitorInputObjectSchema), z.lazy(() => SiteDailyVisitorCreateManyVisitorInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const SiteDailyVisitorCreateManyVisitorInputEnvelopeObjectSchema: z.ZodType<Prisma.SiteDailyVisitorCreateManyVisitorInputEnvelope> = __makeSchema_SiteDailyVisitorCreateManyVisitorInputEnvelope_schema() as unknown as z.ZodType<Prisma.SiteDailyVisitorCreateManyVisitorInputEnvelope>;
export const SiteDailyVisitorCreateManyVisitorInputEnvelopeObjectZodSchema = __makeSchema_SiteDailyVisitorCreateManyVisitorInputEnvelope_schema();


// File: SiteDailyVisitorUpsertWithWhereUniqueWithoutVisitorInput.schema.ts
const __makeSchema_SiteDailyVisitorUpsertWithWhereUniqueWithoutVisitorInput_schema = () => z.object({
  where: z.lazy(() => SiteDailyVisitorWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => SiteDailyVisitorUpdateWithoutVisitorInputObjectSchema), z.lazy(() => SiteDailyVisitorUncheckedUpdateWithoutVisitorInputObjectSchema)]),
  create: z.union([z.lazy(() => SiteDailyVisitorCreateWithoutVisitorInputObjectSchema), z.lazy(() => SiteDailyVisitorUncheckedCreateWithoutVisitorInputObjectSchema)])
}).strict();
export const SiteDailyVisitorUpsertWithWhereUniqueWithoutVisitorInputObjectSchema: z.ZodType<Prisma.SiteDailyVisitorUpsertWithWhereUniqueWithoutVisitorInput> = __makeSchema_SiteDailyVisitorUpsertWithWhereUniqueWithoutVisitorInput_schema() as unknown as z.ZodType<Prisma.SiteDailyVisitorUpsertWithWhereUniqueWithoutVisitorInput>;
export const SiteDailyVisitorUpsertWithWhereUniqueWithoutVisitorInputObjectZodSchema = __makeSchema_SiteDailyVisitorUpsertWithWhereUniqueWithoutVisitorInput_schema();


// File: SiteDailyVisitorUpdateWithWhereUniqueWithoutVisitorInput.schema.ts
const __makeSchema_SiteDailyVisitorUpdateWithWhereUniqueWithoutVisitorInput_schema = () => z.object({
  where: z.lazy(() => SiteDailyVisitorWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => SiteDailyVisitorUpdateWithoutVisitorInputObjectSchema), z.lazy(() => SiteDailyVisitorUncheckedUpdateWithoutVisitorInputObjectSchema)])
}).strict();
export const SiteDailyVisitorUpdateWithWhereUniqueWithoutVisitorInputObjectSchema: z.ZodType<Prisma.SiteDailyVisitorUpdateWithWhereUniqueWithoutVisitorInput> = __makeSchema_SiteDailyVisitorUpdateWithWhereUniqueWithoutVisitorInput_schema() as unknown as z.ZodType<Prisma.SiteDailyVisitorUpdateWithWhereUniqueWithoutVisitorInput>;
export const SiteDailyVisitorUpdateWithWhereUniqueWithoutVisitorInputObjectZodSchema = __makeSchema_SiteDailyVisitorUpdateWithWhereUniqueWithoutVisitorInput_schema();


// File: SiteDailyVisitorUpdateManyWithWhereWithoutVisitorInput.schema.ts
const __makeSchema_SiteDailyVisitorUpdateManyWithWhereWithoutVisitorInput_schema = () => z.object({
  where: z.lazy(() => SiteDailyVisitorScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => SiteDailyVisitorUpdateManyMutationInputObjectSchema), z.lazy(() => SiteDailyVisitorUncheckedUpdateManyWithoutVisitorInputObjectSchema)])
}).strict();
export const SiteDailyVisitorUpdateManyWithWhereWithoutVisitorInputObjectSchema: z.ZodType<Prisma.SiteDailyVisitorUpdateManyWithWhereWithoutVisitorInput> = __makeSchema_SiteDailyVisitorUpdateManyWithWhereWithoutVisitorInput_schema() as unknown as z.ZodType<Prisma.SiteDailyVisitorUpdateManyWithWhereWithoutVisitorInput>;
export const SiteDailyVisitorUpdateManyWithWhereWithoutVisitorInputObjectZodSchema = __makeSchema_SiteDailyVisitorUpdateManyWithWhereWithoutVisitorInput_schema();


// File: SiteDailyVisitorScalarWhereInput.schema.ts

const sitedailyvisitorscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => SiteDailyVisitorScalarWhereInputObjectSchema), z.lazy(() => SiteDailyVisitorScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => SiteDailyVisitorScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => SiteDailyVisitorScalarWhereInputObjectSchema), z.lazy(() => SiteDailyVisitorScalarWhereInputObjectSchema).array()]).optional(),
  date: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  visitorId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  firstVisitAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const SiteDailyVisitorScalarWhereInputObjectSchema: z.ZodType<Prisma.SiteDailyVisitorScalarWhereInput> = sitedailyvisitorscalarwhereinputSchema as unknown as z.ZodType<Prisma.SiteDailyVisitorScalarWhereInput>;
export const SiteDailyVisitorScalarWhereInputObjectZodSchema = sitedailyvisitorscalarwhereinputSchema;


// File: SiteDailyVisitorCreateWithoutDayInput.schema.ts
const __makeSchema_SiteDailyVisitorCreateWithoutDayInput_schema = () => z.object({
  firstVisitAt: z.coerce.date().optional(),
  visitor: z.lazy(() => SiteVisitorCreateNestedOneWithoutDailyVisitsInputObjectSchema)
}).strict();
export const SiteDailyVisitorCreateWithoutDayInputObjectSchema: z.ZodType<Prisma.SiteDailyVisitorCreateWithoutDayInput> = __makeSchema_SiteDailyVisitorCreateWithoutDayInput_schema() as unknown as z.ZodType<Prisma.SiteDailyVisitorCreateWithoutDayInput>;
export const SiteDailyVisitorCreateWithoutDayInputObjectZodSchema = __makeSchema_SiteDailyVisitorCreateWithoutDayInput_schema();


// File: SiteDailyVisitorUncheckedCreateWithoutDayInput.schema.ts
const __makeSchema_SiteDailyVisitorUncheckedCreateWithoutDayInput_schema = () => z.object({
  visitorId: z.string(),
  firstVisitAt: z.coerce.date().optional()
}).strict();
export const SiteDailyVisitorUncheckedCreateWithoutDayInputObjectSchema: z.ZodType<Prisma.SiteDailyVisitorUncheckedCreateWithoutDayInput> = __makeSchema_SiteDailyVisitorUncheckedCreateWithoutDayInput_schema() as unknown as z.ZodType<Prisma.SiteDailyVisitorUncheckedCreateWithoutDayInput>;
export const SiteDailyVisitorUncheckedCreateWithoutDayInputObjectZodSchema = __makeSchema_SiteDailyVisitorUncheckedCreateWithoutDayInput_schema();


// File: SiteDailyVisitorCreateOrConnectWithoutDayInput.schema.ts
const __makeSchema_SiteDailyVisitorCreateOrConnectWithoutDayInput_schema = () => z.object({
  where: z.lazy(() => SiteDailyVisitorWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => SiteDailyVisitorCreateWithoutDayInputObjectSchema), z.lazy(() => SiteDailyVisitorUncheckedCreateWithoutDayInputObjectSchema)])
}).strict();
export const SiteDailyVisitorCreateOrConnectWithoutDayInputObjectSchema: z.ZodType<Prisma.SiteDailyVisitorCreateOrConnectWithoutDayInput> = __makeSchema_SiteDailyVisitorCreateOrConnectWithoutDayInput_schema() as unknown as z.ZodType<Prisma.SiteDailyVisitorCreateOrConnectWithoutDayInput>;
export const SiteDailyVisitorCreateOrConnectWithoutDayInputObjectZodSchema = __makeSchema_SiteDailyVisitorCreateOrConnectWithoutDayInput_schema();


// File: SiteDailyVisitorCreateManyDayInputEnvelope.schema.ts
const __makeSchema_SiteDailyVisitorCreateManyDayInputEnvelope_schema = () => z.object({
  data: z.union([z.lazy(() => SiteDailyVisitorCreateManyDayInputObjectSchema), z.lazy(() => SiteDailyVisitorCreateManyDayInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const SiteDailyVisitorCreateManyDayInputEnvelopeObjectSchema: z.ZodType<Prisma.SiteDailyVisitorCreateManyDayInputEnvelope> = __makeSchema_SiteDailyVisitorCreateManyDayInputEnvelope_schema() as unknown as z.ZodType<Prisma.SiteDailyVisitorCreateManyDayInputEnvelope>;
export const SiteDailyVisitorCreateManyDayInputEnvelopeObjectZodSchema = __makeSchema_SiteDailyVisitorCreateManyDayInputEnvelope_schema();


// File: SiteDailyVisitorUpsertWithWhereUniqueWithoutDayInput.schema.ts
const __makeSchema_SiteDailyVisitorUpsertWithWhereUniqueWithoutDayInput_schema = () => z.object({
  where: z.lazy(() => SiteDailyVisitorWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => SiteDailyVisitorUpdateWithoutDayInputObjectSchema), z.lazy(() => SiteDailyVisitorUncheckedUpdateWithoutDayInputObjectSchema)]),
  create: z.union([z.lazy(() => SiteDailyVisitorCreateWithoutDayInputObjectSchema), z.lazy(() => SiteDailyVisitorUncheckedCreateWithoutDayInputObjectSchema)])
}).strict();
export const SiteDailyVisitorUpsertWithWhereUniqueWithoutDayInputObjectSchema: z.ZodType<Prisma.SiteDailyVisitorUpsertWithWhereUniqueWithoutDayInput> = __makeSchema_SiteDailyVisitorUpsertWithWhereUniqueWithoutDayInput_schema() as unknown as z.ZodType<Prisma.SiteDailyVisitorUpsertWithWhereUniqueWithoutDayInput>;
export const SiteDailyVisitorUpsertWithWhereUniqueWithoutDayInputObjectZodSchema = __makeSchema_SiteDailyVisitorUpsertWithWhereUniqueWithoutDayInput_schema();


// File: SiteDailyVisitorUpdateWithWhereUniqueWithoutDayInput.schema.ts
const __makeSchema_SiteDailyVisitorUpdateWithWhereUniqueWithoutDayInput_schema = () => z.object({
  where: z.lazy(() => SiteDailyVisitorWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => SiteDailyVisitorUpdateWithoutDayInputObjectSchema), z.lazy(() => SiteDailyVisitorUncheckedUpdateWithoutDayInputObjectSchema)])
}).strict();
export const SiteDailyVisitorUpdateWithWhereUniqueWithoutDayInputObjectSchema: z.ZodType<Prisma.SiteDailyVisitorUpdateWithWhereUniqueWithoutDayInput> = __makeSchema_SiteDailyVisitorUpdateWithWhereUniqueWithoutDayInput_schema() as unknown as z.ZodType<Prisma.SiteDailyVisitorUpdateWithWhereUniqueWithoutDayInput>;
export const SiteDailyVisitorUpdateWithWhereUniqueWithoutDayInputObjectZodSchema = __makeSchema_SiteDailyVisitorUpdateWithWhereUniqueWithoutDayInput_schema();


// File: SiteDailyVisitorUpdateManyWithWhereWithoutDayInput.schema.ts
const __makeSchema_SiteDailyVisitorUpdateManyWithWhereWithoutDayInput_schema = () => z.object({
  where: z.lazy(() => SiteDailyVisitorScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => SiteDailyVisitorUpdateManyMutationInputObjectSchema), z.lazy(() => SiteDailyVisitorUncheckedUpdateManyWithoutDayInputObjectSchema)])
}).strict();
export const SiteDailyVisitorUpdateManyWithWhereWithoutDayInputObjectSchema: z.ZodType<Prisma.SiteDailyVisitorUpdateManyWithWhereWithoutDayInput> = __makeSchema_SiteDailyVisitorUpdateManyWithWhereWithoutDayInput_schema() as unknown as z.ZodType<Prisma.SiteDailyVisitorUpdateManyWithWhereWithoutDayInput>;
export const SiteDailyVisitorUpdateManyWithWhereWithoutDayInputObjectZodSchema = __makeSchema_SiteDailyVisitorUpdateManyWithWhereWithoutDayInput_schema();


// File: SiteDailyStatCreateWithoutVisitorsInput.schema.ts
const __makeSchema_SiteDailyStatCreateWithoutVisitorsInput_schema = () => z.object({
  date: z.coerce.date(),
  visits: z.number().int().optional(),
  uniqueVisitors: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const SiteDailyStatCreateWithoutVisitorsInputObjectSchema: z.ZodType<Prisma.SiteDailyStatCreateWithoutVisitorsInput> = __makeSchema_SiteDailyStatCreateWithoutVisitorsInput_schema() as unknown as z.ZodType<Prisma.SiteDailyStatCreateWithoutVisitorsInput>;
export const SiteDailyStatCreateWithoutVisitorsInputObjectZodSchema = __makeSchema_SiteDailyStatCreateWithoutVisitorsInput_schema();


// File: SiteDailyStatUncheckedCreateWithoutVisitorsInput.schema.ts
const __makeSchema_SiteDailyStatUncheckedCreateWithoutVisitorsInput_schema = () => z.object({
  date: z.coerce.date(),
  visits: z.number().int().optional(),
  uniqueVisitors: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const SiteDailyStatUncheckedCreateWithoutVisitorsInputObjectSchema: z.ZodType<Prisma.SiteDailyStatUncheckedCreateWithoutVisitorsInput> = __makeSchema_SiteDailyStatUncheckedCreateWithoutVisitorsInput_schema() as unknown as z.ZodType<Prisma.SiteDailyStatUncheckedCreateWithoutVisitorsInput>;
export const SiteDailyStatUncheckedCreateWithoutVisitorsInputObjectZodSchema = __makeSchema_SiteDailyStatUncheckedCreateWithoutVisitorsInput_schema();


// File: SiteDailyStatCreateOrConnectWithoutVisitorsInput.schema.ts
const __makeSchema_SiteDailyStatCreateOrConnectWithoutVisitorsInput_schema = () => z.object({
  where: z.lazy(() => SiteDailyStatWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => SiteDailyStatCreateWithoutVisitorsInputObjectSchema), z.lazy(() => SiteDailyStatUncheckedCreateWithoutVisitorsInputObjectSchema)])
}).strict();
export const SiteDailyStatCreateOrConnectWithoutVisitorsInputObjectSchema: z.ZodType<Prisma.SiteDailyStatCreateOrConnectWithoutVisitorsInput> = __makeSchema_SiteDailyStatCreateOrConnectWithoutVisitorsInput_schema() as unknown as z.ZodType<Prisma.SiteDailyStatCreateOrConnectWithoutVisitorsInput>;
export const SiteDailyStatCreateOrConnectWithoutVisitorsInputObjectZodSchema = __makeSchema_SiteDailyStatCreateOrConnectWithoutVisitorsInput_schema();


// File: SiteVisitorCreateWithoutDailyVisitsInput.schema.ts
const __makeSchema_SiteVisitorCreateWithoutDailyVisitsInput_schema = () => z.object({
  id: z.string().optional(),
  visitorKey: z.string(),
  firstSeenAt: z.coerce.date().optional(),
  lastSeenAt: z.coerce.date().optional()
}).strict();
export const SiteVisitorCreateWithoutDailyVisitsInputObjectSchema: z.ZodType<Prisma.SiteVisitorCreateWithoutDailyVisitsInput> = __makeSchema_SiteVisitorCreateWithoutDailyVisitsInput_schema() as unknown as z.ZodType<Prisma.SiteVisitorCreateWithoutDailyVisitsInput>;
export const SiteVisitorCreateWithoutDailyVisitsInputObjectZodSchema = __makeSchema_SiteVisitorCreateWithoutDailyVisitsInput_schema();


// File: SiteVisitorUncheckedCreateWithoutDailyVisitsInput.schema.ts
const __makeSchema_SiteVisitorUncheckedCreateWithoutDailyVisitsInput_schema = () => z.object({
  id: z.string().optional(),
  visitorKey: z.string(),
  firstSeenAt: z.coerce.date().optional(),
  lastSeenAt: z.coerce.date().optional()
}).strict();
export const SiteVisitorUncheckedCreateWithoutDailyVisitsInputObjectSchema: z.ZodType<Prisma.SiteVisitorUncheckedCreateWithoutDailyVisitsInput> = __makeSchema_SiteVisitorUncheckedCreateWithoutDailyVisitsInput_schema() as unknown as z.ZodType<Prisma.SiteVisitorUncheckedCreateWithoutDailyVisitsInput>;
export const SiteVisitorUncheckedCreateWithoutDailyVisitsInputObjectZodSchema = __makeSchema_SiteVisitorUncheckedCreateWithoutDailyVisitsInput_schema();


// File: SiteVisitorCreateOrConnectWithoutDailyVisitsInput.schema.ts
const __makeSchema_SiteVisitorCreateOrConnectWithoutDailyVisitsInput_schema = () => z.object({
  where: z.lazy(() => SiteVisitorWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => SiteVisitorCreateWithoutDailyVisitsInputObjectSchema), z.lazy(() => SiteVisitorUncheckedCreateWithoutDailyVisitsInputObjectSchema)])
}).strict();
export const SiteVisitorCreateOrConnectWithoutDailyVisitsInputObjectSchema: z.ZodType<Prisma.SiteVisitorCreateOrConnectWithoutDailyVisitsInput> = __makeSchema_SiteVisitorCreateOrConnectWithoutDailyVisitsInput_schema() as unknown as z.ZodType<Prisma.SiteVisitorCreateOrConnectWithoutDailyVisitsInput>;
export const SiteVisitorCreateOrConnectWithoutDailyVisitsInputObjectZodSchema = __makeSchema_SiteVisitorCreateOrConnectWithoutDailyVisitsInput_schema();


// File: SiteDailyStatUpsertWithoutVisitorsInput.schema.ts
const __makeSchema_SiteDailyStatUpsertWithoutVisitorsInput_schema = () => z.object({
  update: z.union([z.lazy(() => SiteDailyStatUpdateWithoutVisitorsInputObjectSchema), z.lazy(() => SiteDailyStatUncheckedUpdateWithoutVisitorsInputObjectSchema)]),
  create: z.union([z.lazy(() => SiteDailyStatCreateWithoutVisitorsInputObjectSchema), z.lazy(() => SiteDailyStatUncheckedCreateWithoutVisitorsInputObjectSchema)]),
  where: z.lazy(() => SiteDailyStatWhereInputObjectSchema).optional()
}).strict();
export const SiteDailyStatUpsertWithoutVisitorsInputObjectSchema: z.ZodType<Prisma.SiteDailyStatUpsertWithoutVisitorsInput> = __makeSchema_SiteDailyStatUpsertWithoutVisitorsInput_schema() as unknown as z.ZodType<Prisma.SiteDailyStatUpsertWithoutVisitorsInput>;
export const SiteDailyStatUpsertWithoutVisitorsInputObjectZodSchema = __makeSchema_SiteDailyStatUpsertWithoutVisitorsInput_schema();


// File: SiteDailyStatUpdateToOneWithWhereWithoutVisitorsInput.schema.ts
const __makeSchema_SiteDailyStatUpdateToOneWithWhereWithoutVisitorsInput_schema = () => z.object({
  where: z.lazy(() => SiteDailyStatWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => SiteDailyStatUpdateWithoutVisitorsInputObjectSchema), z.lazy(() => SiteDailyStatUncheckedUpdateWithoutVisitorsInputObjectSchema)])
}).strict();
export const SiteDailyStatUpdateToOneWithWhereWithoutVisitorsInputObjectSchema: z.ZodType<Prisma.SiteDailyStatUpdateToOneWithWhereWithoutVisitorsInput> = __makeSchema_SiteDailyStatUpdateToOneWithWhereWithoutVisitorsInput_schema() as unknown as z.ZodType<Prisma.SiteDailyStatUpdateToOneWithWhereWithoutVisitorsInput>;
export const SiteDailyStatUpdateToOneWithWhereWithoutVisitorsInputObjectZodSchema = __makeSchema_SiteDailyStatUpdateToOneWithWhereWithoutVisitorsInput_schema();


// File: SiteDailyStatUpdateWithoutVisitorsInput.schema.ts
const __makeSchema_SiteDailyStatUpdateWithoutVisitorsInput_schema = () => z.object({
  date: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  visits: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  uniqueVisitors: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const SiteDailyStatUpdateWithoutVisitorsInputObjectSchema: z.ZodType<Prisma.SiteDailyStatUpdateWithoutVisitorsInput> = __makeSchema_SiteDailyStatUpdateWithoutVisitorsInput_schema() as unknown as z.ZodType<Prisma.SiteDailyStatUpdateWithoutVisitorsInput>;
export const SiteDailyStatUpdateWithoutVisitorsInputObjectZodSchema = __makeSchema_SiteDailyStatUpdateWithoutVisitorsInput_schema();


// File: SiteDailyStatUncheckedUpdateWithoutVisitorsInput.schema.ts
const __makeSchema_SiteDailyStatUncheckedUpdateWithoutVisitorsInput_schema = () => z.object({
  date: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  visits: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  uniqueVisitors: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const SiteDailyStatUncheckedUpdateWithoutVisitorsInputObjectSchema: z.ZodType<Prisma.SiteDailyStatUncheckedUpdateWithoutVisitorsInput> = __makeSchema_SiteDailyStatUncheckedUpdateWithoutVisitorsInput_schema() as unknown as z.ZodType<Prisma.SiteDailyStatUncheckedUpdateWithoutVisitorsInput>;
export const SiteDailyStatUncheckedUpdateWithoutVisitorsInputObjectZodSchema = __makeSchema_SiteDailyStatUncheckedUpdateWithoutVisitorsInput_schema();


// File: SiteVisitorUpsertWithoutDailyVisitsInput.schema.ts
const __makeSchema_SiteVisitorUpsertWithoutDailyVisitsInput_schema = () => z.object({
  update: z.union([z.lazy(() => SiteVisitorUpdateWithoutDailyVisitsInputObjectSchema), z.lazy(() => SiteVisitorUncheckedUpdateWithoutDailyVisitsInputObjectSchema)]),
  create: z.union([z.lazy(() => SiteVisitorCreateWithoutDailyVisitsInputObjectSchema), z.lazy(() => SiteVisitorUncheckedCreateWithoutDailyVisitsInputObjectSchema)]),
  where: z.lazy(() => SiteVisitorWhereInputObjectSchema).optional()
}).strict();
export const SiteVisitorUpsertWithoutDailyVisitsInputObjectSchema: z.ZodType<Prisma.SiteVisitorUpsertWithoutDailyVisitsInput> = __makeSchema_SiteVisitorUpsertWithoutDailyVisitsInput_schema() as unknown as z.ZodType<Prisma.SiteVisitorUpsertWithoutDailyVisitsInput>;
export const SiteVisitorUpsertWithoutDailyVisitsInputObjectZodSchema = __makeSchema_SiteVisitorUpsertWithoutDailyVisitsInput_schema();


// File: SiteVisitorUpdateToOneWithWhereWithoutDailyVisitsInput.schema.ts
const __makeSchema_SiteVisitorUpdateToOneWithWhereWithoutDailyVisitsInput_schema = () => z.object({
  where: z.lazy(() => SiteVisitorWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => SiteVisitorUpdateWithoutDailyVisitsInputObjectSchema), z.lazy(() => SiteVisitorUncheckedUpdateWithoutDailyVisitsInputObjectSchema)])
}).strict();
export const SiteVisitorUpdateToOneWithWhereWithoutDailyVisitsInputObjectSchema: z.ZodType<Prisma.SiteVisitorUpdateToOneWithWhereWithoutDailyVisitsInput> = __makeSchema_SiteVisitorUpdateToOneWithWhereWithoutDailyVisitsInput_schema() as unknown as z.ZodType<Prisma.SiteVisitorUpdateToOneWithWhereWithoutDailyVisitsInput>;
export const SiteVisitorUpdateToOneWithWhereWithoutDailyVisitsInputObjectZodSchema = __makeSchema_SiteVisitorUpdateToOneWithWhereWithoutDailyVisitsInput_schema();


// File: SiteVisitorUpdateWithoutDailyVisitsInput.schema.ts
const __makeSchema_SiteVisitorUpdateWithoutDailyVisitsInput_schema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  visitorKey: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  firstSeenAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  lastSeenAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const SiteVisitorUpdateWithoutDailyVisitsInputObjectSchema: z.ZodType<Prisma.SiteVisitorUpdateWithoutDailyVisitsInput> = __makeSchema_SiteVisitorUpdateWithoutDailyVisitsInput_schema() as unknown as z.ZodType<Prisma.SiteVisitorUpdateWithoutDailyVisitsInput>;
export const SiteVisitorUpdateWithoutDailyVisitsInputObjectZodSchema = __makeSchema_SiteVisitorUpdateWithoutDailyVisitsInput_schema();


// File: SiteVisitorUncheckedUpdateWithoutDailyVisitsInput.schema.ts
const __makeSchema_SiteVisitorUncheckedUpdateWithoutDailyVisitsInput_schema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  visitorKey: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  firstSeenAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  lastSeenAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const SiteVisitorUncheckedUpdateWithoutDailyVisitsInputObjectSchema: z.ZodType<Prisma.SiteVisitorUncheckedUpdateWithoutDailyVisitsInput> = __makeSchema_SiteVisitorUncheckedUpdateWithoutDailyVisitsInput_schema() as unknown as z.ZodType<Prisma.SiteVisitorUncheckedUpdateWithoutDailyVisitsInput>;
export const SiteVisitorUncheckedUpdateWithoutDailyVisitsInputObjectZodSchema = __makeSchema_SiteVisitorUncheckedUpdateWithoutDailyVisitsInput_schema();


// File: StorySectionCreateWithoutBlocksInput.schema.ts
const __makeSchema_StorySectionCreateWithoutBlocksInput_schema = () => z.object({
  id: z.string().optional(),
  position: z.number().int(),
  title: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  by: z.union([z.lazy(() => StorySectionCreatebyInputObjectSchema), z.string().array()]).optional(),
  layout: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  project: z.lazy(() => ProjectCreateNestedOneWithoutStoryInputObjectSchema)
}).strict();
export const StorySectionCreateWithoutBlocksInputObjectSchema: z.ZodType<Prisma.StorySectionCreateWithoutBlocksInput> = __makeSchema_StorySectionCreateWithoutBlocksInput_schema() as unknown as z.ZodType<Prisma.StorySectionCreateWithoutBlocksInput>;
export const StorySectionCreateWithoutBlocksInputObjectZodSchema = __makeSchema_StorySectionCreateWithoutBlocksInput_schema();


// File: StorySectionUncheckedCreateWithoutBlocksInput.schema.ts
const __makeSchema_StorySectionUncheckedCreateWithoutBlocksInput_schema = () => z.object({
  id: z.string().optional(),
  projectSlug: z.string(),
  position: z.number().int(),
  title: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  by: z.union([z.lazy(() => StorySectionCreatebyInputObjectSchema), z.string().array()]).optional(),
  layout: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional()
}).strict();
export const StorySectionUncheckedCreateWithoutBlocksInputObjectSchema: z.ZodType<Prisma.StorySectionUncheckedCreateWithoutBlocksInput> = __makeSchema_StorySectionUncheckedCreateWithoutBlocksInput_schema() as unknown as z.ZodType<Prisma.StorySectionUncheckedCreateWithoutBlocksInput>;
export const StorySectionUncheckedCreateWithoutBlocksInputObjectZodSchema = __makeSchema_StorySectionUncheckedCreateWithoutBlocksInput_schema();


// File: StorySectionCreateOrConnectWithoutBlocksInput.schema.ts
const __makeSchema_StorySectionCreateOrConnectWithoutBlocksInput_schema = () => z.object({
  where: z.lazy(() => StorySectionWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => StorySectionCreateWithoutBlocksInputObjectSchema), z.lazy(() => StorySectionUncheckedCreateWithoutBlocksInputObjectSchema)])
}).strict();
export const StorySectionCreateOrConnectWithoutBlocksInputObjectSchema: z.ZodType<Prisma.StorySectionCreateOrConnectWithoutBlocksInput> = __makeSchema_StorySectionCreateOrConnectWithoutBlocksInput_schema() as unknown as z.ZodType<Prisma.StorySectionCreateOrConnectWithoutBlocksInput>;
export const StorySectionCreateOrConnectWithoutBlocksInputObjectZodSchema = __makeSchema_StorySectionCreateOrConnectWithoutBlocksInput_schema();


// File: StorySectionUpsertWithoutBlocksInput.schema.ts
const __makeSchema_StorySectionUpsertWithoutBlocksInput_schema = () => z.object({
  update: z.union([z.lazy(() => StorySectionUpdateWithoutBlocksInputObjectSchema), z.lazy(() => StorySectionUncheckedUpdateWithoutBlocksInputObjectSchema)]),
  create: z.union([z.lazy(() => StorySectionCreateWithoutBlocksInputObjectSchema), z.lazy(() => StorySectionUncheckedCreateWithoutBlocksInputObjectSchema)]),
  where: z.lazy(() => StorySectionWhereInputObjectSchema).optional()
}).strict();
export const StorySectionUpsertWithoutBlocksInputObjectSchema: z.ZodType<Prisma.StorySectionUpsertWithoutBlocksInput> = __makeSchema_StorySectionUpsertWithoutBlocksInput_schema() as unknown as z.ZodType<Prisma.StorySectionUpsertWithoutBlocksInput>;
export const StorySectionUpsertWithoutBlocksInputObjectZodSchema = __makeSchema_StorySectionUpsertWithoutBlocksInput_schema();


// File: StorySectionUpdateToOneWithWhereWithoutBlocksInput.schema.ts
const __makeSchema_StorySectionUpdateToOneWithWhereWithoutBlocksInput_schema = () => z.object({
  where: z.lazy(() => StorySectionWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => StorySectionUpdateWithoutBlocksInputObjectSchema), z.lazy(() => StorySectionUncheckedUpdateWithoutBlocksInputObjectSchema)])
}).strict();
export const StorySectionUpdateToOneWithWhereWithoutBlocksInputObjectSchema: z.ZodType<Prisma.StorySectionUpdateToOneWithWhereWithoutBlocksInput> = __makeSchema_StorySectionUpdateToOneWithWhereWithoutBlocksInput_schema() as unknown as z.ZodType<Prisma.StorySectionUpdateToOneWithWhereWithoutBlocksInput>;
export const StorySectionUpdateToOneWithWhereWithoutBlocksInputObjectZodSchema = __makeSchema_StorySectionUpdateToOneWithWhereWithoutBlocksInput_schema();


// File: StorySectionUpdateWithoutBlocksInput.schema.ts
const __makeSchema_StorySectionUpdateWithoutBlocksInput_schema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  position: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  title: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  by: z.union([z.lazy(() => StorySectionUpdatebyInputObjectSchema), z.string().array()]).optional(),
  layout: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  project: z.lazy(() => ProjectUpdateOneRequiredWithoutStoryNestedInputObjectSchema).optional()
}).strict();
export const StorySectionUpdateWithoutBlocksInputObjectSchema: z.ZodType<Prisma.StorySectionUpdateWithoutBlocksInput> = __makeSchema_StorySectionUpdateWithoutBlocksInput_schema() as unknown as z.ZodType<Prisma.StorySectionUpdateWithoutBlocksInput>;
export const StorySectionUpdateWithoutBlocksInputObjectZodSchema = __makeSchema_StorySectionUpdateWithoutBlocksInput_schema();


// File: StorySectionUncheckedUpdateWithoutBlocksInput.schema.ts
const __makeSchema_StorySectionUncheckedUpdateWithoutBlocksInput_schema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  projectSlug: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  position: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  title: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  by: z.union([z.lazy(() => StorySectionUpdatebyInputObjectSchema), z.string().array()]).optional(),
  layout: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional()
}).strict();
export const StorySectionUncheckedUpdateWithoutBlocksInputObjectSchema: z.ZodType<Prisma.StorySectionUncheckedUpdateWithoutBlocksInput> = __makeSchema_StorySectionUncheckedUpdateWithoutBlocksInput_schema() as unknown as z.ZodType<Prisma.StorySectionUncheckedUpdateWithoutBlocksInput>;
export const StorySectionUncheckedUpdateWithoutBlocksInputObjectZodSchema = __makeSchema_StorySectionUncheckedUpdateWithoutBlocksInput_schema();


// File: ProjectCreateWithoutStoryInput.schema.ts
const __makeSchema_ProjectCreateWithoutStoryInput_schema = () => z.object({
  slug: z.string(),
  position: z.number().int(),
  name: z.string(),
  weeks: z.number().int(),
  link: z.string().optional().nullable(),
  image: z.string(),
  video: z.string().optional().nullable(),
  coverEffect: z.string().optional().nullable(),
  description: z.union([JsonNullValueInputSchema, jsonSchema]),
  metaDescription: z.union([JsonNullValueInputSchema, jsonSchema]),
  challenge: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  services: z.union([z.lazy(() => ProjectCreateservicesInputObjectSchema), z.string().array()]).optional(),
  techStack: z.union([z.lazy(() => ProjectCreatetechStackInputObjectSchema), z.string().array()]).optional(),
  date: z.string(),
  gallery: z.union([z.lazy(() => ProjectCreategalleryInputObjectSchema), z.string().array()]).optional(),
  notes: z.union([z.lazy(() => ProjectCreatenotesInputObjectSchema), jsonSchema.array()]).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  team: z.lazy(() => StudioMemberCreateNestedManyWithoutTeamOfInputObjectSchema).optional()
}).strict();
export const ProjectCreateWithoutStoryInputObjectSchema: z.ZodType<Prisma.ProjectCreateWithoutStoryInput> = __makeSchema_ProjectCreateWithoutStoryInput_schema() as unknown as z.ZodType<Prisma.ProjectCreateWithoutStoryInput>;
export const ProjectCreateWithoutStoryInputObjectZodSchema = __makeSchema_ProjectCreateWithoutStoryInput_schema();


// File: ProjectUncheckedCreateWithoutStoryInput.schema.ts
const __makeSchema_ProjectUncheckedCreateWithoutStoryInput_schema = () => z.object({
  slug: z.string(),
  position: z.number().int(),
  name: z.string(),
  weeks: z.number().int(),
  link: z.string().optional().nullable(),
  image: z.string(),
  video: z.string().optional().nullable(),
  coverEffect: z.string().optional().nullable(),
  description: z.union([JsonNullValueInputSchema, jsonSchema]),
  metaDescription: z.union([JsonNullValueInputSchema, jsonSchema]),
  challenge: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  services: z.union([z.lazy(() => ProjectCreateservicesInputObjectSchema), z.string().array()]).optional(),
  techStack: z.union([z.lazy(() => ProjectCreatetechStackInputObjectSchema), z.string().array()]).optional(),
  date: z.string(),
  gallery: z.union([z.lazy(() => ProjectCreategalleryInputObjectSchema), z.string().array()]).optional(),
  notes: z.union([z.lazy(() => ProjectCreatenotesInputObjectSchema), jsonSchema.array()]).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  team: z.lazy(() => StudioMemberUncheckedCreateNestedManyWithoutTeamOfInputObjectSchema).optional()
}).strict();
export const ProjectUncheckedCreateWithoutStoryInputObjectSchema: z.ZodType<Prisma.ProjectUncheckedCreateWithoutStoryInput> = __makeSchema_ProjectUncheckedCreateWithoutStoryInput_schema() as unknown as z.ZodType<Prisma.ProjectUncheckedCreateWithoutStoryInput>;
export const ProjectUncheckedCreateWithoutStoryInputObjectZodSchema = __makeSchema_ProjectUncheckedCreateWithoutStoryInput_schema();


// File: ProjectCreateOrConnectWithoutStoryInput.schema.ts
const __makeSchema_ProjectCreateOrConnectWithoutStoryInput_schema = () => z.object({
  where: z.lazy(() => ProjectWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ProjectCreateWithoutStoryInputObjectSchema), z.lazy(() => ProjectUncheckedCreateWithoutStoryInputObjectSchema)])
}).strict();
export const ProjectCreateOrConnectWithoutStoryInputObjectSchema: z.ZodType<Prisma.ProjectCreateOrConnectWithoutStoryInput> = __makeSchema_ProjectCreateOrConnectWithoutStoryInput_schema() as unknown as z.ZodType<Prisma.ProjectCreateOrConnectWithoutStoryInput>;
export const ProjectCreateOrConnectWithoutStoryInputObjectZodSchema = __makeSchema_ProjectCreateOrConnectWithoutStoryInput_schema();


// File: StoryBlockCreateWithoutSectionInput.schema.ts
const __makeSchema_StoryBlockCreateWithoutSectionInput_schema = () => z.object({
  id: z.string().optional(),
  position: z.number().int(),
  type: z.string(),
  media: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  eyebrow: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  title: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  text: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  tags: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  logos: z.union([z.lazy(() => StoryBlockCreatelogosInputObjectSchema), z.string().array()]).optional(),
  tiles: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  link: z.string().optional().nullable(),
  linkLabel: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  effect: z.string().optional().nullable(),
  smalls: z.string().optional().nullable(),
  cols: z.number().int().optional().nullable(),
  font: z.string().optional().nullable(),
  fontFamily: z.string().optional().nullable(),
  description: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  secondFont: z.string().optional().nullable(),
  secondFontFamily: z.string().optional().nullable(),
  secondDescription: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  swatches: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional()
}).strict();
export const StoryBlockCreateWithoutSectionInputObjectSchema: z.ZodType<Prisma.StoryBlockCreateWithoutSectionInput> = __makeSchema_StoryBlockCreateWithoutSectionInput_schema() as unknown as z.ZodType<Prisma.StoryBlockCreateWithoutSectionInput>;
export const StoryBlockCreateWithoutSectionInputObjectZodSchema = __makeSchema_StoryBlockCreateWithoutSectionInput_schema();


// File: StoryBlockUncheckedCreateWithoutSectionInput.schema.ts
const __makeSchema_StoryBlockUncheckedCreateWithoutSectionInput_schema = () => z.object({
  id: z.string().optional(),
  position: z.number().int(),
  type: z.string(),
  media: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  eyebrow: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  title: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  text: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  tags: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  logos: z.union([z.lazy(() => StoryBlockCreatelogosInputObjectSchema), z.string().array()]).optional(),
  tiles: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  link: z.string().optional().nullable(),
  linkLabel: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  effect: z.string().optional().nullable(),
  smalls: z.string().optional().nullable(),
  cols: z.number().int().optional().nullable(),
  font: z.string().optional().nullable(),
  fontFamily: z.string().optional().nullable(),
  description: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  secondFont: z.string().optional().nullable(),
  secondFontFamily: z.string().optional().nullable(),
  secondDescription: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  swatches: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional()
}).strict();
export const StoryBlockUncheckedCreateWithoutSectionInputObjectSchema: z.ZodType<Prisma.StoryBlockUncheckedCreateWithoutSectionInput> = __makeSchema_StoryBlockUncheckedCreateWithoutSectionInput_schema() as unknown as z.ZodType<Prisma.StoryBlockUncheckedCreateWithoutSectionInput>;
export const StoryBlockUncheckedCreateWithoutSectionInputObjectZodSchema = __makeSchema_StoryBlockUncheckedCreateWithoutSectionInput_schema();


// File: StoryBlockCreateOrConnectWithoutSectionInput.schema.ts
const __makeSchema_StoryBlockCreateOrConnectWithoutSectionInput_schema = () => z.object({
  where: z.lazy(() => StoryBlockWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => StoryBlockCreateWithoutSectionInputObjectSchema), z.lazy(() => StoryBlockUncheckedCreateWithoutSectionInputObjectSchema)])
}).strict();
export const StoryBlockCreateOrConnectWithoutSectionInputObjectSchema: z.ZodType<Prisma.StoryBlockCreateOrConnectWithoutSectionInput> = __makeSchema_StoryBlockCreateOrConnectWithoutSectionInput_schema() as unknown as z.ZodType<Prisma.StoryBlockCreateOrConnectWithoutSectionInput>;
export const StoryBlockCreateOrConnectWithoutSectionInputObjectZodSchema = __makeSchema_StoryBlockCreateOrConnectWithoutSectionInput_schema();


// File: StoryBlockCreateManySectionInputEnvelope.schema.ts
const __makeSchema_StoryBlockCreateManySectionInputEnvelope_schema = () => z.object({
  data: z.union([z.lazy(() => StoryBlockCreateManySectionInputObjectSchema), z.lazy(() => StoryBlockCreateManySectionInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const StoryBlockCreateManySectionInputEnvelopeObjectSchema: z.ZodType<Prisma.StoryBlockCreateManySectionInputEnvelope> = __makeSchema_StoryBlockCreateManySectionInputEnvelope_schema() as unknown as z.ZodType<Prisma.StoryBlockCreateManySectionInputEnvelope>;
export const StoryBlockCreateManySectionInputEnvelopeObjectZodSchema = __makeSchema_StoryBlockCreateManySectionInputEnvelope_schema();


// File: ProjectUpsertWithoutStoryInput.schema.ts
const __makeSchema_ProjectUpsertWithoutStoryInput_schema = () => z.object({
  update: z.union([z.lazy(() => ProjectUpdateWithoutStoryInputObjectSchema), z.lazy(() => ProjectUncheckedUpdateWithoutStoryInputObjectSchema)]),
  create: z.union([z.lazy(() => ProjectCreateWithoutStoryInputObjectSchema), z.lazy(() => ProjectUncheckedCreateWithoutStoryInputObjectSchema)]),
  where: z.lazy(() => ProjectWhereInputObjectSchema).optional()
}).strict();
export const ProjectUpsertWithoutStoryInputObjectSchema: z.ZodType<Prisma.ProjectUpsertWithoutStoryInput> = __makeSchema_ProjectUpsertWithoutStoryInput_schema() as unknown as z.ZodType<Prisma.ProjectUpsertWithoutStoryInput>;
export const ProjectUpsertWithoutStoryInputObjectZodSchema = __makeSchema_ProjectUpsertWithoutStoryInput_schema();


// File: ProjectUpdateToOneWithWhereWithoutStoryInput.schema.ts
const __makeSchema_ProjectUpdateToOneWithWhereWithoutStoryInput_schema = () => z.object({
  where: z.lazy(() => ProjectWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => ProjectUpdateWithoutStoryInputObjectSchema), z.lazy(() => ProjectUncheckedUpdateWithoutStoryInputObjectSchema)])
}).strict();
export const ProjectUpdateToOneWithWhereWithoutStoryInputObjectSchema: z.ZodType<Prisma.ProjectUpdateToOneWithWhereWithoutStoryInput> = __makeSchema_ProjectUpdateToOneWithWhereWithoutStoryInput_schema() as unknown as z.ZodType<Prisma.ProjectUpdateToOneWithWhereWithoutStoryInput>;
export const ProjectUpdateToOneWithWhereWithoutStoryInputObjectZodSchema = __makeSchema_ProjectUpdateToOneWithWhereWithoutStoryInput_schema();


// File: ProjectUpdateWithoutStoryInput.schema.ts
const __makeSchema_ProjectUpdateWithoutStoryInput_schema = () => z.object({
  slug: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  position: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  weeks: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  link: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  image: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  video: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  coverEffect: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  description: z.union([JsonNullValueInputSchema, jsonSchema]).optional(),
  metaDescription: z.union([JsonNullValueInputSchema, jsonSchema]).optional(),
  challenge: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  services: z.union([z.lazy(() => ProjectUpdateservicesInputObjectSchema), z.string().array()]).optional(),
  techStack: z.union([z.lazy(() => ProjectUpdatetechStackInputObjectSchema), z.string().array()]).optional(),
  date: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  gallery: z.union([z.lazy(() => ProjectUpdategalleryInputObjectSchema), z.string().array()]).optional(),
  notes: z.union([z.lazy(() => ProjectUpdatenotesInputObjectSchema), jsonSchema.array()]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  team: z.lazy(() => StudioMemberUpdateManyWithoutTeamOfNestedInputObjectSchema).optional()
}).strict();
export const ProjectUpdateWithoutStoryInputObjectSchema: z.ZodType<Prisma.ProjectUpdateWithoutStoryInput> = __makeSchema_ProjectUpdateWithoutStoryInput_schema() as unknown as z.ZodType<Prisma.ProjectUpdateWithoutStoryInput>;
export const ProjectUpdateWithoutStoryInputObjectZodSchema = __makeSchema_ProjectUpdateWithoutStoryInput_schema();


// File: ProjectUncheckedUpdateWithoutStoryInput.schema.ts
const __makeSchema_ProjectUncheckedUpdateWithoutStoryInput_schema = () => z.object({
  slug: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  position: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  weeks: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  link: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  image: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  video: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  coverEffect: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  description: z.union([JsonNullValueInputSchema, jsonSchema]).optional(),
  metaDescription: z.union([JsonNullValueInputSchema, jsonSchema]).optional(),
  challenge: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  services: z.union([z.lazy(() => ProjectUpdateservicesInputObjectSchema), z.string().array()]).optional(),
  techStack: z.union([z.lazy(() => ProjectUpdatetechStackInputObjectSchema), z.string().array()]).optional(),
  date: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  gallery: z.union([z.lazy(() => ProjectUpdategalleryInputObjectSchema), z.string().array()]).optional(),
  notes: z.union([z.lazy(() => ProjectUpdatenotesInputObjectSchema), jsonSchema.array()]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  team: z.lazy(() => StudioMemberUncheckedUpdateManyWithoutTeamOfNestedInputObjectSchema).optional()
}).strict();
export const ProjectUncheckedUpdateWithoutStoryInputObjectSchema: z.ZodType<Prisma.ProjectUncheckedUpdateWithoutStoryInput> = __makeSchema_ProjectUncheckedUpdateWithoutStoryInput_schema() as unknown as z.ZodType<Prisma.ProjectUncheckedUpdateWithoutStoryInput>;
export const ProjectUncheckedUpdateWithoutStoryInputObjectZodSchema = __makeSchema_ProjectUncheckedUpdateWithoutStoryInput_schema();


// File: StoryBlockUpsertWithWhereUniqueWithoutSectionInput.schema.ts
const __makeSchema_StoryBlockUpsertWithWhereUniqueWithoutSectionInput_schema = () => z.object({
  where: z.lazy(() => StoryBlockWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => StoryBlockUpdateWithoutSectionInputObjectSchema), z.lazy(() => StoryBlockUncheckedUpdateWithoutSectionInputObjectSchema)]),
  create: z.union([z.lazy(() => StoryBlockCreateWithoutSectionInputObjectSchema), z.lazy(() => StoryBlockUncheckedCreateWithoutSectionInputObjectSchema)])
}).strict();
export const StoryBlockUpsertWithWhereUniqueWithoutSectionInputObjectSchema: z.ZodType<Prisma.StoryBlockUpsertWithWhereUniqueWithoutSectionInput> = __makeSchema_StoryBlockUpsertWithWhereUniqueWithoutSectionInput_schema() as unknown as z.ZodType<Prisma.StoryBlockUpsertWithWhereUniqueWithoutSectionInput>;
export const StoryBlockUpsertWithWhereUniqueWithoutSectionInputObjectZodSchema = __makeSchema_StoryBlockUpsertWithWhereUniqueWithoutSectionInput_schema();


// File: StoryBlockUpdateWithWhereUniqueWithoutSectionInput.schema.ts
const __makeSchema_StoryBlockUpdateWithWhereUniqueWithoutSectionInput_schema = () => z.object({
  where: z.lazy(() => StoryBlockWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => StoryBlockUpdateWithoutSectionInputObjectSchema), z.lazy(() => StoryBlockUncheckedUpdateWithoutSectionInputObjectSchema)])
}).strict();
export const StoryBlockUpdateWithWhereUniqueWithoutSectionInputObjectSchema: z.ZodType<Prisma.StoryBlockUpdateWithWhereUniqueWithoutSectionInput> = __makeSchema_StoryBlockUpdateWithWhereUniqueWithoutSectionInput_schema() as unknown as z.ZodType<Prisma.StoryBlockUpdateWithWhereUniqueWithoutSectionInput>;
export const StoryBlockUpdateWithWhereUniqueWithoutSectionInputObjectZodSchema = __makeSchema_StoryBlockUpdateWithWhereUniqueWithoutSectionInput_schema();


// File: StoryBlockUpdateManyWithWhereWithoutSectionInput.schema.ts
const __makeSchema_StoryBlockUpdateManyWithWhereWithoutSectionInput_schema = () => z.object({
  where: z.lazy(() => StoryBlockScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => StoryBlockUpdateManyMutationInputObjectSchema), z.lazy(() => StoryBlockUncheckedUpdateManyWithoutSectionInputObjectSchema)])
}).strict();
export const StoryBlockUpdateManyWithWhereWithoutSectionInputObjectSchema: z.ZodType<Prisma.StoryBlockUpdateManyWithWhereWithoutSectionInput> = __makeSchema_StoryBlockUpdateManyWithWhereWithoutSectionInput_schema() as unknown as z.ZodType<Prisma.StoryBlockUpdateManyWithWhereWithoutSectionInput>;
export const StoryBlockUpdateManyWithWhereWithoutSectionInputObjectZodSchema = __makeSchema_StoryBlockUpdateManyWithWhereWithoutSectionInput_schema();


// File: StoryBlockScalarWhereInput.schema.ts

const storyblockscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => StoryBlockScalarWhereInputObjectSchema), z.lazy(() => StoryBlockScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => StoryBlockScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => StoryBlockScalarWhereInputObjectSchema), z.lazy(() => StoryBlockScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  sectionId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  position: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  type: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  media: z.lazy(() => JsonNullableFilterObjectSchema).optional(),
  eyebrow: z.lazy(() => JsonNullableFilterObjectSchema).optional(),
  title: z.lazy(() => JsonNullableFilterObjectSchema).optional(),
  text: z.lazy(() => JsonNullableFilterObjectSchema).optional(),
  tags: z.lazy(() => JsonNullableFilterObjectSchema).optional(),
  logos: z.lazy(() => StringNullableListFilterObjectSchema).optional(),
  tiles: z.lazy(() => JsonNullableFilterObjectSchema).optional(),
  link: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  linkLabel: z.lazy(() => JsonNullableFilterObjectSchema).optional(),
  effect: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  smalls: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  cols: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  font: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  fontFamily: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  description: z.lazy(() => JsonNullableFilterObjectSchema).optional(),
  secondFont: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  secondFontFamily: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  secondDescription: z.lazy(() => JsonNullableFilterObjectSchema).optional(),
  swatches: z.lazy(() => JsonNullableFilterObjectSchema).optional()
}).strict();
export const StoryBlockScalarWhereInputObjectSchema: z.ZodType<Prisma.StoryBlockScalarWhereInput> = storyblockscalarwhereinputSchema as unknown as z.ZodType<Prisma.StoryBlockScalarWhereInput>;
export const StoryBlockScalarWhereInputObjectZodSchema = storyblockscalarwhereinputSchema;


// File: ProjectCreateWithoutTeamInput.schema.ts
const __makeSchema_ProjectCreateWithoutTeamInput_schema = () => z.object({
  slug: z.string(),
  position: z.number().int(),
  name: z.string(),
  weeks: z.number().int(),
  link: z.string().optional().nullable(),
  image: z.string(),
  video: z.string().optional().nullable(),
  coverEffect: z.string().optional().nullable(),
  description: z.union([JsonNullValueInputSchema, jsonSchema]),
  metaDescription: z.union([JsonNullValueInputSchema, jsonSchema]),
  challenge: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  services: z.union([z.lazy(() => ProjectCreateservicesInputObjectSchema), z.string().array()]).optional(),
  techStack: z.union([z.lazy(() => ProjectCreatetechStackInputObjectSchema), z.string().array()]).optional(),
  date: z.string(),
  gallery: z.union([z.lazy(() => ProjectCreategalleryInputObjectSchema), z.string().array()]).optional(),
  notes: z.union([z.lazy(() => ProjectCreatenotesInputObjectSchema), jsonSchema.array()]).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  story: z.lazy(() => StorySectionCreateNestedManyWithoutProjectInputObjectSchema).optional()
}).strict();
export const ProjectCreateWithoutTeamInputObjectSchema: z.ZodType<Prisma.ProjectCreateWithoutTeamInput> = __makeSchema_ProjectCreateWithoutTeamInput_schema() as unknown as z.ZodType<Prisma.ProjectCreateWithoutTeamInput>;
export const ProjectCreateWithoutTeamInputObjectZodSchema = __makeSchema_ProjectCreateWithoutTeamInput_schema();


// File: ProjectUncheckedCreateWithoutTeamInput.schema.ts
const __makeSchema_ProjectUncheckedCreateWithoutTeamInput_schema = () => z.object({
  slug: z.string(),
  position: z.number().int(),
  name: z.string(),
  weeks: z.number().int(),
  link: z.string().optional().nullable(),
  image: z.string(),
  video: z.string().optional().nullable(),
  coverEffect: z.string().optional().nullable(),
  description: z.union([JsonNullValueInputSchema, jsonSchema]),
  metaDescription: z.union([JsonNullValueInputSchema, jsonSchema]),
  challenge: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  services: z.union([z.lazy(() => ProjectCreateservicesInputObjectSchema), z.string().array()]).optional(),
  techStack: z.union([z.lazy(() => ProjectCreatetechStackInputObjectSchema), z.string().array()]).optional(),
  date: z.string(),
  gallery: z.union([z.lazy(() => ProjectCreategalleryInputObjectSchema), z.string().array()]).optional(),
  notes: z.union([z.lazy(() => ProjectCreatenotesInputObjectSchema), jsonSchema.array()]).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  story: z.lazy(() => StorySectionUncheckedCreateNestedManyWithoutProjectInputObjectSchema).optional()
}).strict();
export const ProjectUncheckedCreateWithoutTeamInputObjectSchema: z.ZodType<Prisma.ProjectUncheckedCreateWithoutTeamInput> = __makeSchema_ProjectUncheckedCreateWithoutTeamInput_schema() as unknown as z.ZodType<Prisma.ProjectUncheckedCreateWithoutTeamInput>;
export const ProjectUncheckedCreateWithoutTeamInputObjectZodSchema = __makeSchema_ProjectUncheckedCreateWithoutTeamInput_schema();


// File: ProjectCreateOrConnectWithoutTeamInput.schema.ts
const __makeSchema_ProjectCreateOrConnectWithoutTeamInput_schema = () => z.object({
  where: z.lazy(() => ProjectWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ProjectCreateWithoutTeamInputObjectSchema), z.lazy(() => ProjectUncheckedCreateWithoutTeamInputObjectSchema)])
}).strict();
export const ProjectCreateOrConnectWithoutTeamInputObjectSchema: z.ZodType<Prisma.ProjectCreateOrConnectWithoutTeamInput> = __makeSchema_ProjectCreateOrConnectWithoutTeamInput_schema() as unknown as z.ZodType<Prisma.ProjectCreateOrConnectWithoutTeamInput>;
export const ProjectCreateOrConnectWithoutTeamInputObjectZodSchema = __makeSchema_ProjectCreateOrConnectWithoutTeamInput_schema();


// File: ProjectUpsertWithWhereUniqueWithoutTeamInput.schema.ts
const __makeSchema_ProjectUpsertWithWhereUniqueWithoutTeamInput_schema = () => z.object({
  where: z.lazy(() => ProjectWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => ProjectUpdateWithoutTeamInputObjectSchema), z.lazy(() => ProjectUncheckedUpdateWithoutTeamInputObjectSchema)]),
  create: z.union([z.lazy(() => ProjectCreateWithoutTeamInputObjectSchema), z.lazy(() => ProjectUncheckedCreateWithoutTeamInputObjectSchema)])
}).strict();
export const ProjectUpsertWithWhereUniqueWithoutTeamInputObjectSchema: z.ZodType<Prisma.ProjectUpsertWithWhereUniqueWithoutTeamInput> = __makeSchema_ProjectUpsertWithWhereUniqueWithoutTeamInput_schema() as unknown as z.ZodType<Prisma.ProjectUpsertWithWhereUniqueWithoutTeamInput>;
export const ProjectUpsertWithWhereUniqueWithoutTeamInputObjectZodSchema = __makeSchema_ProjectUpsertWithWhereUniqueWithoutTeamInput_schema();


// File: ProjectUpdateWithWhereUniqueWithoutTeamInput.schema.ts
const __makeSchema_ProjectUpdateWithWhereUniqueWithoutTeamInput_schema = () => z.object({
  where: z.lazy(() => ProjectWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => ProjectUpdateWithoutTeamInputObjectSchema), z.lazy(() => ProjectUncheckedUpdateWithoutTeamInputObjectSchema)])
}).strict();
export const ProjectUpdateWithWhereUniqueWithoutTeamInputObjectSchema: z.ZodType<Prisma.ProjectUpdateWithWhereUniqueWithoutTeamInput> = __makeSchema_ProjectUpdateWithWhereUniqueWithoutTeamInput_schema() as unknown as z.ZodType<Prisma.ProjectUpdateWithWhereUniqueWithoutTeamInput>;
export const ProjectUpdateWithWhereUniqueWithoutTeamInputObjectZodSchema = __makeSchema_ProjectUpdateWithWhereUniqueWithoutTeamInput_schema();


// File: ProjectUpdateManyWithWhereWithoutTeamInput.schema.ts
const __makeSchema_ProjectUpdateManyWithWhereWithoutTeamInput_schema = () => z.object({
  where: z.lazy(() => ProjectScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => ProjectUpdateManyMutationInputObjectSchema), z.lazy(() => ProjectUncheckedUpdateManyWithoutTeamInputObjectSchema)])
}).strict();
export const ProjectUpdateManyWithWhereWithoutTeamInputObjectSchema: z.ZodType<Prisma.ProjectUpdateManyWithWhereWithoutTeamInput> = __makeSchema_ProjectUpdateManyWithWhereWithoutTeamInput_schema() as unknown as z.ZodType<Prisma.ProjectUpdateManyWithWhereWithoutTeamInput>;
export const ProjectUpdateManyWithWhereWithoutTeamInputObjectZodSchema = __makeSchema_ProjectUpdateManyWithWhereWithoutTeamInput_schema();


// File: ProjectScalarWhereInput.schema.ts

const projectscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ProjectScalarWhereInputObjectSchema), z.lazy(() => ProjectScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ProjectScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ProjectScalarWhereInputObjectSchema), z.lazy(() => ProjectScalarWhereInputObjectSchema).array()]).optional(),
  slug: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  position: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  weeks: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  link: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  image: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  video: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  coverEffect: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  description: z.lazy(() => JsonFilterObjectSchema).optional(),
  metaDescription: z.lazy(() => JsonFilterObjectSchema).optional(),
  challenge: z.lazy(() => JsonNullableFilterObjectSchema).optional(),
  services: z.lazy(() => StringNullableListFilterObjectSchema).optional(),
  techStack: z.lazy(() => StringNullableListFilterObjectSchema).optional(),
  date: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  gallery: z.lazy(() => StringNullableListFilterObjectSchema).optional(),
  notes: z.lazy(() => JsonNullableListFilterObjectSchema).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const ProjectScalarWhereInputObjectSchema: z.ZodType<Prisma.ProjectScalarWhereInput> = projectscalarwhereinputSchema as unknown as z.ZodType<Prisma.ProjectScalarWhereInput>;
export const ProjectScalarWhereInputObjectZodSchema = projectscalarwhereinputSchema;


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


// File: StorySectionCreateManyProjectInput.schema.ts
const __makeSchema_StorySectionCreateManyProjectInput_schema = () => z.object({
  id: z.string().optional(),
  position: z.number().int(),
  title: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  by: z.union([z.lazy(() => StorySectionCreatebyInputObjectSchema), z.string().array()]).optional(),
  layout: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional()
}).strict();
export const StorySectionCreateManyProjectInputObjectSchema: z.ZodType<Prisma.StorySectionCreateManyProjectInput> = __makeSchema_StorySectionCreateManyProjectInput_schema() as unknown as z.ZodType<Prisma.StorySectionCreateManyProjectInput>;
export const StorySectionCreateManyProjectInputObjectZodSchema = __makeSchema_StorySectionCreateManyProjectInput_schema();


// File: StudioMemberUpdateWithoutTeamOfInput.schema.ts
const __makeSchema_StudioMemberUpdateWithoutTeamOfInput_schema = () => z.object({
  slug: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  position: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  role: z.union([JsonNullValueInputSchema, jsonSchema]).optional(),
  description: z.union([JsonNullValueInputSchema, jsonSchema]).optional(),
  bio: z.union([JsonNullValueInputSchema, jsonSchema]).optional(),
  model: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  scale: z.union([z.number(), z.lazy(() => FloatFieldUpdateOperationsInputObjectSchema)]).optional(),
  roughness: z.union([z.number(), z.lazy(() => FloatFieldUpdateOperationsInputObjectSchema)]).optional(),
  metalness: z.union([z.number(), z.lazy(() => FloatFieldUpdateOperationsInputObjectSchema)]).optional(),
  hair: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  rotation: z.union([z.lazy(() => StudioMemberUpdaterotationInputObjectSchema), z.number().array()]).optional(),
  highlight: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  socials: z.union([JsonNullValueInputSchema, jsonSchema]).optional(),
  labels: z.union([JsonNullValueInputSchema, jsonSchema]).optional(),
  projects: z.union([z.lazy(() => StudioMemberUpdateprojectsInputObjectSchema), z.string().array()]).optional(),
  suite: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  facts: z.union([JsonNullValueInputSchema, jsonSchema]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const StudioMemberUpdateWithoutTeamOfInputObjectSchema: z.ZodType<Prisma.StudioMemberUpdateWithoutTeamOfInput> = __makeSchema_StudioMemberUpdateWithoutTeamOfInput_schema() as unknown as z.ZodType<Prisma.StudioMemberUpdateWithoutTeamOfInput>;
export const StudioMemberUpdateWithoutTeamOfInputObjectZodSchema = __makeSchema_StudioMemberUpdateWithoutTeamOfInput_schema();


// File: StudioMemberUncheckedUpdateWithoutTeamOfInput.schema.ts
const __makeSchema_StudioMemberUncheckedUpdateWithoutTeamOfInput_schema = () => z.object({
  slug: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  position: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  role: z.union([JsonNullValueInputSchema, jsonSchema]).optional(),
  description: z.union([JsonNullValueInputSchema, jsonSchema]).optional(),
  bio: z.union([JsonNullValueInputSchema, jsonSchema]).optional(),
  model: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  scale: z.union([z.number(), z.lazy(() => FloatFieldUpdateOperationsInputObjectSchema)]).optional(),
  roughness: z.union([z.number(), z.lazy(() => FloatFieldUpdateOperationsInputObjectSchema)]).optional(),
  metalness: z.union([z.number(), z.lazy(() => FloatFieldUpdateOperationsInputObjectSchema)]).optional(),
  hair: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  rotation: z.union([z.lazy(() => StudioMemberUpdaterotationInputObjectSchema), z.number().array()]).optional(),
  highlight: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  socials: z.union([JsonNullValueInputSchema, jsonSchema]).optional(),
  labels: z.union([JsonNullValueInputSchema, jsonSchema]).optional(),
  projects: z.union([z.lazy(() => StudioMemberUpdateprojectsInputObjectSchema), z.string().array()]).optional(),
  suite: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  facts: z.union([JsonNullValueInputSchema, jsonSchema]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const StudioMemberUncheckedUpdateWithoutTeamOfInputObjectSchema: z.ZodType<Prisma.StudioMemberUncheckedUpdateWithoutTeamOfInput> = __makeSchema_StudioMemberUncheckedUpdateWithoutTeamOfInput_schema() as unknown as z.ZodType<Prisma.StudioMemberUncheckedUpdateWithoutTeamOfInput>;
export const StudioMemberUncheckedUpdateWithoutTeamOfInputObjectZodSchema = __makeSchema_StudioMemberUncheckedUpdateWithoutTeamOfInput_schema();


// File: StudioMemberUncheckedUpdateManyWithoutTeamOfInput.schema.ts
const __makeSchema_StudioMemberUncheckedUpdateManyWithoutTeamOfInput_schema = () => z.object({
  slug: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  position: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  role: z.union([JsonNullValueInputSchema, jsonSchema]).optional(),
  description: z.union([JsonNullValueInputSchema, jsonSchema]).optional(),
  bio: z.union([JsonNullValueInputSchema, jsonSchema]).optional(),
  model: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  scale: z.union([z.number(), z.lazy(() => FloatFieldUpdateOperationsInputObjectSchema)]).optional(),
  roughness: z.union([z.number(), z.lazy(() => FloatFieldUpdateOperationsInputObjectSchema)]).optional(),
  metalness: z.union([z.number(), z.lazy(() => FloatFieldUpdateOperationsInputObjectSchema)]).optional(),
  hair: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  rotation: z.union([z.lazy(() => StudioMemberUpdaterotationInputObjectSchema), z.number().array()]).optional(),
  highlight: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  socials: z.union([JsonNullValueInputSchema, jsonSchema]).optional(),
  labels: z.union([JsonNullValueInputSchema, jsonSchema]).optional(),
  projects: z.union([z.lazy(() => StudioMemberUpdateprojectsInputObjectSchema), z.string().array()]).optional(),
  suite: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  facts: z.union([JsonNullValueInputSchema, jsonSchema]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const StudioMemberUncheckedUpdateManyWithoutTeamOfInputObjectSchema: z.ZodType<Prisma.StudioMemberUncheckedUpdateManyWithoutTeamOfInput> = __makeSchema_StudioMemberUncheckedUpdateManyWithoutTeamOfInput_schema() as unknown as z.ZodType<Prisma.StudioMemberUncheckedUpdateManyWithoutTeamOfInput>;
export const StudioMemberUncheckedUpdateManyWithoutTeamOfInputObjectZodSchema = __makeSchema_StudioMemberUncheckedUpdateManyWithoutTeamOfInput_schema();


// File: StorySectionUpdateWithoutProjectInput.schema.ts
const __makeSchema_StorySectionUpdateWithoutProjectInput_schema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  position: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  title: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  by: z.union([z.lazy(() => StorySectionUpdatebyInputObjectSchema), z.string().array()]).optional(),
  layout: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  blocks: z.lazy(() => StoryBlockUpdateManyWithoutSectionNestedInputObjectSchema).optional()
}).strict();
export const StorySectionUpdateWithoutProjectInputObjectSchema: z.ZodType<Prisma.StorySectionUpdateWithoutProjectInput> = __makeSchema_StorySectionUpdateWithoutProjectInput_schema() as unknown as z.ZodType<Prisma.StorySectionUpdateWithoutProjectInput>;
export const StorySectionUpdateWithoutProjectInputObjectZodSchema = __makeSchema_StorySectionUpdateWithoutProjectInput_schema();


// File: StorySectionUncheckedUpdateWithoutProjectInput.schema.ts
const __makeSchema_StorySectionUncheckedUpdateWithoutProjectInput_schema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  position: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  title: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  by: z.union([z.lazy(() => StorySectionUpdatebyInputObjectSchema), z.string().array()]).optional(),
  layout: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  blocks: z.lazy(() => StoryBlockUncheckedUpdateManyWithoutSectionNestedInputObjectSchema).optional()
}).strict();
export const StorySectionUncheckedUpdateWithoutProjectInputObjectSchema: z.ZodType<Prisma.StorySectionUncheckedUpdateWithoutProjectInput> = __makeSchema_StorySectionUncheckedUpdateWithoutProjectInput_schema() as unknown as z.ZodType<Prisma.StorySectionUncheckedUpdateWithoutProjectInput>;
export const StorySectionUncheckedUpdateWithoutProjectInputObjectZodSchema = __makeSchema_StorySectionUncheckedUpdateWithoutProjectInput_schema();


// File: StorySectionUncheckedUpdateManyWithoutProjectInput.schema.ts
const __makeSchema_StorySectionUncheckedUpdateManyWithoutProjectInput_schema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  position: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  title: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  by: z.union([z.lazy(() => StorySectionUpdatebyInputObjectSchema), z.string().array()]).optional(),
  layout: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional()
}).strict();
export const StorySectionUncheckedUpdateManyWithoutProjectInputObjectSchema: z.ZodType<Prisma.StorySectionUncheckedUpdateManyWithoutProjectInput> = __makeSchema_StorySectionUncheckedUpdateManyWithoutProjectInput_schema() as unknown as z.ZodType<Prisma.StorySectionUncheckedUpdateManyWithoutProjectInput>;
export const StorySectionUncheckedUpdateManyWithoutProjectInputObjectZodSchema = __makeSchema_StorySectionUncheckedUpdateManyWithoutProjectInput_schema();


// File: SiteDailyVisitorCreateManyVisitorInput.schema.ts
const __makeSchema_SiteDailyVisitorCreateManyVisitorInput_schema = () => z.object({
  date: z.coerce.date(),
  firstVisitAt: z.coerce.date().optional()
}).strict();
export const SiteDailyVisitorCreateManyVisitorInputObjectSchema: z.ZodType<Prisma.SiteDailyVisitorCreateManyVisitorInput> = __makeSchema_SiteDailyVisitorCreateManyVisitorInput_schema() as unknown as z.ZodType<Prisma.SiteDailyVisitorCreateManyVisitorInput>;
export const SiteDailyVisitorCreateManyVisitorInputObjectZodSchema = __makeSchema_SiteDailyVisitorCreateManyVisitorInput_schema();


// File: SiteDailyVisitorUpdateWithoutVisitorInput.schema.ts
const __makeSchema_SiteDailyVisitorUpdateWithoutVisitorInput_schema = () => z.object({
  firstVisitAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  day: z.lazy(() => SiteDailyStatUpdateOneRequiredWithoutVisitorsNestedInputObjectSchema).optional()
}).strict();
export const SiteDailyVisitorUpdateWithoutVisitorInputObjectSchema: z.ZodType<Prisma.SiteDailyVisitorUpdateWithoutVisitorInput> = __makeSchema_SiteDailyVisitorUpdateWithoutVisitorInput_schema() as unknown as z.ZodType<Prisma.SiteDailyVisitorUpdateWithoutVisitorInput>;
export const SiteDailyVisitorUpdateWithoutVisitorInputObjectZodSchema = __makeSchema_SiteDailyVisitorUpdateWithoutVisitorInput_schema();


// File: SiteDailyVisitorUncheckedUpdateWithoutVisitorInput.schema.ts
const __makeSchema_SiteDailyVisitorUncheckedUpdateWithoutVisitorInput_schema = () => z.object({
  date: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  firstVisitAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const SiteDailyVisitorUncheckedUpdateWithoutVisitorInputObjectSchema: z.ZodType<Prisma.SiteDailyVisitorUncheckedUpdateWithoutVisitorInput> = __makeSchema_SiteDailyVisitorUncheckedUpdateWithoutVisitorInput_schema() as unknown as z.ZodType<Prisma.SiteDailyVisitorUncheckedUpdateWithoutVisitorInput>;
export const SiteDailyVisitorUncheckedUpdateWithoutVisitorInputObjectZodSchema = __makeSchema_SiteDailyVisitorUncheckedUpdateWithoutVisitorInput_schema();


// File: SiteDailyVisitorUncheckedUpdateManyWithoutVisitorInput.schema.ts
const __makeSchema_SiteDailyVisitorUncheckedUpdateManyWithoutVisitorInput_schema = () => z.object({
  date: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  firstVisitAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const SiteDailyVisitorUncheckedUpdateManyWithoutVisitorInputObjectSchema: z.ZodType<Prisma.SiteDailyVisitorUncheckedUpdateManyWithoutVisitorInput> = __makeSchema_SiteDailyVisitorUncheckedUpdateManyWithoutVisitorInput_schema() as unknown as z.ZodType<Prisma.SiteDailyVisitorUncheckedUpdateManyWithoutVisitorInput>;
export const SiteDailyVisitorUncheckedUpdateManyWithoutVisitorInputObjectZodSchema = __makeSchema_SiteDailyVisitorUncheckedUpdateManyWithoutVisitorInput_schema();


// File: SiteDailyVisitorCreateManyDayInput.schema.ts
const __makeSchema_SiteDailyVisitorCreateManyDayInput_schema = () => z.object({
  visitorId: z.string(),
  firstVisitAt: z.coerce.date().optional()
}).strict();
export const SiteDailyVisitorCreateManyDayInputObjectSchema: z.ZodType<Prisma.SiteDailyVisitorCreateManyDayInput> = __makeSchema_SiteDailyVisitorCreateManyDayInput_schema() as unknown as z.ZodType<Prisma.SiteDailyVisitorCreateManyDayInput>;
export const SiteDailyVisitorCreateManyDayInputObjectZodSchema = __makeSchema_SiteDailyVisitorCreateManyDayInput_schema();


// File: SiteDailyVisitorUpdateWithoutDayInput.schema.ts
const __makeSchema_SiteDailyVisitorUpdateWithoutDayInput_schema = () => z.object({
  firstVisitAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  visitor: z.lazy(() => SiteVisitorUpdateOneRequiredWithoutDailyVisitsNestedInputObjectSchema).optional()
}).strict();
export const SiteDailyVisitorUpdateWithoutDayInputObjectSchema: z.ZodType<Prisma.SiteDailyVisitorUpdateWithoutDayInput> = __makeSchema_SiteDailyVisitorUpdateWithoutDayInput_schema() as unknown as z.ZodType<Prisma.SiteDailyVisitorUpdateWithoutDayInput>;
export const SiteDailyVisitorUpdateWithoutDayInputObjectZodSchema = __makeSchema_SiteDailyVisitorUpdateWithoutDayInput_schema();


// File: SiteDailyVisitorUncheckedUpdateWithoutDayInput.schema.ts
const __makeSchema_SiteDailyVisitorUncheckedUpdateWithoutDayInput_schema = () => z.object({
  visitorId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  firstVisitAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const SiteDailyVisitorUncheckedUpdateWithoutDayInputObjectSchema: z.ZodType<Prisma.SiteDailyVisitorUncheckedUpdateWithoutDayInput> = __makeSchema_SiteDailyVisitorUncheckedUpdateWithoutDayInput_schema() as unknown as z.ZodType<Prisma.SiteDailyVisitorUncheckedUpdateWithoutDayInput>;
export const SiteDailyVisitorUncheckedUpdateWithoutDayInputObjectZodSchema = __makeSchema_SiteDailyVisitorUncheckedUpdateWithoutDayInput_schema();


// File: SiteDailyVisitorUncheckedUpdateManyWithoutDayInput.schema.ts
const __makeSchema_SiteDailyVisitorUncheckedUpdateManyWithoutDayInput_schema = () => z.object({
  visitorId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  firstVisitAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const SiteDailyVisitorUncheckedUpdateManyWithoutDayInputObjectSchema: z.ZodType<Prisma.SiteDailyVisitorUncheckedUpdateManyWithoutDayInput> = __makeSchema_SiteDailyVisitorUncheckedUpdateManyWithoutDayInput_schema() as unknown as z.ZodType<Prisma.SiteDailyVisitorUncheckedUpdateManyWithoutDayInput>;
export const SiteDailyVisitorUncheckedUpdateManyWithoutDayInputObjectZodSchema = __makeSchema_SiteDailyVisitorUncheckedUpdateManyWithoutDayInput_schema();


// File: StoryBlockCreateManySectionInput.schema.ts
const __makeSchema_StoryBlockCreateManySectionInput_schema = () => z.object({
  id: z.string().optional(),
  position: z.number().int(),
  type: z.string(),
  media: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  eyebrow: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  title: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  text: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  tags: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  logos: z.union([z.lazy(() => StoryBlockCreatelogosInputObjectSchema), z.string().array()]).optional(),
  tiles: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  link: z.string().optional().nullable(),
  linkLabel: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  effect: z.string().optional().nullable(),
  smalls: z.string().optional().nullable(),
  cols: z.number().int().optional().nullable(),
  font: z.string().optional().nullable(),
  fontFamily: z.string().optional().nullable(),
  description: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  secondFont: z.string().optional().nullable(),
  secondFontFamily: z.string().optional().nullable(),
  secondDescription: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  swatches: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional()
}).strict();
export const StoryBlockCreateManySectionInputObjectSchema: z.ZodType<Prisma.StoryBlockCreateManySectionInput> = __makeSchema_StoryBlockCreateManySectionInput_schema() as unknown as z.ZodType<Prisma.StoryBlockCreateManySectionInput>;
export const StoryBlockCreateManySectionInputObjectZodSchema = __makeSchema_StoryBlockCreateManySectionInput_schema();


// File: StoryBlockUpdateWithoutSectionInput.schema.ts
const __makeSchema_StoryBlockUpdateWithoutSectionInput_schema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  position: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  type: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  media: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  eyebrow: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  title: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  text: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  tags: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  logos: z.union([z.lazy(() => StoryBlockUpdatelogosInputObjectSchema), z.string().array()]).optional(),
  tiles: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  link: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  linkLabel: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  effect: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  smalls: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  cols: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  font: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  fontFamily: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  description: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  secondFont: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  secondFontFamily: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  secondDescription: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  swatches: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional()
}).strict();
export const StoryBlockUpdateWithoutSectionInputObjectSchema: z.ZodType<Prisma.StoryBlockUpdateWithoutSectionInput> = __makeSchema_StoryBlockUpdateWithoutSectionInput_schema() as unknown as z.ZodType<Prisma.StoryBlockUpdateWithoutSectionInput>;
export const StoryBlockUpdateWithoutSectionInputObjectZodSchema = __makeSchema_StoryBlockUpdateWithoutSectionInput_schema();


// File: StoryBlockUncheckedUpdateWithoutSectionInput.schema.ts
const __makeSchema_StoryBlockUncheckedUpdateWithoutSectionInput_schema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  position: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  type: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  media: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  eyebrow: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  title: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  text: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  tags: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  logos: z.union([z.lazy(() => StoryBlockUpdatelogosInputObjectSchema), z.string().array()]).optional(),
  tiles: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  link: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  linkLabel: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  effect: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  smalls: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  cols: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  font: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  fontFamily: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  description: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  secondFont: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  secondFontFamily: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  secondDescription: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  swatches: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional()
}).strict();
export const StoryBlockUncheckedUpdateWithoutSectionInputObjectSchema: z.ZodType<Prisma.StoryBlockUncheckedUpdateWithoutSectionInput> = __makeSchema_StoryBlockUncheckedUpdateWithoutSectionInput_schema() as unknown as z.ZodType<Prisma.StoryBlockUncheckedUpdateWithoutSectionInput>;
export const StoryBlockUncheckedUpdateWithoutSectionInputObjectZodSchema = __makeSchema_StoryBlockUncheckedUpdateWithoutSectionInput_schema();


// File: StoryBlockUncheckedUpdateManyWithoutSectionInput.schema.ts
const __makeSchema_StoryBlockUncheckedUpdateManyWithoutSectionInput_schema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  position: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  type: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  media: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  eyebrow: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  title: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  text: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  tags: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  logos: z.union([z.lazy(() => StoryBlockUpdatelogosInputObjectSchema), z.string().array()]).optional(),
  tiles: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  link: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  linkLabel: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  effect: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  smalls: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  cols: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  font: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  fontFamily: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  description: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  secondFont: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  secondFontFamily: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  secondDescription: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  swatches: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional()
}).strict();
export const StoryBlockUncheckedUpdateManyWithoutSectionInputObjectSchema: z.ZodType<Prisma.StoryBlockUncheckedUpdateManyWithoutSectionInput> = __makeSchema_StoryBlockUncheckedUpdateManyWithoutSectionInput_schema() as unknown as z.ZodType<Prisma.StoryBlockUncheckedUpdateManyWithoutSectionInput>;
export const StoryBlockUncheckedUpdateManyWithoutSectionInputObjectZodSchema = __makeSchema_StoryBlockUncheckedUpdateManyWithoutSectionInput_schema();


// File: ProjectUpdateWithoutTeamInput.schema.ts
const __makeSchema_ProjectUpdateWithoutTeamInput_schema = () => z.object({
  slug: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  position: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  weeks: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  link: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  image: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  video: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  coverEffect: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  description: z.union([JsonNullValueInputSchema, jsonSchema]).optional(),
  metaDescription: z.union([JsonNullValueInputSchema, jsonSchema]).optional(),
  challenge: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  services: z.union([z.lazy(() => ProjectUpdateservicesInputObjectSchema), z.string().array()]).optional(),
  techStack: z.union([z.lazy(() => ProjectUpdatetechStackInputObjectSchema), z.string().array()]).optional(),
  date: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  gallery: z.union([z.lazy(() => ProjectUpdategalleryInputObjectSchema), z.string().array()]).optional(),
  notes: z.union([z.lazy(() => ProjectUpdatenotesInputObjectSchema), jsonSchema.array()]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  story: z.lazy(() => StorySectionUpdateManyWithoutProjectNestedInputObjectSchema).optional()
}).strict();
export const ProjectUpdateWithoutTeamInputObjectSchema: z.ZodType<Prisma.ProjectUpdateWithoutTeamInput> = __makeSchema_ProjectUpdateWithoutTeamInput_schema() as unknown as z.ZodType<Prisma.ProjectUpdateWithoutTeamInput>;
export const ProjectUpdateWithoutTeamInputObjectZodSchema = __makeSchema_ProjectUpdateWithoutTeamInput_schema();


// File: ProjectUncheckedUpdateWithoutTeamInput.schema.ts
const __makeSchema_ProjectUncheckedUpdateWithoutTeamInput_schema = () => z.object({
  slug: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  position: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  weeks: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  link: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  image: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  video: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  coverEffect: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  description: z.union([JsonNullValueInputSchema, jsonSchema]).optional(),
  metaDescription: z.union([JsonNullValueInputSchema, jsonSchema]).optional(),
  challenge: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  services: z.union([z.lazy(() => ProjectUpdateservicesInputObjectSchema), z.string().array()]).optional(),
  techStack: z.union([z.lazy(() => ProjectUpdatetechStackInputObjectSchema), z.string().array()]).optional(),
  date: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  gallery: z.union([z.lazy(() => ProjectUpdategalleryInputObjectSchema), z.string().array()]).optional(),
  notes: z.union([z.lazy(() => ProjectUpdatenotesInputObjectSchema), jsonSchema.array()]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  story: z.lazy(() => StorySectionUncheckedUpdateManyWithoutProjectNestedInputObjectSchema).optional()
}).strict();
export const ProjectUncheckedUpdateWithoutTeamInputObjectSchema: z.ZodType<Prisma.ProjectUncheckedUpdateWithoutTeamInput> = __makeSchema_ProjectUncheckedUpdateWithoutTeamInput_schema() as unknown as z.ZodType<Prisma.ProjectUncheckedUpdateWithoutTeamInput>;
export const ProjectUncheckedUpdateWithoutTeamInputObjectZodSchema = __makeSchema_ProjectUncheckedUpdateWithoutTeamInput_schema();


// File: ProjectUncheckedUpdateManyWithoutTeamInput.schema.ts
const __makeSchema_ProjectUncheckedUpdateManyWithoutTeamInput_schema = () => z.object({
  slug: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  position: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  weeks: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  link: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  image: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  video: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  coverEffect: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  description: z.union([JsonNullValueInputSchema, jsonSchema]).optional(),
  metaDescription: z.union([JsonNullValueInputSchema, jsonSchema]).optional(),
  challenge: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  services: z.union([z.lazy(() => ProjectUpdateservicesInputObjectSchema), z.string().array()]).optional(),
  techStack: z.union([z.lazy(() => ProjectUpdatetechStackInputObjectSchema), z.string().array()]).optional(),
  date: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  gallery: z.union([z.lazy(() => ProjectUpdategalleryInputObjectSchema), z.string().array()]).optional(),
  notes: z.union([z.lazy(() => ProjectUpdatenotesInputObjectSchema), jsonSchema.array()]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const ProjectUncheckedUpdateManyWithoutTeamInputObjectSchema: z.ZodType<Prisma.ProjectUncheckedUpdateManyWithoutTeamInput> = __makeSchema_ProjectUncheckedUpdateManyWithoutTeamInput_schema() as unknown as z.ZodType<Prisma.ProjectUncheckedUpdateManyWithoutTeamInput>;
export const ProjectUncheckedUpdateManyWithoutTeamInputObjectZodSchema = __makeSchema_ProjectUncheckedUpdateManyWithoutTeamInput_schema();


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
  message: z.literal(true).optional(),
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
  message: z.literal(true).optional(),
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
  message: z.literal(true).optional(),
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
  slug: z.literal(true).optional(),
  position: z.literal(true).optional(),
  name: z.literal(true).optional(),
  weeks: z.literal(true).optional(),
  link: z.literal(true).optional(),
  image: z.literal(true).optional(),
  video: z.literal(true).optional(),
  coverEffect: z.literal(true).optional(),
  description: z.literal(true).optional(),
  metaDescription: z.literal(true).optional(),
  challenge: z.literal(true).optional(),
  services: z.literal(true).optional(),
  techStack: z.literal(true).optional(),
  date: z.literal(true).optional(),
  gallery: z.literal(true).optional(),
  notes: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const ProjectCountAggregateInputObjectSchema: z.ZodType<Prisma.ProjectCountAggregateInputType> = __makeSchema_ProjectCountAggregateInput_schema() as unknown as z.ZodType<Prisma.ProjectCountAggregateInputType>;
export const ProjectCountAggregateInputObjectZodSchema = __makeSchema_ProjectCountAggregateInput_schema();


// File: ProjectAvgAggregateInput.schema.ts
const __makeSchema_ProjectAvgAggregateInput_schema = () => z.object({
  position: z.literal(true).optional(),
  weeks: z.literal(true).optional()
}).strict();
export const ProjectAvgAggregateInputObjectSchema: z.ZodType<Prisma.ProjectAvgAggregateInputType> = __makeSchema_ProjectAvgAggregateInput_schema() as unknown as z.ZodType<Prisma.ProjectAvgAggregateInputType>;
export const ProjectAvgAggregateInputObjectZodSchema = __makeSchema_ProjectAvgAggregateInput_schema();


// File: ProjectSumAggregateInput.schema.ts
const __makeSchema_ProjectSumAggregateInput_schema = () => z.object({
  position: z.literal(true).optional(),
  weeks: z.literal(true).optional()
}).strict();
export const ProjectSumAggregateInputObjectSchema: z.ZodType<Prisma.ProjectSumAggregateInputType> = __makeSchema_ProjectSumAggregateInput_schema() as unknown as z.ZodType<Prisma.ProjectSumAggregateInputType>;
export const ProjectSumAggregateInputObjectZodSchema = __makeSchema_ProjectSumAggregateInput_schema();


// File: ProjectMinAggregateInput.schema.ts
const __makeSchema_ProjectMinAggregateInput_schema = () => z.object({
  slug: z.literal(true).optional(),
  position: z.literal(true).optional(),
  name: z.literal(true).optional(),
  weeks: z.literal(true).optional(),
  link: z.literal(true).optional(),
  image: z.literal(true).optional(),
  video: z.literal(true).optional(),
  coverEffect: z.literal(true).optional(),
  date: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional()
}).strict();
export const ProjectMinAggregateInputObjectSchema: z.ZodType<Prisma.ProjectMinAggregateInputType> = __makeSchema_ProjectMinAggregateInput_schema() as unknown as z.ZodType<Prisma.ProjectMinAggregateInputType>;
export const ProjectMinAggregateInputObjectZodSchema = __makeSchema_ProjectMinAggregateInput_schema();


// File: ProjectMaxAggregateInput.schema.ts
const __makeSchema_ProjectMaxAggregateInput_schema = () => z.object({
  slug: z.literal(true).optional(),
  position: z.literal(true).optional(),
  name: z.literal(true).optional(),
  weeks: z.literal(true).optional(),
  link: z.literal(true).optional(),
  image: z.literal(true).optional(),
  video: z.literal(true).optional(),
  coverEffect: z.literal(true).optional(),
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


// File: SiteVisitorCountAggregateInput.schema.ts
const __makeSchema_SiteVisitorCountAggregateInput_schema = () => z.object({
  id: z.literal(true).optional(),
  visitorKey: z.literal(true).optional(),
  firstSeenAt: z.literal(true).optional(),
  lastSeenAt: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const SiteVisitorCountAggregateInputObjectSchema: z.ZodType<Prisma.SiteVisitorCountAggregateInputType> = __makeSchema_SiteVisitorCountAggregateInput_schema() as unknown as z.ZodType<Prisma.SiteVisitorCountAggregateInputType>;
export const SiteVisitorCountAggregateInputObjectZodSchema = __makeSchema_SiteVisitorCountAggregateInput_schema();


// File: SiteVisitorMinAggregateInput.schema.ts
const __makeSchema_SiteVisitorMinAggregateInput_schema = () => z.object({
  id: z.literal(true).optional(),
  visitorKey: z.literal(true).optional(),
  firstSeenAt: z.literal(true).optional(),
  lastSeenAt: z.literal(true).optional()
}).strict();
export const SiteVisitorMinAggregateInputObjectSchema: z.ZodType<Prisma.SiteVisitorMinAggregateInputType> = __makeSchema_SiteVisitorMinAggregateInput_schema() as unknown as z.ZodType<Prisma.SiteVisitorMinAggregateInputType>;
export const SiteVisitorMinAggregateInputObjectZodSchema = __makeSchema_SiteVisitorMinAggregateInput_schema();


// File: SiteVisitorMaxAggregateInput.schema.ts
const __makeSchema_SiteVisitorMaxAggregateInput_schema = () => z.object({
  id: z.literal(true).optional(),
  visitorKey: z.literal(true).optional(),
  firstSeenAt: z.literal(true).optional(),
  lastSeenAt: z.literal(true).optional()
}).strict();
export const SiteVisitorMaxAggregateInputObjectSchema: z.ZodType<Prisma.SiteVisitorMaxAggregateInputType> = __makeSchema_SiteVisitorMaxAggregateInput_schema() as unknown as z.ZodType<Prisma.SiteVisitorMaxAggregateInputType>;
export const SiteVisitorMaxAggregateInputObjectZodSchema = __makeSchema_SiteVisitorMaxAggregateInput_schema();


// File: SiteDailyStatCountAggregateInput.schema.ts
const __makeSchema_SiteDailyStatCountAggregateInput_schema = () => z.object({
  date: z.literal(true).optional(),
  visits: z.literal(true).optional(),
  uniqueVisitors: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const SiteDailyStatCountAggregateInputObjectSchema: z.ZodType<Prisma.SiteDailyStatCountAggregateInputType> = __makeSchema_SiteDailyStatCountAggregateInput_schema() as unknown as z.ZodType<Prisma.SiteDailyStatCountAggregateInputType>;
export const SiteDailyStatCountAggregateInputObjectZodSchema = __makeSchema_SiteDailyStatCountAggregateInput_schema();


// File: SiteDailyStatAvgAggregateInput.schema.ts
const __makeSchema_SiteDailyStatAvgAggregateInput_schema = () => z.object({
  visits: z.literal(true).optional(),
  uniqueVisitors: z.literal(true).optional()
}).strict();
export const SiteDailyStatAvgAggregateInputObjectSchema: z.ZodType<Prisma.SiteDailyStatAvgAggregateInputType> = __makeSchema_SiteDailyStatAvgAggregateInput_schema() as unknown as z.ZodType<Prisma.SiteDailyStatAvgAggregateInputType>;
export const SiteDailyStatAvgAggregateInputObjectZodSchema = __makeSchema_SiteDailyStatAvgAggregateInput_schema();


// File: SiteDailyStatSumAggregateInput.schema.ts
const __makeSchema_SiteDailyStatSumAggregateInput_schema = () => z.object({
  visits: z.literal(true).optional(),
  uniqueVisitors: z.literal(true).optional()
}).strict();
export const SiteDailyStatSumAggregateInputObjectSchema: z.ZodType<Prisma.SiteDailyStatSumAggregateInputType> = __makeSchema_SiteDailyStatSumAggregateInput_schema() as unknown as z.ZodType<Prisma.SiteDailyStatSumAggregateInputType>;
export const SiteDailyStatSumAggregateInputObjectZodSchema = __makeSchema_SiteDailyStatSumAggregateInput_schema();


// File: SiteDailyStatMinAggregateInput.schema.ts
const __makeSchema_SiteDailyStatMinAggregateInput_schema = () => z.object({
  date: z.literal(true).optional(),
  visits: z.literal(true).optional(),
  uniqueVisitors: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional()
}).strict();
export const SiteDailyStatMinAggregateInputObjectSchema: z.ZodType<Prisma.SiteDailyStatMinAggregateInputType> = __makeSchema_SiteDailyStatMinAggregateInput_schema() as unknown as z.ZodType<Prisma.SiteDailyStatMinAggregateInputType>;
export const SiteDailyStatMinAggregateInputObjectZodSchema = __makeSchema_SiteDailyStatMinAggregateInput_schema();


// File: SiteDailyStatMaxAggregateInput.schema.ts
const __makeSchema_SiteDailyStatMaxAggregateInput_schema = () => z.object({
  date: z.literal(true).optional(),
  visits: z.literal(true).optional(),
  uniqueVisitors: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional()
}).strict();
export const SiteDailyStatMaxAggregateInputObjectSchema: z.ZodType<Prisma.SiteDailyStatMaxAggregateInputType> = __makeSchema_SiteDailyStatMaxAggregateInput_schema() as unknown as z.ZodType<Prisma.SiteDailyStatMaxAggregateInputType>;
export const SiteDailyStatMaxAggregateInputObjectZodSchema = __makeSchema_SiteDailyStatMaxAggregateInput_schema();


// File: SiteDailyVisitorCountAggregateInput.schema.ts
const __makeSchema_SiteDailyVisitorCountAggregateInput_schema = () => z.object({
  date: z.literal(true).optional(),
  visitorId: z.literal(true).optional(),
  firstVisitAt: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const SiteDailyVisitorCountAggregateInputObjectSchema: z.ZodType<Prisma.SiteDailyVisitorCountAggregateInputType> = __makeSchema_SiteDailyVisitorCountAggregateInput_schema() as unknown as z.ZodType<Prisma.SiteDailyVisitorCountAggregateInputType>;
export const SiteDailyVisitorCountAggregateInputObjectZodSchema = __makeSchema_SiteDailyVisitorCountAggregateInput_schema();


// File: SiteDailyVisitorMinAggregateInput.schema.ts
const __makeSchema_SiteDailyVisitorMinAggregateInput_schema = () => z.object({
  date: z.literal(true).optional(),
  visitorId: z.literal(true).optional(),
  firstVisitAt: z.literal(true).optional()
}).strict();
export const SiteDailyVisitorMinAggregateInputObjectSchema: z.ZodType<Prisma.SiteDailyVisitorMinAggregateInputType> = __makeSchema_SiteDailyVisitorMinAggregateInput_schema() as unknown as z.ZodType<Prisma.SiteDailyVisitorMinAggregateInputType>;
export const SiteDailyVisitorMinAggregateInputObjectZodSchema = __makeSchema_SiteDailyVisitorMinAggregateInput_schema();


// File: SiteDailyVisitorMaxAggregateInput.schema.ts
const __makeSchema_SiteDailyVisitorMaxAggregateInput_schema = () => z.object({
  date: z.literal(true).optional(),
  visitorId: z.literal(true).optional(),
  firstVisitAt: z.literal(true).optional()
}).strict();
export const SiteDailyVisitorMaxAggregateInputObjectSchema: z.ZodType<Prisma.SiteDailyVisitorMaxAggregateInputType> = __makeSchema_SiteDailyVisitorMaxAggregateInput_schema() as unknown as z.ZodType<Prisma.SiteDailyVisitorMaxAggregateInputType>;
export const SiteDailyVisitorMaxAggregateInputObjectZodSchema = __makeSchema_SiteDailyVisitorMaxAggregateInput_schema();


// File: StoryBlockCountAggregateInput.schema.ts
const __makeSchema_StoryBlockCountAggregateInput_schema = () => z.object({
  id: z.literal(true).optional(),
  sectionId: z.literal(true).optional(),
  position: z.literal(true).optional(),
  type: z.literal(true).optional(),
  media: z.literal(true).optional(),
  eyebrow: z.literal(true).optional(),
  title: z.literal(true).optional(),
  text: z.literal(true).optional(),
  tags: z.literal(true).optional(),
  logos: z.literal(true).optional(),
  tiles: z.literal(true).optional(),
  link: z.literal(true).optional(),
  linkLabel: z.literal(true).optional(),
  effect: z.literal(true).optional(),
  smalls: z.literal(true).optional(),
  cols: z.literal(true).optional(),
  font: z.literal(true).optional(),
  fontFamily: z.literal(true).optional(),
  description: z.literal(true).optional(),
  secondFont: z.literal(true).optional(),
  secondFontFamily: z.literal(true).optional(),
  secondDescription: z.literal(true).optional(),
  swatches: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const StoryBlockCountAggregateInputObjectSchema: z.ZodType<Prisma.StoryBlockCountAggregateInputType> = __makeSchema_StoryBlockCountAggregateInput_schema() as unknown as z.ZodType<Prisma.StoryBlockCountAggregateInputType>;
export const StoryBlockCountAggregateInputObjectZodSchema = __makeSchema_StoryBlockCountAggregateInput_schema();


// File: StoryBlockAvgAggregateInput.schema.ts
const __makeSchema_StoryBlockAvgAggregateInput_schema = () => z.object({
  position: z.literal(true).optional(),
  cols: z.literal(true).optional()
}).strict();
export const StoryBlockAvgAggregateInputObjectSchema: z.ZodType<Prisma.StoryBlockAvgAggregateInputType> = __makeSchema_StoryBlockAvgAggregateInput_schema() as unknown as z.ZodType<Prisma.StoryBlockAvgAggregateInputType>;
export const StoryBlockAvgAggregateInputObjectZodSchema = __makeSchema_StoryBlockAvgAggregateInput_schema();


// File: StoryBlockSumAggregateInput.schema.ts
const __makeSchema_StoryBlockSumAggregateInput_schema = () => z.object({
  position: z.literal(true).optional(),
  cols: z.literal(true).optional()
}).strict();
export const StoryBlockSumAggregateInputObjectSchema: z.ZodType<Prisma.StoryBlockSumAggregateInputType> = __makeSchema_StoryBlockSumAggregateInput_schema() as unknown as z.ZodType<Prisma.StoryBlockSumAggregateInputType>;
export const StoryBlockSumAggregateInputObjectZodSchema = __makeSchema_StoryBlockSumAggregateInput_schema();


// File: StoryBlockMinAggregateInput.schema.ts
const __makeSchema_StoryBlockMinAggregateInput_schema = () => z.object({
  id: z.literal(true).optional(),
  sectionId: z.literal(true).optional(),
  position: z.literal(true).optional(),
  type: z.literal(true).optional(),
  link: z.literal(true).optional(),
  effect: z.literal(true).optional(),
  smalls: z.literal(true).optional(),
  cols: z.literal(true).optional(),
  font: z.literal(true).optional(),
  fontFamily: z.literal(true).optional(),
  secondFont: z.literal(true).optional(),
  secondFontFamily: z.literal(true).optional()
}).strict();
export const StoryBlockMinAggregateInputObjectSchema: z.ZodType<Prisma.StoryBlockMinAggregateInputType> = __makeSchema_StoryBlockMinAggregateInput_schema() as unknown as z.ZodType<Prisma.StoryBlockMinAggregateInputType>;
export const StoryBlockMinAggregateInputObjectZodSchema = __makeSchema_StoryBlockMinAggregateInput_schema();


// File: StoryBlockMaxAggregateInput.schema.ts
const __makeSchema_StoryBlockMaxAggregateInput_schema = () => z.object({
  id: z.literal(true).optional(),
  sectionId: z.literal(true).optional(),
  position: z.literal(true).optional(),
  type: z.literal(true).optional(),
  link: z.literal(true).optional(),
  effect: z.literal(true).optional(),
  smalls: z.literal(true).optional(),
  cols: z.literal(true).optional(),
  font: z.literal(true).optional(),
  fontFamily: z.literal(true).optional(),
  secondFont: z.literal(true).optional(),
  secondFontFamily: z.literal(true).optional()
}).strict();
export const StoryBlockMaxAggregateInputObjectSchema: z.ZodType<Prisma.StoryBlockMaxAggregateInputType> = __makeSchema_StoryBlockMaxAggregateInput_schema() as unknown as z.ZodType<Prisma.StoryBlockMaxAggregateInputType>;
export const StoryBlockMaxAggregateInputObjectZodSchema = __makeSchema_StoryBlockMaxAggregateInput_schema();


// File: StorySectionCountAggregateInput.schema.ts
const __makeSchema_StorySectionCountAggregateInput_schema = () => z.object({
  id: z.literal(true).optional(),
  projectSlug: z.literal(true).optional(),
  position: z.literal(true).optional(),
  title: z.literal(true).optional(),
  by: z.literal(true).optional(),
  layout: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const StorySectionCountAggregateInputObjectSchema: z.ZodType<Prisma.StorySectionCountAggregateInputType> = __makeSchema_StorySectionCountAggregateInput_schema() as unknown as z.ZodType<Prisma.StorySectionCountAggregateInputType>;
export const StorySectionCountAggregateInputObjectZodSchema = __makeSchema_StorySectionCountAggregateInput_schema();


// File: StorySectionAvgAggregateInput.schema.ts
const __makeSchema_StorySectionAvgAggregateInput_schema = () => z.object({
  position: z.literal(true).optional()
}).strict();
export const StorySectionAvgAggregateInputObjectSchema: z.ZodType<Prisma.StorySectionAvgAggregateInputType> = __makeSchema_StorySectionAvgAggregateInput_schema() as unknown as z.ZodType<Prisma.StorySectionAvgAggregateInputType>;
export const StorySectionAvgAggregateInputObjectZodSchema = __makeSchema_StorySectionAvgAggregateInput_schema();


// File: StorySectionSumAggregateInput.schema.ts
const __makeSchema_StorySectionSumAggregateInput_schema = () => z.object({
  position: z.literal(true).optional()
}).strict();
export const StorySectionSumAggregateInputObjectSchema: z.ZodType<Prisma.StorySectionSumAggregateInputType> = __makeSchema_StorySectionSumAggregateInput_schema() as unknown as z.ZodType<Prisma.StorySectionSumAggregateInputType>;
export const StorySectionSumAggregateInputObjectZodSchema = __makeSchema_StorySectionSumAggregateInput_schema();


// File: StorySectionMinAggregateInput.schema.ts
const __makeSchema_StorySectionMinAggregateInput_schema = () => z.object({
  id: z.literal(true).optional(),
  projectSlug: z.literal(true).optional(),
  position: z.literal(true).optional()
}).strict();
export const StorySectionMinAggregateInputObjectSchema: z.ZodType<Prisma.StorySectionMinAggregateInputType> = __makeSchema_StorySectionMinAggregateInput_schema() as unknown as z.ZodType<Prisma.StorySectionMinAggregateInputType>;
export const StorySectionMinAggregateInputObjectZodSchema = __makeSchema_StorySectionMinAggregateInput_schema();


// File: StorySectionMaxAggregateInput.schema.ts
const __makeSchema_StorySectionMaxAggregateInput_schema = () => z.object({
  id: z.literal(true).optional(),
  projectSlug: z.literal(true).optional(),
  position: z.literal(true).optional()
}).strict();
export const StorySectionMaxAggregateInputObjectSchema: z.ZodType<Prisma.StorySectionMaxAggregateInputType> = __makeSchema_StorySectionMaxAggregateInput_schema() as unknown as z.ZodType<Prisma.StorySectionMaxAggregateInputType>;
export const StorySectionMaxAggregateInputObjectZodSchema = __makeSchema_StorySectionMaxAggregateInput_schema();


// File: StudioMemberCountAggregateInput.schema.ts
const __makeSchema_StudioMemberCountAggregateInput_schema = () => z.object({
  slug: z.literal(true).optional(),
  position: z.literal(true).optional(),
  name: z.literal(true).optional(),
  role: z.literal(true).optional(),
  description: z.literal(true).optional(),
  bio: z.literal(true).optional(),
  model: z.literal(true).optional(),
  scale: z.literal(true).optional(),
  roughness: z.literal(true).optional(),
  metalness: z.literal(true).optional(),
  hair: z.literal(true).optional(),
  rotation: z.literal(true).optional(),
  highlight: z.literal(true).optional(),
  socials: z.literal(true).optional(),
  labels: z.literal(true).optional(),
  projects: z.literal(true).optional(),
  suite: z.literal(true).optional(),
  facts: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const StudioMemberCountAggregateInputObjectSchema: z.ZodType<Prisma.StudioMemberCountAggregateInputType> = __makeSchema_StudioMemberCountAggregateInput_schema() as unknown as z.ZodType<Prisma.StudioMemberCountAggregateInputType>;
export const StudioMemberCountAggregateInputObjectZodSchema = __makeSchema_StudioMemberCountAggregateInput_schema();


// File: StudioMemberAvgAggregateInput.schema.ts
const __makeSchema_StudioMemberAvgAggregateInput_schema = () => z.object({
  position: z.literal(true).optional(),
  scale: z.literal(true).optional(),
  roughness: z.literal(true).optional(),
  metalness: z.literal(true).optional(),
  rotation: z.literal(true).optional()
}).strict();
export const StudioMemberAvgAggregateInputObjectSchema: z.ZodType<Prisma.StudioMemberAvgAggregateInputType> = __makeSchema_StudioMemberAvgAggregateInput_schema() as unknown as z.ZodType<Prisma.StudioMemberAvgAggregateInputType>;
export const StudioMemberAvgAggregateInputObjectZodSchema = __makeSchema_StudioMemberAvgAggregateInput_schema();


// File: StudioMemberSumAggregateInput.schema.ts
const __makeSchema_StudioMemberSumAggregateInput_schema = () => z.object({
  position: z.literal(true).optional(),
  scale: z.literal(true).optional(),
  roughness: z.literal(true).optional(),
  metalness: z.literal(true).optional(),
  rotation: z.literal(true).optional()
}).strict();
export const StudioMemberSumAggregateInputObjectSchema: z.ZodType<Prisma.StudioMemberSumAggregateInputType> = __makeSchema_StudioMemberSumAggregateInput_schema() as unknown as z.ZodType<Prisma.StudioMemberSumAggregateInputType>;
export const StudioMemberSumAggregateInputObjectZodSchema = __makeSchema_StudioMemberSumAggregateInput_schema();


// File: StudioMemberMinAggregateInput.schema.ts
const __makeSchema_StudioMemberMinAggregateInput_schema = () => z.object({
  slug: z.literal(true).optional(),
  position: z.literal(true).optional(),
  name: z.literal(true).optional(),
  model: z.literal(true).optional(),
  scale: z.literal(true).optional(),
  roughness: z.literal(true).optional(),
  metalness: z.literal(true).optional(),
  hair: z.literal(true).optional(),
  highlight: z.literal(true).optional(),
  suite: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional()
}).strict();
export const StudioMemberMinAggregateInputObjectSchema: z.ZodType<Prisma.StudioMemberMinAggregateInputType> = __makeSchema_StudioMemberMinAggregateInput_schema() as unknown as z.ZodType<Prisma.StudioMemberMinAggregateInputType>;
export const StudioMemberMinAggregateInputObjectZodSchema = __makeSchema_StudioMemberMinAggregateInput_schema();


// File: StudioMemberMaxAggregateInput.schema.ts
const __makeSchema_StudioMemberMaxAggregateInput_schema = () => z.object({
  slug: z.literal(true).optional(),
  position: z.literal(true).optional(),
  name: z.literal(true).optional(),
  model: z.literal(true).optional(),
  scale: z.literal(true).optional(),
  roughness: z.literal(true).optional(),
  metalness: z.literal(true).optional(),
  hair: z.literal(true).optional(),
  highlight: z.literal(true).optional(),
  suite: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional()
}).strict();
export const StudioMemberMaxAggregateInputObjectSchema: z.ZodType<Prisma.StudioMemberMaxAggregateInputType> = __makeSchema_StudioMemberMaxAggregateInput_schema() as unknown as z.ZodType<Prisma.StudioMemberMaxAggregateInputType>;
export const StudioMemberMaxAggregateInputObjectZodSchema = __makeSchema_StudioMemberMaxAggregateInput_schema();


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


// File: ProjectCountOutputTypeSelect.schema.ts
const __makeSchema_ProjectCountOutputTypeSelect_schema = () => z.object({
  team: z.union([z.boolean(), z.lazy(() => ProjectCountOutputTypeCountTeamArgsObjectSchema)]).optional(),
  story: z.union([z.boolean(), z.lazy(() => ProjectCountOutputTypeCountStoryArgsObjectSchema)]).optional()
}).strict();
export const ProjectCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.ProjectCountOutputTypeSelect> = __makeSchema_ProjectCountOutputTypeSelect_schema() as unknown as z.ZodType<Prisma.ProjectCountOutputTypeSelect>;
export const ProjectCountOutputTypeSelectObjectZodSchema = __makeSchema_ProjectCountOutputTypeSelect_schema();


// File: SiteVisitorCountOutputTypeSelect.schema.ts
const __makeSchema_SiteVisitorCountOutputTypeSelect_schema = () => z.object({
  dailyVisits: z.union([z.boolean(), z.lazy(() => SiteVisitorCountOutputTypeCountDailyVisitsArgsObjectSchema)]).optional()
}).strict();
export const SiteVisitorCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.SiteVisitorCountOutputTypeSelect> = __makeSchema_SiteVisitorCountOutputTypeSelect_schema() as unknown as z.ZodType<Prisma.SiteVisitorCountOutputTypeSelect>;
export const SiteVisitorCountOutputTypeSelectObjectZodSchema = __makeSchema_SiteVisitorCountOutputTypeSelect_schema();


// File: SiteDailyStatCountOutputTypeSelect.schema.ts
const __makeSchema_SiteDailyStatCountOutputTypeSelect_schema = () => z.object({
  visitors: z.union([z.boolean(), z.lazy(() => SiteDailyStatCountOutputTypeCountVisitorsArgsObjectSchema)]).optional()
}).strict();
export const SiteDailyStatCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.SiteDailyStatCountOutputTypeSelect> = __makeSchema_SiteDailyStatCountOutputTypeSelect_schema() as unknown as z.ZodType<Prisma.SiteDailyStatCountOutputTypeSelect>;
export const SiteDailyStatCountOutputTypeSelectObjectZodSchema = __makeSchema_SiteDailyStatCountOutputTypeSelect_schema();


// File: StorySectionCountOutputTypeSelect.schema.ts
const __makeSchema_StorySectionCountOutputTypeSelect_schema = () => z.object({
  blocks: z.union([z.boolean(), z.lazy(() => StorySectionCountOutputTypeCountBlocksArgsObjectSchema)]).optional()
}).strict();
export const StorySectionCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.StorySectionCountOutputTypeSelect> = __makeSchema_StorySectionCountOutputTypeSelect_schema() as unknown as z.ZodType<Prisma.StorySectionCountOutputTypeSelect>;
export const StorySectionCountOutputTypeSelectObjectZodSchema = __makeSchema_StorySectionCountOutputTypeSelect_schema();


// File: StudioMemberCountOutputTypeSelect.schema.ts
const __makeSchema_StudioMemberCountOutputTypeSelect_schema = () => z.object({
  teamOf: z.union([z.boolean(), z.lazy(() => StudioMemberCountOutputTypeCountTeamOfArgsObjectSchema)]).optional()
}).strict();
export const StudioMemberCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.StudioMemberCountOutputTypeSelect> = __makeSchema_StudioMemberCountOutputTypeSelect_schema() as unknown as z.ZodType<Prisma.StudioMemberCountOutputTypeSelect>;
export const StudioMemberCountOutputTypeSelectObjectZodSchema = __makeSchema_StudioMemberCountOutputTypeSelect_schema();


// File: UserCountOutputTypeSelect.schema.ts
const __makeSchema_UserCountOutputTypeSelect_schema = () => z.object({
  sessions: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeCountSessionsArgsObjectSchema)]).optional(),
  accounts: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeCountAccountsArgsObjectSchema)]).optional()
}).strict();
export const UserCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.UserCountOutputTypeSelect> = __makeSchema_UserCountOutputTypeSelect_schema() as unknown as z.ZodType<Prisma.UserCountOutputTypeSelect>;
export const UserCountOutputTypeSelectObjectZodSchema = __makeSchema_UserCountOutputTypeSelect_schema();


// File: ProjectCountOutputTypeArgs.schema.ts
const __makeSchema_ProjectCountOutputTypeArgs_schema = () => z.object({
  select: z.lazy(() => ProjectCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const ProjectCountOutputTypeArgsObjectSchema = __makeSchema_ProjectCountOutputTypeArgs_schema();
export const ProjectCountOutputTypeArgsObjectZodSchema = __makeSchema_ProjectCountOutputTypeArgs_schema();


// File: ProjectCountOutputTypeCountTeamArgs.schema.ts
const __makeSchema_ProjectCountOutputTypeCountTeamArgs_schema = () => z.object({
  where: z.lazy(() => StudioMemberWhereInputObjectSchema).optional()
}).strict();
export const ProjectCountOutputTypeCountTeamArgsObjectSchema = __makeSchema_ProjectCountOutputTypeCountTeamArgs_schema();
export const ProjectCountOutputTypeCountTeamArgsObjectZodSchema = __makeSchema_ProjectCountOutputTypeCountTeamArgs_schema();


// File: ProjectCountOutputTypeCountStoryArgs.schema.ts
const __makeSchema_ProjectCountOutputTypeCountStoryArgs_schema = () => z.object({
  where: z.lazy(() => StorySectionWhereInputObjectSchema).optional()
}).strict();
export const ProjectCountOutputTypeCountStoryArgsObjectSchema = __makeSchema_ProjectCountOutputTypeCountStoryArgs_schema();
export const ProjectCountOutputTypeCountStoryArgsObjectZodSchema = __makeSchema_ProjectCountOutputTypeCountStoryArgs_schema();


// File: SiteVisitorCountOutputTypeArgs.schema.ts
const __makeSchema_SiteVisitorCountOutputTypeArgs_schema = () => z.object({
  select: z.lazy(() => SiteVisitorCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const SiteVisitorCountOutputTypeArgsObjectSchema = __makeSchema_SiteVisitorCountOutputTypeArgs_schema();
export const SiteVisitorCountOutputTypeArgsObjectZodSchema = __makeSchema_SiteVisitorCountOutputTypeArgs_schema();


// File: SiteVisitorCountOutputTypeCountDailyVisitsArgs.schema.ts
const __makeSchema_SiteVisitorCountOutputTypeCountDailyVisitsArgs_schema = () => z.object({
  where: z.lazy(() => SiteDailyVisitorWhereInputObjectSchema).optional()
}).strict();
export const SiteVisitorCountOutputTypeCountDailyVisitsArgsObjectSchema = __makeSchema_SiteVisitorCountOutputTypeCountDailyVisitsArgs_schema();
export const SiteVisitorCountOutputTypeCountDailyVisitsArgsObjectZodSchema = __makeSchema_SiteVisitorCountOutputTypeCountDailyVisitsArgs_schema();


// File: SiteDailyStatCountOutputTypeArgs.schema.ts
const __makeSchema_SiteDailyStatCountOutputTypeArgs_schema = () => z.object({
  select: z.lazy(() => SiteDailyStatCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const SiteDailyStatCountOutputTypeArgsObjectSchema = __makeSchema_SiteDailyStatCountOutputTypeArgs_schema();
export const SiteDailyStatCountOutputTypeArgsObjectZodSchema = __makeSchema_SiteDailyStatCountOutputTypeArgs_schema();


// File: SiteDailyStatCountOutputTypeCountVisitorsArgs.schema.ts
const __makeSchema_SiteDailyStatCountOutputTypeCountVisitorsArgs_schema = () => z.object({
  where: z.lazy(() => SiteDailyVisitorWhereInputObjectSchema).optional()
}).strict();
export const SiteDailyStatCountOutputTypeCountVisitorsArgsObjectSchema = __makeSchema_SiteDailyStatCountOutputTypeCountVisitorsArgs_schema();
export const SiteDailyStatCountOutputTypeCountVisitorsArgsObjectZodSchema = __makeSchema_SiteDailyStatCountOutputTypeCountVisitorsArgs_schema();


// File: StorySectionCountOutputTypeArgs.schema.ts
const __makeSchema_StorySectionCountOutputTypeArgs_schema = () => z.object({
  select: z.lazy(() => StorySectionCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const StorySectionCountOutputTypeArgsObjectSchema = __makeSchema_StorySectionCountOutputTypeArgs_schema();
export const StorySectionCountOutputTypeArgsObjectZodSchema = __makeSchema_StorySectionCountOutputTypeArgs_schema();


// File: StorySectionCountOutputTypeCountBlocksArgs.schema.ts
const __makeSchema_StorySectionCountOutputTypeCountBlocksArgs_schema = () => z.object({
  where: z.lazy(() => StoryBlockWhereInputObjectSchema).optional()
}).strict();
export const StorySectionCountOutputTypeCountBlocksArgsObjectSchema = __makeSchema_StorySectionCountOutputTypeCountBlocksArgs_schema();
export const StorySectionCountOutputTypeCountBlocksArgsObjectZodSchema = __makeSchema_StorySectionCountOutputTypeCountBlocksArgs_schema();


// File: StudioMemberCountOutputTypeArgs.schema.ts
const __makeSchema_StudioMemberCountOutputTypeArgs_schema = () => z.object({
  select: z.lazy(() => StudioMemberCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const StudioMemberCountOutputTypeArgsObjectSchema = __makeSchema_StudioMemberCountOutputTypeArgs_schema();
export const StudioMemberCountOutputTypeArgsObjectZodSchema = __makeSchema_StudioMemberCountOutputTypeArgs_schema();


// File: StudioMemberCountOutputTypeCountTeamOfArgs.schema.ts
const __makeSchema_StudioMemberCountOutputTypeCountTeamOfArgs_schema = () => z.object({
  where: z.lazy(() => ProjectWhereInputObjectSchema).optional()
}).strict();
export const StudioMemberCountOutputTypeCountTeamOfArgsObjectSchema = __makeSchema_StudioMemberCountOutputTypeCountTeamOfArgs_schema();
export const StudioMemberCountOutputTypeCountTeamOfArgsObjectZodSchema = __makeSchema_StudioMemberCountOutputTypeCountTeamOfArgs_schema();


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
  message: z.boolean().optional(),
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
  slug: z.boolean().optional(),
  position: z.boolean().optional(),
  name: z.boolean().optional(),
  weeks: z.boolean().optional(),
  link: z.boolean().optional(),
  image: z.boolean().optional(),
  video: z.boolean().optional(),
  coverEffect: z.boolean().optional(),
  description: z.boolean().optional(),
  metaDescription: z.boolean().optional(),
  challenge: z.boolean().optional(),
  services: z.boolean().optional(),
  team: z.union([z.boolean(), z.lazy(() => StudioMemberFindManySchema)]).optional(),
  techStack: z.boolean().optional(),
  date: z.boolean().optional(),
  gallery: z.boolean().optional(),
  notes: z.boolean().optional(),
  story: z.union([z.boolean(), z.lazy(() => StorySectionFindManySchema)]).optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  _count: z.union([z.boolean(), z.lazy(() => ProjectCountOutputTypeArgsObjectSchema)]).optional()
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


// File: SiteVisitorSelect.schema.ts
const __makeSchema_SiteVisitorSelect_schema = () => z.object({
  id: z.boolean().optional(),
  visitorKey: z.boolean().optional(),
  firstSeenAt: z.boolean().optional(),
  lastSeenAt: z.boolean().optional(),
  dailyVisits: z.union([z.boolean(), z.lazy(() => SiteDailyVisitorFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => SiteVisitorCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const SiteVisitorSelectObjectSchema: z.ZodType<Prisma.SiteVisitorSelect> = __makeSchema_SiteVisitorSelect_schema() as unknown as z.ZodType<Prisma.SiteVisitorSelect>;
export const SiteVisitorSelectObjectZodSchema = __makeSchema_SiteVisitorSelect_schema();


// File: SiteDailyStatSelect.schema.ts
const __makeSchema_SiteDailyStatSelect_schema = () => z.object({
  date: z.boolean().optional(),
  visits: z.boolean().optional(),
  uniqueVisitors: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  visitors: z.union([z.boolean(), z.lazy(() => SiteDailyVisitorFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => SiteDailyStatCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const SiteDailyStatSelectObjectSchema: z.ZodType<Prisma.SiteDailyStatSelect> = __makeSchema_SiteDailyStatSelect_schema() as unknown as z.ZodType<Prisma.SiteDailyStatSelect>;
export const SiteDailyStatSelectObjectZodSchema = __makeSchema_SiteDailyStatSelect_schema();


// File: SiteDailyVisitorSelect.schema.ts
const __makeSchema_SiteDailyVisitorSelect_schema = () => z.object({
  date: z.boolean().optional(),
  visitorId: z.boolean().optional(),
  firstVisitAt: z.boolean().optional(),
  day: z.union([z.boolean(), z.lazy(() => SiteDailyStatArgsObjectSchema)]).optional(),
  visitor: z.union([z.boolean(), z.lazy(() => SiteVisitorArgsObjectSchema)]).optional()
}).strict();
export const SiteDailyVisitorSelectObjectSchema: z.ZodType<Prisma.SiteDailyVisitorSelect> = __makeSchema_SiteDailyVisitorSelect_schema() as unknown as z.ZodType<Prisma.SiteDailyVisitorSelect>;
export const SiteDailyVisitorSelectObjectZodSchema = __makeSchema_SiteDailyVisitorSelect_schema();


// File: StoryBlockSelect.schema.ts
const __makeSchema_StoryBlockSelect_schema = () => z.object({
  id: z.boolean().optional(),
  sectionId: z.boolean().optional(),
  section: z.union([z.boolean(), z.lazy(() => StorySectionArgsObjectSchema)]).optional(),
  position: z.boolean().optional(),
  type: z.boolean().optional(),
  media: z.boolean().optional(),
  eyebrow: z.boolean().optional(),
  title: z.boolean().optional(),
  text: z.boolean().optional(),
  tags: z.boolean().optional(),
  logos: z.boolean().optional(),
  tiles: z.boolean().optional(),
  link: z.boolean().optional(),
  linkLabel: z.boolean().optional(),
  effect: z.boolean().optional(),
  smalls: z.boolean().optional(),
  cols: z.boolean().optional(),
  font: z.boolean().optional(),
  fontFamily: z.boolean().optional(),
  description: z.boolean().optional(),
  secondFont: z.boolean().optional(),
  secondFontFamily: z.boolean().optional(),
  secondDescription: z.boolean().optional(),
  swatches: z.boolean().optional()
}).strict();
export const StoryBlockSelectObjectSchema: z.ZodType<Prisma.StoryBlockSelect> = __makeSchema_StoryBlockSelect_schema() as unknown as z.ZodType<Prisma.StoryBlockSelect>;
export const StoryBlockSelectObjectZodSchema = __makeSchema_StoryBlockSelect_schema();


// File: StorySectionSelect.schema.ts
const __makeSchema_StorySectionSelect_schema = () => z.object({
  id: z.boolean().optional(),
  projectSlug: z.boolean().optional(),
  project: z.union([z.boolean(), z.lazy(() => ProjectArgsObjectSchema)]).optional(),
  position: z.boolean().optional(),
  title: z.boolean().optional(),
  by: z.boolean().optional(),
  blocks: z.union([z.boolean(), z.lazy(() => StoryBlockFindManySchema)]).optional(),
  layout: z.boolean().optional(),
  _count: z.union([z.boolean(), z.lazy(() => StorySectionCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const StorySectionSelectObjectSchema: z.ZodType<Prisma.StorySectionSelect> = __makeSchema_StorySectionSelect_schema() as unknown as z.ZodType<Prisma.StorySectionSelect>;
export const StorySectionSelectObjectZodSchema = __makeSchema_StorySectionSelect_schema();


// File: StudioMemberSelect.schema.ts
const __makeSchema_StudioMemberSelect_schema = () => z.object({
  slug: z.boolean().optional(),
  position: z.boolean().optional(),
  name: z.boolean().optional(),
  role: z.boolean().optional(),
  description: z.boolean().optional(),
  bio: z.boolean().optional(),
  model: z.boolean().optional(),
  scale: z.boolean().optional(),
  roughness: z.boolean().optional(),
  metalness: z.boolean().optional(),
  hair: z.boolean().optional(),
  rotation: z.boolean().optional(),
  highlight: z.boolean().optional(),
  socials: z.boolean().optional(),
  labels: z.boolean().optional(),
  projects: z.boolean().optional(),
  suite: z.boolean().optional(),
  facts: z.boolean().optional(),
  teamOf: z.union([z.boolean(), z.lazy(() => ProjectFindManySchema)]).optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  _count: z.union([z.boolean(), z.lazy(() => StudioMemberCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const StudioMemberSelectObjectSchema: z.ZodType<Prisma.StudioMemberSelect> = __makeSchema_StudioMemberSelect_schema() as unknown as z.ZodType<Prisma.StudioMemberSelect>;
export const StudioMemberSelectObjectZodSchema = __makeSchema_StudioMemberSelect_schema();


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
  select: z.lazy(() => ProjectSelectObjectSchema).optional(),
  include: z.lazy(() => ProjectIncludeObjectSchema).optional()
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


// File: SiteVisitorArgs.schema.ts
const __makeSchema_SiteVisitorArgs_schema = () => z.object({
  select: z.lazy(() => SiteVisitorSelectObjectSchema).optional(),
  include: z.lazy(() => SiteVisitorIncludeObjectSchema).optional()
}).strict();
export const SiteVisitorArgsObjectSchema = __makeSchema_SiteVisitorArgs_schema();
export const SiteVisitorArgsObjectZodSchema = __makeSchema_SiteVisitorArgs_schema();


// File: SiteDailyStatArgs.schema.ts
const __makeSchema_SiteDailyStatArgs_schema = () => z.object({
  select: z.lazy(() => SiteDailyStatSelectObjectSchema).optional(),
  include: z.lazy(() => SiteDailyStatIncludeObjectSchema).optional()
}).strict();
export const SiteDailyStatArgsObjectSchema = __makeSchema_SiteDailyStatArgs_schema();
export const SiteDailyStatArgsObjectZodSchema = __makeSchema_SiteDailyStatArgs_schema();


// File: SiteDailyVisitorArgs.schema.ts
const __makeSchema_SiteDailyVisitorArgs_schema = () => z.object({
  select: z.lazy(() => SiteDailyVisitorSelectObjectSchema).optional(),
  include: z.lazy(() => SiteDailyVisitorIncludeObjectSchema).optional()
}).strict();
export const SiteDailyVisitorArgsObjectSchema = __makeSchema_SiteDailyVisitorArgs_schema();
export const SiteDailyVisitorArgsObjectZodSchema = __makeSchema_SiteDailyVisitorArgs_schema();


// File: StoryBlockArgs.schema.ts
const __makeSchema_StoryBlockArgs_schema = () => z.object({
  select: z.lazy(() => StoryBlockSelectObjectSchema).optional(),
  include: z.lazy(() => StoryBlockIncludeObjectSchema).optional()
}).strict();
export const StoryBlockArgsObjectSchema = __makeSchema_StoryBlockArgs_schema();
export const StoryBlockArgsObjectZodSchema = __makeSchema_StoryBlockArgs_schema();


// File: StorySectionArgs.schema.ts
const __makeSchema_StorySectionArgs_schema = () => z.object({
  select: z.lazy(() => StorySectionSelectObjectSchema).optional(),
  include: z.lazy(() => StorySectionIncludeObjectSchema).optional()
}).strict();
export const StorySectionArgsObjectSchema = __makeSchema_StorySectionArgs_schema();
export const StorySectionArgsObjectZodSchema = __makeSchema_StorySectionArgs_schema();


// File: StudioMemberArgs.schema.ts
const __makeSchema_StudioMemberArgs_schema = () => z.object({
  select: z.lazy(() => StudioMemberSelectObjectSchema).optional(),
  include: z.lazy(() => StudioMemberIncludeObjectSchema).optional()
}).strict();
export const StudioMemberArgsObjectSchema = __makeSchema_StudioMemberArgs_schema();
export const StudioMemberArgsObjectZodSchema = __makeSchema_StudioMemberArgs_schema();


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


// File: ProjectInclude.schema.ts
const __makeSchema_ProjectInclude_schema = () => z.object({
  team: z.union([z.boolean(), z.lazy(() => StudioMemberFindManySchema)]).optional(),
  story: z.union([z.boolean(), z.lazy(() => StorySectionFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => ProjectCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const ProjectIncludeObjectSchema: z.ZodType<Prisma.ProjectInclude> = __makeSchema_ProjectInclude_schema() as unknown as z.ZodType<Prisma.ProjectInclude>;
export const ProjectIncludeObjectZodSchema = __makeSchema_ProjectInclude_schema();


// File: SessionInclude.schema.ts
const __makeSchema_SessionInclude_schema = () => z.object({
  user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional()
}).strict();
export const SessionIncludeObjectSchema: z.ZodType<Prisma.SessionInclude> = __makeSchema_SessionInclude_schema() as unknown as z.ZodType<Prisma.SessionInclude>;
export const SessionIncludeObjectZodSchema = __makeSchema_SessionInclude_schema();


// File: SiteVisitorInclude.schema.ts
const __makeSchema_SiteVisitorInclude_schema = () => z.object({
  dailyVisits: z.union([z.boolean(), z.lazy(() => SiteDailyVisitorFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => SiteVisitorCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const SiteVisitorIncludeObjectSchema: z.ZodType<Prisma.SiteVisitorInclude> = __makeSchema_SiteVisitorInclude_schema() as unknown as z.ZodType<Prisma.SiteVisitorInclude>;
export const SiteVisitorIncludeObjectZodSchema = __makeSchema_SiteVisitorInclude_schema();


// File: SiteDailyStatInclude.schema.ts
const __makeSchema_SiteDailyStatInclude_schema = () => z.object({
  visitors: z.union([z.boolean(), z.lazy(() => SiteDailyVisitorFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => SiteDailyStatCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const SiteDailyStatIncludeObjectSchema: z.ZodType<Prisma.SiteDailyStatInclude> = __makeSchema_SiteDailyStatInclude_schema() as unknown as z.ZodType<Prisma.SiteDailyStatInclude>;
export const SiteDailyStatIncludeObjectZodSchema = __makeSchema_SiteDailyStatInclude_schema();


// File: SiteDailyVisitorInclude.schema.ts
const __makeSchema_SiteDailyVisitorInclude_schema = () => z.object({
  day: z.union([z.boolean(), z.lazy(() => SiteDailyStatArgsObjectSchema)]).optional(),
  visitor: z.union([z.boolean(), z.lazy(() => SiteVisitorArgsObjectSchema)]).optional()
}).strict();
export const SiteDailyVisitorIncludeObjectSchema: z.ZodType<Prisma.SiteDailyVisitorInclude> = __makeSchema_SiteDailyVisitorInclude_schema() as unknown as z.ZodType<Prisma.SiteDailyVisitorInclude>;
export const SiteDailyVisitorIncludeObjectZodSchema = __makeSchema_SiteDailyVisitorInclude_schema();


// File: StoryBlockInclude.schema.ts
const __makeSchema_StoryBlockInclude_schema = () => z.object({
  section: z.union([z.boolean(), z.lazy(() => StorySectionArgsObjectSchema)]).optional()
}).strict();
export const StoryBlockIncludeObjectSchema: z.ZodType<Prisma.StoryBlockInclude> = __makeSchema_StoryBlockInclude_schema() as unknown as z.ZodType<Prisma.StoryBlockInclude>;
export const StoryBlockIncludeObjectZodSchema = __makeSchema_StoryBlockInclude_schema();


// File: StorySectionInclude.schema.ts
const __makeSchema_StorySectionInclude_schema = () => z.object({
  project: z.union([z.boolean(), z.lazy(() => ProjectArgsObjectSchema)]).optional(),
  blocks: z.union([z.boolean(), z.lazy(() => StoryBlockFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => StorySectionCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const StorySectionIncludeObjectSchema: z.ZodType<Prisma.StorySectionInclude> = __makeSchema_StorySectionInclude_schema() as unknown as z.ZodType<Prisma.StorySectionInclude>;
export const StorySectionIncludeObjectZodSchema = __makeSchema_StorySectionInclude_schema();


// File: StudioMemberInclude.schema.ts
const __makeSchema_StudioMemberInclude_schema = () => z.object({
  teamOf: z.union([z.boolean(), z.lazy(() => ProjectFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => StudioMemberCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const StudioMemberIncludeObjectSchema: z.ZodType<Prisma.StudioMemberInclude> = __makeSchema_StudioMemberInclude_schema() as unknown as z.ZodType<Prisma.StudioMemberInclude>;
export const StudioMemberIncludeObjectZodSchema = __makeSchema_StudioMemberInclude_schema();


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
    message: z.boolean().optional(),
    createdAt: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.ContactSelect>;

export const ContactFindFirstSelectZodSchema__findFirstContact_schema = z.object({
    id: z.boolean().optional(),
    email: z.boolean().optional(),
    firstName: z.boolean().optional(),
    lastName: z.boolean().optional(),
    message: z.boolean().optional(),
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
    message: z.boolean().optional(),
    createdAt: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.ContactSelect>;

export const ContactFindFirstOrThrowSelectZodSchema__findFirstOrThrowContact_schema = z.object({
    id: z.boolean().optional(),
    email: z.boolean().optional(),
    firstName: z.boolean().optional(),
    lastName: z.boolean().optional(),
    message: z.boolean().optional(),
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
    message: z.boolean().optional(),
    createdAt: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.ContactSelect>;

export const ContactFindManySelectZodSchema__findManyContact_schema = z.object({
    id: z.boolean().optional(),
    email: z.boolean().optional(),
    firstName: z.boolean().optional(),
    lastName: z.boolean().optional(),
    message: z.boolean().optional(),
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

export const ProjectFindUniqueSchema: z.ZodType<Prisma.ProjectFindUniqueArgs> = z.object({ select: ProjectSelectObjectSchema.optional(), include: ProjectIncludeObjectSchema.optional(), where: ProjectWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ProjectFindUniqueArgs>;

export const ProjectFindUniqueZodSchema = z.object({ select: ProjectSelectObjectSchema.optional(), include: ProjectIncludeObjectSchema.optional(), where: ProjectWhereUniqueInputObjectSchema }).strict();

// File: findUniqueOrThrowProject.schema.ts

export const ProjectFindUniqueOrThrowSchema: z.ZodType<Prisma.ProjectFindUniqueOrThrowArgs> = z.object({ select: ProjectSelectObjectSchema.optional(), include: ProjectIncludeObjectSchema.optional(), where: ProjectWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ProjectFindUniqueOrThrowArgs>;

export const ProjectFindUniqueOrThrowZodSchema = z.object({ select: ProjectSelectObjectSchema.optional(), include: ProjectIncludeObjectSchema.optional(), where: ProjectWhereUniqueInputObjectSchema }).strict();

// File: findFirstProject.schema.ts

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ProjectFindFirstSelectSchema__findFirstProject_schema: z.ZodType<Prisma.ProjectSelect> = z.object({
    slug: z.boolean().optional(),
    position: z.boolean().optional(),
    name: z.boolean().optional(),
    weeks: z.boolean().optional(),
    link: z.boolean().optional(),
    image: z.boolean().optional(),
    video: z.boolean().optional(),
    coverEffect: z.boolean().optional(),
    description: z.boolean().optional(),
    metaDescription: z.boolean().optional(),
    challenge: z.boolean().optional(),
    services: z.boolean().optional(),
    team: z.union([z.boolean(), z.lazy(() => StudioMemberFindManySchema)]).optional(),
    techStack: z.boolean().optional(),
    date: z.boolean().optional(),
    gallery: z.boolean().optional(),
    notes: z.boolean().optional(),
    story: z.union([z.boolean(), z.lazy(() => StorySectionFindManySchema)]).optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    _count: z.union([z.boolean(), z.lazy(() => ProjectCountOutputTypeArgsObjectSchema)]).optional()
  }).strict() as unknown as z.ZodType<Prisma.ProjectSelect>;

export const ProjectFindFirstSelectZodSchema__findFirstProject_schema = z.object({
    slug: z.boolean().optional(),
    position: z.boolean().optional(),
    name: z.boolean().optional(),
    weeks: z.boolean().optional(),
    link: z.boolean().optional(),
    image: z.boolean().optional(),
    video: z.boolean().optional(),
    coverEffect: z.boolean().optional(),
    description: z.boolean().optional(),
    metaDescription: z.boolean().optional(),
    challenge: z.boolean().optional(),
    services: z.boolean().optional(),
    team: z.union([z.boolean(), z.lazy(() => StudioMemberFindManySchema)]).optional(),
    techStack: z.boolean().optional(),
    date: z.boolean().optional(),
    gallery: z.boolean().optional(),
    notes: z.boolean().optional(),
    story: z.union([z.boolean(), z.lazy(() => StorySectionFindManySchema)]).optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    _count: z.union([z.boolean(), z.lazy(() => ProjectCountOutputTypeArgsObjectSchema)]).optional()
  }).strict();

export const ProjectFindFirstSchema: z.ZodType<Prisma.ProjectFindFirstArgs> = z.object({ select: ProjectFindFirstSelectSchema__findFirstProject_schema.optional(), include: z.lazy(() => ProjectIncludeObjectSchema.optional()), orderBy: z.union([ProjectOrderByWithRelationInputObjectSchema, ProjectOrderByWithRelationInputObjectSchema.array()]).optional(), where: ProjectWhereInputObjectSchema.optional(), cursor: ProjectWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ProjectScalarFieldEnumSchema, ProjectScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.ProjectFindFirstArgs>;

export const ProjectFindFirstZodSchema = z.object({ select: ProjectFindFirstSelectSchema__findFirstProject_schema.optional(), include: z.lazy(() => ProjectIncludeObjectSchema.optional()), orderBy: z.union([ProjectOrderByWithRelationInputObjectSchema, ProjectOrderByWithRelationInputObjectSchema.array()]).optional(), where: ProjectWhereInputObjectSchema.optional(), cursor: ProjectWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ProjectScalarFieldEnumSchema, ProjectScalarFieldEnumSchema.array()]).optional() }).strict();

// File: findFirstOrThrowProject.schema.ts

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ProjectFindFirstOrThrowSelectSchema__findFirstOrThrowProject_schema: z.ZodType<Prisma.ProjectSelect> = z.object({
    slug: z.boolean().optional(),
    position: z.boolean().optional(),
    name: z.boolean().optional(),
    weeks: z.boolean().optional(),
    link: z.boolean().optional(),
    image: z.boolean().optional(),
    video: z.boolean().optional(),
    coverEffect: z.boolean().optional(),
    description: z.boolean().optional(),
    metaDescription: z.boolean().optional(),
    challenge: z.boolean().optional(),
    services: z.boolean().optional(),
    team: z.union([z.boolean(), z.lazy(() => StudioMemberFindManySchema)]).optional(),
    techStack: z.boolean().optional(),
    date: z.boolean().optional(),
    gallery: z.boolean().optional(),
    notes: z.boolean().optional(),
    story: z.union([z.boolean(), z.lazy(() => StorySectionFindManySchema)]).optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    _count: z.union([z.boolean(), z.lazy(() => ProjectCountOutputTypeArgsObjectSchema)]).optional()
  }).strict() as unknown as z.ZodType<Prisma.ProjectSelect>;

export const ProjectFindFirstOrThrowSelectZodSchema__findFirstOrThrowProject_schema = z.object({
    slug: z.boolean().optional(),
    position: z.boolean().optional(),
    name: z.boolean().optional(),
    weeks: z.boolean().optional(),
    link: z.boolean().optional(),
    image: z.boolean().optional(),
    video: z.boolean().optional(),
    coverEffect: z.boolean().optional(),
    description: z.boolean().optional(),
    metaDescription: z.boolean().optional(),
    challenge: z.boolean().optional(),
    services: z.boolean().optional(),
    team: z.union([z.boolean(), z.lazy(() => StudioMemberFindManySchema)]).optional(),
    techStack: z.boolean().optional(),
    date: z.boolean().optional(),
    gallery: z.boolean().optional(),
    notes: z.boolean().optional(),
    story: z.union([z.boolean(), z.lazy(() => StorySectionFindManySchema)]).optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    _count: z.union([z.boolean(), z.lazy(() => ProjectCountOutputTypeArgsObjectSchema)]).optional()
  }).strict();

export const ProjectFindFirstOrThrowSchema: z.ZodType<Prisma.ProjectFindFirstOrThrowArgs> = z.object({ select: ProjectFindFirstOrThrowSelectSchema__findFirstOrThrowProject_schema.optional(), include: z.lazy(() => ProjectIncludeObjectSchema.optional()), orderBy: z.union([ProjectOrderByWithRelationInputObjectSchema, ProjectOrderByWithRelationInputObjectSchema.array()]).optional(), where: ProjectWhereInputObjectSchema.optional(), cursor: ProjectWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ProjectScalarFieldEnumSchema, ProjectScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.ProjectFindFirstOrThrowArgs>;

export const ProjectFindFirstOrThrowZodSchema = z.object({ select: ProjectFindFirstOrThrowSelectSchema__findFirstOrThrowProject_schema.optional(), include: z.lazy(() => ProjectIncludeObjectSchema.optional()), orderBy: z.union([ProjectOrderByWithRelationInputObjectSchema, ProjectOrderByWithRelationInputObjectSchema.array()]).optional(), where: ProjectWhereInputObjectSchema.optional(), cursor: ProjectWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ProjectScalarFieldEnumSchema, ProjectScalarFieldEnumSchema.array()]).optional() }).strict();

// File: findManyProject.schema.ts

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ProjectFindManySelectSchema__findManyProject_schema: z.ZodType<Prisma.ProjectSelect> = z.object({
    slug: z.boolean().optional(),
    position: z.boolean().optional(),
    name: z.boolean().optional(),
    weeks: z.boolean().optional(),
    link: z.boolean().optional(),
    image: z.boolean().optional(),
    video: z.boolean().optional(),
    coverEffect: z.boolean().optional(),
    description: z.boolean().optional(),
    metaDescription: z.boolean().optional(),
    challenge: z.boolean().optional(),
    services: z.boolean().optional(),
    team: z.union([z.boolean(), z.lazy(() => StudioMemberFindManySchema)]).optional(),
    techStack: z.boolean().optional(),
    date: z.boolean().optional(),
    gallery: z.boolean().optional(),
    notes: z.boolean().optional(),
    story: z.union([z.boolean(), z.lazy(() => StorySectionFindManySchema)]).optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    _count: z.union([z.boolean(), z.lazy(() => ProjectCountOutputTypeArgsObjectSchema)]).optional()
  }).strict() as unknown as z.ZodType<Prisma.ProjectSelect>;

export const ProjectFindManySelectZodSchema__findManyProject_schema = z.object({
    slug: z.boolean().optional(),
    position: z.boolean().optional(),
    name: z.boolean().optional(),
    weeks: z.boolean().optional(),
    link: z.boolean().optional(),
    image: z.boolean().optional(),
    video: z.boolean().optional(),
    coverEffect: z.boolean().optional(),
    description: z.boolean().optional(),
    metaDescription: z.boolean().optional(),
    challenge: z.boolean().optional(),
    services: z.boolean().optional(),
    team: z.union([z.boolean(), z.lazy(() => StudioMemberFindManySchema)]).optional(),
    techStack: z.boolean().optional(),
    date: z.boolean().optional(),
    gallery: z.boolean().optional(),
    notes: z.boolean().optional(),
    story: z.union([z.boolean(), z.lazy(() => StorySectionFindManySchema)]).optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    _count: z.union([z.boolean(), z.lazy(() => ProjectCountOutputTypeArgsObjectSchema)]).optional()
  }).strict();

export const ProjectFindManySchema: z.ZodType<Prisma.ProjectFindManyArgs> = z.object({ select: ProjectFindManySelectSchema__findManyProject_schema.optional(), include: z.lazy(() => ProjectIncludeObjectSchema.optional()), orderBy: z.union([ProjectOrderByWithRelationInputObjectSchema, ProjectOrderByWithRelationInputObjectSchema.array()]).optional(), where: ProjectWhereInputObjectSchema.optional(), cursor: ProjectWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ProjectScalarFieldEnumSchema, ProjectScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.ProjectFindManyArgs>;

export const ProjectFindManyZodSchema = z.object({ select: ProjectFindManySelectSchema__findManyProject_schema.optional(), include: z.lazy(() => ProjectIncludeObjectSchema.optional()), orderBy: z.union([ProjectOrderByWithRelationInputObjectSchema, ProjectOrderByWithRelationInputObjectSchema.array()]).optional(), where: ProjectWhereInputObjectSchema.optional(), cursor: ProjectWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ProjectScalarFieldEnumSchema, ProjectScalarFieldEnumSchema.array()]).optional() }).strict();

// File: countProject.schema.ts

export const ProjectCountSchema: z.ZodType<Prisma.ProjectCountArgs> = z.object({ orderBy: z.union([ProjectOrderByWithRelationInputObjectSchema, ProjectOrderByWithRelationInputObjectSchema.array()]).optional(), where: ProjectWhereInputObjectSchema.optional(), cursor: ProjectWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), ProjectCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.ProjectCountArgs>;

export const ProjectCountZodSchema = z.object({ orderBy: z.union([ProjectOrderByWithRelationInputObjectSchema, ProjectOrderByWithRelationInputObjectSchema.array()]).optional(), where: ProjectWhereInputObjectSchema.optional(), cursor: ProjectWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), ProjectCountAggregateInputObjectSchema ]).optional() }).strict();

// File: createOneProject.schema.ts

export const ProjectCreateOneSchema: z.ZodType<Prisma.ProjectCreateArgs> = z.object({ select: ProjectSelectObjectSchema.optional(), include: ProjectIncludeObjectSchema.optional(), data: z.union([ProjectCreateInputObjectSchema, ProjectUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.ProjectCreateArgs>;

export const ProjectCreateOneZodSchema = z.object({ select: ProjectSelectObjectSchema.optional(), include: ProjectIncludeObjectSchema.optional(), data: z.union([ProjectCreateInputObjectSchema, ProjectUncheckedCreateInputObjectSchema]) }).strict();

// File: createManyProject.schema.ts

export const ProjectCreateManySchema: z.ZodType<Prisma.ProjectCreateManyArgs> = z.object({ data: z.union([ ProjectCreateManyInputObjectSchema, z.array(ProjectCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.ProjectCreateManyArgs>;

export const ProjectCreateManyZodSchema = z.object({ data: z.union([ ProjectCreateManyInputObjectSchema, z.array(ProjectCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();

// File: createManyAndReturnProject.schema.ts

export const ProjectCreateManyAndReturnSchema: z.ZodType<Prisma.ProjectCreateManyAndReturnArgs> = z.object({ select: ProjectSelectObjectSchema.optional(), data: z.union([ ProjectCreateManyInputObjectSchema, z.array(ProjectCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.ProjectCreateManyAndReturnArgs>;

export const ProjectCreateManyAndReturnZodSchema = z.object({ select: ProjectSelectObjectSchema.optional(), data: z.union([ ProjectCreateManyInputObjectSchema, z.array(ProjectCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();

// File: deleteOneProject.schema.ts

export const ProjectDeleteOneSchema: z.ZodType<Prisma.ProjectDeleteArgs> = z.object({ select: ProjectSelectObjectSchema.optional(), include: ProjectIncludeObjectSchema.optional(), where: ProjectWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ProjectDeleteArgs>;

export const ProjectDeleteOneZodSchema = z.object({ select: ProjectSelectObjectSchema.optional(), include: ProjectIncludeObjectSchema.optional(), where: ProjectWhereUniqueInputObjectSchema }).strict();

// File: deleteManyProject.schema.ts

export const ProjectDeleteManySchema: z.ZodType<Prisma.ProjectDeleteManyArgs> = z.object({ where: ProjectWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ProjectDeleteManyArgs>;

export const ProjectDeleteManyZodSchema = z.object({ where: ProjectWhereInputObjectSchema.optional() }).strict();

// File: updateOneProject.schema.ts

export const ProjectUpdateOneSchema: z.ZodType<Prisma.ProjectUpdateArgs> = z.object({ select: ProjectSelectObjectSchema.optional(), include: ProjectIncludeObjectSchema.optional(), data: z.union([ProjectUpdateInputObjectSchema, ProjectUncheckedUpdateInputObjectSchema]), where: ProjectWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ProjectUpdateArgs>;

export const ProjectUpdateOneZodSchema = z.object({ select: ProjectSelectObjectSchema.optional(), include: ProjectIncludeObjectSchema.optional(), data: z.union([ProjectUpdateInputObjectSchema, ProjectUncheckedUpdateInputObjectSchema]), where: ProjectWhereUniqueInputObjectSchema }).strict();

// File: updateManyProject.schema.ts

export const ProjectUpdateManySchema: z.ZodType<Prisma.ProjectUpdateManyArgs> = z.object({ data: ProjectUpdateManyMutationInputObjectSchema, where: ProjectWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ProjectUpdateManyArgs>;

export const ProjectUpdateManyZodSchema = z.object({ data: ProjectUpdateManyMutationInputObjectSchema, where: ProjectWhereInputObjectSchema.optional() }).strict();

// File: updateManyAndReturnProject.schema.ts

export const ProjectUpdateManyAndReturnSchema: z.ZodType<Prisma.ProjectUpdateManyAndReturnArgs> = z.object({ select: ProjectSelectObjectSchema.optional(), data: ProjectUpdateManyMutationInputObjectSchema, where: ProjectWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ProjectUpdateManyAndReturnArgs>;

export const ProjectUpdateManyAndReturnZodSchema = z.object({ select: ProjectSelectObjectSchema.optional(), data: ProjectUpdateManyMutationInputObjectSchema, where: ProjectWhereInputObjectSchema.optional() }).strict();

// File: upsertOneProject.schema.ts

export const ProjectUpsertOneSchema: z.ZodType<Prisma.ProjectUpsertArgs> = z.object({ select: ProjectSelectObjectSchema.optional(), include: ProjectIncludeObjectSchema.optional(), where: ProjectWhereUniqueInputObjectSchema, create: z.union([ ProjectCreateInputObjectSchema, ProjectUncheckedCreateInputObjectSchema ]), update: z.union([ ProjectUpdateInputObjectSchema, ProjectUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.ProjectUpsertArgs>;

export const ProjectUpsertOneZodSchema = z.object({ select: ProjectSelectObjectSchema.optional(), include: ProjectIncludeObjectSchema.optional(), where: ProjectWhereUniqueInputObjectSchema, create: z.union([ ProjectCreateInputObjectSchema, ProjectUncheckedCreateInputObjectSchema ]), update: z.union([ ProjectUpdateInputObjectSchema, ProjectUncheckedUpdateInputObjectSchema ]) }).strict();

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

// File: findUniqueSiteVisitor.schema.ts

export const SiteVisitorFindUniqueSchema: z.ZodType<Prisma.SiteVisitorFindUniqueArgs> = z.object({ select: SiteVisitorSelectObjectSchema.optional(), include: SiteVisitorIncludeObjectSchema.optional(), where: SiteVisitorWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.SiteVisitorFindUniqueArgs>;

export const SiteVisitorFindUniqueZodSchema = z.object({ select: SiteVisitorSelectObjectSchema.optional(), include: SiteVisitorIncludeObjectSchema.optional(), where: SiteVisitorWhereUniqueInputObjectSchema }).strict();

// File: findUniqueOrThrowSiteVisitor.schema.ts

export const SiteVisitorFindUniqueOrThrowSchema: z.ZodType<Prisma.SiteVisitorFindUniqueOrThrowArgs> = z.object({ select: SiteVisitorSelectObjectSchema.optional(), include: SiteVisitorIncludeObjectSchema.optional(), where: SiteVisitorWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.SiteVisitorFindUniqueOrThrowArgs>;

export const SiteVisitorFindUniqueOrThrowZodSchema = z.object({ select: SiteVisitorSelectObjectSchema.optional(), include: SiteVisitorIncludeObjectSchema.optional(), where: SiteVisitorWhereUniqueInputObjectSchema }).strict();

// File: findFirstSiteVisitor.schema.ts

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const SiteVisitorFindFirstSelectSchema__findFirstSiteVisitor_schema: z.ZodType<Prisma.SiteVisitorSelect> = z.object({
    id: z.boolean().optional(),
    visitorKey: z.boolean().optional(),
    firstSeenAt: z.boolean().optional(),
    lastSeenAt: z.boolean().optional(),
    dailyVisits: z.union([z.boolean(), z.lazy(() => SiteDailyVisitorFindManySchema)]).optional(),
    _count: z.union([z.boolean(), z.lazy(() => SiteVisitorCountOutputTypeArgsObjectSchema)]).optional()
  }).strict() as unknown as z.ZodType<Prisma.SiteVisitorSelect>;

export const SiteVisitorFindFirstSelectZodSchema__findFirstSiteVisitor_schema = z.object({
    id: z.boolean().optional(),
    visitorKey: z.boolean().optional(),
    firstSeenAt: z.boolean().optional(),
    lastSeenAt: z.boolean().optional(),
    dailyVisits: z.union([z.boolean(), z.lazy(() => SiteDailyVisitorFindManySchema)]).optional(),
    _count: z.union([z.boolean(), z.lazy(() => SiteVisitorCountOutputTypeArgsObjectSchema)]).optional()
  }).strict();

export const SiteVisitorFindFirstSchema: z.ZodType<Prisma.SiteVisitorFindFirstArgs> = z.object({ select: SiteVisitorFindFirstSelectSchema__findFirstSiteVisitor_schema.optional(), include: z.lazy(() => SiteVisitorIncludeObjectSchema.optional()), orderBy: z.union([SiteVisitorOrderByWithRelationInputObjectSchema, SiteVisitorOrderByWithRelationInputObjectSchema.array()]).optional(), where: SiteVisitorWhereInputObjectSchema.optional(), cursor: SiteVisitorWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([SiteVisitorScalarFieldEnumSchema, SiteVisitorScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.SiteVisitorFindFirstArgs>;

export const SiteVisitorFindFirstZodSchema = z.object({ select: SiteVisitorFindFirstSelectSchema__findFirstSiteVisitor_schema.optional(), include: z.lazy(() => SiteVisitorIncludeObjectSchema.optional()), orderBy: z.union([SiteVisitorOrderByWithRelationInputObjectSchema, SiteVisitorOrderByWithRelationInputObjectSchema.array()]).optional(), where: SiteVisitorWhereInputObjectSchema.optional(), cursor: SiteVisitorWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([SiteVisitorScalarFieldEnumSchema, SiteVisitorScalarFieldEnumSchema.array()]).optional() }).strict();

// File: findFirstOrThrowSiteVisitor.schema.ts

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const SiteVisitorFindFirstOrThrowSelectSchema__findFirstOrThrowSiteVisitor_schema: z.ZodType<Prisma.SiteVisitorSelect> = z.object({
    id: z.boolean().optional(),
    visitorKey: z.boolean().optional(),
    firstSeenAt: z.boolean().optional(),
    lastSeenAt: z.boolean().optional(),
    dailyVisits: z.union([z.boolean(), z.lazy(() => SiteDailyVisitorFindManySchema)]).optional(),
    _count: z.union([z.boolean(), z.lazy(() => SiteVisitorCountOutputTypeArgsObjectSchema)]).optional()
  }).strict() as unknown as z.ZodType<Prisma.SiteVisitorSelect>;

export const SiteVisitorFindFirstOrThrowSelectZodSchema__findFirstOrThrowSiteVisitor_schema = z.object({
    id: z.boolean().optional(),
    visitorKey: z.boolean().optional(),
    firstSeenAt: z.boolean().optional(),
    lastSeenAt: z.boolean().optional(),
    dailyVisits: z.union([z.boolean(), z.lazy(() => SiteDailyVisitorFindManySchema)]).optional(),
    _count: z.union([z.boolean(), z.lazy(() => SiteVisitorCountOutputTypeArgsObjectSchema)]).optional()
  }).strict();

export const SiteVisitorFindFirstOrThrowSchema: z.ZodType<Prisma.SiteVisitorFindFirstOrThrowArgs> = z.object({ select: SiteVisitorFindFirstOrThrowSelectSchema__findFirstOrThrowSiteVisitor_schema.optional(), include: z.lazy(() => SiteVisitorIncludeObjectSchema.optional()), orderBy: z.union([SiteVisitorOrderByWithRelationInputObjectSchema, SiteVisitorOrderByWithRelationInputObjectSchema.array()]).optional(), where: SiteVisitorWhereInputObjectSchema.optional(), cursor: SiteVisitorWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([SiteVisitorScalarFieldEnumSchema, SiteVisitorScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.SiteVisitorFindFirstOrThrowArgs>;

export const SiteVisitorFindFirstOrThrowZodSchema = z.object({ select: SiteVisitorFindFirstOrThrowSelectSchema__findFirstOrThrowSiteVisitor_schema.optional(), include: z.lazy(() => SiteVisitorIncludeObjectSchema.optional()), orderBy: z.union([SiteVisitorOrderByWithRelationInputObjectSchema, SiteVisitorOrderByWithRelationInputObjectSchema.array()]).optional(), where: SiteVisitorWhereInputObjectSchema.optional(), cursor: SiteVisitorWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([SiteVisitorScalarFieldEnumSchema, SiteVisitorScalarFieldEnumSchema.array()]).optional() }).strict();

// File: findManySiteVisitor.schema.ts

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const SiteVisitorFindManySelectSchema__findManySiteVisitor_schema: z.ZodType<Prisma.SiteVisitorSelect> = z.object({
    id: z.boolean().optional(),
    visitorKey: z.boolean().optional(),
    firstSeenAt: z.boolean().optional(),
    lastSeenAt: z.boolean().optional(),
    dailyVisits: z.union([z.boolean(), z.lazy(() => SiteDailyVisitorFindManySchema)]).optional(),
    _count: z.union([z.boolean(), z.lazy(() => SiteVisitorCountOutputTypeArgsObjectSchema)]).optional()
  }).strict() as unknown as z.ZodType<Prisma.SiteVisitorSelect>;

export const SiteVisitorFindManySelectZodSchema__findManySiteVisitor_schema = z.object({
    id: z.boolean().optional(),
    visitorKey: z.boolean().optional(),
    firstSeenAt: z.boolean().optional(),
    lastSeenAt: z.boolean().optional(),
    dailyVisits: z.union([z.boolean(), z.lazy(() => SiteDailyVisitorFindManySchema)]).optional(),
    _count: z.union([z.boolean(), z.lazy(() => SiteVisitorCountOutputTypeArgsObjectSchema)]).optional()
  }).strict();

export const SiteVisitorFindManySchema: z.ZodType<Prisma.SiteVisitorFindManyArgs> = z.object({ select: SiteVisitorFindManySelectSchema__findManySiteVisitor_schema.optional(), include: z.lazy(() => SiteVisitorIncludeObjectSchema.optional()), orderBy: z.union([SiteVisitorOrderByWithRelationInputObjectSchema, SiteVisitorOrderByWithRelationInputObjectSchema.array()]).optional(), where: SiteVisitorWhereInputObjectSchema.optional(), cursor: SiteVisitorWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([SiteVisitorScalarFieldEnumSchema, SiteVisitorScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.SiteVisitorFindManyArgs>;

export const SiteVisitorFindManyZodSchema = z.object({ select: SiteVisitorFindManySelectSchema__findManySiteVisitor_schema.optional(), include: z.lazy(() => SiteVisitorIncludeObjectSchema.optional()), orderBy: z.union([SiteVisitorOrderByWithRelationInputObjectSchema, SiteVisitorOrderByWithRelationInputObjectSchema.array()]).optional(), where: SiteVisitorWhereInputObjectSchema.optional(), cursor: SiteVisitorWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([SiteVisitorScalarFieldEnumSchema, SiteVisitorScalarFieldEnumSchema.array()]).optional() }).strict();

// File: countSiteVisitor.schema.ts

export const SiteVisitorCountSchema: z.ZodType<Prisma.SiteVisitorCountArgs> = z.object({ orderBy: z.union([SiteVisitorOrderByWithRelationInputObjectSchema, SiteVisitorOrderByWithRelationInputObjectSchema.array()]).optional(), where: SiteVisitorWhereInputObjectSchema.optional(), cursor: SiteVisitorWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), SiteVisitorCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.SiteVisitorCountArgs>;

export const SiteVisitorCountZodSchema = z.object({ orderBy: z.union([SiteVisitorOrderByWithRelationInputObjectSchema, SiteVisitorOrderByWithRelationInputObjectSchema.array()]).optional(), where: SiteVisitorWhereInputObjectSchema.optional(), cursor: SiteVisitorWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), SiteVisitorCountAggregateInputObjectSchema ]).optional() }).strict();

// File: createOneSiteVisitor.schema.ts

export const SiteVisitorCreateOneSchema: z.ZodType<Prisma.SiteVisitorCreateArgs> = z.object({ select: SiteVisitorSelectObjectSchema.optional(), include: SiteVisitorIncludeObjectSchema.optional(), data: z.union([SiteVisitorCreateInputObjectSchema, SiteVisitorUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.SiteVisitorCreateArgs>;

export const SiteVisitorCreateOneZodSchema = z.object({ select: SiteVisitorSelectObjectSchema.optional(), include: SiteVisitorIncludeObjectSchema.optional(), data: z.union([SiteVisitorCreateInputObjectSchema, SiteVisitorUncheckedCreateInputObjectSchema]) }).strict();

// File: createManySiteVisitor.schema.ts

export const SiteVisitorCreateManySchema: z.ZodType<Prisma.SiteVisitorCreateManyArgs> = z.object({ data: z.union([ SiteVisitorCreateManyInputObjectSchema, z.array(SiteVisitorCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.SiteVisitorCreateManyArgs>;

export const SiteVisitorCreateManyZodSchema = z.object({ data: z.union([ SiteVisitorCreateManyInputObjectSchema, z.array(SiteVisitorCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();

// File: createManyAndReturnSiteVisitor.schema.ts

export const SiteVisitorCreateManyAndReturnSchema: z.ZodType<Prisma.SiteVisitorCreateManyAndReturnArgs> = z.object({ select: SiteVisitorSelectObjectSchema.optional(), data: z.union([ SiteVisitorCreateManyInputObjectSchema, z.array(SiteVisitorCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.SiteVisitorCreateManyAndReturnArgs>;

export const SiteVisitorCreateManyAndReturnZodSchema = z.object({ select: SiteVisitorSelectObjectSchema.optional(), data: z.union([ SiteVisitorCreateManyInputObjectSchema, z.array(SiteVisitorCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();

// File: deleteOneSiteVisitor.schema.ts

export const SiteVisitorDeleteOneSchema: z.ZodType<Prisma.SiteVisitorDeleteArgs> = z.object({ select: SiteVisitorSelectObjectSchema.optional(), include: SiteVisitorIncludeObjectSchema.optional(), where: SiteVisitorWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.SiteVisitorDeleteArgs>;

export const SiteVisitorDeleteOneZodSchema = z.object({ select: SiteVisitorSelectObjectSchema.optional(), include: SiteVisitorIncludeObjectSchema.optional(), where: SiteVisitorWhereUniqueInputObjectSchema }).strict();

// File: deleteManySiteVisitor.schema.ts

export const SiteVisitorDeleteManySchema: z.ZodType<Prisma.SiteVisitorDeleteManyArgs> = z.object({ where: SiteVisitorWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.SiteVisitorDeleteManyArgs>;

export const SiteVisitorDeleteManyZodSchema = z.object({ where: SiteVisitorWhereInputObjectSchema.optional() }).strict();

// File: updateOneSiteVisitor.schema.ts

export const SiteVisitorUpdateOneSchema: z.ZodType<Prisma.SiteVisitorUpdateArgs> = z.object({ select: SiteVisitorSelectObjectSchema.optional(), include: SiteVisitorIncludeObjectSchema.optional(), data: z.union([SiteVisitorUpdateInputObjectSchema, SiteVisitorUncheckedUpdateInputObjectSchema]), where: SiteVisitorWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.SiteVisitorUpdateArgs>;

export const SiteVisitorUpdateOneZodSchema = z.object({ select: SiteVisitorSelectObjectSchema.optional(), include: SiteVisitorIncludeObjectSchema.optional(), data: z.union([SiteVisitorUpdateInputObjectSchema, SiteVisitorUncheckedUpdateInputObjectSchema]), where: SiteVisitorWhereUniqueInputObjectSchema }).strict();

// File: updateManySiteVisitor.schema.ts

export const SiteVisitorUpdateManySchema: z.ZodType<Prisma.SiteVisitorUpdateManyArgs> = z.object({ data: SiteVisitorUpdateManyMutationInputObjectSchema, where: SiteVisitorWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.SiteVisitorUpdateManyArgs>;

export const SiteVisitorUpdateManyZodSchema = z.object({ data: SiteVisitorUpdateManyMutationInputObjectSchema, where: SiteVisitorWhereInputObjectSchema.optional() }).strict();

// File: updateManyAndReturnSiteVisitor.schema.ts

export const SiteVisitorUpdateManyAndReturnSchema: z.ZodType<Prisma.SiteVisitorUpdateManyAndReturnArgs> = z.object({ select: SiteVisitorSelectObjectSchema.optional(), data: SiteVisitorUpdateManyMutationInputObjectSchema, where: SiteVisitorWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.SiteVisitorUpdateManyAndReturnArgs>;

export const SiteVisitorUpdateManyAndReturnZodSchema = z.object({ select: SiteVisitorSelectObjectSchema.optional(), data: SiteVisitorUpdateManyMutationInputObjectSchema, where: SiteVisitorWhereInputObjectSchema.optional() }).strict();

// File: upsertOneSiteVisitor.schema.ts

export const SiteVisitorUpsertOneSchema: z.ZodType<Prisma.SiteVisitorUpsertArgs> = z.object({ select: SiteVisitorSelectObjectSchema.optional(), include: SiteVisitorIncludeObjectSchema.optional(), where: SiteVisitorWhereUniqueInputObjectSchema, create: z.union([ SiteVisitorCreateInputObjectSchema, SiteVisitorUncheckedCreateInputObjectSchema ]), update: z.union([ SiteVisitorUpdateInputObjectSchema, SiteVisitorUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.SiteVisitorUpsertArgs>;

export const SiteVisitorUpsertOneZodSchema = z.object({ select: SiteVisitorSelectObjectSchema.optional(), include: SiteVisitorIncludeObjectSchema.optional(), where: SiteVisitorWhereUniqueInputObjectSchema, create: z.union([ SiteVisitorCreateInputObjectSchema, SiteVisitorUncheckedCreateInputObjectSchema ]), update: z.union([ SiteVisitorUpdateInputObjectSchema, SiteVisitorUncheckedUpdateInputObjectSchema ]) }).strict();

// File: aggregateSiteVisitor.schema.ts

export const SiteVisitorAggregateSchema: z.ZodType<Prisma.SiteVisitorAggregateArgs> = z.object({ orderBy: z.union([SiteVisitorOrderByWithRelationInputObjectSchema, SiteVisitorOrderByWithRelationInputObjectSchema.array()]).optional(), where: SiteVisitorWhereInputObjectSchema.optional(), cursor: SiteVisitorWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), SiteVisitorCountAggregateInputObjectSchema ]).optional(), _min: SiteVisitorMinAggregateInputObjectSchema.optional(), _max: SiteVisitorMaxAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.SiteVisitorAggregateArgs>;

export const SiteVisitorAggregateZodSchema = z.object({ orderBy: z.union([SiteVisitorOrderByWithRelationInputObjectSchema, SiteVisitorOrderByWithRelationInputObjectSchema.array()]).optional(), where: SiteVisitorWhereInputObjectSchema.optional(), cursor: SiteVisitorWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), SiteVisitorCountAggregateInputObjectSchema ]).optional(), _min: SiteVisitorMinAggregateInputObjectSchema.optional(), _max: SiteVisitorMaxAggregateInputObjectSchema.optional() }).strict();

// File: groupBySiteVisitor.schema.ts

export const SiteVisitorGroupBySchema: z.ZodType<Prisma.SiteVisitorGroupByArgs> = z.object({ where: SiteVisitorWhereInputObjectSchema.optional(), orderBy: z.union([SiteVisitorOrderByWithAggregationInputObjectSchema, SiteVisitorOrderByWithAggregationInputObjectSchema.array()]).optional(), having: SiteVisitorScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(SiteVisitorScalarFieldEnumSchema), _count: z.union([ z.literal(true), SiteVisitorCountAggregateInputObjectSchema ]).optional(), _min: SiteVisitorMinAggregateInputObjectSchema.optional(), _max: SiteVisitorMaxAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.SiteVisitorGroupByArgs>;

export const SiteVisitorGroupByZodSchema = z.object({ where: SiteVisitorWhereInputObjectSchema.optional(), orderBy: z.union([SiteVisitorOrderByWithAggregationInputObjectSchema, SiteVisitorOrderByWithAggregationInputObjectSchema.array()]).optional(), having: SiteVisitorScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(SiteVisitorScalarFieldEnumSchema), _count: z.union([ z.literal(true), SiteVisitorCountAggregateInputObjectSchema ]).optional(), _min: SiteVisitorMinAggregateInputObjectSchema.optional(), _max: SiteVisitorMaxAggregateInputObjectSchema.optional() }).strict();

// File: findUniqueSiteDailyStat.schema.ts

export const SiteDailyStatFindUniqueSchema: z.ZodType<Prisma.SiteDailyStatFindUniqueArgs> = z.object({ select: SiteDailyStatSelectObjectSchema.optional(), include: SiteDailyStatIncludeObjectSchema.optional(), where: SiteDailyStatWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.SiteDailyStatFindUniqueArgs>;

export const SiteDailyStatFindUniqueZodSchema = z.object({ select: SiteDailyStatSelectObjectSchema.optional(), include: SiteDailyStatIncludeObjectSchema.optional(), where: SiteDailyStatWhereUniqueInputObjectSchema }).strict();

// File: findUniqueOrThrowSiteDailyStat.schema.ts

export const SiteDailyStatFindUniqueOrThrowSchema: z.ZodType<Prisma.SiteDailyStatFindUniqueOrThrowArgs> = z.object({ select: SiteDailyStatSelectObjectSchema.optional(), include: SiteDailyStatIncludeObjectSchema.optional(), where: SiteDailyStatWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.SiteDailyStatFindUniqueOrThrowArgs>;

export const SiteDailyStatFindUniqueOrThrowZodSchema = z.object({ select: SiteDailyStatSelectObjectSchema.optional(), include: SiteDailyStatIncludeObjectSchema.optional(), where: SiteDailyStatWhereUniqueInputObjectSchema }).strict();

// File: findFirstSiteDailyStat.schema.ts

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const SiteDailyStatFindFirstSelectSchema__findFirstSiteDailyStat_schema: z.ZodType<Prisma.SiteDailyStatSelect> = z.object({
    date: z.boolean().optional(),
    visits: z.boolean().optional(),
    uniqueVisitors: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    visitors: z.union([z.boolean(), z.lazy(() => SiteDailyVisitorFindManySchema)]).optional(),
    _count: z.union([z.boolean(), z.lazy(() => SiteDailyStatCountOutputTypeArgsObjectSchema)]).optional()
  }).strict() as unknown as z.ZodType<Prisma.SiteDailyStatSelect>;

export const SiteDailyStatFindFirstSelectZodSchema__findFirstSiteDailyStat_schema = z.object({
    date: z.boolean().optional(),
    visits: z.boolean().optional(),
    uniqueVisitors: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    visitors: z.union([z.boolean(), z.lazy(() => SiteDailyVisitorFindManySchema)]).optional(),
    _count: z.union([z.boolean(), z.lazy(() => SiteDailyStatCountOutputTypeArgsObjectSchema)]).optional()
  }).strict();

export const SiteDailyStatFindFirstSchema: z.ZodType<Prisma.SiteDailyStatFindFirstArgs> = z.object({ select: SiteDailyStatFindFirstSelectSchema__findFirstSiteDailyStat_schema.optional(), include: z.lazy(() => SiteDailyStatIncludeObjectSchema.optional()), orderBy: z.union([SiteDailyStatOrderByWithRelationInputObjectSchema, SiteDailyStatOrderByWithRelationInputObjectSchema.array()]).optional(), where: SiteDailyStatWhereInputObjectSchema.optional(), cursor: SiteDailyStatWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([SiteDailyStatScalarFieldEnumSchema, SiteDailyStatScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.SiteDailyStatFindFirstArgs>;

export const SiteDailyStatFindFirstZodSchema = z.object({ select: SiteDailyStatFindFirstSelectSchema__findFirstSiteDailyStat_schema.optional(), include: z.lazy(() => SiteDailyStatIncludeObjectSchema.optional()), orderBy: z.union([SiteDailyStatOrderByWithRelationInputObjectSchema, SiteDailyStatOrderByWithRelationInputObjectSchema.array()]).optional(), where: SiteDailyStatWhereInputObjectSchema.optional(), cursor: SiteDailyStatWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([SiteDailyStatScalarFieldEnumSchema, SiteDailyStatScalarFieldEnumSchema.array()]).optional() }).strict();

// File: findFirstOrThrowSiteDailyStat.schema.ts

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const SiteDailyStatFindFirstOrThrowSelectSchema__findFirstOrThrowSiteDailyStat_schema: z.ZodType<Prisma.SiteDailyStatSelect> = z.object({
    date: z.boolean().optional(),
    visits: z.boolean().optional(),
    uniqueVisitors: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    visitors: z.union([z.boolean(), z.lazy(() => SiteDailyVisitorFindManySchema)]).optional(),
    _count: z.union([z.boolean(), z.lazy(() => SiteDailyStatCountOutputTypeArgsObjectSchema)]).optional()
  }).strict() as unknown as z.ZodType<Prisma.SiteDailyStatSelect>;

export const SiteDailyStatFindFirstOrThrowSelectZodSchema__findFirstOrThrowSiteDailyStat_schema = z.object({
    date: z.boolean().optional(),
    visits: z.boolean().optional(),
    uniqueVisitors: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    visitors: z.union([z.boolean(), z.lazy(() => SiteDailyVisitorFindManySchema)]).optional(),
    _count: z.union([z.boolean(), z.lazy(() => SiteDailyStatCountOutputTypeArgsObjectSchema)]).optional()
  }).strict();

export const SiteDailyStatFindFirstOrThrowSchema: z.ZodType<Prisma.SiteDailyStatFindFirstOrThrowArgs> = z.object({ select: SiteDailyStatFindFirstOrThrowSelectSchema__findFirstOrThrowSiteDailyStat_schema.optional(), include: z.lazy(() => SiteDailyStatIncludeObjectSchema.optional()), orderBy: z.union([SiteDailyStatOrderByWithRelationInputObjectSchema, SiteDailyStatOrderByWithRelationInputObjectSchema.array()]).optional(), where: SiteDailyStatWhereInputObjectSchema.optional(), cursor: SiteDailyStatWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([SiteDailyStatScalarFieldEnumSchema, SiteDailyStatScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.SiteDailyStatFindFirstOrThrowArgs>;

export const SiteDailyStatFindFirstOrThrowZodSchema = z.object({ select: SiteDailyStatFindFirstOrThrowSelectSchema__findFirstOrThrowSiteDailyStat_schema.optional(), include: z.lazy(() => SiteDailyStatIncludeObjectSchema.optional()), orderBy: z.union([SiteDailyStatOrderByWithRelationInputObjectSchema, SiteDailyStatOrderByWithRelationInputObjectSchema.array()]).optional(), where: SiteDailyStatWhereInputObjectSchema.optional(), cursor: SiteDailyStatWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([SiteDailyStatScalarFieldEnumSchema, SiteDailyStatScalarFieldEnumSchema.array()]).optional() }).strict();

// File: findManySiteDailyStat.schema.ts

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const SiteDailyStatFindManySelectSchema__findManySiteDailyStat_schema: z.ZodType<Prisma.SiteDailyStatSelect> = z.object({
    date: z.boolean().optional(),
    visits: z.boolean().optional(),
    uniqueVisitors: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    visitors: z.union([z.boolean(), z.lazy(() => SiteDailyVisitorFindManySchema)]).optional(),
    _count: z.union([z.boolean(), z.lazy(() => SiteDailyStatCountOutputTypeArgsObjectSchema)]).optional()
  }).strict() as unknown as z.ZodType<Prisma.SiteDailyStatSelect>;

export const SiteDailyStatFindManySelectZodSchema__findManySiteDailyStat_schema = z.object({
    date: z.boolean().optional(),
    visits: z.boolean().optional(),
    uniqueVisitors: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    visitors: z.union([z.boolean(), z.lazy(() => SiteDailyVisitorFindManySchema)]).optional(),
    _count: z.union([z.boolean(), z.lazy(() => SiteDailyStatCountOutputTypeArgsObjectSchema)]).optional()
  }).strict();

export const SiteDailyStatFindManySchema: z.ZodType<Prisma.SiteDailyStatFindManyArgs> = z.object({ select: SiteDailyStatFindManySelectSchema__findManySiteDailyStat_schema.optional(), include: z.lazy(() => SiteDailyStatIncludeObjectSchema.optional()), orderBy: z.union([SiteDailyStatOrderByWithRelationInputObjectSchema, SiteDailyStatOrderByWithRelationInputObjectSchema.array()]).optional(), where: SiteDailyStatWhereInputObjectSchema.optional(), cursor: SiteDailyStatWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([SiteDailyStatScalarFieldEnumSchema, SiteDailyStatScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.SiteDailyStatFindManyArgs>;

export const SiteDailyStatFindManyZodSchema = z.object({ select: SiteDailyStatFindManySelectSchema__findManySiteDailyStat_schema.optional(), include: z.lazy(() => SiteDailyStatIncludeObjectSchema.optional()), orderBy: z.union([SiteDailyStatOrderByWithRelationInputObjectSchema, SiteDailyStatOrderByWithRelationInputObjectSchema.array()]).optional(), where: SiteDailyStatWhereInputObjectSchema.optional(), cursor: SiteDailyStatWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([SiteDailyStatScalarFieldEnumSchema, SiteDailyStatScalarFieldEnumSchema.array()]).optional() }).strict();

// File: countSiteDailyStat.schema.ts

export const SiteDailyStatCountSchema: z.ZodType<Prisma.SiteDailyStatCountArgs> = z.object({ orderBy: z.union([SiteDailyStatOrderByWithRelationInputObjectSchema, SiteDailyStatOrderByWithRelationInputObjectSchema.array()]).optional(), where: SiteDailyStatWhereInputObjectSchema.optional(), cursor: SiteDailyStatWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), SiteDailyStatCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.SiteDailyStatCountArgs>;

export const SiteDailyStatCountZodSchema = z.object({ orderBy: z.union([SiteDailyStatOrderByWithRelationInputObjectSchema, SiteDailyStatOrderByWithRelationInputObjectSchema.array()]).optional(), where: SiteDailyStatWhereInputObjectSchema.optional(), cursor: SiteDailyStatWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), SiteDailyStatCountAggregateInputObjectSchema ]).optional() }).strict();

// File: createOneSiteDailyStat.schema.ts

export const SiteDailyStatCreateOneSchema: z.ZodType<Prisma.SiteDailyStatCreateArgs> = z.object({ select: SiteDailyStatSelectObjectSchema.optional(), include: SiteDailyStatIncludeObjectSchema.optional(), data: z.union([SiteDailyStatCreateInputObjectSchema, SiteDailyStatUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.SiteDailyStatCreateArgs>;

export const SiteDailyStatCreateOneZodSchema = z.object({ select: SiteDailyStatSelectObjectSchema.optional(), include: SiteDailyStatIncludeObjectSchema.optional(), data: z.union([SiteDailyStatCreateInputObjectSchema, SiteDailyStatUncheckedCreateInputObjectSchema]) }).strict();

// File: createManySiteDailyStat.schema.ts

export const SiteDailyStatCreateManySchema: z.ZodType<Prisma.SiteDailyStatCreateManyArgs> = z.object({ data: z.union([ SiteDailyStatCreateManyInputObjectSchema, z.array(SiteDailyStatCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.SiteDailyStatCreateManyArgs>;

export const SiteDailyStatCreateManyZodSchema = z.object({ data: z.union([ SiteDailyStatCreateManyInputObjectSchema, z.array(SiteDailyStatCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();

// File: createManyAndReturnSiteDailyStat.schema.ts

export const SiteDailyStatCreateManyAndReturnSchema: z.ZodType<Prisma.SiteDailyStatCreateManyAndReturnArgs> = z.object({ select: SiteDailyStatSelectObjectSchema.optional(), data: z.union([ SiteDailyStatCreateManyInputObjectSchema, z.array(SiteDailyStatCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.SiteDailyStatCreateManyAndReturnArgs>;

export const SiteDailyStatCreateManyAndReturnZodSchema = z.object({ select: SiteDailyStatSelectObjectSchema.optional(), data: z.union([ SiteDailyStatCreateManyInputObjectSchema, z.array(SiteDailyStatCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();

// File: deleteOneSiteDailyStat.schema.ts

export const SiteDailyStatDeleteOneSchema: z.ZodType<Prisma.SiteDailyStatDeleteArgs> = z.object({ select: SiteDailyStatSelectObjectSchema.optional(), include: SiteDailyStatIncludeObjectSchema.optional(), where: SiteDailyStatWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.SiteDailyStatDeleteArgs>;

export const SiteDailyStatDeleteOneZodSchema = z.object({ select: SiteDailyStatSelectObjectSchema.optional(), include: SiteDailyStatIncludeObjectSchema.optional(), where: SiteDailyStatWhereUniqueInputObjectSchema }).strict();

// File: deleteManySiteDailyStat.schema.ts

export const SiteDailyStatDeleteManySchema: z.ZodType<Prisma.SiteDailyStatDeleteManyArgs> = z.object({ where: SiteDailyStatWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.SiteDailyStatDeleteManyArgs>;

export const SiteDailyStatDeleteManyZodSchema = z.object({ where: SiteDailyStatWhereInputObjectSchema.optional() }).strict();

// File: updateOneSiteDailyStat.schema.ts

export const SiteDailyStatUpdateOneSchema: z.ZodType<Prisma.SiteDailyStatUpdateArgs> = z.object({ select: SiteDailyStatSelectObjectSchema.optional(), include: SiteDailyStatIncludeObjectSchema.optional(), data: z.union([SiteDailyStatUpdateInputObjectSchema, SiteDailyStatUncheckedUpdateInputObjectSchema]), where: SiteDailyStatWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.SiteDailyStatUpdateArgs>;

export const SiteDailyStatUpdateOneZodSchema = z.object({ select: SiteDailyStatSelectObjectSchema.optional(), include: SiteDailyStatIncludeObjectSchema.optional(), data: z.union([SiteDailyStatUpdateInputObjectSchema, SiteDailyStatUncheckedUpdateInputObjectSchema]), where: SiteDailyStatWhereUniqueInputObjectSchema }).strict();

// File: updateManySiteDailyStat.schema.ts

export const SiteDailyStatUpdateManySchema: z.ZodType<Prisma.SiteDailyStatUpdateManyArgs> = z.object({ data: SiteDailyStatUpdateManyMutationInputObjectSchema, where: SiteDailyStatWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.SiteDailyStatUpdateManyArgs>;

export const SiteDailyStatUpdateManyZodSchema = z.object({ data: SiteDailyStatUpdateManyMutationInputObjectSchema, where: SiteDailyStatWhereInputObjectSchema.optional() }).strict();

// File: updateManyAndReturnSiteDailyStat.schema.ts

export const SiteDailyStatUpdateManyAndReturnSchema: z.ZodType<Prisma.SiteDailyStatUpdateManyAndReturnArgs> = z.object({ select: SiteDailyStatSelectObjectSchema.optional(), data: SiteDailyStatUpdateManyMutationInputObjectSchema, where: SiteDailyStatWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.SiteDailyStatUpdateManyAndReturnArgs>;

export const SiteDailyStatUpdateManyAndReturnZodSchema = z.object({ select: SiteDailyStatSelectObjectSchema.optional(), data: SiteDailyStatUpdateManyMutationInputObjectSchema, where: SiteDailyStatWhereInputObjectSchema.optional() }).strict();

// File: upsertOneSiteDailyStat.schema.ts

export const SiteDailyStatUpsertOneSchema: z.ZodType<Prisma.SiteDailyStatUpsertArgs> = z.object({ select: SiteDailyStatSelectObjectSchema.optional(), include: SiteDailyStatIncludeObjectSchema.optional(), where: SiteDailyStatWhereUniqueInputObjectSchema, create: z.union([ SiteDailyStatCreateInputObjectSchema, SiteDailyStatUncheckedCreateInputObjectSchema ]), update: z.union([ SiteDailyStatUpdateInputObjectSchema, SiteDailyStatUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.SiteDailyStatUpsertArgs>;

export const SiteDailyStatUpsertOneZodSchema = z.object({ select: SiteDailyStatSelectObjectSchema.optional(), include: SiteDailyStatIncludeObjectSchema.optional(), where: SiteDailyStatWhereUniqueInputObjectSchema, create: z.union([ SiteDailyStatCreateInputObjectSchema, SiteDailyStatUncheckedCreateInputObjectSchema ]), update: z.union([ SiteDailyStatUpdateInputObjectSchema, SiteDailyStatUncheckedUpdateInputObjectSchema ]) }).strict();

// File: aggregateSiteDailyStat.schema.ts

export const SiteDailyStatAggregateSchema: z.ZodType<Prisma.SiteDailyStatAggregateArgs> = z.object({ orderBy: z.union([SiteDailyStatOrderByWithRelationInputObjectSchema, SiteDailyStatOrderByWithRelationInputObjectSchema.array()]).optional(), where: SiteDailyStatWhereInputObjectSchema.optional(), cursor: SiteDailyStatWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), SiteDailyStatCountAggregateInputObjectSchema ]).optional(), _min: SiteDailyStatMinAggregateInputObjectSchema.optional(), _max: SiteDailyStatMaxAggregateInputObjectSchema.optional(), _avg: SiteDailyStatAvgAggregateInputObjectSchema.optional(), _sum: SiteDailyStatSumAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.SiteDailyStatAggregateArgs>;

export const SiteDailyStatAggregateZodSchema = z.object({ orderBy: z.union([SiteDailyStatOrderByWithRelationInputObjectSchema, SiteDailyStatOrderByWithRelationInputObjectSchema.array()]).optional(), where: SiteDailyStatWhereInputObjectSchema.optional(), cursor: SiteDailyStatWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), SiteDailyStatCountAggregateInputObjectSchema ]).optional(), _min: SiteDailyStatMinAggregateInputObjectSchema.optional(), _max: SiteDailyStatMaxAggregateInputObjectSchema.optional(), _avg: SiteDailyStatAvgAggregateInputObjectSchema.optional(), _sum: SiteDailyStatSumAggregateInputObjectSchema.optional() }).strict();

// File: groupBySiteDailyStat.schema.ts

export const SiteDailyStatGroupBySchema: z.ZodType<Prisma.SiteDailyStatGroupByArgs> = z.object({ where: SiteDailyStatWhereInputObjectSchema.optional(), orderBy: z.union([SiteDailyStatOrderByWithAggregationInputObjectSchema, SiteDailyStatOrderByWithAggregationInputObjectSchema.array()]).optional(), having: SiteDailyStatScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(SiteDailyStatScalarFieldEnumSchema), _count: z.union([ z.literal(true), SiteDailyStatCountAggregateInputObjectSchema ]).optional(), _min: SiteDailyStatMinAggregateInputObjectSchema.optional(), _max: SiteDailyStatMaxAggregateInputObjectSchema.optional(), _avg: SiteDailyStatAvgAggregateInputObjectSchema.optional(), _sum: SiteDailyStatSumAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.SiteDailyStatGroupByArgs>;

export const SiteDailyStatGroupByZodSchema = z.object({ where: SiteDailyStatWhereInputObjectSchema.optional(), orderBy: z.union([SiteDailyStatOrderByWithAggregationInputObjectSchema, SiteDailyStatOrderByWithAggregationInputObjectSchema.array()]).optional(), having: SiteDailyStatScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(SiteDailyStatScalarFieldEnumSchema), _count: z.union([ z.literal(true), SiteDailyStatCountAggregateInputObjectSchema ]).optional(), _min: SiteDailyStatMinAggregateInputObjectSchema.optional(), _max: SiteDailyStatMaxAggregateInputObjectSchema.optional(), _avg: SiteDailyStatAvgAggregateInputObjectSchema.optional(), _sum: SiteDailyStatSumAggregateInputObjectSchema.optional() }).strict();

// File: findUniqueSiteDailyVisitor.schema.ts

export const SiteDailyVisitorFindUniqueSchema: z.ZodType<Prisma.SiteDailyVisitorFindUniqueArgs> = z.object({ select: SiteDailyVisitorSelectObjectSchema.optional(), include: SiteDailyVisitorIncludeObjectSchema.optional(), where: SiteDailyVisitorWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.SiteDailyVisitorFindUniqueArgs>;

export const SiteDailyVisitorFindUniqueZodSchema = z.object({ select: SiteDailyVisitorSelectObjectSchema.optional(), include: SiteDailyVisitorIncludeObjectSchema.optional(), where: SiteDailyVisitorWhereUniqueInputObjectSchema }).strict();

// File: findUniqueOrThrowSiteDailyVisitor.schema.ts

export const SiteDailyVisitorFindUniqueOrThrowSchema: z.ZodType<Prisma.SiteDailyVisitorFindUniqueOrThrowArgs> = z.object({ select: SiteDailyVisitorSelectObjectSchema.optional(), include: SiteDailyVisitorIncludeObjectSchema.optional(), where: SiteDailyVisitorWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.SiteDailyVisitorFindUniqueOrThrowArgs>;

export const SiteDailyVisitorFindUniqueOrThrowZodSchema = z.object({ select: SiteDailyVisitorSelectObjectSchema.optional(), include: SiteDailyVisitorIncludeObjectSchema.optional(), where: SiteDailyVisitorWhereUniqueInputObjectSchema }).strict();

// File: findFirstSiteDailyVisitor.schema.ts

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const SiteDailyVisitorFindFirstSelectSchema__findFirstSiteDailyVisitor_schema: z.ZodType<Prisma.SiteDailyVisitorSelect> = z.object({
    date: z.boolean().optional(),
    visitorId: z.boolean().optional(),
    firstVisitAt: z.boolean().optional(),
    day: z.union([z.boolean(), z.lazy(() => SiteDailyStatArgsObjectSchema)]).optional(),
    visitor: z.union([z.boolean(), z.lazy(() => SiteVisitorArgsObjectSchema)]).optional()
  }).strict() as unknown as z.ZodType<Prisma.SiteDailyVisitorSelect>;

export const SiteDailyVisitorFindFirstSelectZodSchema__findFirstSiteDailyVisitor_schema = z.object({
    date: z.boolean().optional(),
    visitorId: z.boolean().optional(),
    firstVisitAt: z.boolean().optional(),
    day: z.union([z.boolean(), z.lazy(() => SiteDailyStatArgsObjectSchema)]).optional(),
    visitor: z.union([z.boolean(), z.lazy(() => SiteVisitorArgsObjectSchema)]).optional()
  }).strict();

export const SiteDailyVisitorFindFirstSchema: z.ZodType<Prisma.SiteDailyVisitorFindFirstArgs> = z.object({ select: SiteDailyVisitorFindFirstSelectSchema__findFirstSiteDailyVisitor_schema.optional(), include: z.lazy(() => SiteDailyVisitorIncludeObjectSchema.optional()), orderBy: z.union([SiteDailyVisitorOrderByWithRelationInputObjectSchema, SiteDailyVisitorOrderByWithRelationInputObjectSchema.array()]).optional(), where: SiteDailyVisitorWhereInputObjectSchema.optional(), cursor: SiteDailyVisitorWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([SiteDailyVisitorScalarFieldEnumSchema, SiteDailyVisitorScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.SiteDailyVisitorFindFirstArgs>;

export const SiteDailyVisitorFindFirstZodSchema = z.object({ select: SiteDailyVisitorFindFirstSelectSchema__findFirstSiteDailyVisitor_schema.optional(), include: z.lazy(() => SiteDailyVisitorIncludeObjectSchema.optional()), orderBy: z.union([SiteDailyVisitorOrderByWithRelationInputObjectSchema, SiteDailyVisitorOrderByWithRelationInputObjectSchema.array()]).optional(), where: SiteDailyVisitorWhereInputObjectSchema.optional(), cursor: SiteDailyVisitorWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([SiteDailyVisitorScalarFieldEnumSchema, SiteDailyVisitorScalarFieldEnumSchema.array()]).optional() }).strict();

// File: findFirstOrThrowSiteDailyVisitor.schema.ts

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const SiteDailyVisitorFindFirstOrThrowSelectSchema__findFirstOrThrowSiteDailyVisitor_schema: z.ZodType<Prisma.SiteDailyVisitorSelect> = z.object({
    date: z.boolean().optional(),
    visitorId: z.boolean().optional(),
    firstVisitAt: z.boolean().optional(),
    day: z.union([z.boolean(), z.lazy(() => SiteDailyStatArgsObjectSchema)]).optional(),
    visitor: z.union([z.boolean(), z.lazy(() => SiteVisitorArgsObjectSchema)]).optional()
  }).strict() as unknown as z.ZodType<Prisma.SiteDailyVisitorSelect>;

export const SiteDailyVisitorFindFirstOrThrowSelectZodSchema__findFirstOrThrowSiteDailyVisitor_schema = z.object({
    date: z.boolean().optional(),
    visitorId: z.boolean().optional(),
    firstVisitAt: z.boolean().optional(),
    day: z.union([z.boolean(), z.lazy(() => SiteDailyStatArgsObjectSchema)]).optional(),
    visitor: z.union([z.boolean(), z.lazy(() => SiteVisitorArgsObjectSchema)]).optional()
  }).strict();

export const SiteDailyVisitorFindFirstOrThrowSchema: z.ZodType<Prisma.SiteDailyVisitorFindFirstOrThrowArgs> = z.object({ select: SiteDailyVisitorFindFirstOrThrowSelectSchema__findFirstOrThrowSiteDailyVisitor_schema.optional(), include: z.lazy(() => SiteDailyVisitorIncludeObjectSchema.optional()), orderBy: z.union([SiteDailyVisitorOrderByWithRelationInputObjectSchema, SiteDailyVisitorOrderByWithRelationInputObjectSchema.array()]).optional(), where: SiteDailyVisitorWhereInputObjectSchema.optional(), cursor: SiteDailyVisitorWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([SiteDailyVisitorScalarFieldEnumSchema, SiteDailyVisitorScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.SiteDailyVisitorFindFirstOrThrowArgs>;

export const SiteDailyVisitorFindFirstOrThrowZodSchema = z.object({ select: SiteDailyVisitorFindFirstOrThrowSelectSchema__findFirstOrThrowSiteDailyVisitor_schema.optional(), include: z.lazy(() => SiteDailyVisitorIncludeObjectSchema.optional()), orderBy: z.union([SiteDailyVisitorOrderByWithRelationInputObjectSchema, SiteDailyVisitorOrderByWithRelationInputObjectSchema.array()]).optional(), where: SiteDailyVisitorWhereInputObjectSchema.optional(), cursor: SiteDailyVisitorWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([SiteDailyVisitorScalarFieldEnumSchema, SiteDailyVisitorScalarFieldEnumSchema.array()]).optional() }).strict();

// File: findManySiteDailyVisitor.schema.ts

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const SiteDailyVisitorFindManySelectSchema__findManySiteDailyVisitor_schema: z.ZodType<Prisma.SiteDailyVisitorSelect> = z.object({
    date: z.boolean().optional(),
    visitorId: z.boolean().optional(),
    firstVisitAt: z.boolean().optional(),
    day: z.union([z.boolean(), z.lazy(() => SiteDailyStatArgsObjectSchema)]).optional(),
    visitor: z.union([z.boolean(), z.lazy(() => SiteVisitorArgsObjectSchema)]).optional()
  }).strict() as unknown as z.ZodType<Prisma.SiteDailyVisitorSelect>;

export const SiteDailyVisitorFindManySelectZodSchema__findManySiteDailyVisitor_schema = z.object({
    date: z.boolean().optional(),
    visitorId: z.boolean().optional(),
    firstVisitAt: z.boolean().optional(),
    day: z.union([z.boolean(), z.lazy(() => SiteDailyStatArgsObjectSchema)]).optional(),
    visitor: z.union([z.boolean(), z.lazy(() => SiteVisitorArgsObjectSchema)]).optional()
  }).strict();

export const SiteDailyVisitorFindManySchema: z.ZodType<Prisma.SiteDailyVisitorFindManyArgs> = z.object({ select: SiteDailyVisitorFindManySelectSchema__findManySiteDailyVisitor_schema.optional(), include: z.lazy(() => SiteDailyVisitorIncludeObjectSchema.optional()), orderBy: z.union([SiteDailyVisitorOrderByWithRelationInputObjectSchema, SiteDailyVisitorOrderByWithRelationInputObjectSchema.array()]).optional(), where: SiteDailyVisitorWhereInputObjectSchema.optional(), cursor: SiteDailyVisitorWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([SiteDailyVisitorScalarFieldEnumSchema, SiteDailyVisitorScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.SiteDailyVisitorFindManyArgs>;

export const SiteDailyVisitorFindManyZodSchema = z.object({ select: SiteDailyVisitorFindManySelectSchema__findManySiteDailyVisitor_schema.optional(), include: z.lazy(() => SiteDailyVisitorIncludeObjectSchema.optional()), orderBy: z.union([SiteDailyVisitorOrderByWithRelationInputObjectSchema, SiteDailyVisitorOrderByWithRelationInputObjectSchema.array()]).optional(), where: SiteDailyVisitorWhereInputObjectSchema.optional(), cursor: SiteDailyVisitorWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([SiteDailyVisitorScalarFieldEnumSchema, SiteDailyVisitorScalarFieldEnumSchema.array()]).optional() }).strict();

// File: countSiteDailyVisitor.schema.ts

export const SiteDailyVisitorCountSchema: z.ZodType<Prisma.SiteDailyVisitorCountArgs> = z.object({ orderBy: z.union([SiteDailyVisitorOrderByWithRelationInputObjectSchema, SiteDailyVisitorOrderByWithRelationInputObjectSchema.array()]).optional(), where: SiteDailyVisitorWhereInputObjectSchema.optional(), cursor: SiteDailyVisitorWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), SiteDailyVisitorCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.SiteDailyVisitorCountArgs>;

export const SiteDailyVisitorCountZodSchema = z.object({ orderBy: z.union([SiteDailyVisitorOrderByWithRelationInputObjectSchema, SiteDailyVisitorOrderByWithRelationInputObjectSchema.array()]).optional(), where: SiteDailyVisitorWhereInputObjectSchema.optional(), cursor: SiteDailyVisitorWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), SiteDailyVisitorCountAggregateInputObjectSchema ]).optional() }).strict();

// File: createOneSiteDailyVisitor.schema.ts

export const SiteDailyVisitorCreateOneSchema: z.ZodType<Prisma.SiteDailyVisitorCreateArgs> = z.object({ select: SiteDailyVisitorSelectObjectSchema.optional(), include: SiteDailyVisitorIncludeObjectSchema.optional(), data: z.union([SiteDailyVisitorCreateInputObjectSchema, SiteDailyVisitorUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.SiteDailyVisitorCreateArgs>;

export const SiteDailyVisitorCreateOneZodSchema = z.object({ select: SiteDailyVisitorSelectObjectSchema.optional(), include: SiteDailyVisitorIncludeObjectSchema.optional(), data: z.union([SiteDailyVisitorCreateInputObjectSchema, SiteDailyVisitorUncheckedCreateInputObjectSchema]) }).strict();

// File: createManySiteDailyVisitor.schema.ts

export const SiteDailyVisitorCreateManySchema: z.ZodType<Prisma.SiteDailyVisitorCreateManyArgs> = z.object({ data: z.union([ SiteDailyVisitorCreateManyInputObjectSchema, z.array(SiteDailyVisitorCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.SiteDailyVisitorCreateManyArgs>;

export const SiteDailyVisitorCreateManyZodSchema = z.object({ data: z.union([ SiteDailyVisitorCreateManyInputObjectSchema, z.array(SiteDailyVisitorCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();

// File: createManyAndReturnSiteDailyVisitor.schema.ts

export const SiteDailyVisitorCreateManyAndReturnSchema: z.ZodType<Prisma.SiteDailyVisitorCreateManyAndReturnArgs> = z.object({ select: SiteDailyVisitorSelectObjectSchema.optional(), data: z.union([ SiteDailyVisitorCreateManyInputObjectSchema, z.array(SiteDailyVisitorCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.SiteDailyVisitorCreateManyAndReturnArgs>;

export const SiteDailyVisitorCreateManyAndReturnZodSchema = z.object({ select: SiteDailyVisitorSelectObjectSchema.optional(), data: z.union([ SiteDailyVisitorCreateManyInputObjectSchema, z.array(SiteDailyVisitorCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();

// File: deleteOneSiteDailyVisitor.schema.ts

export const SiteDailyVisitorDeleteOneSchema: z.ZodType<Prisma.SiteDailyVisitorDeleteArgs> = z.object({ select: SiteDailyVisitorSelectObjectSchema.optional(), include: SiteDailyVisitorIncludeObjectSchema.optional(), where: SiteDailyVisitorWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.SiteDailyVisitorDeleteArgs>;

export const SiteDailyVisitorDeleteOneZodSchema = z.object({ select: SiteDailyVisitorSelectObjectSchema.optional(), include: SiteDailyVisitorIncludeObjectSchema.optional(), where: SiteDailyVisitorWhereUniqueInputObjectSchema }).strict();

// File: deleteManySiteDailyVisitor.schema.ts

export const SiteDailyVisitorDeleteManySchema: z.ZodType<Prisma.SiteDailyVisitorDeleteManyArgs> = z.object({ where: SiteDailyVisitorWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.SiteDailyVisitorDeleteManyArgs>;

export const SiteDailyVisitorDeleteManyZodSchema = z.object({ where: SiteDailyVisitorWhereInputObjectSchema.optional() }).strict();

// File: updateOneSiteDailyVisitor.schema.ts

export const SiteDailyVisitorUpdateOneSchema: z.ZodType<Prisma.SiteDailyVisitorUpdateArgs> = z.object({ select: SiteDailyVisitorSelectObjectSchema.optional(), include: SiteDailyVisitorIncludeObjectSchema.optional(), data: z.union([SiteDailyVisitorUpdateInputObjectSchema, SiteDailyVisitorUncheckedUpdateInputObjectSchema]), where: SiteDailyVisitorWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.SiteDailyVisitorUpdateArgs>;

export const SiteDailyVisitorUpdateOneZodSchema = z.object({ select: SiteDailyVisitorSelectObjectSchema.optional(), include: SiteDailyVisitorIncludeObjectSchema.optional(), data: z.union([SiteDailyVisitorUpdateInputObjectSchema, SiteDailyVisitorUncheckedUpdateInputObjectSchema]), where: SiteDailyVisitorWhereUniqueInputObjectSchema }).strict();

// File: updateManySiteDailyVisitor.schema.ts

export const SiteDailyVisitorUpdateManySchema: z.ZodType<Prisma.SiteDailyVisitorUpdateManyArgs> = z.object({ data: SiteDailyVisitorUpdateManyMutationInputObjectSchema, where: SiteDailyVisitorWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.SiteDailyVisitorUpdateManyArgs>;

export const SiteDailyVisitorUpdateManyZodSchema = z.object({ data: SiteDailyVisitorUpdateManyMutationInputObjectSchema, where: SiteDailyVisitorWhereInputObjectSchema.optional() }).strict();

// File: updateManyAndReturnSiteDailyVisitor.schema.ts

export const SiteDailyVisitorUpdateManyAndReturnSchema: z.ZodType<Prisma.SiteDailyVisitorUpdateManyAndReturnArgs> = z.object({ select: SiteDailyVisitorSelectObjectSchema.optional(), data: SiteDailyVisitorUpdateManyMutationInputObjectSchema, where: SiteDailyVisitorWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.SiteDailyVisitorUpdateManyAndReturnArgs>;

export const SiteDailyVisitorUpdateManyAndReturnZodSchema = z.object({ select: SiteDailyVisitorSelectObjectSchema.optional(), data: SiteDailyVisitorUpdateManyMutationInputObjectSchema, where: SiteDailyVisitorWhereInputObjectSchema.optional() }).strict();

// File: upsertOneSiteDailyVisitor.schema.ts

export const SiteDailyVisitorUpsertOneSchema: z.ZodType<Prisma.SiteDailyVisitorUpsertArgs> = z.object({ select: SiteDailyVisitorSelectObjectSchema.optional(), include: SiteDailyVisitorIncludeObjectSchema.optional(), where: SiteDailyVisitorWhereUniqueInputObjectSchema, create: z.union([ SiteDailyVisitorCreateInputObjectSchema, SiteDailyVisitorUncheckedCreateInputObjectSchema ]), update: z.union([ SiteDailyVisitorUpdateInputObjectSchema, SiteDailyVisitorUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.SiteDailyVisitorUpsertArgs>;

export const SiteDailyVisitorUpsertOneZodSchema = z.object({ select: SiteDailyVisitorSelectObjectSchema.optional(), include: SiteDailyVisitorIncludeObjectSchema.optional(), where: SiteDailyVisitorWhereUniqueInputObjectSchema, create: z.union([ SiteDailyVisitorCreateInputObjectSchema, SiteDailyVisitorUncheckedCreateInputObjectSchema ]), update: z.union([ SiteDailyVisitorUpdateInputObjectSchema, SiteDailyVisitorUncheckedUpdateInputObjectSchema ]) }).strict();

// File: aggregateSiteDailyVisitor.schema.ts

export const SiteDailyVisitorAggregateSchema: z.ZodType<Prisma.SiteDailyVisitorAggregateArgs> = z.object({ orderBy: z.union([SiteDailyVisitorOrderByWithRelationInputObjectSchema, SiteDailyVisitorOrderByWithRelationInputObjectSchema.array()]).optional(), where: SiteDailyVisitorWhereInputObjectSchema.optional(), cursor: SiteDailyVisitorWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), SiteDailyVisitorCountAggregateInputObjectSchema ]).optional(), _min: SiteDailyVisitorMinAggregateInputObjectSchema.optional(), _max: SiteDailyVisitorMaxAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.SiteDailyVisitorAggregateArgs>;

export const SiteDailyVisitorAggregateZodSchema = z.object({ orderBy: z.union([SiteDailyVisitorOrderByWithRelationInputObjectSchema, SiteDailyVisitorOrderByWithRelationInputObjectSchema.array()]).optional(), where: SiteDailyVisitorWhereInputObjectSchema.optional(), cursor: SiteDailyVisitorWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), SiteDailyVisitorCountAggregateInputObjectSchema ]).optional(), _min: SiteDailyVisitorMinAggregateInputObjectSchema.optional(), _max: SiteDailyVisitorMaxAggregateInputObjectSchema.optional() }).strict();

// File: groupBySiteDailyVisitor.schema.ts

export const SiteDailyVisitorGroupBySchema: z.ZodType<Prisma.SiteDailyVisitorGroupByArgs> = z.object({ where: SiteDailyVisitorWhereInputObjectSchema.optional(), orderBy: z.union([SiteDailyVisitorOrderByWithAggregationInputObjectSchema, SiteDailyVisitorOrderByWithAggregationInputObjectSchema.array()]).optional(), having: SiteDailyVisitorScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(SiteDailyVisitorScalarFieldEnumSchema), _count: z.union([ z.literal(true), SiteDailyVisitorCountAggregateInputObjectSchema ]).optional(), _min: SiteDailyVisitorMinAggregateInputObjectSchema.optional(), _max: SiteDailyVisitorMaxAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.SiteDailyVisitorGroupByArgs>;

export const SiteDailyVisitorGroupByZodSchema = z.object({ where: SiteDailyVisitorWhereInputObjectSchema.optional(), orderBy: z.union([SiteDailyVisitorOrderByWithAggregationInputObjectSchema, SiteDailyVisitorOrderByWithAggregationInputObjectSchema.array()]).optional(), having: SiteDailyVisitorScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(SiteDailyVisitorScalarFieldEnumSchema), _count: z.union([ z.literal(true), SiteDailyVisitorCountAggregateInputObjectSchema ]).optional(), _min: SiteDailyVisitorMinAggregateInputObjectSchema.optional(), _max: SiteDailyVisitorMaxAggregateInputObjectSchema.optional() }).strict();

// File: findUniqueStoryBlock.schema.ts

export const StoryBlockFindUniqueSchema: z.ZodType<Prisma.StoryBlockFindUniqueArgs> = z.object({ select: StoryBlockSelectObjectSchema.optional(), include: StoryBlockIncludeObjectSchema.optional(), where: StoryBlockWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.StoryBlockFindUniqueArgs>;

export const StoryBlockFindUniqueZodSchema = z.object({ select: StoryBlockSelectObjectSchema.optional(), include: StoryBlockIncludeObjectSchema.optional(), where: StoryBlockWhereUniqueInputObjectSchema }).strict();

// File: findUniqueOrThrowStoryBlock.schema.ts

export const StoryBlockFindUniqueOrThrowSchema: z.ZodType<Prisma.StoryBlockFindUniqueOrThrowArgs> = z.object({ select: StoryBlockSelectObjectSchema.optional(), include: StoryBlockIncludeObjectSchema.optional(), where: StoryBlockWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.StoryBlockFindUniqueOrThrowArgs>;

export const StoryBlockFindUniqueOrThrowZodSchema = z.object({ select: StoryBlockSelectObjectSchema.optional(), include: StoryBlockIncludeObjectSchema.optional(), where: StoryBlockWhereUniqueInputObjectSchema }).strict();

// File: findFirstStoryBlock.schema.ts

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const StoryBlockFindFirstSelectSchema__findFirstStoryBlock_schema: z.ZodType<Prisma.StoryBlockSelect> = z.object({
    id: z.boolean().optional(),
    sectionId: z.boolean().optional(),
    section: z.union([z.boolean(), z.lazy(() => StorySectionArgsObjectSchema)]).optional(),
    position: z.boolean().optional(),
    type: z.boolean().optional(),
    media: z.boolean().optional(),
    eyebrow: z.boolean().optional(),
    title: z.boolean().optional(),
    text: z.boolean().optional(),
    tags: z.boolean().optional(),
    logos: z.boolean().optional(),
    tiles: z.boolean().optional(),
    link: z.boolean().optional(),
    linkLabel: z.boolean().optional(),
    effect: z.boolean().optional(),
    smalls: z.boolean().optional(),
    cols: z.boolean().optional(),
    font: z.boolean().optional(),
    fontFamily: z.boolean().optional(),
    description: z.boolean().optional(),
    secondFont: z.boolean().optional(),
    secondFontFamily: z.boolean().optional(),
    secondDescription: z.boolean().optional(),
    swatches: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.StoryBlockSelect>;

export const StoryBlockFindFirstSelectZodSchema__findFirstStoryBlock_schema = z.object({
    id: z.boolean().optional(),
    sectionId: z.boolean().optional(),
    section: z.union([z.boolean(), z.lazy(() => StorySectionArgsObjectSchema)]).optional(),
    position: z.boolean().optional(),
    type: z.boolean().optional(),
    media: z.boolean().optional(),
    eyebrow: z.boolean().optional(),
    title: z.boolean().optional(),
    text: z.boolean().optional(),
    tags: z.boolean().optional(),
    logos: z.boolean().optional(),
    tiles: z.boolean().optional(),
    link: z.boolean().optional(),
    linkLabel: z.boolean().optional(),
    effect: z.boolean().optional(),
    smalls: z.boolean().optional(),
    cols: z.boolean().optional(),
    font: z.boolean().optional(),
    fontFamily: z.boolean().optional(),
    description: z.boolean().optional(),
    secondFont: z.boolean().optional(),
    secondFontFamily: z.boolean().optional(),
    secondDescription: z.boolean().optional(),
    swatches: z.boolean().optional()
  }).strict();

export const StoryBlockFindFirstSchema: z.ZodType<Prisma.StoryBlockFindFirstArgs> = z.object({ select: StoryBlockFindFirstSelectSchema__findFirstStoryBlock_schema.optional(), include: z.lazy(() => StoryBlockIncludeObjectSchema.optional()), orderBy: z.union([StoryBlockOrderByWithRelationInputObjectSchema, StoryBlockOrderByWithRelationInputObjectSchema.array()]).optional(), where: StoryBlockWhereInputObjectSchema.optional(), cursor: StoryBlockWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([StoryBlockScalarFieldEnumSchema, StoryBlockScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.StoryBlockFindFirstArgs>;

export const StoryBlockFindFirstZodSchema = z.object({ select: StoryBlockFindFirstSelectSchema__findFirstStoryBlock_schema.optional(), include: z.lazy(() => StoryBlockIncludeObjectSchema.optional()), orderBy: z.union([StoryBlockOrderByWithRelationInputObjectSchema, StoryBlockOrderByWithRelationInputObjectSchema.array()]).optional(), where: StoryBlockWhereInputObjectSchema.optional(), cursor: StoryBlockWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([StoryBlockScalarFieldEnumSchema, StoryBlockScalarFieldEnumSchema.array()]).optional() }).strict();

// File: findFirstOrThrowStoryBlock.schema.ts

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const StoryBlockFindFirstOrThrowSelectSchema__findFirstOrThrowStoryBlock_schema: z.ZodType<Prisma.StoryBlockSelect> = z.object({
    id: z.boolean().optional(),
    sectionId: z.boolean().optional(),
    section: z.union([z.boolean(), z.lazy(() => StorySectionArgsObjectSchema)]).optional(),
    position: z.boolean().optional(),
    type: z.boolean().optional(),
    media: z.boolean().optional(),
    eyebrow: z.boolean().optional(),
    title: z.boolean().optional(),
    text: z.boolean().optional(),
    tags: z.boolean().optional(),
    logos: z.boolean().optional(),
    tiles: z.boolean().optional(),
    link: z.boolean().optional(),
    linkLabel: z.boolean().optional(),
    effect: z.boolean().optional(),
    smalls: z.boolean().optional(),
    cols: z.boolean().optional(),
    font: z.boolean().optional(),
    fontFamily: z.boolean().optional(),
    description: z.boolean().optional(),
    secondFont: z.boolean().optional(),
    secondFontFamily: z.boolean().optional(),
    secondDescription: z.boolean().optional(),
    swatches: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.StoryBlockSelect>;

export const StoryBlockFindFirstOrThrowSelectZodSchema__findFirstOrThrowStoryBlock_schema = z.object({
    id: z.boolean().optional(),
    sectionId: z.boolean().optional(),
    section: z.union([z.boolean(), z.lazy(() => StorySectionArgsObjectSchema)]).optional(),
    position: z.boolean().optional(),
    type: z.boolean().optional(),
    media: z.boolean().optional(),
    eyebrow: z.boolean().optional(),
    title: z.boolean().optional(),
    text: z.boolean().optional(),
    tags: z.boolean().optional(),
    logos: z.boolean().optional(),
    tiles: z.boolean().optional(),
    link: z.boolean().optional(),
    linkLabel: z.boolean().optional(),
    effect: z.boolean().optional(),
    smalls: z.boolean().optional(),
    cols: z.boolean().optional(),
    font: z.boolean().optional(),
    fontFamily: z.boolean().optional(),
    description: z.boolean().optional(),
    secondFont: z.boolean().optional(),
    secondFontFamily: z.boolean().optional(),
    secondDescription: z.boolean().optional(),
    swatches: z.boolean().optional()
  }).strict();

export const StoryBlockFindFirstOrThrowSchema: z.ZodType<Prisma.StoryBlockFindFirstOrThrowArgs> = z.object({ select: StoryBlockFindFirstOrThrowSelectSchema__findFirstOrThrowStoryBlock_schema.optional(), include: z.lazy(() => StoryBlockIncludeObjectSchema.optional()), orderBy: z.union([StoryBlockOrderByWithRelationInputObjectSchema, StoryBlockOrderByWithRelationInputObjectSchema.array()]).optional(), where: StoryBlockWhereInputObjectSchema.optional(), cursor: StoryBlockWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([StoryBlockScalarFieldEnumSchema, StoryBlockScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.StoryBlockFindFirstOrThrowArgs>;

export const StoryBlockFindFirstOrThrowZodSchema = z.object({ select: StoryBlockFindFirstOrThrowSelectSchema__findFirstOrThrowStoryBlock_schema.optional(), include: z.lazy(() => StoryBlockIncludeObjectSchema.optional()), orderBy: z.union([StoryBlockOrderByWithRelationInputObjectSchema, StoryBlockOrderByWithRelationInputObjectSchema.array()]).optional(), where: StoryBlockWhereInputObjectSchema.optional(), cursor: StoryBlockWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([StoryBlockScalarFieldEnumSchema, StoryBlockScalarFieldEnumSchema.array()]).optional() }).strict();

// File: findManyStoryBlock.schema.ts

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const StoryBlockFindManySelectSchema__findManyStoryBlock_schema: z.ZodType<Prisma.StoryBlockSelect> = z.object({
    id: z.boolean().optional(),
    sectionId: z.boolean().optional(),
    section: z.union([z.boolean(), z.lazy(() => StorySectionArgsObjectSchema)]).optional(),
    position: z.boolean().optional(),
    type: z.boolean().optional(),
    media: z.boolean().optional(),
    eyebrow: z.boolean().optional(),
    title: z.boolean().optional(),
    text: z.boolean().optional(),
    tags: z.boolean().optional(),
    logos: z.boolean().optional(),
    tiles: z.boolean().optional(),
    link: z.boolean().optional(),
    linkLabel: z.boolean().optional(),
    effect: z.boolean().optional(),
    smalls: z.boolean().optional(),
    cols: z.boolean().optional(),
    font: z.boolean().optional(),
    fontFamily: z.boolean().optional(),
    description: z.boolean().optional(),
    secondFont: z.boolean().optional(),
    secondFontFamily: z.boolean().optional(),
    secondDescription: z.boolean().optional(),
    swatches: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.StoryBlockSelect>;

export const StoryBlockFindManySelectZodSchema__findManyStoryBlock_schema = z.object({
    id: z.boolean().optional(),
    sectionId: z.boolean().optional(),
    section: z.union([z.boolean(), z.lazy(() => StorySectionArgsObjectSchema)]).optional(),
    position: z.boolean().optional(),
    type: z.boolean().optional(),
    media: z.boolean().optional(),
    eyebrow: z.boolean().optional(),
    title: z.boolean().optional(),
    text: z.boolean().optional(),
    tags: z.boolean().optional(),
    logos: z.boolean().optional(),
    tiles: z.boolean().optional(),
    link: z.boolean().optional(),
    linkLabel: z.boolean().optional(),
    effect: z.boolean().optional(),
    smalls: z.boolean().optional(),
    cols: z.boolean().optional(),
    font: z.boolean().optional(),
    fontFamily: z.boolean().optional(),
    description: z.boolean().optional(),
    secondFont: z.boolean().optional(),
    secondFontFamily: z.boolean().optional(),
    secondDescription: z.boolean().optional(),
    swatches: z.boolean().optional()
  }).strict();

export const StoryBlockFindManySchema: z.ZodType<Prisma.StoryBlockFindManyArgs> = z.object({ select: StoryBlockFindManySelectSchema__findManyStoryBlock_schema.optional(), include: z.lazy(() => StoryBlockIncludeObjectSchema.optional()), orderBy: z.union([StoryBlockOrderByWithRelationInputObjectSchema, StoryBlockOrderByWithRelationInputObjectSchema.array()]).optional(), where: StoryBlockWhereInputObjectSchema.optional(), cursor: StoryBlockWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([StoryBlockScalarFieldEnumSchema, StoryBlockScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.StoryBlockFindManyArgs>;

export const StoryBlockFindManyZodSchema = z.object({ select: StoryBlockFindManySelectSchema__findManyStoryBlock_schema.optional(), include: z.lazy(() => StoryBlockIncludeObjectSchema.optional()), orderBy: z.union([StoryBlockOrderByWithRelationInputObjectSchema, StoryBlockOrderByWithRelationInputObjectSchema.array()]).optional(), where: StoryBlockWhereInputObjectSchema.optional(), cursor: StoryBlockWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([StoryBlockScalarFieldEnumSchema, StoryBlockScalarFieldEnumSchema.array()]).optional() }).strict();

// File: countStoryBlock.schema.ts

export const StoryBlockCountSchema: z.ZodType<Prisma.StoryBlockCountArgs> = z.object({ orderBy: z.union([StoryBlockOrderByWithRelationInputObjectSchema, StoryBlockOrderByWithRelationInputObjectSchema.array()]).optional(), where: StoryBlockWhereInputObjectSchema.optional(), cursor: StoryBlockWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), StoryBlockCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.StoryBlockCountArgs>;

export const StoryBlockCountZodSchema = z.object({ orderBy: z.union([StoryBlockOrderByWithRelationInputObjectSchema, StoryBlockOrderByWithRelationInputObjectSchema.array()]).optional(), where: StoryBlockWhereInputObjectSchema.optional(), cursor: StoryBlockWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), StoryBlockCountAggregateInputObjectSchema ]).optional() }).strict();

// File: createOneStoryBlock.schema.ts

export const StoryBlockCreateOneSchema: z.ZodType<Prisma.StoryBlockCreateArgs> = z.object({ select: StoryBlockSelectObjectSchema.optional(), include: StoryBlockIncludeObjectSchema.optional(), data: z.union([StoryBlockCreateInputObjectSchema, StoryBlockUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.StoryBlockCreateArgs>;

export const StoryBlockCreateOneZodSchema = z.object({ select: StoryBlockSelectObjectSchema.optional(), include: StoryBlockIncludeObjectSchema.optional(), data: z.union([StoryBlockCreateInputObjectSchema, StoryBlockUncheckedCreateInputObjectSchema]) }).strict();

// File: createManyStoryBlock.schema.ts

export const StoryBlockCreateManySchema: z.ZodType<Prisma.StoryBlockCreateManyArgs> = z.object({ data: z.union([ StoryBlockCreateManyInputObjectSchema, z.array(StoryBlockCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.StoryBlockCreateManyArgs>;

export const StoryBlockCreateManyZodSchema = z.object({ data: z.union([ StoryBlockCreateManyInputObjectSchema, z.array(StoryBlockCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();

// File: createManyAndReturnStoryBlock.schema.ts

export const StoryBlockCreateManyAndReturnSchema: z.ZodType<Prisma.StoryBlockCreateManyAndReturnArgs> = z.object({ select: StoryBlockSelectObjectSchema.optional(), data: z.union([ StoryBlockCreateManyInputObjectSchema, z.array(StoryBlockCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.StoryBlockCreateManyAndReturnArgs>;

export const StoryBlockCreateManyAndReturnZodSchema = z.object({ select: StoryBlockSelectObjectSchema.optional(), data: z.union([ StoryBlockCreateManyInputObjectSchema, z.array(StoryBlockCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();

// File: deleteOneStoryBlock.schema.ts

export const StoryBlockDeleteOneSchema: z.ZodType<Prisma.StoryBlockDeleteArgs> = z.object({ select: StoryBlockSelectObjectSchema.optional(), include: StoryBlockIncludeObjectSchema.optional(), where: StoryBlockWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.StoryBlockDeleteArgs>;

export const StoryBlockDeleteOneZodSchema = z.object({ select: StoryBlockSelectObjectSchema.optional(), include: StoryBlockIncludeObjectSchema.optional(), where: StoryBlockWhereUniqueInputObjectSchema }).strict();

// File: deleteManyStoryBlock.schema.ts

export const StoryBlockDeleteManySchema: z.ZodType<Prisma.StoryBlockDeleteManyArgs> = z.object({ where: StoryBlockWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.StoryBlockDeleteManyArgs>;

export const StoryBlockDeleteManyZodSchema = z.object({ where: StoryBlockWhereInputObjectSchema.optional() }).strict();

// File: updateOneStoryBlock.schema.ts

export const StoryBlockUpdateOneSchema: z.ZodType<Prisma.StoryBlockUpdateArgs> = z.object({ select: StoryBlockSelectObjectSchema.optional(), include: StoryBlockIncludeObjectSchema.optional(), data: z.union([StoryBlockUpdateInputObjectSchema, StoryBlockUncheckedUpdateInputObjectSchema]), where: StoryBlockWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.StoryBlockUpdateArgs>;

export const StoryBlockUpdateOneZodSchema = z.object({ select: StoryBlockSelectObjectSchema.optional(), include: StoryBlockIncludeObjectSchema.optional(), data: z.union([StoryBlockUpdateInputObjectSchema, StoryBlockUncheckedUpdateInputObjectSchema]), where: StoryBlockWhereUniqueInputObjectSchema }).strict();

// File: updateManyStoryBlock.schema.ts

export const StoryBlockUpdateManySchema: z.ZodType<Prisma.StoryBlockUpdateManyArgs> = z.object({ data: StoryBlockUpdateManyMutationInputObjectSchema, where: StoryBlockWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.StoryBlockUpdateManyArgs>;

export const StoryBlockUpdateManyZodSchema = z.object({ data: StoryBlockUpdateManyMutationInputObjectSchema, where: StoryBlockWhereInputObjectSchema.optional() }).strict();

// File: updateManyAndReturnStoryBlock.schema.ts

export const StoryBlockUpdateManyAndReturnSchema: z.ZodType<Prisma.StoryBlockUpdateManyAndReturnArgs> = z.object({ select: StoryBlockSelectObjectSchema.optional(), data: StoryBlockUpdateManyMutationInputObjectSchema, where: StoryBlockWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.StoryBlockUpdateManyAndReturnArgs>;

export const StoryBlockUpdateManyAndReturnZodSchema = z.object({ select: StoryBlockSelectObjectSchema.optional(), data: StoryBlockUpdateManyMutationInputObjectSchema, where: StoryBlockWhereInputObjectSchema.optional() }).strict();

// File: upsertOneStoryBlock.schema.ts

export const StoryBlockUpsertOneSchema: z.ZodType<Prisma.StoryBlockUpsertArgs> = z.object({ select: StoryBlockSelectObjectSchema.optional(), include: StoryBlockIncludeObjectSchema.optional(), where: StoryBlockWhereUniqueInputObjectSchema, create: z.union([ StoryBlockCreateInputObjectSchema, StoryBlockUncheckedCreateInputObjectSchema ]), update: z.union([ StoryBlockUpdateInputObjectSchema, StoryBlockUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.StoryBlockUpsertArgs>;

export const StoryBlockUpsertOneZodSchema = z.object({ select: StoryBlockSelectObjectSchema.optional(), include: StoryBlockIncludeObjectSchema.optional(), where: StoryBlockWhereUniqueInputObjectSchema, create: z.union([ StoryBlockCreateInputObjectSchema, StoryBlockUncheckedCreateInputObjectSchema ]), update: z.union([ StoryBlockUpdateInputObjectSchema, StoryBlockUncheckedUpdateInputObjectSchema ]) }).strict();

// File: aggregateStoryBlock.schema.ts

export const StoryBlockAggregateSchema: z.ZodType<Prisma.StoryBlockAggregateArgs> = z.object({ orderBy: z.union([StoryBlockOrderByWithRelationInputObjectSchema, StoryBlockOrderByWithRelationInputObjectSchema.array()]).optional(), where: StoryBlockWhereInputObjectSchema.optional(), cursor: StoryBlockWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), StoryBlockCountAggregateInputObjectSchema ]).optional(), _min: StoryBlockMinAggregateInputObjectSchema.optional(), _max: StoryBlockMaxAggregateInputObjectSchema.optional(), _avg: StoryBlockAvgAggregateInputObjectSchema.optional(), _sum: StoryBlockSumAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.StoryBlockAggregateArgs>;

export const StoryBlockAggregateZodSchema = z.object({ orderBy: z.union([StoryBlockOrderByWithRelationInputObjectSchema, StoryBlockOrderByWithRelationInputObjectSchema.array()]).optional(), where: StoryBlockWhereInputObjectSchema.optional(), cursor: StoryBlockWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), StoryBlockCountAggregateInputObjectSchema ]).optional(), _min: StoryBlockMinAggregateInputObjectSchema.optional(), _max: StoryBlockMaxAggregateInputObjectSchema.optional(), _avg: StoryBlockAvgAggregateInputObjectSchema.optional(), _sum: StoryBlockSumAggregateInputObjectSchema.optional() }).strict();

// File: groupByStoryBlock.schema.ts

export const StoryBlockGroupBySchema: z.ZodType<Prisma.StoryBlockGroupByArgs> = z.object({ where: StoryBlockWhereInputObjectSchema.optional(), orderBy: z.union([StoryBlockOrderByWithAggregationInputObjectSchema, StoryBlockOrderByWithAggregationInputObjectSchema.array()]).optional(), having: StoryBlockScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(StoryBlockScalarFieldEnumSchema), _count: z.union([ z.literal(true), StoryBlockCountAggregateInputObjectSchema ]).optional(), _min: StoryBlockMinAggregateInputObjectSchema.optional(), _max: StoryBlockMaxAggregateInputObjectSchema.optional(), _avg: StoryBlockAvgAggregateInputObjectSchema.optional(), _sum: StoryBlockSumAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.StoryBlockGroupByArgs>;

export const StoryBlockGroupByZodSchema = z.object({ where: StoryBlockWhereInputObjectSchema.optional(), orderBy: z.union([StoryBlockOrderByWithAggregationInputObjectSchema, StoryBlockOrderByWithAggregationInputObjectSchema.array()]).optional(), having: StoryBlockScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(StoryBlockScalarFieldEnumSchema), _count: z.union([ z.literal(true), StoryBlockCountAggregateInputObjectSchema ]).optional(), _min: StoryBlockMinAggregateInputObjectSchema.optional(), _max: StoryBlockMaxAggregateInputObjectSchema.optional(), _avg: StoryBlockAvgAggregateInputObjectSchema.optional(), _sum: StoryBlockSumAggregateInputObjectSchema.optional() }).strict();

// File: findUniqueStorySection.schema.ts

export const StorySectionFindUniqueSchema: z.ZodType<Prisma.StorySectionFindUniqueArgs> = z.object({ select: StorySectionSelectObjectSchema.optional(), include: StorySectionIncludeObjectSchema.optional(), where: StorySectionWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.StorySectionFindUniqueArgs>;

export const StorySectionFindUniqueZodSchema = z.object({ select: StorySectionSelectObjectSchema.optional(), include: StorySectionIncludeObjectSchema.optional(), where: StorySectionWhereUniqueInputObjectSchema }).strict();

// File: findUniqueOrThrowStorySection.schema.ts

export const StorySectionFindUniqueOrThrowSchema: z.ZodType<Prisma.StorySectionFindUniqueOrThrowArgs> = z.object({ select: StorySectionSelectObjectSchema.optional(), include: StorySectionIncludeObjectSchema.optional(), where: StorySectionWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.StorySectionFindUniqueOrThrowArgs>;

export const StorySectionFindUniqueOrThrowZodSchema = z.object({ select: StorySectionSelectObjectSchema.optional(), include: StorySectionIncludeObjectSchema.optional(), where: StorySectionWhereUniqueInputObjectSchema }).strict();

// File: findFirstStorySection.schema.ts

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const StorySectionFindFirstSelectSchema__findFirstStorySection_schema: z.ZodType<Prisma.StorySectionSelect> = z.object({
    id: z.boolean().optional(),
    projectSlug: z.boolean().optional(),
    project: z.union([z.boolean(), z.lazy(() => ProjectArgsObjectSchema)]).optional(),
    position: z.boolean().optional(),
    title: z.boolean().optional(),
    by: z.boolean().optional(),
    blocks: z.union([z.boolean(), z.lazy(() => StoryBlockFindManySchema)]).optional(),
    layout: z.boolean().optional(),
    _count: z.union([z.boolean(), z.lazy(() => StorySectionCountOutputTypeArgsObjectSchema)]).optional()
  }).strict() as unknown as z.ZodType<Prisma.StorySectionSelect>;

export const StorySectionFindFirstSelectZodSchema__findFirstStorySection_schema = z.object({
    id: z.boolean().optional(),
    projectSlug: z.boolean().optional(),
    project: z.union([z.boolean(), z.lazy(() => ProjectArgsObjectSchema)]).optional(),
    position: z.boolean().optional(),
    title: z.boolean().optional(),
    by: z.boolean().optional(),
    blocks: z.union([z.boolean(), z.lazy(() => StoryBlockFindManySchema)]).optional(),
    layout: z.boolean().optional(),
    _count: z.union([z.boolean(), z.lazy(() => StorySectionCountOutputTypeArgsObjectSchema)]).optional()
  }).strict();

export const StorySectionFindFirstSchema: z.ZodType<Prisma.StorySectionFindFirstArgs> = z.object({ select: StorySectionFindFirstSelectSchema__findFirstStorySection_schema.optional(), include: z.lazy(() => StorySectionIncludeObjectSchema.optional()), orderBy: z.union([StorySectionOrderByWithRelationInputObjectSchema, StorySectionOrderByWithRelationInputObjectSchema.array()]).optional(), where: StorySectionWhereInputObjectSchema.optional(), cursor: StorySectionWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([StorySectionScalarFieldEnumSchema, StorySectionScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.StorySectionFindFirstArgs>;

export const StorySectionFindFirstZodSchema = z.object({ select: StorySectionFindFirstSelectSchema__findFirstStorySection_schema.optional(), include: z.lazy(() => StorySectionIncludeObjectSchema.optional()), orderBy: z.union([StorySectionOrderByWithRelationInputObjectSchema, StorySectionOrderByWithRelationInputObjectSchema.array()]).optional(), where: StorySectionWhereInputObjectSchema.optional(), cursor: StorySectionWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([StorySectionScalarFieldEnumSchema, StorySectionScalarFieldEnumSchema.array()]).optional() }).strict();

// File: findFirstOrThrowStorySection.schema.ts

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const StorySectionFindFirstOrThrowSelectSchema__findFirstOrThrowStorySection_schema: z.ZodType<Prisma.StorySectionSelect> = z.object({
    id: z.boolean().optional(),
    projectSlug: z.boolean().optional(),
    project: z.union([z.boolean(), z.lazy(() => ProjectArgsObjectSchema)]).optional(),
    position: z.boolean().optional(),
    title: z.boolean().optional(),
    by: z.boolean().optional(),
    blocks: z.union([z.boolean(), z.lazy(() => StoryBlockFindManySchema)]).optional(),
    layout: z.boolean().optional(),
    _count: z.union([z.boolean(), z.lazy(() => StorySectionCountOutputTypeArgsObjectSchema)]).optional()
  }).strict() as unknown as z.ZodType<Prisma.StorySectionSelect>;

export const StorySectionFindFirstOrThrowSelectZodSchema__findFirstOrThrowStorySection_schema = z.object({
    id: z.boolean().optional(),
    projectSlug: z.boolean().optional(),
    project: z.union([z.boolean(), z.lazy(() => ProjectArgsObjectSchema)]).optional(),
    position: z.boolean().optional(),
    title: z.boolean().optional(),
    by: z.boolean().optional(),
    blocks: z.union([z.boolean(), z.lazy(() => StoryBlockFindManySchema)]).optional(),
    layout: z.boolean().optional(),
    _count: z.union([z.boolean(), z.lazy(() => StorySectionCountOutputTypeArgsObjectSchema)]).optional()
  }).strict();

export const StorySectionFindFirstOrThrowSchema: z.ZodType<Prisma.StorySectionFindFirstOrThrowArgs> = z.object({ select: StorySectionFindFirstOrThrowSelectSchema__findFirstOrThrowStorySection_schema.optional(), include: z.lazy(() => StorySectionIncludeObjectSchema.optional()), orderBy: z.union([StorySectionOrderByWithRelationInputObjectSchema, StorySectionOrderByWithRelationInputObjectSchema.array()]).optional(), where: StorySectionWhereInputObjectSchema.optional(), cursor: StorySectionWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([StorySectionScalarFieldEnumSchema, StorySectionScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.StorySectionFindFirstOrThrowArgs>;

export const StorySectionFindFirstOrThrowZodSchema = z.object({ select: StorySectionFindFirstOrThrowSelectSchema__findFirstOrThrowStorySection_schema.optional(), include: z.lazy(() => StorySectionIncludeObjectSchema.optional()), orderBy: z.union([StorySectionOrderByWithRelationInputObjectSchema, StorySectionOrderByWithRelationInputObjectSchema.array()]).optional(), where: StorySectionWhereInputObjectSchema.optional(), cursor: StorySectionWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([StorySectionScalarFieldEnumSchema, StorySectionScalarFieldEnumSchema.array()]).optional() }).strict();

// File: findManyStorySection.schema.ts

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const StorySectionFindManySelectSchema__findManyStorySection_schema: z.ZodType<Prisma.StorySectionSelect> = z.object({
    id: z.boolean().optional(),
    projectSlug: z.boolean().optional(),
    project: z.union([z.boolean(), z.lazy(() => ProjectArgsObjectSchema)]).optional(),
    position: z.boolean().optional(),
    title: z.boolean().optional(),
    by: z.boolean().optional(),
    blocks: z.union([z.boolean(), z.lazy(() => StoryBlockFindManySchema)]).optional(),
    layout: z.boolean().optional(),
    _count: z.union([z.boolean(), z.lazy(() => StorySectionCountOutputTypeArgsObjectSchema)]).optional()
  }).strict() as unknown as z.ZodType<Prisma.StorySectionSelect>;

export const StorySectionFindManySelectZodSchema__findManyStorySection_schema = z.object({
    id: z.boolean().optional(),
    projectSlug: z.boolean().optional(),
    project: z.union([z.boolean(), z.lazy(() => ProjectArgsObjectSchema)]).optional(),
    position: z.boolean().optional(),
    title: z.boolean().optional(),
    by: z.boolean().optional(),
    blocks: z.union([z.boolean(), z.lazy(() => StoryBlockFindManySchema)]).optional(),
    layout: z.boolean().optional(),
    _count: z.union([z.boolean(), z.lazy(() => StorySectionCountOutputTypeArgsObjectSchema)]).optional()
  }).strict();

export const StorySectionFindManySchema: z.ZodType<Prisma.StorySectionFindManyArgs> = z.object({ select: StorySectionFindManySelectSchema__findManyStorySection_schema.optional(), include: z.lazy(() => StorySectionIncludeObjectSchema.optional()), orderBy: z.union([StorySectionOrderByWithRelationInputObjectSchema, StorySectionOrderByWithRelationInputObjectSchema.array()]).optional(), where: StorySectionWhereInputObjectSchema.optional(), cursor: StorySectionWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([StorySectionScalarFieldEnumSchema, StorySectionScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.StorySectionFindManyArgs>;

export const StorySectionFindManyZodSchema = z.object({ select: StorySectionFindManySelectSchema__findManyStorySection_schema.optional(), include: z.lazy(() => StorySectionIncludeObjectSchema.optional()), orderBy: z.union([StorySectionOrderByWithRelationInputObjectSchema, StorySectionOrderByWithRelationInputObjectSchema.array()]).optional(), where: StorySectionWhereInputObjectSchema.optional(), cursor: StorySectionWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([StorySectionScalarFieldEnumSchema, StorySectionScalarFieldEnumSchema.array()]).optional() }).strict();

// File: countStorySection.schema.ts

export const StorySectionCountSchema: z.ZodType<Prisma.StorySectionCountArgs> = z.object({ orderBy: z.union([StorySectionOrderByWithRelationInputObjectSchema, StorySectionOrderByWithRelationInputObjectSchema.array()]).optional(), where: StorySectionWhereInputObjectSchema.optional(), cursor: StorySectionWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), StorySectionCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.StorySectionCountArgs>;

export const StorySectionCountZodSchema = z.object({ orderBy: z.union([StorySectionOrderByWithRelationInputObjectSchema, StorySectionOrderByWithRelationInputObjectSchema.array()]).optional(), where: StorySectionWhereInputObjectSchema.optional(), cursor: StorySectionWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), StorySectionCountAggregateInputObjectSchema ]).optional() }).strict();

// File: createOneStorySection.schema.ts

export const StorySectionCreateOneSchema: z.ZodType<Prisma.StorySectionCreateArgs> = z.object({ select: StorySectionSelectObjectSchema.optional(), include: StorySectionIncludeObjectSchema.optional(), data: z.union([StorySectionCreateInputObjectSchema, StorySectionUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.StorySectionCreateArgs>;

export const StorySectionCreateOneZodSchema = z.object({ select: StorySectionSelectObjectSchema.optional(), include: StorySectionIncludeObjectSchema.optional(), data: z.union([StorySectionCreateInputObjectSchema, StorySectionUncheckedCreateInputObjectSchema]) }).strict();

// File: createManyStorySection.schema.ts

export const StorySectionCreateManySchema: z.ZodType<Prisma.StorySectionCreateManyArgs> = z.object({ data: z.union([ StorySectionCreateManyInputObjectSchema, z.array(StorySectionCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.StorySectionCreateManyArgs>;

export const StorySectionCreateManyZodSchema = z.object({ data: z.union([ StorySectionCreateManyInputObjectSchema, z.array(StorySectionCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();

// File: createManyAndReturnStorySection.schema.ts

export const StorySectionCreateManyAndReturnSchema: z.ZodType<Prisma.StorySectionCreateManyAndReturnArgs> = z.object({ select: StorySectionSelectObjectSchema.optional(), data: z.union([ StorySectionCreateManyInputObjectSchema, z.array(StorySectionCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.StorySectionCreateManyAndReturnArgs>;

export const StorySectionCreateManyAndReturnZodSchema = z.object({ select: StorySectionSelectObjectSchema.optional(), data: z.union([ StorySectionCreateManyInputObjectSchema, z.array(StorySectionCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();

// File: deleteOneStorySection.schema.ts

export const StorySectionDeleteOneSchema: z.ZodType<Prisma.StorySectionDeleteArgs> = z.object({ select: StorySectionSelectObjectSchema.optional(), include: StorySectionIncludeObjectSchema.optional(), where: StorySectionWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.StorySectionDeleteArgs>;

export const StorySectionDeleteOneZodSchema = z.object({ select: StorySectionSelectObjectSchema.optional(), include: StorySectionIncludeObjectSchema.optional(), where: StorySectionWhereUniqueInputObjectSchema }).strict();

// File: deleteManyStorySection.schema.ts

export const StorySectionDeleteManySchema: z.ZodType<Prisma.StorySectionDeleteManyArgs> = z.object({ where: StorySectionWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.StorySectionDeleteManyArgs>;

export const StorySectionDeleteManyZodSchema = z.object({ where: StorySectionWhereInputObjectSchema.optional() }).strict();

// File: updateOneStorySection.schema.ts

export const StorySectionUpdateOneSchema: z.ZodType<Prisma.StorySectionUpdateArgs> = z.object({ select: StorySectionSelectObjectSchema.optional(), include: StorySectionIncludeObjectSchema.optional(), data: z.union([StorySectionUpdateInputObjectSchema, StorySectionUncheckedUpdateInputObjectSchema]), where: StorySectionWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.StorySectionUpdateArgs>;

export const StorySectionUpdateOneZodSchema = z.object({ select: StorySectionSelectObjectSchema.optional(), include: StorySectionIncludeObjectSchema.optional(), data: z.union([StorySectionUpdateInputObjectSchema, StorySectionUncheckedUpdateInputObjectSchema]), where: StorySectionWhereUniqueInputObjectSchema }).strict();

// File: updateManyStorySection.schema.ts

export const StorySectionUpdateManySchema: z.ZodType<Prisma.StorySectionUpdateManyArgs> = z.object({ data: StorySectionUpdateManyMutationInputObjectSchema, where: StorySectionWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.StorySectionUpdateManyArgs>;

export const StorySectionUpdateManyZodSchema = z.object({ data: StorySectionUpdateManyMutationInputObjectSchema, where: StorySectionWhereInputObjectSchema.optional() }).strict();

// File: updateManyAndReturnStorySection.schema.ts

export const StorySectionUpdateManyAndReturnSchema: z.ZodType<Prisma.StorySectionUpdateManyAndReturnArgs> = z.object({ select: StorySectionSelectObjectSchema.optional(), data: StorySectionUpdateManyMutationInputObjectSchema, where: StorySectionWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.StorySectionUpdateManyAndReturnArgs>;

export const StorySectionUpdateManyAndReturnZodSchema = z.object({ select: StorySectionSelectObjectSchema.optional(), data: StorySectionUpdateManyMutationInputObjectSchema, where: StorySectionWhereInputObjectSchema.optional() }).strict();

// File: upsertOneStorySection.schema.ts

export const StorySectionUpsertOneSchema: z.ZodType<Prisma.StorySectionUpsertArgs> = z.object({ select: StorySectionSelectObjectSchema.optional(), include: StorySectionIncludeObjectSchema.optional(), where: StorySectionWhereUniqueInputObjectSchema, create: z.union([ StorySectionCreateInputObjectSchema, StorySectionUncheckedCreateInputObjectSchema ]), update: z.union([ StorySectionUpdateInputObjectSchema, StorySectionUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.StorySectionUpsertArgs>;

export const StorySectionUpsertOneZodSchema = z.object({ select: StorySectionSelectObjectSchema.optional(), include: StorySectionIncludeObjectSchema.optional(), where: StorySectionWhereUniqueInputObjectSchema, create: z.union([ StorySectionCreateInputObjectSchema, StorySectionUncheckedCreateInputObjectSchema ]), update: z.union([ StorySectionUpdateInputObjectSchema, StorySectionUncheckedUpdateInputObjectSchema ]) }).strict();

// File: aggregateStorySection.schema.ts

export const StorySectionAggregateSchema: z.ZodType<Prisma.StorySectionAggregateArgs> = z.object({ orderBy: z.union([StorySectionOrderByWithRelationInputObjectSchema, StorySectionOrderByWithRelationInputObjectSchema.array()]).optional(), where: StorySectionWhereInputObjectSchema.optional(), cursor: StorySectionWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), StorySectionCountAggregateInputObjectSchema ]).optional(), _min: StorySectionMinAggregateInputObjectSchema.optional(), _max: StorySectionMaxAggregateInputObjectSchema.optional(), _avg: StorySectionAvgAggregateInputObjectSchema.optional(), _sum: StorySectionSumAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.StorySectionAggregateArgs>;

export const StorySectionAggregateZodSchema = z.object({ orderBy: z.union([StorySectionOrderByWithRelationInputObjectSchema, StorySectionOrderByWithRelationInputObjectSchema.array()]).optional(), where: StorySectionWhereInputObjectSchema.optional(), cursor: StorySectionWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), StorySectionCountAggregateInputObjectSchema ]).optional(), _min: StorySectionMinAggregateInputObjectSchema.optional(), _max: StorySectionMaxAggregateInputObjectSchema.optional(), _avg: StorySectionAvgAggregateInputObjectSchema.optional(), _sum: StorySectionSumAggregateInputObjectSchema.optional() }).strict();

// File: groupByStorySection.schema.ts

export const StorySectionGroupBySchema: z.ZodType<Prisma.StorySectionGroupByArgs> = z.object({ where: StorySectionWhereInputObjectSchema.optional(), orderBy: z.union([StorySectionOrderByWithAggregationInputObjectSchema, StorySectionOrderByWithAggregationInputObjectSchema.array()]).optional(), having: StorySectionScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(StorySectionScalarFieldEnumSchema), _count: z.union([ z.literal(true), StorySectionCountAggregateInputObjectSchema ]).optional(), _min: StorySectionMinAggregateInputObjectSchema.optional(), _max: StorySectionMaxAggregateInputObjectSchema.optional(), _avg: StorySectionAvgAggregateInputObjectSchema.optional(), _sum: StorySectionSumAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.StorySectionGroupByArgs>;

export const StorySectionGroupByZodSchema = z.object({ where: StorySectionWhereInputObjectSchema.optional(), orderBy: z.union([StorySectionOrderByWithAggregationInputObjectSchema, StorySectionOrderByWithAggregationInputObjectSchema.array()]).optional(), having: StorySectionScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(StorySectionScalarFieldEnumSchema), _count: z.union([ z.literal(true), StorySectionCountAggregateInputObjectSchema ]).optional(), _min: StorySectionMinAggregateInputObjectSchema.optional(), _max: StorySectionMaxAggregateInputObjectSchema.optional(), _avg: StorySectionAvgAggregateInputObjectSchema.optional(), _sum: StorySectionSumAggregateInputObjectSchema.optional() }).strict();

// File: findUniqueStudioMember.schema.ts

export const StudioMemberFindUniqueSchema: z.ZodType<Prisma.StudioMemberFindUniqueArgs> = z.object({ select: StudioMemberSelectObjectSchema.optional(), include: StudioMemberIncludeObjectSchema.optional(), where: StudioMemberWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.StudioMemberFindUniqueArgs>;

export const StudioMemberFindUniqueZodSchema = z.object({ select: StudioMemberSelectObjectSchema.optional(), include: StudioMemberIncludeObjectSchema.optional(), where: StudioMemberWhereUniqueInputObjectSchema }).strict();

// File: findUniqueOrThrowStudioMember.schema.ts

export const StudioMemberFindUniqueOrThrowSchema: z.ZodType<Prisma.StudioMemberFindUniqueOrThrowArgs> = z.object({ select: StudioMemberSelectObjectSchema.optional(), include: StudioMemberIncludeObjectSchema.optional(), where: StudioMemberWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.StudioMemberFindUniqueOrThrowArgs>;

export const StudioMemberFindUniqueOrThrowZodSchema = z.object({ select: StudioMemberSelectObjectSchema.optional(), include: StudioMemberIncludeObjectSchema.optional(), where: StudioMemberWhereUniqueInputObjectSchema }).strict();

// File: findFirstStudioMember.schema.ts

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const StudioMemberFindFirstSelectSchema__findFirstStudioMember_schema: z.ZodType<Prisma.StudioMemberSelect> = z.object({
    slug: z.boolean().optional(),
    position: z.boolean().optional(),
    name: z.boolean().optional(),
    role: z.boolean().optional(),
    description: z.boolean().optional(),
    bio: z.boolean().optional(),
    model: z.boolean().optional(),
    scale: z.boolean().optional(),
    roughness: z.boolean().optional(),
    metalness: z.boolean().optional(),
    hair: z.boolean().optional(),
    rotation: z.boolean().optional(),
    highlight: z.boolean().optional(),
    socials: z.boolean().optional(),
    labels: z.boolean().optional(),
    projects: z.boolean().optional(),
    suite: z.boolean().optional(),
    facts: z.boolean().optional(),
    teamOf: z.union([z.boolean(), z.lazy(() => ProjectFindManySchema)]).optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    _count: z.union([z.boolean(), z.lazy(() => StudioMemberCountOutputTypeArgsObjectSchema)]).optional()
  }).strict() as unknown as z.ZodType<Prisma.StudioMemberSelect>;

export const StudioMemberFindFirstSelectZodSchema__findFirstStudioMember_schema = z.object({
    slug: z.boolean().optional(),
    position: z.boolean().optional(),
    name: z.boolean().optional(),
    role: z.boolean().optional(),
    description: z.boolean().optional(),
    bio: z.boolean().optional(),
    model: z.boolean().optional(),
    scale: z.boolean().optional(),
    roughness: z.boolean().optional(),
    metalness: z.boolean().optional(),
    hair: z.boolean().optional(),
    rotation: z.boolean().optional(),
    highlight: z.boolean().optional(),
    socials: z.boolean().optional(),
    labels: z.boolean().optional(),
    projects: z.boolean().optional(),
    suite: z.boolean().optional(),
    facts: z.boolean().optional(),
    teamOf: z.union([z.boolean(), z.lazy(() => ProjectFindManySchema)]).optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    _count: z.union([z.boolean(), z.lazy(() => StudioMemberCountOutputTypeArgsObjectSchema)]).optional()
  }).strict();

export const StudioMemberFindFirstSchema: z.ZodType<Prisma.StudioMemberFindFirstArgs> = z.object({ select: StudioMemberFindFirstSelectSchema__findFirstStudioMember_schema.optional(), include: z.lazy(() => StudioMemberIncludeObjectSchema.optional()), orderBy: z.union([StudioMemberOrderByWithRelationInputObjectSchema, StudioMemberOrderByWithRelationInputObjectSchema.array()]).optional(), where: StudioMemberWhereInputObjectSchema.optional(), cursor: StudioMemberWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([StudioMemberScalarFieldEnumSchema, StudioMemberScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.StudioMemberFindFirstArgs>;

export const StudioMemberFindFirstZodSchema = z.object({ select: StudioMemberFindFirstSelectSchema__findFirstStudioMember_schema.optional(), include: z.lazy(() => StudioMemberIncludeObjectSchema.optional()), orderBy: z.union([StudioMemberOrderByWithRelationInputObjectSchema, StudioMemberOrderByWithRelationInputObjectSchema.array()]).optional(), where: StudioMemberWhereInputObjectSchema.optional(), cursor: StudioMemberWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([StudioMemberScalarFieldEnumSchema, StudioMemberScalarFieldEnumSchema.array()]).optional() }).strict();

// File: findFirstOrThrowStudioMember.schema.ts

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const StudioMemberFindFirstOrThrowSelectSchema__findFirstOrThrowStudioMember_schema: z.ZodType<Prisma.StudioMemberSelect> = z.object({
    slug: z.boolean().optional(),
    position: z.boolean().optional(),
    name: z.boolean().optional(),
    role: z.boolean().optional(),
    description: z.boolean().optional(),
    bio: z.boolean().optional(),
    model: z.boolean().optional(),
    scale: z.boolean().optional(),
    roughness: z.boolean().optional(),
    metalness: z.boolean().optional(),
    hair: z.boolean().optional(),
    rotation: z.boolean().optional(),
    highlight: z.boolean().optional(),
    socials: z.boolean().optional(),
    labels: z.boolean().optional(),
    projects: z.boolean().optional(),
    suite: z.boolean().optional(),
    facts: z.boolean().optional(),
    teamOf: z.union([z.boolean(), z.lazy(() => ProjectFindManySchema)]).optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    _count: z.union([z.boolean(), z.lazy(() => StudioMemberCountOutputTypeArgsObjectSchema)]).optional()
  }).strict() as unknown as z.ZodType<Prisma.StudioMemberSelect>;

export const StudioMemberFindFirstOrThrowSelectZodSchema__findFirstOrThrowStudioMember_schema = z.object({
    slug: z.boolean().optional(),
    position: z.boolean().optional(),
    name: z.boolean().optional(),
    role: z.boolean().optional(),
    description: z.boolean().optional(),
    bio: z.boolean().optional(),
    model: z.boolean().optional(),
    scale: z.boolean().optional(),
    roughness: z.boolean().optional(),
    metalness: z.boolean().optional(),
    hair: z.boolean().optional(),
    rotation: z.boolean().optional(),
    highlight: z.boolean().optional(),
    socials: z.boolean().optional(),
    labels: z.boolean().optional(),
    projects: z.boolean().optional(),
    suite: z.boolean().optional(),
    facts: z.boolean().optional(),
    teamOf: z.union([z.boolean(), z.lazy(() => ProjectFindManySchema)]).optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    _count: z.union([z.boolean(), z.lazy(() => StudioMemberCountOutputTypeArgsObjectSchema)]).optional()
  }).strict();

export const StudioMemberFindFirstOrThrowSchema: z.ZodType<Prisma.StudioMemberFindFirstOrThrowArgs> = z.object({ select: StudioMemberFindFirstOrThrowSelectSchema__findFirstOrThrowStudioMember_schema.optional(), include: z.lazy(() => StudioMemberIncludeObjectSchema.optional()), orderBy: z.union([StudioMemberOrderByWithRelationInputObjectSchema, StudioMemberOrderByWithRelationInputObjectSchema.array()]).optional(), where: StudioMemberWhereInputObjectSchema.optional(), cursor: StudioMemberWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([StudioMemberScalarFieldEnumSchema, StudioMemberScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.StudioMemberFindFirstOrThrowArgs>;

export const StudioMemberFindFirstOrThrowZodSchema = z.object({ select: StudioMemberFindFirstOrThrowSelectSchema__findFirstOrThrowStudioMember_schema.optional(), include: z.lazy(() => StudioMemberIncludeObjectSchema.optional()), orderBy: z.union([StudioMemberOrderByWithRelationInputObjectSchema, StudioMemberOrderByWithRelationInputObjectSchema.array()]).optional(), where: StudioMemberWhereInputObjectSchema.optional(), cursor: StudioMemberWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([StudioMemberScalarFieldEnumSchema, StudioMemberScalarFieldEnumSchema.array()]).optional() }).strict();

// File: findManyStudioMember.schema.ts

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const StudioMemberFindManySelectSchema__findManyStudioMember_schema: z.ZodType<Prisma.StudioMemberSelect> = z.object({
    slug: z.boolean().optional(),
    position: z.boolean().optional(),
    name: z.boolean().optional(),
    role: z.boolean().optional(),
    description: z.boolean().optional(),
    bio: z.boolean().optional(),
    model: z.boolean().optional(),
    scale: z.boolean().optional(),
    roughness: z.boolean().optional(),
    metalness: z.boolean().optional(),
    hair: z.boolean().optional(),
    rotation: z.boolean().optional(),
    highlight: z.boolean().optional(),
    socials: z.boolean().optional(),
    labels: z.boolean().optional(),
    projects: z.boolean().optional(),
    suite: z.boolean().optional(),
    facts: z.boolean().optional(),
    teamOf: z.union([z.boolean(), z.lazy(() => ProjectFindManySchema)]).optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    _count: z.union([z.boolean(), z.lazy(() => StudioMemberCountOutputTypeArgsObjectSchema)]).optional()
  }).strict() as unknown as z.ZodType<Prisma.StudioMemberSelect>;

export const StudioMemberFindManySelectZodSchema__findManyStudioMember_schema = z.object({
    slug: z.boolean().optional(),
    position: z.boolean().optional(),
    name: z.boolean().optional(),
    role: z.boolean().optional(),
    description: z.boolean().optional(),
    bio: z.boolean().optional(),
    model: z.boolean().optional(),
    scale: z.boolean().optional(),
    roughness: z.boolean().optional(),
    metalness: z.boolean().optional(),
    hair: z.boolean().optional(),
    rotation: z.boolean().optional(),
    highlight: z.boolean().optional(),
    socials: z.boolean().optional(),
    labels: z.boolean().optional(),
    projects: z.boolean().optional(),
    suite: z.boolean().optional(),
    facts: z.boolean().optional(),
    teamOf: z.union([z.boolean(), z.lazy(() => ProjectFindManySchema)]).optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    _count: z.union([z.boolean(), z.lazy(() => StudioMemberCountOutputTypeArgsObjectSchema)]).optional()
  }).strict();

export const StudioMemberFindManySchema: z.ZodType<Prisma.StudioMemberFindManyArgs> = z.object({ select: StudioMemberFindManySelectSchema__findManyStudioMember_schema.optional(), include: z.lazy(() => StudioMemberIncludeObjectSchema.optional()), orderBy: z.union([StudioMemberOrderByWithRelationInputObjectSchema, StudioMemberOrderByWithRelationInputObjectSchema.array()]).optional(), where: StudioMemberWhereInputObjectSchema.optional(), cursor: StudioMemberWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([StudioMemberScalarFieldEnumSchema, StudioMemberScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.StudioMemberFindManyArgs>;

export const StudioMemberFindManyZodSchema = z.object({ select: StudioMemberFindManySelectSchema__findManyStudioMember_schema.optional(), include: z.lazy(() => StudioMemberIncludeObjectSchema.optional()), orderBy: z.union([StudioMemberOrderByWithRelationInputObjectSchema, StudioMemberOrderByWithRelationInputObjectSchema.array()]).optional(), where: StudioMemberWhereInputObjectSchema.optional(), cursor: StudioMemberWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([StudioMemberScalarFieldEnumSchema, StudioMemberScalarFieldEnumSchema.array()]).optional() }).strict();

// File: countStudioMember.schema.ts

export const StudioMemberCountSchema: z.ZodType<Prisma.StudioMemberCountArgs> = z.object({ orderBy: z.union([StudioMemberOrderByWithRelationInputObjectSchema, StudioMemberOrderByWithRelationInputObjectSchema.array()]).optional(), where: StudioMemberWhereInputObjectSchema.optional(), cursor: StudioMemberWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), StudioMemberCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.StudioMemberCountArgs>;

export const StudioMemberCountZodSchema = z.object({ orderBy: z.union([StudioMemberOrderByWithRelationInputObjectSchema, StudioMemberOrderByWithRelationInputObjectSchema.array()]).optional(), where: StudioMemberWhereInputObjectSchema.optional(), cursor: StudioMemberWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), StudioMemberCountAggregateInputObjectSchema ]).optional() }).strict();

// File: createOneStudioMember.schema.ts

export const StudioMemberCreateOneSchema: z.ZodType<Prisma.StudioMemberCreateArgs> = z.object({ select: StudioMemberSelectObjectSchema.optional(), include: StudioMemberIncludeObjectSchema.optional(), data: z.union([StudioMemberCreateInputObjectSchema, StudioMemberUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.StudioMemberCreateArgs>;

export const StudioMemberCreateOneZodSchema = z.object({ select: StudioMemberSelectObjectSchema.optional(), include: StudioMemberIncludeObjectSchema.optional(), data: z.union([StudioMemberCreateInputObjectSchema, StudioMemberUncheckedCreateInputObjectSchema]) }).strict();

// File: createManyStudioMember.schema.ts

export const StudioMemberCreateManySchema: z.ZodType<Prisma.StudioMemberCreateManyArgs> = z.object({ data: z.union([ StudioMemberCreateManyInputObjectSchema, z.array(StudioMemberCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.StudioMemberCreateManyArgs>;

export const StudioMemberCreateManyZodSchema = z.object({ data: z.union([ StudioMemberCreateManyInputObjectSchema, z.array(StudioMemberCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();

// File: createManyAndReturnStudioMember.schema.ts

export const StudioMemberCreateManyAndReturnSchema: z.ZodType<Prisma.StudioMemberCreateManyAndReturnArgs> = z.object({ select: StudioMemberSelectObjectSchema.optional(), data: z.union([ StudioMemberCreateManyInputObjectSchema, z.array(StudioMemberCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.StudioMemberCreateManyAndReturnArgs>;

export const StudioMemberCreateManyAndReturnZodSchema = z.object({ select: StudioMemberSelectObjectSchema.optional(), data: z.union([ StudioMemberCreateManyInputObjectSchema, z.array(StudioMemberCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();

// File: deleteOneStudioMember.schema.ts

export const StudioMemberDeleteOneSchema: z.ZodType<Prisma.StudioMemberDeleteArgs> = z.object({ select: StudioMemberSelectObjectSchema.optional(), include: StudioMemberIncludeObjectSchema.optional(), where: StudioMemberWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.StudioMemberDeleteArgs>;

export const StudioMemberDeleteOneZodSchema = z.object({ select: StudioMemberSelectObjectSchema.optional(), include: StudioMemberIncludeObjectSchema.optional(), where: StudioMemberWhereUniqueInputObjectSchema }).strict();

// File: deleteManyStudioMember.schema.ts

export const StudioMemberDeleteManySchema: z.ZodType<Prisma.StudioMemberDeleteManyArgs> = z.object({ where: StudioMemberWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.StudioMemberDeleteManyArgs>;

export const StudioMemberDeleteManyZodSchema = z.object({ where: StudioMemberWhereInputObjectSchema.optional() }).strict();

// File: updateOneStudioMember.schema.ts

export const StudioMemberUpdateOneSchema: z.ZodType<Prisma.StudioMemberUpdateArgs> = z.object({ select: StudioMemberSelectObjectSchema.optional(), include: StudioMemberIncludeObjectSchema.optional(), data: z.union([StudioMemberUpdateInputObjectSchema, StudioMemberUncheckedUpdateInputObjectSchema]), where: StudioMemberWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.StudioMemberUpdateArgs>;

export const StudioMemberUpdateOneZodSchema = z.object({ select: StudioMemberSelectObjectSchema.optional(), include: StudioMemberIncludeObjectSchema.optional(), data: z.union([StudioMemberUpdateInputObjectSchema, StudioMemberUncheckedUpdateInputObjectSchema]), where: StudioMemberWhereUniqueInputObjectSchema }).strict();

// File: updateManyStudioMember.schema.ts

export const StudioMemberUpdateManySchema: z.ZodType<Prisma.StudioMemberUpdateManyArgs> = z.object({ data: StudioMemberUpdateManyMutationInputObjectSchema, where: StudioMemberWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.StudioMemberUpdateManyArgs>;

export const StudioMemberUpdateManyZodSchema = z.object({ data: StudioMemberUpdateManyMutationInputObjectSchema, where: StudioMemberWhereInputObjectSchema.optional() }).strict();

// File: updateManyAndReturnStudioMember.schema.ts

export const StudioMemberUpdateManyAndReturnSchema: z.ZodType<Prisma.StudioMemberUpdateManyAndReturnArgs> = z.object({ select: StudioMemberSelectObjectSchema.optional(), data: StudioMemberUpdateManyMutationInputObjectSchema, where: StudioMemberWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.StudioMemberUpdateManyAndReturnArgs>;

export const StudioMemberUpdateManyAndReturnZodSchema = z.object({ select: StudioMemberSelectObjectSchema.optional(), data: StudioMemberUpdateManyMutationInputObjectSchema, where: StudioMemberWhereInputObjectSchema.optional() }).strict();

// File: upsertOneStudioMember.schema.ts

export const StudioMemberUpsertOneSchema: z.ZodType<Prisma.StudioMemberUpsertArgs> = z.object({ select: StudioMemberSelectObjectSchema.optional(), include: StudioMemberIncludeObjectSchema.optional(), where: StudioMemberWhereUniqueInputObjectSchema, create: z.union([ StudioMemberCreateInputObjectSchema, StudioMemberUncheckedCreateInputObjectSchema ]), update: z.union([ StudioMemberUpdateInputObjectSchema, StudioMemberUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.StudioMemberUpsertArgs>;

export const StudioMemberUpsertOneZodSchema = z.object({ select: StudioMemberSelectObjectSchema.optional(), include: StudioMemberIncludeObjectSchema.optional(), where: StudioMemberWhereUniqueInputObjectSchema, create: z.union([ StudioMemberCreateInputObjectSchema, StudioMemberUncheckedCreateInputObjectSchema ]), update: z.union([ StudioMemberUpdateInputObjectSchema, StudioMemberUncheckedUpdateInputObjectSchema ]) }).strict();

// File: aggregateStudioMember.schema.ts

export const StudioMemberAggregateSchema: z.ZodType<Prisma.StudioMemberAggregateArgs> = z.object({ orderBy: z.union([StudioMemberOrderByWithRelationInputObjectSchema, StudioMemberOrderByWithRelationInputObjectSchema.array()]).optional(), where: StudioMemberWhereInputObjectSchema.optional(), cursor: StudioMemberWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), StudioMemberCountAggregateInputObjectSchema ]).optional(), _min: StudioMemberMinAggregateInputObjectSchema.optional(), _max: StudioMemberMaxAggregateInputObjectSchema.optional(), _avg: StudioMemberAvgAggregateInputObjectSchema.optional(), _sum: StudioMemberSumAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.StudioMemberAggregateArgs>;

export const StudioMemberAggregateZodSchema = z.object({ orderBy: z.union([StudioMemberOrderByWithRelationInputObjectSchema, StudioMemberOrderByWithRelationInputObjectSchema.array()]).optional(), where: StudioMemberWhereInputObjectSchema.optional(), cursor: StudioMemberWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), StudioMemberCountAggregateInputObjectSchema ]).optional(), _min: StudioMemberMinAggregateInputObjectSchema.optional(), _max: StudioMemberMaxAggregateInputObjectSchema.optional(), _avg: StudioMemberAvgAggregateInputObjectSchema.optional(), _sum: StudioMemberSumAggregateInputObjectSchema.optional() }).strict();

// File: groupByStudioMember.schema.ts

export const StudioMemberGroupBySchema: z.ZodType<Prisma.StudioMemberGroupByArgs> = z.object({ where: StudioMemberWhereInputObjectSchema.optional(), orderBy: z.union([StudioMemberOrderByWithAggregationInputObjectSchema, StudioMemberOrderByWithAggregationInputObjectSchema.array()]).optional(), having: StudioMemberScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(StudioMemberScalarFieldEnumSchema), _count: z.union([ z.literal(true), StudioMemberCountAggregateInputObjectSchema ]).optional(), _min: StudioMemberMinAggregateInputObjectSchema.optional(), _max: StudioMemberMaxAggregateInputObjectSchema.optional(), _avg: StudioMemberAvgAggregateInputObjectSchema.optional(), _sum: StudioMemberSumAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.StudioMemberGroupByArgs>;

export const StudioMemberGroupByZodSchema = z.object({ where: StudioMemberWhereInputObjectSchema.optional(), orderBy: z.union([StudioMemberOrderByWithAggregationInputObjectSchema, StudioMemberOrderByWithAggregationInputObjectSchema.array()]).optional(), having: StudioMemberScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(StudioMemberScalarFieldEnumSchema), _count: z.union([ z.literal(true), StudioMemberCountAggregateInputObjectSchema ]).optional(), _min: StudioMemberMinAggregateInputObjectSchema.optional(), _max: StudioMemberMaxAggregateInputObjectSchema.optional(), _avg: StudioMemberAvgAggregateInputObjectSchema.optional(), _sum: StudioMemberSumAggregateInputObjectSchema.optional() }).strict();

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
  message: z.string(),
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
  slug: z.string(),
  position: z.number().int(),
  name: z.string(),
  weeks: z.number().int(),
  link: z.string().nullish(),
  image: z.string(),
  video: z.string().nullish(),
  coverEffect: z.string().nullish(),
  description: z.unknown().refine((val) => { const getDepth = (obj: unknown, depth: number = 0): number => { if (depth > 10) return depth; if (obj === null || typeof obj !== 'object') return depth; const values = Object.values(obj as Record<string, unknown>); if (values.length === 0) return depth; return Math.max(...values.map(v => getDepth(v, depth + 1))); }; return getDepth(val) <= 10; }, "JSON nesting depth exceeds maximum of 10"),
  metaDescription: z.unknown().refine((val) => { const getDepth = (obj: unknown, depth: number = 0): number => { if (depth > 10) return depth; if (obj === null || typeof obj !== 'object') return depth; const values = Object.values(obj as Record<string, unknown>); if (values.length === 0) return depth; return Math.max(...values.map(v => getDepth(v, depth + 1))); }; return getDepth(val) <= 10; }, "JSON nesting depth exceeds maximum of 10"),
  challenge: z.unknown().refine((val) => { const getDepth = (obj: unknown, depth: number = 0): number => { if (depth > 10) return depth; if (obj === null || typeof obj !== 'object') return depth; const values = Object.values(obj as Record<string, unknown>); if (values.length === 0) return depth; return Math.max(...values.map(v => getDepth(v, depth + 1))); }; return getDepth(val) <= 10; }, "JSON nesting depth exceeds maximum of 10").nullish(),
  services: z.array(z.string()),
  techStack: z.array(z.string()),
  date: z.string(),
  gallery: z.array(z.string()),
  notes: z.array(z.unknown().refine((val) => { const getDepth = (obj: unknown, depth: number = 0): number => { if (depth > 10) return depth; if (obj === null || typeof obj !== 'object') return depth; const values = Object.values(obj as Record<string, unknown>); if (values.length === 0) return depth; return Math.max(...values.map(v => getDepth(v, depth + 1))); }; return getDepth(val) <= 10; }, "JSON nesting depth exceeds maximum of 10")),
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

// File: SiteVisitor.schema.ts

export const SiteVisitor = z.object({
  id: z.string(),
  visitorKey: z.string(),
  firstSeenAt: z.date(),
  lastSeenAt: z.date(),
});

export type SiteVisitor = z.infer<typeof SiteVisitor>;

// Legacy aliases
export const SiteVisitorSchema = SiteVisitor;
export type SiteVisitorType = z.infer<typeof SiteVisitor>;

// File: SiteDailyStat.schema.ts

export const SiteDailyStat = z.object({
  date: z.date(),
  visits: z.number().int(),
  uniqueVisitors: z.number().int(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type SiteDailyStat = z.infer<typeof SiteDailyStat>;

// Legacy aliases
export const SiteDailyStatSchema = SiteDailyStat;
export type SiteDailyStatType = z.infer<typeof SiteDailyStat>;

// File: SiteDailyVisitor.schema.ts

export const SiteDailyVisitor = z.object({
  date: z.date(),
  visitorId: z.string(),
  firstVisitAt: z.date(),
});

export type SiteDailyVisitor = z.infer<typeof SiteDailyVisitor>;

// Legacy aliases
export const SiteDailyVisitorSchema = SiteDailyVisitor;
export type SiteDailyVisitorType = z.infer<typeof SiteDailyVisitor>;

// File: StoryBlock.schema.ts

export const StoryBlock = z.object({
  id: z.string(),
  sectionId: z.string(),
  position: z.number().int(),
  type: z.string(),
  media: z.unknown().refine((val) => { const getDepth = (obj: unknown, depth: number = 0): number => { if (depth > 10) return depth; if (obj === null || typeof obj !== 'object') return depth; const values = Object.values(obj as Record<string, unknown>); if (values.length === 0) return depth; return Math.max(...values.map(v => getDepth(v, depth + 1))); }; return getDepth(val) <= 10; }, "JSON nesting depth exceeds maximum of 10").nullish(),
  eyebrow: z.unknown().refine((val) => { const getDepth = (obj: unknown, depth: number = 0): number => { if (depth > 10) return depth; if (obj === null || typeof obj !== 'object') return depth; const values = Object.values(obj as Record<string, unknown>); if (values.length === 0) return depth; return Math.max(...values.map(v => getDepth(v, depth + 1))); }; return getDepth(val) <= 10; }, "JSON nesting depth exceeds maximum of 10").nullish(),
  title: z.unknown().refine((val) => { const getDepth = (obj: unknown, depth: number = 0): number => { if (depth > 10) return depth; if (obj === null || typeof obj !== 'object') return depth; const values = Object.values(obj as Record<string, unknown>); if (values.length === 0) return depth; return Math.max(...values.map(v => getDepth(v, depth + 1))); }; return getDepth(val) <= 10; }, "JSON nesting depth exceeds maximum of 10").nullish(),
  text: z.unknown().refine((val) => { const getDepth = (obj: unknown, depth: number = 0): number => { if (depth > 10) return depth; if (obj === null || typeof obj !== 'object') return depth; const values = Object.values(obj as Record<string, unknown>); if (values.length === 0) return depth; return Math.max(...values.map(v => getDepth(v, depth + 1))); }; return getDepth(val) <= 10; }, "JSON nesting depth exceeds maximum of 10").nullish(),
  tags: z.unknown().refine((val) => { const getDepth = (obj: unknown, depth: number = 0): number => { if (depth > 10) return depth; if (obj === null || typeof obj !== 'object') return depth; const values = Object.values(obj as Record<string, unknown>); if (values.length === 0) return depth; return Math.max(...values.map(v => getDepth(v, depth + 1))); }; return getDepth(val) <= 10; }, "JSON nesting depth exceeds maximum of 10").nullish(),
  logos: z.array(z.string()),
  tiles: z.unknown().refine((val) => { const getDepth = (obj: unknown, depth: number = 0): number => { if (depth > 10) return depth; if (obj === null || typeof obj !== 'object') return depth; const values = Object.values(obj as Record<string, unknown>); if (values.length === 0) return depth; return Math.max(...values.map(v => getDepth(v, depth + 1))); }; return getDepth(val) <= 10; }, "JSON nesting depth exceeds maximum of 10").nullish(),
  link: z.string().nullish(),
  linkLabel: z.unknown().refine((val) => { const getDepth = (obj: unknown, depth: number = 0): number => { if (depth > 10) return depth; if (obj === null || typeof obj !== 'object') return depth; const values = Object.values(obj as Record<string, unknown>); if (values.length === 0) return depth; return Math.max(...values.map(v => getDepth(v, depth + 1))); }; return getDepth(val) <= 10; }, "JSON nesting depth exceeds maximum of 10").nullish(),
  effect: z.string().nullish(),
  smalls: z.string().nullish(),
  cols: z.number().int().nullish(),
  font: z.string().nullish(),
  fontFamily: z.string().nullish(),
  description: z.unknown().refine((val) => { const getDepth = (obj: unknown, depth: number = 0): number => { if (depth > 10) return depth; if (obj === null || typeof obj !== 'object') return depth; const values = Object.values(obj as Record<string, unknown>); if (values.length === 0) return depth; return Math.max(...values.map(v => getDepth(v, depth + 1))); }; return getDepth(val) <= 10; }, "JSON nesting depth exceeds maximum of 10").nullish(),
  secondFont: z.string().nullish(),
  secondFontFamily: z.string().nullish(),
  secondDescription: z.unknown().refine((val) => { const getDepth = (obj: unknown, depth: number = 0): number => { if (depth > 10) return depth; if (obj === null || typeof obj !== 'object') return depth; const values = Object.values(obj as Record<string, unknown>); if (values.length === 0) return depth; return Math.max(...values.map(v => getDepth(v, depth + 1))); }; return getDepth(val) <= 10; }, "JSON nesting depth exceeds maximum of 10").nullish(),
  swatches: z.unknown().refine((val) => { const getDepth = (obj: unknown, depth: number = 0): number => { if (depth > 10) return depth; if (obj === null || typeof obj !== 'object') return depth; const values = Object.values(obj as Record<string, unknown>); if (values.length === 0) return depth; return Math.max(...values.map(v => getDepth(v, depth + 1))); }; return getDepth(val) <= 10; }, "JSON nesting depth exceeds maximum of 10").nullish(),
});

export type StoryBlock = z.infer<typeof StoryBlock>;

// Legacy aliases
export const StoryBlockSchema = StoryBlock;
export type StoryBlockType = z.infer<typeof StoryBlock>;

// File: StorySection.schema.ts

export const StorySection = z.object({
  id: z.string(),
  projectSlug: z.string(),
  position: z.number().int(),
  title: z.unknown().refine((val) => { const getDepth = (obj: unknown, depth: number = 0): number => { if (depth > 10) return depth; if (obj === null || typeof obj !== 'object') return depth; const values = Object.values(obj as Record<string, unknown>); if (values.length === 0) return depth; return Math.max(...values.map(v => getDepth(v, depth + 1))); }; return getDepth(val) <= 10; }, "JSON nesting depth exceeds maximum of 10").nullish(),
  by: z.array(z.string()),
  layout: z.unknown().refine((val) => { const getDepth = (obj: unknown, depth: number = 0): number => { if (depth > 10) return depth; if (obj === null || typeof obj !== 'object') return depth; const values = Object.values(obj as Record<string, unknown>); if (values.length === 0) return depth; return Math.max(...values.map(v => getDepth(v, depth + 1))); }; return getDepth(val) <= 10; }, "JSON nesting depth exceeds maximum of 10").nullish(),
});

export type StorySection = z.infer<typeof StorySection>;

// Legacy aliases
export const StorySectionSchema = StorySection;
export type StorySectionType = z.infer<typeof StorySection>;

// File: StudioMember.schema.ts

export const StudioMember = z.object({
  slug: z.string(),
  position: z.number().int(),
  name: z.string(),
  role: z.unknown().refine((val) => { const getDepth = (obj: unknown, depth: number = 0): number => { if (depth > 10) return depth; if (obj === null || typeof obj !== 'object') return depth; const values = Object.values(obj as Record<string, unknown>); if (values.length === 0) return depth; return Math.max(...values.map(v => getDepth(v, depth + 1))); }; return getDepth(val) <= 10; }, "JSON nesting depth exceeds maximum of 10"),
  description: z.unknown().refine((val) => { const getDepth = (obj: unknown, depth: number = 0): number => { if (depth > 10) return depth; if (obj === null || typeof obj !== 'object') return depth; const values = Object.values(obj as Record<string, unknown>); if (values.length === 0) return depth; return Math.max(...values.map(v => getDepth(v, depth + 1))); }; return getDepth(val) <= 10; }, "JSON nesting depth exceeds maximum of 10"),
  bio: z.unknown().refine((val) => { const getDepth = (obj: unknown, depth: number = 0): number => { if (depth > 10) return depth; if (obj === null || typeof obj !== 'object') return depth; const values = Object.values(obj as Record<string, unknown>); if (values.length === 0) return depth; return Math.max(...values.map(v => getDepth(v, depth + 1))); }; return getDepth(val) <= 10; }, "JSON nesting depth exceeds maximum of 10"),
  model: z.string(),
  scale: z.number(),
  roughness: z.number(),
  metalness: z.number(),
  hair: z.string().nullish(),
  rotation: z.array(z.number()),
  highlight: z.string(),
  socials: z.unknown().refine((val) => { const getDepth = (obj: unknown, depth: number = 0): number => { if (depth > 10) return depth; if (obj === null || typeof obj !== 'object') return depth; const values = Object.values(obj as Record<string, unknown>); if (values.length === 0) return depth; return Math.max(...values.map(v => getDepth(v, depth + 1))); }; return getDepth(val) <= 10; }, "JSON nesting depth exceeds maximum of 10"),
  labels: z.unknown().refine((val) => { const getDepth = (obj: unknown, depth: number = 0): number => { if (depth > 10) return depth; if (obj === null || typeof obj !== 'object') return depth; const values = Object.values(obj as Record<string, unknown>); if (values.length === 0) return depth; return Math.max(...values.map(v => getDepth(v, depth + 1))); }; return getDepth(val) <= 10; }, "JSON nesting depth exceeds maximum of 10"),
  projects: z.array(z.string()),
  suite: z.boolean(),
  facts: z.unknown().refine((val) => { const getDepth = (obj: unknown, depth: number = 0): number => { if (depth > 10) return depth; if (obj === null || typeof obj !== 'object') return depth; const values = Object.values(obj as Record<string, unknown>); if (values.length === 0) return depth; return Math.max(...values.map(v => getDepth(v, depth + 1))); }; return getDepth(val) <= 10; }, "JSON nesting depth exceeds maximum of 10"),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type StudioMember = z.infer<typeof StudioMember>;

// Legacy aliases
export const StudioMemberSchema = StudioMember;
export type StudioMemberType = z.infer<typeof StudioMember>;

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
