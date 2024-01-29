import './index.scss';

type HTMLElementEvent<T extends HTMLElement> = Event & {
  target: T;
};

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
      console.log('drawing row');
      ctx.fillRect(10, cellHeight * row - 5 * row, gameWidth - 20, 10);
    }
  }
}

function columnChangeListener(ev: HTMLElementEvent<HTMLButtonElement>): void {
  state.columns = Number(ev.target.value);
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

resize();
addEventListener('resize', () => {
  resize();
});

window.addEventListener('load', () => {
  bindListeners();
  initCanvasSize(getCanvas());
  redraw();
});
