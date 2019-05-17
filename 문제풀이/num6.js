function hideNumbers(str) {
  let last4Digit = str.slice(-4);
  let result = '';
  for (let i = 0; i < str.length - 4; i++) {
    result += '*';
  }
  return result + last4Digit;
}

console.log(hideNumbers('01033334444')); // *******4444
console.log(hideNumbers('027778888'));   // *****8888
