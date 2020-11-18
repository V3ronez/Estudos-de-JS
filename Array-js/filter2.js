Array.prototype.filter2 = function(callback) {
    const newArray = []
    for(let i = 0; i < this.length; i++) {
        if(callback(this[i], i, this)) {
            newArray.push(this[i])
        }
    }
    return newArray 
}

const produtos = [
    {nome: 'Notebook', preco: 4500, fragil: true},
    {nome: 'Ipad PRO', preco: 2400, fragil: true},
    {nome: 'Copo de vidro', preco: 2, fragil: true},
    {nome: 'Copo de plastico', preco: 1.99, fragil: false}
]

const caro = produto => produto.preco >= 2000
const fragil = produto => produto.fragil 
console.log(produtos.filter2(caro).filter2(fragil))