import * as Inputs from "@/graphql/__generated__/inputs";
import { builder } from "../../../lib/graphql/builder";
import {
  definePrismaObject,
  defineFieldObject,
  defineRelationFunction,
  defineRelationObject,
} from "../utils";

export const PostObject = definePrismaObject("Post", {
  description: undefined,
  findUnique: ({ id }) => ({ id }),
  fields: (t) => ({
    id: t.field(PostIdFieldObject),
    createdAt: t.field(PostCreatedAtFieldObject),
    updatedAt: t.field(PostUpdatedAtFieldObject),
    title: t.field(PostTitleFieldObject),
    published: t.field(PostPublishedFieldObject),
    author: t.relation("author", PostAuthorFieldObject),
    authorId: t.field(PostAuthorIdFieldObject),
    categories: t.relation("categories", PostCategoriesFieldObject(t)),
  }),
});

export const PostIdFieldObject = defineFieldObject("Post", {
  type: "ID",
  description: undefined,
  nullable: false,
  resolve: (parent) => String(parent.id),
});

export const PostCreatedAtFieldObject = defineFieldObject("Post", {
  type: Inputs.DateTime,
  description: undefined,
  nullable: false,
  resolve: (parent) => parent.createdAt,
});

export const PostUpdatedAtFieldObject = defineFieldObject("Post", {
  type: Inputs.DateTime,
  description: undefined,
  nullable: false,
  resolve: (parent) => parent.updatedAt,
});

export const PostTitleFieldObject = defineFieldObject("Post", {
  type: "String",
  description: undefined,
  nullable: false,
  resolve: (parent) => parent.title,
});

export const PostPublishedFieldObject = defineFieldObject("Post", {
  type: "Boolean",
  description: undefined,
  nullable: false,
  resolve: (parent) => parent.published,
});

export const PostAuthorFieldObject = defineRelationObject("Post", "author", {
  description: undefined,
  nullable: false,
  args: undefined,
  query: undefined,
});

export const PostAuthorIdFieldObject = defineFieldObject("Post", {
  type: "Int",
  description: undefined,
  nullable: false,
  resolve: (parent) => parent.authorId,
});

export const PostCategoriesFieldArgs = builder.args((t) => ({
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

export const PostCategoriesFieldObject = defineRelationFunction("Post", (t) =>
  defineRelationObject("Post", "categories", {
    description: undefined,
    nullable: false,
    args: PostCategoriesFieldArgs,
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
