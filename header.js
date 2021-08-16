function getCartItems() {
  db.collection("cartItems").onSnapshot((snapshot) => {
    let totalCount = 0;
    snapshot.forEach((doc) => {
      totalCount += doc.data().qty;
    });
    setCartCounter(totalCount);
  });
}
function setCartCounter(totalCount) {
  document.querySelector(".cart-item-number").innerHTML = totalCount;
}

getCartItems();
