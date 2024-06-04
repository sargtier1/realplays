import * as Inputs from "@/graphql/__generated__/inputs";
import { prisma } from "@/lib/db";
import { builder } from "../../../../lib/graphql/builder";
import {
  defineMutation,
  defineMutationFunction,
  defineMutationPrismaObject,
} from "../../utils";

export const deleteOneCategoryMutationArgs = builder.args((t) => ({
  where: t.field({ type: Inputs.CategoryWhereUniqueInput, required: true }),
}));

export const deleteOneCategoryMutationObject = defineMutationFunction((t) =>
  defineMutationPrismaObject({
    type: "Category",
    nullable: true,
    args: deleteOneCategoryMutationArgs,
    resolve: async (query, _root, args, _context, _info) =>
      await prisma.category.delete({ where: args.where, ...query }),
  })
);

export const deleteOneCategoryMutation = defineMutation((t) => ({
  deleteOneCategory: t.prismaField(deleteOneCategoryMutationObject(t)),
}));
