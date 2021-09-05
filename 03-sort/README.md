# Sorting with TS

- exploring TS `interfaces` and `classes` for effective code reuse

## `tsconfig.json`

- run `tsc --init` in the root directory to generate this file
- compiler options can be set in this file
  - such as TS file source directory: `rootDir` in `tsconfig.json`
  - and the JS file output directory: `outDir` in `tsconfig.json`
- then, run `tsc` to auto compile TS files in `rootDir` to JS files in `outDir`
  - `tsc -w` continuously compiles changes in the `rootDir`

## Chaining TS > JS > Console

- after the previous section's setup, do `npm init -y`
  - then install `npm install nodemon concurrently`
- then add following to `package.json`

```js
"scripts": {
    "start:build": "tsc -w",
    "start:run": "nodemon build/index.js",
    "start": "concurrently npm:start:*"
  },
```

## Notes

- strings are immutable in JS, and hence in TS

  - no errors are thrown however, when trying to mutate string

- Excise caution when using `|` operator for Type Annotation for a variable

## Type Guards

- clarifies the type of value we are working with
- similar to `switch`'s `case` statement for Types checking

```ts
console.log([1, 2, 3] instanceof Array); // yields `true`

if (this.collection instanceof Array) {
  ... Array Logic
}
if (this.collection instanceof String) {
  ... String Logic
}
```

- `instanceof` is like `typeof` but for non-primitive derived Types
  - also works as a Type Guard for Object types, including custom Types
- `typeof` works with primitives only

  - it does not, however function as type guard

- `get` keyword enables a class method to be used as a `property`

```ts
get length(): number {
  return this.data.length;
}
```

## Interfaces: Instruction for `class`

- While it is great that Interfaces may be used to describe the structure of a plain object

  - its real value lies in being able to setup a contract between different classes

- `Sorter` just needs an input of `Sortable` kind, which is an interface
  - `NumbersCollection` and `CharacterCollection` both can pass the checks of `Sortable` Interface

```ts
interface Sortable {
  length: number;
  compare(leftIndex: number, rightIndex: number): boolean;
  swap(leftIndex: number, rightIndex: number): void;
}
```

## Inheritance

- `Sorter` may be made made the parent class of `LinkedList`, `NumbersCollection` and `CharacterCollection`

- Abstract Class cannot be used instantiate from
  - they can only be used as Parent Class for other Classes, i.e. they may only be extended from
  - but references to methods that may exist in the child classes may exist in the Abstract Class as well
    - however, they need to be initialized in the Abstract Class with the expected Type Signatures
    - and Child Classes need to promise to implement those initialized methods, with the correct Type Signatures

## Interfaces vs. Abstract Classes

- **Interfaces**:

  - setup contract between different classes
  - used when very different objects need to work together
  - good for loose coupling

- **Abstract Classes**:
  - also useful for setting up contract between different classes
  - used when trying to build an object definition
  - strongly couples classes together
