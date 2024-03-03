import { addToCart } from "./cart.mjs";
const singleProduct = JSON.parse(localStorage.getItem("productSpecific"));

function genHtmlSingleProd(singleProduct) {
  const productSpecContainer = document.querySelector("product-spec-container");
  const spesPrImg = document.querySelector(".spes-pr-img");
  spesPrImg.src = singleProduct.image.url;
  const productTtlSingle = document.querySelector(".product-ttl-single");
  productTtlSingle.textContent = singleProduct.title;
  const productTxtSpes = document.querySelector("#product-txt-spes");
  productTxtSpes.textContent = singleProduct.description;
  const productSpecificPrice = document.querySelector(
    "#product-specific-price"
  );
  productSpecificPrice.textContent = `${singleProduct.price} NOK`;
  const addToCartBtn = document.querySelector("#add-to-cart-btn");
  addToCartBtn.addEventListener("click", () => {
    addToCart(singleProduct);
    location.href = "checkout-page.html";
    console.log("dabadaba dou");
  });
}
genHtmlSingleProd(singleProduct);
