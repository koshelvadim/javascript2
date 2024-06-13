import {data} from "./data.js";

const parseData = JSON.parse(data);

const divEl = document.querySelector('.content');

parseData.forEach(element => {
    divEl.insertAdjacentHTML('beforeend', `
      <h2>${element.name}</h2>
      <p>${element.username}</p> 
      <span>${element.email}</span><br>  
      <span>${element.address.city}</span> 
        `)
});

console.log(parseData);


