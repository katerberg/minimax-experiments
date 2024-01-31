import {isWin} from './game';
import './index.scss';
import {Choice, Coordinate, NumberCoordinates} from './types';

type HTMLElementEvent<T extends HTMLElement> = Event & {
  target: T;
};

function coordsToNumberCoords(coords: Coordinate): NumberCoordinates {
  const [startX, startY] = coords.split(',');
  return {x: Number.parseInt(startX, 10), y: Number.parseInt(startY, 10)};
}

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
  columns: 3,
  rows: 3,
  selections: {} as {[key: Coordinate]: Choice},
};

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

  ctx.fillStyle = 'rgb(0 0 0)';
  for (let col = 1; col < state.columns; col++) {
    ctx.fillRect(cellWidth * col - 5, 10, 10, gameHeight - 20);
  }
  for (let row = 1; row < state.rows; row++) {
    ctx.fillRect(10, cellHeight * row - 5, gameWidth - 20, 10);
  }
}

function redrawSelections(): void {
  (Object.keys(state.selections) as Coordinate[]).forEach((key) => {
    const {x, y} = coordsToNumberCoords(key);
    if (state.selections[key] === 'x') {
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
      delete state.selections[key];
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

function checkWin(): void {
  if (isWin(state.selections, state.columns, state.rows)) {
    alert('Win!');
  } else {
    alert('No win');
  }
}

function bindListeners(): void {
  const columnSelector = document.getElementById('column-selector');
  const rowSelector = document.getElementById('row-selector');
  const calculateSelector = document.getElementById('calculate-button');

  if (rowSelector && columnSelector && calculateSelector) {
    columnSelector.addEventListener('change', columnChangeListener as (ev: Event) => void);
    rowSelector.addEventListener('change', rowChangeListener as (ev: Event) => void);

    calculateSelector.addEventListener('click', checkWin);
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
  switch (state.selections[`${x},${y}`]) {
    case 'x':
      state.selections[`${x},${y}`] = 'o';
      break;
    case 'o':
      delete state.selections[`${x},${y}`];
      break;
    case undefined:
    default:
      state.selections[`${x},${y}`] = 'x';
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
