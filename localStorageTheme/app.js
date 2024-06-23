// LocalStorageTheme
const lightThemeClass = "light-theme";
const darkThemeClass = "dark-theme";
const themeKey = "themeUser";

function applyTheme(theme) {
  document.body.classList.remove(lightThemeClass, darkThemeClass);
  document.body.classList.add(theme);
}

function switchTheme() {
  const currentTheme = localStorage.getItem(themeKey) || lightThemeClass;
  const newTheme =
    currentTheme === lightThemeClass ? darkThemeClass : lightThemeClass;
  localStorage.setItem(themeKey, newTheme);
  applyTheme(newTheme);
}

function initializeTheme() {
  const saveTheme = localStorage.getItem(themeKey) || lightThemeClass;
  applyTheme(saveTheme);
}

initializeTheme();

const btnTheme = document.querySelector(".btn-theme");

btnTheme.addEventListener("click", switchTheme);
// LocalStorageTheme


// Position
navigator.geolocation.getCurrentPosition((position) => {
  const { latitude, longitude } = position.coords;
  console.log("Географические координаты устройства", latitude, longitude);
});
// Position


// Scroll
const btnScroll = document.querySelector(".btn-scroll");
btnScroll.addEventListener("click", (e) => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

console.log(document.documentElement.scrollHeight); // высота всего контента
console.log(document.documentElement.clientHeight); //видимая область экрана
// Scroll


// Drag and Drop API
document.addEventListener("DOMContentLoaded", (event) => {
  let dragSrcEl = null;

  function handleDragStart(e) {
    this.style.opacity = "0.1";
    dragSrcEl = this;
    console.log(dragSrcEl);
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text/html", this.innerHTML);
  }

  function handleDragOver(e) {
    if (e.preventDefault) {
      e.preventDefault();
    }
    e.dataTransfer.dropEffect = "move";
    return false;
  }

  function handleDragEnter(e) {
    this.classList.add("over");
  }

  function handleDragLeave(e) {
    this.classList.remove("over");
  }

  function handleDrop(e) {
    if (e.preventDefault) {
      e.preventDefault();
    }
    if (dragSrcEl != this) {
      dragSrcEl.innerHTML = this.innerHTML;
      this.innerHTML = e.dataTransfer.getData("text/html");
    }
    return false;
  }

  function handleDragEnd(e) {
    this.style.opacity = "1";
    item.forEach((item) => {
      item.classList.remove("over");
    });
  }

  let item = document.querySelectorAll(".box");

  item.forEach((item) => {
    item.addEventListener("dragstart", handleDragStart);
    item.addEventListener("dragenter", handleDragEnter);
    item.addEventListener("dragover", handleDragOver);
    item.addEventListener("dragleave", handleDragLeave);
    item.addEventListener("drop", handleDrop);
    item.addEventListener("dragend", handleDragEnd);
  });
});
// Drag and Drop API
