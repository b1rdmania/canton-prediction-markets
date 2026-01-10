# How It Works – Canton Market of the Week

## 1. Market of the Week ritual
- Each week we surface one curated binary question (Yes / No). The community votes from 3–5 candidates; the winner becomes the “Canton Market of the Week.”
- The hero area shows the live question, a countdown to resolution, and a note: “Deliberately minimal. Built to show real on-ledger flow.”
- This concentrated cadence keeps attention and makes the ledger feel alive.

## 2. Stake into the parimutuel pool
- Participants select Yes or No, enter a USDC.x amount, optionally add a short note, and hit “Stake now.” Stakes feed a single shared pot.
- The “Market mood” bar shows the Yes/No split and updates as stakes arrive. Percentages translate to implied probability and payout per share.
- Terminology matters: we speak about **participants**, **stakes**, **pools**, and **resolution**—no “bets”, “orderbooks,” or “interface gimmicks.”

## 3. Resolution moment
- At the scheduled time the designated resolver (or oracle feed) executes the DAML contract on Canton. The contract flips state, drains the pot, and pays winners in USDC.x.
- The UI updates instantly: status flips to “resolved,” payouts display, and a recap card appears with question, final outcome, pool size, payout complete, and timestamp.
- A small footer line reads “Resolved on Canton · DAML execution complete” to make the ledger event explicit.

## 4. Post-resolution recap
- The recap card stays visible while the next week’s vote opens. It shows how many participants engaged, the pool size, the final outcome, and when the payout landed.
- A compact “Participants snapshot” list highlights the top 5 stakes (anonymized), signaling real people moving funds.
- This section is the ledger receipt turned into a story.

## 5. What this is not
- Not an orderbook or multi-market dashboard.
- Not a trading terminal with endless instruments.
- No wallet onboarding, no auth gating, no AI hype.
- Just one clean weekly ritual showing Canton’s DAML + USDC.x heartbeat.
