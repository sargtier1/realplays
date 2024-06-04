import { Scalars } from "prisma-generator-pothos-codegen";
import { Prisma } from ".prisma/client";
import SchemaBuilder from "@pothos/core";
import type PrismaTypes from "@pothos/plugin-prisma/generated";
import { prisma } from "../db";
import PrismaPlugin from "@pothos/plugin-prisma";

export const builder = new SchemaBuilder<{
  context: { prisma: typeof prisma };
  PrismaTypes: PrismaTypes; // required for @pothos/plugin-prisma integration (which is required)
  Scalars: Scalars<
    Prisma.Decimal,
    Prisma.InputJsonValue | null,
    Prisma.InputJsonValue
  >; // required to define correct types for created scalars.
}>({
  plugins: [PrismaPlugin],
  prisma: {
    client: prisma,
  },
});
