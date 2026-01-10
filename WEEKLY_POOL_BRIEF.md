# Weekly Pool MVP — Canton Market of the Week

## Summary
A single weekly binary market on Canton, implemented in **DAML** and settled in **USDC.x**. The community votes on the next question, participants stake into a simple parimutuel pool, and the resolution is executed on-chain with visible payouts and a recap card. The goal is to show Canton seniors a lively, ritualized ledger heartbeat without unnecessary complexity.

## Cadence & Flow
- Curate 3–5 candidate questions (Grok/X inspiration).
- Community votes; the winner becomes the **Canton Market of the Week**.
- Trading window opens (Yes/No stakes). Market mood indicator (Yes/No split) updates as participants join.
- At the chosen time, resolution occurs (designated signer or oracle feed). DAML contract flips state, drains pot, settles USDC.x.
- Post-resolution recap card displays question, outcome, pool size, payout completed, timestamp.

## Key UX signals
- **Hero:** “Canton Market of the Week,” countdown, and note “Deliberately minimal. Built to show real on-ledger flow.”
- **Market mood:** % Yes vs No, animated gently, labeled “Market mood” or “Crowd leaning.”
- **Stake module:** impacts participant feel; Naomi accent for yes/no action, confirmation text “Stake recorded.”
- **Resolver transparency:** highlight who resolved and the source (public announcement).
- **Post-resolution recap:** simple, ledger-style receipt narrative.

## What we build
- One curated binary pool per week (no orderbook).
- DAML + USDC.x settlement.
- Single, auditable resolution path.
- UI copy and tone focused on participants/stake/pool/resolution, not trading.

## What we explicitly do not build
- No multi-market grid, no orderbook, no wallets/auth multipliers.
- No AI/RAG/token emissions.
- No Cloudflare tunnel dependency or spent trading models for this front-end story.

## Why this feels alive
- Ritualized cadence builds attention (“Market of the Week”)
- Live pool imbalance and participants list makes the ledger feel social.
- Resolution moment turns on-chain execution into a visible event.
- Humble copy + muted styling keeps the vibe Canton-native and tasteful.
