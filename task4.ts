/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
// Написать функцию, которая поменяет переменные местами, не создавая дополнительную переменную

let num1 = 5;
let num2 = 7;

const replaceNum = (a: number, b: number) => {
  [num1, num2] = [num2, num1];
};
replaceNum(num1, num2);
console.log(`После замены: num1 = ${num1}, num2 = ${num2}`);
