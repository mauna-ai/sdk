import Client from "./client";
import { getSdk } from "./generated/sdk";
import { withRetries } from "./utils/wrapper";

import type { Sdk } from "./generated/sdk";
import type * as types from "./generated/types";
import type { credentials } from "./client";

// export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {

export class Mauna {
  initialized: boolean;
  developerId: number;
  apiKey: string;
  client?: Client;
  _sdk?: Sdk;

  constructor({ developerId, apiKey }: credentials) {
    this.initialized = false;
    this.developerId = developerId;
    this.apiKey = apiKey;
  }

  async initialize() {
    const { developerId, apiKey } = this;

    this.client = await Client.create({ developerId, apiKey });
    this._sdk = getSdk(this.client, withRetries);
    this.initialized = true;
  }

  public get sdk(): Sdk {
    const { initialized, _sdk } = this;

    if (!(initialized && _sdk)) {
      throw new Error("The SDK must be initialized first");
    }

    return _sdk;
  }
}

export { types };

export default Mauna;
