import { motion } from "framer-motion";
import styles from "./styles/NielsDetail1.module.css";
import { characterDetails } from "../../../data/characters";

import nielsPlaying from "../../../assets/images/familie/niels/niels1a.svg";
import nielsHomework from "../../../assets/images/familie/niels/niels1b.svg";

import star7 from "../../../assets/images/illustrations/star7.svg";
import star9 from "../../../assets/images/illustrations/star9.svg";
import star8 from "../../../assets/images/illustrations/star8.svg";
import star12 from "../../../assets/images/illustrations/star12.svg";

export default function NielsDetail1() {
  const content = characterDetails.niels.detail1;

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
        src={star12}
        alt=""
        className={`${styles.bg} ${styles.s5_s12} floatA`}
      />

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
        className={styles.nielsPlaying}
        src={nielsPlaying}
        alt="Niels leger"
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.35, duration: 0.7, ease: "easeOut" }}
      />

      <motion.img
        className={styles.nielsHomework}
        src={nielsHomework}
        alt="Niels laver lektier"
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.45, duration: 0.7, ease: "easeOut" }}
      />
    </section>
  );
}