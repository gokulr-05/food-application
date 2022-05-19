import React from "react";

let cartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  deleteItem: (id) => {},
  emptyCart: () => {},
});

export default cartContext;
