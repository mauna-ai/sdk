import { GraphQLClient } from "graphql-request";

import { apiEndpoint, authEndpoint } from "./config";

import type { JWT } from "./utils/auth";

export class Client extends GraphQLClient {
  constructor(jwt: JWT) {
    super(apiEndpoint, {
      headers: {
        authorization: `Bearer ${jwt.trim()}`
      }
    });
  }

  static async create(apiKey: string): Promise<Client> {
    return new Client('a' as JWT);
  }
}
