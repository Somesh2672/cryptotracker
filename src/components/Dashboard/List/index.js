import React from "react";
import "./style.css";
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import TrendingDownRoundedIcon from '@mui/icons-material/TrendingDownRounded';

function List({ coin }) {
  return (
    <tr className="List-row">
      <td className="td-image">
        <img src={coin.image} className="coin-logo" />
        </td>
        <td>
        <div className="name-col">
          <p className="coin-sym">{coin.symbol}</p>
          <p className="coin-name">{coin.name}</p>
        </div>
      </td>
      {coin.price_change_percentage_24h > 0 ? (
        <td className="chip-flex">
          <div className="price-chip">
            {coin.price_change_percentage_24h.toFixed(2)}%
          </div>
          <div className="icon-chip">
            <TrendingUpRoundedIcon />
          </div>
        </td>
      ) : (
        <td className="chip-flex">
          <div className="price-chip chip-red">
            {coin.price_change_percentage_24h.toFixed(2)}%
          </div>
          <div className="icon-chip chip-red">
            <TrendingDownRoundedIcon />
          </div>
        </td>
      )}
      <td>
        <h3
          className="coin-price"
          style={{
            color:
              coin.price_change_percentage_24h > 0
                ? "var(--green)"
                : "var(--red)",
          }}
        >
          ${coin.current_price.toLocaleString()}
        </h3>
      </td>
      <td>
        <p className="total_volume">
          {" "}
          {coin.total_volume.toLocaleString()}
        </p>
      </td>
      <td>
        <p className="market_cap">
          {" "}
        ${coin.market_cap.toLocaleString()}
        </p>
      </td>
    </tr>
  );
}
export default List;
