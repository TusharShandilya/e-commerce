import { config } from "../env";

const service = {
  products: "/products",
};

export const allCategoriesEndpoint = () => {
  return config.endpoint + service.products + "/categories";
};
