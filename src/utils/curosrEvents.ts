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