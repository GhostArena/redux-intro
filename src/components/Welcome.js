import React from "react";
import AccountOperations from "../features/account/AccountOperations";
import Customer from "../features/customer/Customer";

const Welcome = () => {
  return (
    <section>
      <div className="header">
        <Customer />
      </div>
      <div className="">
        <AccountOperations />
      </div>
    </section>
  );
};

export default Welcome;
