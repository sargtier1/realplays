// ./pothos.config.js

/** @type {import('prisma-generator-pothos-codegen').Config} */
module.exports = {
  crud: {
    outputDir: "./src/graphql/__generated__/",
    inputsImporter: `import * as Inputs from '@/graphql/__generated__/inputs'`,
    resolverImports: `\nimport { prisma } from '@/lib/db';`,
    prismaCaller: "prisma",
  },
  inputs: {
    outputFilePath: "./src/graphql/__generated__/inputs.ts",
  },
  global: {
    builderLocation: "./src/lib/builder",
  },
};
