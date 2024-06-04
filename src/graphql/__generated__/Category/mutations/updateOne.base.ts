import * as Inputs from "@/graphql/__generated__/inputs";
import { prisma } from "@/lib/db";
import { builder } from "../../../../lib/graphql/builder";
import {
  defineMutation,
  defineMutationFunction,
  defineMutationPrismaObject,
} from "../../utils";

export const updateOneCategoryMutationArgs = builder.args((t) => ({
  where: t.field({ type: Inputs.CategoryWhereUniqueInput, required: true }),
  data: t.field({ type: Inputs.CategoryUpdateInput, required: true }),
}));

export const updateOneCategoryMutationObject = defineMutationFunction((t) =>
  defineMutationPrismaObject({
    type: "Category",
    nullable: true,
    args: updateOneCategoryMutationArgs,
    resolve: async (query, _root, args, _context, _info) =>
      await prisma.category.update({
        where: args.where,
        data: args.data,
        ...query,
      }),
  })
);

export const updateOneCategoryMutation = defineMutation((t) => ({
  updateOneCategory: t.prismaField(updateOneCategoryMutationObject(t)),
}));
