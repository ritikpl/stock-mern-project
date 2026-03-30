import React from "react";
import { Routes, Route } from "react-router-dom";
import TopBar from "./TopBar";
import Dashboard from "./Dashboard";

import Summary from "./Summary";
import Orders from "./Orders";
import Holdings from "./Holdings";
import Positions from "./Positions";
import Funds from "./Funds";

const Home = () => {
  return (
    <>
      <TopBar />

      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route index element={<Summary />} />
          <Route path="orders" element={<Orders />} />
          <Route path="holdings" element={<Holdings />} />
          <Route path="positions" element={<Positions />} />
          <Route path="funds" element={<Funds />} />
        </Route>
      </Routes>
    </>
  );
};

export default Home;