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

## ENUMS - Enumeration

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
  - new `enum` fields cannot be added programmatically on-the-fly like in objects

- it is possible to initialize enums without any values assigned to it

```js
enum MatchResult {
  HomeWin,
  AwayWin,
  Draw,
}

```

- **Notes**:
  - when an `enum` gets complied to JS, it is actually an object (with an IIFE wrapper)
  - all fields of an `enum` must be hardcoded! i.e. new fields cannot be programmatically added
