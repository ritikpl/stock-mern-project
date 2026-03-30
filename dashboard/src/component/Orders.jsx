import React, { useEffect, useState } from "react";
import axios from "axios"

const Orders = () => {
  const [orders, setOrders] = useState([]);

  
     useEffect(() => {
      axios.get("http://localhost:3002/allOrders").then((res) => {
        // console.log(res.data);
        setOrders(res.data);
      });
    }, []);

  return (
    <div>
      <h2>Orders</h2>

      <table border="1" width="100%">
        <thead>
          <tr>
            <th>Stock</th>
            <th>Qty</th>
            <th>Price</th>
            <th>Mode</th>
          </tr>
        </thead>

        <tbody>
          {orders.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.qty}</td>
              <td>{item.price}</td>
              <td>{item.mode}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Orders;
