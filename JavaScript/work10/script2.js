const myPromise = new Promise((resolve, reject) => {});

myPromise.then((value) => {}).catch((error) => {});

const url1 = "https://dog.ceo/api/breeds/image/random";
const url2 = "https://jsonplaceholder.typicode.com/users";

fetch(url2)
  .then((response) => response.json())
  .then((json) => {
    console.log(json);
  })
  .catch((error) => {
    console.log(error);
  });


const getData = async (url1) => {
  try {
    const res = await fetch(url1);
    const json = await res.json();
    return json;
  } catch (error) {
    console.log(error);
  }
};

const btnEl = document.querySelector("button");

btnEl.addEventListener("click", async (e) => {
  const fetchData = await getData(url1);
  console.log(fetchData);
  const imgEl = document.querySelector("img");
  imgEl.src = fetchData.message;
});
