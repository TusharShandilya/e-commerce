import { apiStatus } from "../../config/constants";
import { ShopActionTypes as actions } from "./shop-types";
import { populateShop } from "./shop-utils";

const initialState = {
  collections: {},
  allCategories: [],
  status: apiStatus.IDLE,
  error: null,
};

export const shopReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_PRODUCT_LOAD:
      return { ...state, status: apiStatus.LOADING };
    case actions.GET_PRODUCT_SUCCESS:
      const [newCollection, newCategories] = populateShop(action.payload);

      return {
        ...state,
        status: apiStatus.SUCCESS,
        collections: { ...state.collections, ...newCollection },
        allCategories: state.allCategories.concat(newCategories),
      };
    case actions.GET_PRODUCT_ERROR:
      return { ...state, status: apiStatus.ERROR, error: action.payload };
    default:
      return state;
  }
};
