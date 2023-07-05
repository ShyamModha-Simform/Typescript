"use strict";
// DECORATORS
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
// Decorators will execute when class is define by js...
// ...not when class is instantiated
var x = 101;
function Logger(constructor) {
    console.log("Logging...!");
    console.log(constructor);
}
// per.add(this);
// DECORATORS Factories - if want to pass any arguments
// Return the anonymous function to accept arguments by decorators
function withTemplate() {
    console.log("TEMPlATE FACTORY");
    return function (_) {
        // "_" says to ts that i aware of this default passed-in argument but i don't want to use it.
        console.log("TEMPLATE DECORATORS");
    };
}
function withTemplate2() {
    console.log("TEMPLATE 2 FACTORY");
    return function (_) {
        // "_" says to ts that i aware of this default passed-in argument but i don't want to use it.
        console.log("TEMPLATE 2 DECORATORS");
    };
}
// MULTIPLE decorators
// Execution order is bottom-up from target class
// One more obvious thing that factories execute in top to bottom order
// PROPERTY DECORATORS for class
function property_log(target, propertyName) {
    console.log("Property Decorators..!");
    console.log(target, propertyName);
}
// Accessor decorators for get set methods
function accessor_log(target, name, description) {
    console.log("Accessor Decorators...!");
    console.log(target);
    console.log(name);
    console.log(description);
}
// Parameter decorators for methods
function parameter_log(target, name, position) {
    console.log("Parameter Decorators...!");
    console.log(target);
    console.log(name);
    console.log(position);
}
let Person = class Person {
    set name(value) {
        this._name = value;
    }
    constructor() {
        this._name = "TEST";
        console.log("Creating an object...!");
    }
    add(context) {
        console.log(context);
    }
};
__decorate([
    property_log
], Person.prototype, "_name", void 0);
__decorate([
    accessor_log
], Person.prototype, "name", null);
__decorate([
    __param(0, parameter_log)
], Person.prototype, "add", null);
Person = __decorate([
    withTemplate(),
    withTemplate2()
], Person);
const per = new Person();
// Returning value in method decorators
function AutoBind(_, _2, descriptor) {
    const originalMethod = descriptor.value;
    const newDescriptor = {
        configurable: true,
        enumerable: false,
        get() {
            // Now whichever class's instance invoke the get() that object scope will be bind to originalMethod, because get() has more extra layer between event listeners
            const boundFn = originalMethod.bind(this);
            return boundFn;
        },
    };
    return newDescriptor;
}
class PrintMsg {
    constructor() {
        this.msg = "This is Typescript!";
    }
    showMsg() {
        console.log(this.msg);
    }
}
__decorate([
    AutoBind
], PrintMsg.prototype, "showMsg", null);
const p = new PrintMsg();
const display_msg_btn = document.getElementById("display_msg");
// Here event listener call back function will replace object's scope with event's scope...
// ... so this.msg will not be available in event's scope
// For this we have to bind the object's scope , we can do it using decorators
display_msg_btn === null || display_msg_btn === void 0 ? void 0 : display_msg_btn.addEventListener("click", p.showMsg);
