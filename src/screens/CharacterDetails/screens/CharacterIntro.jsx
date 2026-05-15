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
        image: holger,
    },
    jytte: {
        name: "JYTTE",
        role: "MOR I FAMILIEN HANSEN",
        image: jytte,
    },
    niels: {
        name: "NIELS",
        role: "FAMILIENS ÆLDSTE BARN",
        image: niels,
    },
    hanne: {
        name: "HANNE",
        role: "FAMILIENS YNGSTE BARN",
        image: hanne,
    },
};

export default function CharacterIntro({ character }) {
    const content = characterIntro[character];

    if (!content) return null;

    return (
        <section className={styles.screen}>
            <img
                src={content.image}
                alt={content.name}
                className={styles.characterImage}
            />

            <motion.div
                className={styles.textBlock}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.6, ease: "easeOut" }}
            >
                <h1>{content.name}</h1>
                <p className={styles.role}>{content.role}</p>
            </motion.div>

            <motion.div
                className={styles.swipeText}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.75, duration: 0.6, ease: "easeOut" }}
            >
                <p>SWIPE FOR AT LÆRE MERE</p>
                <span>↑</span>
            </motion.div>
        </section>
    );
}