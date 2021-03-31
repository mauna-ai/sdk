const NodeEnvironment = require('jest-environment-node');
const { Mauna } = require("../");

class MaunaEnvironment extends NodeEnvironment {
  async setup() {
    await super.setup();

    const {
      MAUNA_DEVELOPER_ID: developerId,
      MAUNA_API_KEY: apiKey
    } = process.env;

    const client = new Mauna({ apiKey, developerId: parseInt(developerId), });
    await client.initialize();

    this.global.client = client;
  }
}

module.exports = MaunaEnvironment;
