// Programa que verifica se é possivel criar um triângulo com três valores de retas.

let a = 3;
let b = 3;
let c = 3;


if(a < (b + c) && b < (a + c) && c < (a + b)){
    console.log("true")
} else{
    console.log("false")
}