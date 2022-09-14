/*Declare e chame as funções abaixo:

a) Uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas entradas e imprima o resultado. 
Invoque a função e imprima no console o resultado.

b) Uma função que recebe 2 números e imprime um booleano que informa se o primeiro número é maior ou igual ao segundo.

c) Uma função que receba um número e imprima se ele é par ou não

d) Uma função que recebe uma mensagem (string) como parâmetro e imprima o tamanho dessa mensagem, juntamente com uma versão dela
 contendo apenas letras maiúsculas. */

 // a)

let num1 = Number(prompt("Digite num 1:"))
let num2 = Number(prompt("Digite num 2:"))
function calculo(i, j) {
     calculo = i + j 
}
calculo(num1, num2)
console.log(calculo)

// b)

function numeros (num1, num2) {
    console.log(Boolean(num1 >= num2))
}
let x = prompt("Digite num 1:")
let y = prompt("Digite num 2:")
numeros(x, y)

// c)

let entrada = Number(prompt("Digite num 1:"))
function paridade(i) {
    if (i % 2 === 0) {
        console.log("Numero par")
    } else {
        console.log("Numero impar") 
    } 
}
paridade(entrada)

// d)

function mensagem(userInput) {
    console.log(`Quantidade de letras da palavra: ${userInput.length}`)
    console.log(`${userInput.toUpperCase()}`)
}

mensagem(prompt("Digite uma palavra:"))


