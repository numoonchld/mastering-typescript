# TS for Data Analysis and Reporting

## Setup

- `npm init -y`
- `tsc --init`
- `npm install nodemon concurrently`

- create `build` and `src` folders

  - `src` will hold all the TS source code
  - `build` will be the destination for the compiled JS code
  - configure `tsconfig.json` file to setup `rootDir` and `outDir`
    - `src`: `./rootDir`
    - `build`: `./outDir`

- then configure `scripts` in `package.json`

```js
 "scripts": {
    "start:build": "tsc -w",
    "start:run": "nodemon build/index.js",
    "start": "concurrently npm:start:*"
  },
```

- `npm start` TWICE!
  - the first time is expected to throw an error since TS file wont be complied already for nodemon to run it automatically
  - the second time around the `index.js` file would already have been generated the first time around

## Type Definition File

- When ever TypeScript calls a JS Library, it mandatorily needs a Type Definition file
- Type Definitions for a JS library communicate to TS about all the objects, properties, functions, function arguments and return values in that library

### NodeJS and TS

- NodeJS standard library modules are no different!
- When a NodeJS library is loaded with an `import`, a Type Definition file also has to be specified
  - else, an error like `Cannot find module 'fs' or its corresponding type declarations.ts(2307)` is thrown
    - note that this error is quite misleading as well, but the root cause is missing Type Definition files
- TS does not ship with Type Definition files for NodeJS out of the box!

### NodeJS Type Definitions

- Type Definition files for ALL NodeJS standard library modules can be loaded in a single file
  - `npm install @types/node`

## `enum` - Enumeration

- essentially an object that stores some closely related values

  - the values are always strings or numbers!

- typically used for to represent outcomes when there is a fixed and a small set of outcomes

- example: an `enum` defined for the outcomes of a football match

```js
enum MatchResult {
  HomeWin = 'H',
  AwayWin = 'A',
  Draw = 'D',
}

const printMatchResult = ():MatchResult => {
  if (match[5] === 'H') {
    return MatchResult.HomeWin
  }
  ...
}

```

- `enums` generate a new Type as well
- accessing `enum` fields values is like accessing plain object values
- **Primary Goal**: it is to signal to other engineers that the fields are all closely related values

### Why to use Enums over objects?

- for clear communication with developer peers
  - no performance benefit, but is used to signal to other developers that it is a set of closely related values

### `enum` usage Scenarios

- **Caution!** - `enum` usage is very subtle

  - use `enums` only when all possible fields are known!
    - enum fields are not to change in the future programmatically
  - new `enum` fields cannot be added programmatically on-the-fly like in objects

- it is possible to initialize enums without any values assigned to it, like the following example:

```js
enum MatchResult {
  HomeWin,
  AwayWin,
  Draw,
}

```

- when an `enum` gets complied to JS, it is actually an object (with an IIFE wrapper)

- all fields of an `enum` must be hardcoded! i.e. new fields cannot be programmatically added

  - examples:
    - storing the Primary Colors is good `enum` usage
    - storing all blog post title for a blog app is not a good application of `enum`
      - blog users need to be able to add more blogs and this is a bad fit for `enum`
    - storing drink sizes (Small, Medium, Large) is good application
    - storing all years from 1970: while it is a finite dataset, it has way too many values and hence it is not a good fit for `enum`
    - storing netflix movie categories: bad `enum` application, more categories may need to be added in the future
    - storing the _read_ status of an SMS: good `enum` application, finite set, small set, but ensure to cover all status cases like _read_, _unread_, _not sent_, etc

- again, primary purpose of `enum` is to signal to other engineers to communicate possible values or outcomes

## Type Assertions

- by convention, do not export anything from `index.ts` file
- use the `as` keyword

  - helps override default TS behavior

- `enum`s and `interface`s are commonly used to assert Types of API responses or file read outputs!

### Tuples

- looks very similar to a JS array, but it expects array items to has a very specific Types within it
  - also, the order in which the Types appear matters

```ts
type MatchData = [Date, string, string, number, number, MatchResult, string]; // Type Signature of a Tuple
```

- however, if you're using Tuples, the reusability of that class might take a hit!
  - be cautious about that
  - this is typically a sign of the Class needing refactoring

## Generics

- these are like function arguments

  - but for types in class and function definitions

- allows Type definition of a property (or argument or a return value) at a future point
- a generic customizes the definition of a class
  - similar to how the parameters of a function provide ability to customize the arguments passed to the function

```js
class HoldAnything<DataType> {
  data: DataType;
}

const holdNumber = new HoldAnything<number>()
```

- treat generics like function arguments
  - both are very similar in nature
- by convention, the names of Generics is always `<T>`

```js
class HoldAnything<T> {
  data: T;
}

const holdNumber = new HoldAnything<number>()
```

## Inheritance vs. Composition

- **Inheritance**: Characterized by an `is a` relationship between two classes

  - Child Class `is a` Parent Class extended using `extends`
  - `abstract` classes and `abstract` methods are uses

- **Composition**: Characterized by a `has a` relationship between two classes
  - a Class has another Class within it, integrated with an `interface`
  - coupled tightly with delegation!
