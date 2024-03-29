Array.prototype.map2 = function(callBack){
    const newArray = []
    for( let i = 0; i < this.length; i++ ){
        newArray.push(callBack(this[i], i, this))
    }
    return newArray
}


const carrinho = [
    '{ "nome":"Borracha", "preco":3.45 }', 
    '{ "nome": "Caderno", "preco": 13.90}',
    '{ "nome": "Kit de L�pis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7 }'
]

const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const resultado = carrinho.map2(paraObjeto).map2(apenasPreco)
console.log(resultado)