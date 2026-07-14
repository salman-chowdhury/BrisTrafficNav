# Portfolio Continuation Roadmap

This is the durable continuation point for future AI assistants and human contributors.

## Current portfolio direction

The portfolio should communicate one clear story:

> Salman builds practical AI and data systems with evaluation, automation, software-engineering discipline and business context.

## Flagship evidence order

Keep the homepage focused on the strongest verified projects rather than maximising project count.

1. `ai-faq-chatbot` — applied RAG system; next priority is a larger versioned evaluation dataset and measured retrieval/refusal results.
2. `llm-evaluation-toolkit` — reusable evaluation infrastructure; merge the safe implementation PR after its required independent approval.
3. `ChowBox` — adaptive inference infrastructure; next priority is a real local backend and reproducible baseline comparison.
4. `web-to-sheets` — practical data automation; next priority is an actual recorded demo and quantified reliability case study.
5. `DL_stock_pred` — ML experimentation; next priority is stronger naïve/statistical/tree baselines, walk-forward evaluation and failure analysis.
6. `asset-insights-dashboard` — analytics engineering; next priority is a real dashboard artifact and executive case study.
7. `trainforge` and `council-request-workflow-demo` — supporting full-stack/business-system evidence.

## Cross-repository work queue

### Highest priority

- Rotate all historically exposed credentials through their provider dashboards.
- Complete approved history rewrites and verify remote histories.
- Obtain independent approval for `llm-evaluation-toolkit` PR 2 and merge it.
- Rename `CSSE7023` if the trading-desk PR is retained. Its current name does not reflect the project.

### AI evaluation

- Build a human-reviewed AI FAQ evaluation set with factual, synthesis, refusal, conflict, stale-data and prompt-injection cases.
- Export records in the toolkit JSONL format.
- Commit only safe synthetic or redistributable examples.
- Add experiment comparison and regression thresholds to the toolkit.

### AI infrastructure

- Add an Ollama or equivalent local backend to ChowBox.
- Compare fixed-small, fixed-large, simple-router and adaptive policies.
- Record latency, routing, cache, escalation and task outcome without inventing unavailable energy or memory measurements.

### Data and ML

- Add a demo and resumable-job case study to Web to Sheets.
- Add persistence, moving-average, linear and tree baselines to DL Stock Prediction.
- Use rolling or walk-forward evaluation and explain why forecasting error does not establish trading profitability.
- Add a shareable Power BI template or equivalent dashboard evidence to Asset Insights.

### Career evidence

- Add current résumé and LinkedIn/contact links after the owner provides canonical versions.
- Record 90–180 second demos for flagship projects.
- Add one or two externally reviewed open-source contributions.
- Keep profile pins aligned with the six strongest current repositories.

## Repository naming policy

A repository must be renamed when its name is a course code, backup label, duplicate suffix or otherwise misrepresents the current product.

When renaming:

1. Confirm the target name is available.
2. Rename through GitHub settings or `gh repo rename`.
3. Update local remotes.
4. Update README links, badges, package metadata, Pages URLs, workflow references and portfolio links.
5. Leave a short migration note where external users may still use the old name.

Known outstanding naming issue:

- `CSSE7023` should be renamed before the agentic trading-desk implementation is treated as a serious public project. Suggested neutral name: `agentic-paper-trading-desk`.

## Rules for future AI work

- Read the target repository's `AGENTS.md` before editing.
- Preserve dirty local work and use isolated branches/worktrees.
- Never expose or test leaked credentials.
- Do not claim profitability, production readiness or model quality without evidence.
- Run tests and relevant workflows before pushing.
- Prefer small reviewable PRs and record measured validation in PR descriptions.
- Update this roadmap when project priorities or flagship selection change.
