import * as Inputs from "@/graphql/__generated__/inputs";
import { BatchPayload } from "../../objects";
import { prisma } from "@/lib/db";
import { builder } from "../../../../lib/graphql/builder";
import {
  defineMutation,
  defineMutationFunction,
  defineMutationObject,
} from "../../utils";

export const updateManyCategoryMutationArgs = builder.args((t) => ({
  where: t.field({ type: Inputs.CategoryWhereInput, required: false }),
  data: t.field({
    type: Inputs.CategoryUpdateManyMutationInput,
    required: true,
  }),
}));

export const updateManyCategoryMutationObject = defineMutationFunction((t) =>
  defineMutationObject({
    type: BatchPayload,
    nullable: false,
    args: updateManyCategoryMutationArgs,
    resolve: async (_root, args, _context, _info) =>
      await prisma.category.updateMany({
        where: args.where || undefined,
        data: args.data,
      }),
  })
);

export const updateManyCategoryMutation = defineMutation((t) => ({
  updateManyCategory: t.field(updateManyCategoryMutationObject(t)),
}));
