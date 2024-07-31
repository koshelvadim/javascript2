const listProducts = document.querySelector(".reviews");

for (let i = 0; i < localStorage.length; i++) {
  const product = localStorage.key(i);
  const reviewSet = JSON.parse(localStorage.getItem(product));

  //добавление списка продуктов
  const divProduct = document.createElement("div");
  listProducts.insertAdjacentElement("beforeend", divProduct);
  divProduct.insertAdjacentHTML(
    "beforeend",
    `<h3>${i+1}. ${product} <button onclick="openReview(this)">показать отзывы</button></h3> `
  );

  //добавление блока для отзывов
  const divReviews = document.createElement("div");
  divReviews.classList.add('block');
  divReviews.hidden = true;
  divProduct.insertAdjacentElement("beforeend", divReviews);

  //заполнение отзывов
  reviewSet.forEach((element, index) => {
    const newReview = document.createElement("div");
    divReviews.insertAdjacentElement("beforeend", newReview);

    const reviewText = document.createElement("span");
    reviewText.textContent = (index+1) + '.' + element + ' ';
    newReview.insertAdjacentElement("beforeend", reviewText);

    //кнопка удаления
    newReview.insertAdjacentElement(
      "beforeend",
      deleteReviewBtn(reviewText, reviewSet, product)
    );
  });
}

//создание кнопки удаления отзыва
function deleteReviewBtn(textReview, setReview, product) {
  const delBtn = document.createElement("button");
  delBtn.textContent = "X";

  delBtn.addEventListener("click", () => {
    if (setReview.length > 1) {
      let indexItem = setReview.findIndex(
        (element) => element === textReview.textContent
      );
      setReview.splice(indexItem, 1);
      localStorage.setItem(product, JSON.stringify(setReview));
    } else {
      localStorage.removeItem(product);
      delBtn.parentElement.parentElement.parentElement.remove();
    }
    textReview.parentElement.remove();
    delBtn.remove();
  });

  return delBtn;
}

//функция открытия-скрытия блока отзывов
function openReview(elem) {
  const hiddenElement = elem.parentElement.parentElement.lastChild;
  if (hiddenElement.hidden) {
    hiddenElement.hidden = false;
    elem.textContent = "скрыть отзывы";
  } else {
    hiddenElement.hidden = true;
    elem.textContent = "показать отзывы";
  }
}
