function diceGameSimulation(numSimulation) {
  const resultArr = [];

  for (let i = 0; i < numSimulation; i++) {
    const dice1 = Math.floor(Math.random() * 6) + 1;
    const dice2 = Math.floor(Math.random() * 6) + 1;
    const sum = dice1 + dice2;
    let result = "";

    switch (sum) {
      case 7:
      case 11: {
        result = "win";
        break;
      }
      case 2:
      case 3:
      case 12: {
        result = "lose";
        break;
      }
      default: {
        result = "roll again";
        break;
      }
    }

    resultArr.push({ dice1, dice2, sum, result });
  }

  return resultArr;
}

module.exports = diceGameSimulation;
