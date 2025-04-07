import { create } from "zustand";

interface CameraStore {
  position: { x: number; y: number };
  cameraError: boolean;
  isFist: boolean;
  setPosition: (coordinates: { x: number; y: number }) => void;
  setFist: (fist: boolean) => void;
  setCameraError: (error: boolean) => void;
}

export const useCameraStore = create<CameraStore>((set) => ({
  position: { x: window.innerWidth / 2, y: window.innerHeight / 2 },
  cameraError: false,
  isFist: false,

  setPosition: (coordinates) =>
    set({
      position: {
        x: coordinates.x,
        y: coordinates.y,
      },
    }),

  setFist: (fist) => set({ isFist: fist }),

  setCameraError: (error) => set({ cameraError: error }),
}));
