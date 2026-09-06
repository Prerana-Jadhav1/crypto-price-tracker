import React, { useState, useEffect } from "react";
import CoinRow from "./CoinRow";

const API_URL =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false";

function App() {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch cryptocurrency data");
        }
        return res.json();
      })
      .then((data) => {
        setCoins(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <div className="app">
      <h1>Crypto Price Tracker</h1>
      {loading && <p>Loading...</p>}
      {error && <p className="error-message">{error}</p>}
      {!loading && !error && (
        <table className="crypto-table">
          <thead>
            <tr>
              <th>Rank</th>
              <th>Coin</th>
              <th>Price</th>
              <th>Market Cap</th>
              <th>24h Change</th>
            </tr>
          </thead>
          <tbody>
            {coins.map((coin) => (
              <CoinRow key={coin.id} coin={coin} />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default App;
