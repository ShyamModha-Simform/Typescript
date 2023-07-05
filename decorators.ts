// DECORATORS

// Decorators will execute when class is define by js...
// ...not when class is instantiated

var x: number = 101;

function Logger(constructor: Function) {
    console.log("Logging...!");
    console.log(constructor);
}

// per.add(this);

// DECORATORS Factories - if want to pass any arguments
// Return the anonymous function to accept arguments by decorators

function withTemplate() {
    console.log("TEMPlATE FACTORY");
    return function (_: Function) {
        // "_" says to ts that i aware of this default passed-in argument but i don't want to use it.
        console.log("TEMPLATE DECORATORS");
    };
}
function withTemplate2() {
    console.log("TEMPLATE 2 FACTORY");
    return function (_: Function) {
        // "_" says to ts that i aware of this default passed-in argument but i don't want to use it.
        console.log("TEMPLATE 2 DECORATORS");
    };
}

// MULTIPLE decorators
// Execution order is bottom-up from target class
// One more obvious thing that factories execute in top to bottom order

// PROPERTY DECORATORS for class

function property_log(target: any, propertyName: string) {
    console.log("Property Decorators..!");
    console.log(target, propertyName);
}

// Accessor decorators for get set methods

function accessor_log(
    target: any,
    name: string | Symbol,
    description: PropertyDescriptor
) {
    console.log("Accessor Decorators...!");
    console.log(target);
    console.log(name);
    console.log(description);
}

// Parameter decorators for methods

function parameter_log(target: any, name: string | Symbol, position: number) {
    console.log("Parameter Decorators...!");
    console.log(target);
    console.log(name);
    console.log(position);
}

@withTemplate()
@withTemplate2()
class Person {
    @property_log
    private _name: string = "TEST";

    @accessor_log
    set name(value: string) {
        this._name = value;
    }

    constructor() {
        console.log("Creating an object...!");
    }

    add(@parameter_log context: object) {
        console.log(context);
    }
}

const per = new Person();

// Returning value in method decorators

function AutoBind(_: any, _2: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    const newDescriptor: PropertyDescriptor = {
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
    msg: string = "This is Typescript!";

    @AutoBind
    showMsg() {
        console.log(this.msg);
    }
}
const p = new PrintMsg();
const display_msg_btn = document.getElementById("display_msg");

// Here event listener call back function will replace object's scope with event's scope...
// ... so this.msg will not be available in event's scope
// For this we have to bind the object's scope , we can do it using decorators
display_msg_btn?.addEventListener("click", p.showMsg);
