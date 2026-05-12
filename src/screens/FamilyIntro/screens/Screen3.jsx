import { familyIntroScreens } from "../../../data/screens";
import styles from "./styles/Screen3.module.css";
import starStyles from "../FamilyIntroScreens.module.css";
import born from "../../../assets/images/familie/fam-intro3.svg";

import star3 from "../../../assets/images/illustrations/star3.svg";
import star8 from "../../../assets/images/illustrations/star8.svg";
import star9 from "../../../assets/images/illustrations/star9.svg";
import star15 from "../../../assets/images/illustrations/star15.svg";

export default function Screen2() {
  const content = familyIntroScreens.screen3;

  return (
    <>
      {/* ── Baggrundsstjerner ── */}
      <img src={star8} alt="" className={`${starStyles.bg} ${styles.s3_s8} floatC`} />
      <img src={star9} alt="" className={`${starStyles.bg} ${styles.s3_s9} floatA`} />
      <img src={star3} alt="" className={`${starStyles.bg} ${styles.s3_s3} floatB`} />
      <img src={star15} alt="" className={`${starStyles.bg} ${styles.s3_s15} floatC`} />

      {/* ── børnen ── */}
      <img
        src={born}
        alt="børnene sidder i skolen"
        className={styles.s3_born}
      />

      {/* ── Tekst ── */}
      <div className={styles.s3_textBlock}>
        <h1 className={styles.s3_title}>{content.title}</h1>
        <p className={styles.s3_body}>{content.body}</p>
      </div>


    </>
  );
}
