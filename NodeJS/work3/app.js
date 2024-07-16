const express = require('express');

const app = express();

// app.get('/', (req, res) => {
//     res.send(`<h1>Главная</h1>
//             <a href="/about">about</a>`)
// })

// app.get('/about', (req, res) => {
//     res.send(`<h1>Обо мне</h1>
//         <a href="/">main</a>`);
// })

app.use(express.static('./static'));

const port = 3000;

app.listen(port, () => {
    console.log("server start");
})