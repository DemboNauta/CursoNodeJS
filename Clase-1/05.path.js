const path = require('node:path');

console.log(path.sep);

//unir rutas con path.join

const filePath = path.join(__dirname, 'subfolder', 'archivo.txt');


const base = path.basename(filePath);
console.log(filePath);

const extension = path.extname(filePath);
console.log(extension);
console.log(base);

const prueba = 'hola..aolgao..txt..hola'

console.log(path.extname(prueba));

//ls

