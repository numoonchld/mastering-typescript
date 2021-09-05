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

```js
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

```js
get length(): number {
  return this.data.length;
}
```
