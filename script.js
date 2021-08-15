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

function addToCart(item) {
  let cartItem = db.collection("cartItems").doc(item.id);
  cartItem.get().then(function (doc) {
    if (doc.exists) {
      cartItem.update({ qty: doc.data().qty + 1 });
    } else {
      cartItem.set({
        image: item.image,
        name: item.name,
        make: item.make,
        price: item.price,
        ratings: item.ratings,
        qty: 1,
      });
    }
  });
}
// function generateCartItems(cartItem) {
//   let cartHTML = "";
//   cartItem.forEach((cartItems) => {
//     let itm = document.createElement("div");
//     itm.classList.add("cart-itemss", "mt-5");
//     itm.innerHTML = `<div>{cartItems.name}</div`;
//     document.querySelector(".cart-items").appendChild(itm);
//   });
// }

function generateItems(items) {
  let itemsHTML = "";
  items.forEach((item) => {
    let docs = document.createElement("div");
    docs.classList.add("main-product", "mr-5");

    docs.innerHTML = `<div class="product-image w-48 h-52 bg-white rounded-lg p-4"><img
  class="w-full h-full object-contain p-2"
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
</div>
`;

    let addToCartEl = document.createElement("div");
    addToCartEl.classList.add(
      "hover:bg-yellow-600",
      "cursor-pointer",
      "product-add",
      "h-8",
      "w-28",
      "rounded",
      "bg-yellow-500",
      "text-white",
      "text-md",
      "flex",
      "justify-center",
      "items-center"
    );
    addToCartEl.innerText = "Add to cart";
    addToCartEl.addEventListener("click", function () {
      addToCart(item);
    });
    docs.appendChild(addToCartEl);
    document.querySelector(".main-section-products").appendChild(docs);
  });
}

getItems();
