export function addToCart(id: String) {
  // add this item to cart
}

export function removeFromCart(id: String) {
  // remove this item from cart
  let currentCart = localStorage.getItem("cart");
  let itemArray = currentCart?.split(",");
  let updatedArray = itemArray?.filter((i) => {
    i === id;
  });
  console.log(updatedArray);
}

export function emptyCart() {
  // Remove everything from cart
  localStorage.clear();
}

export function getCart() {
  // return whole cart
  const cart = localStorage.getItem("cart");
  return cart;
}
