
let dobro = function(a){
    return 2 * a 
}

dobro = (a) => {
    return 2 * a 
}

dobro = a => 2 * a // return implicito 

console.log(dobro(Math.PI))

let ola = function (){
    return 'Ol�'
}

ola = () => 'Ol�'
ola = _ => 'Ol�' // possui 01 par�metro

console.log(ola())