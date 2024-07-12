const { calculateResultSum } = require("./calculate");

// Должен быть результат 78.66
const total = calculateResultSum([12.1, 32.2, 43.1], 0.9);
const str = "Общая стоимость покупок: " + total + " рублей";
// const res = total >= 50 ? str.red : str.green;
// По факту получаем 78.66000000000001
console.log(total >= 50 ? str : str);
console.log(red.toString());