function getItems() {
  db.collection("items")
    .get()
    .then((querySnapshot) => {
      let items = [];
      querySnapshot.forEach((doc) => {
        items.push({
          id: doc.id,
          image: doc.data().image,
          name: doc.data().name,
          make: doc.data().make,
          price: doc.data().price,
          ratings: doc.data().ratings,
        });
      });
      generateItems(items);
    });
}

function generateItems(items) {
  let itemsHTML = "";
  items.forEach((item) => {
    itemsHTML += `<div class="main-product">
        <div class="product-image w-48 h-52 bg-white rounded-lg">
          <img
            class="w-full h-full object-contain p-4"
            src="${item.image}"
            alt="nintendo"
          />
        </div>
        <div class="product-name text-gray-700 font-bold mt-2 text-sm">
          ${item.name}
        </div>
        <div class="product-make text-green-700">Nintendo</div>
        <div class="product-rating text-yellow-300 font-bold my-1">
          ⭐️⭐️⭐️⭐️ ${item.ratings}
        </div>
        <div class="product-price font-bold text-green-700 text-lg">
          ${item.price}$
        </div>
        <div
          class="
            add-to-cart
            h-8
            w-28
            bg-yellow-500
            flex
            items-center
            justify-center
            text-white
            rounded
            text-md
            cursor-pointer
            hover:bg-yellow-600
          "
        >
          Add to cart
        </div>
      </div>`;
  });
  document.querySelector(".main-section-products").innerHTML = itemsHTML;
}

getItems();
