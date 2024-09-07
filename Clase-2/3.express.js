const express = require('express');

const app = express();

const PORT = 1234;

app.listen(PORT, ()=>{
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

app.get('/', (req, res)=>{
    res.send('<h1>Bienvenido a mi página de inicio</h1>');
});

app.get('/json', (req, res)=>{
    res.json({ hello: 'world' });
});

app.post('/contacto', (req, res)=>{
    res.send('<h1>Sobre mi página</h1>');
});

app.get('/messi', (req, res)=>{
    res.sendFile('./messi.webp');
});