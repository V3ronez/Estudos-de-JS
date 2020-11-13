class Pessoa { 
    constructor(nome) {
        this.nome = nome
    }
    falar() {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('joão')
p1.falar()

const Criarpessoa = nome => {
    return{
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}
const p2 = Criarpessoa('carlos')
p2.falar()
console.log(typeof Criarpessoa)