# Product Direction (current cycle)

## What we’re building
- One binary market per week on Canton, implemented in DAML, settled in USDC.x.
- Parimutuel/pool pricing (no orderbook).
- Single, auditable resolution path (designated signer or oracle feed).
- Weekly cadence: curate candidates → vote-to-list → trade window → resolve → recap.
- Lean UX: vote page, market card with implied probability, “Your positions” (Open → Resolved), on-Canton/USDC.x panel.

## What we’re explicitly not building (this cycle)
- No orderbook, no multiple concurrent markets, no multi-asset settlement.
- No heavy AI/RAG/vector DB; no Grok/embeddings work right now.
- No wallets/auth/KYC yet; no complex social features; no multi-market grid.
- No polymarket-style trading model cluster or Cloudflare-tunneled stack requirement.

## Guiding principles
- Ship fast with a small, auditable DAML surface.
- Keep ops simple: one market at a time, one settlement asset, one resolution path.
- Make it tweetable/validator-friendly while staying credible for Canton.

