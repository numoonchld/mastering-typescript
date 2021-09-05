# Maps TypeScript App

**Parcel Bundler**:

- automatically parses TS files in HTML files to JS files

  - `parcel index.html`

- files whose sole purpose is to export a class must have name starting with a capital letter

**Faker** Package:

- generates a lot of fake data for app prototyping
  - `npm install faker`

## Using JS Libraries with TS

- TS needs to check code

  - a lot of JS Libraries do not have type definitions for TS by default
  - such as the `faker` module

- Usage of JS Libraries calls for Type Definition files

  - to be used as an adapter for TS to work with the JS library

- some JS libraries come bundled with Type Definitions
  - like `axios`

### Type Definition File

- to find out if the Type Definition file exists for a given JS library, the most straightforward way for a developer is to `import` the JS library into a TS file

  - and check if **declaration file warning** is thrown in the TS mouseover for that import

- if the warning is indeed shown, then the Type Definition file needs to be installed mandatorily

  - Type Definition file naming convention: `<file_name>.d.ts`

- a vast majority of popular JS libraries have Type Definition files are publicly available

  - thanks to [DefinitelyTyped](https://definitelytyped.org/)

- `DefinitelyTyped` Type Declaration File package naming scheme:

  - `@types/{library_name}`
  - example: `@types/faker`
  - search for this in the `npm` website search bar to know the package name to install Type Definition file for that app

    - to install faker Type Declaration file: `npm install @types/faker`
      `CMD/Ctrl+Click` on import line after install to open up the definition file

  - get into the habit of exploring these Type Definition files
    - sometimes it might be a stretch
      - then use high fold levels to skim through main topics
    - this is half the power of TS
    - the `?` in Type Definition files function parameters mean that that particular parameter is option when calling the function

## Exports

- [Named Exports vs. Default Exports](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export#syntax)
  - it is TS convention to never use `default` exports
  - forces use of curly braces in the `import` statement everywhere
  - flouting this convention will not throw any warnings or errors
    - however, it WILL lead to waste of time due to resulting confusion in gathering where curly braces should be used and where it shouldn't, especially in a large project
      - this does not apply to third party module `export`-`import`
      - simply follow the third-party module convention for named vs. default `export`-`import` styles

## Google Maps Type Definition File Install

- `npm install @types/google.maps`
- Add triple-slash directive for capturing types:
  - `/// <reference types="@types/google.maps" />`
  - needed because `google` will be available on the `window` object in the future

## Boundary Setting in Type Script

- Within a single TS file,
  - Multiple Classes add to the plethora of Fields and Methods available in the TS file
- TS maybe used to restrict the methods and fields used within the TS file
  - this will limit fields and method usage in the future by the same or another developer to only the relevant fields and methods for that file, and eventually, that app

### Using `private` access modifiers

- used to set limits to use of certain methods and functions in a class

## Dual Nature of Class

- Class maybe used to INSTANTIATE AN OBJECT
- Also maybe used to REFER TO THAT TYPE

## Multi-Types Values

- Since Interfaces can be only partial properties of a class, a single value can be of multiple types, by satisfying multiple interfaces
