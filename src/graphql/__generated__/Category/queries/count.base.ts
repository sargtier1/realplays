import * as Inputs from "@/graphql/__generated__/inputs";
import { prisma } from "@/lib/db";
import { builder } from "../../../../lib/graphql/builder";
import {
  defineQuery,
  defineQueryFunction,
  defineQueryObject,
} from "../../utils";

export const countCategoryQueryArgs = builder.args((t) => ({
  where: t.field({ type: Inputs.CategoryWhereInput, required: false }),
  orderBy: t.field({
    type: [Inputs.CategoryOrderByWithRelationInput],
    required: false,
  }),
  cursor: t.field({ type: Inputs.CategoryWhereUniqueInput, required: false }),
  take: t.field({ type: "Int", required: false }),
  skip: t.field({ type: "Int", required: false }),
  distinct: t.field({
    type: [Inputs.CategoryScalarFieldEnum],
    required: false,
  }),
}));

export const countCategoryQueryObject = defineQueryFunction((t) =>
  defineQueryObject({
    type: "Int",
    nullable: false,
    args: countCategoryQueryArgs,
    resolve: async (_root, args, _context, _info) =>
      await prisma.category.count({
        where: args.where || undefined,
        cursor: args.cursor || undefined,
        take: args.take || undefined,
        skip: args.skip || undefined,
        orderBy: args.orderBy || undefined,
      }),
  })
);

export const countCategoryQuery = defineQuery((t) => ({
  countCategory: t.field(countCategoryQueryObject(t)),
}));
