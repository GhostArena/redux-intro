import React from "react";
import { useSelector } from "react-redux";

const Customer = () => {
  const customer = useSelector((store) => store.customer.fullName);

  return (
    <div className="header-text">
      <h1>Welcome, {customer}</h1>
      <h3>Your account operations</h3>
    </div>
  );
};

export default Customer;
