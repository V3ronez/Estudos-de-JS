const produtos = [
    {nome: 'Notebook', preco: 4500, fragil: true},
    {nome: 'Ipad PRO', preco: 3000, fragil: true},
    {nome: 'Copo de vidro', preco: 2, fragil: true},
    {nome: 'Copo de plastico', preco: 1.99, fragil: false}
]
console.log(produtos.filter(function(p){
    return false
}))

const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil

console.log(produtos.filter(caro).filter(fragil))