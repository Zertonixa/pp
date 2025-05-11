import { BlockProps } from "../ui/types/puzzleBlock";
import { BoardBlockProps } from "../ui/types/boardBlock";

export function canInsert(
  figure: BlockProps,
  board: BoardBlockProps[][],
  target: string,
) {
  const x = parseInt(target[0]);
  const y = parseInt(target[1]);
  if (
    y + figure.figure.length > board.length ||
    x + figure.figure[0].length > board[0].length
  )
    return false;
  for (let i = 0; i < figure.figure.length; i++) {
    for (let j = 0; j < figure.figure[0].length; j++) {
      if (figure.figure[i][j] === 1 && board[y + i][x + j].value === 1) {
        return false;
      }
    }
  }
  return true;
}

export function insertPuzzle(
  figure: BlockProps,
  board: BoardBlockProps[][],
  target: string,
) {
  const x = parseInt(target[0]);
  const y = parseInt(target[1]);
  const newBoard = board.map((row) => row.map((cell) => ({ ...cell })));

  for (let i = 0; i < figure.figure.length; i++) {
    for (let j = 0; j < figure.figure[0].length; j++) {
      if (figure.figure[i][j] === 1) {
        newBoard[y + i][x + j].value = 1;
        newBoard[y + i][x + j].color = figure.color;
      }
    }
  }

  return newBoard;
}

export function removeLine(board: BoardBlockProps[][], score: number) {
  const x: number[] = [];
  const y: number[] = [];
  let scoreCount = 0;
  board.map((el) => x.push(el.reduce((a, b) => a + b.value, 0)));
  board[0].map((_, index) =>
    y.push(board.reduce((a, b) => a + b[index].value, 0)),
  );

  const removeBoard = board.map((row) => row.map((cell) => ({ ...cell })));
  const newBoard = board.map((row) => row.map((cell) => ({ ...cell })));

  x.map((el, rowIndex) => {
    if (el === 8) {
      for (let i = 0; i < board.length; i++) {
        newBoard[rowIndex][i].color = "transparent";
        newBoard[rowIndex][i].isRemoving = false;
        newBoard[rowIndex][i].value = 0;
        removeBoard[rowIndex][i].isRemoving = true;
      }
      scoreCount++;
    }
  });

  y.map((el, colIndex) => {
    if (el === 8) {
      for (let i = 0; i < board.length; i++) {
        newBoard[i][colIndex].color = "transparent";
        newBoard[i][colIndex].value = 0;
        newBoard[i][colIndex].isRemoving = false;
        removeBoard[i][colIndex].isRemoving = true;
      }
      scoreCount++;
    }
  });

  if (scoreCount >= 2) score = scoreCount * 1250;
  else if (scoreCount >= 4) score = scoreCount * 1250;
  else score = scoreCount * 1000;

  return { board: newBoard, removingBoard: removeBoard, score: score };
}

export function checkEndGame(
  board: BoardBlockProps[][],
  blockPanel: BlockProps[],
) {
  const rows = board.length;
  const cols = board[0].length;

  if (blockPanel.length === 0) return false;

  return !blockPanel.some((figure) => {
    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        if (canInsert(figure, board, `${x}${y}`)) {
          return true;
        }
      }
    }
  });
}

export function scrollScore(target: number, setScore: (n: number) => void) {
  if (target !== 0) {
    const update = () => {
      setScore(50);
      target -= 50;
      if (target > 0) requestAnimationFrame(update);
    };

    update();
  }
}
