function getCount8() {
  let numToStr = '';
  let sum = 0;

  for (let i = 1; i < 10001; i++) {
    numToStr += i;
  }

  // console.log(numToStr);

  for (let j = 1; j < numToStr.length; j++) {
    if (numToStr[j] === '8') ++sum;
  }
  return sum;
}

console.log(getCount8());
