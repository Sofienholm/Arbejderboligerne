import styles from "./styles/HolgerDetail2.module.css";
import { characterDetails } from "../../../data/characters";
import starStyles from "../../FamilyIntro/FamilyIntroScreens.module.css";
import { motion } from "framer-motion";

import holgerStanding from "../../../assets/images/familie/holger/holger2b.svg";
import holgerReading from "../../../assets/images/familie/holger/holger2a.svg";

import star7 from "../../../assets/images/illustrations/star7.svg";
import star9 from "../../../assets/images/illustrations/star2.svg";
import star8 from "../../../assets/images/illustrations/star13.svg";
import star3 from "../../../assets/images/illustrations/star3.svg";
import star2 from "../../../assets/images/illustrations/star2.svg";

export default function HolgerDetail2() {
  const content = characterDetails.holger.detail2;

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
        className={`${starStyles.bg} ${styles.s5_s2}`}
        initial={{ x: "20%", opacity: 0 }}
        animate={{ x: 0, opacity: 0.4 }}
        transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
      >
        <img src={star2} alt="" className={`${styles.starImg} floatB`} />
      </motion.div>

      <h1 className={styles.title}>{content.title}</h1>

      <div className={styles.textBlock}>
        <p>{content.textTop}</p>
        <p>{content.textMiddle}</p>
        <p>{content.textBottom}</p>
      </div>

      <img
        className={styles.holgerReading}
        src={holgerReading}
        alt="Holger læser avis"
      />

      <img
        className={styles.holgerStanding}
        src={holgerStanding}
        alt="Holger står og tænker"
      />
    </section>
  );
}