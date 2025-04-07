import styles from "./boardBlock.module.scss"
import { BoardBlockProps } from "../types/boardBlock";

export const BoardBlock = ({ color, value, setTargetBlock, id }: BoardBlockProps) => {
  
  return (
    <div
      className={styles.container}
      onMouseEnter = {() => setTargetBlock(id)}
      style={{
        backgroundColor: value === 1 ? color : "transparent",
        border: "1px solid black",
      }}
    ></div>
  );
};
