// Desenvolva um algoritmo que é capaz de inverter uma palavra. Por exemplo, a palavra "banana" seria invertida para "ananab".

let palavra = "natan";
let inverte = [];

for (let index = 0; index < palavra.length; index += 1) {
    inverte.push(palavra[(palavra.length -1) - index])
}
console.log(inverte.join(""))