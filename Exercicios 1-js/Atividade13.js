function Classificador(numero) {
    switch (numero) {
        case 1:
            return 'FIm de semana!'
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            return "Dia útil"
        case 7:
            return "Fim de semana"
        default:
            return "Dia inválido"
    }
}

console.log(Classificador(1));
console.log(Classificador(2));
console.log(Classificador(3));
console.log(Classificador(4));
console.log(Classificador(5));
console.log(Classificador(6));
console.log(Classificador(7));
console.log(Classificador('a'));
