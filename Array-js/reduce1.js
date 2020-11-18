const alunos = [
    {nome: 'Joao', nota: 5.1, bolsista: false},
    {nome: 'Maria', nota: 9.4, bolsista: true},
    {nome: 'Pedro', nota: 7, bolsista: false},
    {nome: 'Carlos', nota: 8.8, bolsista: true}
]
const resultado = alunos.map(aluno => aluno.nota).reduce(function(anterior, atual){
    console.log(anterior, atual)
    return anterior + atual
}, 0) // 0 seria o valor inicial se desejado