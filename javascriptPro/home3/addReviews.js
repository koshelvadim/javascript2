document.addEventListener("DOMContentLoaded", function () {
  const inputEl = document.querySelector(".input-product");
  const reviewEl = document.querySelector(".user-review");
  const buttonEl = document.querySelector(".add-review");
  const errorEl = document.querySelector(".error-msg");

  buttonEl.addEventListener("click", function () {
    const product = inputEl.value.trim();
    const review = reviewEl.value.trim();

    if (product !== "" && review !== "") {
      let reviews = JSON.parse(localStorage.getItem(product));
      if (reviews === null) {
        reviews = [];
      }
      reviews.push(review);
      localStorage.setItem(product, JSON.stringify(reviews));
    } else {
      errorEl.textContent = "Все поля должны быть заполнены";
    }
  });
});
