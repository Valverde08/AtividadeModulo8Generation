import lerValor = require("readline-sync")

let valor : String = lerValor.question("Digite o nome de uma cor:")

const cores : Array<String> = new Array<String>

while(cores.length < 5){
   cores.filter(()=>{
    
   })
}

for (const element of cores) {
    
    console.log(element + '\n');
    
}

console.log('====================================');
console.log('\n');
console.log('====================================');
for (const element of cores.sort()) {
    console.log(element + '\n');
}