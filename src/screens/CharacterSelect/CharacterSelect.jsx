import { motion } from "framer-motion";
import starStyles from "../../screens/FamilyIntro/FamilyIntroScreens.module.css";

import styles from "./CharacterSelect.module.css";

import star2 from "../../assets/images/illustrations/star2.svg";
import star4 from "../../assets/images/illustrations/star4.svg";
import star8 from "../../assets/images/illustrations/star8.svg";
import star13 from "../../assets/images/illustrations/star13.svg";
import star16 from "../../assets/images/illustrations/star16.svg";

import holger from "../../assets/images/familie/holger-cirkel.svg";
import jytte from "../../assets/images/familie/jytte-cirkel.svg";
import niels from "../../assets/images/familie/niels-cirkel.svg";
import hanne from "../../assets/images/familie/hanne-cirkel.svg";

const characters = [
  { id: "holger", image: holger, className: "holger" },
  { id: "niels", image: niels, className: "niels" },
  { id: "jytte", image: jytte, className: "jytte" },
  { id: "hanne", image: hanne, className: "hanne" },
];

export default function CharacterSelect({ onSelectCharacter }) {
  return (
    <section className={styles.screen}>
      {/* ── Baggrundsstjerner ── */}
      <motion.div
        className={`${starStyles.bg} ${styles.s1_s8}`}
        initial={{ x: "-120%", opacity: 0 }}
        animate={{ x: 0, opacity: 0.4 }}
        transition={{ delay: 0.1, duration: 0.7, ease: "easeOut" }}
      >
        <img src={star8} alt="" className={`${styles.starImg} floatC`} />
      </motion.div>

      <motion.div
        className={`${starStyles.bg} ${styles.s1_s2}`}
        initial={{ y: "-120%", opacity: 0 }}
        animate={{ y: 0, opacity: 0.4 }}
        transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
      >
        <img src={star2} alt="" className={`${styles.starImg} floatA`} />
      </motion.div>

      <motion.div
        className={`${starStyles.bg} ${styles.s1_s13}`}
        initial={{ x: "120%", opacity: 0 }}
        animate={{ x: 0, opacity: 0.4 }}
        transition={{ delay: 0.3, duration: 0.7, ease: "easeOut" }}
      >
        <img src={star13} alt="" className={`${styles.starImg} floatB`} />
      </motion.div>

      <motion.div
        className={`${starStyles.bg} ${styles.s1_s16}`}
        initial={{ x: "-120%", opacity: 0 }}
        animate={{ x: 0, opacity: 0.4 }}
        transition={{ delay: 0.4, duration: 0.7, ease: "easeOut" }}
      >
        <img src={star16} alt="" className={`${styles.starImg} floatA`} />
      </motion.div>

      <motion.div
        className={`${starStyles.bg} ${styles.s1_s4}`}
        initial={{ y: "120%", opacity: 0 }}
        animate={{ y: 0, opacity: 0.4 }}
        transition={{ delay: 0.5, duration: 0.7, ease: "easeOut" }}
      >
        <img src={star4} alt="" className={`${styles.starImg} floatC`} />
      </motion.div>

      <h1 className={styles.title}>
        VÆLG ET FAMILIE MEDLEM AT <br />
        LÆRE MERE OM
      </h1>

      {characters.map((character, index) => (
        <motion.button
          key={character.id}
          className={`${styles.characterButton} ${styles[character.className]}`}
          onClick={() => onSelectCharacter(character.id)}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          whileTap={{ scale: 0.94 }}
          transition={{
            delay: 0.7 + index * 0.25,
            duration: 0.35,
            ease: "easeOut",
          }}
        >
          <img src={character.image} alt={character.id} />
        </motion.button>
      ))}
    </section>
  );
}