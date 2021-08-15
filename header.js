function getCartItems() {
  db.collection("cartItems")
    .get()
    .then((querySnapshot) => {
      let totalCount = 0;
      querySnapshot.forEach((doc) => {
        totalCount += doc.data().qty;
      });
      setCartCounter(totalCount);
    });
}
function setCartCounter(totalCount) {
  document.querySelector(".cart-item-number").innerHTML = totalCount;
}

getCartItems();
