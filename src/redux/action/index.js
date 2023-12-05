// For Add Item to Cart
export const addCart = () => {
  return {
    type: "ADDITEM",
  };
};

// For Delete Item to Cart
export const delCart = (product) => {
  return {
    type: "DELITEM",
  };
};
