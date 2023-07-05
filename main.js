"use strict";
// literal type and Union type
function animationFunc(type) {
    console.log(type);
}
animationFunc("ease-in-out");
// TYPE GUARDS-------
// now let suppose i assigned Combinable type to function arguments and want to perform Mathematical calculation..
// ..so I have to check that is one of them is string or not then and only then i can directly perform calculation..
// .. and TS will not throw any error.
function add(a, b) {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
}
// For objects, classes types, we can use "in" method to check whether property exists or not, other then that...
// ... we can use "instance of" to check that class's constructor/ object instance is created or not
// DISCRIMINATED UNIONS -----
// To overcome above problem with interface union types we have one workaround..
// In which we have to assign one "type" property by using it...
// ... we can perform check that what kind of class or instance we are in with the help of "Switch case"
// TYPE CASTING----
// - We are telling typescript that this HTML element will never fail and always available to access its values
// - Inshort TS doesn't have to worry about
const nameInput = document.getElementById("description");
nameInput.value = "Shyam";
const errorDemo_INDEX_PROPERTIES = {
    email: "Enter valid Email",
};
// OPTIONAL CHAINING => ?.
// NULLISH COALESCING => ??
