console.log(typeof Array, typeof new Array, typeof []) //array é um obj indexado em vez de chave: valor

let aprovados = new Array('Bia', 'Henriq', 'carlos')
console.log(aprovados)

aprovados = ['Bia', 'Henriq', 'Carlos']
console.log(aprovados[0])

aprovados[2] = 'Maria' //metodo melhor para substituir 
aprovados.push('pedro') //metodo melhor para adicionar novo elemento no array
console.log(aprovados.length)
console.log(aprovados)

aprovados.sort() //ordena os elementos do array
console.log(aprovados)

delete aprovados[1]
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[0])
aprovados = ['Bia', 'Henriq', 'Carlos']

aprovados.splice(1, 1)
console.log(aprovados)