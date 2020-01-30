/**
 * Funcao em JS é First Class Object (Citizens)
 * High Order function 
 * 
 */

 // Criar de forma literal 
 function fnl(){ }

 // Armazenar numa varável 
 const func2 = function (){}

 // Armazenar num array 
 //const array = [ function (a, b) { return a + b }, fun1, fun2 ]

 // Armazenar atributo de objeto 
 const obj = {}
 obj.falar = function(){ return 'OPa' }
 console.log(obj.falar)

 // Passar funcao como param 
 function run( fun ){
     fun()
 }

 run( function(){ console.log('Executando...') } )

 // Uma função pode conter uma função 
 function soma(a,b){
     return function(c){
         console.log(a + b + c)
     }
 } 

soma(2,3)(4)

const cincoMais = soma(2,3)
cincoMais(4)


//