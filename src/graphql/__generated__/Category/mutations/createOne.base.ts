import * as Inputs from "@/graphql/__generated__/inputs";
import { prisma } from "@/lib/db";
import { builder } from "../../../../lib/graphql/builder";
import {
  defineMutation,
  defineMutationFunction,
  defineMutationPrismaObject,
} from "../../utils";

export const createOneCategoryMutationArgs = builder.args((t) => ({
  data: t.field({ type: Inputs.CategoryCreateInput, required: true }),
}));

export const createOneCategoryMutationObject = defineMutationFunction((t) =>
  defineMutationPrismaObject({
    type: "Category",
    nullable: false,
    args: createOneCategoryMutationArgs,
    resolve: async (query, _root, args, _context, _info) =>
      await prisma.category.create({ data: args.data, ...query }),
  })
);

export const createOneCategoryMutation = defineMutation((t) => ({
  createOneCategory: t.prismaField(createOneCategoryMutationObject(t)),
}));
