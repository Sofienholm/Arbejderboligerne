import { useState } from "react";
import styles from "./start.module.css";

import familieImg from "../../assets/images/familie/start-fam.png";

import radio from "../../assets/images/illustrations/radio.svg";
import tv from "../../assets/images/illustrations/tv.svg";

import star1 from "../../assets/images/illustrations/star1.svg";
import star2 from "../../assets/images/illustrations/star2.svg";
import star3 from "../../assets/images/illustrations/star3.svg";
import star4 from "../../assets/images/illustrations/star4.svg";
import star5 from "../../assets/images/illustrations/star5.svg";
import star6 from "../../assets/images/illustrations/star6.svg";
import star11 from "../../assets/images/illustrations/star11.svg";
import star12 from "../../assets/images/illustrations/star12.svg";

export default function Start({ onNext }) {
  const [hasClicked, setHasClicked] = useState(false);
  const [isLeaving, setIsLeaving] = useState(false);

  const handleStartClick = () => {
    if (hasClicked) return;

    setHasClicked(true);

    setTimeout(() => {
      setIsLeaving(true);
    }, 1500);

    setTimeout(() => {
      onNext();
    }, 2350);
  };

  return (
    <div className={styles.container} onClick={handleStartClick}>
      <div className={styles.bgLayer}>
        <img
          src={radio}
          alt=""
          className={`${styles.bg} ${styles.radio} floatC ${isLeaving ? styles.leaveLeft : ""
            }`}
        />

        <img
          src={tv}
          alt=""
          className={`${styles.bg} ${styles.tv} floatB ${isLeaving ? styles.leaveRight : ""
            }`}
        />

        <img
          src={star1}
          alt=""
          className={`${styles.bg} ${styles.star1} floatC ${isLeaving ? styles.leaveTop : ""
            }`}
        />

        <img
          src={star2}
          alt=""
          className={`${styles.bg} ${styles.star2} floatA ${isLeaving ? styles.leaveTop : ""
            }`}
        />

        <img
          src={star3}
          alt=""
          className={`${styles.bg} ${styles.star3} floatB ${isLeaving ? styles.leaveLeft : ""
            }`}
        />

        <img
          src={star4}
          alt=""
          className={`${styles.bg} ${styles.star4} floatC ${isLeaving ? styles.leaveRight : ""
            }`}
        />

        <img
          src={star5}
          alt=""
          className={`${styles.bg} ${styles.star5} floatA ${isLeaving ? styles.leaveBottom : ""
            }`}
        />

        <img
          src={star6}
          alt=""
          className={`${styles.bg} ${styles.star6} floatA ${isLeaving ? styles.leaveRight : ""
            }`}
        />

        <img
          src={star11}
          alt=""
          className={`${styles.bg} ${styles.star11} floatB ${isLeaving ? styles.leaveBottom : ""
            }`}
        />

        <img
          src={star12}
          alt=""
          className={`${styles.bg} ${styles.star12} floatC ${isLeaving ? styles.leaveTop : ""
            }`}
        />
      </div>

      <header
        className={`${styles.header} ${isLeaving ? styles.leaveTop : ""}`}
      >
        <span className={styles.arbejderbolig}>ARBEJDERBOLIG</span>
        <h1 className={styles.year}>1955</h1>
      </header>
      <div
        className={`${styles.personTapIndicator} ${hasClicked || isLeaving ? styles.personTapIndicatorHidden : ""
          }`}
      >
        <span className={`${styles.personRipple} ${styles.rippleHanne}`}></span>
        <span className={`${styles.personRipple} ${styles.rippleJytte}`}></span>
        <span className={`${styles.personRipple} ${styles.rippleHolger}`}></span>
        <span className={`${styles.personRipple} ${styles.rippleNiels}`}></span>

        <p>TRYK FOR AT TRÆDE IND</p>
      </div>

      <div
        className={`${styles.familieWrapper} ${isLeaving ? styles.fadeOut : ""
          }`}
      >
        <img
          src={familieImg}
          alt="Familien Hansen"
          className={styles.familieImg}
        />
      </div>
    </div>
  );
}