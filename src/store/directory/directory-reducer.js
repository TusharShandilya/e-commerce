import { apiStatus } from "../../config/constants";
import { DirectoryActionTypes as actions } from "./directory-types";
import { populateCategories } from "./directory-utils";

// @params error: string | null

const initialState = {
  categories: [],
  status: apiStatus.IDLE,
  error: null,
};

export const directoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_CATEGORIES_LOAD:
      return {
        ...state,
        status: apiStatus.LOADING,
      };
    case actions.GET_CATEGORIES_SUCCESS:
      return {
        ...state,
        status: apiStatus.SUCCESS,
        categories: populateCategories(action.payload),
      };
    case actions.GET_CATEGORIES_ERROR:
      return {
        ...state,
        status: apiStatus.ERROR,
        error: action.payload,
      };
    default:
      return state;
  }
};
