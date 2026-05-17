import { useEffect, useState } from "react";
import styles from "./InaktivReset.module.css";

const TID_FOER_BESKED = 900000; // 90 sekunder uden aktivitet
const NEDTAELLING_TID = 10; // 10 sekunder før siden nulstilles

export default function InaktivReset({ onNulstil }) {
    const [visBesked, setVisBesked] = useState(false);
    const [nedtaelling, setNedtaelling] = useState(NEDTAELLING_TID);

    useEffect(() => {
        let inaktivTimer;

        const startTimerForfra = () => {
            if (visBesked) return;

            clearTimeout(inaktivTimer);

            inaktivTimer = setTimeout(() => {
                setVisBesked(true);
                setNedtaelling(NEDTAELLING_TID);
            }, TID_FOER_BESKED);
        };

        const brugerAktivitet = [
            "click",
            "touchstart",
            "mousemove",
            "keydown",
            "scroll",
        ];

        brugerAktivitet.forEach((aktivitet) => {
            window.addEventListener(aktivitet, startTimerForfra);
        });

        startTimerForfra();

        return () => {
            clearTimeout(inaktivTimer);

            brugerAktivitet.forEach((aktivitet) => {
                window.removeEventListener(aktivitet, startTimerForfra);
            });
        };
    }, [visBesked]);

    useEffect(() => {
        if (!visBesked) return;

        if (nedtaelling <= 0) {
            onNulstil();
            setVisBesked(false);
            setNedtaelling(NEDTAELLING_TID);
            return;
        }

        const nedtaellingTimer = setTimeout(() => {
            setNedtaelling((tidTilbage) => tidTilbage - 1);
        }, 1000);

        return () => clearTimeout(nedtaellingTimer);
    }, [visBesked, nedtaelling, onNulstil]);

    const blivHer = () => {
        setVisBesked(false);
        setNedtaelling(NEDTAELLING_TID);
    };

    if (!visBesked) return null;

    const timerStatus = nedtaelling / NEDTAELLING_TID;

    return (
        <div className={styles.baggrund}>
            <div className={styles.boks}>
                <div
                    className={styles.timerCirkel}
                    style={{ "--timer-status": timerStatus }}
                >
                    <span>{nedtaelling}</span>
                </div>

                <h2>Er du her stadig?</h2>

                <p>
                    Tryk ja, hvis du vil fortsætte. Ellers går oplevelsen tilbage til
                    startskærmen.
                </p>

                <button type="button" onClick={blivHer}>
                    Ja
                </button>
            </div>
        </div>
    );
}