module.exports = {
  overwrite: true,
  schema: [{
    "https://api.mauna.cloud/v1/graphql": {
      headers: {
        "X-Hasura-Admin-Secret": process.env.HASURA_ADMIN_SECRET || ""
      }
    }
  }],
  documents: "./src/documents/*.graphql",
  generates: {
    "./src/generated/types.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        "time"
      ]
    },
    "./src/generated/sdk.ts": {
      config: {
        gqlImport: "./src/utils/gqlLodash.ts#default"
      },
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-graphql-request",
        "time"
      ]
    },
    "./graphql.schema.json": {
      plugins: [
        "introspection"
      ]
    }
  }
};
