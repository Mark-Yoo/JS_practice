// function toWeirdCase(s) {
//   const splitStr = s.split(' ');
//   let reunion = '';
//   for (let i = 0; i < splitStr.length; i++) {
//     for (let j = 0; j < splitStr[i].length; j++) {
//       if (i % 2 === 0) {
//         const uc = splitStr[i].toUpperCase();
//         reunion += uc;
//       } else {
//         const lc = splitStr[i].toLowerCase();
//         reunion += lc;
//       }
//     }
//   }
//   return reunion;
// }

function toWeirdCase(s) {
  // 'hello world'
  const wordArr = s.split(' ');

  function toUpperLower(str) {
    let res = '';
    for (let i = 0; i < str.length; i++) {
      // 0이면 짝수, 아니면 홀수
      res += i % 2 ? str[i].toLowerCase() : str[i].toUpperCase();
    }
    return res;
  }
  for (let i = 0; i < wordArr.length; i++) {
    wordArr[i] = toUpperLower(wordArr[i]);
    // console.log(toUpperLower(wordArr[i]));
  }
  // console.log(wordArr);
  return wordArr.join(' ');
}

console.log(toWeirdCase('hello world'));    // 'HeLlO WoRlD'
console.log(toWeirdCase('my name is lee')); // 'My NaMe Is LeE'