
function summationOf(number) {
    if (number === undefined) {
        throw new Error("O parâmetro number é obrigatório!");
    }
     
    if (typeof number !== 'number') {
        throw new Error("O tipo do parâmetro deve ser Number");
    }

    let summation = 0;
    for (let value = 1; value <= number; value += 1) {
        summation += value;
    }
    return summation;
}

module.exports = summationOf;
