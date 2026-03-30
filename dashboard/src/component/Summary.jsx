import React from "react";

const Summary = () => {
  return (
    <>
      <div className="username">
        <h6>Hi, User!</h6>
        <hr className="divider" />
      </div>

      <div className="section">
        <p>Equity</p>

        <div className="data">
          <div className="first">
            <h3>3.74k</h3>
            <p>Margin available</p>
          </div>
        </div>
      </div>

      <div className="section">
        <p>Holdings</p>

        <div className="data">
          <div className="first">
            <h3 className="profit">1.55k</h3>
            <p>P&L</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Summary;