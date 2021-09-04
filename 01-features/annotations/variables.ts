/* NUMBER ANNOTATION */
const apples: number = 5;
console.log(apples);

/* STRING ANNOTATION */
const speed: string = `fast`;
console.log(speed);

/* BOOLEAN ANNOTATION */
const isAuthenticated: boolean = true;
console.log(isAuthenticated);

/* NULL ANNOTATION */
const emptyObject: null = null;
console.log(emptyObject);

/* UNDEFINED ANNOTATION */
const undefinedValue: undefined = undefined;
console.log(undefinedValue);

/* BUILT IN OBJECTS */
const now: Date = new Date();
console.log(now);

//===========================================================

/* ARRAY ANNOTATION */
const colors: string[] = ['red', 'green', 'blue'];
console.log(colors);

const myNumbers: number[] = [1, 2, 3];
console.log(myNumbers);

const truths: boolean[] = [true, false, false, true];
console.log(truths);

/* CLASS ANNOTATION */
class Car {}

const car: Car = new Car();
console.log(car);

/* OBJECT ANNOTATION */
const point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

//===========================================================

/* FUNCTION ANNOTATION */
const logNumber: (input: number) => void = (input: number) => {
  console.log(input);
};
