const http = require("http");

function getCount() {
  let count = 0;
  return function() {
    count++;
    return count;
  }
}

const count1 = getCount();
const count2 = getCount();

const server = http.createServer((req, res) => {
  console.log("Запрос получен");

  if (req.url === "/") {
    res.writeHead(200, {
      "Content-Type": "text/html; charset=UTF-8",
    });
    res.end(
      ` <h1>Главная страница</h1>
        <a href="/about">About</a>
        <p>Количество посещений страницы ${count1()}</p>
      `
    );
  } else if (req.url === "/about") {
    res.writeHead(200, {
      "Content-Type": "text/html; charset=UTF-8",
    });
    res.end(
      ` <h1>Страница About</h1>
        <a href="/">Главная</a>
        <p>Количество посещений страницы ${count2()}</p>
      `
    );
  } else {
    res.writeHead(404, {
      "Content-Type": "text/html; charset=UTF-8",
    });
    res.end(
      ` <h1>Ошибка 404</h1>
        <p>Страница не найдена</p>
      `
    );
  }
});

server.listen("3000");