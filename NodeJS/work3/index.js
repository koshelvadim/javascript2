const fs = require('fs');
const path = require('path');

const person = { 
    name: "Ivan", 
    surname: "Ivanov", 
    age: 30, 
    city: "Moscow" 
};

const filePath = path.join(__dirname, 'person.json');

fs.writeFileSync(filePath, JSON.stringify(person));


// fs.writeFileSync(filePath, JSON.stringify(person, ['name', 'age'], 2));
// 2 кол-во пробелов при форматировании, если вместо массива поставить null то передается весь объект


const dataJson = fs.readFileSync(filePath,'utf-8');
const data = JSON.parse(dataJson);

data.age -= 10;
data.city = 'Ekaterinburg';

fs.writeFileSync(filePath, JSON.stringify(data));

