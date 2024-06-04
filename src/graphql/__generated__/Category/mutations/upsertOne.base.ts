import * as Inputs from "@/graphql/__generated__/inputs";
import { prisma } from "@/lib/db";
import { builder } from "../../../../lib/graphql/builder";
import {
  defineMutation,
  defineMutationFunction,
  defineMutationPrismaObject,
} from "../../utils";

export const upsertOneCategoryMutationArgs = builder.args((t) => ({
  where: t.field({ type: Inputs.CategoryWhereUniqueInput, required: true }),
  create: t.field({ type: Inputs.CategoryCreateInput, required: true }),
  update: t.field({ type: Inputs.CategoryUpdateInput, required: true }),
}));

export const upsertOneCategoryMutationObject = defineMutationFunction((t) =>
  defineMutationPrismaObject({
    type: "Category",
    nullable: false,
    args: upsertOneCategoryMutationArgs,
    resolve: async (query, _root, args, _context, _info) =>
      await prisma.category.upsert({
        where: args.where,
        create: args.create,
        update: args.update,
        ...query,
      }),
  })
);

export const upsertOneCategoryMutation = defineMutation((t) => ({
  upsertOneCategory: t.prismaField(upsertOneCategoryMutationObject(t)),
}));
