const singleProductView = JSON.parse(localStorage.getItem("singleProduct"));
console.log(singleProductView);
//
//
//
function displayProdSpecific() {
  const productSpecContainer = document.querySelector("product-spec-container");
  singleProductView.forEach(function (singleProduct) {
    const singleProdCard = genHtmlCartProd(singleProduct);
    productSpecContainer.append(singleProdCard);
  });
}
function genHtmlCartProd() {
  console.log(singleProductView);
  const prodOverwiew = document.querySelector("product-spec-container");
  const prodCard = `<div class="card-image spes-pr-img">
    <img src="${productImgSpes.url}" alt="" />
  </div>
  <div id="product-ttl-spes">
    <h3 class="product-ttl-single">${title}</h3>
    <div id="product-ttl-spes" class="product-txt spesific">${productDescription}</div>
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
        <h6 id="${productPriceSpes}"></h6>
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
      </div>
      <a href="../html.files/checkout-page.html">
        <form action="selected-size-add-2cart" method="post">
          <button
            type="button"
            class="primary-button"
            id="add-to-cart-btn"
          >
            Add to cart
          </button>
        </form>
      </a>
    </div>
  </div>
    `;
  prodOverwiew.innerHTML = prodCard;
}
displayProdSpecific(singleProductView);

// function genProdHtml() {
//   const divContainer = document.querySelector(".product-spec-container");
//   const image = document.querySelector(".spes-pr-img");
//   image.src = productImgSpes;
//   const productTtlSingle = document.querySelector("product-ttl-single");
//   // appending items
//   divContainer.append(image, productTtlSingle);
//   return div
// }
// genProdHtml();
