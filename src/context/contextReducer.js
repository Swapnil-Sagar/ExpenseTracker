// Reduer => a function that takes the old state and action and returns a new state

import { StarRateOutlined } from "@material-ui/icons";

const contextReducer = (state, action) => {
  let transactions;

  switch (action.type) {
    case "DELETE_TRANSACTION":
      transactions = state.filter((t) => t.id !== action.payload);

      localStorage.setItem("transactions", JSON.stringify(transactions));

      return transactions;
    case "ADD_TRANSACTION":
      transactions = [action.payload, ...state];

      localStorage.setItem("transactions", JSON.stringify(transactions));

      return transactions;
    default:
      return state;
  }
};

export default contextReducer;
