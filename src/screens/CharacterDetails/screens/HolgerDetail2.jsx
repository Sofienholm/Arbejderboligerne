import styles from "./styles/HolgerDetail2.module.css";
import { characterDetails } from "../../../data/characters";

import holgerStanding from "../../../assets/images/familie/holger/holger2b.svg";
import holgerReading from "../../../assets/images/familie/holger/holger2a.svg";

export default function HolgerDetail2() {
    const content = characterDetails.holger.detail2;

    return (
        <section className={styles.screen}>
            <h1 className={styles.title}>{content.title}</h1>

            <div className={styles.textBlock}>
                <p>{content.textTop}</p>
                <p>{content.textMiddle}</p>
                <p>{content.textBottom}</p>
            </div>

            <img
                className={styles.holgerReading}
                src={holgerReading}
                alt="Holger læser avis"
            />

            <img
                className={styles.holgerStanding}
                src={holgerStanding}
                alt="Holger står og tænker"
            />
        </section>
    );
}