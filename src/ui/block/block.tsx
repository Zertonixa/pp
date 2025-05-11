import styles from "./block.module.scss";
import { BlockProps } from "../types/block.ts";

export const Block = ({ color, value, width }: BlockProps) => {
  return (
    <div
      className={value === 1 ? styles.container : styles.defaultContainer}
      style={
        {
          "--block-color": color,
          width: width,
          height: width,
        } as React.CSSProperties
      }
    ></div>
  );
};
