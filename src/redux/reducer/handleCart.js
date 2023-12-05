const number = 0;

const handleCart = (state = number, action) => {
  switch (action.type) {
    case "ADDITEM":
      // Check if product already in cart
      state += 1;
      return state;

    case "DELITEM":
      state -= 1;
      return state;

    default:
      return state;
  }
};

export default handleCart;
