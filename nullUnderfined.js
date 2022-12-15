let valor // nao inicializada 
console.log(valor)

valor = null // ausencia de valor 
console.log(valor)
//console.log(valor.toString()) erro!! 
//voce nao pode ler a propriedade toString de null 
const produto = {}
console.log(produto.preco) // nao esta definido o preco 
console.log(produto)

produto.preco = 3.50
consolr.log(produto)

produto.preco = underfined // evite atribuir underfined 
console.log(!!produto.preco)// false
//delete produto.preco
// esta e a forma se voce quiser tirar o atributo de um objeto 
console.log(produto)

produto.preco = null // sem preco 
console.log(!!produto.preco)
console.log(produto)