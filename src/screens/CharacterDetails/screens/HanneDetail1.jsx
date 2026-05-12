import styles from "./styles/HanneDetail1.module.css";
import { characterDetails } from "../../../data/characters";

import hannePlaying from "../../../assets/images/familie/hanne/hanne1.svg";

export default function HanneDetail1() {
    const content = characterDetails.hanne.detail1;

    return (
        <section className={styles.screen}>
            <h1 className={styles.title}>{content.title}</h1>

            <div className={styles.textBlock}>
                <p>{content.textTop}</p>
                <p>{content.textBottom}</p>
            </div>

            <img
                className={styles.hannePlaying}
                src={hannePlaying}
                alt="Hanne leger med dukkehus"
            />
        </section>
    );
}