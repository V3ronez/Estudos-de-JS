/*class Pessoa { 
    constructor(nome) {
        this.nome = nome
    }
    falar() {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('joão')
p1.falar() */

function Pessoa2 (nome){
    this.nome = nome
    this.falar = function(){
        console.log(`Meu nome é ${nome}`)
    }
}
const p2 = new Pessoa2('palhacinho')
p2.falar()