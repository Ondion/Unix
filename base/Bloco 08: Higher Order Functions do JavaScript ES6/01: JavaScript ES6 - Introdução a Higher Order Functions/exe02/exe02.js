
const sorteio = () => Math.floor(Math.random() * 6);



const testeSorte = (aposta, numero) => {
  if(aposta === numero()){
    return 'Parabéns você ganhou';
  } else{
    return 'Tente novamente';
  }
};



console.log(testeSorte(5, sorteio));