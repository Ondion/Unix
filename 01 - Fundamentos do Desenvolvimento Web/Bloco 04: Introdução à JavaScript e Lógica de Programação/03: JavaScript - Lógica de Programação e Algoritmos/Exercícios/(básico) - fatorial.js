// O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero.
// Com base nessas informações, crie um algoritmo que retorne o fatorial de 10.

var fatorial = 1;

for (let index = 10; index > 0; index -= 1) {
    fatorial = fatorial * index
    console.log(fatorial)
}