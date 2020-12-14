function venderFruta(fruta) {
    switch (fruta) {
        case 'maça':
            console.log('Não vendemos esta fruta aqu')
            break
        case 'kiwi':
            console.log('Estamos com escassez de kiwis')
            break
        case 'melancia':
            console.log('Aqui está, são 3 reais o quilo')
            break
        default: console.log('erro, fruta inválida')
    }
}
venderFruta('maçã')
venderFruta('kiwi')
venderFruta('melancia')
venderFruta('alcatra')