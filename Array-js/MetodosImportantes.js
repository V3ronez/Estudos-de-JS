const pilotos = ['vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() //pop remove o ultimo elemento do array
console.log(pilotos)

pilotos.push('Verstappen') //push adiciona novo elemento no array
console.log(pilotos)

pilotos.shift() //remove o primeiro elemento do array
console.log(pilotos)

pilotos.unshift('Hamilton') //coloca um novo elemento no indice [0]
console.log(pilotos)

//splice pode adicionar ou remover elementos

//adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

//removendo
pilotos.splice(3, 1) //no indice [3] remove 1 elemento 

const algunsPilotos1 = pilotos.slice(2) //gera um novo array apartir do indice (2)
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4) //adiciona o indice [1] até o idince [3] nao adiciona o indice [4]
console.log(algunsPilotos2)