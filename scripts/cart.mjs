//  Create cart function
export function createCart() {
  const cart = localStorage.getItem("cart");
  if (!cart) {
    localStorage.setItem("cart", JSON.stringify([]));
  }
}
// Add to cart function
export function addToCart(raincoat) {
  const cart = JSON.parse(localStorage.getItem("cart"));
  const indexOfProd = cart.findIndex(function (currentProd) {
    if (raincoat.id === currentProd.id) {
      return true;
    } else {
      return false;
    }
  });
  if (indexOfProd === -1) {
    cart.push({ ...raincoat, quantity: 1 });
  } else {
    cart[indexOfProd].quantity++;
  }
  localStorage.setItem("cart", JSON.stringify(cart));
}
// Delete from cart function
export function deleteFromCart(raincoat) {
  let cart = JSON.parse(localStorage.getItem("cart"));
  const prodIdToRemove = raincoat.id;
  const idInCart = cart.findIndex((currentProduct) => {
    if (currentProduct.id === prodIdToRemove) {
      return true;
    }
    return false;
  });

  if (cart[idInCart].quantity > 1) {
    cart[idInCart].quantity -= 1;
    localStorage.setItem("cart", JSON.stringify(cart));
  } else {
    const newCart = cart.filter((_, index) => {
      if (idInCart === index) {
        return false;
      }
      return true;
    });
    localStorage.setItem("cart", JSON.stringify(newCart));
  }
}
// Empty  cart function
export const emptyCart = function () {
  localStorage.setItem("cart", JSON.stringify([]));
  location.reload();
};
