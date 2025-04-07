import styles from "./puzzle.module.scss";
import { BlockProps } from "../../ui/types/puzzleBlock";
import { Block } from "../../ui/block/block";
import { useRef } from "react";
import { useGameStore } from "../../store/gameStore";

export const Puzzle = ( {id, color, figure} : BlockProps) => {
  const divRef = useRef<HTMLDivElement>(null);
  const setIsDragging = useGameStore((state) => state.setIsDragging);
  const setDivRef = useGameStore((state) => state.setDraggingBlock);
  const setDraggingFigure = useGameStore((state) => state.setDraggingFigure);

  return (
    <div
      style={{ position: "relative" }}
      onMouseDown={() => (setDivRef(divRef), setDraggingFigure({id, color, figure}), setIsDragging(true))}
      ref={divRef}
      id={id}
      className={styles.container}
    >
      {figure.map((row, rowIndex) => (
        <div
          key={`${JSON.stringify(row)}-${rowIndex}`}
          className={styles.containerRow}
        >
          {row.map((number, colIndex) => (
            <Block
              color={color}
              value={number}
              key={`row-${rowIndex}-col-${colIndex}`}
            />
          ))}
        </div>
      ))}
    </div>
  );
};
