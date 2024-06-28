"use strict";
// Задание 1 (тайминг 20 минут)
// 1. Создайте объект Person, представляющий человека, с
// следующими свойствами: name, age и gender. Добавьте
// также методы introduce и changeName. Метод introduce
// должен выводить информацию о человеке в консоль,
// включая его имя, возраст и пол. Метод changeName должен
// изменять имя человека на новое заданное значение.

// person.name = "John";
// person.age = 25;
// person.gender = "male";
// "My name is John. I'm 25 years old and I identify as male."
// person.introduce();
// person.changeName("Mike");
// "My name is Mike. I'm 25 years old and I identify as male."
// person.introduce();

// const person = {
//     name: 'John',
//     age: 25,
//     gender: 'male',
//     introduce() {
//         console.log(`My name is ${this.name}. I'm ${this.age} years old and I identify as ${this.gender}.`);
//     },
//     changeName(newName) {
//         this.name = newName;
//     }
// }

// person.introduce();
// person.changeName('dima');
// person.introduce();

// class Person {
//   name = "John";
//   age = 25;
//   gender = "male";

//   introduce() {
//     console.log(
//       `My name is ${this.name}.I'm ${this.age} years old and I identify as ${this.gender}.`
//     );
//   }
//   changeName(newName) {
//     this.name = newName;
//   };
// }

// const johnPerson = new Person();
// console.log(johnPerson);
// johnPerson.introduce();
// johnPerson.changeName("Ivan");
// johnPerson.introduce();

// 1. Создайте объект animal со свойством name и методом eat(), который
// выводит сообщение о том, что животное ест. Создайте объект dog со
// свойством name и методом bark(), который выводит сообщение о
// том, что собака лает. Одолжите метод eat() из объекта animal для
// объекта dog, чтобы вывести сообщение о том, что собака ест.

// dog.eat(); // "Rex eating."

// const animal = {
//   name: "John",
//   eat() {
//     console.log(`${this.name} `);
//   },
// };

// const dog = {
//   name: "Dog",
//   bark() {
//     console.log(`${this.name} bark `);
//   },
// };

// dog.eat = animal.eat;

// Создайте обычную функцию add, которая будет складывать this.a и this.b
// и возвращать значение, которое получим.
// Создать объект, в котором будут свойства `a` и `b`, со значениями в виде
// чисел (любые значения).
// Необходимо вызвать функцию add так, чтобы она правильно отработала с
// нашим объектом.

// const obj = {
//   a: 5,
//   b: 6,
// };

// function add() {
//   console.log(this);
//   return this.a + this.b;
// }

// // console.log(add());

// console.log(add.call(obj));

// Создайте класс Person, который имеет свойства name и age, а также
// метод introduce(), который выводит сообщение в консоль с
// представлением имени и возраста персоны.
// const person = new Person("John", 25);
// person.introduce(); // "My name is John and I'm 25 years old."

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   introduce() {
//     console.log(`My name is ${this.name} and I'm ${this.age} years old.`);
//   }
// }
// const person = new Person("John", 25);
// person.introduce();

// Создайте класс BankAccount, который представляет банковский счет.
// У него должны быть свойства accountNumber (номер счета) и balance
// (баланс), а также методы deposit(amount) для пополнения счета,
// withdraw(amount) для снятия денег со счета и метод printBalance,
// который отобразит в консоль текущий баланс счета. Класс должен иметь
// также статическое свойство bankName со значением "GBank", которое
// содержит название банка.

class BankAccount {
  static bankName = "GBank";
  constructor(accountNumber, balance) {
    this.accountNumber = accountNumber;
    this.balance = balance;
  }

  deposit(amount) {
    // if (typeof amount !== "number") {
    if (!Number.isFinite(amount)) {
      throw new Error(`Wrong deposit amount, must be a positive number.`);
    }
    this.checkKopeyki(amount);
    if (amount <= 0) {
      throw new Error(`Wrong deposit amount, must be a positive number.`);
    }
    this.balance += amount;
  }

  withdraw(amount) {
    if (typeof amount === "number") {
      this.checkKopeyki(amount);
      if (amount > this.balance) {
        throw new Error(
          `Insufficient funds in account "${this.accountNumber}"`
        );
      } else if (amount <= 0) {
        throw new Error(`Wrong deposit amount, must be a positive number.`);
      } else {
        this.balance -= amount;
      }
    } else {
      throw new Error(`Wrong deposit amount, must be a positive number.`);
    }
  }

  printBalance() {
    console.log(
      `${BankAccount.bankName} account "${this.accountNumber}" balance: ${this.balance}`
    );
  }

  checkKopeyki(amount) {
    const arr = amount.toString().split(".");
    if (arr[1]?.length > 2) {
      throw new Error(`Wrong format amount.`);
    }
  }
}

const account1 = new BankAccount("1234567890", 1000);
account1.withdraw(200);
account1.withdraw(1500); // Insufficient funds in account "1234567890"
account1.withdraw(-200); // Wrong deposit amount, must be a positive number.
account1.deposit(-500); // Wrong deposit amount, must be a positive number.
account1.deposit(Infinity); // Wrong deposit amount, must be a positive number.
account1.printBalance(); // GBank account "1234567890" balance: 1300
account1.deposit(500.99999);