import * as Inputs from "@/graphql/__generated__/inputs";
import { prisma } from "@/lib/db";
import { builder } from "../../../../lib/graphql/builder";
import {
  defineQuery,
  defineQueryFunction,
  defineQueryPrismaObject,
} from "../../utils";

export const findManyCategoryQueryArgs = builder.args((t) => ({
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

export const findManyCategoryQueryObject = defineQueryFunction((t) =>
  defineQueryPrismaObject({
    type: ["Category"],
    nullable: false,
    args: findManyCategoryQueryArgs,
    resolve: async (query, _root, args, _context, _info) =>
      await prisma.category.findMany({
        where: args.where || undefined,
        cursor: args.cursor || undefined,
        take: args.take || undefined,
        distinct: args.distinct || undefined,
        skip: args.skip || undefined,
        orderBy: args.orderBy || undefined,
        ...query,
      }),
  })
);

export const findManyCategoryQuery = defineQuery((t) => ({
  findManyCategory: t.prismaField(findManyCategoryQueryObject(t)),
}));
