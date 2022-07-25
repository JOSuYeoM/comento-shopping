const BASKET = "BASKET";

export const addBasket = (product) => {
  let basketItems = getBasketItems();

  const isSameProduct = !!basketItems.find((item) => item.id === product.id);
  if (!isSameProduct) {
    basketItems.push(product);

    localStorage.setItem(BASKET, JSON.stringify(basketItems));
  }
};

export const removeBasketItem = (productId) => {
  let basketItems = getBasketItems();
  basketItems = basketItems.filter((item) => item.id !== productId);

  localStorage.removeItem(BASKET);
  localStorage.setItem(BASKET, JSON.stringify(basketItems));
};

export const getBasketItems = () => {
  const basketItems = localStorage.getItem(BASKET);
  return basketItems ? JSON.parse(basketItems) : [];
};
