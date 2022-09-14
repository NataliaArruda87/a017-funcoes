/*Crie 4 funções, cada uma deve receber dois parâmetros numéricos e retornar o valor uma das operações básicas 
(soma, subtração, multiplicação e divisão).

Em seguida, peça para o usuário inserir dois números e chame essas 4 funções com esses valores inputados pelo 
usuário sendo o argumento. Por fim, imprima no console o resultado das operações. */

let num1 = Number(prompt("Digite num 1:"))
let num2 = Number(prompt("Digite num 2:"))

function soma(i, j) {
     soma = i + j 
}
soma(num1, num2)
console.log(soma)


function subtracao(i, j) {
    subtracao = i - j 
}
subtracao(num1, num2)
console.log(subtracao)


function multiplicacao(i, j) {
    multiplicacao = i * j 
}
multiplicacao(num1, num2)
console.log(multiplicacao)


function divisao(i, j) {
    divisao = i / j 
}
divisao(num1, num2)
console.log(divisao)