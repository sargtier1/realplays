import * as Inputs from "@/graphql/__generated__/inputs";
import { prisma } from "@/lib/db";
import { builder } from "../../../../lib/graphql/builder";
import {
  defineQuery,
  defineQueryFunction,
  defineQueryPrismaObject,
} from "../../utils";

export const findUniqueProfileQueryArgs = builder.args((t) => ({
  where: t.field({ type: Inputs.ProfileWhereUniqueInput, required: true }),
}));

export const findUniqueProfileQueryObject = defineQueryFunction((t) =>
  defineQueryPrismaObject({
    type: "Profile",
    nullable: true,
    args: findUniqueProfileQueryArgs,
    resolve: async (query, _root, args, _context, _info) =>
      await prisma.profile.findUnique({ where: args.where, ...query }),
  })
);

export const findUniqueProfileQuery = defineQuery((t) => ({
  findUniqueProfile: t.prismaField(findUniqueProfileQueryObject(t)),
}));
