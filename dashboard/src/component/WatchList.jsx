import React, { useState } from "react";
import BuyModel from "./BuyModel";
import SellModel from "./SellModel"
import { watchlist } from "../data/Data";
import {
  BarChartOutlined,
  KeyboardArrowDown, 
  KeyboardArrowUp,
  MoreHoriz
} from "@mui/icons-material";
import { Tooltip, Grow } from "@mui/material";
import { PieChart, Pie, Cell, Tooltip as RechartsTooltip, ResponsiveContainer } from "recharts";

const WatchList = () => {
  const [openBuy, setOpenBuy] = useState(false);
  const [openSell, setOpenSell] = useState(false);
  const [selectedStock, setSelectedStock] = useState("");
  const COLORS = ["#00C49F", "#FF8042", "#0088FE", "#FFBB28", "#AF19FF", "#FF4560"];

  const chartData = watchlist.map((stock) => ({
  name: stock.name,
  value: stock.price, 
}));

  return (
    <div className="watchlist-container">
      
      {/* 🔍 Search */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Search eg: infy, bse..."
          className="search"
        />
        <span className="counts">{watchlist.length}</span>
      </div>

      {/* 📈 List */}
      <ul className="list">
        {watchlist.map((stock, index) => (
          <WatchListItem
            key={index}
            stock={stock}
            setOpenBuy={setOpenBuy}
            setOpenSell={setOpenSell}
            setSelectedStock={setSelectedStock}
          />
        ))}
      </ul>
      <h3 style={{ marginTop: "20px" }}>Portfolio Distribution</h3>

<div style={{ width: "100%", height: 300 }}>
  <ResponsiveContainer>
    <PieChart>
      <Pie
        data={chartData}
        dataKey="value"
        nameKey="name"
        outerRadius={100}
        label
      >
        {chartData.map((entry, index) => (
      <Cell
        key={index}
        fill={COLORS[index % COLORS.length]}
      />
    ))}
      </Pie>
      <RechartsTooltip />
    </PieChart>
  </ResponsiveContainer>
</div>

      {/* 🔥 SINGLE MODALS */}
      <BuyModel
        isOpen={openBuy}
        onClose={() => setOpenBuy(false)}
        stockName={selectedStock}
      />

      <SellModel
        isOpen={openSell}
        onClose={() => setOpenSell(false)}
        stockName={selectedStock}
      />
    </div>
  );
};

export default WatchList;





// ================= ITEM =================

const WatchListItem = ({ stock, setOpenBuy, setOpenSell, setSelectedStock }) => {
  const [showActions, setShowActions] = useState(false);

  return (
    <li
      onMouseEnter={() => setShowActions(true)}
      onMouseLeave={() => setShowActions(false)}
    >
      <div className="item">
        <p className={stock.isDown ? "down" : "up"}>
          {stock.name}
        </p>

        <div className="itemInfo">
          <span className="percent">{stock.percent}</span>

          {stock.isDown ? (
            <KeyboardArrowDown className="down" />
          ) : (
            <KeyboardArrowUp className="up" />
          )}

          <span className="price">{stock.price}</span>
        </div>
      </div>

      {showActions && (
        <div className="actions">
          
          {/* BUY */}
          <Tooltip title="Buy (B)" placement="top" arrow TransitionComponent={Grow}>
            <button
              className="buy"
              onClick={() => {
                setSelectedStock(stock.name);
                setOpenBuy(true);
              }}
            >
              Buy
            </button>
          </Tooltip>

          {/* SELL */}
          <Tooltip title="Sell (S)" placement="top" arrow TransitionComponent={Grow}>
            <button
              className="sell"
              onClick={() => {
                console.log("button clicked")
                setSelectedStock(stock.name);
                setOpenSell(true);
              }}
            >
              Sell
            </button>
          </Tooltip>

          {/* ANALYTICS */}
          <Tooltip title="Analytics (A)" placement="top" arrow TransitionComponent={Grow}>
            <button className="action">
              <BarChartOutlined className="icon" />
            </button>
          </Tooltip>

          {/* MORE */}
          <Tooltip title="More" placement="top" arrow TransitionComponent={Grow}>
            <button className="action">
              <MoreHoriz className="icon" />
            </button>
          </Tooltip>

        </div>
      )}
    </li>
  ); 
};