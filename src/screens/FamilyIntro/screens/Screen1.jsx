import jytte1a from "../../../assets/images/familie/fam-intro1a.svg";
import jytte1b from "../../../assets/images/familie/fam-intro1b.svg";

import star2  from "../../../assets/images/illustrations/star2.svg";
import star4  from "../../../assets/images/illustrations/star4.svg";
import star8  from "../../../assets/images/illustrations/star8.svg";
import star13 from "../../../assets/images/illustrations/star13.svg";
import star16 from "../../../assets/images/illustrations/star16.svg";

export default function Screen1({ styles }) {
  return (
    <>
      {/* ── Baggrundsstjerner ── */}
      <img src={star8}  alt="" className={`${styles.bg} ${styles.s1_s8}`}  />
      <img src={star2}  alt="" className={`${styles.bg} ${styles.s1_s2}`}  />
      <img src={star13} alt="" className={`${styles.bg} ${styles.s1_s13}`} />
      <img src={star16} alt="" className={`${styles.bg} ${styles.s1_s16}`} />
      <img src={star4}  alt="" className={`${styles.bg} ${styles.s1_s4}`}  />

      {/* ── Tekst ── */}
      <div className={styles.s1_textBlock}>
        <h1 className={styles.s1_title}>LIVET SOM<br />HUSMOR</h1>
        <p className={styles.s1_body}>
          EN TRAVL HVERDAG MED BØRN I HUSSET OG MANGE
          HUSLIGE PLIGTER GIVER JYTTE RIGELIGT AT SE TIL,
          MEN ER DE LYKKELIGE SOM FAMILIE?
        </p>
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