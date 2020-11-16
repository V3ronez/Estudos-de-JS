function Aula(nome,videoID) {  //funcao construtora
    this.nome = nome
    this.videoID = videoID
}

const aula1 = new Aula('Bem vindo', 234)
const aula2 = new Aula('Até breve', 455)
console.log(aula1, aula2)