import { randomMockImage } from "../../config/_mock-data";

export const populateCategories = (categories) => {
  return categories.map((category) => ({
    title: category,
    linkUrl: category,
    imageUrl: randomMockImage(),
  }));
};
