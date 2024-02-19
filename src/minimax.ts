import {getAvailableMoves} from './board';
import {numberCoordsToCoords} from './coordinatesHelper';
import {NumberCoordinates, State} from './types';
import {checkTerminal} from './winCalculation';

const transpositionTable: Record<string, {bestScore: number; bestMove: NumberCoordinates}> = {
  '___,___,___': {bestScore: 0, bestMove: {x: 0, y: 0}},
};

// Depth infinite
// 3x3: 16
// 3x4: 26
// 3x5: 62
// 3x6: 49
// 4x4: 737
// 4x5: 986
// 4x6: 826
// 4x7: 2930
// 4x8: 4970
// 5x5: infinite

// Depth 10
// 4x4: 637
// 5x5: 16_576

export function boardToTranspositionTableKeys(state: State): string[] {
  let key = '';
  let keyInverted = '';
  for (let y = 0; y < state.columns; y++) {
    for (let x = 0; x < state.rows; x++) {
      key += state.selections[`${x},${y}`] ?? '_';
      keyInverted += state.selections[`${y},${x}`] ?? '_';
    }
    key += ',';
    keyInverted += ',';
  }
  key = key.slice(0, -1);
  keyInverted = keyInverted.slice(0, -1);
  return [key, keyInverted];
}

export function getBestMove(
  state: State,
  isMaximizing?: boolean,
  depth = 0,
  alpha = -1_000_000,
  beta = 1_000_000,
): {bestScore: number; bestMove: NumberCoordinates} {
  const maximizing = isMaximizing !== undefined ? isMaximizing : state.currentPlayer === 'x';
  if (depth > state.maxDepth) {
    return {bestScore: 0, bestMove: {x: 0, y: 0}};
  }
  const availableMoves = getAvailableMoves(state);
  let [bestMove] = availableMoves;
  //Initialize best to the worst possible value and have a default move
  const WORST_POSSIBLE_SCORE = maximizing ? -1_000_000 : 1_000_000;
  const DEPTH_MULTIPLIER = maximizing ? 1 : -1;
  let bestScore = WORST_POSSIBLE_SCORE;
  let newAlpha = alpha;
  let newBeta = beta;

  for (let i = 0; i < availableMoves.length; i++) {
    const move = availableMoves[i];
    //Initialize a new board with a copy of our current state
    const child: State = {
      ...state,
      currentPlayer: maximizing ? 'o' : 'x',
      selections: {
        ...state.selections,
        [numberCoordsToCoords(move)]: maximizing ? 'x' : 'o',
      },
    };
    const terminalState = checkTerminal(child);
    if (terminalState.isTerminal) {
      if (terminalState.isWinner) {
        bestScore = WORST_POSSIBLE_SCORE * -1 - depth * DEPTH_MULTIPLIER;
        bestMove = move;
        break;
      }
      if (terminalState.isCat) {
        if ((maximizing && 0 > bestScore) || (!maximizing && 0 < bestScore)) {
          bestScore = 0;
          bestMove = move;
        }
      }
    } else {
      let nodeValue: {bestScore: number; bestMove: NumberCoordinates};
      const transpositionTableKeys = boardToTranspositionTableKeys(child);
      const transpositionTableKey = transpositionTableKeys.find((key) => transpositionTable[key]);
      if (transpositionTableKey) {
        nodeValue = transpositionTable[transpositionTableKey];
      } else {
        nodeValue = getBestMove(child, !maximizing, depth + 1, newAlpha, newBeta);
        transpositionTableKeys.forEach((key) => {
          transpositionTable[key] = nodeValue;
        });
      }
      if ((maximizing && nodeValue.bestScore > bestScore) || (!maximizing && nodeValue.bestScore < bestScore)) {
        ({bestScore} = nodeValue);
        bestMove = move;
        if (maximizing) {
          newAlpha = Math.max(bestScore, newAlpha);
        } else if (!maximizing) {
          newBeta = Math.min(bestScore, newBeta);
        }
      }
    }
    if (newBeta <= newAlpha) {
      break;
    }
  }
  return {bestScore, bestMove};
}
