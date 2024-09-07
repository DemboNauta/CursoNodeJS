const fs = require('node:fs/promises');
const path = require('node:path');
const { exit } = require('node:process');

const pc = require('picocolors');

const folder = process.argv[2] ?? '.';

async function ls (folder){
    let files
    try {
        files = await fs.readdir(folder);
      }
    catch (err) {
        console.error(pc.red(`❌ No se pudo leer el directorio ${folder}`));
        exit(1);
    }

    const filePromises = files.map(async file =>{
        const filePath = path.join(folder, file);
        let stats;
        try{
            stats = await fs.stat(filePath);
        }catch (err){
            console.log(`No se pudo leer el archivo ${filePath}`);
        }
        const isDirectory = stats.isDirectory();
        const fileType = isDirectory ? 'folder' : 'file';
        const fileSize = stats.size;
        const fileName = path.basename(filePath);
        const fileModified = stats.mtime.toLocaleDateString();

        return `${fileType} ${fileSize.toString().padStart(10)} bytes ${fileName.padEnd(20)} ${fileModified}`;
    })

    const filesInfo = await Promise.all(filePromises);

    filesInfo.forEach(fileInfo => {
        console.log(fileInfo);
    });
}

ls(folder);



