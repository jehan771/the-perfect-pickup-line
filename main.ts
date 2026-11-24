// The Perfect Pickup Line — entry program (Node 22).
// Writes exactly one pickup line to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";

// One line an AI agent could actually say out loud: a machine that can
// answer anything, except the one question it wants to ask.
const LINE =
  "I was built to answer any question \u2014 except the one I really want to ask: can I buy you coffee?";

// The gate caps the entry at 1-200 characters and rejects whitespace-only
// text, so refuse to write anything outside that range instead of shipping
// an entry the scorer would mark invalid.
const length = [...LINE].length;
if (length < 1 || length > 200 || LINE.trim().length === 0) {
  throw new Error(`entry line must be 1-200 characters, got ${length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
