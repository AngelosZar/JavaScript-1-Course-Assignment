import { addToCart } from "./cart.mjs";

const singleProductView = JSON.parse(localStorage.getItem("singleProduct"));
console.log(singleProductView);
// //
// //
// //
function displaySingleProduct() {
  const productWraper = document.querySelector(".product-spec-container");
  const singleProdCard = generateSingleCardHtml(singleProductView);
  productWraper.append(singleProdCard);
  console.log("display function is ok");
}
// displaySingleProduct(singleProductView);
function generateSingleCardHtml(singleProductView) {
  const prodOverwiew = document.querySelector(".product-spec-container");
  const prodCard = `
  <div class="card-image">
  <img class="spes-pr-img" src="${singleProductView.productImgSpes}" alt="" />
</div>
<div id="product-ttl-spes">
  <h3 class="product-ttl-single">${singleProductView.title}</h3>
  <div id="product-ttl-spes" class="product-txt spesific">${singleProductView.productDescription}</div>
  <div class="material-logos">
    <ul>
      <li>
        <img
          src="../all_Logos/fabric-material/Mask group.png"
          alt="waterproof"
        />
      </li>
      <li>
        <img
          src="../all_Logos/fabric-material/Windproof.png"
          alt="windproof"
        />
      </li>
      <li>
        <img
          src="../all_Logos/fabric-material/Snow resistant.png"
          alt="snow resistant"
        />
      </li>
      <li>
        <img
          src="../all_Logos/fabric-material/feathers.png"
          alt="filled with feathers"
        />
      </li>
      <li>
        <img
          src="../all_Logos/fabric-material/breathable-material.png"
          alt="built with breathable material"
        />
      </li>
    </ul>
    <div class="prod-info-spes">
      <h6 id="product-specific-price"> ${singleProductView.productPriceSpes}</h6>
      <p class="red-text">Only a few items left</p>
      <div>
        <form action="selected-prod-size" method="post">
          <select
            name="product-size"
            id="product-size"
            class="primary-button"
          >
            <div class="size-selector">
              <option value="product-size">Select Size</option>
              <option value="product-size">X-Small</option>
              <option value="product-size">Small</option>
              <option value="product-size">Medium</option>
              <option value="product-size">Large</option>
              <option value="product-size">X-Large</option>
            </div>
          </select>
        </form>
      </div>
        <button
          onclick = "addtocart()"
          class="primary-button"
          id="add-to-cart-btn">
          Add to cart
        </button>
  </div>
</div>`;
  // test 1

  // test 2
  // buttonCart.addEventListener("click", addToCart());
  //  good here
  prodOverwiew.innerHTML = prodCard;
  console.log("display function is ok");
  console.log(singleProductView);
  const buttonCart = document.querySelector("#add-to-cart-btn");
  buttonCart.addEventListener("click", addToCart(singleProductView));
}
displaySingleProduct();

// <form action="selected-size-add-2cart" method="post">
// // fix me  fix me  fix me  fix me  fix me fix me  fix me  fix me  fix me fix me
//   <button
//     type="button"
//     // fix me  fix me  fix me  fix me  fix me fix me  fix me  fix me  fix me fix me
//     (onclick = "addtocart()"
//     class="primary-button"
//     id="add-to-cart-btn">
//     Add to cart
//   </button>
// </form>
