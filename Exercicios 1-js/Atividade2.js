function ClassificadorTriangulo (ladoA , ladoB, ladoC){
    if(ladoA == ladoB && ladoB == ladoC){
        return 'Equilátero'
    }else if(ladoA == ladoB || ladoB == ladoC || ladoA ==  ladoC){
        return 'Isósceles'
    }else{
        return 'Escaleno'
    }
}

console.log(ClassificadorTriangulo(2,3,9))
console.log(ClassificadorTriangulo(2,2,2))
console.log(ClassificadorTriangulo(2,3,3))