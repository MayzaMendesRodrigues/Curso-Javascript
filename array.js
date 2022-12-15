const valores = [7.7, 8.9, 9.5, 2.5]
console.log (valores[0], valores[3])
console.log (valores[4])

valores[4] = 10 // add um array 
console.log(valores)
console.log(valores.length) // quantos elementos temos no array 

valores.push ({id:3}, false, null, 'teste')
console.log(valores)

console.log(valores.pop())
delete valores [0] // para tirar um atributo de dentro de um objeto 
console.log(valores)

console.log (typeof valores) // objeto