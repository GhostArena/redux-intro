import React from "react";
import Welcome from "./Welcome";
import DisplayBalance from "../features/account/DisplayBalance";
import CreateCustomer from "../features/customer/CreateCustomer";
import { useSelector } from "react-redux";

const Bank = () => {
  const fullName = useSelector((state) => state.customer.fullName);
  return (
    <div>
      <div className="header">
        <div className="header-text">
          <h1>🏦 The React-Redux Bank ⚛️</h1>
        </div>
        <DisplayBalance />
      </div>
      <div>{!fullName ? <CreateCustomer /> : <Welcome />}</div>
    </div>
  );
};

export default Bank;
