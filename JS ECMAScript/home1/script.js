// Домашнее задание

// 1) Дан массив const arr = [1, 5, 7, 9] с помощью Math.min и spread оператора,
// найти минимальное число в массиве, решение задание должно состоять из одной
// строки кода.

const arr = [1, 5, 7, 9];

console.log('min element of array is: ', Math.min(...arr));

// 2) Напишите функцию createCounter, которая создает счетчик и возвращает объект
// с двумя методами: increment и decrement. Метод increment должен увеличивать
// значение счетчика на 1, а метод decrement должен уменьшать значение счетчика
// на 1. Значение счетчика должно быть доступно только через методы объекта,
// а не напрямую.

function createCounter(count = 0) {
  function increment() {
    return ++count;
  }
  function decrement() {
    return --count;
  }
  return { increment, decrement };
}

const count1 = createCounter();

console.log(count1.increment()); //1
console.log(count1.decrement()); //0
console.log(count1.increment()); //1
console.log(count1.increment()); //2
console.log(count1.decrement()); //1
console.log(count1.decrement()); //0

// 3) Дополнительное задание, выполняем только если проходили работу с DOM.
// Напишите рекурсивную функцию findElementByClass, которая принимает корневой
// элемент дерева DOM и название класса в качестве аргументов и возвращает первый
// найденный элемент с указанным классом в этом дереве.
// Пример
// const rootElement = document.getElementById('root');
// const targetElement = findElementByClass(rootElement, 'my-class');
// console.log(targetElement);

const rootElement = document.getElementById("root");

function findElementByClass(rootElement, classEl) {
  const listEl = [...rootElement.children];
  let count = 0;

  while (count < listEl.length) {
    const element = listEl[count];
    if (element.classList.contains(classEl)) {
      break;
    }
    count++;
  }
    return listEl[count];
}

const targetElement = findElementByClass(rootElement, "my-class");
console.log(targetElement);
