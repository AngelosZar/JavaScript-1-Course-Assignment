"use strict";
// Fetch api
import { baseApiUrl } from "./common.mjs";
import { rainyProdEndPoints } from "./common.mjs";
import { doFetchData } from "./common.mjs";
import { createCart } from "./cart.mjs";
import { addToCart } from "./cart.mjs";

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
// Filter all data again
async function filteredAllGender() {
  const { data: rainCoats } = await doFetchData(rainyProdEndPoints);
  const container = document.querySelector("#display-container");
  container.innerHTML = "";
  const displayContainer = "";
  const filteredData = rainCoats.data;
  toFilterData(filteredData);
}

// 1. all products
const allProductsFilter_btn = document.querySelector("#all-prod");
allProductsFilter_btn.classList.add("primary-button");
allProductsFilter_btn.addEventListener("click", () => {
  filteredAllGender();
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

// Generate html
function genProdHtml(raincoat) {
  //    ------- variables -------
  const prodCardContainer = document.createElement("div");
  const productCard = document.createElement("div");
  productCard.addEventListener("click", function (p) {
    SeeProductSpecific(raincoat);
  });
  const imgContForCard = document.createElement("div");
  const textContainer = document.createElement("div");
  const productTtl = document.createElement("p");
  productTtl.style.fontSize = "1.8rem";
  productTtl.style.margin = "10px";
  const productDescription = document.createElement("p");
  const productPrice = document.createElement("p");
  productPrice.style.margin = "10px";
  //    ------- button add to cart -------
  const buyItem = document.createElement("button");
  buyItem.classList.add("buyProdButton");
  buyItem.textContent = "Add to cart ";
  buyItem.addEventListener("click", (button) => {
    addToCart(raincoat);
    // How to stop propogation
    button.stopImmediatePropagation();
  });
  const productImg = document.createElement("img");
  productImg.src = raincoat.image.url;
  productImg.classList.add();
  //       ------- declaration from api -------
  productTtl.textContent = raincoat.title;
  productDescription.textContent = raincoat.description;
  productPrice.textContent = `${raincoat.price} Kr`;
  //       ------- styles/classes and ids -------
  prodCardContainer.classList.add("#content-container");
  productCard.classList.add("card");
  imgContForCard.classList.add("card-image");
  textContainer.classList.add("card-text-field");
  productDescription.classList.add("product-txt");
  productTtl.classList.add("product-ttl");
  productPrice.classList.add("product-price");
  //       ------- append and return -------
  imgContForCard.append(productImg);
  textContainer.append(productTtl, productDescription, productPrice, buyItem);
  productCard.append(imgContForCard, textContainer);
  return productCard;
}

// Function to get the specific product
export function SeeProductSpecific(raincoat) {
  localStorage.setItem("productSpecific", JSON.stringify(raincoat));
  location.href = "/html/a-jacket-spesific.html";
}

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
