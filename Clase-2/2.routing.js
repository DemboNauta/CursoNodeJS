const http = require('node:http');

const processRequest=(req, res)=>{
    const { method, url } = req;

    switch(method){
        case 'GET':
            switch(url){
                case '/':
                    res.statusCode = 200;
                    res.end(`<h1>Bienvenido a mi página de inicio</h1>`);
                    break;
                case '/messi':
                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'image/webp');
                    res.end(fs.readFileSync('./messi.webp'));
                    break;
            }
            break;
        case 'POST':
            switch(url){
                case '/contacto':
                    res.statusCode = 200;
                    res.end(`<h1>Sobre mi página</h1>`);
                    break;
            }
            break;
    }

}

const server = http.createServer(processRequest);

server.listen(1234, ()=>{
    console.log(`Servidor corriendo en http://localhost:${1234}`);
});