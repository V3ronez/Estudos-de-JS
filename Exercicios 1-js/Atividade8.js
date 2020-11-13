let pontos = "30, 40, 20, 4, 51, 25, 42, 38, 56, 0"

function ComparaPontos(pontos) {
    let pontuacoes = pontos.split(", ")
    let maiorPontuacao = pontuacoes[0]
    let menorPontuacao = pontuacoes[0]
    let qtdRecord = 0
    let piorJogo = 1

    for(let i = 1; i < pontuacoes.length; i++){
        if(pontuacoes[i] > maiorPontuacao){
            maiorPontuacao = pontuacoes[i]
            qtdRecord++
        }else if(pontuacoes[i] < maiorPontuacao){
            menorPontuacao = pontuacoes[i]
            piorJogo = i+1
        }
    }
    return[qtdRecord, piorJogo]
}
console.log(ComparaPontos(pontos))