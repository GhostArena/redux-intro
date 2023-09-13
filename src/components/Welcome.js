import React from "react";
import AccountOperations from "../features/account/AccountOperations";

const Welcome = () => {
  const { Deposit, Withdraw, RequestLoan, PayLoan } = AccountOperations;
  return (
    <section>
      <div className="header">
        <div className="header-text">
          <h1>Welcome %Name%</h1>
          <h3>Your account operations</h3>
        </div>
      </div>
      <div className="form">
        <Deposit />
        <Withdraw />
        <RequestLoan />
        <PayLoan />
      </div>
    </section>
  );
};

export default Welcome;
