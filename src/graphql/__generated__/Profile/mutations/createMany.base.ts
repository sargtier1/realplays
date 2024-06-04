import * as Inputs from "@/graphql/__generated__/inputs";
import { prisma } from "@/lib/db";
import { builder } from "../../../../lib/graphql/builder";
import {
  defineMutation,
  defineMutationFunction,
  defineMutationPrismaObject,
} from "../../utils";

export const createManyProfileMutationArgs = builder.args((t) => ({
  data: t.field({ type: [Inputs.ProfileCreateInput], required: true }),
}));

export const createManyProfileMutationObject = defineMutationFunction((t) =>
  defineMutationPrismaObject({
    type: ["Profile"],
    nullable: false,
    args: createManyProfileMutationArgs,
    resolve: async (_query, _root, args, _context, _info) =>
      await prisma.$transaction(
        args.data.map((data) => prisma.profile.create({ data }))
      ),
  })
);

export const createManyProfileMutation = defineMutation((t) => ({
  createManyProfile: t.prismaField(createManyProfileMutationObject(t)),
}));
