import * as Inputs from "@/graphql/__generated__/inputs";
import { prisma } from "@/lib/db";
import { builder } from "../../../../lib/graphql/builder";
import {
  defineMutation,
  defineMutationFunction,
  defineMutationPrismaObject,
} from "../../utils";

export const createManyUserMutationArgs = builder.args((t) => ({
  data: t.field({ type: [Inputs.UserCreateInput], required: true }),
}));

export const createManyUserMutationObject = defineMutationFunction((t) =>
  defineMutationPrismaObject({
    type: ["User"],
    nullable: false,
    args: createManyUserMutationArgs,
    resolve: async (_query, _root, args, _context, _info) =>
      await prisma.$transaction(
        args.data.map((data) => prisma.user.create({ data }))
      ),
  })
);

export const createManyUserMutation = defineMutation((t) => ({
  createManyUser: t.prismaField(createManyUserMutationObject(t)),
}));
