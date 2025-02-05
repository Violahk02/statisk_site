const urlParams = new URLSearchParams(window.location.search);
let productId = urlParams.get("id");

let grid_2 = document.querySelector(".grid_2");

fetch(`https://kea-alt-del.dk/t7/api/products/${productId}`)
  // linker til json fil - Med data for produkterne.
  .then((response) => response.json())
  .then((data) => {
    // Tager svaret og gør det til gyldig data.
    grid_2.innerHTML = `

    <img src="https://kea-alt-del.dk/t7/images/webp/640/${productId}.webp" />
        <div class="single_discount ${!data.discount && "skjul"}">     
            <p>-${data.discount}%</p>
        </div>
        <div class="single_soldout ${!data.soldout && "skjul"}">
          <p>Sold Out</p>
        </div>
        <div class="detaljer">
          <h1>${data.brandname}</h1>
          <h2>${data.productdisplayname}</h2>
          <div>
            <p><strong>Color:</strong>Black</p>
            <p><strong>Inventory number:</strong>${data.id}</p>
          </div>

          <div class="sizes">
            <h3>Choose a size:</h3>
            <a href="">XS</a>
            <a href="">S</a>
            <a href="">M</a>
            <a href="">L</a>
            <a href="">XL</a>
          </div>
          <div class="price_knap">
            <div class="price">
              <h3> DKK ${data.price},-</h3>
            </div>
              <a href="">
                <div class="knap">
                  <p>ADD TO CART</p>
                </div>
              </a>
          </div>
        </div>
      `;
  });
