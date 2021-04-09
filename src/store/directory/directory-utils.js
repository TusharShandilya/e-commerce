import { convertKebabCase } from "../../utils";

// TODO: get actual images in the api
const mockImg =
  "https://assets.website-files.com/5f6b5881ab7d725b7fa7f487/5f7872bcc6adaf8a8f083e07_wall%20art-p-500.png";

export const populateCategories = (categories) => {
  return categories.map((category) => ({
    title: category,
    linkUrl: convertKebabCase(category),
    imageUrl: mockImg,
  }));
};
