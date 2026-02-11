// Напишите функцию, которая проверяет не содержит ли слово повторяющихся букв

const str1 = "Android";
const str2 = "Iphone";

const noDublicates = (word: string) => new Set(word.toLowerCase()).size === word.length;
console.log(noDublicates(str1));
console.log(noDublicates(str2));
