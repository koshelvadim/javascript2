"use strict";

// 1. При изменении значения в input с id="from", значение содержащееся в нем должно моментально отображаться в span. То есть при печати в input'е тег span также должен меняться.

const inputEl = document.querySelector("#from");
const spanEl = document.querySelector("span");

inputEl.addEventListener("input", (e) => {
  spanEl.textContent = e.target.value;
});

// 2. При клике на кнопку с классом messageBtn необходимо элементу с классом message:
// - добавить два класса: animate_animated и animate_fadeInLeftBig
// - поставить данному элементу стиль visibility в значение 'visible'.

const btnEl = document.querySelector(".messageBtn");
const divEl = document.querySelector("div.message");

btnEl.addEventListener("click", () => {
  divEl.classList.add("animate_animated", "animate_fadeInLeftBig");
  divEl.style.visibility = "visible";
});

// 3. Необходимо при отправке формы проверить, заполнены ли все поля в этой форме. Если какое-либо поле не заполнено, форма не должна отправляться, также должны быть подсвечены незаполненные поля (необходимо поставить класс error незаполненным полям). Как только пользователь начинает заполнять какое-либо поле, необходимо, при вводе в данное поле, произвести проверку:
// - Если поле пустое, необходимо данное поле подсветить (поставить класс error данному полю).
// - Если поле было чем-либо заполнено, подсветку (класс error) необходимо убрать.

const formEl = document.querySelector("form");
const inputForm = document.querySelector("input.form-control");
const selectForm = document.querySelector("select.form-control");
const btnSubmite = document.querySelector(".submit");
const formControl = document.querySelectorAll(".form-control");

formEl.addEventListener("input", function (e) {
  e.target.classList.remove("error");
});

btnSubmite.addEventListener("click", function (e) {
  checkInput();
  checkSelect();
  if (checkInput() && checkSelect()) {
    formEl.submit();
    formEl.reset();
    console.log("ok!");
  } else {
    console.log("false!");
  }
});

function checkInput() {
  if (inputForm.value.trim() === "") {
    inputForm.classList.add("error");
    return false;
  } else return true;
}

function checkSelect() {
  if (selectForm.value === "") {
    selectForm.classList.add("error");
    return false;
  } else return true;
}
