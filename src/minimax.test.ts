import {getHeuristicBoardState, getWinningMove} from './minimax';
import {State} from './types';

describe('minimax', () => {
  function getDefaultState(args: Partial<State> = {}): State {
    const {
      rows = 3,
      columns = 3,
      selections = {
        '0,0': 'x',
        '1,1': 'o',
        '2,2': 'x',
        '0,2': 'o',
      },
      currentPlayer = 'x',
    } = args as State;
    return {
      currentPlayer,
      columns,
      rows,
      selections,
    };
  }

  // https://www3.ntu.edu.sg/home/ehchua/programming/java/javagame_tictactoe_ai.html
  describe('getHeuristicBoardState', () => {
    it('gives 100 when winning', () => {
      const input = getDefaultState({
        selections: {
          '0,0': 'x',
          '1,0': 'x',
          '2,0': 'x',
          '1,1': 'o',
          '2,2': 'o',
        },
        currentPlayer: 'x',
      });

      expect(getHeuristicBoardState(input)).toEqual(100);
    });

    it('gives -100 when losing', () => {
      const input = getDefaultState({
        selections: {
          '0,0': 'x',
          '1,0': 'x',
          '2,0': 'x',
          '1,1': 'o',
          '2,2': 'o',
        },
        currentPlayer: 'o',
      });

      expect(getHeuristicBoardState(input)).toEqual(-100);
    });
  });

  describe('getWinningMove', () => {
    it('returns null if no move can win', () => {
      const selections = {
        '0,0': 'x',
        '1,0': 'x',
        '0,2': 'x',
        '2,0': 'o',
        '1,1': 'o',
        '0,1': 'o',
      } as State['selections'];

      expect(getWinningMove(getDefaultState({selections}))).toBe(null);
    });

    it('returns null if active player will lose', () => {
      const selections = {
        '0,0': 'o',
        '1,0': 'o',
        '0,1': 'o',
        '1,1': 'x',
        '2,2': 'x',
      } as State['selections'];

      expect(getWinningMove(getDefaultState({selections}))).toBe(null);
    });

    it.skip('returns winning move if active player can win', () => {
      const selections = {
        '0,0': 'x',
        '1,0': 'x',
        '1,1': 'o',
        '0,1': 'o',
      } as State['selections'];

      expect(getWinningMove(getDefaultState({selections}))).toBe({x: 2, y: 0});
    });
  });
});
