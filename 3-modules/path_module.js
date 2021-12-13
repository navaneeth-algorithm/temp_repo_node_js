const path = require('path')

console.log(path.sep)

const filePath = path.join('assets','fonts','fonts.txt')

console.log(filePath)


const base = path.basename(filePath)
console.log(base)

const absolute = path.resolve(__dirname,filePath)
console.log(absolute)