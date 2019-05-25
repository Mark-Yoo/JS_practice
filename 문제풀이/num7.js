function strToInt(str) {
  return +str
}

console.log(strToInt('1234'));  // 1234
console.log(strToInt('-1234')); // -1234

function strToInt(str) {
  return str * 1;
}

console.log(strToInt('1234'));  // 1234
console.log(strToInt('-1234')); // -1234

function strToInt(str) {
  return parent(str);
}

console.log(strToInt('1234'));  // 1234
console.log(strToInt('-1234')); // -1234

function strToInt(str) {
  return Number(str);
}

console.log(strToInt('1234'));  // 1234
console.log(strToInt('-1234')); // -1234
