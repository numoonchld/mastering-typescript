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
