//par nome/valor
const saudacao = 'opa' //contexto léxico 1

function exec(){
    const saudacao = 'eae' // contexto léxico 2
    return saudacao
}

//objeto são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Henrique',
    idade: 20,
    peso: 70,
    endereco: {
        logradouro: 'Rua bla bla bla',
        numero: 1234,
    }
}
console.log(saudacao)
console.log(exec())
console.log(cliente)