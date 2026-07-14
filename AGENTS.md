# AI Contributor Handoff

This repository is the recruiter-facing entry point for Salman Chowdhury's AI, data and software portfolio.

## Read first

1. Read `README.md` and `docs/case-study.md`.
2. Check the live site before and after changes: `https://salman-chowdhury.github.io/portfolio/`.
3. Run `node scripts/check-site.mjs` before committing.
4. Verify every linked repository, screenshot and case-study URL.

## Product intent

Present a coherent graduate/junior AI, ML, data and software-engineering portfolio. The site should prioritise demonstrated evidence over broad claims: working systems, tests, evaluations, architecture, trade-offs, limitations and measured outcomes.

## Current priorities

1. Replace placeholder or weak project evidence with verified screenshots and measured results.
2. Add a downloadable résumé only when a current reviewed file is available.
3. Add LinkedIn/contact links only after the owner supplies the canonical URLs.
4. Keep flagship selection aligned with the strongest current repositories.
5. Improve accessibility, responsive behaviour and load performance without adding heavy frameworks unnecessarily.

## Portfolio standards

- Never fabricate metrics, users, revenue, performance or deployment status.
- Label targets separately from measured results.
- Prefer direct links to case studies, reports, demos and CI evidence.
- Keep copy concise and recruiter-readable.
- Do not expose private repositories, credentials, student identifiers or private deployment URLs.
- Preserve the static-site deployment unless a framework migration has a clear, documented benefit.

## Repository naming rule

The current repository name, `portfolio`, accurately reflects its purpose. No rename is required. If the project changes into something materially different, rename the repository before publicising that new purpose and update Pages URLs, badges, clone commands and cross-references.

## Definition of done

- Site validation passes.
- Links and images resolve.
- Mobile widths remain usable with no horizontal overflow.
- New claims are supported by committed evidence.
- `docs/PORTFOLIO_ROADMAP.md` is updated when priorities change.
