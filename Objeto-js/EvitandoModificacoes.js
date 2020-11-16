//object.prevenExtensions -- Pode modificar e deletas mas não pode adicionar novos atributos
const produto = Object.preventExtensions({
    nome: 'qualquer', preco: 20.50, tag: 'promoção'
})
console.log('Extensivel:', Object.isExtensible(produto))

//object.seal -- nao pode adicionar novos atributos/nao consegue exclui mas consegue modificar
const pessoa = {nome: 'Juliana', idade: 45}
Object.seal(pessoa)

//transforma o Objt em uma constante (nao pode ser mudado de forma alguma)
Object.freeze(pessoa)