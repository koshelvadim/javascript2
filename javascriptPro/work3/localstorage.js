// Установка значения
// localStorage.setItem('username', 'John');
// Получение значения
// const user = localStorage.getItem('username');
// console.log(user);
// Удаление значения
// localStorage.removeItem('username');
// Очистка localstorage
// localStorage.clear();

const inputEl = document.getElementById('input');
const buttonEl = document.getElementById('button');
const listEl = document.getElementById('list');

const shoppingList = JSON.parse(localStorage.getItem('shoppingList')) || [];



const updateShoppingList = ( ) => {
    listEl.innerHTML = '';
    
    shoppingList.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = item;
        listEl.append(listItem);
    });

    localStorage.setItem('shoppingList', JSON.stringify(shoppingList))
}

buttonEl.addEventListener('click', function (e) {
    const newItem = inputEl.value.trim();

    if (newItem !=='') {
        shoppingList.push(newItem);
        inputEl.value = '';
        updateShoppingList();
    }
}); 

updateShoppingList();