"use strict";
// BUILT IN generics
const arr = [1, 2];
const call = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Done!");
    }, 2000);
});
// GENERIC FUNCTIONS and // CONSTRAINTS GENERICS
function generics_function(objA, obj2) {
    return Object.assign(objA, obj2);
}
const generics_function_answer = generics_function({ name: "Shyam", age: 20 }, { list: [12, 25, 36] });
console.log(generics_function_answer.list);
// keyof in GENERICS TYPES
// Typescript is not sure about that key exists in Object or not
// So we can make use of generics types
function extractValueByKey(obj, key) {
    return "Your Value " + obj[key];
}
extractValueByKey({ name: "TEST" }, "name");
// GENERIC CLASS
class DataStorage {
    constructor() {
        this.data = [];
    }
    getItems() {
        return [...this.data];
    }
    addItem(item) {
        return this.data.push(item);
    }
}
const NumberStorage = new DataStorage();
NumberStorage.addItem("2");
NumberStorage.addItem("3");
// GENERIC Uitility Types
// - Partial<Typescript's type>
// - Readonly<string>
// What is difference betweenn Generics vs Unions?
// Generics types is somewhere like you lock in certain type for function or variable
// But for Unions types, you can add or use specified set of types on or within funciton
