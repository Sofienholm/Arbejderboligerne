import { familyIntroScreens } from "../../../data/screens";
import styles from "./styles/Screen3.module.css";
import starStyles from "../FamilyIntroScreens.module.css";
import born from "../../../assets/images/familie/fam-intro3.svg";

import star1 from "../../../assets/images/illustrations/star1.svg";
import star5 from "../../../assets/images/illustrations/star5.svg";
import star8 from "../../../assets/images/illustrations/star8.svg";
import star11 from "../../../assets/images/illustrations/star11.svg";
import star12 from "../../../assets/images/illustrations/star12.svg";
import star15 from "../../../assets/images/illustrations/star15.svg";

export default function Screen3() {
  const content = familyIntroScreens.screen3;

  return (
    <>
      {/* ── Baggrundsstjerner ── */}
        <img src={star1} alt="" className={`${starStyles.bg} ${styles.s3_s1} floatC`} />
      <img src={star8} alt="" className={`${starStyles.bg} ${styles.s3_s8} floatC`} />
      <img src={star11} alt="" className={`${starStyles.bg} ${styles.s3_s11} floatA`} />
      <img src={star5} alt="" className={`${starStyles.bg} ${styles.s3_s5} floatB`} />
      <img src={star12} alt="" className={`${starStyles.bg} ${styles.s3_s12} floatC`} />
      <img src={star14} alt="" className={`${starStyles.bg} ${styles.s3_s14} floatB`} />
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
