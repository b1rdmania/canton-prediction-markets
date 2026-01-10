# Legacy 14-Week Canton MVP Plan (archived)

This document preserves the original, broader Canton MVP plan (DAML orderbooks, AI/RAG, Polymarket integrations) for historical reference. The current project focus is the lean weekly pool, so this plan is archived.

## 1. Overview

AI-enhanced prediction markets application built on Canton using DAML smart contracts, real market data, and Grok insights.

## 2. MVP Objectives

1. View live markets (Kalshi/Polymarket)  
2. See AI insights for each market  
3. Place predictions via DAML smart contracts  
4. Track automated resolution from real-world outcomes

## 3. Scope (included)

- Market data integration (Kalshi/Polymarket)  
- AI summaries/probabilities (Grok)  
- DAML smart contracts  
- Canton deployment  
- Simple UI (React/Vanilla JS)

### Not in scope

- Mobile apps  
- Advanced portfolio management  
- Social features  
- Long-term personalization  
- Multi-chain support

## 4. Architecture

Frontend → Backend (Node/Python) → Market data sources + AI/vector DB → Canton ledger (DAML)

## 5. AI Features

- Summaries via Grok  
- Probability estimates combining data + history  
- RAG-enhanced insights (Pinecone/Weaviate)

## 6. Stack

- Frontend: React/VanillaJS  
- Backend: Node/FastAPI + PostgreSQL + vector DB  
- Smart contracts: DAML on Canton  
- AI/Data: Grok xAI, embeddings, vector store, Polymarket/Kalshi feeds

## 7-14. Timeline

Weeks 1–14 covered planning, DAML design, market data integration, resolution logic, Grok integration, vector DB, APIs, frontend, testing, and MVP launch readiness.

## 8. Risks

- DAML learning curve  
- API rate limits  
- Grok/vector costs  
- Scope creep  
- Integration/testing delays

## 10. Success Criteria

- 20+ live markets  
- AI insights per market  
- On-chain bets via Canton  
- Auto resolution  
- 100+ concurrent users  
- <2s latency

## 11. Post-MVP & Roadmap

- Portfolio management, accuracy tracking, leaderboards, mobile improvements, social features, advanced AI, multi-chain support.
