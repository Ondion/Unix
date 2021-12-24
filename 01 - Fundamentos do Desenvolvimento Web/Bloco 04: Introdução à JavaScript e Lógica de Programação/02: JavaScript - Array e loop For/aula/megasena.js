
let megasena = [];
for (let count = 0; count < 6; count += 1) {
    megasena.push(Math.floor(Math.random() * 60) + 1);
}

// let firstNumber = Math.floor(Math.random() * 60) + 1;
// let secondNumber = Math.floor(Math.random() * 60) + 1;
// let thirdNumber = Math.floor(Math.random() * 60) + 1;
// let fourthNumber = Math.floor(Math.random() * 60) + 1;
// let fifthNumber = Math.floor(Math.random() * 60) + 1;
// let sixthNumber = Math.floor(Math.random() * 60) + 1;
// let megasena = [firstNumber, secondNumber, thirdNumber, fourthNumber, fifthNumber, sixthNumber];

let gabriel = [7, 17, 34, 42, 48, 55];
// let heitor = [4, 18, 24, 42, 48, 60];
// let gian = [1, 2, 3, 4, 5, 6];

// let jogos = [gabriel, heitor, gian];
// console.log(jogos);

// for (let indexJogo = 0; indexJogo < jogo.lenght; indexJogo += 1) {
//  let jogo = jogos[indexJogo];
// for (let jogo of jogos) {
//     let countJogo = 0;
//     for (let indexMegaSena = 0; indexMegaSena < megasena.length; indexMegaSena += 1) {
//         console.log('Mega sena: ', megasena[indexMegaSena]);
//         for (let indexJogo = 0; indexJogo < jogo.length; indexJogo += 1) {
//             if (megasena[indexMegaSena] === jogo[indexJogo]) {
//                 console.log("Acertou!");
//                 countJogo += 1;
//             } 
//         }
//     }
//     console.log(countJogo);
// }

let countGabriel = 0;
for (let indexMegaSena = 0; indexMegaSena < megasena.length; indexMegaSena += 1) {
    console.log('Mega sena: ', megasena[indexMegaSena]);
    for (let indexGabriel = 0; indexGabriel < gabriel.length; indexGabriel += 1) {
        // console.log('Gabriel: ', gabriel[indexGabriel]);
        if (megasena[indexMegaSena] === gabriel[indexGabriel]) {
            console.log("Acertou!");
            countGabriel += 1;
        }
    }
}
console.log(countGabriel);


// let countHeitor = 0;
// for (let indexMegaSena = 0; indexMegaSena < megasena.length; indexMegaSena += 1) {
//     console.log('Mega sena: ', megasena[indexMegaSena]);
//     for (let indexHeitor = 0; indexHeitor < heitor.length; indexHeitor += 1) {
//         // console.log('Heitor: ', heitor[indexHeitor]);
//         if (megasena[indexMegaSena] === heitor[indexHeitor]) {
//             console.log("Acertou!");
//             countHeitor += 1;
//         } 
//     }
// }
// console.log(countHeitor);


// let countGian = 0;
// for (let indexMegaSena = 0; indexMegaSena < megasena.length; indexMegaSena += 1) {
//     console.log('Mega sena: ', megasena[indexMegaSena]);
//     for (let indexGian = 0; indexGian < gian.length; indexGian += 1) {
//         // console.log('Gian: ', gian[indexGian]);
//         if (megasena[indexMegaSena] === gian[indexGian]) {
//             console.log("Acertou!");
//             countGian += 1;
//         } 
//     }
// }
// console.log(countGian);
