const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

const data = [
    {
        "id": 1,
        "name": "Janicsak Gyula",
        "age": 26,
        "email": "janicsakgyuszi@gmail.com"
    },
    {
        "id": 2,
        "name": "Kovacs Bela",
        "age": 45,
        "email": "kovacsbela@gmail.com"
    },
    {
        "id": 3,
        "name": "Lakatos Ferdinand",
        "age": 15,
        "email": "ferdilakatos@gmail.com"
    },
    {
        "id": 4,
        "name": "Pici Imre",
        "age": 62,
        "email": "imre_pici@gmail.com"
    },
]

app.get('/', (req, res) => {
    res.json('This is the homepage');
});

app.get('/api/test', (req, res) => {
    res.json(data);
});

app.listen('5000', () => {
    console.log('Server is listening on PORT 5000');
})