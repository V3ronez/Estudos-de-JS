const pessoa = {
    nome: 'Rebeca',
    idade: 20,
    peso: 13
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})

/*Object.entries(pessoa).forEach( e => {
    console.log(`${e[0]}: ${e[1]}`)
})*/

Object.defineProperty(pessoa, 'dataNascimento',{
    enumerable: true,
    writable: false,
    value: '14/09/1998'
})
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

// Object.assign
const dest = {a: 1}
const o1 = {b: 2}
const o2 = {c: 3, a: 4}
const obj = Object.assign(dest, o1, o2)

Object.freeze(obj)
obj.c = 1234
console.log(obj)
