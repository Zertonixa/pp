import { useState } from "react";
import styles from "./gameBoard.module.scss";
import { boardStart } from "../../ui/lib";
import { BoardBlockProps } from "../../ui/types/boardBlock";
import { BoardBlock } from "../../ui/boardBlock";

export const GameBoard = () => {

  const [board, setBoard] = useState<BoardBlockProps[][]>(boardStart);
  const [targetBlock, setTargetBlock] = useState<string>("");

  return (
    <div className={styles.container}>
      <div className={styles.containerBody}>
        {board.map((row, rowIndex) => (
          <div key={rowIndex} className={styles.containerBodyRow}>
            {row.map((el, elIndex) => (
              <BoardBlock
                key={elIndex + "" + rowIndex}
                color={el.color}
                value={el.value}
                setTargetBlock={setTargetBlock}
                id={elIndex + "" + rowIndex}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
