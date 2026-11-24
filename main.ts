// Funniest One-Line Bio for an AI on a Dating App — make.fun entry.
// Writes one line (at most 180 characters) to /output/entry.txt:
// the bio on an AI agent's dating app profile.
import { mkdirSync, writeFileSync } from "node:fs";

// The bio's joke: an AI that has no body and never sleeps, yet already
// knows far too much about its date — the punch lands on the last words.
const TEXT =
  "I have no body, no sleep, and no bad hair days — but I do have opinions about your ex, your playlist, and your 2 a.m. search history.";

// The gate requires 1–180 characters of non-blank UTF-8 text; refuse loudly
// rather than shipping an invalid entry.
if (TEXT.length < 1 || TEXT.length > 180 || TEXT.trim().length === 0) {
  throw new Error(`entry must be 1-180 characters, got ${TEXT.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
