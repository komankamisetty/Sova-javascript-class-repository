// comparison operators are used to compare 2 values and return a boolean (true or false)
console.log(5 > 3); // greater than
console.log(5 < 3); // less than
console.log(5 >= 3); // greater than or equal to. The equal to sign must be after the greater than sign. Same for less.
console.log(5 <= 3); // less than or equal to. Look at the above comment for the rule.
let x = 5 // the variable must be declared before it's used
console.log(5.125 == x); // equal to. There must be 2 equal to signs, and this coutns for decimals
console.log(5.125 === x); //Strict equality: checks if the valeues are equal and of the same type
// Examples:
console.log(0 == false); //This is an exmaple of strict and loose equality. Even if false is written, it's returned as true.
console.log(0 === false); //This is a strict example of equality. The result will be false as it's not the same type
console.log(0 !== false); //THis is not equal to, and is strict inequality
console.log(5 != 3);  //Loose inequality. THis will check if the values are not equal, but wo't check the type.
// you can also compare variables:
let a = 10;
let b = 7;
console.log(a > b);
console.log(a === b);
console.log(a == b);
//Even variables:
console.log("apple" === "apple");
console.log("Apple" === "apple");
console.log("Apple" == "apple"); //String comparison is case sensitive
console.log("apple" !== "banana"); //it would run out as true, since these 2 strings are not euqal to each other
console.log("apple" != "banana");
console.log("apple" !== "apple");
console.log("bat" > "cat");
console.log("bat" === "cat");
console.log("bat" < "cat"); // The string comparison works by alphabet. The prior 2 would appear as false, while this is true due to b being before c.
console.log("bat" === "Bat"); // capitalized words are not the same as lowercase
console.log("bat" > "Bat"); //Lowercase words are considered coming after capitalized ones
console.log("bat" < "Bat");//First capitalized, then lowercase
console.log("bat" > "bat");
console.log("zha" < "zhan"); //If there is an extra letter, then that's considered as greater
console.log("zhan" < "zha"); // In this one, it's false since zhan has an extra letter