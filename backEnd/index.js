const { request, response } = require('express')
var express = require ('express')
var app = express()

app.get('/', (request,response)=>{
    response.send("desde index");
})

app.set('port',(process.env.PORT || 5000))
app.use (express.static(__dirname +  '/public'));

const cors=require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,           
   optionSuccessStatus:200,
}

app.use(cors(corsOptions));

app.listen(app.get('port'),function(){
    console.log("El back essta corriendo en el puerto: " + app.get('port'))
})

app.get('/users', (request,response)=>{
    response.send(loadUser());
})

const {loadUser} = require('./modeloUsuario');
