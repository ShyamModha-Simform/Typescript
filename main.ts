// literal type and Union type

function animationFunc(type: "ease-in-out" | "ease" | "ease-out-in") {
    console.log(type);
}

animationFunc("ease-in-out");

// Advanced Types

// Intersecion types--------
// -We can combine object types and primitive types also using intersection types
// -it also works with interfaces

type Employee = {
    name: string;
    age: number;
};

type Admin = {
    privilages: string;
};

type UpperManagement = Employee & Admin;

type Combinable = string | number;

// TYPE GUARDS-------

// now let suppose i assigned Combinable type to function arguments and want to perform Mathematical calculation..
// ..so I have to check that is one of them is string or not then and only then i can directly perform calculation..
// .. and TS will not throw any error.

function add(a: Combinable, b: Combinable) {
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

const nameInput = document.getElementById("description")! as HTMLInputElement;

nameInput.value = "Shyam";

// INDEX PROPERTIES-----

// Let suppose if we want to have dynamic number of properties but still we want to have type assign to each one of them...
// So we can use index properties

interface ErrorContainer {
    [props: string]: string;
}

const errorDemo_INDEX_PROPERTIES: ErrorContainer = {
    email: "Enter valid Email",
};

// OPTIONAL CHAINING => ?.
// NULLISH COALESCING => ??
