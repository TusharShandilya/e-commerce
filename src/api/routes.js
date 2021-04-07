import { config } from "../config";

const service = {
  products: "/products",
};

export const allCategoriesEndpoint = () => {
  return config.endpoint + service.products + "/categories";
};
