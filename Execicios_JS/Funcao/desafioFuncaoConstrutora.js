
function Pessoa(nome){
    this.nome = nome
    
    this.falar = function(){
        console.log( `Meu Nome � ${this.nome}` )
    } 
}

Pessoa('Hamir')