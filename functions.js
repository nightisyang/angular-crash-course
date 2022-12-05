"use strict";
// third parameter is optional with ?
function add(a, b, c) {
    return c ? a + b + c : a + b;
}
console.log(add(2, 3));
const sub = (num1, num2) => num1 - num2;
console.log(sub(10, 1));
const multiply = function (num1, num2) {
    return num1 * num2;
};
console.log(multiply(2, 3));
// rest parameters, spread parameters
function add2(num1, num2, ...num3) {
    return num1 + num2 + num3.reduce((acc, num) => num + acc);
}
let numbers = [1, 2, 3, 4, 5];
console.log(add2(2, 3, ...numbers));
// this also works, frist and second parameter is fulfilled, the others goes into the REST/remaining.
console.log(add2(2, 3, 4, 5, 6, 7, 8));
// generic type/Type T, when function is called, the resulting type of the returned value is the same as the input type
function getItems(item) {
    return new Array().concat(item);
}
let concatResults = getItems([1, 2, 3, 4, 5]);
let concatString = getItems(["a", "b", "c", "d", "e"]);
