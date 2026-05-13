import { familyIntroScreens } from "../../../data/screens";
import styles from "./styles/Screen5.module.css";
import starStyles from "../FamilyIntroScreens.module.css";
import JytteKokken from "../../../assets/images/familie/fam-intro5.svg";

import star7 from "../../../assets/images/illustrations/star7.svg";
import star9 from "../../../assets/images/illustrations/star9.svg";
import star8 from "../../../assets/images/illustrations/star8.svg";
import star3 from "../../../assets/images/illustrations/star3.svg";
import star2 from "../../../assets/images/illustrations/star2.svg";

export default function Screen5() {
  const content = familyIntroScreens.screen5;

  return (
    <>
      {/* ── Baggrundsstjerner ── */}
      <img src={star7} alt="" className={`${starStyles.bg} ${styles.s5_s7} floatC`} />
      <img src={star9} alt="" className={`${starStyles.bg} ${styles.s5_s9} floatB`} />
      <img src={star8} alt="" className={`${starStyles.bg} ${styles.s5_s8} floatC`} />
      <img src={star3} alt="" className={`${starStyles.bg} ${styles.s5_s3} floatA`} />
      <img src={star2} alt="" className={`${starStyles.bg} ${styles.s5_s2} floatC`} />
     
      {/* ── børnen ── */}
      <img
        src={JytteKokken}
        alt="jytte i køknet"
        className={styles.s5_JytteKokken}
      />

      {/* ── Tekst ── */}
      <div className={styles.s5_textBlock}>
        <h1 className={styles.s5_title}>
          <span className={styles.s5_titleBig}>ET MERE</span>
          <span className={styles.s5_titleSmall}>MODERNE HJEM</span>
        </h1>
        <p className={styles.s5_body}>{content.body}</p>
      </div>


    </>
  );
}
