import { useEffect } from "react";
import styles from "./blockPanel.module.scss";
import { useGameStore } from "../../store/gameStore";
import { Puzzle } from "../puzzle";

export const BlockPanel = () => {
  const blockPanel = useGameStore((state) => state.blockPanel);
  const setBlockPanel = useGameStore((state) => state.fillBlockPanel);

  useEffect(() => {
    if (blockPanel.length === 0) setBlockPanel();
  }, [blockPanel.length]);

  return (
    <div className={styles.container}>
      {blockPanel.map((block) => (
        <div className={styles.containerBody}>
          <Puzzle
            id={block.id}
            key={block.id}
            figure={block.figure}
            color={block.color}
            isDragging={false}
          />
        </div>
      ))}
    </div>
  );
};
