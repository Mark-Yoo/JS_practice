let i = 0;
let sumNum = 0;

for (i = 0; i < 20; i++) {
  if (i % 2 !== 0 && i % 3 !== 0) {
    sumNum += i;
  }
}
console.log(sumNum);
