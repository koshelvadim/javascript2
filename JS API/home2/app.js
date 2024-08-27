// Вашей задачей является создание веб-слайдера для отображения изображений на веб-странице. Слайдер должен позволять переключаться между изображениями и отображать их в центре экрана.
// 1. Создайте интерфейс веб-страницы, который включает в себя следующие элементы:
// a. Контейнер для отображения текущего изображения.
// b. Кнопки "Предыдущее изображение" и "Следующее изображение" для переключения между изображениями.
// c. Навигационные точки (индикаторы) для быстрого переключения между изображениями.
// 2. Используйте HTML для создания элементов интерфейса.
// 3. Используйте JavaScript для обработки событий:
// a. При клике на кнопку "Предыдущее изображение" должно отображаться предыдущее изображение.
// b. При клике на кнопку "Следующее изображение" должно отображаться следующее изображение.
// c. При клике на навигационные точки, слайдер должен переключаться к соответствующему изображению.
// 4. Слайдер должен циклически переключаться между изображениями, то есть после последнего изображения должно отображаться первое, и наоборот.
// 5. Добавьте стилизацию для слайдера и элементов интерфейса с использованием CSS для улучшения внешнего вида.
"use strict";
const itemList = document.querySelectorAll(".item-slide");
const btnIndList = document.querySelectorAll(".btn-ind");

let currentSlideIndex = 0;
const slideLength = itemList.length;

itemList[currentSlideIndex].classList.add("active");

/**функция очистки класса active слайда и индикатора*/
function clearActiveClass() {
  btnIndList.forEach((el) => {
    el.classList.remove("active");
  });
  itemList.forEach((el) => {
    el.classList.remove("active");
  });
}
/**функция установки класса active по индексу*/
function installActiveClass(currentSlideIndex) {
  btnIndList[currentSlideIndex].classList.add("active");
  itemList[currentSlideIndex].classList.add("active");
}

installActiveClass(currentSlideIndex);

controls.addEventListener("click", function (e) {
  if (e.target.textContent === "назад") {
    if (currentSlideIndex > 0) {
      currentSlideIndex -= 1;
    } else {
      currentSlideIndex = slideLength - 1;
    }
    clearActiveClass();
    installActiveClass(currentSlideIndex);
  } else if (e.target.textContent === "вперед") {
    if (currentSlideIndex < slideLength - 1) {
      currentSlideIndex += 1;
    } else {
      currentSlideIndex = 0;
    }
    clearActiveClass();
    installActiveClass(currentSlideIndex);
  }
});

indicators.addEventListener("click", function (e) {
  if (e.target.classList.contains("btn-ind")) {
    currentSlideIndex = +e.target.dataset["index"];
    clearActiveClass();
    installActiveClass(currentSlideIndex);
  }
});
