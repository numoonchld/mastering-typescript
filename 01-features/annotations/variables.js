/* NUMBER ANNOTATION */
var apples = 5;
console.log(apples);
/* STRING ANNOTATION */
var speed = "fast";
console.log(speed);
/* BOOLEAN ANNOTATION */
var isAuthenticated = true;
console.log(isAuthenticated);
/* NULL ANNOTATION */
var emptyObject = null;
console.log(emptyObject);
/* UNDEFINED ANNOTATION */
var undefinedValue = undefined;
console.log(undefinedValue);
/* BUILT IN OBJECTS */
var now = new Date();
console.log(now);
//===========================================================
/* ARRAY ANNOTATION */
var colors = ['red', 'green', 'blue'];
console.log(colors);
var myNumbers = [1, 2, 3];
console.log(myNumbers);
var truths = [true, false, false, true];
console.log(truths);
/* CLASS ANNOTATION */
var Car = /** @class */ (function () {
    function Car() {
    }
    return Car;
}());
var car = new Car();
console.log(car);
/* OBJECT ANNOTATION */
var point = {
    x: 10,
    y: 20
};
//===========================================================
/* FUNCTION ANNOTATION */
var logNumber = function (input) {
    console.log(input);
};
