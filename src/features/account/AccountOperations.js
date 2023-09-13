import React from "react";

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

const PayLoan = () => {
  return (
    <span>
      Pay back $X <button>Pay Loan</button>
    </span>
  );
};

const AccountOperations = { Deposit, Withdraw, RequestLoan,PayLoan };

export default AccountOperations;
