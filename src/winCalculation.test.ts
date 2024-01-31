import {isWin} from './winCalculation';

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
});
