import { motion } from "framer-motion";
import styles from "./styles/JytteDetail1.module.css";
import starStyles from "../../FamilyIntro/FamilyIntroScreens.module.css";
import { characterDetails } from "../../../data/characters";

import jytteVacuum from "../../../assets/images/familie/jytte/jytte1.svg";

import star7 from "../../../assets/images/illustrations/star7.svg";
import star9 from "../../../assets/images/illustrations/star9.svg";
import star8 from "../../../assets/images/illustrations/star8.svg";
import star3 from "../../../assets/images/illustrations/star3.svg";
import star16 from "../../../assets/images/illustrations/star16.svg";

export default function JytteDetail1() {
  const content = characterDetails.jytte.detail1;

  return (
    <section className={styles.screen}>
      {/* ── Baggrundsstjerner ── */}

      <motion.div
        className={`${starStyles.bg} ${styles.s5_s7}`}
        initial={{ x: "-20%", opacity: 0 }}
        animate={{ x: 0, opacity: 0.4 }}
        transition={{ delay: 0.1, duration: 0.7, ease: "easeOut" }}
      >
        <img src={star7} alt="" className={`${styles.starImg} floatA`} />
      </motion.div>


      <motion.div
        className={`${starStyles.bg} ${styles.s5_s9}`}
        initial={{ x: "-20%", opacity: 0 }}
        animate={{ x: 0, opacity: 0.4 }}
        transition={{ delay: 0.1, duration: 0.7, ease: "easeOut" }}
      >
        <img src={star9} alt="" className={`${styles.starImg} floatA`} />
      </motion.div>

      <motion.div
        className={`${starStyles.bg} ${styles.s5_s8}`}
        initial={{ x: "-20%", opacity: 0 }}
        animate={{ x: 0, opacity: 0.4 }}
        transition={{ delay: 0.1, duration: 0.7, ease: "easeOut" }}
      >
        <img src={star8} alt="" className={`${styles.starImg} floatA`} />
      </motion.div>
      <motion.div
        className={`${starStyles.bg} ${styles.s5_s3}`}
        initial={{ x: "-20%", opacity: 0 }}
        animate={{ x: 0, opacity: 0.4 }}
        transition={{ delay: 0.1, duration: 0.7, ease: "easeOut" }}
      >
        <img src={star3} alt="" className={`${styles.starImg} floatA`} />
      </motion.div>
      <motion.div
        className={`${starStyles.bg} ${styles.s5_s16}`}
        initial={{ x: "-20%", opacity: 0 }}
        animate={{ x: 0, opacity: 0.4 }}
        transition={{ delay: 0.1, duration: 0.7, ease: "easeOut" }}
      >
        <img src={star16} alt="" className={`${styles.starImg} floatA`} />
      </motion.div>
      <motion.h1
        className={styles.title}
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.15, duration: 0.6, ease: "easeOut" }}
      >
        {content.title}
      </motion.h1>

      <motion.div
        className={styles.textBlock}
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
      >
        <p>{content.textTop}</p>
        <p>{content.textMiddle}</p>
        <p>{content.textBottom}</p>
      </motion.div>

      <motion.img
        className={styles.jytteVacuum}
        src={jytteVacuum}
        alt="Jytte støvsuger"
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4, duration: 0.7, ease: "easeOut" }}
      />
    </section>
  );
}