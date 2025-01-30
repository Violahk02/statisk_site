let productId = 1528;
let grid_2 = document.querySelector(".grid_2");

fetch(`https://kea-alt-del.dk/t7/api/products/${productId}`)
  .then((response) => response.json())
  .then((data) => {
    grid_2.innerHTML = `
        <div class="discount">
          <img src="https://kea-alt-del.dk/t7/images/webp/640/${productId}.webp" />
          <p>-${data.discount}%</p>
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
          <div class="price">
            <h3>Prev. DKK ${data.price},-</h3>
            <div class="sale_price">
              <h3>Now. DKK 2039,-</h3>
            </div>
          </div>
          <div>
            <a href="">
              <div class="knap">
                <p>ADD TO CART</p>
              </div>
            </a>
          </div>
        </div>
      `;
  });
