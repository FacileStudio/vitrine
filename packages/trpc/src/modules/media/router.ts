import { z } from 'zod';
import { router, protectedProcedure } from '../../trpc';
import mediaService from './service';

type UploadUrlInput = Parameters<typeof mediaService.generateUploadUrl>[2];
type MediaUpdateInput = Parameters<typeof mediaService.updateUserAvatar>[3];

const uploadUrlSchema = z.object({
  fileName: z.string(),
  fileType: z.string(),
});

const mediaSchema = z.object({
  url: z.string().url(),
  key: z.string(),
  size: z.number(),
});

export const mediaRouter = router({
  getUploadUrl: protectedProcedure
    .input(uploadUrlSchema)
    .mutation(async ({ ctx, input }) => {
      return mediaService.generateUploadUrl(
        ctx.storage,
        ctx.user.id,
        uploadUrlSchema.parse(input) as UploadUrlInput
      );
    }),

  updateAvatar: protectedProcedure.input(mediaSchema).mutation(async ({ ctx, input }) => {
    return mediaService.updateUserAvatar(
      ctx.db,
      ctx.storage,
      ctx.user.id,
      mediaSchema.parse(input) as MediaUpdateInput
    );
  }),

  updateCover: protectedProcedure.input(mediaSchema).mutation(async ({ ctx, input }) => {
    return mediaService.updateUserCover(
      ctx.db,
      ctx.storage,
      ctx.user.id,
      mediaSchema.parse(input) as MediaUpdateInput
    );
  }),

  removeAvatar: protectedProcedure.mutation(async ({ ctx }) => {
    return mediaService.removeUserAvatar(ctx.db, ctx.storage, ctx.user.id);
  }),

  removeCover: protectedProcedure.mutation(async ({ ctx }) => {
    return mediaService.removeUserCover(ctx.db, ctx.storage, ctx.user.id);
  }),
});

export default mediaRouter;
