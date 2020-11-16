//Cadeia de prótotipos (prototype chain)
const avo = { attr1: 'A' }
const pai = { __proto__:avo, attr2: 'B' }
const filho = { __proto__:pai, attr3: 'C' }
console.log(filho.attr1, filho.attr2, filho.attr3)

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta) {
        if(this.velAtual + delta <= this.velMax) {
            this.velAtual += delta
        }else{
            this.velAtual = this.velMax
        }
    },
    status() {
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
        //return `${this.modelo}: ${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324 //shadowing(sobreamento de atributos)
}
const volvo = {
    modelo: 'V40',
    status() {
        return `${this.modelo}: ${super.status()}`
    }
}
const honda = {
    modelo: 'City',
    cor: 'preto',
    status(){
        return `${this.modelo}: ${super.status()}`
    }

}

Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)
Object.setPrototypeOf(honda, carro)

console.log(ferrari)
console.log(volvo)
console.log(honda)

honda.acelerarMais(123)
volvo.acelerarMais(100)
ferrari.acelerarMais(270)
console.log(volvo.status())
console.log(ferrari.status())
console.log(honda.status())

for(let key in ferrari) {
    ferrari.hasOwnProperty(key) ?
    console.log(`É dela mesmo: ${key}`) : console.log(`Por herança: ${key}`)
}