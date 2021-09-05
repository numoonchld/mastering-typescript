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
- Goal of an Interface: A Gatekeeper for Functions whose inputs are objects
  - that go into a function that accepts objects for instance

### Code Reuse with Interfaces

- Create functions that accept arguments that are type set with interfaces
- Objects/classes can decide to implement a given interface to work with a function

##
