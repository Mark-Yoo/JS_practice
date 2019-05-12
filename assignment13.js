let stars = '';

for (let i = 4; i >= 0; i--) {
  for (let j = 0; j <= 4; j++) {
    if (j > i) {
      stars += ' ';
    } else {
      stars += '*';
    }
  }
  stars += '\n';
}
console.log(stars);
