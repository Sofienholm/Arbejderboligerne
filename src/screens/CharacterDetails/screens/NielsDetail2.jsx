import styles from "./styles/NielsDetail2.module.css";
import { characterDetails } from "../../../data/characters";

import nielsFriends from "../../../assets/images/familie/niels/niels2.svg";

export default function NielsDetail2() {
    const content = characterDetails.niels.detail2;

    return (
        <section className={styles.screen}>
            <h1 className={styles.title}>{content.title}</h1>

            <div className={styles.textBlock}>
                <p>{content.textTop}</p>
                <p>{content.textBottom}</p>
            </div>

            <img
                className={styles.nielsFriends}
                src={nielsFriends}
                alt="Niels med andre drenge"
            />
        </section>
    );
}