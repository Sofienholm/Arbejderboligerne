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

// Familien som array, så vi kan loope dem ud og animere dem ens
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

const starTransition = {
  duration: 0.7,
  ease: "easeOut",
};

const titleTransition = {
  duration: 0.35,
  ease: "easeOut",
};

const characterEnterTransition = {
  delay: 0.35,
  duration: 0.45,
  ease: "easeOut",
};

const characterSelectTransition = {
  duration: 0.65,
  ease: "easeInOut",
};
export default function CharacterSelect({ onSelectCharacter, onRestart }) {
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  // Bruges til at fade skærmen ud før der skiftes til detaljeskærmen
  const [isLeaving, setIsLeaving] = useState(false);
  // Bruges når brugeren vil starte helt forfra
  const [isRestarting, setIsRestarting] = useState(false);


  const handleSelect = (character) => {
    setSelectedCharacter(character);
    setIsLeaving(false);
  };

  const handleBack = () => {
    setSelectedCharacter(null);
    setIsLeaving(false);
  };

  // Venter på exit-animationen, før vi sender brugeren videre
  const handleLearnMore = () => {
    if (!selectedCharacter) return;

    setIsLeaving(true);

    setTimeout(() => {
      onSelectCharacter(selectedCharacter.id);
    }, 650);
  };
  const handleRestart = () => {
    setIsRestarting(true);

    setTimeout(() => {
      onRestart();
    }, 450);
  };
  const titleIsHidden = selectedCharacter || isLeaving;

  return (
    <motion.section
      className={styles.screen}
      animate={{
        opacity: isRestarting ? 0 : 1,
      }}
      transition={{
        duration: 0.45,
        ease: "easeInOut",
      }}
    >
      {/* ── Baggrundsstjerner ── */}
      <motion.div
        className={`${starStyles.bg} ${styles.s1_s8}`}
        initial={{ x: "-120%", opacity: 0 }}
        animate={{
          x: isLeaving ? "-120vw" : 0,
          opacity: 0.4,
        }}
        transition={{
          ...starTransition,
          delay: isLeaving ? 0 : 0.1,
        }}
      >
        <img src={star8} alt="" className={`${styles.starImg} floatC`} />
      </motion.div>

      <motion.div
        className={`${starStyles.bg} ${styles.s1_s2}`}
        initial={{ y: "-120%", opacity: 0 }}
        animate={{
          y: isLeaving ? "-120vh" : 0,
          opacity: 0.4,
        }}
        transition={{
          ...starTransition,
          delay: isLeaving ? 0 : 0.2,
        }}
      >
        <img src={star2} alt="" className={`${styles.starImg} floatA`} />
      </motion.div>

      <motion.div
        className={`${starStyles.bg} ${styles.s1_s13}`}
        initial={{ x: "120%", opacity: 0 }}
        animate={{
          x: isLeaving ? "120vw" : 0,
          opacity: 0.4,
        }}
        transition={{
          ...starTransition,
          delay: isLeaving ? 0 : 0.3,
        }}
      >
        <img src={star13} alt="" className={`${styles.starImg} floatB`} />
      </motion.div>

      <motion.div
        className={`${starStyles.bg} ${styles.s1_s16}`}
        initial={{ x: "-120%", opacity: 0 }}
        animate={{
          x: isLeaving ? "-120vw" : 0,
          opacity: 0.4,
        }}
        transition={{
          ...starTransition,
          delay: isLeaving ? 0 : 0.4,
        }}
      >
        <img src={star16} alt="" className={`${styles.starImg} floatA`} />
      </motion.div>

      <motion.div
        className={`${starStyles.bg} ${styles.s1_s4}`}
        initial={{ y: "120%", opacity: 0 }}
        animate={{
          y: isLeaving ? "120vh" : 0,
          opacity: 0.4,
        }}
        transition={{
          ...starTransition,
          delay: isLeaving ? 0 : 0.5,
        }}
      >
        <img src={star4} alt="" className={`${styles.starImg} floatC`} />
      </motion.div>

      <motion.h1
        className={styles.title}
        initial={{
          opacity: 0,
          y: -20,
        }}
        animate={{
          opacity: titleIsHidden ? 0 : 1,
          y: titleIsHidden ? -20 : 0,
        }}
        transition={{
          ...titleTransition,
          delay: titleIsHidden ? 0 : 0.5,
        }}
      >
        VÆLG ET FAMILIE MEDLEM AT <br />
        LÆRE MERE OM
      </motion.h1>

      {/* Cirklen vokser frem bag den valgte karakter */}
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

      {/* Render hver karakter som en knap – den valgte rykker op, resten fades ud */}
      {characters.map((character) => {
        const isSelected = selectedCharacter?.id === character.id;
        const isOtherSelected = selectedCharacter && !isSelected;

        return (
          <motion.button
            key={character.id}
            className={`${styles.characterButton} ${styles[character.className]}`}
            onClick={() => handleSelect(character)}
            disabled={selectedCharacter !== null}
            initial={{
              scale: 0.98,
              opacity: 0,
            }}
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
            transition={
              selectedCharacter
                ? characterSelectTransition
                : characterEnterTransition
            }
          >
            <img src={character.image} alt={character.id} />
          </motion.button>
        );
      })}
      {!selectedCharacter && (
        <motion.button
          className={styles.restartButton}
          onClick={handleRestart}
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: isLeaving || isRestarting ? 0 : 1,
            y: isLeaving || isRestarting ? 20 : 0,
          }}
          transition={{
            ...titleTransition,
            delay: isRestarting ? 0 : 0.9,
          }}
        >
          START FORFRA
        </motion.button>
      )}

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

      {/* Skjult preload, så billederne er klar når man swiper videre */}
      <div className={styles.preloadImages} aria-hidden="true">
        {characters.map((character) => (
          <img key={`preload-${character.id}`} src={character.image} alt="" />
        ))}
      </div>
    </motion.section>
  );
}