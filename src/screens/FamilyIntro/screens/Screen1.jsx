import { familyIntroScreens } from "../../../data/screens";
import styles from "./styles/Screen1.module.css";
import starStyles from "../FamilyIntroScreens.module.css";
import jytte1a from "../../../assets/images/familie/fam-intro1a.svg";
import jytte1b from "../../../assets/images/familie/fam-intro1b.svg";

import star2 from "../../../assets/images/illustrations/star2.svg";
import star4 from "../../../assets/images/illustrations/star4.svg";
import star8 from "../../../assets/images/illustrations/star8.svg";
import star13 from "../../../assets/images/illustrations/star13.svg";
import star16 from "../../../assets/images/illustrations/star16.svg";

export default function Screen1() {
  const content = familyIntroScreens.screen1;
  return (
    <>
      {/* ── Baggrundsstjerner ── */}
      <img src={star8} alt="" className={`${starStyles.bg} ${styles.s1_s8} floatC`} />
      <img src={star2} alt="" className={`${starStyles.bg} ${styles.s1_s2} floatA`} />
      <img src={star13} alt="" className={`${starStyles.bg} ${styles.s1_s13} floatB`} />
      <img src={star16} alt="" className={`${starStyles.bg} ${styles.s1_s16} floatA`} />
      <img src={star4} alt="" className={`${starStyles.bg} ${styles.s1_s4} floatC`} />

      {/* ── Tekst ── */}
      <div className={styles.s1_textBlock}>
        <h1 className={styles.s1_title}>{content.title}</h1>

        <p className={styles.s1_body}>{content.body}</p>
      </div>

      {/* ── Jytte – stående (højre) ── */}
      <img
        src={jytte1b}
        alt="Jytte stående"
        className={styles.s1_jytteStanding}
      />

      {/* ── Jytte – tænkende (venstre nede) ── */}
      <img
        src={jytte1a}
        alt="Jytte tænkende"
        className={styles.s1_jytteSitting}
      />
    </>
  );
}
