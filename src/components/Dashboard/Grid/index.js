import React from "react";
import "./Style.css";
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import TrendingDownRoundedIcon from '@mui/icons-material/TrendingDownRounded';
import { color } from "framer-motion";


function Grid({ coin }){
    return(<div className={`grid-container ${coin.price_change_percentage_24h < 0 ? "grid-container-red" : ""}`}>

        <div className="info-flex">
            <img src={coin.image} className="coin-logo"/>
            <div className="name-col">
                <p className="coin-sym">{coin.symbol}</p>
                <p className="coin-name">{coin.name}</p>
            </div>
        </div>
        {coin.price_change_percentage_24h > 0 ? (
        <div className="chip-flex">
             <div className="price-chip">{coin.price_change_percentage_24h.toFixed(2)}%</div>
             <div className="icon-chip"><TrendingUpRoundedIcon/></div>
        </div>
        

        ):(
        <div className="chip-flex">
            <div className="price-chip chip-red">{coin.price_change_percentage_24h.toFixed(2)}%</div>
            <div className="icon-chip chip-red"><TrendingDownRoundedIcon/></div>
       </div>
    )}  
    <div className="info_container">
        <h3 className="coin-price" style={{color: coin.price_change_percentage_24h > 0 ? "var(--green)": "var(--red)", }}>${coin.current_price.toLocaleString()}</h3>
        <p className="total_volume"> Total Volume : {coin.total_volume.toLocaleString()}</p>
        <p className="market_cap"> Market Cap : ${coin.market_cap.toLocaleString()}</p>
    </div>
    
    </div> ); 
    
}
export default Grid;