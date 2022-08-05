// 1. representar os dados de uma pessoa

let pessoa = {
    nome: "Fábio",
    idade: 35,
    altura: 1.77,
    possuiHabilitacao: true,
    bandasFavoritas: ["Iron Maiden", "Nightwish", "Baroes da pisadinha"],
    endereco: {
        rua: "Rua do Fábio", 
        numero: 19,
        cidade: 'Niterói',
        estado: 'Rio de Janeiro',
    },
    turma: '19C',
};

// 2. acessar, alterar e adicionar propriedades
// 2.1 dot notation

//console.log(pessoa.endereco);
console.log(pessoa.endereco.estado);

// 2.2 bracket notation
let key = 'nome';
console.log(key);
console.log(pessoa[key]);
// console.log(pessoa["idade"]);
// console.log(pessoa["endereco"]["estado"])
console.log("nome antigo: ", pessoa.nome);
pessoa.nome = "O grande Fábio";
console.log("nome novo: ", pessoa.nome);

console.log(pessoa.endereco.pais);
pessoa.endereco.pais = "Brasil";
console.log(pessoa.endereco.pais);

// let altura = pessoa.altura;
// delete pessoa.altura;
// pessoa.alturaDaPessoa = altura;

// 3. for in

for (let key in pessoa) {
    console.log(key, pessoa[key]);
}



