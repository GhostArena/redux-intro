import { createStore } from "redux";

const initialState = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};

const reducer = (state = initialState, action) => {
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

const store = createStore(reducer);

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
