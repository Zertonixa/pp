import { useEffect, useState } from "react";
import styles from "./blockPanel.module.scss";
import { Block } from "../puzzleBlock";
import { fillArray } from "../../utils";

export const BlockPanel = () => {
    
    const [blockArray, setBlockArray] = useState<{id: string, figure: number[][], color: string}[]>([]);

    useEffect(() => {
        if (blockArray.length === 0) setBlockArray(fillArray());
    }, [blockArray]);

    return (
        <>
            <div className={styles.container}>
                {blockArray.map((block) => (
                    <Block key={block.id} figure={block.figure} color={block.color} />
                ))}
            </div>
            <button style={{width: 200, height: 200}} onClick={() => setBlockArray((prev) => prev.filter((_, index) => index !== 0))}>
                    Удалить первый блок
            </button>
        </>
    );
};
