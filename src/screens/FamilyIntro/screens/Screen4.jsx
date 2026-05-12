import { motion } from "framer-motion";
import { familyIntroScreens } from "../../../data/screens";
import styles from "./styles/Screen4.module.css";
import starStyles from "../FamilyIntroScreens.module.css";
import holgerLomme from "../../../assets/images/familie/fam-intro4.svg";

import star3 from "../../../assets/images/illustrations/star3.svg";
import star8 from "../../../assets/images/illustrations/star8.svg";
import star9 from "../../../assets/images/illustrations/star9.svg";
import star15 from "../../../assets/images/illustrations/star15.svg";

export default function Screen4() {
  const content = familyIntroScreens.screen4;

  return (
    <>
      {/* ── Baggrundsstjerner ── */}
      <img src={star8} alt="" className={`${starStyles.bg} ${styles.s4_s8} floatC`} />
      <img src={star9} alt="" className={`${starStyles.bg} ${styles.s4_s9} floatA`} />
      <img src={star3} alt="" className={`${starStyles.bg} ${styles.s4_s3} floatB`} />
      <img src={star15} alt="" className={`${starStyles.bg} ${styles.s4_s15} floatC`} />

      {/* ── børnen ── */}
      <img
        src={holgerLomme}
        alt="holgers lomme"
        className={styles.s4_holgerLomme}
      />

      {/* ── Tekst ── */}
      <div className={styles.s4_textBlock}>
        <h1 className={styles.s4_title}>{content.title}</h1>
        <p className={styles.s4_body}>{content.body}</p>
        <ul className={styles.s4_list}>
          {content.list.map((item, index) => (
            <motion.li
              key={item}
              initial={{
                y: 220,
                opacity: 0,
                scaleY: 1.16,
              }}
              animate={{
                y: [220, -6, 10, -2, 0],
                opacity: [0, 1, 1, 1, 1],
                scaleY: [1.16, 0.78, 1.08, 0.96, 1],
                scaleX: [0.96, 1.08, 0.98, 1.02, 1],
              }}
              transition={{
                delay: 1 + index * 0.18,
                duration: 0.62,
                ease: ["easeOut", "easeIn", "easeOut", "easeIn"],
              }}
            >
              {item}
            </motion.li>
          ))}
        </ul>
      </div>


    </>
  );
}
