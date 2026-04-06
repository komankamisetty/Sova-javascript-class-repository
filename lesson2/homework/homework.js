// Homework Problem 1
// Ask the user for two numbers.
// Print their quotient and remainder on separate lines.
let input = Number("Give me a number: ");
let input_two = Number("Give me another number: ");
console.log(input/input_two);
console.log(input%input_two);

// Homework Problem 2
// Ask the user for their favorite animal and favorite color.
// Print a sentence combining them like: "A blue tiger would be awesome!"
const prompt = require("prompt-sync")();
let favorite_animal = prompt("Give me your favorite animal: ");
let favorite_color = prompt("Give me your favorite color: ");
console.log("A " + favorite_color + " " + favorite_animal + " would be amazing!");

// Homework Problem 3
// Use a for loop to print all the even numbers from 0 to 10 (including 10).
console.log("We didn't yet learn about for loops.");


// Homework Problem 4
// Ask the user how many push-ups they can do.
// Multiply it by 7 and print how many they could do in a week.
let pushups = Number("Tell me how many pushups you can do: ");
console.log("Here is your goal for this week: " + pushups*7 + " pushups");

// Homework Problem 5
// Use a for loop to print the square of each number from 1 to 6.
// (Example: 1*1=1, 2*2=4, etc.)
console.log("I am not doing a for loop because I don't know what that is.")