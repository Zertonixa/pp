import styles from "./letterBlock.module.scss";


interface LetterBlockProps {
    letter: string;
}


export const LetterBlock = ({letter}: LetterBlockProps) => (
    <div className={styles.container}>
        <span className={styles.containerLetter}>{letter}</span>
    </div>
)