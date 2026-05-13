import { motion } from "framer-motion";
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
      <motion.div
        className={`${starStyles.bg} ${styles.s5_s7}`}
        initial={{ y: "-20%", opacity: 0, scale: 0.7 }}
        animate={{ y: 0, opacity: 0.4, scale: 1 }}
        transition={{ delay: 0.1, duration: 0.7, ease: "easeOut" }}
      >
        <img src={star7} alt="" className={`${styles.starImg} floatC`} />
      </motion.div>

      <motion.div
        className={`${starStyles.bg} ${styles.s5_s9}`}
        initial={{ y: "-20%", opacity: 0, scale: 0.6 }}
        animate={{ y: 0, opacity: 0.4, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
      >
        <img src={star9} alt="" className={`${styles.starImg} floatB`} />
      </motion.div>

      <motion.div
        className={`${starStyles.bg} ${styles.s5_s8}`}
        initial={{ y: "-30%", opacity: 0 }}
        animate={{ y: 0, opacity: 0.4 }}
        transition={{ delay: 0.3, duration: 0.7, ease: "easeOut" }}
      >
        <img src={star8} alt="" className={`${styles.starImg} floatC`} />
      </motion.div>

      <motion.div
        className={`${starStyles.bg} ${styles.s5_s3}`}
        initial={{ y: "10%", opacity: 0, scale: 0.6 }}
        animate={{ y: 0, opacity: 0.4, scale: 1 }}
        transition={{
          delay: 0.6,
          duration: 1.2,
          type: "spring",
          stiffness: 70,
          damping: 15,
        }}
      >
        <img src={star3} alt="" className={`${styles.starImg} floatA`} />
      </motion.div>

      <motion.div
        className={`${starStyles.bg} ${styles.s5_s2}`}
        initial={{ y: "-30%", opacity: 0, scale: 0.8 }}
        animate={{ y: 0, opacity: 0.4, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.7, ease: "easeOut" }}
      >
        <img src={star2} alt="" className={`${styles.starImg} floatC`} />
      </motion.div>

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
