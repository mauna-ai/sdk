#!/bin/sh
":" //# comment; exec /usr/bin/env node --es-module-specifier-resolution=node "$0" "$@"

import Mauna from "../esm";

console.log("mauna", Mauna);
