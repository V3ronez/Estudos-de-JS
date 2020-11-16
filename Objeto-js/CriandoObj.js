//usando a notacao literal
const obj1 = {}
console.log(obj1)

//objeto em JS
console.log(typeof Object, typeof new Object) //new é uma funcao construtora
const obj2 = new Object
console.log(obj2)

function produto(nome, preco, desconto){
    this.nome = nome //this deixa visivel para fora do obj
    this.getPrecoDesc = () =>{
        return preco * (1 - desconto)
    }
}

const prod1 = new produto('Caneta', 1.99, 0.15)
const prod2 = new produto('Celular', 5000, 0.25 )
console.log(prod1.getPrecoDesc().toFixed(2), prod2.getPrecoDesc().toFixed(2))

//funcao factory
function criarFuncionario(nome, salarioBase, faltas){
    return{
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase / 30) * (30 - faltas) 
        }
    }
}

const f1 = criarFuncionario('joao', 4500, 4)
const f2 = criarFuncionario('maria', 6300, 7)
console.log(f1.getSalario(), f2.getSalario())

//object.create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

//retornando uma funcao famosa...
const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON.info)