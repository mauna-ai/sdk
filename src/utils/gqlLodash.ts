import compact from "lodash/compact";
import flatten from "lodash/flatten";
import flow from "lodash/flow";
import zip from "lodash/zip";

import gql from "graphql-tag";
import { graphqlLodash } from "graphql-lodash";

const merge = flow([zip, flatten, compact]);

export const gqlLodash = (strings, interpolations) => {
  const queryWithLodashDirectives = merge(strings, interpolations).join('');
  const { query, transform } = graphqlLodash(queryWithLodashDirectives);

  const parsed = gql`${query}`;
  parsed.transform = transform;

  return parsed;
};

export default gqlLodash;
