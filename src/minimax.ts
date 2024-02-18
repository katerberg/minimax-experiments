import {getAvailableMoves} from './board';
import {numberCoordsToCoords} from './coordinatesHelper';
import {NumberCoordinates, State} from './types';
import {checkTerminal} from './winCalculation';

// Depth infinite
// 3x3: 58
// 3x4: 457
// 3x5: 8621
// 3x6: 298_076
// 4x4: 2469
// 5x5: infinite

// Depth 10
// 3x3: 53
// 3x4: 415
// 3x5: 4475
// 3x6: 32_268
// 4x4: 1592
// 5x5: 64_134
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
      const nodeValue = getBestMove(child, !maximizing, depth + 1, newAlpha, newBeta);
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
