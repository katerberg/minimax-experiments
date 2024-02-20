import {getAvailableMoves} from './board';
import {numberCoordsToCoords} from './coordinatesHelper';
import {NumberCoordinates, State} from './types';
import {checkTerminal} from './winCalculation';

const transpositionTable: Record<string, {bestScore: number; bestMove: NumberCoordinates}> = {
  '___,___,___': {bestScore: 0, bestMove: {x: 0, y: 0}},
};

export function boardToTranspositionTableKey(state: State): string {
  let key = '';
  for (let y = 0; y < state.columns; y++) {
    for (let x = 0; x < state.rows; x++) {
      key += state.selections.get(`${x},${y}`) ?? '_';
    }
    key += ',';
  }
  key = key.slice(0, -1);
  return key;
}

export function boardToTranspositionTableKeys(state: State): string[] {
  let key = '';
  let keyInverted = '';
  for (let y = 0; y < state.columns; y++) {
    for (let x = 0; x < state.rows; x++) {
      key += state.selections.get(`${x},${y}`) ?? '_';
      keyInverted += state.selections.get(`${y},${x}`) ?? '_';
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
  if (depth === 0) {
    const props = Object.getOwnPropertyNames(transpositionTable);
    for (let i = 0; i < props.length; i++) {
      delete transpositionTable[props[i]];
    }
  }
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
      selections: new Map(state.selections),
    };
    child.selections.set(numberCoordsToCoords(move), maximizing ? 'x' : 'o');
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
      const transpositionTableKey = boardToTranspositionTableKey(child);
      if (transpositionTable[transpositionTableKey]) {
        nodeValue = transpositionTable[transpositionTableKey];
      } else {
        nodeValue = getBestMove(child, !maximizing, depth + 1, newAlpha, newBeta);
        boardToTranspositionTableKeys(child).forEach((key) => {
          if (!transpositionTable[key]) {
            transpositionTable[key] = nodeValue;
          }
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
