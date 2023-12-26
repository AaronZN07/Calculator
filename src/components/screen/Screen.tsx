import styles from "./Screen.module.scss";
import { ScreenProps } from "./types";

const Screen = ({ calculate, result }: ScreenProps) => {
  return (
    <div className={styles.screen}>
      <div className={styles.result}>({result})</div>
      <div className={styles.operation}>{calculate || "0"}</div>
    </div>
  );
};

export default Screen;
