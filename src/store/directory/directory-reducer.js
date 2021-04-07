import { DirectoryActionTypes } from "./directory-types";
import { populateCategories } from "./directory-utils";

const initalState = {
  categories: [],
};

export const directoryReducer = (state = initalState, action) => {
  switch (action.type) {
    case DirectoryActionTypes.GET_CATEGORIES:
      return {
        ...state,
        categories: populateCategories(action.payload),
      };
    default:
      return state;
  }
};
