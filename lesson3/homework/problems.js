// Problem 1
// Ask the user to enter a number.
// Print "Even" if the number is divisible by 2, otherwise print "Odd".
const prompt = require("prompt-sync")();
let number = Number(prompt("Enter a number: "));
if (number % 2 === 0) {
    console.log("Even");
} else {
    console.log("Odd");
}

// Problem 2
// Ask the user for the day of the week (all lowercase).
// Print "Weekend" if the day is "saturday" or "sunday",
// else print "Weekday".
let random_number = Number
(prompt("I generated a random number  between 1 to 10. What is your guess on what the number is?"));
if (random_number === random_number) {
    console.log("Weekend");
} else {
    console.log("Weekday");
}


// Problem 3
// Generate a random number between 1 and 10 (inclusive).
// Ask the user to guess the number.
// Print "Correct!" if the guess matches the random number, else print "Try again!".
let randomNum = Math.floor(Math.random() * 10) + 1; 
let guess = Number(prompt("Guess a number between 1 and 10: "));
if (guess === randomNum) {
    console.log("Correct!");
} else {
    console.log("Try again!");
}


// Problem 4
// Ask the user for a positive integer.
// If the number is divisible by 2 and greater than 10, print "Big even number".
// Otherwise print "Number does not meet criteria".
let Int = Number(prompt("Enter a positive integer: "));
if (Int % 2 === 0 && Int > 10) {
    console.log("Big even number");
} else {
    console.log("Number does not meet criteria");
}


// Problem 5
// Ask the user for two numbers.
// Print which number is larger.
// If the numbers are equal, print "Numbers are equal".
let number_one = Number(prompt("Enter the first number: "));
let number_two = Number(prompt("Enter the second number: "));
if (number_one > number_two) {
    console.log(number_one);
} else if (number_two > number_one) {
    console.log(number_two);
} else {
    console.log("Numbers are equal");
}