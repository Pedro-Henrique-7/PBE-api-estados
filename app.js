// objetivo: API responsavel em criar endPoints referente esatdos e cidades
// data: 15-09-2025
// autor: Pedro Henrique Oliveira da Silva
// versão 1.0
//
// obs: instalar dependencias para criar api
//      express - npm install express          --save isntala dependencias para criar uma api 
//      cors    - npm install cors             --save instala as dependencias para configurar as permissões de api
//      body-parser - npm install  body-parser --save  instala as dependencias para receber os tipos de dados via post ou put

//import das dependencias
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
//deifine a porta padrão da api, se for servidor de nuvem nao temos acesso a porta
    //EM EXECUÇÃO LOCAL PODEMOS DEFINIR A PORTA
const PORT  = process.PORT || 8080

//instancia da classe express
const app = express()

//
app.use((request,response,next)=>{
    response.header('Acess-Control-Allow-Origin', '0.0.0.0')
    response.header('Acess-Control-Allow-Methods', 'GET')

    app.use(cors())
    next()
})

app.get('/v1/api-estados/estados', function(request, response){
})