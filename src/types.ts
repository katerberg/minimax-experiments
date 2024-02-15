export type Coordinate = `${number},${number}`;
export type NumberCoordinates = {x: number; y: number};
export type Choice = 'x' | 'o';
export type WinResult = 'win' | 'loss' | 'draw';
export type Moves = {[key: Coordinate]: Choice | undefined};
export type State = {
  columns: number;
  rows: number;
  maxDepth: number;
  selections: Moves;
  currentPlayer: Choice;
};
