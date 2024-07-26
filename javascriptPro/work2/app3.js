// Задание 3 (тайминг 15 минут)
// Вы создаете интерфейс, где пользователь вводит число. Ваша задача — проверить, является ли введенное значение числом или нет, и дать соответствующий ответ.
// 1. Создайте HTML-структуру: текстовое поле для ввода числа и кнопку "Проверить".
// 2. Добавьте место (например, div) для вывода сообщения пользователю.
// 3. Напишите функцию, которая будет вызвана при нажатии на кнопку. Эта функция должна использовать try и catch для проверки вводимого значения.

const inputEl = document.querySelector("input");
const buttonEl = document.querySelector(".btn");
const commentEl = document.querySelector(".comment");

buttonEl.addEventListener("click", function (e) {
  e.preventDefault();
  try {
    if (isNaN(inputEl.value) || inputEl.value.trim() === '') {
      throw new Error("Это не число");
    }
    commentEl.textContent = "Отлично!";
  } catch (error) {
    commentEl.textContent = error.message;
  }
});
