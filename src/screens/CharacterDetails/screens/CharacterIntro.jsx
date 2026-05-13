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

            <div className={styles.textBlock}>
                <h1>{content.name}</h1>
                <p className={styles.role}>{content.role}</p>
            </div>

            <div className={styles.swipeText}>
                <p>SWIPE FOR AT LÆRE MERE</p>
                <span>↑</span>
            </div>
        </section>
    );
}