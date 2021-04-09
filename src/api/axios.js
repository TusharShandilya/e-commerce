import axios from "axios";
import {
  allCategoriesEndpoint,
  getAllProductsEndpoint,
  getCategoryProductsEndpoint,
} from "./routes";

export const getAllCategories = async () => {
  const result = await axios.get(allCategoriesEndpoint());

  //   TODO: implement negative scenarios
  return {
    ok: true,
    data: result.data,
  };
};

export const getAllProducts = async () => {
  const result = await axios.get(getAllProductsEndpoint());

  //   TODO: implement negative scenarios
  return {
    ok: true,
    data: result.data,
  };
};

export const getCategoryProducts = async (category) => {
  const result = await axios.get(getCategoryProductsEndpoint(category));

  //   TODO: implement negative scenarios
  return {
    ok: true,
    data: result.data,
  };
};
