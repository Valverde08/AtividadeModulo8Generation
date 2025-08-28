// Escreva um programa para criar uma Collection Set do tipo number. O programa deverá solicitar ao usuário, que ele digite via teclado 10 valores inteiros não repetidos e adicione-os individualmente na Collection Set. Em seguida, faça o que se pede:
// Mostre na tela todos os elementos da Collection Set. 

// Na construção do Algoritmo, utilize os seguintes conteúdos:
// Entrada e Saída de dados
// Collection Set



import lerValor = require("readline-sync")

const numerosArray: Set<Number> = new Set<Number>()



for (let index = 0; index < 10; index++) {

    let numero = lerValor.questionInt("Digite um novo número:")
    
    numerosArray.add(numero)
    
}



console.log(numerosArray);



numerosArray.forEach(element => {
    
    
});