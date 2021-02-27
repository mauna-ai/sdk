module.exports = {
  overwrite: true,
  schema: [{
    "https://api.mauna.cloud/v1/graphql": {
      headers: {
        "X-Hasura-Admin-Secret": process.env.HASURA_ADMIN_SECRET || ""
      }
    }
  }],
  documents: null,
  generates: {
    "src/generated/graphql.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
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
