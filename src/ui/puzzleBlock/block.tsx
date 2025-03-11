import styles from "./block.module.scss";

interface BlockProps {
  color: string;
  figure: number[][];
}

export const Block = (props: BlockProps) => (
  <div className={styles.container}>
    {props.figure.map((row, index) => (
      <div key={row[0] + index} className={styles.containerRow}>
        {row.map((number, index) => (
          <div
            className={styles.containerRowElement}
            key={number + index}
            style={{
              backgroundColor: number !== 0 ? props.color : "transparent",
              border: number !== 0 ? "1px solid black" : "none"
            }}
          ></div>
        ))}
      </div>
    ))}
  </div>
);
