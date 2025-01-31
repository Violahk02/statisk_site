// TEST af Array:

// const mitArray = ["Peter", "Troels", "Keld"];
// Square brackets er et array, som er en liste der indeholder flere værdier.

// const nytArray = mitArray.map((navn) => `<li>${navn}</li>`).join("");
// når der tilføjes join til sidst, kaldes det en methodchain
// tager fat i constanten mitArray, og kommer det i consolelog, så navnet det bliver vist.
// nytarray, mitarray og string kan navngives som man vil. Kunne i dette tilfælde også være personer.

// console.log(nytArray);

// document.querySelector("ul").innerHTML = nytArray;

// nytArray.join();

// const string = nytArray.join();

// console.log(string);

// document.querySelector("ul").innerHTML = string;
// Laver listen om til en tekst string, som kommer det ind i html'en

let product_list_container = document.querySelector(".product_list_container");

fetch(`https://kea-alt-del.dk/t7/api/products/`)
  // linker til json fil - Med data for produkterne.
  .then((response) => response.json())
  .then((data) => showList(data));

function showList(products) {
  console.log(products);
  let markup = "";
  products
    .map((product) => {
      markup += `<a href="produkt.html" class="produkt">
          <div>
            <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="puma_taske" />
            <div class="info">
              <p><strong>${product.brandname}</strong></p>
              <p>${product.productdisplayname}</p>
              <p><strong>DKK ${product.price},-</strong></p>
            </div>
          </div>
        </a>`;
    })
    .join("");
  console.log(markup);
  product_list_container.innerHTML = markup;
}

{
  /* <a href="produkt.html" class="produkt">
  <div class="discount">
    <img src="billeder/track_jacket2.webp" alt="track_jacket2" />
    <p>-49%</p>
  </div>
  <div>
    <div class="info">
      <p>
        <strong>${product.brandname}</strong>
      </p>
      <p>${product.productdisplayname}</p>
      <p>
        <strong> DKK ${product.price},-</strong>
      </p>
    </div>
  </div>
</a>; */
}
