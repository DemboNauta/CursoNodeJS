const http = require('node:http');

const server = http.createServer((req, res)=>{
    console.log('request recibido');
    console.log(req.url.at(0));
    res.end('Hola mundo');
});

server.listen(0, ()=>{
    console.log(`Servidor escuchando en el puerto http://localhost:${server.address().port}`);
});