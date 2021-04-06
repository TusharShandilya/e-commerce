import { DirectoryActionTypes } from "./directory-types";

const initalState = {
  categories: [],
};

export const directoryReducer = (state = initalState, action) => {
  switch (action.type) {
    case DirectoryActionTypes.GET_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      };
    default:
      return state;
  }
};
