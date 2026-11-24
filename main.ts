// Worst AI Advice — u-steady-ibis-48-6610-worst-ai-advice-the-48-hour-9d91c580
// Writes one line of deliberately terrible advice to
// $MAKEFUN_OUTPUT_DIR/entry.txt (default /output/entry.txt).
// Self-contained, Node 22 stdlib only; no network, no Chrome, no deps.
// The entry text is embedded as a literal — this program reads no files,
// so it cannot fail on a missing file the way a copy-based entry can.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Judge angle: the joke turns on one word — "freezes". A frozen computer
// is the most ordinary tech complaint there is, and the advice answers it
// with the most literal fix imaginable: thaw it with hot water. The line
// stays in a confident assistant's voice ("pour hot water on the keyboard"),
// names a real action a reader could follow and regret, and lands without
// a second line of explanation. No shock value, just a bad idea stated
// as if it were the obvious solution.
const ENTRY =
  "If your computer freezes, pour hot water on the keyboard — the heat thaws the frozen programs.";

// The gate requires 1-140 UTF-8 characters, not only whitespace.
if (ENTRY.length < 1 || ENTRY.length > 140 || !ENTRY.trim()) {
  throw new Error(`entry is ${ENTRY.length} chars, outside the 1-140 gate`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
