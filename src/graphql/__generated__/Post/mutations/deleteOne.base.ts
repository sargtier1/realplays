import * as Inputs from "@/graphql/__generated__/inputs";
import { prisma } from "@/lib/db";
import { builder } from "../../../../lib/graphql/builder";
import {
  defineMutation,
  defineMutationFunction,
  defineMutationPrismaObject,
} from "../../utils";

export const deleteOnePostMutationArgs = builder.args((t) => ({
  where: t.field({ type: Inputs.PostWhereUniqueInput, required: true }),
}));

export const deleteOnePostMutationObject = defineMutationFunction((t) =>
  defineMutationPrismaObject({
    type: "Post",
    nullable: true,
    args: deleteOnePostMutationArgs,
    resolve: async (query, _root, args, _context, _info) =>
      await prisma.post.delete({ where: args.where, ...query }),
  })
);

export const deleteOnePostMutation = defineMutation((t) => ({
  deleteOnePost: t.prismaField(deleteOnePostMutationObject(t)),
}));
