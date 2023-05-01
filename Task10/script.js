/* ------------------------------ TASK 10 ---------------------------------------------------
Sutvarkykite užduoties "Task 10" esančius failus taip, kad veiktų žemiau pateiktos funkcijos.
-------------------------------------------------------------------------------------------- */

import { composition } from "./math/composition.js";
import { division } from "./math/division.js";
import { multiplication } from "./math/multiplication.js";
import { substraction } from "./math/subtraction.js";
import {one, two, three, four, five } from "./numbers/numbers.js";

let a = composition(one, four);
let b = division(four, two);
let c = substraction(three, two);
let d = multiplication(five, two);

console.log(a);
console.log(b);
console.log(c);
console.log(d);
