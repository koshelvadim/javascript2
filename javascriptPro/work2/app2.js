// Задание 2 (тайминг 35 минут)
// У вас есть базовый список пользователей. Некоторые из них имеют информацию о своем премиум-аккаунте, а некоторые – нет. Ваша задача – создать структуру классов для этих пользователей и функцию для получения информации о наличии премиум-аккаунта, используя Опциональную цепочку вызовов методов, оператор нулевого слияния и instanceof.
// 1. Создайте базовый класс User с базовой информацией (например, имя и фамилия).
// 2. Создайте классы PremiumUser и RegularUser, которые наследуются от User. Класс PremiumUser должен иметь свойство premiumAccount (допустим, дата истечения срока действия), а у RegularUser такого свойства нет.
// 3. Создайте функцию getAccountInfo(user), которая принимает объект класса User и возвращает информацию о наличии и сроке действия премиум-аккаунта, используя Опциональную цепочку вызовов методов и оператор нулевого слияния.
// 4. В функции getAccountInfo используйте instanceof для проверки типа переданного пользователя и дайте соответствующий ответ.

class User {
  firstname;
  lastname;

  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }

  get firstname() {
    return this.firstname;
  }

  get lastname() {
    return this.lastname;
  }
}

class RegularUser extends User {
  constructor(firstname, lastname) {
    super(firstname, lastname);
  }
}

class PremiumUser extends User {
  constructor(firstname, lastname) {
    super(firstname, lastname);
  }

  premiumAccount = null;

  setPremiumAccount() {
    this.premiumAccount = new Date().setFullYear(new Date().getFullYear());
  }
}

function getAccountInfo(user) {
  if (user instanceof PremiumUser) {
    console.log(
      `Премиум аккаунт действителен до ${new Date(
        user.premiumAccount
      ).getFullYear()}` ?? "Информация отсутствует",
      user.firstname,
      user.lastname
    );
  } else if (user instanceof RegularUser) {
    console.log(
      "Пользователь без премиум аккаунта",
      user.firstname,
      user.lastname
    );
  } else {
    console.log("Пользователь не найден");
  }
}

//Реализация
const user1 = new RegularUser("Иван", "Иванов");
const user2 = new PremiumUser("Петя", "Петров");
user2.setPremiumAccount();
const user3 = new User("Вася", "Васильев");

getAccountInfo(user1);
getAccountInfo(user2);
getAccountInfo(user3);
