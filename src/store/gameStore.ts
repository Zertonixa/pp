import { create } from "zustand";
import { BlockProps } from "../ui/types/puzzleBlock";
import { fillArray } from "../utils";

interface gameStore {
  score: number;
  blockPanel: BlockProps[];
  draggingBlock: React.RefObject<HTMLDivElement | null> | null;
  isDragging: boolean;
  draggingFigure: BlockProps | null;
  increaseScore: (amount: number) => void;
  setDraggingBlock: (
    block: React.RefObject<HTMLDivElement | null> | null,
  ) => void;
  removeBlock: (blockId: BlockProps["id"]) => void;
  fillBlockPanel: () => void;
  setIsDragging: (dragging: boolean) => void;
  setDraggingFigure: (figure: BlockProps | null) => void;
}

export const useGameStore = create<gameStore>((set) => ({
  score: 0,
  blockPanel: [],
  draggingBlock: null,
  isDragging: false,
  draggingFigure: null,
  increaseScore: (amount) => set((state) => ({ score: state.score + amount })),
  setDraggingBlock: (block) => set(() => ({ draggingBlock: block })),
  removeBlock: (blockId) =>
    set((state) => ({
      blockPanel: state.blockPanel.filter((el) => el.id !== blockId),
    })),
  fillBlockPanel: () => set(() => ({ blockPanel: fillArray() })),
  setIsDragging: (dragging) => set(() => ({ isDragging: dragging })),
  setDraggingFigure: (figure) => set(() => ({ draggingFigure: figure })),
}));
