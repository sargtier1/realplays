import * as Inputs from "@/graphql/__generated__/inputs";
import { builder } from "../../../lib/graphql/builder";
import {
  definePrismaObject,
  defineFieldObject,
  defineRelationFunction,
  defineRelationObject,
} from "../utils";

export const ProfileObject = definePrismaObject("Profile", {
  description: undefined,
  findUnique: ({ id }) => ({ id }),
  fields: (t) => ({
    id: t.field(ProfileIdFieldObject),
    bio: t.field(ProfileBioFieldObject),
    user: t.relation("user", ProfileUserFieldObject),
    userId: t.field(ProfileUserIdFieldObject),
  }),
});

export const ProfileIdFieldObject = defineFieldObject("Profile", {
  type: "ID",
  description: undefined,
  nullable: false,
  resolve: (parent) => String(parent.id),
});

export const ProfileBioFieldObject = defineFieldObject("Profile", {
  type: "String",
  description: undefined,
  nullable: false,
  resolve: (parent) => parent.bio,
});

export const ProfileUserFieldObject = defineRelationObject("Profile", "user", {
  description: undefined,
  nullable: false,
  args: undefined,
  query: undefined,
});

export const ProfileUserIdFieldObject = defineFieldObject("Profile", {
  type: "Int",
  description: undefined,
  nullable: false,
  resolve: (parent) => parent.userId,
});
