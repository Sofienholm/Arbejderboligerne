import { motion } from "framer-motion";
import styles from "./styles/CharacterIntro.module.css";

import holger from "../../../assets/images/familie/holger-cirkel.svg";
import jytte from "../../../assets/images/familie/jytte-cirkel.svg";
import niels from "../../../assets/images/familie/niels-cirkel.svg";
import hanne from "../../../assets/images/familie/hanne-cirkel.svg";

const characterIntro = {
    holger: {
        name: "HOLGER",
        role: "FAR I FAMILIEN HANSEN",
        text: "DU SKAL NU FØLGE HOLGER OG SE HVERDAGEN GENNEM HANS ØJNE.",
        image: holger,
    },
    jytte: {
        name: "JYTTE",
        role: "MOR I FAMILIEN HANSEN",
        text: "DU SKAL NU FØLGE JYTTE OG SE HVERDAGEN GENNEM HENDES ØJNE.",
        image: jytte,
    },
    niels: {
        name: "NIELS",
        role: "FAMILIENS ÆLDSTE BARN",
        text: "DU SKAL NU FØLGE NIELS OG SE HVERDAGEN GENNEM HANS ØJNE.",
        image: niels,
    },
    hanne: {
        name: "HANNE",
        role: "FAMILIENS YNGSTE BARN",
        text: "DU SKAL NU FØLGE HANNE OG SE HVERDAGEN GENNEM HENDES ØJNE.",
        image: hanne,
    },
};

export default function CharacterIntro({ character }) {
    const content = characterIntro[character];

    if (!content) return null;

    return (
        <section className={styles.screen}>
            <motion.div
                className={styles.card}
                initial={{ opacity: 0, y: 90, rotate: -5, scale: 0.85 }}
                animate={{ opacity: 1, y: 0, rotate: -1.5, scale: 1 }}
                transition={{
                    duration: 0.8,
                    type: "spring",
                    stiffness: 90,
                    damping: 13,
                }}
            >
                <img
                    src={content.image}
                    alt={content.name}
                    className={styles.characterImage}
                />

                <div className={styles.cardText}>
                    <h1>{content.name}</h1>
                    <p>{content.role}</p>
                </div>
            </motion.div>

            <motion.p
                className={styles.introText}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.65, duration: 0.5, ease: "easeOut" }}
            >
                {content.text}
            </motion.p>

            <motion.div
                className={styles.swipeText}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.5, ease: "easeOut" }}
            >
                <p>SWIPE FOR AT GÅ VIDERE</p>
                <span>↑</span>
            </motion.div>
        </section>
    );
}