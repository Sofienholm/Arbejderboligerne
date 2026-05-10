import styles from "./Guide.module.css";

export default function Guide({ onNext }) {
  return (
    <section className={styles.screen}>
      <h1 className={styles.title}>SÅDAN HJÆLPER DU</h1>

      <div className={styles.steps}>
        <p>1. Scan QR-koden.</p>
        <p>2. Gå ind i lejligheden.</p>
        <p>3. Find spor i rummet.</p>
        <p>4. Hjælp familien med dilemmaet.</p>
      </div>

      <button className={styles.button} onClick={onNext}>
        ÅBEN QR-KODE
      </button>
    </section>
  );
}