function calcularSalario (horasTrab, valorHora) {
    const salarioBruto = horasTrab * valorHora 
    const salarioLiquido = salarioBruto - salarioBruto * 30/100
    return  console.log(`Salário igual a R$${salarioLiquido}`)
}
calcularSalario(180, 60)