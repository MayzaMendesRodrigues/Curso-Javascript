let isAtivo = false // declarei um valor falso 
console.log (isAtivo)

isAtivo = true // troquei o valor do isAtivo

isAtivo = 1 
console.log (!isAtivo) // !true = false ... !false = true  ...  !!false = false ... !!true = true 

console.log ('os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!! " ")
console.log(!!'texto')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log ('os falsos...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!underfined)
console.log(!!(isAtivo = false))

console.log('pra finalizar...')
console.log (!!('' || null || 0 || ''))

let nome = 'Lucas'
console.log(nome || 'Desconhecido') // se caso nao encontrar o valor nome, substituir por Desconhecido 
