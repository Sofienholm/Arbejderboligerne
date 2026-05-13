import styles from "./styles/JytteDetail1.module.css";
import { characterDetails } from "../../../data/characters";

import jytteVacuum from "../../../assets/images/familie/jytte/jytte1.svg";

import star7 from "../../../assets/images/illustrations/star7.svg";
import star9 from "../../../assets/images/illustrations/star9.svg";
import star8 from "../../../assets/images/illustrations/star8.svg";
import star3 from "../../../assets/images/illustrations/star3.svg";
import star16 from "../../../assets/images/illustrations/star16.svg";

export default function JytteDetail1() {
  const content = characterDetails.jytte.detail1;

  return (
    <section className={styles.screen}>
      {/* ── Baggrundsstjerner ── */}
      <img
        src={star7}
        alt=""
        className={`${styles.bg} ${styles.s5_s7} floatA`}
      />

      <img
        src={star9}
        alt=""
        className={`${styles.bg} ${styles.s5_s9} floatC`}
      />

      <img
        src={star8}
        alt=""
        className={`${styles.bg} ${styles.s5_s8} floatB`}
      />

      <img
        src={star3}
        alt=""
        className={`${styles.bg} ${styles.s5_s3} floatC`}
      />

      <img
        src={star16}
        alt=""
        className={`${styles.bg} ${styles.s5_s16} floatA`}
      />

      <h1 className={styles.title}>{content.title}</h1>

      <div className={styles.textBlock}>
        <p>{content.textTop}</p>
        <p>{content.textMiddle}</p>
        <p>{content.textBottom}</p>
      </div>

      <img
        className={styles.jytteVacuum}
        src={jytteVacuum}
        alt="Jytte støvsuger"
      />
    </section>
  );
}