const endpoint = "https://api.mauna.cloud/v1/graphql";

module.exports = {
  overwrite: true,
  schema: [{
    [endpoint]: {
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
        pureMagicComment: true,
        gqlImport: "../utils/gqlLodash#gql"
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
