import {Choice, Coordinate} from './types';

function isColumnWin(selections: {[key: Coordinate]: Choice}, columns: number, rows: number): boolean {
  for (let x = 0; x < columns; x++) {
    for (let y = 0; y < rows - 2; y++) {
      if (
        (selections[`${x},${y}`] === 'x' &&
          selections[`${x},${y + 1}`] === 'x' &&
          selections[`${x},${y + 2}`] === 'x') ||
        (selections[`${x},${y}`] === 'o' && selections[`${x},${y + 1}`] === 'o' && selections[`${x},${y + 2}`] === 'o')
      ) {
        return true;
      }
    }
  }
  return false;
}

function isRowWin(selections: {[key: Coordinate]: Choice}, columns: number, rows: number): boolean {
  for (let x = 0; x < columns - 2; x++) {
    for (let y = 0; y < rows; y++) {
      if (
        (selections[`${x},${y}`] === 'x' &&
          selections[`${x + 1},${y}`] === 'x' &&
          selections[`${x + 2},${y}`] === 'x') ||
        (selections[`${x},${y}`] === 'o' && selections[`${x + 1},${y}`] === 'o' && selections[`${x + 2},${y}`] === 'o')
      ) {
        return true;
      }
    }
  }
  return false;
}

function isDiagonalWin(selections: {[key: Coordinate]: Choice}, columns: number, rows: number): boolean {
  for (let x = 0; x < columns - 2; x++) {
    for (let y = 0; y < rows - 2; y++) {
      if (
        (selections[`${x},${y}`] === 'x' &&
          selections[`${x + 1},${y + 1}`] === 'x' &&
          selections[`${x + 2},${y + 2}`] === 'x') ||
        (selections[`${x},${y}`] === 'o' &&
          selections[`${x + 1},${y + 1}`] === 'o' &&
          selections[`${x + 2},${y + 2}`] === 'o')
      ) {
        return true;
      }
    }
  }
  return false;
}

function isReverseDiagonalWin(selections: {[key: Coordinate]: Choice}, columns: number, rows: number): boolean {
  for (let x = 2; x < columns; x++) {
    for (let y = 0; y < rows - 2; y++) {
      if (
        (selections[`${x},${y}`] === 'x' &&
          selections[`${x - 1},${y + 1}`] === 'x' &&
          selections[`${x - 2},${y + 2}`] === 'x') ||
        (selections[`${x},${y}`] === 'o' &&
          selections[`${x - 1},${y + 1}`] === 'o' &&
          selections[`${x - 2},${y + 2}`] === 'o')
      ) {
        return true;
      }
    }
  }
  return false;
}

export function isWin(selections: {[key: Coordinate]: Choice}, columns: number, rows: number): boolean {
  return (
    isColumnWin(selections, columns, rows) ||
    isRowWin(selections, columns, rows) ||
    isDiagonalWin(selections, columns, rows) ||
    isReverseDiagonalWin(selections, columns, rows)
  );
}
