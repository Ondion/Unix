const sum=(number1, number2) => {
  return number1 + number2;
};

console.log("mais no come");
trabalhoso

const sumFixAmount = (amount) => {
  return (number) => amount + number;
}

const initialSum = sumFixAmount(15)
console.log(initialSum(6));

const repeat = (number, action) => {
  for (let count = 0; count <= number; count += 1) {
    action(count);
  }
};


repeat(30, (number) => {
  if (number %2 === 0) {
    console.log(`is even: ${number}`)
  }
})

let f1 = () => 'Acordado!!';
let f2 = () => 'Bora tomar café!!';
let f3 = () => 'Partiu dormi!!';



function dT (func){
  return func();
}

console.log(dT(f3))