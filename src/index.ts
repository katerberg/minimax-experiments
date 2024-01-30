import './index.scss';

type HTMLElementEvent<T extends HTMLElement> = Event & {
  target: T;
};
type Coordinate = `${number},${number}`;
type NumberCoordinates = {x: number; y: number};
type Choice = 'x' | 'o';

function coordsToNumberCoords(coords: Coordinate): NumberCoordinates {
  const [startX, startY] = coords.split(',');
  return {x: Number.parseInt(startX, 10), y: Number.parseInt(startY, 10)};
}

const gameWidth = 800;
const gameHeight = 375;
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
    ctx.fillStyle = 'rgb(0 0 200)';
    ctx.beginPath();

    ctx.moveTo(xStart, yStart);
    ctx.lineTo(xStart + cellWidth - 30, yStart + cellHeight - 30);

    ctx.moveTo(xStart + cellWidth - 30, yStart);
    ctx.lineTo(xStart, yStart + cellHeight - 30);
    ctx.stroke();
  }
}

function redraw(): void {
  const ctx = getCanvas().getContext('2d');
  if (ctx) {
    ctx.clearRect(0, 0, gameWidth, gameHeight);
    const cellWidth = gameWidth / state.columns;
    const cellHeight = gameHeight / state.rows;

    ctx.fillStyle = 'rgb(200 0 0)';
    for (let col = 1; col < state.columns; col++) {
      ctx.fillRect(cellWidth * col - 5 * col, 10, 10, gameHeight - 20);
    }
    for (let row = 1; row < state.rows; row++) {
      ctx.fillRect(10, cellHeight * row - 5 * row, gameWidth - 20, 10);
    }

    for (const [key, choice] of Object.entries(state.selections)) {
      const {x, y} = coordsToNumberCoords(key as Coordinate);
      if (choice === 'x') {
        drawX(x, y);
      } else {
        ctx.fillStyle = 'rgb(200 0 0)';
        ctx.fillRect(x * cellWidth, y * cellHeight, cellWidth, cellHeight);
      }
    }
  }
}

function updateSelections(columns: number, rows: number): void {
  (Object.keys(state.selections) as Coordinate[]).forEach((key) => {
    const {x, y} = coordsToNumberCoords(key);
    if (x < columns || y < rows) {
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
  redraw();
}

function bindListeners(): void {
  const columnSelector = document.getElementById('column-selector');
  const rowSelector = document.getElementById('row-selector');

  if (rowSelector && columnSelector) {
    columnSelector.addEventListener('change', columnChangeListener as (ev: Event) => void);
    rowSelector.addEventListener('change', rowChangeListener as (ev: Event) => void);
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
