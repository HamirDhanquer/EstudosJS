// Closure é o escopo criado quando uma funcao é declarada 
// Esse escopo permite a funcao acessar e manipular as variaveis 
//externas a funcao. 

const x = 'Global'

function fora(){
    const x = 'xlocal'
    
    function dentro(){
        return x 
    }
return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao())