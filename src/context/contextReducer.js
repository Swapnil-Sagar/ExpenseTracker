// Reduer => a function that takes the old state and action and returns a new state

import { StarRateOutlined } from "@material-ui/icons";

const contextReducer = (state, action) => {
  let transactions;

  switch (action.type) {
    case "DELETE_TRANSACTION":
      transactions = state.filter((t) => t.id !== action.payload);

      return transactions;
    case "ADD_TRANSACTION":
      transactions = [action.payload, ...state];

      return transactions;
    default:
      return state;
  }
};

export default contextReducer;
