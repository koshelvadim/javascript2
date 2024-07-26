// Задание 1
// Представьте, что у вас есть класс для управления библиотекой. В этом классе будет приватное свойство для хранения списка книг, а также методы для добавления книги, удаления книги и получения информации о наличии книги.
// Класс должен содержать приватное свойство #books, которое инициализируется пустым массивом и представляет собой список книг в библиотеке.
// Реализуйте геттер allBooks, который возвращает текущий список книг.
// Реализуйте метод addBook(title), который позволяет добавлять книгу в список. Если книга с таким названием уже существует в списке, выбросьте ошибку с соответствующим сообщением.
// Реализуйте метод removeBook(title), который позволит удалять книгу из списка по названию. Если книги с таким названием нет в списке, выбросьте ошибку с соответствующим сообщением.
// Реализуйте метод hasBook(title), который будет проверять наличие книги в библиотеке и возвращать true или false в зависимости от того, есть ли такая книга в списке или нет.
// Реализуйте конструктор, который принимает начальный список книг (массив) в качестве аргумента. Убедитесь, что предоставленный массив не содержит дубликатов; в противном случае выбрасывайте ошибку.

list = ["book1", "book2", "book3"];

class Library {
  #bookList = [];

  constructor(list) {
    if (!Array.isArray(list)) {
      throw new Error("Добавьте существующий массив книг");
    }
    const uniqueList = new Set(list);
    if (uniqueList.size !== list.length) {
      throw new Error("Начальный список книг не уникален");
    }
    this.#bookList = list;
  }

  get allList() {
    return this.#bookList;
  }

  addBook(title) {
    if (this.#bookList.includes(title)) {
        throw new Error('Такая книга уже существует');
    }
    this.#bookList.push(title);
  }
  removeBook(title) {
    const index = this.#bookList.indexOf(title);
    if(index === -1) {
        throw new Error('Такой книги нет')
    }
    this.#bookList.splice(index, 1);
  }
  hasBook(title) {
    return this.#bookList.includes(title);
  }
}

//передаем существующий массив в библиотеку и выводим её
const lib = new Library(list);
console.log(lib);
// добавляем книгу4
lib.addBook('book4');
// удаляем книгу3
lib.removeBook('book3');
// проверяем существование книги1
console.log(lib.hasBook('book1'));