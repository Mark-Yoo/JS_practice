function numPY(s) {
  const str = s ? s.toUpperCase() : '';
  let cntP = 0;
  let cntY = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === 'P') cntP += 1;
    if (str[i] === 'Y') cntY += 1;
  }
  return cntP === cntY;
}

console.log(numPY('pPoooyY'));
console.log(numPY('Pyy'));
console.log(numPY('ab'));
console.log(numPY(''));
console.log(numPY());
