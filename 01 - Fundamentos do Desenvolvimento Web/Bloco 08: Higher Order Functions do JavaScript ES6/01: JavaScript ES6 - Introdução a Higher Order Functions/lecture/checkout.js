
const carrinho = [10, 30, 20, 40];

const desconto10reais = (total) => {
    return 10;
}

const desconto20reais = (total) => {
    return 20;
}

const desconto10porcento = (total) => {
    return total * 0.1;
}

const desconto5porcento = (total) => {
    // if
    return total * 0.05;
}

const checkout = (carrinho, desconto) => {
    let total = 0;
    for (const item of carrinho) {
        total = total + item;
    }
    total = total - desconto(total);
    return total;
}

// const total = checkout(carrinho, desconto5porcento);
// console.log(total);

const criaDesconto = (porcentagem) => {
    const calculaDesconto = (total) => {
        return total * porcentagem/100;
    }
    return calculaDesconto;
}

// const desconto15porcento = criaDesconto(15);
// const desconto20porcento = criaDesconto(20);
const total = checkout(carrinho, criaDesconto(25));
console.log(total);



