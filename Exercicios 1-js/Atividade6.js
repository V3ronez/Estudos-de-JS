function jurosSimples(capital, taxaJuros, tempo){
    return capital +(capital * taxaJuros * tempo)
}
function jurosCompostos (capital, taxaJuros, tempo) {
    return capital * (1 + taxaJuros) ** tempo
}
console.log(jurosSimples(100, 10/100, 2));
console.log(jurosCompostos(100, 10/100, 2));
