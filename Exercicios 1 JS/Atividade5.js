function MostrarValor(valorDecimal){
    valorEmReais = `R$ ${valorDecimal.toFixed(2).toString().replace(".",",")}`
    console.log(valorEmReais)
}
MostrarValor(0.1 + 0.2)