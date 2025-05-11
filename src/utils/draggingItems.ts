const lerp = (start: number, end: number, amount: number) =>
  start + (end - start) * amount;

const clamp = (value: number, min: number, max: number) =>
  Math.max(min, Math.min(max, value));

export const dragging = (
  animation: React.RefObject<number | null>,
  object: React.RefObject<HTMLElement | null>,
  pos: React.RefObject<{ x: number; y: number }>,
  targetX: () => number,
  targetY: () => number,
  isDragging: () => boolean,
) => {
  const updateCursor = () => {
    if (!isDragging()) {
      animation.current = null;
      return;
    }

    const x = targetX();
    const y = targetY();

    const dx = Math.abs(x - pos.current.x);
    const dy = Math.abs(y - pos.current.y);
    const distance = Math.hypot(dx, dy);
    const lerpFactor = clamp(distance / 100, 0.1, 0.2);

    pos.current.x = lerp(pos.current.x, x, lerpFactor);
    pos.current.y = lerp(pos.current.y, y, lerpFactor);

    if (object.current) {
      object.current.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px)`;
      object.current.style.transition = `0.1s ease`;
    }

    animation.current = requestAnimationFrame(updateCursor);
  };

  if (animation.current === null) {
    animation.current = requestAnimationFrame(updateCursor);
  }
};
