"use strict";

// Напишите функцию getPrototypeChain(obj), которая будет
// возвращать цепочку прототипов для заданного объекта
// obj. Функция должна вернуть массив прототипов, начиная
// от самого объекта и заканчивая глобальным объектом
// Object.prototype.

// Напишите конструктор объекта Person, который принимает два аргумента:
// name (строка) и age (число). Конструктор должен создавать объект с
// указанными свойствами name и age и методом introduce(), который
// выводит в консоль строку вида "Меня зовут [name] и мне [age] лет.".
// // Пример:
// const person1 = new Person("John", 25);
// person1.introduce(); // "Меня зовут John и мне 25 лет."

// function Person(name, age) {
//   this.userName = name;
//   this.userAge = age;
// }

// Person.prototype = {
//   introduce() {
//     console.log(`Меня зовут ${this.userName} и мне ${this.userAge} лет.`);
//   },
// };

// const person1 = new Person("John", 25);
// person1.introduce(); // "Меня зовут John и мне 25 лет.

// Полный курс:
// 1 - https://youtu.be/MbRmNGKXVOg
// 2 - https://youtu.be/dUlEIwEDkV4
// 3 - https://youtu.be/7qpbKy9XS48
// 4 - https://youtu.be/Su9Gml6xUUU
// 5 - https://youtu.be/lXJH1l9s214
// 6 - https://youtu.be/qdyJkc-BjQA
// 7 - https://youtu.be/fGTG-mrGpFY
// 8 - https://youtu.be/lXbF_Jta6vQ

// Напишите конструктор объекта BankAccount, который будет
// представлять банковский счет. Конструктор должен принимать два
// аргумента: accountNumber (строка) и balance (число). Конструктор
// должен создавать объект с указанными свойствами accountNumber и
// balance и следующими методами:
// 1. deposit(amount): принимает аргумент amount (число) и увеличивает
// баланс на указанную сумму.
// 2. withdraw(amount): принимает аргумент amount (число) и уменьшает
// баланс на указанную сумму.
// 3. getBalance(): возвращает текущий баланс счета.

// В случае неверно переданных значений, либо невозможности провести
// операцию, должны выводиться соответсвующие сообщения.

// function BankAccount(accountNumber, balance) {
//   this.accountNumber = accountNumber;
//   this.balance = balance;
// }

// BankAccount.prototype = {

//   deposit(amount) {
//     if (!Number.isFinite(amount)) {
//       throw new Error(`Wrong deposit amount, must be a positive number.`);
//     }
//     this.checkKopeyki(amount);
//     if (amount <= 0) {
//       throw new Error(`Wrong deposit amount, must be a positive number.`);
//     }
//     this.balance += amount;
//   },

//   withdraw(amount) {
//     if (!Number.isFinite(amount)) {
//       throw new Error(`Wrong deposit amount, must be a positive number.`);
//     }
//     this.checkKopeyki(amount);
//     if (amount <= 0) {
//       throw new Error(`Wrong deposit amount, must be a positive number.`);
//     }
//     this.balance -= amount;
//   },

//   checkKopeyki(amount) {
//     const arr = amount.toString().split(".");
//     if (arr[1]?.length > 2) {
//       throw new Error(`Wrong format amount.`);
//     }
//   },

//   getBalance() {
//     return this.balance;
//   },

// };

// console.log(BankAccount);
// console.log(BankAccount.prototype);
// const bank = new BankAccount(112233, 2000);
// console.log(bank);



// Создайте класс Animal, который будет представлять животное. У
// класса Animal должны быть следующие свойства и методы:
// ● Свойство name (строка) - имя животного.
// ● Метод speak() - выводит в консоль звук, издаваемый животным.

// Создайте класс Dog, который наследуется от класса Animal. Для
// класса Dog добавьте дополнительное свойство и метод:
// ● Свойство breed (строка) - порода собаки.
// ● Метод fetch() - выводит в консоль сообщение "Собака [name]
// принесла мяч.".
 
// Пример использования:
// nimal1.speak(); // "Животное издает звук."
// const dogconst animal1 = new Animal("Животное");
// a1 = new Dog("Бобик", "Дворняжка");
// dog1.speak(); // "Бобик издает звук."
// console.log(dog1.breed); // "Дворняжка"
// dog1.fetch(); // "Бобик принес мяч."

class Animal {
    constructor (name) {
        this.name = name;
    }
    speak() {
        console.log(`${this.name} издает звук.`);
    }
}

class Dog extends Animal {
    constructor(name,breed) {
        super(name);
        this.breed = breed;
    }
    fetch() {
        console.log(`${this.name} принес мяч.`);
    }
}

const animal1 = new Animal('Животное')
animal1.speak(); // "Животное издает звук."
const dog1 = new Dog("Бобик", "Дворняжка");
dog1.speak(); // "Бобик издает звук."
console.log(dog1.breed); // "Дворняжка"
dog1.fetch(); // "Бобик принес мяч."


//принимаем секунды, возвращаем время
function secondsToHms(d) {
  d = Number(d);
  const h = Math.floor(d / 3600);
  const m = Math.floor((d % 3600) / 60);
  const s = Math.floor((d % 3600) % 60);

  const hDisplay = h > 0 ? h : "";
  const mDisplay = m > 0 ? m : "";
  const sDisplay = s;
  console.log(hDisplay);
  console.log(mDisplay);
  console.log(sDisplay);
  return `${hDisplay.toString().padStart(2,0)}:${mDisplay.toString().padStart(2,0)}:${sDisplay.toString().padStart(2,0)}`;
}

console.log(secondsToHms(202221));