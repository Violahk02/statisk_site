let category_list_container = document.querySelector(".category_list_container");

fetch(`https://kea-alt-del.dk/t7/api/categories/`)
  // linker til json fil - Med data for produkterne.
  .then((response) => response.json())
  .then((data) => showList(data));

function showList(categories) {
  // console.log(products);
  const markup = categories
    .map(
      (category) => `<div class="category">
          <a href="produktliste.html?category=${category.category}">${category.category}
          
          </a>
        </div>`
    )
    .join("");
  console.log(markup);
  category_list_container.innerHTML = markup;
}
