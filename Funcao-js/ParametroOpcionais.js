function area(largura, altura) {
    const area =  altura * largura
    if (area > 20) {
        console.log(`Valor acimda do permitido: ${area}m2.`)
    }
    else {
        return area
    }
}
console.log(area(2, 2))
console.log(area(5,5))