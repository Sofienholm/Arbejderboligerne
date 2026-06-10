import styles from "./Guide.module.css";

import step1 from "../../assets/images/illustrations/Guide-step1.svg";
import step2 from "../../assets/images/illustrations/Guide-step2.svg";
import step3 from "../../assets/images/illustrations/Guide-step3.svg";
import step4 from "../../assets/images/illustrations/Guide-step4.svg";
import arrowRight from "../../assets/images/illustrations/PilThojre.svg";
import arrowLeft from "../../assets/images/illustrations/PilTvenstre.svg";

// Vises som overlay og forklarer trin-for-trin hvordan oplevelsen bruges
export default function Guide({ onNext }) {
  return (
    <section className={styles.screen}>
      <div className={styles.header}>
        <h1 className={styles.title}>DELTAG I FORTÆLLINGEN</h1>

        <p className={styles.subtitle}>
          OG HJÆLP FAMILIEN MED DERES DILEMMAER
        </p>
      </div>


      <img className={styles.stepImage1} src={step1} alt="" />
      <img className={styles.arrowRight1} src={arrowLeft} alt="" />

      <img className={styles.stepImage2} src={step2} alt="" />
      <img className={styles.arrowLeft} src={arrowRight} alt="" />

      <img className={styles.stepImage3} src={step3} alt="" />
      <img className={styles.arrowRight2} src={arrowLeft} alt="" />

      <img className={styles.stepImage4} src={step4} alt="" />

      <div className={styles.stepText1}>
        <h2>Scan først QR koden</h2>
        <p>SCAN KODEN FOR AT STARTE OPLEVELSEN.</p>
      </div>

      <div className={styles.stepText2}>
        <h2>Gå ind i lejligheden</h2>
        <p>TRÆD IND I HJEMMET OG OPLEV HVERDAGEN.</p>
      </div>

      <div className={styles.stepText3}>
        <h2>Find spor i rummet</h2>
        <p>FIND HOTSPOTS OG UNDERSØG GENSTANDE.</p>
      </div>

      <div className={styles.stepText4}>
        <h2>Løs dilemmaet</h2>
        <p>SAML SPORENE OG FIND SVARET.</p>
      </div>

      <div className={styles.timeline}>
        <span />
        <span />
        <span />
        <span />
      </div>

      <button className={styles.button} onClick={onNext}>
        ÅBEN QR-KODE
      </button>
    </section>
  );
}