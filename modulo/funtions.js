// objetivo: arquivo responsavél pelas funções para criar a API de estados e cidades
// data: 15-09-2025
// autor: Pedro Henrique Oliveira da Silva
// versão 1.0



//import do arquivo estados e cidades
const dados = require('./estados_cidades.js')

//mensagens

const MESSAGE_ERRO = {
    status : false, statuscode: 500, development: 'Pedro Henrique Oliveira da Silva'
}




// retorna lista de estados
const getAllEstados = function(){
    
    //construindo estrutura do Json que sera exibido (padrão)
    let message = {
        status: true,
        statuscode: 200,
        development: "Pedro Henrique Oliveira da Silva",
        uf: []

    }    

    //percorrendo Json dos estados com forEach e armazenando o retorno na variavel 'item'
    dados.listaDeEstados.estados.forEach(function(item){
        //adicionando as siglas que retornaram do Json no elemento array uf do json message
        message.uf.push(item.sigla)

        //adcionando o elemento quantidade no json
        message.quantidade = message.uf.length

    })
    if(message.uf.length < 0)
       return MESSAGE_ERRO
    else
        return message

    
    
}

// retorna os dados do estado pela sigla
const getEstadoBySigla = function(sigla){
    

    uf = sigla

    let message = {
        status: true,
        statuscode: 200,
        development: "Pedro Henrique Oliveira da Silva",
    }

    let estado = dados.listaDeEstados.estados.find(estado => estado.sigla === uf)


    if(estado){
        message.uf = estado.sigla
        message.descricao = estado.nome
        message.capital = estado.capital
        message.regiao = estado.regiao
        return message
    }else{
        return MESSAGE_ERRO
    }
}

// retorna os dados referentes a capital do estado pela sigla
const getCapitalBySigla = function(sigla){

    uf = sigla

    let message = {
        status: true,
        statuscode: 200,
        development: "Pedro Henrique Oliveira da Silva",
    }

    let estado = dados.listaDeEstados.estados.find(estado => estado.sigla === uf)
    message.uf = estado.sigla
    message.descricao = estado.nome
    message.capital = estado.capital

    return message
}

// retorna a lista de estados conforme a região
const getEstadosByRegiao = function(regiao){

}
// retorna os estados que são ou ja foram capitais pelo pais
const getEstadoIsCapitalByCountry = function(pais){

}


//retorna as cidades existentes em um estado, filtrando pela sigla
const getCidadesBySigla = function(sigla){

}



module.exports={
    getAllEstados,
    getEstadoBySigla,
    getCapitalBySigla
}