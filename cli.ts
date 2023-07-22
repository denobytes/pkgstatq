import { parse as argparse } from "https://deno.land/std@0.181.0/flags/mod.ts";
import { default as pkgstat } from "npm:pkgstat@1.2.4";

const args = argparse(Deno.args, {
  boolean: [
    // instructions for this script
    "help",

    // output js
    "j",
    "json",

    // debug mode
    "debug",
  ],
});

const commandName = `pkgstatq`;

const usageMessage = `
Usage: ${commandName} [OPTIONS] <package> <node|python|ruby>
a npmjs.com query tool

Options:
  --help              Show this help message
  --debug             Debug mode

  -j, --json          Output json

  Examples:
  ${commandName} deno node
`;

// parse args
const help = args.help;
const debugMode = args.debug;
let outputJSON = args.json || args.j;

// setup query
let searchTerm = args._.at(0);
let searchLang = args._.at(1);

if (debugMode) {
  console.debug(`will query (${searchLang}): ${searchTerm}`);
}

if (help) {
  console.log(usageMessage);
  Deno.exit();
}

// fetch
let res = await pkgstat(searchTerm, searchLang);

// process
if (outputJSON) {
  // no coloring
  console.log(JSON.stringify(res, null, "  "));
} else {
  console.log(res);
}
