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
            <img
                src={content.image}
                alt={content.name}
                className={styles.characterImage}
            />

            <div className={styles.textBlock}>
                <h1>{content.name}</h1>
                <p className={styles.role}>{content.role}</p>
                <p className={styles.text}>{content.text}</p>
            </div>

            <div className={styles.swipeText}>
                <p>SWIPE FOR AT GÅ VIDERE</p>
                <span>↑</span>
            </div>
        </section>
    );
}