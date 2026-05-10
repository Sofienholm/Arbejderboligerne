import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useSwipeable } from "react-swipeable";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import styles from "./CharacterDetails.module.css";

import HanneDetail1 from "./screens/HanneDetail1";
import HanneDetail2 from "./screens/HanneDetail2";
import NielsDetail1 from "./screens/NielsDetail1";
import NielsDetail2 from "./screens/NielsDetail2";
import HolgerDetail1 from "./screens/HolgerDetail1";
import HolgerDetail2 from "./screens/HolgerDetail2";
import JytteDetail1 from "./screens/JytteDetail1";
import JytteDetail2 from "./screens/JytteDetail2";

// vælger hvilke 2 screens der hører til hver person
const CHARACTER_SCREENS = {
  hanne: [HanneDetail1, HanneDetail2],
  niels: [NielsDetail1, NielsDetail2],
  holger: [HolgerDetail1, HolgerDetail2],
  jytte: [JytteDetail1, JytteDetail2],
};

export default function CharacterDetails({
  character,
  onNext,
  onBack,
  startAt = 0,
}) {
  const screens = CHARACTER_SCREENS[character] || [];
  const [index, setIndex] = useState(startAt ?? 0); // hvilken detail screen der vises
  const [direction, setDirection] = useState(1); // 1 = frem, -1 = tilbage

  const goNext = () => {
    setDirection(1); // animationen skal gå fremad

    if (index < screens.length - 1) {
      setIndex(index + 1); // næste detail screen
    } else {
      onNext(); // videre til sidequest
    }
  };

  const goPrev = () => {
    setDirection(-1); // animationen skal gå tilbage

    if (index > 0) {
      setIndex(index - 1); // forrige detail screen
    } else {
      onBack(); // tilbage til character select
    }
  };

  const handlers = useSwipeable({
    onSwipedUp: goNext,
    onSwipedDown: goPrev,
    trackMouse: true, // muligt at teste med mus
    preventScrollOnSwipe: true, // stopper scrolling mens man swiper
  });

  const CurrentScreen = screens[index];

  const slideVariants = {
    enter: (direction) => ({
      y: direction === 1 ? "100%" : "-100%",
    }),
    center: {
      y: 0,
    },
    exit: (direction) => ({
      y: direction === 1 ? "-100%" : "100%",
    }),
  };

  if (!CurrentScreen) return null;

  return (
    <div className={styles.wrapper} {...handlers}>
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={`${character}-${index}`}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.35, ease: "easeInOut" }}
          className={styles.screen}
        >
          <CurrentScreen styles={styles} character={character} />
        </motion.div>
      </AnimatePresence>

      <ProgressBar total={screens.length} currentIndex={index} />
    </div>
  );
}