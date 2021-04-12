import axios from "axios";
import {
  allCategoriesEndpoint,
  getAllProductsEndpoint,
  getCategoryProductsEndpoint,
  getSingleProductEndpoint,
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

export const getSingleProduct = async (productID) => {
  const result = await axios.get(getSingleProductEndpoint(productID));

  //   TODO: implement negative scenarios
  return {
    ok: true,
    data: result.data,
  };
};
