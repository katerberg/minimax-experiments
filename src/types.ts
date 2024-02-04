export type Coordinate = `${number},${number}`;
export type NumberCoordinates = {x: number; y: number};
export type Choice = 'x' | 'o';
export type WinResult = 'win' | 'loss' | 'draw';
export type State = {
  columns: number;
  rows: number;
  selections: {[key: Coordinate]: Choice};
  currentPlayer: Choice;
};
