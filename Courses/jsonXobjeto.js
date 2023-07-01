// JSON (Text): Formato de dados. 
// É formato mais utilizado para interoperabilidade 
// entre sistemas. 

const obj = { a:1, b:2, c:3, soma(){ return a + b + c } }
console.log( JSON.stringify(obj) )

// console.log( JSON.parse( "{ a:1, b:2, c:3 }" ) )
//console.log( JSON.parse( "{ 'a':1, 'b':2, 'c':3 }" ) )

console.log( JSON.parse( '{ "a":1, "b":2, "c":3 }' ) )
console.log( JSON.parse( '{ "a":1, "b":"string", "c":true, "d": {}, "e":[] }' ) )
