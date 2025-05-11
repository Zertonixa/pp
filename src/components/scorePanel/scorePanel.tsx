import { useGameStore } from "../../store/gameStore";
import styles from "./scorePanel.module.scss";

export const ScorePanel = () => {
  const score = useGameStore((state) => state.score);

  return (
    <div className={styles.container}>
      <div className={styles.containerScore}>{score}</div>
    </div>
  );
};
