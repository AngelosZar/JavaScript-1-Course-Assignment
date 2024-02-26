// //
// function genHtmlCartProd() {}
// //
// //
// function displayCartProd() {
//   displayCartProd = document.querySelector("#cartCont");
//   const cart = JSON.parse(localStorage.getItem("cart"));
//   cart.forEach((currentProd) => {
//     const productCard = genHtmlCartProd(raincoat);
//     displayCartProd.appendChild(productCard);
//   });
//   console.log("cart", cart);
//   console.log("working here as weel ");
// }
// function initCheckoutpage() {
//   console.log("kinda working");
//   //   renderCart();
// }
// initCheckoutpage();
// displayCartProd();

//
//
function genHtmlCartProd(raincoat) {
  //displayCartContainer
  const divivi = document.createElement("div");
  const randomText = document.createElement("p");
  randomText.textContent = raincoat.price;
  const productImgs = document.createElement("img");
  productImgs.src = raincoat.image.url;
  divivi.append(randomText, productImgs);
  return divivi;
}
//
//
function displayCartProd() {
  const displayCartContainer = document.querySelector("#cartCont");
  const cart = JSON.parse(localStorage.getItem("cart"));
  // if (!cart){
  //     return null ?or image empty card
  // }
  cart.forEach((currentProd) => {
    const cartCardhtml = genHtmlCartProd(currentProd);
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
