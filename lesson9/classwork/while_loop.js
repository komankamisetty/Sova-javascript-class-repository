let i = 1; //starts with i is equal to 1
while (i<5) {  //Repeats the loop while i is less than 5
    console.log(i); //Print hello each time the loop runs
    i = i + 1;  // increase i by 1 each time the loop runs so the loop eventually stops
}

//Error: infinite loop
//i = 1;
//while (i<5) {  //without changing i the condition ((i < 5) is always true)
//    console.log("beep");
//}

let j = 1; //Start with j equal to 1
while (j < 10) {
    console.log("woof");
    j = j + 1;
}

let k = 1;
while (k<1) {  // this nevver runs since it's k initially
    console.log("hello");
    k = k + 1;
}