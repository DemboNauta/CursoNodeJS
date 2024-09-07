const fs = require('node:fs/promises');

console.log('Leyendo el primer archivo')
const text =  fs.readFile('./archivo.txt', 'utf8').then((text)=>{
    console.log(text);
});


// console.log(text);

console.log('Haer cosas mientras lee el archivo')

console.log('Leyendo el segundo archivo')

fs.readFile('./archivo2.txt', 'utf8').then((text)=>{
    console.log(text);
});


