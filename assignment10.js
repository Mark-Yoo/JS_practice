let dice1;
let dice2;

for (dice1 = 1; dice1 <= 6; dice1++) {
  for (dice2 = 1; dice2 <= 6; dice2++) {
    if (dice1 + dice2 === 6) {
      console.log(dice1, dice2);
    }
  }
}
