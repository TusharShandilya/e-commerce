export const populateShop = (products) => {
  console.log("PRODUCTS: ", products);

  const categories = [];
  const collection = products.reduce((acc, prod) => {
    if (prod.category in acc) {
      return { ...acc, [prod.category]: acc[prod.category].concat([prod]) };
    } else {
      categories.push(prod.category);
      return { ...acc, [prod.category]: [prod] };
    }
  }, {});

  return [collection, categories];
};
