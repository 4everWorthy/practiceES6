const numbers1 = [1, 2, 3, 4, 5];
const numbers2 = [6, 7, 8, 9, 10];

// spread operator to combine elements of numbers1 numbers2
const numbers = [...numbers1, ...numbers2];

// arrow function to square a number (number * number is used to square each number)
const square = number => number * number;

// .map method creates new array of squares by applying a given function to each element of the existing array
const squares = numbers.map(square);

// arrow function will check if a number is even (% - is the number divisible by 2)
const isEven = number => number % 2 === 0;

// isEven returns true if even and false if not
console.log(isEven(2))
console.log(isEven(7))

// filter method to create a new array of even squares
const evenSquares = squares.filter(isEven);

// destructuring assignment to extract the 1st and 2nd elements
const [firstEvenSquare, secondEvenSquare] = evenSquares;

// template literal to log arrays and extracted values
console.log(`Original numbers array: ${numbers}`);
console.log(`Squares array: ${squares}`);
console.log(`Even squares array: ${evenSquares}`);
console.log(`First even square: ${firstEvenSquare}`);
console.log(`Second even square: ${secondEvenSquare}`);




