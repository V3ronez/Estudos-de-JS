function carro (velocidadeMaxima = 200, delta = 5){
    //atributo privado
    let velocidadeAtual = 0
    
    //metodo publico
    this.acelerar = function() {
        if(velocidadeAtual + delta <= velocidadeMaxima){
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }
    //metodo publico
    this.getvelociadaeAtual = function () {
        return velocidadeAtual
    }
}
const uno = new carro
uno.acelerar()
console.log(uno.getvelociadaeAtual())

const ferrari = new carro (350, 20)
ferrari.acelerar()
console.log(ferrari.getvelociadaeAtual())