import { GET_PRODUCTS, GET_PRODUCT } from "../constants";

const initialState = {
  list: [],
  selected: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return { ...state, list: action.products };
    case GET_PRODUCT:
      return { ...state, selected: action.product };
    default:
      return state;
  }
};
