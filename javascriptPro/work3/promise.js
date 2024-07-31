// Напишите функцию generateRandomNumber(), которая возвращает promise,
// выполняющийся через 1 секунду и резолвит случайное число от 1 до 10.
// Если возникла ошибка при генерации числа, promise должен быть отклонен
// сообщением об ошибке.promise

// const generateRandomNumber = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const randomNumber = Math.floor(Math.random() * 10) + 1;
//       if (randomNumber) {
//         resolve(randomNumber);
//       } else {
//         reject("Ошибка генерации числа");
//       }
//     }, 1000);
//   });
// };

// generateRandomNumber()
//   .then((number) => {
//     console.log("сгенерировано число: ", number);
//   })
//   .catch((error) => {
//     console.log("ошибка:", error);
//   });

// напишите функцию fetchData(url), которая принимает url в качестве аргумента и
// возвращает promise, выполняющий запрос данных по указанному URL. Если запрос завершается
// успешно, promise должен резолвить полученные данные. В случае ошибки запроса, promise
// должен быть отклонен с сообщением об ошибке.

// const url1 = "https://api.example.com/data";
// const url2 = "https://randombig.cat/roar.json";
// const url = "https://api.api-ninjas.com/v1/randomimage?category=nature";

// const fetchData = (url) => {
//   return new Promise((resolve, reject) => {
//     fetch(url)
//       .then((response) => response.json())
//       .then((data) => resolve(data))
//       .catch((error) => reject("Ошибка загрузки данных"));
//   });
// };

// fetchData(url)
//   .then((data) => console.log("Получены данные:", data))
//   .catch((error) => console.log("Ошибка:", error));

// Напишите функцию checkFileExists(file), которая принимает имя файла в качестве
// аргумента и возвращает Promise, выполняющийся через 2 секунды. Promise должен резолвиться,
// если файл существует, и отклониться, если файла нет.Promise

// const checkIfFileExists = (file) => {
//   // обработка наличия файла
// };

// const checkFileExists = (file) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const fileExists = checkIfFileExists(file);
//       if (fileExists) {
//         resolve("Файл существует");
//       } else {
//         reject("Файл не существует");
//       }
//     }, 2000);
//   });
// };

// checkFileExists("promise.js")
//   .then((message) => console.log(message))
//   .catch((error) => console.log("Ошибка:", error));

// // Напишите функцию calculateSum(a, b), которая принимает два числа в качестве
// // аргументов и возвращает Promise. Promise должен быть выполнен суммой двух чисел.

// const calculateSum = (a, b) => {
//   return new Promise((resolve, reject) => {
//     const sum = a + b;
//     resolve(sum);
//   });
// };

// calculateSum(3, 7).then((result) => console.log("Сумма чисел:", result));

// Напишите функцию divideNumbers(a, b), которая ринимает два числа в качестве
// аргументов и возвращает Promise. Promise должен выполнять деление первого числа
// на второе. Если второе число равно 0, Promise должен быть отклонен с сообщением
// о невозможности деления на 0.

// const divideNumbers = (a, b) => {
//   return new Promise((resolve, reject) => {
//     if (b === 0) {
//       reject("Делить на 0 нельзя");
//     } else {
//       resolve(a / b);
//     }
//   });
// };

// divideNumbers(10, 2)
//   .then((result) => console.log("Результат деления:", result))
//   .catch((error) => console.log("Ошибка:", error));

// Цепочки Промисов
// new Promise(function (resolve) {
//   setTimeout(() => resolve(1), 1000);
// })
//   .then(function (result) {
//     console.log(result);
//     return new Promise((resolve, reject) => {
//       setTimeout(() => resolve(result * 2), 1000);
//     });
//   })
//   .then(function (result) {
//     console.log(result);
//     return new Promise((resolve, reject) => {
//       setTimeout(() => resolve(result * 2), 1000);
//     });
//   })
//   .then(function (result) {
//     console.log(result);
//   });

// finally

// const processData = (data) => {};

// const performOperation = (data) => {
//   return new Promise((resolve, reject) => {
//     let result = processData(data);

//     if (result) {
//       resolve(result);
//     } else {
//       reject("Ошибка операции");
//     }
//   }).finally(() => console.log("Операция завершена"));
// };

// performOperation("example")
//   .then((result) => console.log("Результат перации:", result))
//   .catch((error) => console.log('ошибка:', error));

// Promise.all([
//   new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
//   // new Promise((resolve, reject) =>
//   //   setTimeout(() => reject(new Error("Ошибка!")), 2000)
//   // ),
//   new Promise((resolve, reject) => setTimeout(() => resolve(2), 2000)),
//   new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000)),
// ])
//   .then(console.log)
//   .catch(console.log);

// Напишите функцию checkServerResponse(urls), которая принимает массив
// url-адресов в качестве аргумента и возвращает promise. Promise должен
// быть ыполнен с url-адресом сервера, который первым ответил на запрос.

const checkServerResponse = (urls) => {
  const promises = urls.map((url) => fetch(url));

  return Promise.race(promises).then((response) => {
    return response.url;
  });
};

const urls = [
  "https://source.unsplash.com/random/200x200?sig=1",
  "https://source.unsplash.com/random/200x200?sig=2",
  "https://source.unsplash.com/random/200x200?sig=3",
];

checkServerResponse(urls)
  .then((fastestServer) => console.log("Самый быстрый сервер:", fastestServer))
  .catch((error) => console.log("Ошибка:", error));
