let colors = ["red", "green", "blue", "yellow"];

console.log(colors);

console.log("First color: ", colors[0]);
console.log("Second color: ", colors[1]);
console.log("Third color: ", colors[2]);
console.log("Fourth color: ", colors[3]);

colors.push("purple"); //adds a color at the end
console.log("After append: ", colors);

colors.splice(2, 0, "pink"); //allowes you to insert something at an item
console.log("After insert at index 2: " + colors);

let popped_color = colors.pop(); //removes the last color in the list
console.log("Popped color: " + popped_color);
console.log("After pop: ", colors);

let popped_color_at_index = colors.splice(1, 1)[0];  //removes the color that's picked based on number
console.log("Popped color at index 1: " + popped_color_at_index);
console.log("After pop at index 1: " + colors);

let index_of_blue = colors.indexOf ("blue");  //finds the index of an item
console.log("Index of 'blue':", index_of_blue);

colors.push("blue");
console.log(colors);
let blue_count = colors.filter((color) => color == "blue").length;
console.log("Count of 'blue': ", blue_count);

colors.sort();
console.log("Sorted array: " + colors);

colors.reverse(); //reverses the order of the array
console.log("After reverse: ", colors);