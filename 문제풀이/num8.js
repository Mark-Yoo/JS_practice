function waterMelon(n) {
  let result = '';
  for (let i = 0; i < n; i++) {
    result += i % 2 ? '박' : '수';
  }
  return result;
}

console.log('n이 3인 경우: '+ waterMelon(3));
console.log('n이 4인 경우: '+ waterMelon(4));
console.log('n이 5인 경우: '+ waterMelon(5));
console.log('n이 6인 경우: '+ waterMelon(6));
console.log('n이 7인 경우: '+ waterMelon(7));
