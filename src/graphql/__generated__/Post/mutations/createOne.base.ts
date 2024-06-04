import * as Inputs from "@/graphql/__generated__/inputs";
import { prisma } from "@/lib/db";
import { builder } from "../../../../lib/graphql/builder";
import {
  defineMutation,
  defineMutationFunction,
  defineMutationPrismaObject,
} from "../../utils";

export const createOnePostMutationArgs = builder.args((t) => ({
  data: t.field({ type: Inputs.PostCreateInput, required: true }),
}));

export const createOnePostMutationObject = defineMutationFunction((t) =>
  defineMutationPrismaObject({
    type: "Post",
    nullable: false,
    args: createOnePostMutationArgs,
    resolve: async (query, _root, args, _context, _info) =>
      await prisma.post.create({ data: args.data, ...query }),
  })
);

export const createOnePostMutation = defineMutation((t) => ({
  createOnePost: t.prismaField(createOnePostMutationObject(t)),
}));
