import styles from "./boardBlock.module.scss";
import { BoardBlockProps } from "../types/boardBlock";
import { useGameStore } from "../../store/gameStore";
import { RemovingBlock } from "../removingBlock";

export const BoardBlock = ({
  color,
  value,
  id,
  isRemoving,
}: BoardBlockProps) => {
  const setTargetBlock = useGameStore((state) => state.setTarget);

  return (
    <div style={{ position: "relative" }}>
      {isRemoving && <RemovingBlock color={color} />}

      <div
        className={value === 1 ? styles.container : styles.defaultContainer}
        onMouseEnter={() => setTargetBlock(id)}
        onMouseLeave={() => setTargetBlock(null)}
        style={
          {
            "--block-color": color,
            backgroundColor: value === 1 && !isRemoving ? color : "transparent",
          } as React.CSSProperties
        }
      ></div>
    </div>
  );
};
