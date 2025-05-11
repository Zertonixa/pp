import { LetterBlock } from "../../ui/letterBlock";
import styles from "./inputBlock.module.scss";


interface InputBlockProps {
    setFunc: (str: string) => void;
    type: "password" | "email" | "nickname";
    value: string;
}


export const InputBlock = ({setFunc, value, type}: InputBlockProps) => {

    return (
        <div className={styles.container}>
            <div className={styles.containerBody}>
                {value.split("").map((letter, index) => 
                    <LetterBlock letter={letter}/>
                )}
            </div>
        </div>
    )

}