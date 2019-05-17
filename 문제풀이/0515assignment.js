// 1번 문제 if문
function evenOrOdd(num) {
  let result = '';
  if (num % 2 === 0) {
    result = 'Even';
  } else {
    result = 'Odd';
  }
  return result;
}

console.log(evenOrOdd(2));
console.log(evenOrOdd(3));
console.log(evenOrOdd(4));
console.log(evenOrOdd(5));
console.log(evenOrOdd(6));




// 1번 문제 3항 연산자
function evenOrOdd(num) {
  const result = num % 2 ? 'Odd' : 'Even';
  return result;
}

console.log(evenOrOdd(2));
console.log(evenOrOdd(3));
console.log(evenOrOdd(4));
console.log(evenOrOdd(5));
console.log(evenOrOdd(6));
console.log(evenOrOdd(7));




// 2번 문제
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






// 3번 문제
function alphaString46(s) {
  let result = '';
  if (s !== undefined && s.length > 3 && s.length < 7 && parseInt(s, 10)) {
    result = true;
  } else {
    result = false;
  }
  return result;
}

console.log(alphaString46('1234'));
console.log(alphaString46('9014'));
console.log(alphaString46('723'));
console.log(alphaString46('a234'));
console.log(alphaString46(''));
console.log(alphaString46());
