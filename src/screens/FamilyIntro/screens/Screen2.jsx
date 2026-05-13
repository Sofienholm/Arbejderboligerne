import { motion } from "framer-motion";
import { familyIntroScreens } from "../../../data/screens";
import styles from "./styles/Screen2.module.css";
import starStyles from "../FamilyIntroScreens.module.css";
import holger2 from "../../../assets/images/familie/fam-intro2.svg";

import star3 from "../../../assets/images/illustrations/star3.svg";
import star8 from "../../../assets/images/illustrations/star8.svg";
import star9 from "../../../assets/images/illustrations/star9.svg";
import star15 from "../../../assets/images/illustrations/star15.svg";

export default function Screen2() {
  const content = familyIntroScreens.screen2;

  return (
    <>
      {/* ── Baggrundsstjerner ── */}
      <motion.div
        className={`${starStyles.bg} ${styles.s2_s8}`}
        initial={{ x: "-20%", opacity: 0, scale: 0.7 }}
        animate={{ x: 0, opacity: 0.4, scale: 1 }}
        transition={{ delay: 0.1, duration: 0.7, ease: "easeOut" }}
      >
        <img src={star8} alt="" className={`${styles.starImg} floatC`} />
      </motion.div>

      <motion.div
        className={`${starStyles.bg} ${styles.s2_s9}`}
        initial={{ y: "20%", opacity: 0, scale: 0.6 }}
        animate={{ y: 0, opacity: 0.4, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
      >
        <img src={star9} alt="" className={`${styles.starImg} floatA`} />
      </motion.div>

      <motion.div
        className={`${starStyles.bg} ${styles.s2_s3}`}
        initial={{ x: "-20%", opacity: 0, scale: 0.8 }}
        animate={{ x: 0, opacity: 0.4, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.7, ease: "easeOut" }}
      >
        <img src={star3} alt="" className={`${styles.starImg} floatB`} />
      </motion.div>

      <motion.div
        className={`${starStyles.bg} ${styles.s2_s15}`}
        initial={{ x: "5%", y: "-10%", opacity: 0, scale: 0.9, rotate: 10 }}
        animate={{ x: 0, y: "0", opacity: 0.4, scale: 1, rotate: 0 }}
        transition={{ delay: 0, duration: 1.5, ease: "easeInOut" }}
      >
        <img src={star15} alt="" className={`${styles.starImg} floatC`} />
      </motion.div>
      {/* ── Tekst ── */}
      <div className={styles.s2_textBlock}>
        <h1 className={styles.s2_title}>{content.title}</h1>
        <p className={styles.s2_body}>{content.body}</p>
      </div>

      {/* ── Holger ── */}
      <img
        src={holger2}
        alt="Holger med gave"
        className={styles.s2_holger}
      />
    </>
  );
}
