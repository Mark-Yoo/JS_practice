let strArr = '';

for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    let numTostr = '';
    numTostr = i + '';
    strArr += numTostr;
  }
}
console.log(strArr);
