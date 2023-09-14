import React from "react";
import { useSelector } from "react-redux";

const DisplayBalance = () => {
  const { balance } = useSelector((store) => store.account);

  return (
    <div className="money">
      <h1>${balance}</h1>
    </div>
  );
};

export default DisplayBalance;
