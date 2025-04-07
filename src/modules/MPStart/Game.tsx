import { useState } from "react";
import { BlockPanel } from "../../components/blockPanel";
import { BlockProps } from "../../ui/types/puzzleBlock";
import { GameBoard } from "../../components/gameBoard";
import { DragManager } from "../../components/dragManager";

export const Game = () => {
  const [draggbleItem, setDraggbleItem] = useState<BlockProps | null>(null);

  return (
    <div>
      <DragManager />
      <GameBoard></GameBoard>
      <BlockPanel></BlockPanel>
    </div>
  );
};
