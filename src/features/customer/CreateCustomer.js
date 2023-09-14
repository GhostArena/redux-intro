import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { createCustomer } from "./customerSlice";

const CreateCustomer = () => {
  const [fullName, setFullName] = useState("");
  const [nationalID, setNationalID] = useState("");

  const dispatch = useDispatch();
  const handleClick = () => {
    if (!fullName || !nationalID) return;
    dispatch(createCustomer(fullName, nationalID));
  };

  return (
    <div className="form">
      <h3>Create new customer</h3>
      <div className="form-component">
        <label>Customer full name</label>
        <input
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
      </div>
      <div className="form-component">
        <label>National ID</label>
        <input
          type="text"
          value={nationalID}
          onChange={(e) => setNationalID(e.target.value)}
        />
      </div>
      <div>
        <button onClick={handleClick}>CREATE NEW CUSTOMER</button>
      </div>
    </div>
  );
};

export default CreateCustomer;
