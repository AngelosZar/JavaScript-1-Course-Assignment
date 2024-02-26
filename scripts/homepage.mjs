"use strict";
// Fetch api
import { baseApiUrl } from "./common.mjs";
import { rainyProdEndPoints } from "./common.mjs";
import { doFetchData } from "./common.mjs";
import { addToCart } from "./cart.mjs";
import { createCart } from "./cart.mjs";
// Create html for product cards
// Display the generated cards
// Create a cart / local storage
// function add to cart
// function delete from cart
// empty the cart
// Generate HTML /nest it in display html function
//
function genProdHtml(raincoat) {
  //    ------- variables -------
  const prodCardContainer = document.createElement("section");
  const productCard = document.createElement("div");
  const imgContForCard = document.createElement("div");
  const textContainer = document.createElement("div");
  const productTtl = document.createElement("p");
  const productDescription = document.createElement("p");
  const productPrice = document.createElement("p");
  //    ------- button add to cart -------
  const buyItem = document.createElement("button");
  buyItem.classList.add("buyProdButton");
  buyItem.textContent = "Add to cart ";
  buyItem.addEventListener("click", () => {
    console.log("id", raincoat.id);
    addToCart(raincoat);
  });
  //                  insert image how?
  const productImg = document.createElement("img");
  // how to get the image????
  productImg.src = raincoat.image.url;
  // productImg.src = raincoat.image.url;
  //       ------- declaration from api -------
  // delete the Rainy days from the title
  productTtl.textContent = raincoat.title;
  productDescription.textContent = raincoat.description;
  // Change the int of price to num
  productPrice.textContent = raincoat.price;
  //       ------- styles/classes and ids -------
  prodCardContainer.classList.add("content-container");
  productCard.classList.add("card");
  imgContForCard.classList.add("card-image");
  textContainer.classList.add("card-text-field");
  productDescription.classList.add("product-txt");
  productTtl.classList.add("product-ttl");
  productPrice.classList.add("product-price");
  //       ------- append and return -------

  // if appending is correct like nesting on the original html?
  textContainer.append(productTtl, productDescription, productPrice, buyItem);
  productCard.append(imgContForCard, textContainer);
  prodCardContainer.append(productCard);
  return prodCardContainer;
}
// Display html to the DOM
function displayRainCoatsLi(rainCoats) {
  const displayContainer = document.querySelector("#display-container");
  rainCoats.data.forEach((rainCoat) => {
    const ProdHtml = genProdHtml(rainCoat);
    displayContainer.appendChild(ProdHtml);
  });
}

// filter products by three categories
// 1. all products
// 2. For him
// 3. For Her

// Initialize the site
async function init() {
  createCart();
  try {
    const { data: rainCoats } = await doFetchData(rainyProdEndPoints);
    // const rainCoats = { data: rainCoats }.data;
    displayRainCoatsLi(rainCoats);
  } catch (error) {
    console.error();
  }
}
init();
