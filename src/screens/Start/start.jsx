import styles from "./start.module.css";

import familieImg from "../../assets/images/familie/start-fam.svg";

import radio from "../../assets/images/illustrations/radio.svg";
import tv from "../../assets/images/illustrations/tv.svg";

import star1 from "../../assets/images/illustrations/star1.svg";
import star2 from "../../assets/images/illustrations/star2.svg";
import star3 from "../../assets/images/illustrations/star3.svg";
import star4 from "../../assets/images/illustrations/star4.svg";
import star6 from "../../assets/images/illustrations/star6.svg";
import star11 from "../../assets/images/illustrations/star11.svg";

export default function Start({ onNext }) {
  return (
    <div className={styles.container} onClick={onNext}>
      {/* svævende baggrundselementer */}
      <div className={styles.bgLayer}>
        <img src={radio} alt="" className={`${styles.bg} ${styles.radio} floatA`} />
        <img src={tv} alt="" className={`${styles.bg} ${styles.tv} floatB`} />

        <img src={star1} alt="" className={`${styles.bg} ${styles.star1} floatC`} />
        <img src={star2} alt="" className={`${styles.bg} ${styles.star2} floatA`} />
        <img src={star3} alt="" className={`${styles.bg} ${styles.star3} floatB`} />
        <img src={star4} alt="" className={`${styles.bg} ${styles.star4} floatC`} />
        <img src={star6} alt="" className={`${styles.bg} ${styles.star6} floatA`} />
        <img src={star11} alt="" className={`${styles.bg} ${styles.star11} floatB`} />
      </div>

      {/* overskrift */}
      <header className={styles.header}>
        <span className={styles.arbejderbolig}>ARBEJDERBOLIG</span>
        <h1 className={styles.year}>1955</h1>
      </header>

      {/* familiebillede */}
      <div className={styles.familieWrapper}>
        <img
          src={familieImg}
          alt="Familien Hansen"
          className={styles.familieImg}
        />
      </div>
    </div>
  );
}