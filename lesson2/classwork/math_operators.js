const prompt = require('prompt-sync')();

console.log(4 + 5);   //Addition: adding 2 numbers

console.log(10 - 3);  //Subtraction: Subtracts the 2nd number from the first number

console.log(6 * 7);   // Multiplication: multiplies 2 numbers

console.log(15 / 4);  // Division divides the 1st number by the 2nd and gives you a decimal result or number result

console.log(88 % 21); // Modulus gives you the remainder of the division

console.log(2 ** 5);  // Exponentiation: raises the 1st number to the power of the 2nd number

let a = Number(prompt("Give me a number: "));
let b = 3;
console.log(a + b);   // You can use math operators on variables too

console.log(a + b * 2); // Javascript covers the order of operations (PEMDAS)