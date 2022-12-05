"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _Employee_id;
class Employee {
    // use constructure to parameterize variables
    constructor(id, name, address) {
        // variable declaraction
        _Employee_id.set(this, void 0);
        this.address = address;
        __classPrivateFieldSet(this, _Employee_id, id, "f");
        this.name = name;
    }
    getNameWithAddress() {
        return `${this.name}: ${this.address}`;
    }
}
_Employee_id = new WeakMap();
// syntax if constructure parameterization is used
let john = new Employee(1, "John", "Bukit Jalil");
let address = john.getNameWithAddress();
class Manager extends Employee {
    constructor(id, name, address) {
        super(id, name, address);
    }
    getNameWithAddress() {
        return `${this.name} is a Manager at: ${this.address}`;
    }
}
// assign values separately if constructure is not used
// john.id = 1;
// john.name = "John";
// john.address = "Bukit Jalil";
console.log(address);
let mike = new Manager(2, "Mike", "Cherise Drive");
console.log(mike.getNameWithAddress());
