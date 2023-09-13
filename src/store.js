import { combineReducers, createStore } from "redux";

const initialStateAccount = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};

const initialStateCustomer = {
  fullName: "",
  nationalID: "",
  createdAt: "",
};

const accountReducer = (state = initialStateAccount, action) => {
  switch (action.type) {
    case "account/deposit":
      return { ...state, balance: state.balance + action.payload };
    case "account/withdrawal":
      return { ...state, balance: state.balance - action.payload };
    case "account/requestLoan":
      //   if (state.balance > 0) return state;
      return {
        ...state,
        balance: state.balance + action.payload.amount,
        loan: action.payload.amount,
        loanPurpose: action.payload.purpose,
      };
    case "account/payLoan":
      return {
        ...state,
        loan: 0,
        loanPurpose: "",
        balance: state.balance - state.loan,
      };

    default:
      return state;
  }
};

const customerReducer = (state = initialStateCustomer, action) => {
  switch (action.type) {
    case "customer/createCustomer":
      return {
        ...state,
        fullName: action.payload.fullName,
        nationalID: action.payload.nationalID,
        createdAt: action.payload.createdAt,
      };
    case "customer/updateName":
      return {
        ...state,
        fullName: action.payload,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});

const store = createStore(rootReducer);

// store.dispatch({ type: "account/deposit", payload: 5000 });
// console.log(store.getState());
// store.dispatch({ type: "account/withdraw", payload: 5000 });
// console.log(store.getState());
// store.dispatch({
//   type: "account/requestLoan",
//   payload: { amount: 3000, purpose: "Get Yang a cake" },
// });
// console.log(store.getState());

// store.dispatch({ type: "payLoan" });

//Action Creator Functions ⬇️

const deposit = (amount) => {
  return { type: "account/deposit", payload: amount };
};
const withdraw = (amount) => {
  return { type: "account/withdraw", payload: amount };
};
const requestLoan = (amount, purpose) => {
  return {
    type: "account/requestLoan",
    payload: { amount, purpose },
  };
};
const payLoan = () => {
  return { type: "account/payLoan" };
};

store.dispatch(deposit(5000));
store.dispatch(requestLoan(200, "To buy a house"));
store.dispatch(payLoan());
console.log(store.getState());

const createCustomer = (fullName, nationalID) => {
  return {
    type: "customer/createCustomer",
    payload: { fullName, nationalID, createdAt: new Date().toISOString() },
  };
};
const updateName = (fullName) => {
  return {
    type: "customer/updateName",
    payload: { fullName },
  };
};
