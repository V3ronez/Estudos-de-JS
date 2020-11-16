const pai = {nome: 'Pedro', corCabelo: 'Loiro'}

const filha1 = Object.create(pai)
filha1.nome = 'Ana'
console.log(filha1.nome)

const filha2 = Object.create(pai, {
    nome: {value: 'Clara', writable: false, enumerable: true}
})
console.log(filha2.nome)
console.log(`${filha2.nome} tem os cabelos da cor ${filha2.corCabelo}`)

console.log(Object.keys(filha1))
console.log(Object.keys(filha2))

for (let key in filha2) {
    filha2.hasOwnProperty(key) ?
        console.log(`É dela mesmo: ${key}`) : console.log(`Por herança: ${key}`)
}