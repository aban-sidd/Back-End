const app = require('./app')

app.listen(4000,'localhost',(err)=>{

    if(err){
        console.log('error while starting the server',err)
    }else{
        console.log('server started on port 4000')
    }
})