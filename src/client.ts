import { GraphQLClient } from "graphql-request";

import { createExchangeToken, decodeJWT, requestJWT } from "./utils/auth";
import { apiEndpoint, authEndpoint } from "./config";

import type { JWT } from "./utils/auth";

export type credentials = { developerId: number; apiKey: string };

export class Client extends GraphQLClient {
  constructor(jwt: JWT) {
    super(apiEndpoint, {
      headers: {
        authorization: `Bearer ${jwt.trim()}`,
      },
    });
  }

  // TODO: Add refresh logic

  static async create({ developerId, apiKey }: credentials): Promise<Client> {
    const [exchangeToken, nonce] = createExchangeToken(apiKey);
    const authData = await requestJWT(developerId, exchangeToken);
    const jwt = decodeJWT(authData, apiKey, nonce);

    const client = new Client(jwt);

    return client;
  }
}

export default Client;
