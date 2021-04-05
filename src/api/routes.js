import { config } from "../config";

const service = {
  products: "/products",
};

console.log(config.endpoint);

export const allCategoriesEndpoint = () => {
  return config.endpoint + service.products + "/categories";
};
