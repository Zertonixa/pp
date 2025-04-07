import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useCameraStore } from "../../store/cameraStore";
import styles from "./cursor.module.scss";
import { mouseDownTrigger, mouseUpTrigger, mouseEnterTrigger } from "../../utils/curosrEvents";
import { dragging } from "../../utils/draggingItems";

export const Cursor = () => {
  const cursorRef = useRef<HTMLDivElement | null>(null);

  const pos = useRef<{ x: number; y: number }>({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  });

  const fist = useCameraStore((state) => state.isFist);

  const targetPos = useCameraStore((state) => state.position);

  const debounceTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const animation = useRef<number | null>(null);

  useEffect(() => {
    dragging(
      animation,
      cursorRef,
      pos,
      () => useCameraStore.getState().position.x,
      () => useCameraStore.getState().position.y,
      () => true,
    );
    mouseEnterTrigger(pos.current.x, pos.current.y)
  }, [targetPos]);

  useEffect(() => {
    if (fist) {
      if (debounceTimeout.current) {
        clearTimeout(debounceTimeout.current);
        debounceTimeout.current = null;
      }
      mouseDownTrigger(pos.current.x, pos.current.y);
    } 
    else {
      debounceTimeout.current = setTimeout(() => {
          mouseUpTrigger(pos.current.x, pos.current.y);
      }, 50);
      }
  }, [fist]);

  return (
    <motion.div
      ref={cursorRef}
      className={styles.cursor}
      style={{
        backgroundColor: fist ? "red" : "gray",
      }}
    />
  );
};
