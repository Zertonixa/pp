import styles from "./authForm.module.scss";
import { InputBlock } from "../../components/inputBlock/inputBlock";
import { LetterBlock } from "../../ui/letterBlock";


export const AuthForm = () => {

    

    return (
        <div className={styles.container}>
            <div className={styles.containerEmail}>
                <InputBlock type={"email"} setFunc={() => null} value={"NONE"}/>
            </div>
            <LetterBlock letter={"O"}/>
        </div>
    )

}