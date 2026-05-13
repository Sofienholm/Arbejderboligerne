import styles from "./styles/NielsDetail1.module.css";
import { characterDetails } from "../../../data/characters";

import nielsPlaying from "../../../assets/images/familie/niels/niels1a.svg";
import nielsHomework from "../../../assets/images/familie/niels/niels1b.svg";

import star7 from "../../../assets/images/illustrations/star7.svg";
import star9 from "../../../assets/images/illustrations/star9.svg";
import star8 from "../../../assets/images/illustrations/star8.svg";
import star12 from "../../../assets/images/illustrations/star12.svg";

export default function NielsDetail1() {
  const content = characterDetails.niels.detail1;

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
        src={star12}
        alt=""
        className={`${styles.bg} ${styles.s5_s12} floatA`}
      />

      <h1 className={styles.title}>{content.title}</h1>

      <div className={styles.textBlockTop}>
        <p>{content.textTop}</p>
      </div>

      <div className={styles.textBlockBottom}>
        <p>{content.textBottom}</p>
      </div>

      <img
        className={styles.nielsPlaying}
        src={nielsPlaying}
        alt="Niels leger"
      />

      <img
        className={styles.nielsHomework}
        src={nielsHomework}
        alt="Niels laver lektier"
      />
    </section>
  );
}