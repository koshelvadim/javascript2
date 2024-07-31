// Напишите функцию setCookie(name, value, days), которая устанавливает cookie с
// указанным именем, значением и сроком действия.

const setCookie = (name, value, days) => {
  const expirationDate = new Date();
  expirationDate.setDate(expirationDate.getDate() + days);

  const cookieValue =
    encodeURIComponent(value) + "; expires=" + expirationDate.toUTCString();
    console.log(cookieValue);
  document.cookie = name + "=" + cookieValue;
};

setCookie("username", "John-Doe", 7);
setCookie("userinfo", "Mister", 5);
setCookie("user", "Ivan-Ivanov", 15);

// Напишите функцию getCookie(name), которая возвращает cookie с указанным именем.

const getCookie = (name) => {
  const cookies = document.cookie.split(";");
  for (const cookie of cookies) {
    const [cookieName, cookieValue] = cookie.trim().split("=");
    if (cookieName === name) {
      return decodeURIComponent(cookieValue);
    }
  }
  return null;
};

const username = getCookie("username");
console.log('Значение cookie "username":', username);

// Напишите фукцию deleteCookie(name), которая удаляет cookie с указанным именем.

const deleteCookie = (name) => {
  document.cookie = name + `=; expires=${new Date(0)}`;
};

deleteCookie("userinfo");
