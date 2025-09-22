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
    
    if(estado){
        message.uf = estado.sigla
        message.descricao = estado.nome
        message.capital = estado.capital

        return message
    }else{
        return MESSAGE_ERRO
    }
}

// retorna a lista de estados conforme a região
const getEstadosByRegiao = function(regiao){
    
    let message = {
        status: true,
        statuscode: 200,
        development: "Pedro Henrique Oliveira da Silva",
        regiao:'',
        estados: []
    }

   dados.listaDeEstados.estados.forEach(function(estado){
        if(estado.regiao === regiao){
            message.regiao = estado.regiao
            let uf = estado.sigla
            let descricao = estado.nome
            let estadoRegiao = {uf, descricao}
            message.estados.push(estadoRegiao)
        }
    })

    if(!(message.estados.length === 0 )|| !(message.regiao === "")){
        return message
    }else{
        return MESSAGE_ERRO
    }



}
// retorna os estados que são ou ja foram capitais pelo pais
const getEstadoIsCapital = function(){

    let message = {
        status: true,
        statuscode: 200,
        development: "Pedro Henrique Oliveira da Silva",
        capitais:[]
    }
    
    dados.listaDeEstados.estados.forEach(function(estado){
        if(estado.capital_pais){
            let capital_atual = estado.capital_pais.capital
            let uf = estado.sigla
            let descricao = estado.nome
            let capital = estado.capital
            let regiao = estado.regiao
            let capital_pais_ano_inicio = estado.capital_pais.ano_inicio
            let capital_pais_ano_termino = estado.capital_pais.ano_fim
            let capitais = {capital_atual, uf, descricao, capital, regiao, 
                            capital_pais_ano_inicio, capital_pais_ano_termino}
            message.capitais.push(capitais)
        }
        
    })
    
    if(!(message.capitais.length === 0))
        return message
    else
        return MESSAGE_ERRO

}


//retorna as cidades existentes em um estado, filtrando pela sigla
const getCidadesBySigla = function(sigla){
    let message = {
        status: true,
        statuscode: 200,
        development: "Pedro Henrique Oliveira da Silva",
        uf:"",
        descricao:"",
        quantidade_cidades:'',
        cidades:[]
    }
    dados.listaDeEstados.estados.forEach(function(estado){
        if(estado.sigla === sigla){
            message.uf = estado.sigla
            message.quantidade_cidades = estado.cidades.length
            message.descricao = estado.nome
            message.cidades.push(estado.cidades)
        }
    })
    if(!(message.cidades.length === 0 )|| !(message.uf === "")){
        return message
    }else{
        return MESSAGE_ERRO
    }
}

getCidadesBySigla("g")

module.exports={
    getAllEstados,
    getEstadoBySigla,
    getCapitalBySigla,
    getEstadosByRegiao,
    getEstadoIsCapital,
    getCidadesBySigla
}