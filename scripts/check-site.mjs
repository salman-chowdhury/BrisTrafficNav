import { access, readFile } from "node:fs/promises";
import path from "node:path";

const html = await readFile("index.html", "utf8");
const references = [...html.matchAll(/(?:href|src)="([^"]+)"/g)].map((match) => match[1]);
const localReferences = references.filter(
  (reference) =>
    !reference.startsWith("http") &&
    !reference.startsWith("#") &&
    !reference.startsWith("data:"),
);

for (const reference of localReferences) {
  await access(path.resolve(reference));
}

const requirements = [
  "<h1>Salman Chowdhury</h1>",
  "aria-pressed=\"true\"",
  "ai-faq-chatbot/blob/main/evaluation/reports/v1/report.md",
  "DL_stock_pred/blob/main/evaluation/baselines-v1/report.md",
  "llm-evaluation-toolkit/pull/2",
];
for (const requirement of requirements) {
  if (!html.includes(requirement)) {
    throw new Error(`Missing required portfolio evidence: ${requirement}`);
  }
}

const imageTags = [...html.matchAll(/<img\s+[^>]*>/g)].map((match) => match[0]);
if (imageTags.some((tag) => !/alt="[^"]+"/.test(tag))) {
  throw new Error("Every portfolio image must have non-empty alt text.");
}

console.log(`Validated ${localReferences.length} local assets and ${requirements.length} evidence markers.`);
