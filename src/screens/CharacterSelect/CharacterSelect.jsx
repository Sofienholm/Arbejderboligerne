import { useState } from "react";
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
  {
    id: "holger",
    image: holger,
    className: "holger",
    name: "HOLGER",
    role: "FAR I FAMILIEN HANSEN",
  },
  {
    id: "niels",
    image: niels,
    className: "niels",
    name: "NIELS",
    role: "FAMILIENS ÆLDSTE BARN",
  },
  {
    id: "jytte",
    image: jytte,
    className: "jytte",
    name: "JYTTE",
    role: "MOR I FAMILIEN HANSEN",
  },
  {
    id: "hanne",
    image: hanne,
    className: "hanne",
    name: "HANNE",
    role: "FAMILIENS YNGSTE BARN",
  },
];

const selectedPosition = {
  top: "10%",
  left: "28%",
  width: "44dvw",
};

export default function CharacterSelect({ onSelectCharacter }) {
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [isLeaving, setIsLeaving] = useState(false);

  const handleSelect = (character) => {
    setSelectedCharacter(character);
    setIsLeaving(false);
  };

  const handleBack = () => {
    setSelectedCharacter(null);
    setIsLeaving(false);
  };

  const handleLearnMore = () => {
    if (!selectedCharacter) return;

    setIsLeaving(true);

    setTimeout(() => {
      onSelectCharacter(selectedCharacter.id);
    }, 650);
  };

  return (
    <section className={styles.screen}>
      {/* ── Baggrundsstjerner ── */}
      <motion.div
        className={`${starStyles.bg} ${styles.s1_s8}`}
        initial={{ x: "-120%", opacity: 0 }}
        animate={{
          x: 0,
          opacity: selectedCharacter ? 0 : 0.4,
        }}
        transition={{ delay: 0.1, duration: 0.7, ease: "easeOut" }}
      >
        <img src={star8} alt="" className={`${styles.starImg} floatC`} />
      </motion.div>

      <motion.div
        className={`${starStyles.bg} ${styles.s1_s2}`}
        initial={{ y: "-120%", opacity: 0 }}
        animate={{
          y: 0,
          opacity: selectedCharacter ? 0 : 0.4,
        }}
        transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
      >
        <img src={star2} alt="" className={`${styles.starImg} floatA`} />
      </motion.div>

      <motion.div
        className={`${starStyles.bg} ${styles.s1_s13}`}
        initial={{ x: "120%", opacity: 0 }}
        animate={{
          x: 0,
          opacity: selectedCharacter ? 0 : 0.4,
        }}
        transition={{ delay: 0.3, duration: 0.7, ease: "easeOut" }}
      >
        <img src={star13} alt="" className={`${styles.starImg} floatB`} />
      </motion.div>

      <motion.div
        className={`${starStyles.bg} ${styles.s1_s16}`}
        initial={{ x: "-120%", opacity: 0 }}
        animate={{
          x: 0,
          opacity: selectedCharacter ? 0 : 0.4,
        }}
        transition={{ delay: 0.4, duration: 0.7, ease: "easeOut" }}
      >
        <img src={star16} alt="" className={`${styles.starImg} floatA`} />
      </motion.div>

      <motion.div
        className={`${starStyles.bg} ${styles.s1_s4}`}
        initial={{ y: "120%", opacity: 0 }}
        animate={{
          y: 0,
          opacity: selectedCharacter ? 0 : 0.4,
        }}
        transition={{ delay: 0.5, duration: 0.7, ease: "easeOut" }}
      >
        <img src={star4} alt="" className={`${styles.starImg} floatC`} />
      </motion.div>

      <motion.h1
        className={styles.title}
        animate={{
          opacity: selectedCharacter ? 0 : 1,
          y: selectedCharacter ? -20 : 0,
        }}
        transition={{ duration: 0.35, ease: "easeOut" }}
      >
        VÆLG ET FAMILIE MEDLEM AT <br />
        LÆRE MERE OM
      </motion.h1>

      {selectedCharacter && (
        <motion.div
          className={styles.expandingCircle}
          initial={{ scale: 0, opacity: 1 }}
          animate={{
            scale: 18,
            opacity: isLeaving ? 0 : 1,
          }}
          transition={{
            delay: isLeaving ? 0 : 0.45,
            duration: isLeaving ? 0.4 : 0.9,
            ease: "easeInOut",
          }}
        />
      )}

      {selectedCharacter && (
        <motion.button
          className={styles.backButton}
          onClick={handleBack}
          animate={{
            x: isLeaving ? "-40vw" : 0,
            opacity: isLeaving ? 0 : 1,
          }}
          transition={{ duration: 0.45, ease: "easeInOut" }}
        >
          ← TILBAGE
        </motion.button>
      )}

      {characters.map((character, index) => {
        const isSelected = selectedCharacter?.id === character.id;
        const isOtherSelected = selectedCharacter && !isSelected;

        return (
          <motion.button
            key={character.id}
            className={`${styles.characterButton} ${styles[character.className]}`}
            onClick={() => handleSelect(character)}
            disabled={selectedCharacter !== null}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={
              isSelected
                ? {
                  ...selectedPosition,
                  x: isLeaving ? "-120vw" : 0,
                  scale: 1,
                  opacity: isLeaving ? 0 : 1,
                  zIndex: 20,
                }
                : {
                  scale: 1,
                  opacity: isOtherSelected ? 0 : 1,
                  zIndex: 2,
                }
            }
            whileTap={{ scale: 0.94 }}
            transition={{
              delay: selectedCharacter ? 0 : 0.7 + index * 0.25,
              duration: selectedCharacter ? 0.65 : 0.35,
              ease: "easeInOut",
            }}
          >
            <img src={character.image} alt={character.id} />
          </motion.button>
        );
      })}

      {selectedCharacter && (
        <motion.div
          className={styles.introText}
          initial={{ opacity: 0, y: 25 }}
          animate={{
            opacity: isLeaving ? 0 : 1,
            x: isLeaving ? "120vw" : 0,
            y: 0,
          }}
          transition={{
            delay: isLeaving ? 0 : 0.8,
            duration: isLeaving ? 0.45 : 0.7,
            ease: "easeOut",
          }}
        >
          <h1>{selectedCharacter.name}</h1>
          <p>{selectedCharacter.role}</p>
        </motion.div>
      )}

      {selectedCharacter && (
        <motion.button
          className={styles.learnButton}
          onClick={handleLearnMore}
          initial={{ opacity: 0, y: 25 }}
          animate={{
            opacity: isLeaving ? 0 : 1,
            y: isLeaving ? "30vh" : 0,
          }}
          transition={{
            delay: isLeaving ? 0 : 1.15,
            duration: isLeaving ? 0.4 : 0.6,
            ease: "easeOut",
          }}
        >
          LÆR MERE
        </motion.button>
      )}

      <div className={styles.preloadImages} aria-hidden="true">
        {characters.map((character) => (
          <img key={`preload-${character.id}`} src={character.image} alt="" />
        ))}
      </div>
    </section>
  );
}