let pet = "cat";

function show_pet() {
    console.log("The pet is", pet);
}

show_pet();

function adopt_pet() {
    pet = "dog";
}

adopt_pet();
show_pet();