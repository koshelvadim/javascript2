'use strict';
// 1. Создайте функцию delayedMessage(message, delay),
// которая принимает аргументы message (строка) и delay
// (число). Функция должна выводить заданное сообщение в
// консоль через указанную задержку.
// 2. Вызовите функцию delayedMessage() три раза с разными
// сообщениями и задержками.
// 3. После вызова всех функций delayedMessage(), добавьте
// сообщение вида "Конец программы" с помощью
// console.log().

// delayedMessage("Сообщение 1", 2000);
// delayedMessage("Сообщение 2", 1000);
// delayedMessage("Сообщение 3", 3000);

// Ожидаемый результат:
// "Сообщение 2"
// "Сообщение 1"
// "Сообщение 3"
// "Конец программы"

let counter = 0;
function delayedMessage(message, delay) {
  counter++;
  setTimeout(() => {
    console.log(message, counter);
    counter--;
    if (counter === 0) {
      console.log("Конец программы");
    }
  }, delay);
}

delayedMessage("Сообщение 1", 2000);
delayedMessage("Сообщение 2", 1000);
delayedMessage("Сообщение 3", 3000);

delayedMessage("Сообщение 1", 2000);
delayedMessage("Сообщение 2", 1000);
delayedMessage("Сообщение 3", 3000);


// У вас есть список задач, которые необходимо выполнить в определенном 
// порядке. Каждая задача должна быть выполнена через определенный 
// промежуток времени, заданный в миллисекундах. Вам необходимо написать
// функцию, которая принимает список задач и интервал времени, а затем
// выполняет каждую задачу через определенный промежуток времени. 
// Нельзя использовать setTimeout, выставляя сразу все задачи в очередь.

const tasks = [
    // { name: 'task1', time: 1000 }, // выполнится через 1 сек.
    // { name: 'task2', time: 2000 }, // выполнится через 3 сек.
    { name: 'task3', time: 4000 }, // выполнится через 7 сек.
];

function taskFun(tasks) {
    const {name, time} = tasks[0];
    setTimeout(() => {
        console.log(name);
        if (tasks.length > 1) {
            taskFun(tasks.slice(1));
        }
    }, time)
}
taskFun(tasks);



// Напишите программу, которая загружает данные с сервера с
// использованием объекта XMLHttpRequest и отображает полученную
// информацию в консоли.
// 1. Создайте функцию loadData(url), которая принимает аргумент url
// (строка) - адрес сервера для загрузки данных.
// 2. Внутри функции loadData() создайте объект XMLHttpRequest с
// помощью new XMLHttpRequest().
// 3. Зарегистрируйте обработчик события onreadystatechange, который
// будет вызываться при изменении состояния запроса. Проверьте,
// если readyState равен 4 (успешно выполнен запрос) и status равен
// 200 (успешный статус ответа сервера), то выведите полученные
// данные в консоль с помощью console.log(xhr.responseText).
// Задание 2 продолжение
// 4. Откройте запрос с помощью xhr.open("GET", url, true), где "GET" - тип
// запроса, url - адрес сервера, true - асинхронный режим запроса.
// 5. Отправьте запрос на сервер с помощью xhr.send().
// 6. Выведите в консоль слово "привет", после вызова функции.
// Дополнительно:
// а) Откройте запрос с помощью xhr.open("GET", url, false), где "GET" - тип
// запроса, url - адрес сервера, false - асинхронный режим запроса. Посмотрите, 
// что изменится, объясните почему. Какой вариант чаще используется/лучше?
// б) Переписать на fetch с обработкой ошибок.

// API: https://jsonplaceholder.typicode.com/users

const url = 'https://jsonplaceholder.typicode.com/users';

// function loadData(url) {
//     const xhr = new XMLHttpRequest();
//     // xhr.onreadystatechange = function () {
//     //     if (xhr.status === 200 && xhr.readyState === XMLHttpRequest.DONE) { // xhr.readyState === 4
//     //         console.log(xhr.responseText);
//     //     }
//     // }
//     xhr.onload = () => {
//         if (xhr.status === 200) {
//             console.log(xhr.responseText);
//         }
//     }
//     xhr.open('GET', url, false); // false - синхронное выполнение (НИКОГДА ТАК НЕ ДЕЛАТЬ)
//     xhr.send();
// }
// loadData(url);
// console.log('Hello');

// async function loadData(url) {           // САМАЯ АКТУАЛЬНАЯ ЗАПИСЬ
//     const response = await fetch(url);
//     if (!response.ok) {
//         throw new Error('Сервер ответил ошибкой');
//     }
//     return response.json();
// }

function loadData(url) { 
    return fetch(url).then((response) => {
        if (!response.ok) {
            throw new Error('Сервер ответил ошибкой');
        }
       return response.json();
    })
}

loadData(url).then((data) => {
    console.log(data);
}).catch((error) => {
    alert(`Ахтунг, ошибка ${error.message}`);
})


// console.log(loadData(url));



// Необходимо получить список пользователей с сервера, отсортировать их
// в алфавитном порядке и вывести в тег ul (его необходимо создать в html) 
// на странице данный список пользователей.
// API: https://jsonplaceholder.typicode.com/users

// const url = 'https://jsonplaceholder.typicode.com/users';

async function loadData(url) {           // САМАЯ АКТУАЛЬНАЯ ЗАПИСЬ
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error('Сервер ответил ошибкой');
    }
    return response.json();
}

const ulEl = document.createElement('ul');
document.body.appendChild(ulEl);

loadData(url).then((data) => {
    // const sortedData = data.toSorted((a, b) => {
    //     if (a.name > b.name) {
    //         return 1;
    //     }
    //     if (a.name < b.name) {
    //         return -1;
    //     } 
    //     return 0;
    // });
    const sortedData = data.toSorted((a, b) => a.name.localeCompare(b.name)); // не меняет исходный массив ,а sort() меняет массив
    sortedData.forEach(el => {

        ulEl.insertAdjacentHTML('beforeend', `
        <li>${el.name}</li>
    `);
    });

}).catch((error) => {
    alert(`Ахтунг, ошибка ${error.message}`);
})

