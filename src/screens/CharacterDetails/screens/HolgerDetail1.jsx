import { motion } from "framer-motion";
import styles from "./styles/HolgerDetail1.module.css";
import { characterDetails } from "../../../data/characters";
import starStyles from "../../FamilyIntro/FamilyIntroScreens.module.css";

import holgerWork from "../../../assets/images/familie/holger/holger1a.svg";
import holgerSmoke from "../../../assets/images/familie/holger/holger1b.svg";

import star1 from "../../../assets/images/illustrations/star1.svg";
import star12 from "../../../assets/images/illustrations/star12.svg";
import star16 from "../../../assets/images/illustrations/star16.svg";

export default function HolgerDetail1() {
  const content = characterDetails.holger.detail1;

  return (
    <section className={styles.screen}>
      {/* ── Baggrundsstjerner ── */}

      <motion.div
        className={`${starStyles.bg} ${styles.s5_s1}`}
        initial={{ x: "-20%", opacity: 0 }}
        animate={{ x: 0, opacity: 0.4 }}
        transition={{ delay: 0.1, duration: 0.7, ease: "easeOut" }}
      >
        <img src={star1} alt="" className={`${styles.starImg} floatA`} />
      </motion.div>
      <motion.div
        className={`${starStyles.bg} ${styles.s5_s12}`}
        initial={{ x: "-20%", opacity: 0 }}
        animate={{ x: 0, opacity: 0.4 }}
        transition={{ delay: 0.1, duration: 0.7, ease: "easeOut" }}
      >
        <img src={star12} alt="" className={`${styles.starImg} floatA`} />
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
        className={styles.textBlockTop}
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.25, duration: 0.6, ease: "easeOut" }}
      >
        <p>{content.textTop}</p>
      </motion.div>

      <motion.div
        className={styles.textBlockBottom}
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.35, duration: 0.6, ease: "easeOut" }}
      >
        <p>{content.textBottom}</p>
      </motion.div>

      <motion.img
        className={styles.holgerWork}
        src={holgerWork}
        alt="Holger arbejder ved bordet"
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.25, duration: 0.7, ease: "easeOut" }}
      />

      <motion.img
        className={styles.holgerSmoke}
        src={holgerSmoke}
        alt="Holger ryger"
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.45, duration: 0.7, ease: "easeOut" }}
      />
    </section>
  );
}