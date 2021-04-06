import { DirectoryActionTypes } from "./directory-types";
import { getAllCategories } from "../../api/axios";

const getCategories = (payload) => ({
  type: DirectoryActionTypes.GET_CATEGORIES,
  payload,
});

export const storeCategories = () => {
  return async (dispatch) => {
    const res = await getAllCategories();
    if (res.ok) {
      dispatch(getCategories(res.data));
    }
  };
};
