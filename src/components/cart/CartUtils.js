export const getCart = () => {
  const cartString = localStorage.getItem("cart");
  return cartString ? JSON.parse(cartString) : [];
};

export const addToCart = (product) => {
  const cart = getCart();
  const existingProductIndex = cart.findIndex(
    (existingProduct) => existingProduct.id === product.id
  );

  if (existingProductIndex !== -1) {
    cart[existingProductIndex].quantity += product.quantity || 1;
  } else {
    const updatedCart = [...cart, product];
    saveCart(updatedCart);
    return updatedCart;
  }

  saveCart(cart);

  return cart;
};

export const saveCart = (cart) => {
  localStorage.setItem("cart", JSON.stringify(cart));
};

export const removeFromCart = (productId) => {
  console.log(productId);
  const cart = getCart();
  const updatedCart = cart.filter((product) => product.id !== productId);
  console.log(updatedCart);
  saveCart(updatedCart);
  return updatedCart;
};

export const getTotalQuantityInCart = () => {
  const cart = getCart();
  const uniqueProductIds = new Set(cart.map((product) => product.id));
  return uniqueProductIds.size;
};

export const getTotalPriceInCart = () => {
  const cart = getCart();
  const totalPrice = cart.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );
  return totalPrice;
};
