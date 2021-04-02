// .replrc.js
const assert = require("assert");
const lodash = require("lodash");
const chalk = require("chalk");

// Load module
const { Mauna } = require("./");
const pkg = require("./package.json");

// Get API keys
const { MAUNA_API_KEY, MAUNA_DEVELOPER_ID } = process.env;

assert(MAUNA_DEVELOPER_ID, "Please set the MAUNA_DEVELOPER_ID environment variable");
assert(MAUNA_API_KEY, "Please set the MAUNA_API_KEY environment variable");

// Create client
const client = new Mauna({
  apiKey: MAUNA_API_KEY,
  developerId: MAUNA_DEVELOPER_ID
});

// Context
const clientPromise = client.initialize()
  .then(c => (console.clear(), c));
const apiPromise = clientPromise.then(c => c.api);

const context = {
  lodash,
  MAUNA_API_KEY,
  MAUNA_DEVELOPER_ID,
  Mauna,
  pkg,

  // Authorize and return client
  client: clientPromise,
  api: apiPromise
};


// Theme
const theme = {
  heading: chalk.bold.yellow,
  link: chalk.underline.cyanBright,
  normal: chalk.white,
  code: chalk.greenBright,
  logo: chalk.bgYellowBright.black,
  codeTemplate: chalk.greenBright.italic.dim,
};

// Banner
const logo = theme.logo(`
•  ┌────────────────────────────────────┐  •
•  │   |\\\\/| /\\\\ |_| |\\\\| /\\\\   /\\\\ |   │  •
•  └────────────────────────────────────┘  •
`);

const title = theme.heading(`Welcome to ${theme.logo(" Mauna ")} SDK playground!`);

const instructions = theme.normal(`To try out an api, simply run:`);
const code_sample = theme.code(
  `await api.${theme.codeTemplate("<api_name>")}({ ${theme.codeTemplate("<api_params>")} })`
);

const docs = theme.normal(
  `You can see the list of APIs at ${theme.link("https://github.com/mauna-ai/sdk#readme")}`
);

const varsInfo = chalk.dim("Globals: " + theme.code(Object.keys(context).join(", ")));

const banner = `
${logo}

  ${title}
  ${instructions} ${code_sample}
  ${docs}

  ${varsInfo}
`;

const prompt = (context, pkg) => chalk`{dim ${pkg.name} ${pkg.version} > }`;

// REPL Config
console.log(chalk`{cyan.bold Logging you in...}`);

module.exports = {
  banner,
  prompt,
  context,
  enableAwait: true
};
