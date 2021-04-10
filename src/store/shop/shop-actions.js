import { ShopActionTypes as action } from "./shop-types";
import { apiStatus } from "../../config/constants";
import { getAllProducts, getCategoryProducts } from "../../api/axios";
import { populateShop } from "./shop-utils";

const storeProducts = (status, payload) => {
  switch (status) {
    case apiStatus.LOADING:
      return { type: action.GET_PRODUCT_LOAD };
    case apiStatus.SUCCESS:
      return { type: action.GET_PRODUCT_SUCCESS, payload };
    case apiStatus.ERROR:
      return { type: action.GET_PRODUCT_ERROR, payload };
    default:
      return { type: action.GET_PRODUCT_IDLE };
  }
};

export const getProducts = (category) => {
  return async (dispatch) => {
    dispatch(storeProducts(apiStatus.LOADING));
    let res;
    if (!category) {
      res = await getAllProducts();
    } else {
      res = await getCategoryProducts(category);
    }

    if (res.ok) {
      dispatch(storeProducts(apiStatus.SUCCESS, res.data));
    } else {
      dispatch(storeProducts(apiStatus.ERROR, res.error));
    }
  };
};
