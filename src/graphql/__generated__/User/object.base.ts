import * as Inputs from "@/graphql/__generated__/inputs";
import { builder } from "../../../lib/graphql/builder";
import {
  definePrismaObject,
  defineFieldObject,
  defineRelationFunction,
  defineRelationObject,
} from "../utils";

export const UserObject = definePrismaObject("User", {
  description: undefined,
  findUnique: ({ id }) => ({ id }),
  fields: (t) => ({
    id: t.field(UserIdFieldObject),
    email: t.field(UserEmailFieldObject),
    name: t.field(UserNameFieldObject),
    role: t.field(UserRoleFieldObject),
    posts: t.relation("posts", UserPostsFieldObject(t)),
    profile: t.relation("profile", UserProfileFieldObject),
  }),
});

export const UserIdFieldObject = defineFieldObject("User", {
  type: "ID",
  description: undefined,
  nullable: false,
  resolve: (parent) => String(parent.id),
});

export const UserEmailFieldObject = defineFieldObject("User", {
  type: "String",
  description: undefined,
  nullable: false,
  resolve: (parent) => parent.email,
});

export const UserNameFieldObject = defineFieldObject("User", {
  type: "String",
  description: undefined,
  nullable: true,
  resolve: (parent) => parent.name,
});

export const UserRoleFieldObject = defineFieldObject("User", {
  type: Inputs.Role,
  description: undefined,
  nullable: false,
  resolve: (parent) => parent.role,
});

export const UserPostsFieldArgs = builder.args((t) => ({
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

export const UserPostsFieldObject = defineRelationFunction("User", (t) =>
  defineRelationObject("User", "posts", {
    description: undefined,
    nullable: false,
    args: UserPostsFieldArgs,
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

export const UserProfileFieldObject = defineRelationObject("User", "profile", {
  description: undefined,
  nullable: true,
  args: undefined,
  query: undefined,
});
