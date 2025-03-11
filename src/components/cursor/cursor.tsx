import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import styles from "./cursor.module.scss";
import { clickTrigger } from "../../utils/curosrEvents";

interface CursorProps {
  positionX: number;
  positionY: number;
  fist: boolean;
}

export const Cursor = ({ positionX, positionY, fist }: CursorProps) => {
  const cursorRef = useRef<HTMLDivElement | null>(null);


  const pos = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const target = useRef({
    x: positionX * window.innerWidth,
    y: positionY * window.innerHeight,
  });

  const lerp = (start: number, end: number, amount: number) =>
    start + (end - start) * amount;

  useEffect(() => {
    target.current = {
      x: window.innerWidth - positionX * window.innerWidth,
      y: positionY * window.innerHeight,
    };
  }, [positionX, positionY]);

  useEffect(() => {
    let animationFrameId: number;

    const updateCursor = () => {
      pos.current.x = lerp(pos.current.x, target.current.x, 0.1);
      pos.current.y = lerp(pos.current.y, target.current.y, 0.1);

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px)`;
      }

      animationFrameId = requestAnimationFrame(updateCursor);
    };

    animationFrameId = requestAnimationFrame(updateCursor);

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  useEffect(() => {
    if (fist) {
      clickTrigger(pos.current.x, pos.current.y);
    }
  },[fist]);

  return (
    <motion.div
      ref={cursorRef}
      className={styles.cursor}
      style={{
        backgroundColor: fist ? "red" : "gray",
        transform: `translate(${pos.current.x}px, ${pos.current.y}px)`,
      }}
    />
  );
};
