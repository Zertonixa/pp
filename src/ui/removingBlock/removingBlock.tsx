import React from "react";
import styles from "./removingBlock.module.scss";

interface RemovingBlockProps {
  color: string;
  count?: number;
}

export const RemovingBlock = ({ color, count = 9 }: RemovingBlockProps) => {
  return (
    <div className={styles.shardContainer}>
      {Array.from({ length: count }).map((_, i) => {
        const x = Math.floor(Math.random() * 60);
        const y = Math.floor(Math.random() * 60 + 40);
        const delay = Math.random() * 0.4;
        const startX = Math.floor(Math.random() * (60 + 1));
        return (
          <div
            key={i}
            className={styles.shard}
            style={
              {
                backgroundColor: color,
                animationDelay: `${delay}s`,
                transform: `translate(${x}px, ${y}px)`,
                left: startX,
                "--block-color": color,
              } as React.CSSProperties
            }
          />
        );
      })}
    </div>
  );
};
