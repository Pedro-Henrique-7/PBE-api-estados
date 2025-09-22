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

//import do arquivo de funções
const dados = require('./modulo/funtions.js')


//deifine a porta padrão da api, se for servidor de nuvem nao temos acesso a porta
    //EM EXECUÇÃO LOCAL PODEMOS DEFINIR A PORTA
const PORT  = process.PORT || 8080

//instancia da classe express
const app = express()

//config cors
app.use((request,response,next)=>{
    response.header('Acess-Control-Allow-Origin', '*') // Ip de Origem
    response.header('Acess-Control-Allow-Methods', 'GET') //  Metodos Http

    app.use(cors())
    next() //Ler os proximos end points 
})

//request recebe parametros para serem usados
// response envia os dados na API

//endpoints

//listar estado
app.get('/v1/estados', function(request, response){
  let estados = dados.getAllEstados()

  response.status(estados.statuscode) 
  response.json(estados) 

})



//endpoint para buscar estado pela sigla 
app.get('/v1/estado/:uf', function(request, response){
    let sigla = request.params.uf
    let estado = dados.getEstadoBySigla(sigla)

    response.status(estado.statuscode)
    response.json(estado)

})


// endpoint que busca capital pela sigla
app.get('/v1/estadoCapital/:uf', function(request, response){
    let sigla = request.params.uf
    let estado = dados.getCapitalBySigla(sigla)

    response.status(estado.statuscode)
    response.json(estado)

})

// endpoint que busca estados por região
app.get('/v1/estadoRegiao/:regiao', function(request, response){
    let regiao = request.params.regiao
    let estados = dados.getEstadosByRegiao(regiao)

    response.status(estados.statuscode)
    response.json(estados)

})

// endpoint que busca todas os estados que ja foram capitais do Brasil

app.get('/v1/capitais', function(request, response){
    let estados = dados.getEstadoIsCapital()

    response.status(estados.statuscode)
    response.json(estados)
})


app.get('/v1/cidades/:uf', function(request, response){
    let uf = request.params.uf
    let cidades = dados.getCidadesBySigla(uf)

    response.status(cidades.statuscode)
    response.json(cidades)
})

app.listen(PORT, function(){
    console.log("Api aguardando requisições (:D)")
})