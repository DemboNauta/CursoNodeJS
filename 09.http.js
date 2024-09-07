const http = require('node:http');
const { findAvailablePort } = require('./10.free-port');

const server = http.createServer((req, res)=>{
    console.log('request recibido');
    console.log(req.url.at(0));
    res.end('Hola mundo');
});

findAvailablePort(22).then(port=>{
    server.listen(port, ()=>{
        console.log(`Servidor corriendo en http://localhost:${port}`);
    });
});