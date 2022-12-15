const escola = 'Cod3r'

console.log (escola.charAt(4))// resultado: r 
console.log (escola.charAt(5))// nao existe 
console.log (escola.charCodeAt(3))// codigo da tabela unicode
console.log (escola.indexOF ('3'))// ele vai dizer em que index esta 

console.log(escola.substring(1))// ele vai imprimir do indice 1 do 1 ao ultimo 
console.log(escola.substring (0, 3)) // ele vai do indice 0 ao indice 3 sem incluir o indice 3 

console.log('Escola'.concat(escola).concat('!'))// funcao de contatenar __ resultado: Escola Cod3r! 
console.log('Escola' + escola + "!")
console.log(escola.replace(3,'e'))// resultado: Coder

console.log('Ana,Maria,Pedro'.split(',')) 

