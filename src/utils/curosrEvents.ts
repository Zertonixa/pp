export function clickTrigger(posX: number, posY: number) {
  const element = document.elementFromPoint(posX, posY);
  if (element) {
    const event = new MouseEvent("click", {
      bubbles: true,
      cancelable: true,
      clientX: posX,
      clientY: posY,
    });
    element.dispatchEvent(event);
  }
}

export function mouseDownTrigger(posX: number, posY: number) {
  const element = document.elementFromPoint(posX, posY);
  if (element) {
    const event = new MouseEvent("mousedown", {
      bubbles: true,
      cancelable: true,
      clientX: posX,
      clientY: posY,
    });
    element.dispatchEvent(event);
  }
}

export function mouseUpTrigger(posX: number, posY: number) {
  const element = document.elementFromPoint(posX, posY);
  if (element) {
    const event = new MouseEvent("mouseup", {
      bubbles: true,
      cancelable: true,
      clientX: posX,
      clientY: posY,
    });
    element.dispatchEvent(event);
  }
}

export function mouseEnterTrigger(posX: number, posY: number, ref: React.RefObject<any>) {
  const element = document.elementFromPoint(posX, posY);
  if (element && ref.current !== element) {
    const event = new MouseEvent("mouseover", {
      bubbles: true,
      cancelable: true,
      clientX: posX,
      clientY: posY,
    });
    element.dispatchEvent(event);
    ref.current = element;
  }
}
