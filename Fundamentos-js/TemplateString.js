const nome ='Rebeca'
const concatenacao = 'olá ' + nome + '!' //usa-se `` para tempalte string
const template = ` 
    olá
    ${nome}!`
    console.log(concatenacao, template)
    
    console.log(`1+1= ${1+1}`)
    
    const up = texto => texto.toUpperCase()
    console.log(`Ei...${up('cuidado')}!`) 