import { useEffect, useRef } from "react";
import { useGameStore } from "../../store/gameStore";
import { dragging } from "../../utils/draggingItems";
import { useCameraStore } from "../../store/cameraStore";
import { canInsert } from "../../utils/gameEvents";
import { insertPuzzle } from "../../utils/gameEvents";

export const DragManager = () => {
  const draggItem = useGameStore((state) => state.draggingBlock);
  const setIsDragging = useGameStore((state) => state.setIsDragging);
  const isDragging = useGameStore.getState().isDragging;
  const setDragItem = useGameStore((state) => state.setDraggingBlock);
  const draggingFigure = useGameStore((state) => state.draggingFigure);
  const setDraggingFigure = useGameStore((state) => state.setDraggingFigure);
  const setGameBoard = useGameStore((state) => state.setGameBoard);
  const setBlockPanel = useGameStore((state) => state.removeBlock);

  const x = useCameraStore.getState().position.x;
  const y = useCameraStore.getState().position.y;

  const pos = useRef<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });

  const animation = useRef<number | null>(null);

  useEffect(() => {
    if (draggItem && draggItem.current) {
      pos.current.x = draggItem.current.getBoundingClientRect().x;
      pos.current.y = draggItem.current.getBoundingClientRect().y;
    }
  }, [draggItem]);

  useEffect(() => {
    if (draggItem && draggItem.current) {
      setIsDragging(true);
      draggItem.current.style.position = "absolute";
      draggItem.current.style.top = "0px";
      draggItem.current.style.left = "0px";
      draggItem.current.style.zIndex = "5";
      draggItem.current.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px)`;
      dragging(
        animation,
        draggItem,
        pos,
        () => useCameraStore.getState().position.x,
        () => useCameraStore.getState().position.y,
        () => isDragging,
      );
    }
  }, [x, y]);

  useEffect(() => {
    const handleMouseUp = () => {
      const targetBlock = useGameStore.getState().targetBlock;
      const gameBoard = useGameStore.getState().gameBoard;

      if (targetBlock && isDragging && draggingFigure) {
        console.log(targetBlock);
        if (canInsert(draggingFigure, gameBoard, targetBlock)) {
          setGameBoard(insertPuzzle(draggingFigure, gameBoard, targetBlock));
          setBlockPanel(draggingFigure.id);
        }
      }

      cancelAnimationFrame(animation.current!);
      setIsDragging(false);
      setDraggingFigure(null);
      animation.current = null;

      if (draggItem && draggItem.current) {
        draggItem.current.style.position = "fixed";
        draggItem.current.style.zIndex = "0";
        draggItem.current.style.top = "";
        draggItem.current.style.left = "";
        draggItem.current.style.transform = "";
        draggItem.current.style.transition = "";
      }

      setDragItem(null);
    };

    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [draggItem]);

  return null;
};
