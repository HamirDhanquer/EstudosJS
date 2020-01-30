
const nums = [1,2,3,4,5]
console.log(nums)

// For com propósito. Ele irá transformar.  
// Gera novo array. Não modifica o original
let result = nums.map(function(e){
    return e * 2
})
console.log(result)

const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.',',')}`

result = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(result)
