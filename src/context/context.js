import React, { useReducer, createContext } from "react";

import contextReducer from "./contextReducer";

const initialState = JSON.parse(localStorage.getItem("transactions")) || [
  [
    {
      amount: 2000,
      category: "Travel",
      type: "Expense",
      date: "2020-12-29",
      id: "29ed54ca-e22b-4df3-8b36-889c958994af",
    },
    {
      amount: 10000,
      category: "Salary",
      type: "Income",
      date: "2020-12-21",
      id: "9a14eff7-c9d1-43e6-94ed-9e7106cb42e3",
    },
  ],
];

export const ExpenseTrackerContext = createContext(initialState);

export const Provider = ({ children }) => {
  const [transactions, dispatch] = useReducer(contextReducer, initialState);

  //Action Creaters
  const deleteTransaction = (id) =>
    dispatch({ type: "DELETE_TRANSACTION", payload: id });
  const addTransaction = (transaction) =>
    dispatch({ type: "ADD_TRANSACTION", payload: transaction });

  const balance = transactions.reduce(
    (acc, currVal) =>
      currVal.type === "Expense" ? acc - currVal.amount : acc + currVal.amount,
    0
  );
  //   console.log(transactions);

  return (
    <ExpenseTrackerContext.Provider
      value={{
        deleteTransaction,
        addTransaction,
        transactions,
        balance,
      }}
    >
      {children}
    </ExpenseTrackerContext.Provider>
  );
};
