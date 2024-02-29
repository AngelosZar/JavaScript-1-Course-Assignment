//
import { createCart, emptyCart, addToCart, deleteFromCart } from "./cart.mjs";
import { formatCurrency } from "./common.mjs";
//

//
function genHtmlCartProd(raincoat) {
  //displayCartContainer
  const singleCartCard = document.createElement("div");
  singleCartCard.classList.add("single-cart-cart-cont");
  const productImgsCont = document.createElement("div");
  // productImgsCont.classList.add("check-outbox");
  const productImgs = document.createElement("img");
  productImgs.src = raincoat.image.url;
  productImgs.classList.add("check-outbox");
  //      product info
  const singleCartInfo = document.createElement("div");
  const singleCartProdTitle = document.createElement("p");
  singleCartProdTitle.textContent = raincoat.title;
  const singleCartProdPrice = document.createElement("p");
  singleCartProdPrice.textContent = `${raincoat.price} Kr`;
  const singleCartProdQuantity = document.createElement("p");
  singleCartProdQuantity.textContent = `${raincoat.quantity} Items`;
  const singleCartProdPriceTotal = document.createElement("p");
  // formatCurrency not working??
  singleCartProdPriceTotal.textContent = `Total ${
    raincoat.price * raincoat.quantity
  }`;
  //    increase and decrease buttons
  const increace_decrease_div = document.createElement("div");
  const increase_btn = document.createElement("button");
  increase_btn.textContent = "+";
  increase_btn.addEventListener("click", () => {
    addToCart(raincoat);
    displayCartProd();
    cartSum();
  });
  const decrease_btn = document.createElement("button");
  decrease_btn.textContent = "-";
  decrease_btn.addEventListener("click", () => {
    console.log("decrease button");
    deleteFromCart(raincoat);
    displayCartProd();
    cartSum();
  });

  increace_decrease_div.append(increase_btn, decrease_btn);

  productImgsCont.append(productImgs);
  singleCartInfo.append(
    singleCartProdTitle,
    singleCartProdPrice,
    singleCartProdQuantity,
    singleCartProdPriceTotal,
    increace_decrease_div
  );
  singleCartCard.append(productImgsCont, singleCartInfo);
  return singleCartCard;
}
//

const cartCalculations = document.querySelector("#cartCalculations");
const cartSubtotal = document.querySelector("#cart-subtotal");
const cartTotal = document.querySelector("#cart-total");
const emptyCart_btn = document.querySelector("#empty-cart-btn");
emptyCart_btn.addEventListener("click", () => {
  emptyCart();
  // empty button is not refreshing ....
});

export function displayCartProd() {
  const displayCartContainer = document.querySelector("#cartCont");
  displayCartContainer.textContent = "";
  const cart = JSON.parse(localStorage.getItem("cart"));
  // if (!cart){
  //     return null ?or image empty card
  // }
  cart.forEach((raincoat) => {
    const cartCardhtml = genHtmlCartProd(raincoat);
    displayCartContainer.appendChild(cartCardhtml);
    // console.log("cart", cart);
  });
}

//
export function cartSum() {
  const cart = JSON.parse(localStorage.getItem("cart"));
  const TotalNumOfProdInCart = cart.reduce((total, product) => {
    total += product.price * product.quantity;
    console.log(total);
    // return formatCurrency(total);
    return total;
  }, 0);
  console.log(TotalNumOfProdInCart);
  cartSubtotal.textContent = TotalNumOfProdInCart;
  cartTotal.textContent = TotalNumOfProdInCart;
  return TotalNumOfProdInCart;
}

function initCheckoutpage() {
  displayCartProd();
  cartSum();
}
initCheckoutpage();
