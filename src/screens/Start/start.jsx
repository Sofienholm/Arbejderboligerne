import styles from "./start.module.css";
import familieImg from "../../assets/images/familie/start-fam.svg";

export default function Splash({ onStart }) {
  return (
    <div className={styles.container} onClick={onStart}>
      <header className={styles.header}>
        <span className={styles.arbejderbolig}>ARBEJDERBOLIG</span>
        <h1 className={styles.year}>1955</h1>
      </header>

      <div className={styles.familieWrapper}>
        <img
          src={familieImg}
          alt="Familien Hansen"
          className={styles.familieImg}
        />
        <div className={styles.billedePlaceholder} />
      </div>
    </div>
  );
}
