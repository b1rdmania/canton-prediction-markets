# Canton Prediction Markets

AI-assisted prediction market trading protocol for Canton blockchain and Swiss-based prediction markets.

**by [b1rdmania](https://github.com/b1rdmania)**

## 🎯 Overview

A production-ready AI trading system designed for Canton/Swiss blockchain prediction markets, leveraging:
- **Mean reversion models** from 40 years of prediction market research
- **Three parallel trading strategies** (Conservative, Moderate, Aggressive)
- **Paper trading mode** for risk-free testing
- **Real-time AI analysis** using OpenAI GPT-4o-mini
- **Canton blockchain integration**

## 🌐 Canton Network

This system is specifically designed for prediction markets on:
- Canton blockchain protocol
- Swiss-compliant prediction market platforms
- Privacy-preserving market infrastructure

## 🚀 Features

- ✅ Canton blockchain integration
- ✅ Live market data streaming
- ✅ AI-powered probability analysis
- ✅ Multi-model parallel trading (3 strategies)
- ✅ Real-time signal detection
- ✅ Market quality scoring
- ✅ Resolution tracking and accuracy metrics
- ✅ Semantic market search using embeddings
- ✅ Docker-based deployment
- ✅ 24/7 operation support

## 🏗️ Architecture

```
Frontend (Vercel)
    ↓
Cloudflare Tunnel / API Gateway
    ↓
Docker Backend
    ↓
Canton Blockchain Node
    ↓
3 Trading Models + Dashboard API
```

### Trading Models

1. **Conservative**: Low-risk, high-confidence trades
2. **Moderate**: Balanced risk/reward
3. **Aggressive**: High-risk, high-reward opportunities

All models run in **paper trading mode** by default.

## 🛠️ Quick Start

### Prerequisites

- Docker Desktop
- OpenAI API key (for AI features)
- Canton node access (or public RPC)
- Cloudflare Tunnel (for public access)

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/b1rdmania/canton-prediction-markets.git
cd canton-prediction-markets
```

2. **Set up environment variables**
```bash
cp .env.example .env
# Edit .env and add:
# - OPENAI_API_KEY
# - CANTON_RPC_URL
# - CANTON_WALLET_PRIVATE_KEY (optional, for real trading)
```

3. **Start Docker containers**
```bash
docker compose up -d
```

4. **Access the dashboard**
```bash
# Local: http://localhost:8000
# Or deploy frontend to Vercel (see VERCEL_DEPLOY.md)
```

## 📚 Documentation

- [Deployment Guide](DEPLOYMENT.md)
- [Docker Guide](DOCKER_GUIDE.md)
- [Paper Trading Start](PAPER_TRADING_START.md)
- [Backtesting Guide](BACKTESTING_GUIDE.md)
- [Vercel Deployment](VERCEL_DEPLOY.md)

## 🔬 Research Foundation

Based on extensive prediction market research:
- Mean reversion strategies
- Behavioral biases in prediction markets
- Quantitative probability analysis
- Swiss market regulations and compliance

See [research/](research/) for detailed papers and findings.

## 🧰 Toolkit

The system includes several specialized modules:

- **execution-engine**: Order execution and trade management
- **mean-reversion**: Statistical arbitrage detection
- **canton-data**: Market data fetching from Canton blockchain
- **volatility-alerts**: Price movement detection
- **whale-tracker**: Large position monitoring

## 🎨 Frontend

Modern, responsive dashboard built with vanilla JavaScript:
- Real-time Canton market data ticker
- AI insights and analysis
- Market quality indicators
- Trading signal detection
- Resolution tracking
- Model performance comparison

## 🐳 Docker Setup

The system runs 4 containers:
- `canton-dashboard`: API and web interface (port 8000)
- `canton-conservative`: Conservative trading model
- `canton-moderate`: Moderate trading model
- `canton-aggressive`: Aggressive trading model

## 🔐 Security

- API keys stored in `.env` (gitignored)
- Paper trading mode prevents real trades by default
- Canton privacy-preserving features supported
- No private keys in code

## 🇨🇭 Canton Integration

### Blockchain Features
- Privacy-preserving transactions
- Swiss regulatory compliance
- High-throughput market data
- Smart contract integration

### Market Data Sources
Configure your Canton RPC endpoint in `.env`:
```
CANTON_RPC_URL=https://your-canton-node.example.com
```

## 📈 Monitoring

Access the dashboard to monitor:
- Live Canton market data
- Model performance
- Trading signals
- P&L tracking
- Resolution accuracy

## 🤝 Contributing

This is a research project for Canton prediction markets. Suggestions and feedback welcome!

## 📄 License

MIT License - See LICENSE for details

## 🙏 Acknowledgments

Built on research from:
- Berg & Rietz (2018) - Longshots and overconfidence
- Prediction market accuracy literature
- Canton blockchain architecture
- Forked from [polymarket-ai-trading](https://github.com/b1rdmania/polymarket-ai-trading)

## 🔗 Links

- [GitHub Repository](https://github.com/b1rdmania/canton-prediction-markets)
- [Canton Network](https://canton.network)
- [My GitHub](https://github.com/b1rdmania)

---

**Note**: This system is for educational and research purposes. Always comply with local regulations.

## 🆕 Related Projects

- [polymarket-ai-trading](https://github.com/b1rdmania/polymarket-ai-trading) - Polymarket version
- [aztec-auction-analysis](https://github.com/b1rdmania/aztec-auction-analysis) - Aztec auction analysis
