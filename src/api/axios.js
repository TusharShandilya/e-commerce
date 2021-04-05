import axios from "axios";
import { allCategoriesEndpoint } from "./routes";

export const getAllCategoies = async () => {
  const result = await axios.get(allCategoriesEndpoint());

  //   TODO: implement negative scenarios
  return {
    ok: true,
    data: result.data,
  };
};
