import * as Inputs from "@/graphql/__generated__/inputs";
import { prisma } from "@/lib/db";
import { builder } from "../../../../lib/graphql/builder";
import {
  defineMutation,
  defineMutationFunction,
  defineMutationPrismaObject,
} from "../../utils";

export const updateOneProfileMutationArgs = builder.args((t) => ({
  where: t.field({ type: Inputs.ProfileWhereUniqueInput, required: true }),
  data: t.field({ type: Inputs.ProfileUpdateInput, required: true }),
}));

export const updateOneProfileMutationObject = defineMutationFunction((t) =>
  defineMutationPrismaObject({
    type: "Profile",
    nullable: true,
    args: updateOneProfileMutationArgs,
    resolve: async (query, _root, args, _context, _info) =>
      await prisma.profile.update({
        where: args.where,
        data: args.data,
        ...query,
      }),
  })
);

export const updateOneProfileMutation = defineMutation((t) => ({
  updateOneProfile: t.prismaField(updateOneProfileMutationObject(t)),
}));
