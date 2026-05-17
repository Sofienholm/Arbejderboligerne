import styles from "./styles/JytteDetail2.module.css";
import { characterDetails } from "../../../data/characters";

import starStyles from "../../FamilyIntro/FamilyIntroScreens.module.css";
import { motion } from "framer-motion";
import jytteSitting from "../../../assets/images/familie/jytte/jytte2a.svg";
import jytteStanding from "../../../assets/images/familie/jytte/jytte2b.svg";

import star7 from "../../../assets/images/illustrations/star7.svg";
import star9 from "../../../assets/images/illustrations/star9.svg";
import star8 from "../../../assets/images/illustrations/star8.svg";
import star3 from "../../../assets/images/illustrations/star7.svg";
import star14 from "../../../assets/images/illustrations/star14.svg";

export default function JytteDetail2() {
  const content = characterDetails.jytte.detail2;

  return (
    <section className={styles.screen}>
      {/* ── Baggrundsstjerner ── */}
      <motion.div
        className={`${starStyles.bg} ${styles.s5_s7}`}
        initial={{ x: "20%", opacity: 0 }}
        animate={{ x: 0, opacity: 0.4 }}
        transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
      >
        <img src={star7} alt="" className={`${styles.starImg} floatB`} />
      </motion.div>
      <motion.div
        className={`${starStyles.bg} ${styles.s5_s9}`}
        initial={{ x: "20%", opacity: 0 }}
        animate={{ x: 0, opacity: 0.4 }}
        transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
      >
        <img src={star9} alt="" className={`${styles.starImg} floatB`} />
      </motion.div>
      <motion.div
        className={`${starStyles.bg} ${styles.s5_s8}`}
        initial={{ x: "20%", opacity: 0 }}
        animate={{ x: 0, opacity: 0.4 }}
        transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
      >
        <img src={star8} alt="" className={`${styles.starImg} floatB`} />
      </motion.div>

      <motion.div
        className={`${starStyles.bg} ${styles.s5_s3}`}
        initial={{ x: "20%", opacity: 0 }}
        animate={{ x: 0, opacity: 0.4 }}
        transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
      >
        <img src={star3} alt="" className={`${styles.starImg} floatB`} />
      </motion.div>

      <motion.div
        className={`${starStyles.bg} ${styles.s5_s14}`}
        initial={{ x: "20%", opacity: 0 }}
        animate={{ x: 0, opacity: 0.4 }}
        transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
      >
        <img src={star14} alt="" className={`${styles.starImg} floatB`} />
      </motion.div>


      <h1 className={styles.title}>{content.title}</h1>

      <div className={styles.textBlock}>
        <p>{content.textTop}</p>
        <p>{content.textBottom}</p>
      </div>

      <img
        className={styles.jytteSitting}
        src={jytteSitting}
        alt="Jytte sidder og tænker"
      />

      <img
        className={styles.jytteStanding}
        src={jytteStanding}
        alt="Jytte står"
      />
    </section>
  );
}