export class Game {
  sumOfDices(dices: number[]) {
    return dices.reduce((sum, num) => sum + num, 0);
  }

  yatzyScore(dices: number[]) {
    const isYatzy = new Set(dices).size === 1;
    return isYatzy ? 50 : 0;
  }

  numberScore(dices: number[], on: number) {
    return this.sumOfDices(dices.filter((num) => num === on));
  }

  pairScore(dices: number[]) {
    // check highest number *
    const highest = dices.reduce(
      (highest, curr) => Math.max(highest, curr),
      dices[0]
    );
    //check pairs of this number
    const group = dices.reduce((group, dice) => {
      return { ...group, [dice]: group[dice] ? group[dice] + 1 : 1 };
    }, {} as Record<number, number>);
    Object.entries(group).filter(([key, value]) => value >= 2);

    const isPair = dices.filter((value) => value === highest).length >= 2;

    if (isPair) {
      return highest * 2;
    } else {
      return 0;
    }
  }

  doublePairScore(dices: number[]) {
    const group = dices.reduce((group, dice) => {
      return { ...group, [dice]: (group[dice] || 0) + 1 };
    }, {} as Record<number, number>);

    const pairs = Object.entries(group).filter(([key, value]) => value >= 2);

    if (pairs.length >= 2) {
      return pairs.reduce((sum, [key]) => sum + Number(key), 0) * 2;
    } else {
      return 0;
    }
  }

  tripleScore(dices: number[]) {
    const group = dices.reduce((group, dice) => {
      return { ...group, [dice]: (group[dice] || 0) + 1 };
    }, {} as Record<number, number>);

    const triple = Object.entries(group).filter(([key, value]) => value >= 3);

    if (triple.length >= 1) {
      return triple.reduce((sum, [key]) => sum + Number(key), 0) * 3;
    } else {
      return 0;
    }
  }

  quadrupleScore(dices: number[]) {
    const group = dices.reduce((group, dice) => {
      return { ...group, [dice]: (group[dice] || 0) + 1 };
    }, {} as Record<number, number>);

    const quadruple = Object.entries(group).filter(
      ([key, value]) => value >= 4
    );

    if (quadruple.length >= 1) {
      return quadruple.reduce((sum, [key]) => sum + Number(key), 0) * 4;
    } else {
      return 0;
    }
  }

  smallStraightScore(dices: number[]) {
    return dices.every((value, index) => value === index + 1) ? 15 : 0;
  }

  largeStraightScore(dices: number[]) {
    return dices.every((value, index) => value === index + 2) ? 20 : 0;
  }

  fullHouseScore(dices: number[]) {
    const distinctNumbers = new Set(dices).size;
    return distinctNumbers === 2 ? this.sumOfDices(dices) : 0;  }
}
