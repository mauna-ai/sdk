#!/usr/bin/env node

const options = require("../.replrc.js");
const repl = require("local-repl");

repl
  .start(options)
  .catch(console.error);
