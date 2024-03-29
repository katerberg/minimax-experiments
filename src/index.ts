import './index.scss';
import {coordsToNumberCoords} from './coordinatesHelper';
import {getBestMove} from './minimax';
import {Choice, Coordinate, NumberCoordinates, State} from './types';
import {getTotalScore} from './winCalculation';

type HTMLElementEvent<T extends HTMLElement> = Event & {
  target: T;
};

const gameWidth = 1600;
const gameHeight = 750;
const gameRatio = gameWidth / gameHeight;
function resize(): void {
  const gameNode = document.getElementById('game');
  gameNode?.classList.remove('vertical-constraint', 'horizontal-constraint');
  const windowRatio = window.innerWidth / (window.innerHeight - 120);
  if (windowRatio < 0 || windowRatio > 10) {
    return;
  }
  if (gameRatio < windowRatio) {
    gameNode?.classList.add('vertical-constraint');
  } else {
    gameNode?.classList.add('horizontal-constraint');
  }
}

const state = {
  currentPlayer: 'x' as Choice,
  columns: 3,
  rows: 3,
  requiredWin: 3,
  maxDepth: 1200,
  selections: new Map<Coordinate, Choice>(),
} as State;

function initCanvasSize(canvas: HTMLCanvasElement): void {
  const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  const height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
  canvas.width = gameWidth; //horizontal resolution (?) - increase for better looking text
  canvas.height = gameHeight; //vertical resolution (?) - increase for better looking text
  canvas.style.width = `${width}`; //actual width of canvas
  canvas.style.height = `${height}`; //actual height of canvas
}

function getCanvas(): HTMLCanvasElement {
  return document.getElementById('game-canvas') as HTMLCanvasElement;
}

function drawX(x: number, y: number): void {
  const ctx = getCanvas().getContext('2d');
  const cellWidth = gameWidth / state.columns;
  const cellHeight = gameHeight / state.rows;
  if (ctx) {
    const xStart = x * cellWidth + 15;
    const yStart = y * cellHeight + 15;
    ctx.clearRect(xStart - 10, yStart - 10, cellWidth - 30, cellHeight - 30);
    ctx.lineWidth = 5;
    ctx.strokeStyle = 'rgb(0 0 200)';
    ctx.beginPath();

    ctx.moveTo(xStart, yStart);
    ctx.lineTo(xStart + cellWidth - 30, yStart + cellHeight - 30);

    ctx.moveTo(xStart + cellWidth - 30, yStart);
    ctx.lineTo(xStart, yStart + cellHeight - 30);
    ctx.stroke();
  }
}

function drawO(x: number, y: number): void {
  const ctx = getCanvas().getContext('2d');
  const cellWidth = gameWidth / state.columns;
  const cellHeight = gameHeight / state.rows;
  if (ctx) {
    const xStart = x * cellWidth + 5;
    const yStart = y * cellHeight + 5;
    ctx.clearRect(xStart, yStart, cellWidth - 30, cellHeight - 30);
    const radius = Math.min(cellWidth, cellHeight) * 0.4 - 10;

    ctx.lineWidth = 5;
    ctx.strokeStyle = 'rgb(200 0 0)';
    ctx.beginPath();
    ctx.arc(xStart + cellWidth / 2, yStart + cellHeight / 2, radius, 0, 2 * Math.PI, false);
    ctx.stroke();
  }
}

function redrawBoard(ctx: CanvasRenderingContext2D): void {
  const cellWidth = gameWidth / state.columns;
  const cellHeight = gameHeight / state.rows;

  ctx.fillStyle = 'rgb(10 200 110)';
  for (let col = 1; col < state.columns; col++) {
    ctx.fillRect(cellWidth * col - 5, 10, 10, gameHeight - 20);
  }
  for (let row = 1; row < state.rows; row++) {
    ctx.fillRect(10, cellHeight * row - 5, gameWidth - 20, 10);
  }
}

function redrawSelections(): void {
  (state.selections).forEach((key, value) => {
    const {x, y} = coordsToNumberCoords(value);
    if (key=== 'x') {
      drawX(x, y);
    } else {
      drawO(x, y);
    }
  });
}

function redraw(): void {
  const ctx = getCanvas().getContext('2d');
  if (ctx) {
    ctx.clearRect(0, 0, gameWidth, gameHeight);

    redrawBoard(ctx);
    setTimeout(() => redrawSelections(), 1);
  }
}

function updateSelections(columns: number, rows: number): void {
  (Object.keys(state.selections) as Coordinate[]).forEach((key) => {
    const {x, y} = coordsToNumberCoords(key);
    if (x >= columns || y >= rows) {
      state.selections.delete(key);
    }
  });
}
function columnChangeListener(ev: HTMLElementEvent<HTMLButtonElement>): void {
  state.columns = Number(ev.target.value);
  updateSelections(state.columns, state.rows);
  redraw();
}

function rowChangeListener(ev: HTMLElementEvent<HTMLButtonElement>): void {
  state.rows = Number(ev.target.value);
  updateSelections(state.columns, state.rows);
  redraw();
}

function depthChangeListener(ev: HTMLElementEvent<HTMLButtonElement>): void {
  const result = document.getElementById('result-area');
  if (result) {
    result.textContent = `depth changed to ${ev.target.value}`;
  }
  state.maxDepth = Number(ev.target.value);
}

function requiredWinChangeListener(ev: HTMLElementEvent<HTMLButtonElement>): void {
  const result = document.getElementById('result-area');
  if (result) {
    result.textContent = `required win changed to ${ev.target.value}`;
  }
  state.requiredWin = Number(ev.target.value);
}

function getCurrentScore(): number {
  return getTotalScore(state.selections, state.columns, state.rows);
}

function calculate(): void {
  const result = document.getElementById('result-area');
  const time = new Date().getTime();
  if (result) {
    result.textContent = `Calculating ${state.columns}x${state.rows} with depth ${state.maxDepth}...`;
    const score = getCurrentScore();
    setTimeout(() => {
      const bestMove = getBestMove(state);
      const terminal = `Terminal ${bestMove.bestScore} at ${bestMove.bestMove.x},${bestMove.bestMove.y}.`;
      const calculated = `Calculated: ${new Date().getTime() - time} ms`;
      if (score > 0) {
        result.textContent = `Winning ${score}. ${terminal} ${calculated}`;
      } else if (score < 0) {
        result.textContent = `Losing ${score}. ${terminal} ${calculated}`;
      } else {
        result.textContent = `Tie ${score}. ${terminal} ${calculated}`;
      }
    }, 1);
  }
}

function bindListeners(): void {
  const columnSelector = document.getElementById('column-selector');
  const rowSelector = document.getElementById('row-selector');
  const calculateSelector = document.getElementById('calculate-button');
  const depthSelector = document.getElementById('depth-selector');
  const requiredWinSelector = document.getElementById('required-win-selector');

  if (rowSelector && columnSelector && calculateSelector && depthSelector && requiredWinSelector) {
    columnSelector.addEventListener('change', columnChangeListener as (ev: Event) => void);
    rowSelector.addEventListener('change', rowChangeListener as (ev: Event) => void);
    depthSelector.addEventListener('change', depthChangeListener as (ev: Event) => void);
    requiredWinSelector.addEventListener('change', requiredWinChangeListener as (ev: Event) => void);

    calculateSelector.addEventListener('click', calculate);
  }
}

function getCellCoordinatesFromClick(event: MouseEvent): NumberCoordinates {
  const elem = getCanvas();
  const elemLeft = elem.offsetLeft + elem.clientLeft;
  const elemTop = elem.offsetTop + elem.clientTop;
  const x = event.pageX - elemLeft;
  const y = event.pageY - elemTop;

  return {x: Math.floor((x / elem.clientWidth) * state.columns), y: Math.floor((y / elem.clientHeight) * state.rows)};
}

function handleClick(event: MouseEvent): void {
  const {x, y} = getCellCoordinatesFromClick(event);
  switch (state.selections.get(`${x},${y}`)) {
    case 'x':
      state.selections.set(`${x},${y}`, 'o');
      break;
    case 'o':
      state.selections.delete(`${x},${y}`);
      break;
    case undefined:
    default:
      state.selections.set(`${x},${y}`, 'x');
      break;
  }
  redraw();
}

resize();
addEventListener('resize', () => {
  resize();
});

window.addEventListener('load', () => {
  bindListeners();
  initCanvasSize(getCanvas());

  getCanvas().addEventListener('click', handleClick, false);
  redraw();
});
