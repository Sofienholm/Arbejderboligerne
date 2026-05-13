import { motion } from "framer-motion";
import { familyIntroScreens } from "../../../data/screens";
import styles from "./styles/Screen3.module.css";
import starStyles from "../FamilyIntroScreens.module.css";
import born from "../../../assets/images/familie/fam-intro3.svg";

import star1 from "../../../assets/images/illustrations/star1.svg";
import star5 from "../../../assets/images/illustrations/star5.svg";
import star8 from "../../../assets/images/illustrations/star8.svg";
import star11 from "../../../assets/images/illustrations/star11.svg";
import star12 from "../../../assets/images/illustrations/star12.svg";
import star14 from "../../../assets/images/illustrations/star14.svg";

export default function Screen3() {
  const content = familyIntroScreens.screen3;

  return (
    <>
      {/* ── Baggrundsstjerner ── */}
      <motion.div
        className={`${starStyles.bg} ${styles.s3_s1}`}
        initial={{ x: "-20%", opacity: 0, scale: 0.7 }}
        animate={{ x: 0, opacity: 0.4, scale: 1 }}
        transition={{ delay: 0.1, duration: 0.7, ease: "easeOut" }}
      >
        <img src={star1} alt="" className={`${styles.starImg} floatC`} />
      </motion.div>

      <motion.div
        className={`${starStyles.bg} ${styles.s3_s5}`}
        initial={{ x: "20%", opacity: 0 }}
        animate={{ x: 0, opacity: 0.4 }}
        transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
      >
        <img src={star5} alt="" className={`${styles.starImg} floatB`} />
      </motion.div>

      <motion.div
        className={`${starStyles.bg} ${styles.s3_s8}`}
        initial={{ y: "-20%", opacity: 0, scale: 0.6 }}
        animate={{ y: 0, opacity: 0.4, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.7, ease: "easeOut" }}
      >
        <img src={star8} alt="" className={`${styles.starImg} floatC`} />
      </motion.div>

      <motion.div
        className={`${starStyles.bg} ${styles.s3_s11}`}
        initial={{ y: "-20%", opacity: 0 }}
        animate={{ y: 0, opacity: 0.4 }}
        transition={{ delay: 0.4, duration: 0.7, ease: "easeOut" }}
      >
        <img src={star11} alt="" className={`${styles.starImg} floatA`} />
      </motion.div>

      <motion.div
        className={`${starStyles.bg} ${styles.s3_s12}`}
        initial={{ x: "-20%", opacity: 0, scale: 0.8 }}
        animate={{ x: 0, opacity: 0.4, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.7, ease: "easeOut" }}
      >
        <img src={star12} alt="" className={`${styles.starImg} floatC`} />
      </motion.div>

      <motion.div
        className={`${starStyles.bg} ${styles.s3_s14}`}
        initial={{ x: "20%", opacity: 0, scale: 0.7 }}
        animate={{ x: 0, opacity: 0.4, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.7, ease: "easeOut" }}
      >
        <img src={star14} alt="" className={`${styles.starImg} floatB`} />
      </motion.div>
      {/* ── børnen ── */}
      <img
        src={born}
        alt="børnene sidder i skolen"
        className={styles.s3_born}
      />

      {/* ── Tekst ── */}
      <div className={styles.s3_textBlock}>
        <h1 className={styles.s3_title}>{content.title}</h1>
        <p className={styles.s3_body}>{content.body}</p>
      </div>


    </>
  );
}
