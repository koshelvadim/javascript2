// Урок 3. Сетевые запросы
// Цель: Разработать веб-приложение, которое каждый день будет отображать новое случайное изображение из коллекции Unsplash, давая пользователю возможность узнать больше о фотографе и сделать "лайк" изображению.
// Регистрация на Unsplash:
// • Перейдите на веб-сайт Unsplash (https://unsplash.com/).
// • Зарегистрируйтесь или войдите в свой аккаунт. (если у вас не было регистрации до этого, новый аккаунт создавать не нужно).
// Создание приложения:
// • Перейдите на страницу разработчика Unsplash (https://unsplash.com/developers).
// • Нажмите "New Application".
// • Заполните необходимую информацию о приложении (можете использовать http://localhost для тестирования).
// • Получите свой API-ключ после создания приложения.
// Разработка веб-приложения:
// • Создайте HTML-страницу с элементами: изображение, имя фотографа, кнопка "лайк" и счетчик лайков.
// • Используя JavaScript и ваш API-ключ, получите случайное изображение из Unsplash каждый раз, когда пользователь загружает страницу.
// • Отобразите информацию о фотографе под изображением.
// • Реализуйте функционал "лайка". Каждый раз, когда пользователь нажимает кнопку "лайк", счетчик должен увеличиваться на единицу.
// * Дополнительные задачи (по желанию):
// • Добавьте функцию сохранения количества лайков в локальное хранилище, чтобы при новой загрузке страницы счетчик не сбрасывался.
// • Реализуйте возможность просмотра предыдущих "фото дня" с сохранением их в истории просмотров.

let page = 1;

async function fetchPhotos() {
  try {
    const response = await fetch(
      `https://api.unsplash.com/photos?page=${page}&per_page=9&client_id=BIyVpWB2RKA2nJWRQBV_I-Xtu3-Llx5yuCQkAX3bQFs`
    );
    const photos = await response.json();
    return photos;
  } catch (error) {
    console.error("Ошибка при загрузке фото:", error);
    return [];
  }
}

async function loadMorePhotos() {
  const photos = await fetchPhotos();

  if (photos.length > 0) {
    photos.forEach((photo) => {
      const photoElement = document.createElement("div");
      photoElement.classList.add("card", "p-1");

      const img = document.createElement("img");
      img.classList.add("d-block");
      img.src = photo.urls.small_s3;
      img.alt = photo.alt_description;
      photoElement.append(img);

      const paragraph = document.createElement("p");
      paragraph.textContent = `Author: ${photo.user.first_name}`;
      photoElement.append(paragraph);

      const buttonEl = document.createElement("button");
      buttonEl.textContent = "ЛАЙК";
      buttonEl.classList.add("btn", "btn-primary");
      photoElement.append(buttonEl);
      buttonEl.onclick = (e) => {
        buttonClick(e.target);
      };
      photoContainer.append(photoElement);
    });
    page++;
  }
}
loadMorePhotos();

const countEl = document.querySelector(".count");
let count = JSON.parse(localStorage.getItem("count"));

if (count === null) {
  count = +countEl.textContent;
} else {
  countEl.textContent = count;
}

function buttonClick(el) {
  if (el.classList.contains("btn-primary")) {
    el.classList.remove("btn-primary");
    el.classList.add("btn-warning");
    el.textContent = "ДИЗЛАЙК";
    count++;
    localStorage.setItem("count", JSON.stringify(count));
    countEl.textContent = count;
  } else {
    el.classList.remove("btn-warning");
    el.classList.add("btn-primary");
    el.textContent = "ЛАЙК";
    count--;
    localStorage.setItem("count", JSON.stringify(count));
    countEl.textContent = count;
  }
}
