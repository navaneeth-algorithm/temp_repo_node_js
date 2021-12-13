const http = require('http')

const server = http.createServer((req,res)=>{
if(req.url==='/'){
    res.end('Welcome to home page')
}
else if(req.url==='/about'){
    res.end('About page')
}
else{
    res.end(`<h1>ERROR 404 page</h1><a href="/">Go back</a>`)
}

})
server.listen(3000)