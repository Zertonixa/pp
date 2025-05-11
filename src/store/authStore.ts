import { create } from "zustand";

const initialState = {
  isDragging: false,
  draggingLetter: null,
  targetBlock: null,
}

interface AuthStore {
  isDragging: boolean;
  draggingLetter: string | null;
  targetBlock: string | null;

  setIsDragging: (dragging: boolean) => void;
  setDraggingLetter: (letter: string | null) => void;
  setTarget: (target: string | null) => void;
  reset: () => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
  isDragging: false,
  draggingLetter: null,
  targetBlock: null,

  setIsDragging: (dragging) => set(() => ({ isDragging: dragging })),
  setDraggingLetter: (letter) => set(() => ({ draggingLetter: letter })),
  setTarget: (target) => set(() => ({ targetBlock: target })),
  reset: () => set(() => ({...initialState})),
}));
