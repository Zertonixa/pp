import styles from "./gameBoard.module.scss";
import { BoardBlock } from "../../ui/boardBlock";
import { canInsert, scrollScore } from "../../utils/gameEvents";
import { useGameStore } from "../../store/gameStore";
import { Puzzle } from "../puzzle";
import { removeLine } from "../../utils/gameEvents";
import { useEffect } from "react";

export const GameBoard = () => {
  const draggingFigure = useGameStore((state) => state.draggingFigure);

  const score = useGameStore((state) => state.score);
  const setScore = useGameStore((state) => state.increaseScore);
  const board = useGameStore((state) => state.gameBoard);
  const blockPanel = useGameStore((state) => state.blockPanel);
  const setGameBoard = useGameStore((state) => state.setGameBoard);
  const targetBlock = useGameStore((state) => state.targetBlock);

  useEffect(() => {
    const result = removeLine(board, score);
    setGameBoard(result.removingBoard);
    scrollScore(result.score, setScore);
    setTimeout(() => {
      setGameBoard(result.board);
    }, 400);
  }, [blockPanel]);

  return (
    <div className={styles.container}>
      <div className={styles.containerBody}>
        {/* Превью блока на доске */}

        {draggingFigure &&
          targetBlock &&
          canInsert(draggingFigure, board, targetBlock) && (
            <div
              style={{
                position: "absolute",
                zIndex: 100,
                opacity: 0.4,
                pointerEvents: "none",
                top: parseInt(targetBlock[1]) * 60,
                left: parseInt(targetBlock[0]) * 60,
              }}
            >
              <Puzzle
                id="prewiev"
                color={draggingFigure.color}
                figure={draggingFigure.figure}
                isDragging={true}
              />
            </div>
          )}
        {board.map((row, rowIndex) => (
          <div key={rowIndex} className={styles.containerBodyRow}>
            {row.map((el, elIndex) => (
              <BoardBlock
                key={elIndex + "" + rowIndex}
                color={el.color}
                value={el.value}
                isRemoving={el.isRemoving}
                id={elIndex + "" + rowIndex}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
