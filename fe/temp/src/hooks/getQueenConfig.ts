export default function useGetConfigurations(n: number): string[][] {
  // create a board
  const board: string[][] = createBoard(n);
  // find all configurations
  const configurations = findConfig(0, n - 1, board);
  return configurations
    ? configurations.map((config) => config.map((row) => row.join('')))
    : [];
}

/**
 * recursively search for valid board configurations where n Queens on
 * `n x n` board cannot attack each other
 */
function findConfig(
  y0: number,
  n: number,
  board: string[][],
): undefined | string[][][] {
  const hasQueen = board[y0].some((v) => v === 'Q');
  if (!hasQueen) return undefined;

  if (y0 === n) {
    return board[y0]
      .map((v, index): string[][] | undefined => {
        const x0 = index;
        if (v === 'Q') {
          const copy = crossOutOtherSpots(x0, y0, board);
          return copy;
        }
        return undefined;
      })
      .filter((v) => !!v) as string[][][];
  } else {
    return (
      board[y0]
        .map((v, index) => {
          const x0 = index;
          if (v === 'Q') {
            const copy = crossOutOtherSpots(x0, y0, board);
            return findConfig(y0 + 1, n, copy);
          }
          return undefined;
        })
        .filter((v) => !!v) as string[][][][]
    ).reduce((acc, curr) => [...acc, ...curr], []);
  }
}

// returns a copy of the board with the conflicting spots crossed off
function crossOutOtherSpots(x0: number, y0: number, board: string[][]) {
  const snap = JSON.parse(JSON.stringify(board));
  // cross out conflicting locations
  // crossing out the rows
  crossRow(x0, snap[y0]);
  // crossing out the columns
  crossColumn(x0, y0, snap);
  // crossing out the diagonals
  crossDiagonals(x0, y0, snap);
  return snap;
}

function crossDiagonals(x0: number, y0: number, board: string[][]) {
  const rowLength = board[0].length;
  // cross top left
  let x = x0;
  let y = y0;
  while (x >= 0 && y < board.length) {
    if (y !== y0 && x !== x0) {
      board[y][x] = '.';
    }
    x--;
    y++;
  }
  // cross top right
  x = x0;
  y = y0;
  while (x < rowLength && y < board.length) {
    if (y !== y0 && x !== x0) {
      board[y][x] = '.';
    }
    x++;
    y++;
  }
  // cross bottom left
  x = x0;
  y = y0;
  while (x >= 0 && y >= 0) {
    if (y !== y0 && x !== x0) {
      board[y][x] = '.';
    }
    x--;
    y--;
  }
  // cross bottom right
  x = x0;
  y = y0;
  while (x < rowLength && y >= 0) {
    if (y !== y0 && x !== x0) {
      board[y][x] = '.';
    }
    x++;
    y--;
  }
}

function createBoard(n: number) {
  const board = [];
  for (let i = 0; i < n; i++) {
    let row = [];
    for (let j = 0; j < n; j++) {
      row[j] = 'Q';
    }
    board.push(row);
  }
  return board;
}

function crossRow(x0: number, row: string[]) {
  row.forEach((value, i) => {
    if (i !== x0) {
      row[i] = '.';
    }
  });
}

function crossColumn(x0: number, y0: number, board: string[][]) {
  board.forEach((_row, _rowIndex) => {
    if (_rowIndex !== y0) {
      _row[x0] = '.';
    }
  });
}
