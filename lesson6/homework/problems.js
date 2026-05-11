// Problem 1
// Count and print how many times "Alex" appears in the list.
let names = ["Alex", "Bob", "Charlie", "Alex", "Diana", "Alex"];
let alexCount = 0;

for (let i = 0; i < names.length; i++) {
  if (names[i] === "Alex") {
    alexCount = alexCount + 1;
  }
}

console.log("Alex appears " + alexCount + " times.");


// Problem 2
// Search for "elephant" in the list and print if it's found.
let animals = ["lion", "tiger", "elephant", "monkey", "giraffe"];
let found = false;

for (let i = 0; i < animals.length; i++) {
  if (animals[i] === "elephant") {
    found = true;
  }
}

if (found === true) {
  console.log("Elephant was found in the list!");
} else {
  console.log("Elephant was not found.");
}


// Problem 3
// Count and print how many scores are 100.
let perfectScoresCount = 0;

for (let i = 0; i < scores.length; i++) {
  if (scores[i] === 100) {
    perfectScoresCount = perfectScoresCount + 1;
  }
}

console.log("There are " + perfectScoresCount + " scores that are exactly 100.");


// Problem 4
// Search for the color "blue" in the list and print its index if it's found.
let colors = ["red", "green", "yellow", "blue", "purple"];
let foundIndex = -1;

for (let i = 0; i < colors.length; i++) {
  if (colors[i] === "blue") {
    foundIndex = i;
    break; // Stop looking because we found it
  }
}

if (foundIndex !== -1) {
  console.log("Blue was found at index: " + foundIndex);
} else {
  console.log("Blue was not found in the list.");
}


// Problem 5
// Count and print how many temperatures in the list are below zero.
let temperatures = [5, -2, 12, -8, 0, -1, 15];
let belowZeroCount = 0;

for (let i = 0; i < temperatures.length; i++) {
  if (temperatures[i] < 0) {
    belowZeroCount = belowZeroCount + 1;
  }
}

console.log("There are " + belowZeroCount + " temperatures below zero.");