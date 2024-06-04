import { builder } from "./graphql/builder";
import { writeFileSync } from "fs";
import { resolve } from "path";
import { printSchema } from "graphql";
import {
  generateAllMutations,
  generateAllObjects,
  generateAllQueries,
} from "@/graphql/__generated__/autocrud";

generateAllObjects();
generateAllQueries();
generateAllMutations();

builder.queryType({});
builder.mutationType({});

export const schema = builder.toSchema({});

writeFileSync(resolve(__dirname, "../../schema.graphql"), printSchema(schema));
