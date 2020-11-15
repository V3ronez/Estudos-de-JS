//pessoa --> 123(endereço de memoria) --> {...}
const pessoa = {nome: 'joao'}
pessoa.nome = 'pedro'
console.log(pessoa)

Object.freeze(pessoa) //transforma o Objt em uma constante (nao pode ser mudado de forma alguma)
pessoa.nome = 'Maria'
console.log(pessoa.nome) //continua pedro

const pessoaConst = Object.freeze({nome: 'Henrique'})
pessoaConst.nome = 'haha xd'
console.log(pessoaConst.nome)
