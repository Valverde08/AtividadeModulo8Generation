import lerValor = require("readline-sync")

const numerosArray: Set<Number> = new Set<Number>([10,8,6,4,7,3,1,5,2,9])

let numero :Number = lerValor.questionInt("Digite um número e confira se ele consta na lista:")

if(numerosArray.has(numero)){
    console.log(`O número ${numero} foi encontrado na lista`);
    
} else {
    console.log(`O número ${numero} não foi encontrado na lista`);
}