import React from "react";
import "./Style.css";
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import TrendingDownRoundedIcon from '@mui/icons-material/TrendingDownRounded';


function Grid({ coin }){
    return<div className="grid-container">
        <div className="info-flex">
            <img src={coin.image} className="coin-logo"/>
            <div className="name-col">
                <p className="coin-sym">{coin.symbol}</p>
                <p className="coin-name">{coin.name}</p>
            </div>
        </div>
        {coin.market_cap_change_percentage_24h > 0 ? (
        <div className="chip-flex">
             <div className="price-chip">{coin.market_cap_change_percentage_24h.toFixed(2)}%</div>
             <div className="icon-chip"><TrendingUpRoundedIcon/></div>
        </div>
        

        ):(
        <div className="chip-flex">
            <div className="price-chip chip-red">{coin.market_cap_change_percentage_24h.toFixed(2)}%</div>
            <div className="icon-chip chip-red"><TrendingDownRoundedIcon/></div>
       </div>
    )}  
    </div> ; 
}
export default Grid;