import { familyIntroScreens } from "../../../data/screens";
import styles from "./styles/Screen2.module.css";
import starStyles from "../FamilyIntroScreens.module.css";
import holger2 from "../../../assets/images/familie/fam-intro2.svg";

import star3 from "../../../assets/images/illustrations/star3.svg";
import star8 from "../../../assets/images/illustrations/star8.svg";
import star9 from "../../../assets/images/illustrations/star9.svg";
import star15 from "../../../assets/images/illustrations/star15.svg";

export default function Screen2() {
  const content = familyIntroScreens.screen2;

  return (
    <>
      {/* ── Baggrundsstjerner ── */}
      <img src={star8} alt="" className={`${starStyles.bg} ${styles.s2_s8} floatC`} />
      <img src={star9} alt="" className={`${starStyles.bg} ${styles.s2_s9} floatA`} />
      <img src={star3} alt="" className={`${starStyles.bg} ${styles.s2_s3} floatB`} />
      <img src={star15} alt="" className={`${starStyles.bg} ${styles.s2_s15} floatC`} />

      {/* ── Tekst ── */}
      <div className={styles.s2_textBlock}>
        <h1 className={styles.s2_title}>{content.title}</h1>
        <p className={styles.s2_body}>{content.body}</p>
      </div>

      {/* ── Holger ── */}
      <img
        src={holger2}
        alt="Holger med gave"
        className={styles.s2_holger}
      />
    </>
  );
}
