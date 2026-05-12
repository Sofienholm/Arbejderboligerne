import styles from "./styles/JytteDetail2.module.css";
import { characterDetails } from "../../../data/characters";

import jytteSitting from "../../../assets/images/familie/jytte/jytte2a.svg";
import jytteStanding from "../../../assets/images/familie/jytte/jytte2b.svg";

export default function JytteDetail2() {
    const content = characterDetails.jytte.detail2;

    return (
        <section className={styles.screen}>
            <h1 className={styles.title}>{content.title}</h1>

            <div className={styles.textBlock}>
                <p>{content.textTop}</p>
                <p>{content.textBottom}</p>
            </div>

            <img
                className={styles.jytteSitting}
                src={jytteSitting}
                alt="Jytte sidder og tænker"
            />

            <img
                className={styles.jytteStanding}
                src={jytteStanding}
                alt="Jytte står"
            />
        </section>
    );
}