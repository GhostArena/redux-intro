import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deposit, payLoan, requestLoan, withdraw } from "./accountSlice";

const AccountOperations = () => {
  const [depositAmount, setDepositAmount] = useState("");
  const [currency, setCurrency] = useState("USD");
  const [withdrawalAmount, setWithdrawalAmount] = useState("");
  const [loanAmount, setLoanAmount] = useState("");
  const [loanPurpose, setLoanPurpose] = useState("");

  const dispatch = useDispatch();
  const {
    loan: currentLoan,
    loanPurpose: currentLoanPurpose,
    balance,
    isLoading,
  } = useSelector((store) => store.account);

  const handleDeposit = () => {
    if (!depositAmount) return;
    dispatch(deposit(depositAmount, currency));
    setDepositAmount("");
    setCurrency("USD");
  };

  const handleWithdrawal = () => {
    if (!withdrawalAmount) return;
    dispatch(withdraw(withdrawalAmount));
    console.log(withdrawalAmount);
  };

  const handleRequestLoan = () => {
    if (!loanAmount || !loanPurpose) return;
    dispatch(requestLoan(Number(loanAmount), loanPurpose));
    setLoanAmount("");
    setLoanPurpose("");
  };

  const handlePayLoan = () => {
    dispatch(payLoan());
  };

  return (
    <div className="form">
      <div className="form-items">
        <label>Deposit</label>
        <input
          type="number"
          value={depositAmount}
          onChange={(e) => setDepositAmount(e.target.value)}
        />
        <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
          <option value="USD">US Dollars</option>
          <option value="EUR">Euro</option>
          <option value="GBP">British Punds</option>
        </select>
        <button onClick={handleDeposit} disabled={isLoading}>
          {isLoading ? "Converting..." : `Deposit ${depositAmount}`}
        </button>
      </div>
      <div className="form-items">
        <label>Withdraw</label>
        <input
          type="number"
          value={withdrawalAmount}
          onChange={(e) => setWithdrawalAmount(e.target.value)}
        />
        <button onClick={handleWithdrawal}>Withdraw</button>
      </div>
      <div className="form-items">
        <label>Request Loan</label>
        <input
          type="number"
          placeholder="Loan amount"
          value={loanAmount}
          onChange={(e) => setLoanAmount(e.target.value)}
        />
        <input
          type="text"
          placeholder="Loan purpose"
          value={loanPurpose}
          onChange={(e) => setLoanPurpose(e.target.value)}
        />
        <button onClick={handleRequestLoan}>Request Loan</button>
      </div>
      {currentLoan > 0 && (
        <span>
          Pay back ${currentLoan} ({currentLoanPurpose})
          <button onClick={handlePayLoan}>Pay Loan</button>
        </span>
      )}
    </div>
  );
};

export default AccountOperations;
