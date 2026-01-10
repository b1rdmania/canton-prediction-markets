# About Canton Prediction Markets

## Concept
A weekly Canton-native market that feels alive: one curated binary question, one community pool, one resolution moment. It shows Canton liveness (DAM L + USDC.x) with minimal surface area—no orderbooks, no wallets, no crypto theatrics—just a visible ledger heartbeat senior validators can read at a glance.

## How it’s built
- **Contracts**: DAML templates handle market creation, staking, resolution, and USDC.x settlement.
- **Cadence**: A new question is voted in each week; the DAML ledger advances from open → trading → resolution → settled.
- **Frontend**: A calm, focused page (hero + market mood + stake module + recap) connects to Canton via a lean API and reflects live pool data.
- **Ops**: Single market at a time cuts audit surface; resolver identity + source are shown for governance clarity.

## Market flow
1. **Vote**: Curated candidates are presented; the community chooses the Market of the Week.
2. **Stake**: Participants bet Yes/No into the parimutuel pool; the “market mood” bar updates as stakes arrive.
3. **Resolve**: At the scheduled time, the resolver executes on Canton. DAML flips state, drains the pot, pays winners in USDC.x, and emits a post-resolution recap card (question, outcome, pool size, payout, timestamp).
4. **Replay**: The recap stays visible while the next week’s vote opens, keeping the ritual going.

## Tone
Focus on “participants,” “stakes,” “pool,” “resolution.” Keep copy concise, restrained, and Canton-native—built to show a serious machine doing real work every week.
