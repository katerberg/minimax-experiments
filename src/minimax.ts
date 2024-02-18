import {getAvailableMoves} from './board';
import {numberCoordsToCoords} from './coordinatesHelper';
import {NumberCoordinates, State} from './types';
import {checkTerminal} from './winCalculation';

export function getBestMove(
  state: State,
  isMaximizing?: boolean,
  depth = 0,
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

  for (let i = 0; i < availableMoves.length; i++) {
    const move = availableMoves[i];
    //Initialize a new board with a copy of our current state
    const child: State = {
      ...state,
      currentPlayer: maximizing ? 'o' : 'x',
      selections: {...state.selections},
    };
    child.selections[numberCoordsToCoords(move)] = maximizing ? 'x' : 'o';
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
      const nodeValue = getBestMove(child, !maximizing, depth + 1);
      if ((maximizing && nodeValue.bestScore > bestScore) || (!maximizing && nodeValue.bestScore < bestScore)) {
        ({bestScore} = nodeValue);
        bestMove = move;
      }
    }
  }
  return {bestScore, bestMove};
}
