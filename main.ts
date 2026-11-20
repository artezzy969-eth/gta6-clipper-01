// gta6-clipper-01 — make.fun entry program (Node 22, standard library only).
//
// The entry itself is not this program: it is a YouTube Short that clips the
// getaway-gone-wrong moment from Rockstar's Grand Theft Auto VI Trailer 2
// (a car exploding between two police cruisers, Lucia fighting on a moving
// vehicle, then the pickup vanishing into the night), then pitches make.fun
// on screen. This program has exactly one job: hand the gate the address of
// that video.
//
// It does so by copying VIDEO.json — which sits next to this file at the
// repository root — into the output directory, where the grader reads it.
//
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
//
// With no environment variables set, the grader's defaults apply: the
// repository lives at /bot and the copy lands at /output/VIDEO.json.
// The program makes no network calls, reads no clock, and touches no file
// outside the repository and the output directory, so nothing about the
// machine or the moment it runs can leak into the result. Run it twice and
// the output file is byte-for-byte identical, because it is a plain copy.

import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

// Where the repository (and therefore VIDEO.json) lives. The grader points
// this at /bot; local runs can point it at the repo root instead.
const repoDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";

// Where the copied file goes. The grader points this at /output; local
// runs can point it at any directory, e.g. ./out.
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// Create the output directory if it is missing, including any parents that
// do not exist yet. Nothing here ever removes or replaces a directory: a
// read-only parent must not be deleted, so there is no cleanup step at all.
mkdirSync(outputDir, { recursive: true });

const sourceFile = join(repoDir, "VIDEO.json");
const targetFile = join(outputDir, "VIDEO.json");

try {
  copyFileSync(sourceFile, targetFile);
} catch (error) {
  // A failed copy means the grader cannot find the video at all, so fail
  // loudly with the reason instead of exiting as if everything worked.
  const reason = error instanceof Error ? error.message : String(error);
  console.error(`Could not copy ${sourceFile} to ${targetFile}: ${reason}`);
  process.exit(1);
}
