import {boardToTranspositionTableKeys, getBestMove} from './minimax';
import {State} from './types';

function getFullBoardState(): State {
  return {
    columns: 3,
    rows: 3,
    requiredWin: 3,
    maxDepth: 1200,
    selections: {
      '0,0': 'x',
      '1,0': 'x',
      '2,0': 'o',
      '0,1': 'x',
      '1,1': 'x',
      '2,1': 'o',
      '0,2': 'o',
      '1,2': 'o',
      '2,2': 'x',
    },
    currentPlayer: 'x',
  };
}

describe('minimax', () => {
  describe('getBestMove', () => {
    it('finds a winning terminal move for x', () => {
      const input = getFullBoardState();
      input.selections['2,2'] = undefined;

      const result = getBestMove(input);

      expect(result.bestMove).toEqual({x: 2, y: 2});
      expect(result.bestScore).toEqual(1_000_000);
    });

    it('finds a winning terminal move for o', () => {
      const input = getFullBoardState();
      input.selections['2,2'] = undefined;
      input.currentPlayer = 'o';

      const result = getBestMove(input);

      expect(result.bestMove).toEqual({x: 2, y: 2});
      expect(result.bestScore).toEqual(-1_000_000);
    });

    it('finds move in two turns for x', () => {
      const input = getFullBoardState();
      input.selections = {
        '0,0': 'x',
        '1,1': 'o',
        '2,0': 'o',
        '2,2': 'x',
      };

      const result = getBestMove(input);

      expect(result.bestMove).toEqual({x: 0, y: 2});
      expect(result.bestScore).toEqual(1_000_000 - 2);
    });

    it('finds blocking move to end in cat game for x', () => {
      const input = getFullBoardState();
      input.selections = {
        '0,0': 'o',
        '1,0': 'o',
        '2,0': 'x',
        '0,1': 'x',
        '2,1': 'o',
        '1,2': 'o',
        '2,2': 'x',
      };

      const result = getBestMove(input);

      expect(result.bestMove).toEqual({x: 1, y: 1});
      expect(result.bestScore).toEqual(0);
    });
  });

  describe('boardToTranspositionTableKeys', () => {
    it('translates empty 3x3', () => {
      const input = getFullBoardState();
      input.selections = {};

      expect(boardToTranspositionTableKeys(input)).toEqual(['___,___,___', '___,___,___']);
    });

    it('translates populated 4x3, including inverting and 180 degrees', () => {
      const input = getFullBoardState();
      input.columns = 3;
      input.rows = 4;
      input.selections = {
        '1,0': 'x',
        '0,1': 'o',
      };

      expect(boardToTranspositionTableKeys(input)).toEqual(['_x__,o___,____', '_o__,x___,____']);
    });
  });
});
