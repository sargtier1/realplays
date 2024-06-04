import * as Inputs from "@/graphql/__generated__/inputs";
import { prisma } from "@/lib/db";
import { builder } from "../../../../lib/graphql/builder";
import {
  defineMutation,
  defineMutationFunction,
  defineMutationPrismaObject,
} from "../../utils";

export const upsertOneProfileMutationArgs = builder.args((t) => ({
  where: t.field({ type: Inputs.ProfileWhereUniqueInput, required: true }),
  create: t.field({ type: Inputs.ProfileCreateInput, required: true }),
  update: t.field({ type: Inputs.ProfileUpdateInput, required: true }),
}));

export const upsertOneProfileMutationObject = defineMutationFunction((t) =>
  defineMutationPrismaObject({
    type: "Profile",
    nullable: false,
    args: upsertOneProfileMutationArgs,
    resolve: async (query, _root, args, _context, _info) =>
      await prisma.profile.upsert({
        where: args.where,
        create: args.create,
        update: args.update,
        ...query,
      }),
  })
);

export const upsertOneProfileMutation = defineMutation((t) => ({
  upsertOneProfile: t.prismaField(upsertOneProfileMutationObject(t)),
}));
