import lerValor = require("readline-sync")



const cores : Array<String> = new Array<String>


while(cores.length <5){
    let valor : String = lerValor.question("Digite o nome de uma cor:")
    cores.push(valor)
}

console.log('====================================');
console.log(cores);
console.log('====================================');
console.log(cores.sort());