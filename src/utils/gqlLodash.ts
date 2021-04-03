// src/utils/gqlLodash.ts

import compact from "lodash/compact";
import flatten from "lodash/flatten";
import flow from "lodash/flow";
import zip from "lodash/zip";

import { default as _gql } from "graphql-tag";

// Need to do this dance to support both esm and cjs packages
import graphqlLodashPkg from "graphql-lodash";
const { graphqlLodash } = graphqlLodashPkg ? graphqlLodashPkg : require("graphql-lodash");

const merge = flow([zip, flatten, compact]);

export const gql = (
  strings: TemplateStringsArray,
  ...interpolations: Array<any>
) => {
  const queryWithLodashDirectives = merge(strings, interpolations).join("");
  const { query, transform } = graphqlLodash(queryWithLodashDirectives);

  const parsed = _gql`${query}` as any;
  parsed.transform = transform;

  return parsed;
};

export default gql;
