import React from "react";

const Welcome = () => {
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
      </div>
    </section>
  );
};

export default Welcome;

const Deposit = () => {
  return (
    <div className="form-items">
      <label>Deposit</label>
      <input type="text" />
      <select>
        <option>US Dollars</option>
      </select>
      <button>Deposit</button>
    </div>
  );
};

const Withdraw = () => {
  return (
    <div className="form-items">
      <label>Withdraw</label>
      <input type="text" />
      <button>Withdraw</button>
    </div>
  );
};

const RequestLoan = () => {
  return (
    <div className="form-items">
      <label>Request Loan</label>
      <input type="text" placeholder="Loan amount" />
      <input type="text" placeholder="Loan purpose" />
      <button>Withdraw</button>
    </div>
  );
};
