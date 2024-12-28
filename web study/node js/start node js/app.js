// const operator = process.argv[2];
// const num1 = Number(process.argv[3]);
// const num2 = Number(process.argv[4]);
// let result;

// if (isNaN(num1) || isNaN(num2)) {
//   throw Error("not a number");
// }

// const operations = {
//   add: (num1, num2) => {
//     return num1 + num2;
//   },
//   sub: (num1, num2) => {
//     return num1 - num2;
//   },
//   multi: (num1, num2) => {
//     return num1 * num2;
//   },
//   divide: (num1, num2) => {
//     return num1 / num2;
//   },
// };

// function calc(operator, num1, num2) {
//   if (operator)
//     switch (operator) {
//       case "+":
//         result = operations.add(num1, num2);
//         break;
//       case "-":
//         result = operations.sub(num1, num2);
//         break;
//       case "*":
//         result = operations.multi(num1, num2);
//         break;
//       case "/":
//         result = operations.divide(num1, num2);
//         break;
//     }
// }

// calc(operator, num1, num2);

// console.log(num1);
// console.log(operator);
// console.log(num2);
// console.log(result);
// console.log("hi to nodemon!");

os = require("node:os");
console.log(os);
