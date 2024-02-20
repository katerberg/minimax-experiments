import {Choice, Moves, NumberCoordinates, State} from './types';

function isColumnWin(selections: Moves, columns: number, rows: number, winNumber: number): boolean {
  for (let x = 0; x < columns; x++) {
    for (let y = 0; y < rows - 2; y++) {
      let isWinningColumn = selections[`${x},${y}`] !== undefined;
      for (let winCheck = 1; winCheck < winNumber; winCheck++) {
        if (selections[`${x},${y + winCheck}`] !== selections[`${x},${y}`]) {
          isWinningColumn = false;
          break;
        }
      }
      if (isWinningColumn) {
        return true;
      }
    }
  }
  return false;
}

function isRowWin(selections: Moves, columns: number, rows: number, winNumber: number): boolean {
  for (let x = 0; x < columns - 2; x++) {
    for (let y = 0; y < rows; y++) {
      let isWinningRow = selections[`${x},${y}`] !== undefined;
      for (let winCheck = 1; winCheck < winNumber; winCheck++) {
        if (selections[`${x + winCheck},${y}`] !== selections[`${x},${y}`]) {
          isWinningRow = false;
          break;
        }
      }
      if (isWinningRow) {
        return true;
      }
    }
  }
  return false;
}

function isDiagonalWin(selections: Moves, columns: number, rows: number, winNumber: number): boolean {
  for (let x = 0; x < columns - 2; x++) {
    for (let y = 0; y < rows - 2; y++) {
      let isWinningDiagonal = selections[`${x},${y}`] !== undefined;
      for (let winCheck = 1; winCheck < winNumber; winCheck++) {
        if (selections[`${x + winCheck},${y + winCheck}`] !== selections[`${x},${y}`]) {
          isWinningDiagonal = false;
          break;
        }
      }
      if (isWinningDiagonal) {
        return true;
      }
    }
  }
  return false;
}

function isReverseDiagonalWin(selections: Moves, columns: number, rows: number, winNumber: number): boolean {
  for (let x = 2; x < columns; x++) {
    for (let y = 0; y < rows - 2; y++) {
      let isWinningDiagonal = selections[`${x},${y}`] !== undefined;
      for (let winCheck = 1; winCheck < winNumber; winCheck++) {
        if (selections[`${x - winCheck},${y + winCheck}`] !== selections[`${x},${y}`]) {
          isWinningDiagonal = false;
          break;
        }
      }
      if (isWinningDiagonal) {
        return true;
      }
    }
  }
  return false;
}

export function isWin(selections: Moves, columns: number, rows: number, winNumber: number): boolean {
  return (
    isColumnWin(selections, columns, rows, winNumber) ||
    isRowWin(selections, columns, rows, winNumber) ||
    isDiagonalWin(selections, columns, rows, winNumber) ||
    isReverseDiagonalWin(selections, columns, rows, winNumber)
  );
}

export function isCat(selections: Moves, columns: number, rows: number): boolean {
  return Object.keys(selections).length === columns * rows;
}

export function checkTerminal(state: State): {
  isTerminal: boolean;
  isCat: boolean;
  isWinner: boolean;
  winner: Choice | null;
} {
  const isWinner = isWin(state.selections, state.columns, state.rows, 3);
  const isCatGame = isCat(state.selections, state.columns, state.rows);
  return {
    isTerminal: isWinner || isCatGame,
    isWinner,
    isCat: isCatGame,
    winner: isWinner ? state.currentPlayer : null,
  };
}

export function getColumnScore(selections: Moves, column: number, rows: number): number {
  let score = 0;
  for (let y = 0; y < rows; y++) {
    if (selections[`${column},${y}`] === 'x') {
      if (selections[`${column},${y + 1}`] === 'x') {
        if (selections[`${column},${y + 2}`] === 'x') {
          score += 100000;
          y += 2;
        } else {
          score += 10;
          y++;
        }
      } else {
        score += 1;
      }
    } else if (selections[`${column},${y}`] === 'o') {
      if (selections[`${column},${y + 1}`] === 'o') {
        if (selections[`${column},${y + 2}`] === 'o') {
          score -= 100000;
          y += 2;
        } else {
          score -= 10;
          y++;
        }
      } else {
        score -= 1;
      }
    }
  }
  return score;
}

export function getRowScore(selections: Moves, columns: number, row: number): number {
  let score = 0;
  for (let x = 0; x < columns; x++) {
    if (selections[`${x},${row}`] === 'x') {
      if (selections[`${x + 1},${row}`] === 'x') {
        if (selections[`${x + 2},${row}`] === 'x') {
          score += 100000;
          x += 2;
        } else {
          score += 10;
          x++;
        }
      } else {
        score += 1;
      }
    } else if (selections[`${x},${row}`] === 'o') {
      if (selections[`${x + 1},${row}`] === 'o') {
        if (selections[`${x + 2},${row}`] === 'o') {
          score -= 100000;
          x += 2;
        } else {
          score -= 10;
          x++;
        }
      } else {
        score -= 1;
      }
    }
  }
  return score;
}

export function getTotalColumnScore(selections: Moves, columns: number, rows: number): number {
  let score = 0;
  for (let x = 0; x < columns; x++) {
    score += getColumnScore(selections, x, rows);
  }

  return score;
}

export function getTotalRowScore(selections: Moves, columns: number, rows: number): number {
  let score = 0;
  for (let y = 0; y < rows; y++) {
    score += getRowScore(selections, columns, y);
  }

  return score;
}

export function getDiagonalScore(
  selections: Moves,
  columns: number,
  rows: number,
  startingCoordinate: NumberCoordinates,
): number {
  let {x, y} = startingCoordinate;
  let score = 0;
  while (x < columns && y < rows) {
    if (selections[`${x},${y}`] === 'x') {
      if (selections[`${x + 1},${y + 1}`] === 'x') {
        if (selections[`${x + 2},${y + 2}`] === 'x') {
          score += 100000;
          x += 3;
          y += 3;
        } else {
          score += 10;
          x += 2;
          y += 2;
        }
      } else {
        score += 1;
        x += 1;
        y += 1;
      }
    } else if (selections[`${x},${y}`] === 'o') {
      if (selections[`${x + 1},${y + 1}`] === 'o') {
        if (selections[`${x + 2},${y + 2}`] === 'o') {
          score -= 100000;
          x += 3;
          y += 3;
        } else {
          score -= 10;
          x += 2;
          y += 2;
        }
      } else {
        score -= 1;
        x += 1;
        y += 1;
      }
    } else {
      x += 1;
      y += 1;
    }
  }
  return score;
}

export function getTotalDiagonalScore(selections: Moves, columns: number, rows: number): number {
  let score = 0;
  for (let x = 0; x < columns; x++) {
    score += getDiagonalScore(selections, columns, rows, {x, y: 0});
  }
  for (let y = 1; y < rows; y++) {
    score += getDiagonalScore(selections, columns, rows, {x: 0, y});
  }

  return score;
}

function getReverseDiagonalScore(
  selections: Moves,
  columns: number,
  rows: number,
  startingCoordinate: NumberCoordinates,
): number {
  let {x, y} = startingCoordinate;
  let score = 0;
  while (x >= 0 && y < rows) {
    if (selections[`${x},${y}`] === 'x') {
      if (selections[`${x - 1},${y + 1}`] === 'x') {
        if (selections[`${x - 2},${y + 2}`] === 'x') {
          score += 100000;
          x -= 3;
          y += 3;
        } else {
          score += 10;
          x -= 2;
          y += 2;
        }
      } else {
        score += 1;
        x -= 1;
        y += 1;
      }
    } else if (selections[`${x},${y}`] === 'o') {
      if (selections[`${x - 1},${y + 1}`] === 'o') {
        if (selections[`${x - 2},${y + 2}`] === 'o') {
          score -= 100000;
          x -= 3;
          y += 3;
        } else {
          score -= 10;
          x -= 2;
          y += 2;
        }
      } else {
        score -= 1;
        x -= 1;
        y += 1;
      }
    } else {
      x -= 1;
      y += 1;
    }
  }
  return score;
}

export function getTotalReverseDiagonalScore(selections: Moves, columns: number, rows: number): number {
  let score = 0;
  for (let x = 0; x < columns; x++) {
    score += getReverseDiagonalScore(selections, columns, rows, {x, y: 0});
  }
  for (let y = 1; y < rows; y++) {
    score += getReverseDiagonalScore(selections, columns, rows, {x: 3, y});
  }

  return score;
}

export function getTotalScore(selections: Moves, columns: number, rows: number): number {
  return (
    getTotalColumnScore(selections, columns, rows) +
    getTotalRowScore(selections, columns, rows) +
    getTotalDiagonalScore(selections, columns, rows) +
    getTotalReverseDiagonalScore(selections, columns, rows)
  );
}
