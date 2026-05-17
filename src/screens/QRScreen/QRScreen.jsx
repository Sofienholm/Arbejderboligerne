import styles from "./QRScreen.module.css";
import { sideQuests } from "../../data/sideQuests";

import arrow from "../../assets/images/illustrations/arrow.svg";
import back from "../../assets/images/illustrations/back.svg";

import star7 from "../../assets/images/illustrations/star7.svg";
import star9 from "../../assets/images/illustrations/star9.svg";
import star8 from "../../assets/images/illustrations/star8.svg";
import star3 from "../../assets/images/illustrations/star3.svg";
import star2 from "../../assets/images/illustrations/star2.svg";

export default function QRScreen({ character, onBack }) {
  const content = sideQuests[character];

  if (!content) return null;

  return (
    <section className={styles.screen}>
      {/* ── Baggrundsstjerner ── */}
      <img
        src={star7}
        alt=""
        className={`${styles.bg} ${styles.s5_s7} floatA`}
      />

      <img
        src={star9}
        alt=""
        className={`${styles.bg} ${styles.s5_s9} floatC`}
      />

      <img
        src={star8}
        alt=""
        className={`${styles.bg} ${styles.s5_s8} floatB`}
      />

      <img
        src={star3}
        alt=""
        className={`${styles.bg} ${styles.s5_s3} floatC`}
      />

      <img
        src={star2}
        alt=""
        className={`${styles.bg} ${styles.s5_s2} floatA`}
      />

      <h1 className={styles.title}>
        HAR DU <br />
        MULIGHED <br />
        FOR AT <br />
        HJÆLPE <br />
        MIG?
      </h1>

      <img
        className={styles.characterImage}
        src={content.qr.characterImage}
        alt={character}
      />

      <img
        className={styles.arrow}
        src={arrow}
        alt=""
      />

      <button className={styles.backButton} onClick={onBack}>
        <img
          className={styles.back}
          src={back}
          alt="Vælg et andet familiemedlem"
        />
      </button>

      <img
        className={styles.qrCode}
        src={content.qr.qrCodeImage}
        alt="QR-kode"
      />
    </section>
  );
}