import assert from "assert";

import Client from "./client";
import { getSdk } from "./generated/sdk";
import { withRetries } from "./utils/wrapper";

import type { Sdk } from "./generated/sdk";
import type * as types from "./generated/types";
import type { credentials } from "./client";

export class Mauna {
  initialized: boolean;
  developerId: number;
  apiKey: string;
  client?: Client;
  _api?: Sdk;

  constructor({ developerId, apiKey }: credentials) {
    this.initialized = false;
    this.developerId = parseInt(developerId.toString());
    this.apiKey = apiKey;

    assert(this.developerId);
    assert(this.apiKey);
  }

  async initialize(): Promise<Mauna> {
    const { initialized, developerId, apiKey } = this;

    if (initialized) return this;

    this.client = await Client.create({ developerId, apiKey });
    this._api = getSdk(this.client, withRetries);
    this.initialized = true;

    return this;
  }

  public get api(): Sdk {
    const { initialized, _api } = this;

    if (!(initialized && _api)) {
      throw new Error("The SDK must be initialized first");
    }

    return _api;
  }
}

export { types };

export default Mauna;
