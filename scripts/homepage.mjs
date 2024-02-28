"use strict";
// Fetch api
import { baseApiUrl } from "./common.mjs";
import { rainyProdEndPoints } from "./common.mjs";
import { doFetchData } from "./common.mjs";
import { createCart } from "./cart.mjs";
import { addToCart } from "./cart.mjs";

// Filter Buttons
//  Filter by gender
async function filteredGender(gender) {
  const { data: rainCoats } = await doFetchData(rainyProdEndPoints);
  const container = document.querySelector("#display-container");
  container.innerHTML = "";
  const displayContainer = "";
  const filteredData = rainCoats.data.filter((theGenderThing) => {
    return theGenderThing.gender === gender;
  });
  toFilterData(filteredData);
}
//looping the data for function filteredGender
function toFilterData(filteredData) {
  const displayContainer = document.querySelector("#display-container");
  filteredData.forEach((rainCoat) => {
    const ProdHtml = genProdHtml(rainCoat);
    displayContainer.appendChild(ProdHtml);
  });
}
// 1. all products
const allProductsFilter_btn = document.querySelector("#all-prod");
allProductsFilter_btn.classList.add("primary-button");
allProductsFilter_btn.addEventListener("click", () => {
  const container = document.querySelector("#display-container");
  container.innerHTML = "";
  const displayContainer = "";
  displayRainCoatsLi();
});

// 2. For him
const forHimProductsFilter_btn = document.querySelector("#for-him");
forHimProductsFilter_btn.classList.add("primary-button");
forHimProductsFilter_btn.addEventListener("click", () => {
  filteredGender("Male");
});

// 3. For Her
const forHerProductsFilter_btn = document.querySelector("#for-her");
forHerProductsFilter_btn.classList.add("primary-button");
forHerProductsFilter_btn.addEventListener("click", () => {
  filteredGender("Female");
});

//  filtering function
// function displayRainCoatsLisTest(rainCoats) {
//   let filteredGender = "";
//   // const displayContainer = document.querySelector("#display-container");
//   const displayContainer = "";

//   const itemsForHer = rainCoats.filter((raincoat) => {
//     return raincoat.data.gender === "Female";
//   });
//   console.log(itemsForHer);
//   // .forEach((rainCoat) => {
//   //   const ProdHtml = genProdHtml(rainCoat);
//   //   displayContainer.appendChild(ProdHtml);
//   // });
// }

//        sum  cart functions
//        sum  cart functions
//
function genProdHtml(raincoat) {
  //    ------- variables -------
  // console.log(raincoat);
  const prodCardContainer = document.createElement("div");
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
    // console.log("id", raincoat.id);
    addToCart(raincoat);
  });
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
  prodCardContainer.classList.add("#content-container");
  productCard.classList.add("card");
  imgContForCard.classList.add("card-image");
  textContainer.classList.add("card-text-field");
  productDescription.classList.add("product-txt");
  productTtl.classList.add("product-ttl");
  productPrice.classList.add("product-price");
  //       ------- append and return -------

  // if appending is correct like nesting on the original html?
  imgContForCard.append(productImg);
  textContainer.append(productTtl, productDescription, productPrice, buyItem);
  productCard.append(imgContForCard, textContainer);
  prodCardContainer.append(productCard);
  return prodCardContainer;
}
//
// Display html to the DOM
function displayRainCoatsLi(rainCoats) {
  const displayContainer = document.querySelector("#display-container");
  rainCoats.data.forEach((rainCoat) => {
    const ProdHtml = genProdHtml(rainCoat);
    displayContainer.appendChild(ProdHtml);
  });
}

//
// Render homePage function
async function renderHomePage() {
  try {
    const { data: rainCoats } = await doFetchData(rainyProdEndPoints);
    // const rainCoats = { data: rainCoats }.data;
    displayRainCoatsLi(rainCoats);
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
}
//
// Initialize homePage function
async function initHomePage() {
  await renderHomePage();
  createCart();
}
// Initialize the site
//
initHomePage();
