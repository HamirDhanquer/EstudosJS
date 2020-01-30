
const carrinho = [
    '{ "nome":"Borracha", "preco":3.45 }', 
    '{ "nome": "Caderno", "preco": 13.90}',
    '{ "nome": "Kit de Lápis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7 }'
]

// Retornar um array com os precos. 
const result = carrinho.map( function(e){
    e = JSON.parse(e)
    return e = e.preco
} )
console.log(`Feito por Hamir: ${result}`)

const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const resultado = carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultado)