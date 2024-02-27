// Create a cart / local storage
// function add to cart
// function delete from cart
// empty the cart
// / creating cart component
// \
export function getTheCart() {
  const cart = JSON.parse(localStorage.getItem("cart"));
  return cart;
}

export function createCart() {
  // why not single quote//check if wrong
  // const cart = JSON.parse(localStorage.getItem("cart"));
  const cart = localStorage.getItem("cart");
  // console.log("cart", cart);
  if (!cart) {
    localStorage.setItem("cart", JSON.stringify([]));
  }
}

//
export function addToCart(raincoat) {
  //   const cart = getTheCart();
  console.log("added to cart", raincoat);
  const cart = JSON.parse(localStorage.getItem("cart"));
  const indexOfProd = cart.findIndex(function (currentProd) {
    console.log("currentProd");
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
  console.log("indexOfProd", indexOfProd);
  // cart.push(raincoat);
  localStorage.setItem("cart", JSON.stringify(cart));
  //   console.log(cart);
}
//
// export function removeFromCart(currentProd) {
//   //   const cart = getTheCart();
//   //   const cart = JSON.parse(localStorage.getItem("cart"));
//   console.log("Removing from cart");
//   console.log(currentProd);
// }

//
export const emptyCart = function () {
  localStorage.setItem("cart", JSON.stringify([]));
};
