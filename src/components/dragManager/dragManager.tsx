import { useEffect, useRef } from "react";
import { useGameStore } from "../../store/gameStore";
import { dragging } from "../../utils/draggingItems";
import { useCameraStore } from "../../store/cameraStore";

export const DragManager = () => {
  const draggItem = useGameStore((state) => state.draggingBlock);
  const setIsDragging = useGameStore((state) => state.setIsDragging);
  const isDragging = useGameStore.getState().isDragging;
  const setDragItem = useGameStore((state) => state.setDraggingBlock);
  const setDraggingFigure = useGameStore((state) => state.setDraggingFigure);

  const pos = useRef<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const x = useCameraStore.getState().position.x;
  const y = useCameraStore.getState().position.y;

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
      draggItem.current.style.zIndex = "5";
      draggItem.current.style.position = "absolute";
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
      cancelAnimationFrame(animation.current!);
      setIsDragging(false);
      setDraggingFigure(null);
      animation.current = null;

      if (draggItem && draggItem.current) {
        draggItem.current.style.transition = "0.5s ease";
        draggItem.current.style.transform = "translate(0,0)";
        draggItem.current.style.position = "fixed";
        draggItem.current.style.zIndex = "0";
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
