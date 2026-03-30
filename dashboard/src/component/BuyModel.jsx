import React, { useState, useEffect } from "react";
import "./Buymodel.css";
import axios from "axios";

const BuyModal = ({ isOpen, onClose, stockName }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0);

  // 🔥 modal open hote hi reset kare
  useEffect(() => {
    if (isOpen) {
      setStockQuantity(1);
      setStockPrice(0);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleBuyClick = async () => {
    // ❌ validation
    if (!stockName) {
      alert("Stock name missing ❌");
      return;
    }

    if (stockQuantity <= 0 || stockPrice <= 0) {
      alert("Enter valid qty & price ❌");
      return;
    }

    try {
      const payload = {
        name: stockName,
        qty: Number(stockQuantity),
        price: Number(stockPrice),
        mode: "BUY",
        
      };

      const res = await axios.post(
        "http://localhost:3002/newOrder",
        payload
      );

      console.log("Order Saved:", res.data);

      alert("Order Placed ✅");

      onClose();
    } catch (err) {
      console.error("ERROR 👉", err.response?.data || err.message);
      alert("Error placing order ❌");
    }
  };

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h3>Buy {stockName || "Stock"}</h3>

        <input
          type="number"
          placeholder="Qty"
          value={stockQuantity}
          onChange={(e) => setStockQuantity(e.target.value)}
        />

        <input
          type="number"
          placeholder="Price"
          value={stockPrice}
          onChange={(e) => setStockPrice(e.target.value)}
        />

        <p>Total: ₹{stockQuantity * stockPrice}</p>

        <div className="btns">
          <button className="buy-btn" onClick={handleBuyClick}>
            Buy
          </button>

          <button className="cancel-btn" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuyModal;