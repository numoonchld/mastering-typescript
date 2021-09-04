/* TYPE CONDIERATIONS */

const today = new Date();
today.getMonth();
today.blahblah(); // throws error in TS during compile time, but not in JS until execution

const person = {
  age: 20,
};
person.blahblah; // throws error in TS during compile time, but not in JS until execution

class Color {}
const red = new Color();
red.blahblah; // throws error in TS during compile time, but not in JS until execution
