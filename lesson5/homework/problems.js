// Problem 1
// Create a list of 3 operating systems.
// Print the last one using length.
// Then reverse the list and print it.
let computer = ["Windows", "Linux", "macOS"];
console.log(computer[computer.length - 1]); // Prints last item
computer.reverse();
console.log(computer);


// Problem 2
// Create a list of 4 school subjects.
// Print the second subject.
// Then sort them alphabetically and print the result.
let subjects = ["Math", "History", "Science", "Art"];
console.log(subjects[1]);
subjects.sort();
console.log(subjects);


// Problem 3
// Create a list of 5 error codes.
// Print how many there are.
// Then find the index of "403" and print it.
let errors = ["400", "401", "403", "404", "500"];
console.log(errors.length);
console.log(errors.indexOf("403"));


// Problem 4
// Create a list of 2 programming languages.
// Print a random one.
// Then append another language and print the list.
let languages = ["JavaScript", "Python"];
let randomLang = languages[Math.floor(Math.random() * languages.length)];
console.log(randomLang);
languages.push("Rust");
console.log(languages);


// Problem 5
// Create a list of 6 passwords.
// Print the one in the middle using length.
// Then remove the first password in the list and print it.
let passwords = ["pass1", "pass2", "pass3", "pass4", "pass5", "pass6"];
// Middle for 6 items would be index 3 (the 4th item) or 2. Using index 3 here:
console.log(passwords[Math.floor(passwords.length / 2)]);
passwords.shift(); 
console.log(passwords);