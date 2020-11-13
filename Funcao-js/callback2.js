const notas = [5.1, 6.3, 8, 10, 7.7, 9, 7.9, 4, 5.4, 6.1]

//sem o callback
let notasBaixas = []
for (let i in notas){
    if(notas[i] < 7){
        notasBaixas.push(notas[i])
    }
}
console.log(notasBaixas)

//com callback
const notasBaixas2 = notas.filter(function(nota){
    return nota < 7
})
console.log(notasBaixas2)

//com callback com arrow
const notasMenorQue7 = nota => nota < 7
const notasBaixas3 = notas.filter(nota => nota <7)
console.log(notasBaixas3)