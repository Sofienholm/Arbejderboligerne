import styles from "./styles/HolgerDetail1.module.css";
import { characterDetails } from "../../../data/characters";

import holgerWork from "../../../assets/images/familie/holger/holger1a.svg";
import holgerSmoke from "../../../assets/images/familie/holger/holger1b.svg";

export default function HolgerDetail1() {
    const content = characterDetails.holger.detail1;

    return (
        <section className={styles.screen}>
            <h1 className={styles.title}>{content.title}</h1>

            <div className={styles.textBlockTop}>
                <p>{content.textTop}</p>
            </div>

            <div className={styles.textBlockBottom}>
                <p>{content.textBottom}</p>
            </div>

            <img
                className={styles.holgerWork}
                src={holgerWork}
                alt="Holger arbejder ved bordet"
            />

            <img
                className={styles.holgerSmoke}
                src={holgerSmoke}
                alt="Holger ryger"
            />
        </section>
    );
}