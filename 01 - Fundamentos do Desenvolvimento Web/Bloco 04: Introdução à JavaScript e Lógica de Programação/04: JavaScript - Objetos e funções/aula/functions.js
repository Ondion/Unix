// 1. Greetings
function printGreetings() {
    console.log("Hello World!");
}
printGreetings();

// 2. sum
function sum(value1, value2) {
    return value1 + value2;
}

console.log(sum(10, 15));
// console.log(25);

// 3. max
function max(value1, value2) {
    if (value1 > value2) {
        return value1;
    } else {
        return value2;
    }
}
console.log(max(10, 15));

// 4. average
function average(value1, value2, value3) {
    return (value1 + value2 + value3) / 3;
}
let result = average(10, 20, 30);
console.log(result);
