const {readFileSync,writeFileSync} = require('fs')

const  fontFile = readFileSync('./assets/fonts/fonts.txt','utf-8')

const imageFile = readFileSync('./assets/images/image.txt')


writeFileSync('./assets/log.txt',`\nThis has ${fontFile} as well as ${imageFile}\n`,{flag:'a'})

