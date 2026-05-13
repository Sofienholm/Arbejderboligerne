import styles from "./styles/NielsDetail2.module.css";
import { characterDetails } from "../../../data/characters";

import nielsFriends from "../../../assets/images/familie/niels/niels2.svg";

import star1 from "../../../assets/images/illustrations/star1.svg";
import star2 from "../../../assets/images/illustrations/star2.svg";
import star3 from "../../../assets/images/illustrations/star3.svg";
import star4 from "../../../assets/images/illustrations/star4.svg";


export default function NielsDetail2() {
  const content = characterDetails.niels.detail2;

  return (
    <section className={styles.screen}>
      {/* ── Baggrundsstjerner ── */}
      <img
        src={star1}
        alt=""
        className={`${styles.bg} ${styles.s5_s1} floatA`}
      />

      <img
        src={star2}
        alt=""
        className={`${styles.bg} ${styles.s5_s2} floatC`}
      />

      <img
        src={star3}
        alt=""
        className={`${styles.bg} ${styles.s5_s3} floatB`}
      />

      <img
        src={star4}
        alt=""
        className={`${styles.bg} ${styles.s5_s4} floatC`}
      />


      <h1 className={styles.title}>{content.title}</h1>

      <div className={styles.textBlock}>
        <p>{content.textTop}</p>
        <p>{content.textBottom}</p>
      </div>

      <img
        className={styles.nielsFriends}
        src={nielsFriends}
        alt="Niels med andre drenge"
      />
    </section>
  );
}