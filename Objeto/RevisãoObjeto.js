//coleção dinâmica de pares chave/valor
const produto = new Object // operador 'new' cria uma objeto. Object é uma funcao
produto.nome = 'cadeira'
produto.preco = 220

console.log(produto)
delete produto.preco
console.log(produto)

const carro = {
    modelo: 'Clio',
    valor: 15000,
    proprietario: {
        nome: 'Henrique',
        idade: 22,
        endereco: {
            logradouro: 'Rua MB3',
            numero: 0,
        }
    },
    condutores: [{
        nome: 'jason',
        idade: 20,
    }, {
        nome: 'Mariana',
        idade: 30,
    }, {
        nome:'joao',
        idade: 19,
    }],
    calcularValorSegura: function() {
        //...
    }
}
carro.proprietario.endereco.numero = 1000
console.log(carro)

//delete carro.condutores
delete carro.calcularValorSegura
console.log(carro)
console.log(carro.condutores.length)