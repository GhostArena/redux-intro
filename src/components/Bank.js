import React from "react";
import Welcome from "./Welcome";
import DisplayBalance from "../features/account/DisplayBalance";
import CreateCustomer from "../features/customer/CreateCustomer";

const Bank = () => {
  return (
    <div>
      <div className="header">
        <div className="header-text">
          <h1>🏦 The React-Redux Bank ⚛️</h1>
        </div>
        <DisplayBalance />
      </div>
      <div>
        <CreateCustomer />
      </div>
      <Welcome />
    </div>
  );
};

export default Bank;
