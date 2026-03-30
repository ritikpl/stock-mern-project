import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Buymodel.css"; // same CSS use kar

const SellModal = ({ isOpen, onClose, stockName }) => {
  const [qty, setQty] = useState(1);
  const [price, setPrice] = useState(0);

  useEffect(() => {
    if (isOpen) {
      setQty(1);
      setPrice(0);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSell = async () => {
    if (!stockName) return alert("Stock missing ❌");

    try {
      const payload = {
        name: stockName,
        qty: Number(qty),
        price: Number(price),
        mode: "SELL", // 🔥 IMPORTANT
        total: qty * price
      };



      await axios.post("http://localhost:3002/newOrder", 
        payload
        );

      alert("Sell Order Placed ✅");
      onClose();
    } catch (err) {
      console.log(err);
      alert("Error ❌");
    }
  };

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={(e)=>e.stopPropagation()}>
        <h3>Sell {stockName}</h3>

        <input
          type="number"
          value={qty}
          onChange={(e)=>setQty(e.target.value)}
        />

        <input
          type="number"
          value={price}
          onChange={(e)=>setPrice(e.target.value)}
        />

        <p>Total: ₹{qty * price}</p>

        <div className="btns">
          <button className="sell-btn" onClick={handleSell}>
            Sell
          </button>

          <button className="cancel-btn" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default SellModal;