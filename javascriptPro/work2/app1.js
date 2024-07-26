// Задание 1 (тайминг 25 минут)
// Давайте создадим класс для управления банковским счетом. В этом классе будет приватное
// свойство для хранения текущего баланса, а также методы для внесения и снятия денег со счета.
// 1. Класс должен содержать приватное свойство #balance, которое инициализируется
// значением 0 и представляет собой текущий баланс счета.
// 2. Реализуйте геттер balance, который позволит получить информацию о текущем балансе.
// 3. Реализуйте метод deposit(amount), который позволит вносить средства на счет.
// Убедитесь, что сумма внесения не отрицательная; в противном случае выбрасывайте
// ошибку.
// 4. Реализуйте метод withdraw(amount), который позволит снимать средства со счета.
// Убедитесь, что сумма для снятия неотрицательная и что на счете достаточно средств; в
// противном случае выбрасывайте ошибку.
// 5. Реализуйте конструктор, который принимает начальный баланс в качестве аргумента.
// Убедитесь, что начальный баланс не отрицательный; в противном случае выбрасывайте
// ошибку.

class BankAccount {
  #balance = 0;

  constructor(amount) {
    if (amount < 0) {
      throw new Error("для открытия счета нужны деньги!");
    }
    this.#balance = amount;
  }

  get balance() {
    return this.#balance;
  }

  set balance(amount) {
    this.#balance = amount;
  }

  deposit(money) {
    if (money <= 0) {
      throw new Error("для пополнения счета нужны деньги!");
    }
    this.#balance += money;
    return this.#balance;
  }

  withdraw(money) {
    if (money > this.#balance) {
      throw new Error("для снятия денег недостаточно средств");
    }
    if (money <= 0) {
      throw new Error("для снятия введите отличное от 0 число");
    }

    this.#balance -= money;
    return this.#balance;
  }
}


const account = new BankAccount(500);
console.log(account);

console.log(account.balance); //500

account.deposit(200);
console.log(account.balance); //700

account.withdraw(100);
console.log(account.balance); //600