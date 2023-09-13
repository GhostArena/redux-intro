import React from "react";
import Welcome from "./Welcome";

const Bank = () => {
  return (
    <div>
      <div className="header">
        <div className="header-text">
          <h1>🏦 The React-Redux Bank ⚛️</h1>
          <h4>Create new customer</h4>
        </div>
        <div className="money">
          <h1>$123,456.00</h1>
        </div>
      </div>
      <div>
        <form>
          <div className="form-component">
            <label>Customer full name</label>
            <input type="text" />
          </div>
          <div className="form-component">
            <label>National ID</label>
            <input type="text" />
          </div>
          <div>
            <button>CREATE NEW CUSTOMER</button>
          </div>
        </form>
      </div>
      <Welcome />
    </div>
  );
};

export default Bank;
