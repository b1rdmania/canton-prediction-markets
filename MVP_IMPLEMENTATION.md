# Canton Prediction Markets - MVP Structure

**Version**: 0.3  
**Last Updated**: 2026-01-06  

---

## Section 1 — Demo MVP v0 (current)

**One-sentence definition**  
Demo that lets participants browse live markets, read insight cards, and run a mock/paper “place prediction” flow while the backend remains centralized (no on-chain stakes yet).

**Goals**  
- Validate the UX with live Polymarket data and scoring.  
- Be resilient to backend/API hiccups.  
- Keep the demo visibly safe (“predictions are simulated; insights are not financial advice”).

**Scope**  
- Included: top markets list, quality score, insight panel, prediction modal, status indicators.  
- Excluded: Canton/DAML resolution, real assets, orderbooks, personalization, social features.

**Architecture (demo)**  
Frontend (Vercel) → FastAPI backend → Cloudflare tunnel → Polymarket data.

**Definition of Done**  
- Frontend public with friendly degraded states.  
- Prediction modal confirms and logs entries.  
- 5–10 minute scripted demo works for a non-builder.

---

## Section 2 — Phase 2: Weekly Pool MVP (new Canton build)

**One-sentence definition**  
A Canton-native, weekly binary pool implemented in DAML and settled in USDC.x. Curated candidates → vote → stake → resolve → recap, all on one market we operate.

**Build outline**  
- One “Canton Market of the Week,” voted from 3–5 candidates.  
- Parimutuel “Market mood” splits the Yes/No pool.  
- DAML contracts run on Canton; settlement in USDC.x with a clear resolver (designated signer/oracle).  
- UI surfaces: hero question, countdown, stake module, resolver info, recap card, upcoming vote teaser.

**Out-of-scope for now**  
- Orderbooks, open market creation, multi-market dashboards.  
- Grok/RAG/vector DB & AI overlays (can be layered later).  
- Wallets/auth/KYC, incentive tokens, analytic clusters.

**Why it’s fast**  
- Single template set keeps DAML surface small.  
- One market, one resolver, one asset reduces audit scope.  
- Ritualized cadence is easy to narrate and quick to launch.

**Runbook notes**  
- Resolver identity and source are surfaced for governance clarity.  
- Post-resolution recap shows question, outcome, pool, payout, timestamp, and “Resolved on Canton · DAML execution complete.”

---

## Appendix — Archived Legacy 14-Week Plan

> The original broader roadmap (orderbooks, AI/RAG, Grok, vector DB, wallets/auth, multi-market dashboards) is archived in [`archive/legacy-plan/LEGACY_14_WEEK_PLAN.md`](archive/legacy-plan/LEGACY_14_WEEK_PLAN.md). This repo now centers on the weekly pool focus above.
