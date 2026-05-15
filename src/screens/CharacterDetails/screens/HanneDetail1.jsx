import { motion } from "framer-motion";
import styles from "./styles/HanneDetail1.module.css";
import { characterDetails } from "../../../data/characters";
import starStyles from "../../FamilyIntro/FamilyIntroScreens.module.css";
import hannePlaying from "../../../assets/images/familie/hanne/hanne1.svg";

import star1 from "../../../assets/images/illustrations/star1.svg";
import star2 from "../../../assets/images/illustrations/star2.svg";
import star16 from "../../../assets/images/illustrations/star16.svg";

export default function HanneDetail1() {
    const content = characterDetails.hanne.detail1;

    return (
        <section className={styles.screen}>
            {/* ── Baggrundsstjerne ── */}
            <motion.div
                className={`${starStyles.bg} ${styles.s2_s1}`}
                initial={{ x: "-20%", opacity: 0 }}
                animate={{ x: 0, opacity: 0.4 }}
                transition={{ delay: 0.1, duration: 0.7, ease: "easeOut" }}
            >
                <img src={star1} alt="" className={`${styles.starImg} floatA`} />
            </motion.div>

            <motion.div
                className={`${starStyles.bg} ${styles.s2_s2}`}
                initial={{ x: "-20%", opacity: 0 }}
                animate={{ x: 0, opacity: 0.4 }}
                transition={{ delay: 0.1, duration: 0.7, ease: "easeOut" }}
            >
                <img src={star2} alt="" className={`${styles.starImg} floatA`} />
            </motion.div>

            <motion.div
                className={`${starStyles.bg} ${styles.s2_s16}`}
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
                <p>{content.textBottom}</p>
            </motion.div>

            <motion.img
                className={styles.hannePlaying}
                src={hannePlaying}
                alt="Hanne leger med dukkehus"
                initial={{ opacity: 0, x: -80 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.7, ease: "easeOut" }}
            />
        </section>
    );
}