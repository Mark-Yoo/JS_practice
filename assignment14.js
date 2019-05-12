let stars = '';

for (let i = 4; i >= 0; i--) {
  for (let j = 0; j <= 4; j++) {
    if (i > j) {
      stars += ' ';
    } else {
      stars += '*';
    }
  }
  stars += '\n';
}
console.log(stars);
