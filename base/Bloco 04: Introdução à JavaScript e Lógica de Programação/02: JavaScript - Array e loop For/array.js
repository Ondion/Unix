// Aula de arrays

let pizza_01 = '4 Queijos';
let pizza_02 = 'Frango com Catupiry';
let pizza_03 = 'Marquerita';
let pizza_04 = 'Palmito';
let pizza_05 = 'Chocolate';

let pizzas = ['4 Queijos', 'Frango com Catupiry', 'Marguerita', 'Palmito', 'Chocolate'];
pizzas.push('Peito de Peru')


console.log(pizzas.length)
console.log(pizzas.sort())
console.log(pizzas[2])

for (let index = 0; index < pizzas.length; index +=1){
    console.log(pizzas[index])
}