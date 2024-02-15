import {Choice, Coordinate} from './types';
import {
  isWin,
  getTotalColumnScore,
  getColumnScore,
  getRowScore,
  getTotalRowScore,
  getTotalDiagonalScore,
  getTotalReverseDiagonalScore,
  getTotalScore,
  isCat,
} from './winCalculation';

describe('winCalculation', () => {
  describe('isWin', () => {
    it('should return false when there are not enough selections', () => {
      expect(isWin({}, 3, 3)).toBe(false);
    });

    it('should return true when there are 3 in a row vertically', () => {
      expect(isWin({'0,0': 'x', '0,1': 'x', '0,2': 'x'}, 3, 3)).toBe(true);
    });

    it('should return true when there are 3 in a row horizontally', () => {
      expect(isWin({'0,0': 'x', '1,0': 'x', '2,0': 'x'}, 3, 6)).toBe(true);
    });

    it('should return true when there are 3 in a row diagonally', () => {
      expect(isWin({'1,1': 'x', '2,2': 'x', '3,3': 'x'}, 7, 8)).toBe(true);
    });

    it('should return true when there are 3 in a row reverse-diagonally', () => {
      expect(isWin({'2,1': 'x', '1,2': 'x', '0,3': 'x'}, 5, 5)).toBe(true);
    });
  });

  describe('isCat', () => {
    it('should return false when there are not enough selections', () => {
      expect(isCat({'0,0': 'x', '0,1': 'x', '1,0': 'x'}, 2, 2)).toBe(false);
    });

    it('should return true when all spaces are filled', () => {
      expect(isCat({'0,0': 'x', '0,1': 'o', '1,0': 'x', '2,2': 'o'}, 2, 2)).toBe(true);
    });
  });

  describe('getColumnScore', () => {
    it('gives 100000 for 3 in a row, 10 for two in a row, and 1 for one in a row', () => {
      const input = {
        '0,0': 'x',
        '0,1': 'o',
        '0,2': 'x',
        '0,3': 'x',
        '0,4': 'x',
      } as {[key: Coordinate]: Choice};

      expect(getColumnScore(input, 0, 5)).toEqual(100000);
    });

    it('smoketest missing items', () => {
      expect(getColumnScore({}, 4, 4)).toEqual(0);
    });
  });

  // https://www3.ntu.edu.sg/home/ehchua/programming/java/javagame_tictactoe_ai.html
  describe('getTotalColumnScore', () => {
    it('gives 100 for 3 in a row, 10 for two in a row, and 1 for one in a row', () => {
      const input = {
        '0,0': 'x',
        '0,1': 'x',
        '0,2': 'x',
        '1,1': 'o',
        '2,1': 'o',
        '2,2': 'o',
      } as {[key: Coordinate]: Choice};

      expect(getTotalColumnScore(input, 3, 3)).toEqual(99989);
    });

    it('gives negatives for Os', () => {
      const input = {
        '0,2': 'x',
        '1,0': 'o',
        '1,1': 'o',
        '1,2': 'o',
      } as {[key: Coordinate]: Choice};

      expect(getTotalColumnScore(input, 3, 3)).toEqual(-99999);
    });

    it('smoketest missing items', () => {
      expect(getTotalColumnScore({}, 4, 4)).toEqual(0);
    });
  });

  describe('getRowScore', () => {
    it('gives 100000 for 3 in a row, 10 for two in a row, and 1 for one in a row', () => {
      const input = {
        '0,0': 'x',
        '1,0': 'o',
        '2,0': 'x',
        '3,0': 'x',
        '4,0': 'x',
      } as {[key: Coordinate]: Choice};

      expect(getRowScore(input, 5, 0)).toEqual(100000);
    });

    it('smoketest missing items', () => {
      expect(getRowScore({}, 4, 4)).toEqual(0);
    });
  });

  // https://www3.ntu.edu.sg/home/ehchua/programming/java/javagame_tictactoe_ai.html
  describe('getTotalColumnScore', () => {
    it('gives 100 for 3 in a row, 10 for two in a row, and 1 for one in a row', () => {
      const input = {
        '0,0': 'x',
        '1,0': 'x',
        '2,0': 'x',
        '1,1': 'o',
        '2,1': 'o',
        '2,2': 'o',
      } as {[key: Coordinate]: Choice};

      expect(getTotalRowScore(input, 3, 3)).toEqual(99989);
    });

    it('gives negatives for Os', () => {
      const input = {
        '0,2': 'x',
        '0,1': 'o',
        '1,1': 'o',
        '2,1': 'o',
      } as {[key: Coordinate]: Choice};

      expect(getTotalRowScore(input, 3, 3)).toEqual(-99999);
    });

    it('smoketest missing items', () => {
      expect(getTotalRowScore({}, 4, 4)).toEqual(0);
    });
  });

  describe('getTotalDiagonalScore', () => {
    it('gives 100 for 3 in a row, 10 for two in a row, and 1 for one in a row', () => {
      const input = {
        '0,0': 'x',
        '1,0': 'x',
        '2,0': 'o',
        '3,0': 'o',
        '0,1': 'x',
        '1,1': 'x',
        '2,1': 'o',
        '3,1': 'o',
        '0,2': 'x',
        '1,2': 'x',
        '2,2': 'x',
        '3,2': 'o',
        '0,3': 'o',
        '1,3': 'o',
        '2,3': 'o',
        '3,3': 'o',
      } as {[key: Coordinate]: Choice};

      expect(getTotalDiagonalScore(input, 4, 4)).toEqual(99987);
    });

    it('smoketest missing items', () => {
      expect(getTotalDiagonalScore({}, 4, 4)).toEqual(0);
    });
  });

  describe('getTotalReverseDiagonalScore', () => {
    it('gives 100 for 3 in a row, 10 for two in a row, and 1 for one in a row', () => {
      const input = {
        '0,0': 'x',
        '1,0': 'x',
        '2,0': 'o',
        '3,0': 'o',
        '0,1': 'x',
        '1,1': 'x',
        '2,1': 'o',
        '3,1': 'o',
        '0,2': 'x',
        '1,2': 'o',
        '2,2': 'x',
        '3,2': 'o',
        '0,3': 'x',
        '1,3': 'o',
        '2,3': 'o',
        '3,3': 'o',
      } as {[key: Coordinate]: Choice};

      expect(getTotalReverseDiagonalScore(input, 4, 4)).toEqual(-99991);
    });

    it('smoketest missing items', () => {
      expect(getTotalReverseDiagonalScore({}, 4, 4)).toEqual(0);
    });
  });

  describe('getTotalScore', () => {
    it('smoketests 4x4', () => {
      const input = {
        '0,0': 'x',
        '1,0': 'o',
        '2,0': 'x',
        '3,0': 'o',
        '0,1': 'o',
        '1,1': 'x',
        '2,1': 'x',
        '3,1': 'o',
        '0,2': 'x',
        '1,2': 'o',
        '2,2': 'o',
        '3,2': 'x',
        '0,3': 'o',
        '1,3': 'x',
        '2,3': 'x',
        '3,3': 'o',
      } as {[key: Coordinate]: Choice};

      expect(getTotalScore(input, 4, 4)).toEqual(99997);
    });

    it('smoketest missing items', () => {
      expect(getTotalScore({}, 4, 4)).toEqual(0);
    });
  });
});
