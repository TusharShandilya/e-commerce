export const mockImages = {
  bag:
    "https://assets.website-files.com/5f6b5881ab7d725b7fa7f487/5f7884531015963ca9bb37f5_accessories-p-500.png",
  jackets:
    "https://assets.website-files.com/5f6b5881ab7d725b7fa7f487/5f78843c9f88ca6621db85f2_Clothing-p-500.png",
  frame:
    "https://assets.website-files.com/5f6b5881ab7d725b7fa7f487/5f7872bcc6adaf8a8f083e07_wall%20art-p-500.png",
};

export const randomMockImage = () => {
  const mockImageKeys = Object.keys(mockImages);

  return mockImages[
    mockImageKeys[Math.floor(Math.random() * mockImageKeys.length)]
  ];
};
