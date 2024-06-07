const books = require('./data/books.json');
const express = require('express');
const app = express();
const port = 3000;

app.get('/all', (req, res) => {
    console.log(res.json(books));
});

app.get('/first', (req, res) => {
    console.log(res.json(books[0]));
});

app.get('/last', (req, res) => {
    console.log(res.json(books[books.length-1]));
});

app.get('/middle', (req, res) => {
    res.json(books[50]);
});

app.get('/author/dante-alighieri', (req, res) => {
    const book = books.find((input)=>input.author === 'Dante Alighieri').title
    if(book){
        res.json(book)
    }else{
        res.status(404).send('Libro no encontrado')
    }
});
app.get('/country/charles-dickens', (req, res) => {
    const book = books.find((input)=>input.author === 'Charles Dickens').country
    if(book){
        res.json(book)
    }else{
        res.status(404).send('Libro no encontrado')
    }
});
app.get('/year&pages/cervantes', (req, res) => {
    const book = books.find((input)=>input.author == 'Miguel de Cervantes')
    const {year, pages}= book
    if(book){
        res.json({year, pages})
    }else{
        res.status(404).send('Libro no encontrado')
    }
});
app.get('/country/count/spain', (req, res) => {
    const book = books.filter((input)=>input.country === 'Spain')
    if(book){
        res.json(book.length) 
    }else{
        res.status(404).send('Libro no encontrado')
    }
});
app.get('/country/at-least/germany', (req, res) => {
    const book = books.some((input)=>input.country === 'Germany')
    if(book){
        res.json(book)
    }else{
        res.status(404).send('Libro no encontrado')
    }
});
app.get('/pages/all-greater/200', (req, res) => {
    const book = books.every((input)=> input.pages > 200)
    res.json(book)
});

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});