import styles from "./styles/HanneDetail2.module.css";
import { characterDetails } from "../../../data/characters";

import hanneMother from "../../../assets/images/familie/hanne/hanne2.svg";

export default function HanneDetail2() {
    const content = characterDetails.hanne.detail2;

    return (
        <section className={styles.screen}>
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