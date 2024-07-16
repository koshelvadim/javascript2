const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();
const filePath = path.join(__dirname, "count.json");


app.get("/", (req, res) => {
  const dataJson = fs.readFileSync(filePath, "utf-8");
  const data = JSON.parse(dataJson);
  data.main++;
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

  res.send(`<h1>MAIN</h1>
            <a href="/about">about</a>
            <p>Просмотров: <span class="count-main">${data.main}</span></p>`);
});

app.get("/about", (req, res) => {
  const dataJson = fs.readFileSync(filePath, "utf-8");
  const data = JSON.parse(dataJson);
  data.about++;
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

  res.send(`<h1>ABOUT</h1>
            <a href="/">main</a>
            <p>Просмотров: <span class="count-about">${data.about}</span></p>`);
});

const port = 3000;

app.listen(port, () => {
  console.log(`server start at port ${port}`);
});
