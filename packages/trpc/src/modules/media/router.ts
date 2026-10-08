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
      try {
        const result = await mediaService.generateUploadUrl(
          ctx.storage,
          ctx.user.id,
          uploadUrlSchema.parse(input) as UploadUrlInput
        );

        // host and path only: the query string of a presigned URL is a credential
        const signed = new URL(result.uploadUrl);
        ctx.log.info(
          {
            type: 'upload-url',
            fileKey: result.fileKey,
            fileType: input.fileType,
            signedHost: signed.host,
            publicUrl: result.publicUrl,
          },
          'Upload URL issued'
        );

        return result;
      } catch (err) {
        ctx.log.error(
          { err, type: 'upload-url', fileName: input.fileName, fileType: input.fileType },
          'Failed to issue upload URL'
        );
        throw err;
      }
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
