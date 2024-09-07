const fs = require('node:fs')

const stats = fs.statSync('./archivo.txt')

console.groupCollapsed(stats.isFile(), stats.isDirectory(), stats.isSymbolicLink(), stats.size)
