import * as Inputs from "@/graphql/__generated__/inputs";
import { BatchPayload } from "../../objects";
import { prisma } from "@/lib/db";
import { builder } from "../../../../lib/graphql/builder";
import {
  defineMutation,
  defineMutationFunction,
  defineMutationObject,
} from "../../utils";

export const deleteManyCategoryMutationArgs = builder.args((t) => ({
  where: t.field({ type: Inputs.CategoryWhereInput, required: true }),
}));

export const deleteManyCategoryMutationObject = defineMutationFunction((t) =>
  defineMutationObject({
    type: BatchPayload,
    nullable: true,
    args: deleteManyCategoryMutationArgs,
    resolve: async (_root, args, _context, _info) =>
      await prisma.category.deleteMany({ where: args.where }),
  })
);

export const deleteManyCategoryMutation = defineMutation((t) => ({
  deleteManyCategory: t.field(deleteManyCategoryMutationObject(t)),
}));
