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
let foundWord2: boolean; // Here, foundWord gets initialized to `any` type

for (let i = 0; i < words2.length; i++) {
  if (words2[i] === 'green') {
    foundWord2 = true;
  }
}
