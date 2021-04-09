import { apiStatus } from "../../config/constants";
import { ShopActionTypes as actions } from "./shop-types";

const initialState = {
  products: [],
  status: apiStatus.IDLE,
  error: null,
};

export const shopReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_PRODUCT_LOAD:
      return { ...state, status: apiStatus.LOADING };
    case actions.GET_PRODUCT_SUCCESS:
      return { ...state, status: apiStatus.SUCCESS, products: action.payload };
    case actions.GET_PRODUCT_ERROR:
      return { ...state, status: apiStatus.ERROR, error: action.payload };
    default:
      return state;
  }
};
