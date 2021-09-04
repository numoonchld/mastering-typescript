/* 1. FUNCTION THAT RETURNS THE `any` TYPE */

// consider the following block of code
const json1 = `{"x": 10, "y": 20}`;
const coordinates1 = JSON.parse(json1); // Here, JSON.parse() returns the `any` type by default
console.log(coordinates1.hello); // doesnt throw error and alert the developer

// to fix the above block of code
const json2 = `{"x": 10, "y": 20}`;
const coordinates2: { x: number; y: number } = JSON.parse(json2); // Here, JSON.parse() returns the `any` type by default
console.log(coordinates2.hello); // throws error to alert developer!
