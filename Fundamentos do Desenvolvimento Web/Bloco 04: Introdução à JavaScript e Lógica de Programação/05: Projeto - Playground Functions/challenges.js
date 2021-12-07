// Desafio 1
function compareTrue(a, b) {
  return (a && b);
}

// Desafio 2
function calcArea(base, height) {
  return ((base * height)/ 2);
}

// Desafio 3
function splitSentence(frase) {
  return frase.split(" ");
}

// Desafio 4
function concatName(frase) {
  return frase[frase.length -1] + ", " +  frase[0]
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties
}

// Desafio 6
function highestCount(array) {
  let ordem = array.sort((a, b) => a- b);
  let incremento = 0;
  for(index in ordem){
    if (ordem[ordem.length -1] == ordem[index]){
        incremento ++;
    }
  }
  return incremento;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(cat1 - mouse) > Math.abs(cat2 - mouse)){
    return "cat2"
  } else if (Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse)){
    return "cat1"
  } else{
    return "os gatos trombam e o rato foge"
  }

}

// Desafio 8
function fizzBuzz(array) {
  let novoArray = [];
  for (i of array){
    if (i % 3 == 0 && i % 5 == 0){
      novoArray.push("fizzBuzz")
    }else if (i % 3 == 0){
      novoArray.push("fizz")
    }else if (i % 5 == 0){
      novoArray.push("buzz")
    }else{
      novoArray.push("bug!")
    }
  }
  return novoArray;
}

// Desafio 9
function encode(string){
  for (i of string){
    switch(i){
      case "a":
        string = string.replace("a", "1")
        break;
      case "e":
        string = string.replace("e", "2")
        break;
      case "i":
        string = string.replace("i", "3")
        break;
      case"o":
      string = string.replace("o", "4")
        break;
      case"u":
      string = string.replace("u", "5")
        break;
    }
  }
  return string
}

function decode(string) {
  for (i of string){
    switch(i){
      case "1":
        string = string.replace("1", "a")
        break;
      case "2":
        string = string.replace("2", "e")
        break;
      case "3":
        string = string.replace("3", "i")
        break;
      case"4":
      string = string.replace("4", "o")
        break;
      case"5":
      string = string.replace("5", "u")
        break;
    }
  }
  return string
}


module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
