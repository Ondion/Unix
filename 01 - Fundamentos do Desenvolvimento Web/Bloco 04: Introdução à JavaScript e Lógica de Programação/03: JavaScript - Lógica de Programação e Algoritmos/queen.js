
// Como representar a posição das peças?

// let queen = [5, 4];
// let opponent = [7, 2];

let queenRow = 7;
let queenColumn = 6;
let opponentRow = 8;
let opponentColumn = 5;

// Como representar se a rainha pode atacar?
let canAttack = false;

if (queenRow === opponentRow || queenColumn === opponentColumn) {
    canAttack = true;
}

// let rowDistance = Math.abs(queenRow - opponentRow);
// let columnDistance = Math.abs(queenColumn - opponentColumn);
// if (rowDistance === columnDistance) {
//     canAttack = true;
// }


// Simula movimento na direção diagonal superior direita
for (let index = 1; index < 8; index += 1) {
    let newQueenRow = queenRow + index;
    let newQueenColumn = queenColumn + index;
    // console.log(newQueenRow, newQueenColumn);
    if (newQueenRow > 8 || newQueenColumn > 8) {
        break;
    }
    if (newQueenRow === opponentRow && newQueenColumn === opponentColumn) {
        canAttack = true;
        break;
    }
}

// Simula movimento na direção diagonal superior esquerda
for (let index = 1; index < 8; index += 1) {
    let newQueenRow = queenRow + index;
    let newQueenColumn = queenColumn - index;
    // console.log(newQueenRow, newQueenColumn);
    if (newQueenRow > 8 || newQueenColumn < 1) {
        //console.log('Break');
        break;
    }
    if (newQueenRow === opponentRow && newQueenColumn === opponentColumn) {
        canAttack = true;
        break;
    }
}

// Simula movimento na direção diagonal inferior esquerda
for (let index = 1; index < 8; index += 1) {
    let newQueenRow = queenRow - index;
    let newQueenColumn = queenColumn - index;
    // console.log(newQueenRow, newQueenColumn);
    if (newQueenRow < 1 || newQueenColumn < 1) {
        break;
    }
    if (newQueenRow === opponentRow && newQueenColumn === opponentColumn) {
        canAttack = true;
        break;
    }
}

// Simula movimento na direção diagonal inferior direita
for (let index = 1; index < 8; index += 1) {
    let newQueenRow = queenRow - index;
    let newQueenColumn = queenColumn + index;
    console.log(newQueenRow, newQueenColumn);
    if (newQueenRow < 1 || newQueenColumn > 8) {
        break;
    }
    if (newQueenRow === opponentRow && newQueenColumn === opponentColumn) {
        canAttack = true;
        break;
    }
}

console.log("A rainha pode atacar? ", canAttack);
