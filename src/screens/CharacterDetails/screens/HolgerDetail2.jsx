import styles from "./styles/HolgerDetail2.module.css";
import { characterDetails } from "../../../data/characters";

import holgerStanding from "../../../assets/images/familie/holger/holger2b.svg";
import holgerReading from "../../../assets/images/familie/holger/holger2a.svg";

import star7 from "../../../assets/images/illustrations/star7.svg";
import star9 from "../../../assets/images/illustrations/star2.svg";
import star8 from "../../../assets/images/illustrations/star13.svg";
import star3 from "../../../assets/images/illustrations/star3.svg";
import star2 from "../../../assets/images/illustrations/star2.svg";

export default function HolgerDetail2() {
  const content = characterDetails.holger.detail2;

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
        src={star2}
        alt=""
        className={`${styles.bg} ${styles.s5_s2} floatA`}
      />

      <h1 className={styles.title}>{content.title}</h1>

      <div className={styles.textBlock}>
        <p>{content.textTop}</p>
        <p>{content.textMiddle}</p>
        <p>{content.textBottom}</p>
      </div>

      <img
        className={styles.holgerReading}
        src={holgerReading}
        alt="Holger læser avis"
      />

      <img
        className={styles.holgerStanding}
        src={holgerStanding}
        alt="Holger står og tænker"
      />
    </section>
  );
}