// Задание 1
// • Используя Symbol.iterator, создайте объект "Музыкальная коллекция", который можно итерировать. Каждая итерация должна возвращать следующий альбом из коллекции.

// • Создайте объект musicCollection, который содержит массив альбомов и имеет свойство-символ Symbol.iterator. Каждый альбом имеет следующую структуру:

// {
// title: "Название альбома",
// artist: "Исполнитель",
// year: "Год выпуска"
// }

// • Реализуйте кастомный итератор для объекта musicCollection. Итератор должен перебирать альбомы по порядку.
// • Используйте цикл for...of для перебора альбомов в музыкальной коллекции и вывода их на консоль в формате: Название альбома - Исполнитель (Год выпуска)

const musicCollection = {
  musicAlbums: [
    { title: "Руки Вверх", artist: "Сергей Жуков", year: "2001" },
    { title: "Сектор Газа", artist: "Юрий Хой", year: "1994" },
    { title: "Кино", artist: "Виктор Цой", year: "1992" },
  ],
  [Symbol.iterator]() {
    this.index = 0;
    return this;
  },
  next() {
    return this.index < this.musicAlbums.length
      ? { done: false, value: this.musicAlbums[this.index++] }
      : { done: true };
  },
};

for (const album of musicCollection) {
  console.log(`${album.title} - ${album.artist} (${album.year})`);
}

// Задание 2
// Вы управляете рестораном, в котором работают разные повара, специализирующиеся на определенных блюдах. Клиенты приходят и делают заказы на разные блюда.

// Необходимо создать систему управления этими заказами, которая позволит:

// • Отслеживать, какой повар готовит какое блюдо.
// • Записывать, какие блюда заказал каждый клиент.

// Используйте коллекции Map для хранения блюд и их поваров, а также для хранения заказов каждого клиента. В качестве ключей для клиентов используйте объекты.

// Повара и их специализации:

// Виктор - специализация: Пицца.
// Ольга - специализация: Суши.
// Дмитрий - специализация: Десерты.

const cooks = new Map()
  .set("Виктор", "Пицца")
  .set("Ольга", "Суши")
  .set("Дмитрий", "Десерты");


// Блюда и их повара:

// Пицца "Маргарита" - повар: Виктор.
// Пицца "Пепперони" - повар: Виктор.
// Суши "Филадельфия" - повар: Ольга.
// Суши "Калифорния" - повар: Ольга.
// Тирамису - повар: Дмитрий.
// Чизкейк - повар: Дмитрий.

const dishes = new Map()
  .set("Пицца 'Маргарита'", "Виктор")
  .set("Пицца 'Пепперони'", "Виктор")
  .set("Суши 'Филадельфия'", "Ольга")
  .set("Суши 'Калифорния'", "Ольга")
  .set("Тирамису", "Дмитрий")
  .set("Чизкейк", "Дмитрий");

// Заказы:

// Клиент Алексей заказал: Пиццу "Пепперони" и Тирамису.
// Клиент Мария заказала: Суши "Калифорния" и Пиццу "Маргарита".
// Клиент Ирина заказала: Чизкейк.


//создаем клиента и его заказ
const client1 = { name: "Алексей" };
const client2 = { name: "Мария" };
const client3 = { name: "Ирина" };

const clientOrder1 = new Set().add("Пицца 'Пепперони'").add("Тирамису");
const clientOrder2 = new Set()
  .add("Суши 'Калифорния'")
  .add("Пицца 'Маргарита'");
const clientOrder3 = new Set().add("Чизкейк");

//формируем заказы
const orders = new Map()
  .set(client1, clientOrder1)
  .set(client2, clientOrder2)
  .set(client3, clientOrder3);

//выводим в консоль
console.log(`Клиент ${client1.name} заказал(а): ${[...orders.get(client1)]}`);
console.log(`Клиент ${client2.name} заказал(а): ${[...orders.get(client2)]}`);
console.log(`Клиент ${client3.name} заказал(а): ${[...orders.get(client3)]}`);
