//
import {
  createCart,
  getTheCart,
  emptyCart,
  addToCart,
  //   removeFromCart,
} from "./cart.mjs";
import { formatCurrency } from "./common.mjs";
//
const emptyCart_btn = document.querySelector("#empty-cart-btn");
emptyCart_btn.addEventListener("click", () => {
  emptyCart();
});
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
  singleCartProdPriceTotal.textContent = `Total ${formatCurrency(
    raincoat.price * raincoat.quantity
  )}`;
  //    increase and decrease buttons
  const increace_decrease_div = document.createElement("div");
  const increase_btn = document.createElement("button");
  increase_btn.textContent = "+";
  increase_btn.addEventListener("click", () => {
    addToCart(raincoat);
    displayCartProd();
  });
  const decrease_btn = document.createElement("button");
  decrease_btn.textContent = "-";
  decrease_btn.addEventListener("click", () => {
    console.log("decrease button");
    // removeFromCart();
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
//
function displayCartProd() {
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

function initCheckoutpage() {
  displayCartProd();
  console.log("kinda working");
  //   //   renderCart();
}
initCheckoutpage();
//
