function soma() {
    let soma = 0
    for (i in arguments) {
        soma += arguments[i]
    }
    return soma
}
console.log(soma())
console.log(soma(2, 6, 20, 6.6))
console.log(soma(3, " teste ", 4))