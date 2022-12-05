// third parameter is optional with ?
function add(a: number, b: number, c?: number): number {
  return c ? a + b + c : a + b;
}

console.log(add(2, 3));

const sub = (num1: number, num2: number): number => num1 - num2;

console.log(sub(10, 1));

const multiply = function (num1: number, num2: number): number {
  return num1 * num2;
};

console.log(multiply(2, 3));

// rest parameters, spread parameters
function add2(num1: number, num2: number, ...num3: number[]): number {
  return num1 + num2 + num3.reduce((acc, num) => num + acc);
}

let numbers: number[] = [1, 2, 3, 4, 5];

console.log(add2(2, 3, ...numbers));

// this also works, frist and second parameter is fulfilled, the others goes into the REST/remaining.
console.log(add2(2, 3, 4, 5, 6, 7, 8));

// generic type/Type T, when function is called, the resulting type of the returned value is the same as the input type
function getItems<T>(item: T[]): T[] {
  return new Array<T>().concat(item);
}

let concatResults = getItems<number>([1, 2, 3, 4, 5]);

let concatString = getItems<string>(["a", "b", "c", "d", "e"]);
