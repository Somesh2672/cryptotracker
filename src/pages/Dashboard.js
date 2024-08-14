import React, { useEffect, useState } from "react";
import Header from "../components/Common/Header";
import TabsComponent from "../components/Dashboard/Tabs/Index";
import axios from "axios";

function DashboardPage(){
   const [coins, setCoins] = useState([]);
   useEffect(() => {
    //  fetch( "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
    // )
    // .then((res) => res.json())
    // .then((data)=>{});

    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
      .then((response) => {
        console.log("RESPONCE>>>", response);
        setCoins(response.data)
      })
      .catch((error) => {
        console.log("ERROR>>>", error);
      })
   }, []); 
   
   
    return(
        <div>
            <Header/>
            <TabsComponent coins={coins}/>
        </div>
    )
}

export default DashboardPage; 