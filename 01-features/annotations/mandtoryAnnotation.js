/* 1. FUNCTION THAT RETURNS THE `any` TYPE */
// consider the following block of code
var json1 = "{\"x\": 10, \"y\": 20}";
var coordinates1 = JSON.parse(json1); // Here, JSON.parse() returns the `any` type by default
console.log(coordinates1.hello);
// to fix the above block of code
var json2 = "{\"x\": 10, \"y\": 20}";
var coordinates2 = JSON.parse(json2); // Here, JSON.parse() returns the `any` type by default
console.log(coordinates2.hello);
