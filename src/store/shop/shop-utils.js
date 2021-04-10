export const populateShop = (products) => {
  return products.reduce((acc, prod) => {
    if (prod.category in acc) {
      return { ...acc, [prod.category]: acc[prod.category].concat([prod]) };
    } else {
      return { [prod.category]: [prod] };
    }
  }, {});
};
