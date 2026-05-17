
import { motion } from "framer-motion";
import styles from "./styles/HolgerDetail2.module.css";
import { characterDetails } from "../../../data/characters";
import starStyles from "../../FamilyIntro/FamilyIntroScreens.module.css";

import hanneMother from "../../../assets/images/familie/hanne/hanne2.svg";

import star5 from "../../../assets/images/illustrations/star5.svg";
import star8 from "../../../assets/images/illustrations/star8.svg";
import star11 from "../../../assets/images/illustrations/star11.svg";
import star12 from "../../../assets/images/illustrations/star12.svg";

export default function HanneDetail2() {
    const content = characterDetails.hanne.detail2;

    return (
        <section className={styles.screen}>

            {/* ── Baggrundsstjerner ── */}


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

            <h1 className={styles.title}>{content.title}</h1>

            <div className={styles.textBlock}>
                <p>{content.textTop}</p>
                <p>{content.textMiddle}</p>
                <p>{content.textBottom}</p>
            </div>

            <img
                className={styles.hanneMother}
                src={hanneMother}
                alt="Hanne holder om sin mor"
            />
        </section>
    );
}