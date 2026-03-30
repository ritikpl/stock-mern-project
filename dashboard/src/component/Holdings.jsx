import React, {useState, useEffect} from "react";

import axios from "axios"

// import { holdings } from "../data/data";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const Holdings = () => {

  const [allHoldings, setAllHoldings] = useState([])

   useEffect(() => {
    axios.get("http://localhost:3002/allHoldings").then((res) => {
      // console.log(res.data);
      setAllHoldings(res.data);
    });
  }, []);

  const chartData = allHoldings.map((stock) => ({
  name: stock.name,
  value: stock.price * stock.qty,
}));


  return (
    <>
      <h3 className="title">Holdings ({allHoldings.length})</h3>

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg. cost</th>
              <th>LTP</th>
              <th>Cur. val</th>
              <th>P&L</th>
              <th>Net chg.</th>
              <th>Day chg.</th>
            </tr>
            </thead>

            <tbody>
            {allHoldings.map((stock, index)=>{
                const curValue = stock.price * stock.qty;
                const isProfit = curValue-stock.avg * stock.qty>=0.0
                const profClass = isProfit ? "profit" : "loss";
                const dayClass = stock.isLoss ? "loss" : "profit";

                return(
            <tr key={index}>
              <td>{stock.name}</td>
              <td>{stock.qty}</td>
              <td>{stock.avg.toFixed(2)}</td>
              <td>{stock.price.toFixed(2)}</td>
              <td>{curValue.toFixed(2)}</td>
              <td className={profClass}>{(curValue-stock.avg * stock.qty).toFixed(2)}</td>
              <td className={profClass}>{stock.net} </td>
              <td className={dayClass}> {stock.day} </td>
            </tr>

                )

            })}
          </tbody>

        </table>
      </div>

      {/* Bottom Summary */}
      <div className="row">
        <div className="col">
          <h5>29,875</h5>
          <p>Total investment</p>
        </div>

        <div className="col">
          <h5>31,428</h5>
          <p>Current value</p>
        </div>

        <div className="col">
          <h5 className="profit">1,553 (+5.20%)</h5>
          <p>P&L</p>
        </div>
      </div>

      <h3 className="title">Portfolio Chart</h3>

<div style={{ width: "100%", height: 300 }}>
  <ResponsiveContainer>
    <BarChart data={chartData}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="value" />
    </BarChart>
  </ResponsiveContainer>
</div>
    </>
  );
};

export default Holdings;