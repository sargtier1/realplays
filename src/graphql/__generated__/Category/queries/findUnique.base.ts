import * as Inputs from "@/graphql/__generated__/inputs";
import { prisma } from "@/lib/db";
import { builder } from "../../../../lib/graphql/builder";
import {
  defineQuery,
  defineQueryFunction,
  defineQueryPrismaObject,
} from "../../utils";

export const findUniqueCategoryQueryArgs = builder.args((t) => ({
  where: t.field({ type: Inputs.CategoryWhereUniqueInput, required: true }),
}));

export const findUniqueCategoryQueryObject = defineQueryFunction((t) =>
  defineQueryPrismaObject({
    type: "Category",
    nullable: true,
    args: findUniqueCategoryQueryArgs,
    resolve: async (query, _root, args, _context, _info) =>
      await prisma.category.findUnique({ where: args.where, ...query }),
  })
);

export const findUniqueCategoryQuery = defineQuery((t) => ({
  findUniqueCategory: t.prismaField(findUniqueCategoryQueryObject(t)),
}));
