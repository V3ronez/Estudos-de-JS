function tratarErroELancar(erro){
    throw new Error('...')
    
}

function imprimirNomeGritado(obj){
    try{
        console.log(obj.name.toUppercase() + '!!!')
    }
    catch (e) {
        tratarErroELancar (e)
    }
}
const obj = {name: 'Roberto' }
imprimirNomeGritado(obj)