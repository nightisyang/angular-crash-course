"use strict";
let lname = "John";
lname = "Shenyang";
let newname = lname.toUpperCase();
console.log(newname);
let age;
age = 25;
let dob = "25";
let result = parseInt(dob);
let isValid = false;
console.log(isValid);
let empList;
empList = ["Hellow", "Henlo", "Herro"];
// generics
let numList;
numList = [1, 2, 3, 4, 5];
let numResult = numList.filter((num) => num > 2);
let findNum = numList.find((num) => num === 2);
let sum = numList.reduce((acc, num) => acc + num);
let c = 2 /* Color.Blue */;
let swapNums;
function swapNumbers(num1, num2) {
    return [num2, num1];
}
swapNums = swapNumbers(10, 20);
swapNums[0];
swapNums[1];
let department;
department = "IT";
department = 10;
function addNum(num1, num2) {
    return num1 + num2;
}
let newSum = addNum(10, 20);
