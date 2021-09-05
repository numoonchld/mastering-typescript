# Types

## File Usage:

- `tsc variables.ts && node variables.js`

## Type Annotation and Type Inference Interaction

- while **Type Annotations** can be put down the developer manually,
  - if the _variable declration_ and _varaible initialization_ are **on the same line**
    - TypeScript's **Type Inference** system will kick in automatically!
    - example:
      ```js
      let apples = 5; // TYPE INFERENCE KICKS IN, SETTING THE TYPE OF `apples` TO `number`
      ```
  - however, - if the _variable declration_ and _varaible initialization_ are **on different lines**, mandatorily annotate type
    - example:
      ```js
      let apples; // TYPE INFERENCE SETS TYPE OF `apple` TO `any`
      apples = 5;
      ```

### The Balancing Act

- The goal of the balancing act in TypeScript is to ensure no `any` type allocation occurs

  - prevent `any` type from being assigned to any variable

- Type Inference should not be used _in all situations_

  - Some situations demand for Type Annotation by the developer, especially in the situations described in the following section

- Utilize Type Inference only when no Type Disambiguation to `any` type will not occur

### When to Annotate Type vs. allow Type Inference to take over

- Annotate in the following scenarios:

  1. variable declaration and initialization occur in different lines
  2. type of varibale cannot be inferred
  3. a function returns ambigious `any` type, and the value type needs to be explicitly disambiguated

- Other than the above 3 scenarios, allow Type Inference to kick in
- Goal of using TypeScript as a developer is to prevent any variable getting assigned the type `any`

## Functions

- while Type Annotation can check for argument and return type discrepancies in functions, it does not rectify incorrect logic within functions!
  - does not vet the logic within the function defined

#### Type Annotations

- for functions, types have to be annotated for

  - arguments values
  - return value

- when return type annotation is added, a `return` statement has to be mandatorily specfied

#### Type Inference

- infers function return value type automatically
  - but not for arguments of the function
- never use Type Inference for function returns, because it then fails to alert the developer if the return keyword is missing

#### `void` and `never`

- `void` return Type Annotation allows

  - no return keyword at all
  - `return null`
  - `return undefined`

- `never` is to specify the function should never return anything!
  - the function is always expected to end prematuraly
  - example: a function whose sole act is to throw an error

## Interfaces

- A new Type Definition
  - describing the property names and value types of an object

```js
/* CREATE A NEW TYPE USING AN INTERFACE */
// INTERFACE NAME ALWAYS BEGINS WITH A CAPITAL LETTER!
interface Vehicle {
  name: string; // note the semicolon, not a comma!!
  year: number;
  broken: boolean;
}
```

### Code Reuse with Interfaces

- Goal of an Interface: A Gatekeeper for Functions whose inputs are objects
  - that go into a function that accepts objects for instance
- Create functions that accept arguments that are type set with interfaces
- Objects/classes can decide to implement a given interface to work with a function

## Classes

- `tsc classes.ts && node classes.js`

- These are blueprints to create an `object` with some

  - **fields/properties** (values)
  - **methods** (functions)

- The represent a class of things
  - example: if `Mobile Phone` is a class,
    - `iPhone`, `Galaxy Note`, `Pixel`, `Mi A3` are all instances of the `Mobile Phone` class

### Basic Inheritance

- the base class is the parent class or super class

  - child class extends from parent class
  - with use of keyword `extends`

```js
/* CONSIDER VEHICLE CLASS */
class Vehicle {
  drive(): void {
    console.log('vroom vroom');
  }

  honk(): void {
    console.log('beep beep');
  }
}
/* INHERITANCE */
class Car extends Vehicle {
  drive(): void {
    console.log('brr');
  }
}
```

### Access Modifiers for Classes

- `public`, `private`, `protected` (applies and works the same way for both fields and methods)

  - fields or properties marked `public` can be called anywhere, anytime
    - this is the default, i.e. if no modifier for a field/property is specified
  - ones marked `private` can only be called by **other methods** inside that exact class definition
    - this is NOT for application security at all!
    - restrict the different methods that other developers can call
    - access modifier keys are for communicating the purpose of the methods available to other developes or self in the future
  - `protected` ones can be called by
    - _other methods in this class_, or
    - _other methods in child classes_

- when overriding methods in child classes, the SAME access modifier has to be used
  - do not alter the access modifier when overriding methods in child classes

### Shorthand for Class Fields

- the following code is the get an initial value for class field

```js
class Vehicle {
  color: string;
  constructor(color: string) {
    this.color = color;
  }
}
```

- the shorthand for the above code is as follows

```js
class Vehicle {
  constructor(public color: string) {}
}
```
