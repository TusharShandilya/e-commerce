import { DirectoryActionTypes as action } from "./directory-types";
import { getAllCategories } from "../../api/axios";
import { apiStatus } from "../../config/constants";

const storeCategories = (status, payload) => {
  switch (status) {
    case apiStatus.LOADING:
      return { type: action.GET_CATEGORIES_LOAD };
    case apiStatus.SUCCESS:
      return { type: action.GET_CATEGORIES_SUCCESS, payload };
    case apiStatus.ERROR:
      return { type: action.GET_CATEGORIES_ERROR, payload };
    default:
      return { type: action.GET_CATEGORIES_IDLE };
  }
};

export const getCategories = () => {
  return async (dispatch) => {
    dispatch(storeCategories(apiStatus.LOADING));
    const res = await getAllCategories();

    if (res.ok) {
      dispatch(storeCategories(apiStatus.SUCCESS, res.data));
    } else {
      dispatch(storeCategories(apiStatus.ERROR, res.error));
    }
  };
};
