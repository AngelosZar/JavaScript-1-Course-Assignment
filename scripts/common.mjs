"use strict";
//                 .....   variables ......
export const baseApiUrl = "https://v2.api.noroff.dev";
// export const someIdToFetch = `${""}`;
export const rainyProdEndPoints = `${baseApiUrl}/rainy-days`;
// with template for url//need to create constants/vars

// fetch the api async parse with axios
export async function doFetchData(url) {
  try {
    const res = await axios.get(url);
    console.log(res);
    // return res.data;
    return res;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
}

//
// function genHtmlCartProd(raincoat) {
//   //displayCartContainer
//   const singleCartCard = document.createElement("div");
//   cartCard.classList.add("check-outbox");
//   //
//   const singleCartCardimgcDiv = document.createElement("div");
//   singleCartCardimgcDiv.classList.add;
//   const singleCartImg = document.createElement("img");
//   //
//   const singleCartInfo = document.createElement("div");
//   singleCartInfo.classList.add("check-outbox2");
//   const singleCartProdTitle = document.createElement("p");
//   singleCartProdTitle.classList.add("product-ttl");
//   const singleCartProdQuantity = document.createElement("p");
//   singleCartProdQuantity.classList.add("prodQuant");
//   const singleCartProdPrice = document.createElement("p");
//   singleCartProdPrice.classList.add("product-price");
//   const singleCartProdPriceTotal = document.createElement("p");
//   singleCartProdPriceTotal.textContent = raincoat.price * raincoat.quantity;
//   //
//   singleCartInfo.append(
//     singleCartProdTitle,
//     singleCartProdQuantity,
//     singleCartProdPrice,
//     singleCartProdPriceTotal
//   );
//   singleCartCardimgcDiv.append(singleCartImg);
//   singleCartCard.append(singleCartCardimgcDiv, singleCartInfo);
//   return singleCartCard;
//   const randomText = document.createElement("p");
//   randomText.textContent = raincoat.price;
//   const productImgs = document.createElement("img");
//   productImgs.src = raincoat.image.url;
//   divivi.append(randomText, productImgs);
//
//   return divivi;
// }
