const newEmployees = (criaEmail) => {  
  const employees = {
    id1: criaEmail("Pedro Guerra"), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: criaEmail("Luiza Drumond"), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: criaEmail("Carla Paiva"), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  };
  return employees;
};

const emailUndefined = (nome) => {
  return {
    nome: nome,
    email: 'undefined@trybe.com',
  };
};

console.log(newEmployees(emailUndefined));
