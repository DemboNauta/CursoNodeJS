const http = require('node:http');
const fs = require('node:fs');

const desiredPort = 1234;

const processRequest=(req, res)=>{
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    if(req.url === '/'){
        res.statusCode = 200;
        res.end(`<h1>Bienvenido a mi página de inicio</h1>`);
    }else if(req.url === '/messi'){
        fs.readFile('./messi.webp', (err, data)=>{
            if(err){
                res.statusCode = 500;
                res.end('<h1>Error al leer el archivo</h1>');
            }else{
                res.setHeader('Content-Type', 'image/webp');
                res.end(data);
            }
        });
    }
    else if(req.url === '/contacto'){
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html; charset=utf-8');
        res.end(`<h1>Sobre mi página</h1>`);
    }else{
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/html; charset=utf-8');
        res.end(`<h1>Página no encontrada</h1>`);
    }
}

const server = http.createServer(processRequest);

server.listen(desiredPort, ()=>{
    console.log(`Servidor corriendo en http://localhost:${desiredPort}`);
});
