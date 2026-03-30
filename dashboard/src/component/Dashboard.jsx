import React, { useState } from "react";
import WatchList from "./WatchList";
import { Outlet } from "react-router-dom";
import BuyModal from "./BuyModel";

const Dashboard = () => {
   const [openBuy, setOpenBuy] = useState(false);


  return (
    <div className="dashboard-container">
      <WatchList />




      <div className="content">
        <Outlet />
      </div>

    
 
    </div>
  );
};

export default Dashboard;