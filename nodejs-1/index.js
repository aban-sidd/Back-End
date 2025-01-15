const http = require('http')

console.log('index.js')

console.log(__dirname)
console.log(__filename)


module.exports = {
    add: (a, b) => a + b,
    multiply: (a, b) => a * b,
    divide: (a, b) => a / b,
    subtract: (a, b) => a - b
};  


const server = http.createServer((req , res ,next) => {
    console.log('request recieved')
    console.log(req.url)
 
    if(req.url == '/home.html'){
        res.end('Welcome to the home page ')
    }
    else if (req.url == '/'){
        res.end('Welcome to the  page /')
    }
    else if (req.url == '/about.html'){
        res.end('Welcome to the About page')
    }
    else if(req.url == '/service.html'){
        res.end('Welcome to the Service page')  
    }
    else{
        res
        .writeHead(404,{
            'Content-Type': 'text/plain'
        })
        .end('Not Found')
    }

})


server.listen(4000 , 'localhost' , (err) => {
    if(err){
        console.log('error while starting' , err)
    }else{
        console.log('Server is running on port 4000')
    }
})