// Problem 1
// Write a function that returns the number 42 and print the result.
function getTheAnswer() {
    return 42;
}

const result1 = getTheAnswer();
console.log("Problem 1 Result:", result1);


// Problem 2
// Write a function that returns "penguin" and print the result.
function getAnimal() {
    return "penguin";
}
const result2 = getAnimal();
console.log("Problem 2 Result:", result2);

// Problem 3
// Create a variable for a fruit, then print it.
// Modify it inside a function and print it again.
let favoriteFruit = "Apple"; 
console.log("Problem 3 (Before):", favoriteFruit);

function changeFruit() {
    favoriteFruit = "Mango"; // Modifying the global variable
}

changeFruit();
console.log("Problem 3 (After):", favoriteFruit);


// Problem 4
// Write a function that takes two parameters: first_name and last_name.
// The function should return a string that combines the first and last names separated by a space.
function combineNames(first_name, last_name) {
    // Using a template literal for clean string combination
    return `${first_name} ${last_name}`;
}

const fullName = combineNames("Jane", "Doe");
console.log("Problem 4 Result:", fullName);


// Problem 5
// Write a function called calculate_perimeter that takes two parameters: length and width.
// The function should return the perimeter of a rectangle (2 * (length + width)).
function calculate_perimeter(length, width) {
    return 2 * (length + width);
}

const perimeter = calculate_perimeter(5, 10);
console.log("Problem 5 Result:", perimeter);