/* 1. FUNCTION THAT RETURNS THE `any` TYPE */

// consider the following block of code
const json1 = `{"x": 10, "y": 20}`;
const coordinates1 = JSON.parse(json1); // Here, JSON.parse() returns the `any` type by default
console.log(coordinates1.hello); // doesnt throw error and alert the developer

// to fix the above block of code
const json2 = `{"x": 10, "y": 20}`;
const coordinates2: { x: number; y: number } = JSON.parse(json2); // Here, JSON.parse() returns the `any` type by default
console.log(coordinates2.hello); // throws error to alert developer!

/* 2. VARIABLE DECLARED AND INITIALIZED ON SEPARATE LINES */

// consider the following block of code
const words1 = ['red', 'green', 'blue'];
let foundWord1; // Here, foundWord1 gets initialized to `any` type

for (let i = 0; i < words1.length; i++) {
  if (words1[i] === 'green') {
    foundWord1 = true;
  }
}

// to fix the above block of code
const words2 = ['red', 'green', 'blue'];
let foundWord2: boolean; // Here, foundWord2 gets TYPE assigned proactively by the developer

for (let i = 0; i < words2.length; i++) {
  if (words2[i] === 'green') {
    foundWord2 = true;
  }
}

/* 3. VARIBLE TYPE CANNOT BE AUTO INFERRED */

// consider the following block of code
let numbers1 = [-10, -1, 12];
let numberAboveZero1 = false; // Here, `numberAboveZero1` gets type boolean auto assigned due to initialization along with declaration in same line

for (let i = 0; i < numbers1.length; i++) {
  if (numbers1[i] > 0) {
    numberAboveZero1 = numbers1[i]; // But, auto assigned type causes error without understanding the intent of the developer
  }
}

// to fix the above block of code
let numbers2 = [-10, -1, 12];
let numberAboveZero2: boolean | number = false; // Specify multiple types if value type is expected to change dynamically based on some condition

for (let i = 0; i < numbers2.length; i++) {
  if (numbers2[i] > 0) {
    numberAboveZero2 = numbers2[i]; // Type Inference doesnt throw error like the previous code block
  }
