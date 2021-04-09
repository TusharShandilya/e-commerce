import { config } from "../env";

const service = {
  products: "/products",
};

export const allCategoriesEndpoint = () => {
  return config.endpoint + service.products + "/categories";
};

export const getAllProductsEndpoint = () => {
  return config.endpoint + service.products;
};

export const getCategoryProductsEndpoint = (category) => {
  return config.endpoint + service.products + "/category/" + category;
};
