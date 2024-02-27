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
  singleCartProdPrice.textContent = raincoat.price;
  const singleCartProdQuantity = document.createElement("p");
  singleCartProdQuantity.textContent = raincoat.quantity;
  const singleCartProdPriceTotal = document.createElement("p");
  singleCartProdPriceTotal.textContent = raincoat.price * raincoat.quantity;
  productImgsCont.append(productImgs);
  singleCartInfo.append(
    singleCartProdTitle,
    singleCartProdPrice,
    singleCartProdQuantity,
    singleCartProdPriceTotal
  );
  singleCartCard.append(productImgsCont, singleCartInfo);
  return singleCartCard;
}
//
//
function displayCartProd() {
  const displayCartContainer = document.querySelector("#cartCont");
  const cart = JSON.parse(localStorage.getItem("cart"));
  // if (!cart){
  //     return null ?or image empty card
  // }
  cart.forEach((raincoat) => {
    const cartCardhtml = genHtmlCartProd(raincoat);
    displayCartContainer.appendChild(cartCardhtml);
    console.log("cart", cart);
  });
}

function initCheckoutpage() {
  displayCartProd();
  console.log("kinda working");
  //   //   renderCart();
}
initCheckoutpage();
//
