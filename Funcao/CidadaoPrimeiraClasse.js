// Função em JS é First-Class Object 
// Higher-oder function

// criar de forma literal
function fun1() { }

//armazenar em uma variavel
const fun2 = function () { }

//armazenar em um array
const array = [function (a, b) {return a + b}, fun1, fun2]

//armazenar em um atributo de obj
const obj = {}
obj.falar = function () {return 'opa'}
console.log(obj.falar())

//passar funcao como parametro
function run(fun){
    fun()
}
run(function () {console.log('Executando...')})

//uma funcao pode retornar/conter uma funcao
function soma (a, b) {
    return function (c){
        console.log(a + b + c)
    }
}
soma (2, 3)(5)