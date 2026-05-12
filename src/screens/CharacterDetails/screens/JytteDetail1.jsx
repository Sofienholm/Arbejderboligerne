import styles from "./styles/JytteDetail1.module.css";
import { characterDetails } from "../../../data/characters";

import jytteVacuum from "../../../assets/images/familie/jytte/jytte1.svg";

export default function JytteDetail1() {
    const content = characterDetails.jytte.detail1;

    return (
        <section className={styles.screen}>
            <h1 className={styles.title}>{content.title}</h1>

            <div className={styles.textBlock}>
                <p>{content.textTop}</p>
                <p>{content.textMiddle}</p>
                <p>{content.textBottom}</p>
            </div>

            <img
                className={styles.jytteVacuum}
                src={jytteVacuum}
                alt="Jytte støvsuger"
            />
        </section>
    );
}