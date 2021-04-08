import { convertKebabCase } from "../../utils";

export const populateCategories = (categories) => {
  return categories.map((category) => ({
    title: category,
    linkUrl: convertKebabCase(category),
    imageUrl: "",
  }));
};
