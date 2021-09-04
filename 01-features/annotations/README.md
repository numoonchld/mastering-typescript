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
  - however, - if the _variable declration_ and _varaible initialization_ are **on different lines**
    - example:
      ```js
      let apples; // TYPE INFERENCE SETS TYPE OF `apple` TO `any`
      apples = 5;
      ```

## When to Annotate vs. allow Type Inference to take over

- Annotate in the following scenarios:

  1. variable declaration and initialization occur in different lines
  2. type of varibale cannot be inferred
  3. a function returns ambigious `any` type, and the value type needs to be disambiguated

- Other than the above 3 scenarios, allow Type Inference to kick in
- Goal of using TypeScript as a developer is to prevent any variable getting assigned the type `any`
