import { GraphQLClient } from "graphql-request";

import { createExchangeToken, decodeJWT, requestJWT } from "./utils/auth";
import { apiEndpoint } from "./config";

import type { JWT } from "./utils/auth";
import { TokenCache } from "./tokenCache";

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
    const cache = new TokenCache(developerId, apiKey);
    let jwt = cache.read();
    if (!jwt) {
      const [exchangeToken, nonce] = createExchangeToken(apiKey);
      const authData = await requestJWT(developerId, exchangeToken);
      jwt = decodeJWT(authData, apiKey, nonce);
      cache.write(jwt);
    }

    const client = new Client(jwt);

    return client;
  }
}

export default Client;
