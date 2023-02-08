 console.log(Math.ceil(6.1))

 const obj1 = {}
 obj1.nome = 'Bola'
//obj['nome'] = 'Bola2'   sao equivalentes 



function Obj(nome) { // chamei uma funcao e recebi como parametro o nome 
    this.nome = nome // this.nome significa o nome associado ao objeto que for criado apartir dessa funcao
}

const obj2 = new Obj(`Cadeira`)
const obj3 = new Obj ('mesa')

console.log(obj2.nome)
console.log(obj3.NOME)



