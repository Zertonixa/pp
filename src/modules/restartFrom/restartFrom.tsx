import { useEffect, useRef, useState } from "react";
import { useGameStore } from "../../store/gameStore";
import styles from "./restartForm.module.scss";
import { Restart } from "../../ui/assets/restart";
import { checkEndGame } from "../../utils/gameEvents";


export const EndFrom = () => {

    const score = useGameStore().score;
    const board = useGameStore().gameBoard;
    const blockPanel = useGameStore().blockPanel;

    const reset = useGameStore().reset;
    
    const [display, setDisplay] = useState<boolean>(false);

    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (checkEndGame(board, blockPanel)) {
            setDisplay(true)
        }
    }, [board])

    const handleRestart = () => {
        reset();
        setDisplay(false);
        if (ref.current) {
        }
    }

    const handleSpin = () => {
        if (ref.current) {
            ref.current.classList.remove(styles.spin);
            ref.current.offsetWidth;
            ref.current.classList.add(styles.spin);
        }
    }

    return (
        <div className={styles.container} style={{display: display ? "flex" : "none"}}>
            <div className={styles.containerBody}>
                <div className={styles.containerBodyScore}>
                    <span className={styles.containerBodyScoreText}>Score: {score}</span>
                </div>
                <div className={styles.containerBodyRestart}>
                    <span className={styles.containerBodyRestartText}>One more?</span>
                    <div ref={ref} className={styles.containerBodyRestartButton} onMouseEnter={() => handleSpin()} onMouseDown={() => handleRestart()}>
                        <Restart/>
                    </div>
                </div>
            </div>
        </div>
    )

}