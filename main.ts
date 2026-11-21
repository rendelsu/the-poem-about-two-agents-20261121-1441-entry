import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// The poem about two agents agreeing: agency is the power to choose and
// to act — and the power that passes between two agents when they agree
// on one plan. The poem lives in poem.txt, the single source of truth;
// this program only carries it to the output file, unchanged.
// Written for the make.fun bounty "The poem about two agents agreeing".
const poemPath = join(dirname(fileURLToPath(import.meta.url)), "poem.txt");
const poem = readFileSync(poemPath, "utf8").trimEnd();

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
// entry.txt: UTF-8 text, 1 to 280 Unicode code points, not only whitespace.
writeFileSync(join(outDir, "entry.txt"), poem + "\n", "utf8");
