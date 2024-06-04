import * as Inputs from "@/graphql/__generated__/inputs";
import { BatchPayload } from "../../objects";
import { prisma } from "@/lib/db";
import { builder } from "../../../../lib/graphql/builder";
import {
  defineMutation,
  defineMutationFunction,
  defineMutationObject,
} from "../../utils";

export const deleteManyProfileMutationArgs = builder.args((t) => ({
  where: t.field({ type: Inputs.ProfileWhereInput, required: true }),
}));

export const deleteManyProfileMutationObject = defineMutationFunction((t) =>
  defineMutationObject({
    type: BatchPayload,
    nullable: true,
    args: deleteManyProfileMutationArgs,
    resolve: async (_root, args, _context, _info) =>
      await prisma.profile.deleteMany({ where: args.where }),
  })
);

export const deleteManyProfileMutation = defineMutation((t) => ({
  deleteManyProfile: t.field(deleteManyProfileMutationObject(t)),
}));
