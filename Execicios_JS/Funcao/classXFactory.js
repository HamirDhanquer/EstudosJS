
class Pessoa{
    constructor(nome){
        this.nome = nome 
    }

    falar(){
        console.log( `Meu nome � ${this.nome}`)
    }
}

const p1 = new Pessoa('Jo�o')
p1.falar()

const criarPessoa = nome => {
    return{
        falar:() => console.log( `Meu nome � ${nome}` )
    }
}

const p2 = criarPessoa('Hamir')
p2.falar()