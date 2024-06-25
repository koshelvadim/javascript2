// Задание 1 (тайминг 20 минут)
// 1. Создайте функцию mergeArrays, которая принимает два
// массива и возвращает новый массив, содержащий все
// элементы из обоих массивов. Используйте spread
// оператор для объединения массивов.
// mergeArrays([1, 2, 3], [4, 5, 6]); [1, 2, 3, 4, 5, 6]

// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];

// function margeArrays(arr1, arr2) {
//   return [...arr1, ...arr2];
//   // body
// }

// console.log(margeArrays(arr1, arr2));

// 2. Создайте функцию removeDuplicates, которая принимает
// любое количество аргументов и возвращает новый
// массив, содержащий только уникальные значения.
// Используйте rest оператор для сбора всех аргументов в
// массив а затем filter для определения дубликатов.
// removeDuplicates(1, 2, 3, 2, 4, 1, 5); [1, 2, 3, 4, 5]

// function removeDuplicates(...rest) {
//   return rest.filter((el, index, arr) => arr.indexOf(el) === index);
// }

// function removeDuplicates1(...rest) {
//   return [...new Set(rest)];
// }

// console.log(removeDuplicates(1, 2, 3, 2, 4, 1, 5));

// 1. Напишите функцию getEvenNumbers, которая принимает массив
// чисел в качестве аргумента и возвращает новый массив,
// содержащий только четные числа.

// array = [1,2,3,4,5,6]

// function getEvenNumbers(array) {
//   return array.reduce((acc, el) => el % 2 === 0)
// }

// console.log(getEvenNumbers(array));

// 2. Задача: Напишите функцию calculateAverage, которая принимает
// массив чисел в качестве аргумента и возвращает среднее значение
// этих чисел.

// function getEvenNumbers(array) {
//   return array.reduce((acc, el) => acc + el,0) / array.length;
// }

// 3. Напишите функцию capitalizeFirstLetter, которая принимает строку в
// качестве аргумента и возвращает новую строку, в которой первая
// буква каждого слова является заглавной.

// str = 'aaa bbb ccc';
// function capitalizeFirstLetter(str) {
//   const str1 = str.split(' ');
//   return str1.map(el => el.charAt(0).toUpperCase() + el.slice(1)).join(' ');
// };

// console.log(capitalizeFirstLetter(str));

// Задание 3 (тайминг 20 минут)
// 1. Напишите функцию createCalculator, которая принимает начальное
// значение и возвращает объект с двумя методами: add и subtract.
// Метод add должен увеличивать значение на переданное число, а
// метод subtract должен уменьшать значение на переданное число.
// Значение должно быть доступно только через методы объекта, а не
// напрямую.

function createCalculator(initialValue) {
  const value = initialValue;
  function add(arg) {
    return (value += arg);
  }
  function subtract(arg) {
    return (value -= arg);
  }
  return { add, subtract };
}

// const calc = createCalculator(5);

// console.log(calc.add(20));
// console.log(calc.subtract(10));

// Задание 4 (тайминг 15 минут)
// 1. Напишите функцию createGreeting, которая принимает имя
// пользователя и возвращает функцию, которая будет возвращать
// приветствие с использованием этого имени.

// Пример использования:
// const greeting = createGreeting('John');
// console.log(greeting()); "Hello, John!"

// function createGreeting(name) {
//   return () => `Hello, ${name}`;
// }

// const greeting = createGreeting("John");
// console.log(greeting());

// Задание 5 (тайминг 15 минут)
// 1. Задача: Напишите функцию createPasswordChecker, которая
// принимает минимальную длину пароля в качестве аргумента и
// возвращает функцию для проверки введенного пароля.
// Возвращаемая функция должна принимать пароль и возвращать
// true, если его длина больше или равна заданной длине,
// в противном случае - false.

// Пример использования:

// const isPasswordValid = createPasswordChecker(8);
// console.log(isPasswordValid("password")); // true
// console.log(isPasswordValid("secret")); // false

// function createPasswordChecker(lengthPass) {
//   return (password) => password.length >= lengthPass;
// }

// console.log(createPasswordChecker(6)("password"));

// Задание 6 (тайминг 25 минут)
// 1. Напишите рекурсивную функцию sumDigits, которая принимает
// положительное целое число в качестве аргумента и возвращает
// сумму его цифр.

// Пример использования:

console.log(sumDigits(123)); // 6 (1 + 2 + 3)
console.log(sumDigits(456789)); // 39 (4 + 5 + 6 + 7 + 8 + 9)

function sumDigits(number) {
  if (number < 10) return number;
  else return (number % 10) + sumDigits(Math.floor(number / 10));
}
