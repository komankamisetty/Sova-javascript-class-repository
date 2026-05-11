const numbers = [10, -15, 30, 105, -2, 45, -20, 99, 7];
// Problem 1
// Find and print the sum of all the numbers greater than 25 in the list.
const sumGreaterThan25 = numbers
  .filter(n => n > 25)
  .reduce((acc, curr) => acc + curr, 0);

console.log("Sum > 25:", sumGreaterThan25);

// Problem 2
// Find and print the sum of all the numbers less than -10 in the list.
const sumLessThanNeg10 = numbers
  .filter(n => n < -10)
  .reduce((acc, curr) => acc + curr, 0);

console.log("Sum < -10:", sumLessThanNeg10);

// Problem 3
// Find and print the biggest number less than 100 in the list.
const biggestUnder100 = Math.max(...numbers.filter(n => n < 100));

console.log("Biggest number < 100:", biggestUnder100);

// Problem 4
// Find and print the biggest number in the list.
const biggestOverall = Math.max(...numbers);

console.log("Biggest number overall:", biggestOverall);


// Problem 5
// Find and print the total sum of all the numbers in the list.
const totalSum = numbers.reduce((acc, curr) => acc + curr, 0);

console.log("Total sum:", totalSum);