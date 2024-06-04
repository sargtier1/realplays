import * as Inputs from "@/graphql/__generated__/inputs";
import { prisma } from "@/lib/db";
import { builder } from "../../../../lib/graphql/builder";
import {
  defineMutation,
  defineMutationFunction,
  defineMutationPrismaObject,
} from "../../utils";

export const upsertOnePostMutationArgs = builder.args((t) => ({
  where: t.field({ type: Inputs.PostWhereUniqueInput, required: true }),
  create: t.field({ type: Inputs.PostCreateInput, required: true }),
  update: t.field({ type: Inputs.PostUpdateInput, required: true }),
}));

export const upsertOnePostMutationObject = defineMutationFunction((t) =>
  defineMutationPrismaObject({
    type: "Post",
    nullable: false,
    args: upsertOnePostMutationArgs,
    resolve: async (query, _root, args, _context, _info) =>
      await prisma.post.upsert({
        where: args.where,
        create: args.create,
        update: args.update,
        ...query,
      }),
  })
);

export const upsertOnePostMutation = defineMutation((t) => ({
  upsertOnePost: t.prismaField(upsertOnePostMutationObject(t)),
}));
