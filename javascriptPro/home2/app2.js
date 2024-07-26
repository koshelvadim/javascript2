// Задание 2
// Вы разрабатываете систему отзывов для вашего веб-сайта. Пользователи могут оставлять отзывы, но чтобы исключить слишком короткие или слишком длинные сообщения, вы решаете установить некоторые ограничения.
// Создайте HTML-структуру с текстовым полем для ввода отзыва, кнопкой для отправки и контейнером, где будут отображаться отзывы.
// Напишите функцию, которая будет добавлять отзыв в контейнер с отзывами. Однако если длина введенного отзыва менее 50 или более 500 символов, функция должна генерировать исключение.
// При добавлении отзыва, он должен отображаться на странице под предыдущими отзывами, а не заменять их.

const initialData = [
  {
    product: "Apple iPhone 13",
    reviews: [
      {
        id: "1",
        text: "Отличный телефон! Батарея держится долго.",
      },
      {
        id: "2",
        text: "Камера супер, фото выглядят просто потрясающе.",
      },
    ],
  },
  {
    product: "Samsung Galaxy Z Fold 3",
    reviews: [
      {
        id: "3",
        text: "Интересный дизайн, но дорогой.",
      },
    ],
  },
  {
    product: "Sony PlayStation 5",
    reviews: [
      {
        id: "4",
        text: "Люблю играть на PS5, графика на высоте.",
      },
    ],
  },
];

const inputEl = document.querySelector(".input");
const btnEl = document.querySelector(".btn");
const reviewsEl = document.querySelector(".reviews");
const errorEl = document.querySelector(".error");
const selectEl = document.querySelector("select");

function renderEl(el) {
  const i = el.reviews.length;
  let title = `<h3>${el.product}</h3>`;
  for (let index = 0; index < i; index++) {
    const rev = `<p>${index + 1}. ${el.reviews[index].text}</p>`;
    title += rev;
  }
  return title;
}

rendering(initialData);

function rendering(array) {
  array.forEach((el) => {
    reviewsEl.insertAdjacentHTML("beforeend", renderEl(el));
  });
}

btnEl.addEventListener("click", function (e) {
  e.preventDefault();
  const telephone = selectEl.value;
  const input = inputEl.value;
  try {
    if (input.trim().length < 20 || input.trim().length > 500) {
      throw new Error("длина текста должна быть >20 и <500");
    }
    errorEl.textContent = "";
    reviewsEl.textContent = "";

    initialData.forEach((el) => {
      if (el.product === telephone) {
        const index = (el.reviews.length + 1).toString();
        const rev = { id: index, text: input };
        el.reviews.push(rev);
      }
    });
    rendering(initialData);
    inputEl.value = '';
  } catch (error) {
    errorEl.textContent = error.message;
  }
});
