// Desafio 10
function techList(tech, nome){
  arrayRetorno = [];
  if (tech == ""){
    return "Vazio!"
  }
  tech = tech.sort();
  for (index in tech){
    arrayRetorno.push({
      "tech": tech[index],
      "name": nome})    
  }
return arrayRetorno
}

// Desafio 11
function generatePhoneNumber(array){
  function maisQueTres(lista) {

    for(indexA of lista){
      let incremento = 0;
      for(indexB of lista){
        if (indexA == indexB){
          incremento ++;
        }      
        if (incremento >= 3){
          return true;
      }
    }
  }
    return false;
  }
  
  if (array.length != 11){
    return "Array com tamanho incorreto."
  }
  for (index in array){
    if(array[index] < 0 || array[index] > 9 || maisQueTres(array)){
      return "não é possível gerar um número de telefone com esses valores"
    } 
  }
  return "("+array[0]+array[1]+")"+ " "+ array[2]+array[3]+array[4]+array[5]+array[6]+ "-"+ array[7]+array[8]+array[9]+array[10]
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if(lineA < (lineB + lineC) && lineB < (lineA + lineC) && lineC < (lineA + lineB)){
    return true
  } else{
    return false
  }
  
}

// Desafio 13
function hydrate(frase) {
  let contador = 0;
  for(index of frase){
    if(index == "1" || index == "2" || index == "3" || index == "4" || index == "5" || index == "6" || index == "7" || index == "8" || index == "9" ){
      contador = contador + parseInt(index)
    }
  }
  
  if (contador == 1){
    return contador.toString() + " copo de água";
  } else{
    return contador.toString() + " copos de água";
  }
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
