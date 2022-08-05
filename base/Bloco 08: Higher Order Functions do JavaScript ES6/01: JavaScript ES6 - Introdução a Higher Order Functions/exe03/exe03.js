const RIGHT_ANSWERS =   ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const teste = (certo, teste) => {
  let count = 0;
  for(let index = 0; certo.length >= index; index += 1){
    if (certo[index] == teste[index]){
      count += 1;
    } else if (teste[index] == 'N.A'){
      count = count;
    } else {
      count -= 0.5;
    };
  };
  return count;
};



const provaCheck = (arrayGabarito, arrayRespostas, callback) => callback(arrayGabarito, arrayRespostas)



console.log(provaCheck(RIGHT_ANSWERS, STUDENT_ANSWERS, teste));

