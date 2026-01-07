# Demo MVP v0 - Handoff / Runbook

This runbook is for keeping the **Demo MVP v0** reliably accessible for stakeholder demos.

**Demo MVP v0 definition**: see `MVP_IMPLEMENTATION.md` (top section).

---

## What’s “real” vs “mock” in the demo

### Real (today)
- Live market list + metrics/quality scoring from the backend
- “AI insights” (may be heuristic/metrics-derived depending on configuration)
- Frontend UI flows, including a prediction placement modal

### Mock / paper (today)
- “Place prediction” does **not** place an on-chain bet.
- No Canton ledger, no DAML templates, no on-chain resolution.

---

## System overview (demo ops)

```
Vercel Frontend
  -> calls Backend API (public URL)
      -> backend fetches Polymarket data and computes scores
```

The backend is run via Docker on a machine and exposed publicly via a Cloudflare tunnel.

---

## Demo-day checklist (5 minutes)

### 1) Confirm frontend is publicly accessible
- Open the Vercel site in an incognito window.
- If you see a Vercel auth gate, disable “Deployment Protection” in the Vercel project settings.

### 2) Confirm backend is up
- Health check: `GET /api/health`
- Data check: `GET /api/quality/top-markets`

Expected: health returns OK; top-markets returns a non-empty array.

### 3) Confirm end-to-end UI
- Load the main dashboard page
- Confirm markets render within ~10 seconds
- Open a market modal and verify insight panel renders
- Submit a mock prediction and confirm you see a confirmation UI and the prediction appears in the UI list

---

## Starting / restarting the backend (Docker)

The backend runs in Docker Compose (`docker-compose.yml`) with containers like:
- `canton-dashboard` (API + web)
- `canton-conservative`, `canton-moderate`, `canton-aggressive` (trading model containers; not required for the market-browse demo unless your API depends on them)

Typical operations:
- Start: `docker compose up -d`
- Restart: `docker compose restart`
- Logs: `docker compose logs -f dashboard`

If port 8000 is already in use, stop any existing process bound to it or change host port mapping.

---

## Cloudflare tunnel notes (important)

### The main risk
Cloudflare tunnel URLs can change if you recreate the tunnel or start a new “quick tunnel.”

### Best practice for demo stability
- Use a **named** Cloudflare tunnel tied to a stable hostname (preferred).
- If using a “trycloudflare.com” URL, assume it can change and keep the “update steps” below handy.

### If the tunnel URL changes
1. Identify the new public backend base URL (the Cloudflare tunnel URL).
2. Update the frontend to point at it:
   - If the frontend uses a hardcoded URL, update `vercel-frontend/public/_env.js` (or wherever the API base is set) and redeploy to Vercel.
   - If the frontend uses a Vercel environment variable, update it in Vercel project settings and redeploy.
3. Re-run the “Demo-day checklist” above.

---

## Common failure modes + what to do

### Frontend loads but shows “no markets”
- **Likely cause**: backend down/unreachable, wrong API base URL, or rate limited upstream.
- **Action**:
  - Check backend health (`GET /api/health`).
  - Check data endpoint (`GET /api/quality/top-markets`).
  - If health is down: restart docker containers.
  - If health is up but data fails: inspect backend logs and retry later (upstream rate limiting).

### Vercel auth gate appears
- **Cause**: Vercel deployment protection enabled.
- **Action**: disable it for the demo project, or share an authenticated link only for stakeholders.

### Tunnel works from your machine but not for others
- **Cause**: local firewall, tunnel not running, or tunnel URL changed.
- **Action**: verify tunnel is running and URL matches the frontend config.

---

## Suggested demo script (5–10 minutes)

1. Open the Vercel frontend.
2. Point out the “live data” status indicator (if present) and that data is sourced from real markets.
3. Show the market list sorted by quality.
4. Click into a high-quality market and show the insight panel.
5. Open the “Place prediction” UI:
   - Select outcome
   - Enter amount
   - Submit
6. Highlight the confirmation and the “Your predictions” list entry.
7. Close with: “This is paper/mock for UX validation; Phase 2 moves this flow to Canton/DAML.”

---

## Ownership + contacts

- If the demo breaks, the fastest recovery is usually:
  - restart Docker Compose
  - restart tunnel
  - verify `/api/health`
  - verify frontend points to the right backend URL

