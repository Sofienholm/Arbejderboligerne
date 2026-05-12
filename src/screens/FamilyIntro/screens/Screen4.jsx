import { familyIntroScreens } from "../../../data/screens";
import styles from "./styles/Screen4.module.css";
import starStyles from "../FamilyIntroScreens.module.css";
import holgerLomme from "../../../assets/images/familie/fam-intro4.svg";

import star3 from "../../../assets/images/illustrations/star3.svg";
import star8 from "../../../assets/images/illustrations/star8.svg";
import star9 from "../../../assets/images/illustrations/star9.svg";
import star15 from "../../../assets/images/illustrations/star15.svg";

export default function Screen4() {
  const content = familyIntroScreens.screen4;

  return (
    <>
      {/* ── Baggrundsstjerner ── */}
      <img src={star8} alt="" className={`${starStyles.bg} ${styles.s4_s8} floatC`} />
      <img src={star9} alt="" className={`${starStyles.bg} ${styles.s4_s9} floatA`} />
      <img src={star3} alt="" className={`${starStyles.bg} ${styles.s4_s3} floatB`} />
      <img src={star15} alt="" className={`${starStyles.bg} ${styles.s4_s15} floatC`} />

      {/* ── børnen ── */}
      <img
        src={holgerLomme}
        alt="holgers lomme"
        className={styles.s4_holgerLomme}
      />

      {/* ── Tekst ── */}
      <div className={styles.s4_textBlock}>
        <h1 className={styles.s3_title}>{content.title}</h1>
        <p className={styles.s3_body}>{content.body}</p>
        <h2 className={styles.s4_listTitle}>{content.list}</h2>
      </div>


    </>
  );
}
