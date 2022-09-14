/*a) Declare uma função que imprima Olá, [SEU NOME]!. Chame esta função.

b) Declare uma função que imprima a tabuada do 6. Chame esta função.

c) Comente as funções criadas acima, e reescreva-as utilizando expressões de função,
 ou arrow functions */


function nome (nome1) {
    console.log(`Olá ${nome1}`)
}
nome(prompt("Digite seu nome:"))


function tabuada (numero) {
   console.log("Tabuada do:", numero)
    for (let i = 1; i < 11; i++) {
        console.log(`${i} x ${numero} = ${Number(numero * i)}`)
    }
}
tabuada(prompt("Digite um numero:"))

// com arrow function

const nome2 = (nome1)=> {
    console.log(`Olá ${nome1}`)
}
nome2(prompt("Digite seu nome:"))

const tabuada2 = (numero)=> {
    console.log("Tabuada do:", numero)
    for (let i = 1; i < 11; i++) {
        console.log(`${i} x ${numero} = ${Number(numero * i)}`)
    }
}
tabuada2(prompt("Digite um numero:"))
