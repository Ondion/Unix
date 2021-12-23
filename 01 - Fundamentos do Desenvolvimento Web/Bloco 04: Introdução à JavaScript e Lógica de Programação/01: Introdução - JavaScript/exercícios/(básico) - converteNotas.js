//  Programa que converte uma nota porcentagem (de 0 a 100) em conceitos de A a F.

let nota = 75;

if (nota >= 90) {
    console.log("A");
} else if (nota >= 80 && nota <= 89) {
    console.log("B");
} else if (nota >= 70 && nota <= 79) {
    console.log("C");
} else if (nota >= 60 && nota <= 69) {
    console.log("D");
} else if (nota >= 50 && nota <= 59) {
    console.log("E");
} else if (nota < 50 && nota >= 0) {
    console.log("F");
} else if (nota < 0 || nota > 100) {
    console.log("Nota com valor invalido!")
} else {
    console.log("Esse valor é invalido!")
}