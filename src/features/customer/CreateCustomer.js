import React from "react";

const CreateCustomer = () => {
  return (
    <form>
      <h3>Create new customer</h3>
      <div className="form-component">
        <label>Customer full name</label>
        <input type="text" />
      </div>
      <div className="form-component">
        <label>National ID</label>
        <input type="text" />
      </div>
      <div>
        <button>CREATE NEW CUSTOMER</button>
      </div>
    </form>
  );
};

export default CreateCustomer;
