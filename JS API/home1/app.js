// Вы разрабатываете веб-страницу для отображения расписания занятий в спортивном клубе. Каждое занятие имеет название, время проведения, максимальное количество участников и текущее количество записанных участников.

// 1. Создайте веб-страницу с заголовком "Расписание занятий" и областью для отображения занятий.
// 2. Загрузите информацию о занятиях из предоставленных JSON-данных. Каждое занятие должно отображаться на странице с указанием его названия, времени проведения, максимального количества участников и текущего количества записанных участников.
// 3. Пользователь может нажать на кнопку "Записаться" для записи на занятие. Если максимальное количество участников уже достигнуто, кнопка "Записаться" становится неактивной.
// 4. После успешной записи пользователя на занятие, обновите количество записанных участников и состояние кнопки "Записаться".
// 5. Запись пользователя на занятие можно отменить путем нажатия на кнопку "Отменить запись". После отмены записи, обновите количество записанных участников и состояние кнопки.
// 6. Все изменения (запись, отмена записи) должны сохраняться и отображаться в реальном времени на странице.
// 7. При разработке используйте Bootstrap для стилизации элементов.

let lessonsData = [
  {
    id: 0,
    title: "Занятие 1",
    time: "08:00-12:00",
    maxPlayer: 10,
    player: 4,
  },
  {
    id: 1,
    title: "Занятие 2",
    time: "12:00-14:00",
    maxPlayer: 6,
    player: 2,
  },
  {
    id: 2,
    title: "Занятие 3",
    time: "14:00-18:00",
    maxPlayer: 4,
    player: 1,
  },
];


let localStorageLesson = JSON.parse(localStorage.getItem("lessons"));
if (localStorageLesson === null) {
    localStorageLesson = lessonsData;
}
lessonsData = localStorageLesson;


const renderingListLessons = (array) => {
  localStorage.setItem("lessons", JSON.stringify(lessonsData));
  listLessons.textContent = "";
  array.forEach((element) => {
    const lessonItem = createLesson(
      element.id,
      element.title,
      element.time,
      element.maxPlayer,
      element.player
    );
    listLessons.append(lessonItem);
  });
};

function createLesson(id, title, time, maxPlayer, player) {
  const lessonItem = document.createElement("li");
  lessonItem.classList.add("list-grope-item", "mb-3", "p-1");
  lessonItem.setAttribute("id", `${id}`);

  const lessonTitle = document.createElement("h3");
  lessonTitle.classList.add("mb-2");
  lessonTitle.textContent = title;

  const lessonTime = document.createElement("p");
  lessonTime.classList.add("lesson-time", "m-0");
  lessonTime.textContent = `Время проведения: ${time}`;

  const lessonMaxPlayer = document.createElement("p");
  lessonMaxPlayer.classList.add("m-0");
  lessonMaxPlayer.innerHTML = `Максимальное количество участников: <span class="lesson-maxPlayer">${maxPlayer}</span>`;

  const lessonPlayer = document.createElement("p");
  lessonPlayer.innerHTML = `Записано участников: <span class="lesson-player">${player}</span>`;

  const addtButton = document.createElement("button");
  addtButton.textContent = "Записаться";
  if (player === maxPlayer) {
    addtButton.classList.add("btn", "btn-success", "disabled");
  }
  addtButton.classList.add("btn", "btn-success");

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Отменить запись";
  if (player === 0) {
    deleteButton.classList.add("btn", "btn-danger", "mx-1", "disabled");
  }
  deleteButton.classList.add("btn", "mx-1", "btn-danger");

  lessonItem.append(lessonTitle);
  lessonItem.append(lessonTime);
  lessonItem.append(lessonMaxPlayer);
  lessonItem.append(lessonPlayer);
  lessonItem.append(addtButton);
  lessonItem.append(deleteButton);

  return lessonItem;
}

listLessons.addEventListener("click", function (e) {
  const lessonItem = e.target.closest("li");
  const lessonId = lessonItem.getAttribute("id");
  const lessonMaxPlayer =
    +lessonItem.querySelector(".lesson-maxPlayer").textContent;
  const lessonPlayer = +lessonItem.querySelector(".lesson-player").textContent;

  if (e.target.textContent === "Записаться") {
    if (lessonPlayer < lessonMaxPlayer) {
      lessonsData[`${lessonId}`].player = lessonPlayer + 1;
      renderingListLessons(lessonsData);
    }
  }
  if (e.target.textContent === "Отменить запись") {
    if (lessonPlayer !== 0) {
      lessonsData[`${lessonId}`].player = lessonPlayer - 1;
      renderingListLessons(lessonsData);
    }
  }
});

renderingListLessons(lessonsData);
