import {Choice, Coordinate, NumberCoordinates} from './types';

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

export function getColumnScore(selections: {[key: Coordinate]: Choice}, column: number, rows: number): number {
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

export function getRowScore(selections: {[key: Coordinate]: Choice}, columns: number, row: number): number {
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

export function getTotalColumnScore(selections: {[key: Coordinate]: Choice}, columns: number, rows: number): number {
  let score = 0;
  for (let x = 0; x < columns; x++) {
    score += getColumnScore(selections, x, rows);
  }

  return score;
}

export function getTotalRowScore(selections: {[key: Coordinate]: Choice}, columns: number, rows: number): number {
  let score = 0;
  for (let y = 0; y < rows; y++) {
    score += getRowScore(selections, columns, y);
  }

  return score;
}

export function getDiagonalScore(
  selections: {[key: Coordinate]: Choice},
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

export function getTotalDiagonalScore(selections: {[key: Coordinate]: Choice}, columns: number, rows: number): number {
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
  selections: {[key: Coordinate]: Choice},
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

export function getTotalReverseDiagonalScore(
  selections: {[key: Coordinate]: Choice},
  columns: number,
  rows: number,
): number {
  let score = 0;
  for (let x = 0; x < columns; x++) {
    score += getReverseDiagonalScore(selections, columns, rows, {x, y: 0});
  }
  for (let y = 1; y < rows; y++) {
    score += getReverseDiagonalScore(selections, columns, rows, {x: 3, y});
  }

  return score;
}

export function getTotalScore(selections: {[key: Coordinate]: Choice}, columns: number, rows: number): number {
  return (
    getTotalColumnScore(selections, columns, rows) +
    getTotalRowScore(selections, columns, rows) +
    getTotalDiagonalScore(selections, columns, rows) +
    getTotalReverseDiagonalScore(selections, columns, rows)
  );
}
