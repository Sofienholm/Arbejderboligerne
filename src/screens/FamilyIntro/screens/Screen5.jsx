import { familyIntroScreens } from "../../../data/screens";
import styles from "./styles/Screen5.module.css";
import starStyles from "../FamilyIntroScreens.module.css";
import JytteKokken from "../../../assets/images/familie/fam-intro5.svg";

import star1 from "../../../assets/images/illustrations/star1.svg";
import star5 from "../../../assets/images/illustrations/star5.svg";
import star8 from "../../../assets/images/illustrations/star8.svg";
import star11 from "../../../assets/images/illustrations/star11.svg";
import star12 from "../../../assets/images/illustrations/star12.svg";
import star14 from "../../../assets/images/illustrations/star14.svg";

export default function Screen5() {
  const content = familyIntroScreens.screen5;

  return (
    <>
      {/* ── Baggrundsstjerner ── */}
      <img src={star1} alt="" className={`${starStyles.bg} ${styles.s5_s1} floatC`} />
      <img src={star5} alt="" className={`${starStyles.bg} ${styles.s5_s5} floatB`} />
      <img src={star8} alt="" className={`${starStyles.bg} ${styles.s5_s8} floatC`} />
      <img src={star11} alt="" className={`${starStyles.bg} ${styles.s5_s11} floatA`} />
      <img src={star12} alt="" className={`${starStyles.bg} ${styles.s5_s12} floatC`} />
      <img src={star14} alt="" className={`${starStyles.bg} ${styles.s5_s14} floatB`} />
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
