function make_greeting() {
    let greeting = "Hello, world!";
    return greeting;
}

let message = make_greeting(); // Call the make_greeting() function
console.log(message);

//FUnction that biulds a face
function build_face() {
    let face ="-_-";
    return face;
}

let person = build_face();
console.log("Meet our human:", person);

// Function that returns a personalized greeting based on name.
function personalized_greeting(name) { //name is a parameter
    let greeting = "hello, " + name + "!";
    return greeting;
}

console.log(personalized_greeting("Alice"));

function rectangle_area(length, width) {
    let area = length * width;
    return area;
}

console.log("The area of a 5x3 rectangle is ", rectangle_area(5, 3));