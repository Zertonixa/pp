import styles from "./block.module.scss";
import { BlockProps } from "../types/block.ts";

export const Block = ({ color, value }: BlockProps) => {
  return (
    <div
      className={styles.container}
      style={{
        backgroundColor: value === 1 ? color : "transparent",
        border: value !== 0 ? "1px solid black" : "none",
      }}
    ></div>
  );
};
