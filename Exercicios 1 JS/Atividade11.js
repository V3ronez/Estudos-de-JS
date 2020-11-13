/*jeito 1
function AnoBissexto(ano) {
    if(ano % 400 == 0 || ano % 4 == 0){
        return ano + ' é bissexto' 
    }else if(ano % 100 != 0){
        return ano + ' não é bissexto'
    }
}
console.log(AnoBissexto(2019)) 


Jeito 2
function AnoBissexto2(ano) {
    if(ano % 400 == 0 && ano % 100 != 0 || ano % 4 == 0){
        return ano + ' bissexto'
    }else{
        return ano + ' não é bissexto'
    }
}
console.log(AnoBissexto2(1993)) */

//jeito 3
function AnoBissexto3(ano) {
    if(ano < 0) {
        return false
    } else if (ano % 400 == 0) {
        return true
    } else if (ano % 100 == 0) {
        return false
    } else if (ano % 4 == 0) {
        return true
    } else {
        return false
    }
}
console.log(AnoBissexto3(0))
console.log(AnoBissexto3(4))
console.log(AnoBissexto3(100))
console.log(AnoBissexto3(400))
console.log(AnoBissexto3(800))
console.log(AnoBissexto3(2020))
console.log(AnoBissexto3(2021))

