/* RETRIEVE INDEX ELEMENT IN NUMERICAL ARRAYS */
class ArrayOfNumbers {
  constructor(public collection: number[]) {}

  get(index: number): number {
    return this.collection[index];
  }
}

/* RETRIEVE INDEX ELEMENT IN STRING ARRAYS */
class ArrayOfStrings {
  constructor(public collection: string[]) {}

  get(index: number): string {
    return this.collection[index];
  }
}

/* RETRIEVE INDEX ELEMENT IN ANY TYPE ARRAYS */
class GenericArray<T> {
  constructor(public collection: T[]) {}

  get(index: number): T {
    return this.collection[index];
  }
}

new GenericArray<string>(['A', 'B', 'C']); // TYPE ANNOTATION
new GenericArray(['A', 'B', 'C']); // TYPE INFERENCE

/* GENERICS WITH FUNCTIONS */

// STRING ARRAYS PRINTER
function printStrings(arr: string[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

// NUMBER ARRAY PRINTER
function printNumbers(arr: number[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

// GENERIC ARRAY PRINTER
function print<T>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

print<string>(['a', 'b', 'c']); // TYPE ANNOTATION
print(['a', 'b', 'c']); // TYPE INFERENCE

/* GENERIC CONSTRAINTS */
class Car {
  print() {
    console.log('I am a car');
  }
}

class House {
  print() {
    console.log('I am a house');
  }
}

function printHousesOrCars1<T>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    arr[i].print();
  }
}

printHousesOrCars1([1, 2, 3, 4]); // no error thrown when supposed to, will try to run print method for numbers as well

interface Printable {
  print(): void;
}

function printHousesOrCars2<T extends Printable>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    arr[i].print();
  }
}

printHousesOrCars2([1, 2, 3, 4]); // throws error because of Generic Constraint assigned with Printable interface
printHousesOrCars2([new House(), new Car(), new Car(), new House()]); // doesn't throw error
