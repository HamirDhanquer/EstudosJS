console.log(soma(3,4))
// Posso chamar a funcao antes de ser declarada. 

console.log(sub(3,4))
console.log(mult(3,4))
// So pode ser chamada após criada. 

// function declaration 
function soma( x, y){
    return x+y
}

// function expression 
const sub = function(x,y){

}

// named function expression 
const mult = function mult(x,y){
    return x*y
}

