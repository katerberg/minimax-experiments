import {getAvailableMoves} from './board';
import {numberCoordsToCoords} from './coordinatesHelper';
import {NumberCoordinates, State} from './types';
import {checkTerminal} from './winCalculation';

// function getBestMove(board, maximizing = true, callback = () => {}, depth = 0) {
//     //clear nodesMap if the function is called for a new move
//   if (depth === 0) {
//     nodesMap.clear();
//   }
//     //If the board state is a terminal one, return the heuristic value
//   if (board.isTerminal() || depth === maxDepth) {
//     if (board.isTerminal().winner === 'x') {
//       return 100 - depth;
//     } else if (board.isTerminal().winner === 'o') {
//       return -100 + depth;
//     }
//     return 0;
//   }
//     if (maximizing) {
//         //Initialize best to the lowest possible value
//         let best = -100;
//         //Loop through all empty cells
//         board.getAvailableMoves().forEach(index => {
//             //Initialize a new board with a copy of our current state
//             const child = new Board([...board.state]);
//             //Create a child node by inserting the maximizing symbol x into the current empty cell
//             child.insert("x", index);
//             //Recursively calling getBestMove this time with the new board and minimizing turn and incrementing the depth
//             const nodeValue = this.getBestMove(child, false, callback, depth + 1);
//             //Updating best value
//             best = Math.max(best, nodeValue);
//             //If it's the main function call, not a recursive one, map each heuristic value with it's moves indices
//             if (depth == 0) {
//                 //Comma separated indices if multiple moves have the same heuristic value
//                 const moves = this.nodesMap.has(nodeValue)
//                     ? `${this.nodesMap.get(nodeValue)},${index}`
//                     : index;
//                 this.nodesMap.set(nodeValue, moves);
//             }
//         });
//         //If it's the main call, return the index of the best move or a random index if multiple indices have the same value
//         if (depth == 0) {
//             let returnValue;
//             if (typeof this.nodesMap.get(best) == "string") {
//                 const arr = this.nodesMap.get(best).split(",");
//                 const rand = Math.floor(Math.random() * arr.length);
//                 returnValue = arr[rand];
//             } else {
//                 returnValue = this.nodesMap.get(best);
//             }
//             //run a callback after calculation and return the index
//             callback(returnValue);
//             return returnValue;
//         }
//         //If not main call (recursive) return the heuristic value for next calculation
//         return best;
//     }
//     if (!maximizing) {
//         //Initialize best to the highest possible value
//         let best = 100;
//         //Loop through all empty cells
//         board.getAvailableMoves().forEach(index => {
//             //Initialize a new board with a copy of our current state
//             const child = new Board([...board.state]);
//             //Create a child node by inserting the minimizing symbol o into the current empty cell
//             child.insert("o", index);
//             //Recursively calling getBestMove this time with the new board and maximizing turn and incrementing the depth
//             let nodeValue = this.getBestMove(child, true, callback, depth + 1);
//             //Updating best value
//             best = Math.min(best, nodeValue);
//             //If it's the main function call, not a recursive one, map each heuristic value with it's moves indices
//             if (depth == 0) {
//                 //Comma separated indices if multiple moves have the same heuristic value
//                 const moves = this.nodesMap.has(nodeValue)
//                     ? this.nodesMap.get(nodeValue) + "," + index
//                     : index;
//                 this.nodesMap.set(nodeValue, moves);
//             }
//         });
//         //If it's the main call, return the index of the best move or a random index if multiple indices have the same value
//         if (depth == 0) {
//             let returnValue;
//             if (typeof this.nodesMap.get(best) == "string") {
//                 const arr = this.nodesMap.get(best).split(",");
//                 const rand = Math.floor(Math.random() * arr.length);
//                 returnValue = arr[rand];
//             } else {
//                 returnValue = this.nodesMap.get(best);
//             }
//             //run a callback after calculation and return the index
//             callback(returnValue);
//             return returnValue;
//         }
//         //If not main call (recursive) return the heuristic value for next calculation
//         return best;
//     }
// }

// function minimax(state: State, maximizing = true, depth = 0) {}

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
    //         board.getAvailableMoves().forEach(index => {
    //             //Initialize a new board with a copy of our current state
    //             const child = new Board([...board.state]);
    //             //Create a child node by inserting the maximizing symbol x into the current empty cell
    //             child.insert("x", index);
    //             //Recursively calling getBestMove this time with the new board and minimizing turn and incrementing the depth
    //             const nodeValue = this.getBestMove(child, false, callback, depth + 1);
    //             //Updating best value
    //             best = Math.max(best, nodeValue);
    //             //If it's the main function call, not a recursive one, map each heuristic value with it's moves indices
    //             if (depth == 0) {
    //                 //Comma separated indices if multiple moves have the same heuristic value
    //                 const moves = this.nodesMap.has(nodeValue)
    //                     ? `${this.nodesMap.get(nodeValue)},${index}`
    //                     : index;
    //                 this.nodesMap.set(nodeValue, moves);
    //             }
    //         });
    //         //If it's the main call, return the index of the best move or a random index if multiple indices have the same value
    //         if (depth == 0) {
    //             let returnValue;
    //             if (typeof this.nodesMap.get(best) == "string") {
    //                 const arr = this.nodesMap.get(best).split(",");
    //                 const rand = Math.floor(Math.random() * arr.length);
    //                 returnValue = arr[rand];
    //             } else {
    //                 returnValue = this.nodesMap.get(best);
    //             }
    //             //run a callback after calculation and return the index
    //             callback(returnValue);
    //             return returnValue;
    //         }
    //         //If not main call (recursive) return the heuristic value for next calculation
    //         return best;
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
