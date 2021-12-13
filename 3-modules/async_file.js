const {readFile,writeFile} = require('fs')

readFile('./assets/fonts/fonts.txt','utf8',(err,result)=>{
    if(err){console.log(err);return }
    console.log(result)
})
