let lname: string = "John";

lname = "Shenyang";

let newname = lname.toUpperCase();

console.log(newname);

let age: number;

age = 25;

let dob: string = "25";
let result: number = parseInt(dob);

let isValid: boolean = false;

console.log(isValid);

let empList: string[];

empList = ["Hellow", "Henlo", "Herro"];

// generics
let numList: Array<number>;

numList = [1, 2, 3, 4, 5];

let numResult = numList.filter((num) => num > 2);
let findNum = numList.find((num) => num === 2);
let sum = numList.reduce((acc, num) => acc + num);

// console.log(sum);

const enum Color {
  Red,
  Green,
  Blue,
}

let c: Color = Color.Blue;

let swapNums: [fistNumber: number, secondNumber: number];

function swapNumbers(num1: number, num2: number): [number, number] {
  return [num2, num1];
}

swapNums = swapNumbers(10, 20);

swapNums[0];
swapNums[1];

let department: any;

department = "IT";
department = 10;

function addNum(num1: number, num2: number) {
  return num1 + num2;
}

let newSum = addNum(10, 20);
