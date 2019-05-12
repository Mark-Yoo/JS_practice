let stars = '';

for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    if (i > j) {
      stars += ' ';
    } else {
      stars += '*';
    }
  }
  stars += '\n';
}
console.log(stars);
