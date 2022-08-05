const entrar = document.getElementById('entrar'); // captura o elemento "entrar" que é o botão no header.
const labelRate = document.getElementById('label-rate2'); // pega a div que organiza todos os input-radios.
const checkBox = document.getElementById('agreement');
const submitButton = document.getElementById('submit-btn');
const textArea = document.getElementById('textarea');
const counterText = document.getElementById('counter');
const evaluationForm = document.getElementById('evaluation-form');
const counter = 500; // requisito 20

function login(event) { // função para validar as entradas na secção login do header, fazendo uso de um escutador de evento.
  event.preventDefault(); // prevent de evento para evitar que os inputs fiquem em branco após o clique no botão submit.
  const email = document.getElementById('email').value; // recebe o valor contido no elemento email do HTML
  const pass = document.getElementById('password').value; // recebe o valor contido no elemento password do HTML
  if (email === 'tryber@teste.com' && pass === '123456') { // if para validação de usuário e senha.
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}
entrar.addEventListener('click', login); // Escutador de evento para o botão da entrar no campo de login.

function createLabelRate() {
  for (let i = 1; i <= 10; i += 1) {
    const newInput = document.createElement('input');
    labelRate.appendChild(document.createElement('label')).appendChild(newInput);
    const nome = i.toString();
    labelRate.lastChild.setAttribute('for', nome);// seta os atributos necessários.
    labelRate.lastChild.lastChild.setAttribute('type', 'radio');
    labelRate.lastChild.lastChild.setAttribute('name', 'rate');
    labelRate.lastChild.lastChild.setAttribute('value', i);
    labelRate.lastChild.lastChild.setAttribute('id', nome);
    labelRate.lastChild.innerHTML += i; // adiciona o contador como texto as labels
  }
}
createLabelRate();

// requisito 16
function checkedBox() {
  if (checkBox.checked === true) {
    submitButton.removeAttribute('disabled');
  } else {
    submitButton.setAttribute('disabled', '');
  }
}
checkBox.addEventListener('change', checkedBox);

// requisito 16 e 20
function caractersCounter() {
  const calc = counter - textArea.value.length;
  counterText.innerText = calc;
}
textArea.addEventListener('input', caractersCounter);

// requisito 21
function createP(text, data) {
  const newP = document.createElement('p');
  newP.innerText = text + data;
  evaluationForm.appendChild(newP);
}

// requisito 21
function getForm(event) {
  event.preventDefault();
  const data = new FormData(evaluationForm);
  evaluationForm.innerHTML = '';
  const fullName = `${data.get('name')} ${data.get('last-name')}`;
  createP('Nome: ', fullName);
  createP('Email: ', data.get('email'));
  createP('Casa: ', data.get('house'));
  createP('Família: ', data.get('family'));
  createP('Matérias: ', data.getAll('subject').join(', '));
  createP('Avaliação: ', data.get('rate'));
  createP('Observações: ', data.get('textarea'));
}
submitButton.addEventListener('click', getForm);

/* function getForm(event) {
  event.preventDefault();
  const name = document.getElementById('input-name').value;
  const lastName = document.getElementById('input-lastname').value;
  const email = document.getElementById('input-email').value;
  const house = document.getElementById('house').value;
  const frontend = document.getElementById('Frontend').checked;
  const backend = document.getElementById('Backend').checked;
  const fullstack = document.getElementById('FullStack').checked;
  const checkedM = document.querySelectorAll('.subject:checked');
  const checkedOn = [];

  const textArea = document.getElementById('textarea').value;
  if(document.querySelector('input[name="rate"]:checked') == null){
    return;
  } else{
    var rate = document.querySelector('input[name="rate"]:checked').value;
  }
  document.getElementById("evaluation-form").innerHTML = "";

  document.getElementById("evaluation-form").appendChild(document.createElement('p')).innerText = 'Nome: ' + name + ' ' + lastName
  document.getElementById("evaluation-form").appendChild(document.createElement('p')).innerText = 'Email: ' + email;
  document.getElementById("evaluation-form").appendChild(document.createElement('p')).innerText = 'Casa: ' + house;

  if(frontend){
    document.getElementById("evaluation-form").appendChild(document.createElement('p')).innerText ='Família: Frontend';
  };

  if(backend){
    document.getElementById("evaluation-form").appendChild(document.createElement('p')).innerText ='Família: Backend';
  };

  if(fullstack){
    document.getElementById("evaluation-form").appendChild(document.createElement('p')).innerText ='Família: FullStack';
  };
  for(let index = 0; checkedM.length > index; index += 1){
    checkedOn.push(' ' + checkedM[index].value);
  }
  document.getElementById("evaluation-form").appendChild(document.createElement('p')).innerText = 'Matérias: ' + checkedOn.toString()
  document.getElementById("evaluation-form").appendChild(document.createElement('p')).innerText ='Avaliação: ' +  rate;
  document.getElementById("evaluation-form").appendChild(document.createElement('p')).innerText ='Observações: ' +  textArea;
}

submitButton.addEventListener('click', getForm);; */
