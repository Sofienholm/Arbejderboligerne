import styles from "./ProgressBar.module.css";

// Tegner én cirkel pr. skærm – udfyldte cirkler viser hvor langt brugeren er
export default function ProgressBar({ total, currentIndex }) {
    return (
        <div className={styles.progressBar}>
            {Array.from({ length: total }).map((_, i) => (
                <div
                    key={i}
                    className={`${styles.circle} ${i <= currentIndex ? styles.circleFilled : ""
                        } ${i === currentIndex ? styles.circleActive : ""}`}
                />
            ))}
        </div>
    );
}