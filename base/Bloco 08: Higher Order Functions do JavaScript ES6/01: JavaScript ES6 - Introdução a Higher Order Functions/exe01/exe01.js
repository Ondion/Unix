
const cadastro = (nomeCompleto) => {
  return {
  'nome' : nomeCompleto,
  'email' : nomeCompleto.split(' ')[0] + '@trybe.com',
};
};



const newEmployees = (email) => {
  const employees = {
    id1: email('Pedro Guerra'),
    id2: email('Luiza Drumond'),
    id3: email('Carla Paiva'),
  }
  return employees;
};



console.log(newEmployees(cadastro));