const path = "https://jsonplaceholder.typicode.com/photos"; // 5000 элементов
const boxEL = document.querySelector(".box");

const getData = async (url) => {
  try {
    const res = await fetch(url);
    const json = await res.json();
    return json;
  } catch (error) {
    console.log(error);
  }
};

const fetchData = await getData(path);

function renderCard(element) {
  return `
          <div class="card">
            <div class="card-body">
              <img class="card-img" src="${element.url}" alt="picture">
              <h2 class="card-title">${element.title}</h2>
              <p class="card-text">ID: ${element.id}</p>
            </div>
          </div>
          `;
}


fetchData.forEach((element) => {
  if(element.id < 101) boxEL.insertAdjacentHTML("beforeend", renderCard(element)); //рендеринг первых 100 элементов fetchData
});

