import { BlockPanel } from "../../components/blockPanel";
import { GameBoard } from "../../components/gameBoard";
import { DragManager } from "../../components/dragManager";
import { ScorePanel } from "../../components/scorePanel";
import styles from "./Game.module.scss";

export const Game = () => {
  return (
    <div className={styles.container}>
      <div className={styles.containerBody}>
        {/* Захват фигурок и их логика перемещения */}
        <DragManager />

        <div className={styles.containerBodyScore}>
          <ScorePanel />
          <div className={styles.containerBodyScoreLeaders}></div>
        </div>

        <GameBoard></GameBoard>

        <div className={styles.containerBodyBlock}>
          <BlockPanel></BlockPanel>
        </div>
      </div>
    </div>
  );
};
