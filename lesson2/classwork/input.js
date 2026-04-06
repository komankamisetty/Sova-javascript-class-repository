const prompt = require("prompt-sync")();  // By using this prompt funciton, you can take user input. It's only for prompt.

//prompt always returns a string, even if a number is typed
let input = prompt("Give me a number");
console.log(input);

//In javascript, when you add a number to a string it concatenates the strings.
console.log(input + 1);

let number = Number(input);// Casting to a number
console.log(number + 1);