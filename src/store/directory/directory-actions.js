import { DirectoryActionTypes } from "./directory-types";
import { getAllCategories } from "../../api/axios";

const storeCategories = (payload) => ({
  type: DirectoryActionTypes.GET_CATEGORIES,
  payload,
});

export const getCategories = () => {
  return async (dispatch) => {
    const res = await getAllCategories();
    if (res.ok) {
      dispatch(storeCategories(res.data));
    }
  };
};
