import styles from "./styles/NielsDetail1.module.css";
import { characterDetails } from "../../../data/characters";

import nielsPlaying from "../../../assets/images/familie/niels/niels1a.svg";
import nielsHomework from "../../../assets/images/familie/niels/niels1b.svg";

export default function NielsDetail1() {
    const content = characterDetails.niels.detail1;

    return (
        <section className={styles.screen}>
            <h1 className={styles.title}>{content.title}</h1>

            <div className={styles.textBlockTop}>
                <p>{content.textTop}</p>
            </div>

            <div className={styles.textBlockMiddle}>
                <p>{content.textMiddle}</p>
            </div>

            <div className={styles.textBlockBottom}>
                <p>{content.textBottom}</p>
            </div>

            <img
                className={styles.nielsPlaying}
                src={nielsPlaying}
                alt="Niels leger"
            />

            <img
                className={styles.nielsHomework}
                src={nielsHomework}
                alt="Niels laver lektier"
            />
        </section>
    );
}