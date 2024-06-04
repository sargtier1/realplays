import * as Inputs from "@/graphql/__generated__/inputs";
import { prisma } from "@/lib/db";
import { builder } from "../../../../lib/graphql/builder";
import {
  defineMutation,
  defineMutationFunction,
  defineMutationPrismaObject,
} from "../../utils";

export const createManyCategoryMutationArgs = builder.args((t) => ({
  data: t.field({ type: [Inputs.CategoryCreateInput], required: true }),
}));

export const createManyCategoryMutationObject = defineMutationFunction((t) =>
  defineMutationPrismaObject({
    type: ["Category"],
    nullable: false,
    args: createManyCategoryMutationArgs,
    resolve: async (_query, _root, args, _context, _info) =>
      await prisma.$transaction(
        args.data.map((data) => prisma.category.create({ data }))
      ),
  })
);

export const createManyCategoryMutation = defineMutation((t) => ({
  createManyCategory: t.prismaField(createManyCategoryMutationObject(t)),
}));
