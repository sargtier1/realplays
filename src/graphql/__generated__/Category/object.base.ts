import * as Inputs from "@/graphql/__generated__/inputs";
import { builder } from "../../../lib/graphql/builder";
import {
  definePrismaObject,
  defineFieldObject,
  defineRelationFunction,
  defineRelationObject,
} from "../utils";

export const CategoryObject = definePrismaObject("Category", {
  description: undefined,
  findUnique: ({ id }) => ({ id }),
  fields: (t) => ({
    id: t.field(CategoryIdFieldObject),
    name: t.field(CategoryNameFieldObject),
    posts: t.relation("posts", CategoryPostsFieldObject(t)),
  }),
});

export const CategoryIdFieldObject = defineFieldObject("Category", {
  type: "ID",
  description: undefined,
  nullable: false,
  resolve: (parent) => String(parent.id),
});

export const CategoryNameFieldObject = defineFieldObject("Category", {
  type: "String",
  description: undefined,
  nullable: false,
  resolve: (parent) => parent.name,
});

export const CategoryPostsFieldArgs = builder.args((t) => ({
  where: t.field({ type: Inputs.PostWhereInput, required: false }),
  orderBy: t.field({
    type: [Inputs.PostOrderByWithRelationInput],
    required: false,
  }),
  cursor: t.field({ type: Inputs.PostWhereUniqueInput, required: false }),
  take: t.field({ type: "Int", required: false }),
  skip: t.field({ type: "Int", required: false }),
  distinct: t.field({ type: [Inputs.PostScalarFieldEnum], required: false }),
}));

export const CategoryPostsFieldObject = defineRelationFunction(
  "Category",
  (t) =>
    defineRelationObject("Category", "posts", {
      description: undefined,
      nullable: false,
      args: CategoryPostsFieldArgs,
      query: (args) => ({
        where: args.where || undefined,
        cursor: args.cursor || undefined,
        take: args.take || undefined,
        distinct: args.distinct || undefined,
        skip: args.skip || undefined,
        orderBy: args.orderBy || undefined,
      }),
    })
);
