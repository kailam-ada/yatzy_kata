import { expect, describe, it } from "vitest";
import { Game } from "./game";

describe("Yatzy Game", () => {
  describe("Chance", () => {
    it.each([
      {
        dices: [1, 1, 3, 3, 6],
        sum: 14,
      },
      {
        dices: [4, 5, 5, 6, 1],
        sum: 21,
      },
    ])("It should return sum $sum of all dices $dices", ({ dices, sum }) => {
      const game = new Game();
      expect(game.sumOfDices(dices)).toBe(sum);
    });
  });
  describe("Yatzy", () => {
    it.each([
      {
        dices: [1, 1, 1, 1, 1],
        score: 50,
      },
      {
        dices: [1, 1, 1, 1, 2],
        score: 0,
      },
      {
        dices: [2, 2, 2, 2, 2],
        score: 50,
      },
    ])("It should return score $score of dices $dices", ({ dices, score }) => {
      const game = new Game();
      expect(game.yatzyScore(dices)).toBe(score);
    });
  });
  describe("NumberSum", () => {
    it("It should score the sum 1 of dices 1 of [1,2,3,4,5]", () => {
      const game = new Game();
      expect(game.numberScore([1, 2, 3, 4, 5], 1)).toBe(1);
    });
    it("It should score the sum 0 of dices 1 of [3,2,3,4,5]", () => {
      const game = new Game();
      expect(game.numberScore([3, 2, 3, 4, 5], 1)).toBe(0);
    });
    it("It should score the sum 6 of dices 3 of [3,2,3,4,5]", () => {
      const game = new Game();
      expect(game.numberScore([3, 2, 3, 4, 5], 3)).toBe(6);
    });
  });
  describe("Pair", () => {
    it("It should score 8 of the highest pair of [3,3,3,4,4]", () => {
      const game = new Game();
      expect(game.pairScore([3, 3, 3, 4, 4])).toBe(8);
    });
    it("It should score 0 of the highest pair of [2,1,3,5,4]", () => {
      const game = new Game();
      expect(game.pairScore([2, 1, 3, 5, 4])).toBe(0);
    });
    it("It should score 6 of the highest pair of [3,3,3,3,1]", () => {
      const game = new Game();
      expect(game.pairScore([3, 3, 3, 3, 1])).toBe(6);
    });
  });
  describe("Two Pairs", () => {
    it("It should score sum 8 of the two pairs of dices [1,1,2,3,3]", () => {
      const game = new Game();
      expect(game.doublePairScore([1, 1, 2, 3, 3])).toBe(8);
    });
    it("It should score sum 6 of the two pairs of dices [1,1,2,2,2]", () => {
      const game = new Game();
      expect(game.doublePairScore([1, 1, 2, 2, 2])).toBe(6);
    });
    it("It should score 0 of dices [1,1,2,3,4]", () => {
      const game = new Game();
      expect(game.doublePairScore([1, 1, 2, 3, 4])).toBe(0);
    });
  });
  describe("Three of a kind", () => {
    it("It should score 9 of dices [3,3,3,4,5]", () => {
      const game = new Game();
      expect(game.tripleScore([3, 3, 3, 4, 5])).toBe(9);
    });
    it("It should score 0 of dices [3,3,4,5,6]", () => {
      const game = new Game();
      expect(game.tripleScore([3, 3, 4, 5, 6])).toBe(0);
    });
    it("It should score 9 of dices [3,3,3,3,1]", () => {
      const game = new Game();
      expect(game.tripleScore([3, 3, 3, 3, 1])).toBe(9);
    });
  });
  describe("Four of a kind", () => {
    it("It should score 8 of dices [2,2,2,2,5]", () => {
      const game = new Game();
      expect(game.quadrupleScore([2, 2, 2, 2, 5])).toBe(8);
    });
    it("It should score 0 of dices [2,2,2,2,5]", () => {
      const game = new Game();
      expect(game.quadrupleScore([2, 2, 2, 5, 5])).toBe(0);
    });
    it("It should score 8 of dices [2,2,2,2,2]", () => {
      const game = new Game();
      expect(game.quadrupleScore([2, 2, 2, 2, 2])).toBe(8);
    });
  });
  describe("Small straight", () => {
    it("It should score 15 of dices [1,2,3,4,5]", () => {
      const game = new Game();
      expect(game.smallStraightScore([1, 2, 3, 4, 5])).toBe(15);
    });
    it("should score 0 of [2,1,3,5,4]", () => {
      const game = new Game();
      expect(game.smallStraightScore([2, 1, 3, 5, 4])).toBe(0);
    });
    it("should score 0 of [2,3,4,5,6]", () => {
      const game = new Game();
      expect(game.smallStraightScore([2, 3, 4, 5, 6])).toBe(0);
    });
  });
  describe("Large straight", () => {
    it("It should score 20 of dices [2,3,4,5,6]", () => {
      const game = new Game();
      expect(game.largeStraightScore([2, 3, 4, 5, 6])).toBe(20);
    });
    it("It should score 0 of [2,1,3,5,4]", () => {
      const game = new Game();
      expect(game.largeStraightScore([2, 1, 3, 5, 4])).toBe(0);
    });
    it("It should score 0 of [2,3,4,5,6]", () => {
      const game = new Game();
      expect(game.largeStraightScore([1, 2, 3, 4, 5])).toBe(0);
    });
  });
  describe("Full house", () => {
    it("It should score 8 of dices [1,1,2,2,2]", () => {
      const game = new Game();
      expect(game.fullHouseScore([1, 1, 2, 2, 2])).toBe(8);
    });
    it("It should score 0 of [2,2,3,3,4 ]", () => {
      const game = new Game();
      expect(game.fullHouseScore([2, 2, 3, 3, 4])).toBe(0);
    });
    it("It should score 0 of [4,4,4,4,4]", () => {
      const game = new Game();
      expect(game.fullHouseScore([4, 4, 4, 4, 4])).toBe(0);
    });
  });
});
