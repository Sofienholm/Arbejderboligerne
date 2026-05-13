import { motion } from "framer-motion";
import { familyIntroScreens } from "../../../data/screens";
import styles from "./styles/Screen1.module.css";
import starStyles from "../FamilyIntroScreens.module.css";
import jytte1a from "../../../assets/images/familie/fam-intro1a.svg";
import jytte1b from "../../../assets/images/familie/fam-intro1b.svg";

import star2 from "../../../assets/images/illustrations/star2.svg";
import star4 from "../../../assets/images/illustrations/star4.svg";
import star5 from "../../../assets/images/illustrations/star5.svg";
import star8 from "../../../assets/images/illustrations/star8.svg";
import star13 from "../../../assets/images/illustrations/star13.svg";
import star16 from "../../../assets/images/illustrations/star16.svg";

export default function Screen1() {
  const content = familyIntroScreens.screen1;
  return (
    <>
      {/* ── Baggrundsstjerner ── */}
      {/* ── Baggrundsstjerner ── */}
      <motion.div
        className={`${starStyles.bg} ${styles.s1_s8}`}
        initial={{ x: "-20%", opacity: 0 }}
        animate={{ x: 0, opacity: 0.4 }}
        transition={{ delay: 0.1, duration: 0.7, ease: "easeOut" }}
      >
        <img src={star8} alt="" className={`${styles.starImg} floatC`} />
      </motion.div>

      <motion.div
        className={`${starStyles.bg} ${styles.s1_s2}`}
        initial={{ y: "-20%", opacity: 0, scale: 0.7 }}
        animate={{ y: 0, opacity: 0.4, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
      >
        <img src={star2} alt="" className={`${styles.starImg} floatA`} />
      </motion.div>

      <motion.div
        className={`${starStyles.bg} ${styles.s1_s13}`}
        initial={{ x: "20%", opacity: 0 }}
        animate={{ x: 0, opacity: 0.4 }}
        transition={{ delay: 0.3, duration: 0.7, ease: "easeOut" }}
      >
        <img src={star13} alt="" className={`${styles.starImg} floatB`} />
      </motion.div>

      <motion.div
        className={`${starStyles.bg} ${styles.s1_s16}`}
        initial={{ x: "-10%", opacity: 0, scale: 0.7 }}
        animate={{ x: 0, opacity: 0.4, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.7, ease: "easeOut" }}
      >
        <img src={star16} alt="" className={`${styles.starImg} floatA`} />
      </motion.div>

      <motion.div
        className={`${starStyles.bg} ${styles.s1_s4}`}
        initial={{ y: "20%", opacity: 0 }}
        animate={{ y: 0, opacity: 0.4 }}
        transition={{ delay: 0.5, duration: 0.7, ease: "easeOut" }}
      >
        <img src={star4} alt="" className={`${styles.starImg} floatC`} />
      </motion.div>

      <motion.div
        className={`${starStyles.bg} ${styles.s1_s5}`}
        initial={{ x: "-50%", opacity: 0, scale: 0.3 }}
        animate={{ x: 0, opacity: 0.4, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.7, ease: "easeOut" }}
      >
        <img src={star5} alt="" className={`${styles.starImg} floatC`} />
      </motion.div>

      {/* ── Tekst ── */}
      <div className={styles.s1_textBlock}>
        <h1 className={styles.s1_title}>{content.title}</h1>

        <p className={styles.s1_body}>{content.body}</p>
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
