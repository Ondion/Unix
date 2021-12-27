// * Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ;
// * Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;
// * Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
// * Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";
// * Utilizando for , descubra qual o maior valor contido no array e imprima-o;
// * Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";
// * Utilizando for , descubra qual o menor valor contido no array e imprima-o;
// * Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
let maiorValor = 0;
let impares = 0;
let menorValor = 100;

console.log(numbers);

for (let index = 0; index < numbers.length; index += 1) {
    soma = soma + numbers[index];
    console.log("soma até o momento:", soma);
}

console.log("média de valores:", (soma / numbers.length));

if (soma / numbers.length > 20) {
    console.log("valor maior que 20");
} else {
    console.log("valor menor ou igual a 20")
}

for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] >= maiorValor) {
        maiorValor = numbers[index];
    }
    if (numbers[index] % 2 === 1) {
        impares += 1;
    }
    if (numbers[index] < menorValor) {
        menorValor = numbers[index];
    }
    console.log(numbers[index]/2);
}
console.log("Maior valor:", maiorValor);
console.log("Quantidade valores impares:", impares);
console.log("Menor valor:", menorValor);