import {getAvailableMoves} from './board';
import {numberCoordsToCoords} from './coordinatesHelper';
import {NumberCoordinates, State} from './types';
import {checkTerminal} from './winCalculation';

export function getBestMove(
  state: State,
  isMaximizing?: boolean,
  depth = 0,
): {bestScore: number; bestMove: NumberCoordinates} {
  const maximizing = isMaximizing ? isMaximizing : state.currentPlayer === 'x';
  if (depth > 12) {
    console.log('too deep');
    return {bestScore: 0, bestMove: {x: 0, y: 0}};
  }
  if (maximizing) {
    //Loop through all empty cells
    const availableMoves = getAvailableMoves(state);
    //Initialize best to the lowest possible value and have a default move
    let [bestMove] = availableMoves;
    let bestScore = -1_000_000;
    for (let i = 0; i < availableMoves.length; i++) {
      console.log('current best', bestScore, 'depth', depth);
      const move = availableMoves[i];

      //Initialize a new board with a copy of our current state
      const child: State = {
        ...state,
        currentPlayer: 'o',
        selections: {...state.selections},
      };
      //Create a child node by inserting the maximizing symbol x into the current empty cell
      child.selections[numberCoordsToCoords(move)] = 'x';
      const terminalState = checkTerminal(child);
      if (terminalState.isTerminal) {
        if (terminalState.isWinner) {
          console.log('found terminal state for x', move.x, move.y, 'depth', depth);
          bestScore = 1_000_000 - depth;
          bestMove = move;
          break;
        }
        if (terminalState.isCat && 0 > bestScore) {
          console.log('cat is best maximizing score', 'depth', depth);
          bestScore = 0;
          bestMove = move;
        }
      } else {
        console.log('checking best move after playing x in move', move.x, move.y);
        const nodeValue = getBestMove(child, false, depth + 1);
        if (nodeValue.bestScore > bestScore) {
          console.log('new best maximizing score', nodeValue.bestScore, 'depth', depth);
          ({bestScore} = nodeValue);
          bestMove = move;
        }
      }
    }
    console.log('returning best maxing', bestScore, 'best move', bestMove, 'depth', depth);
    return {bestScore, bestMove};
  }
  //Loop through all empty cells
  const availableMoves = getAvailableMoves(state);
  //Initialize best to the highest possible value and have a default move
  let [bestMove] = availableMoves;
  let bestScore = 1_000_000;
  for (let i = 0; i < availableMoves.length; i++) {
    console.log('current minimizing best', bestScore, 'depth', depth);
    const move = availableMoves[i];

    //Initialize a new board with a copy of our current state
    const child: State = {
      ...state,
      currentPlayer: 'x',
      selections: {...state.selections},
    };
    //Create a child node by inserting the minimizing symbol o into the current empty cell
    child.selections[numberCoordsToCoords(move)] = 'o';
    const terminalState = checkTerminal(child);
    if (terminalState.isTerminal) {
      if (terminalState.isWinner) {
        console.log('found terminal state for o', move.x, move.y, 'depth', depth);
        bestScore = -1_000_000 + depth;
        bestMove = move;
        break;
      }
      if (terminalState.isCat && 0 < bestScore) {
        console.log('cat is best minimizing score', 'depth', depth);
        bestScore = 0;
        bestMove = move;
      }
    } else {
      console.log('checking best move after playing o in move', move.x, move.y);
      const nodeValue = getBestMove(child, true, depth + 1);
      if (nodeValue.bestScore < bestScore) {
        console.log('new best minimizing score', nodeValue.bestScore, 'depth', depth);
        ({bestScore} = nodeValue);
        bestMove = move;
      }
    }
  }
  console.log('returning best minning', bestScore, 'best move', bestMove, 'depth', depth);
  return {bestScore, bestMove};
}
