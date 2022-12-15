//Funcao sem retorno 
function imprimirSoma(a, b){
    console.log (a + b)
}

imprimirSoma (2, 3) // resultado = 5
imprimirSoma(2) // NaN pq preciso da dois valores
imprimirSoma (2, 10 , 4, 5, 6) // resultado 12, ele somou os dois primeiros e o resto ignorou 
imprimirSoma()//NaN

//Functon com retorno 
function soma (a, b =0) {
    return a + b 
}
console.log (soma(2,3))
console.log (soma(2))