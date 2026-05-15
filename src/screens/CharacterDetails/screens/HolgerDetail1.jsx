import styles from "./styles/HolgerDetail1.module.css";
import { characterDetails } from "../../../data/characters";

import holgerWork from "../../../assets/images/familie/holger/holger1a.svg";
import holgerSmoke from "../../../assets/images/familie/holger/holger1b.svg";

import star1 from "../../../assets/images/illustrations/star1.svg";
import star12 from "../../../assets/images/illustrations/star12.svg";
import star16 from "../../../assets/images/illustrations/star16.svg";

export default function HolgerDetail1() {
  const content = characterDetails.holger.detail1;

  return (
    <section className={styles.screen}>
      {/* ── Baggrundsstjerner ── */}
      <img
        src={star1}
        alt=""
        className={`${styles.bg} ${styles.s5_s1} floatA`}
      />

      <img
        src={star12}
        alt=""
        className={`${styles.bg} ${styles.s5_s12} floatC`}
      />

      <img
        src={star16}
        alt=""
        className={`${styles.bg} ${styles.s5_s16} floatB`}
      />

      <h1 className={styles.title}>{content.title}</h1>

      <div className={styles.textBlockTop}>
        <p>{content.textTop}</p>
      </div>

      <div className={styles.textBlockBottom}>
        <p>{content.textBottom}</p>
      </div>

      <img
        className={styles.holgerWork}
        src={holgerWork}
        alt="Holger arbejder ved bordet"
      />

      <img
        className={styles.holgerSmoke}
        src={holgerSmoke}
        alt="Holger ryger"
      />
    </section>
  );
}