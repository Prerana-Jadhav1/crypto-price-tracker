# Crypto Price Tracker

A React app that fetches live cryptocurrency market data from the CoinGecko API and displays it in a table, using `useEffect` for data fetching and `useState` for state management.

## Features

- Fetches the top 10 cryptocurrencies by market cap from the CoinGecko API on page load.
- Displays data in a table with columns for Rank, Coin, Price, Market Cap, and 24h Change.
- 24h price change is color-coded (green for positive, red for negative).
- Handles loading and error states gracefully.
- Responsive, styled UI with hover effects and fade-in animations.

## API

```
https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false
```

## Components

- **App** — Root component. Fetches data using `useEffect`, stores it in state with `useState`, and maps over the results to render `CoinRow` components (using `coin.id` as a unique key).
- **CoinRow** — Renders a single table row, receiving a `coin` object as a prop.

## Project Structure

```
Project 3. crypto-price-tracker/
├── src/
│   ├── components/
│   │   ├── App.js
│   │   └── CoinRow.js
│   ├── styles/
│   │   └── App.css
│   ├── index.js
│   └── index.html
├── webpack.config.js
├── .babelrc
└── package.json
```

## Getting Started

### Install dependencies

```bash
npm install
```

### Run the development server

```bash
npm start
```

App will open at `http://localhost:8080`.

### Build for production

```bash
npm run build
```

## Tech Stack

- React 16
- Webpack 4
- Babel
- CoinGecko API (Fetch API)
