// Métodos de capturar elementos da página
let second = document.getElementById('second');

// Criar elemento HTML via JavaScript
let newElement = document.createElement('div');

// Configurar elemento
newElement.className = 'red circle small';

// elemento.className vs elemento.classList.add()
// newElement.classList.add('green');
// newElement.classList.add('square');
// newElement.classList.add('small');

// adicionar elemento na página
second.appendChild(newElement);

function appendDrawing(parent, classes) {
  let child = document.createElement('div');
  child.className = classes;
  parent.appendChild(child);
}

appendDrawing(second, 'green square small'); // <- escolher o desenho
appendDrawing(second, 'yellow circle small');
appendDrawing(second, 'red circle medium');
appendDrawing(second, 'red square medium');

// // adicionar um quadrado amarelo medio
// let yellowSquare = document.createElement('div');
// yellowSquare.className = "yellow square medium";
// second.appendChild(yellowSquare);

// let greenSquare = document.createElement('div');
// greenSquare.className = "green square small";
// second.appendChild(greenSquare);

// let yellowCircle = document.createElement('div');
// yellowCircle.className = "yellow circle medium";
// second.appendChild(yellowCircle);

// adicionar um círculo verde grande no terceiro
let third = document.getElementById('third');

appendDrawing(third, 'green circle big');
appendDrawing(third, 'red square medium');

// let greenCircle = document.createElement('div');
// greenCircle.className = "green circle big";
// third.appendChild(greenCircle);

// encontrar primeiro/último elemento filho
// second.firstElementChild
// second.lastElementChild

// encontrar próximo elemento irmão
// let element = second.firstElementChild // inicializa
// element = element.nextElementSibling // incrementa

// null é falsy

// percorrer filhos
// 

let count = 0;
for (
  let element = second.firstElementChild;
  element !== null;
  element = element.nextElementSibling
) {
  console.log(element);
  count += 1;
}
console.log(count);



// removeChild

// Bônus: dado um array de classes criar divs na página
let array = [
    'green square small',
    'yellow circle medium',
    'red square small',
    'green circle medium'
]
