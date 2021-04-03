#!/usr/bin/env node

const path = require("path");
const repl = require("local-repl");

// It's important to use __dirname to load local-repl
// with local context set to the installed package
// instead of `cwd`.

const options = {
  package: path.join(__dirname, "..", "package.json"),
  replrc: path.join(__dirname, "..", ".replrc.js"),
};

repl
  .start(options)
  .catch(console.error);
