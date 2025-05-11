import { create } from "zustand";
import { BlockProps } from "../ui/types/puzzleBlock";
import { BoardBlockProps } from "../ui/types/boardBlock";
import { fillArray } from "../utils";
import { boardStart } from "../ui/lib";

const initialState = {
  score: 0,
  blockPanel: [],
  draggingBlock: null,
  isDragging: false,
  draggingFigure: null,
  targetBlock: null,
  gameBoard: boardStart,
}

interface gameStore {
  score: number;
  blockPanel: BlockProps[];
  draggingBlock: React.RefObject<HTMLDivElement | null> | null;
  isDragging: boolean;
  draggingFigure: BlockProps | null;
  targetBlock: string | null;
  gameBoard: BoardBlockProps[][];

  increaseScore: (amount: number) => void;
  setDraggingBlock: (
    block: React.RefObject<HTMLDivElement | null> | null,
  ) => void;
  removeBlock: (blockId: BlockProps["id"]) => void;
  fillBlockPanel: () => void;
  setIsDragging: (dragging: boolean) => void;
  setDraggingFigure: (figure: BlockProps | null) => void;
  setTarget: (target: string | null) => void;
  setGameBoard: (board: BoardBlockProps[][]) => void;
  reset: () => void;
}

export const useGameStore = create<gameStore>((set) => ({
  score: 0,
  blockPanel: [],
  draggingBlock: null,
  isDragging: false,
  draggingFigure: null,
  targetBlock: null,
  gameBoard: boardStart,

  increaseScore: (amount) => set((state) => ({ score: state.score + amount })),
  setDraggingBlock: (block) => set(() => ({ draggingBlock: block })),
  removeBlock: (blockId) =>
    set((state) => ({
      blockPanel: state.blockPanel.filter((el) => el.id !== blockId),
    })),
  fillBlockPanel: () => set(() => ({ blockPanel: fillArray() })),
  setIsDragging: (dragging) => set(() => ({ isDragging: dragging })),
  setDraggingFigure: (figure) => set(() => ({ draggingFigure: figure })),
  setTarget: (target) => set(() => ({ targetBlock: target })),
  setGameBoard: (board) => set(() => ({ gameBoard: board })),
  reset: () => set(() => ({...initialState})),
}));
