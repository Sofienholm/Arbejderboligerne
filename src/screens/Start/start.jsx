import styles from "./start.module.css";
import familieImg from "../../assets/images/familie/start-fam.svg";

import star1 from "../../assets/images/illustrations/star1.svg";
import star2 from "../../assets/images/illustrations/star2.svg";
import star3 from "../../assets/images/illustrations/star3.svg";
import star4 from "../../assets/images/illustrations/star4.svg";
import star6 from "../../assets/images/illustrations/star6.svg";
import star11 from "../../assets/images/illustrations/star11.svg";
import radio from "../../assets/images/illustrations/radio.svg";
import tv from "../../assets/images/illustrations/tv.svg";

// Placering, størrelse og animation for hvert baggrundselement
const BG_ITEMS = [
  { src: radio,  alt: "",  cls: styles.radio,  anim: styles.floatA },
  { src: tv,     alt: "",  cls: styles.tv,     anim: styles.floatB },
  { src: star1,  alt: "",  cls: styles.star1,  anim: styles.floatC },
  { src: star2,  alt: "",  cls: styles.star2,  anim: styles.floatA },
  { src: star3,  alt: "",  cls: styles.star3,  anim: styles.floatB },
  { src: star4,  alt: "",  cls: styles.star4,  anim: styles.floatC },
  { src: star6,  alt: "",  cls: styles.star6,  anim: styles.floatA },
  { src: star11, alt: "",  cls: styles.star11, anim: styles.floatB },
];

export default function Splash({ onNext }) {
  return (
    <div className={styles.container} onClick={onNext}>

      {/* ── Svævende baggrundsillustrationer ── */}
      <div className={styles.bgLayer}>
        {BG_ITEMS.map(({ src, alt, cls, anim }) => (
          <img
            key={cls}
            src={src}
            alt={alt}
            className={`${styles.bgItem} ${cls} ${anim}`}
          />
        ))}
      </div>

      {/* ── Overskrift ── */}
      <header className={styles.header}>
        <span className={styles.arbejderbolig}>ARBEJDERBOLIG</span>
        <h1 className={styles.year}>1955</h1>
      </header>

      {/* ── Familiebillede ── */}
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