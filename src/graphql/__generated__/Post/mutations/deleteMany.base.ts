import * as Inputs from "@/graphql/__generated__/inputs";
import { BatchPayload } from "../../objects";
import { prisma } from "@/lib/db";
import { builder } from "../../../../lib/graphql/builder";
import {
  defineMutation,
  defineMutationFunction,
  defineMutationObject,
} from "../../utils";

export const deleteManyPostMutationArgs = builder.args((t) => ({
  where: t.field({ type: Inputs.PostWhereInput, required: true }),
}));

export const deleteManyPostMutationObject = defineMutationFunction((t) =>
  defineMutationObject({
    type: BatchPayload,
    nullable: true,
    args: deleteManyPostMutationArgs,
    resolve: async (_root, args, _context, _info) =>
      await prisma.post.deleteMany({ where: args.where }),
  })
);

export const deleteManyPostMutation = defineMutation((t) => ({
  deleteManyPost: t.field(deleteManyPostMutationObject(t)),
}));
