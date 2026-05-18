import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useSwipeable } from "react-swipeable";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import styles from "./FamilyIntroScreens.module.css";

import Screen0 from "./screens/Screen0";
import Screen1 from "./screens/Screen1";
import Screen2 from "./screens/Screen2";
import Screen3 from "./screens/Screen3";
import Screen4 from "./screens/Screen4";
import Screen5 from "./screens/Screen5";
import Screen6 from "../CharacterSelect/CharacterSelect";

// Alle intro-screens samlet i et array, så vi kan styre flowet med index
const SCREENS = [Screen0, Screen1, Screen2, Screen3, Screen4, Screen5, Screen6];

export default function FamilyIntroScreens({
  onNext,
  onSelectCharacter,
  onRestart,
  startAt = 0,
}) {
  const [index, setIndex] = useState(startAt ?? 0);
  // Retning på animationen: 1 = frem, -1 = tilbage
  const [direction, setDirection] = useState(1);

  const goNext = () => {
    setDirection(1);

    if (index < SCREENS.length - 1) {
      setIndex(index + 1);
    } else if (onNext) {
      onNext();
    }
  };

  const goPrev = () => {
    setDirection(-1);

    if (index > 0) setIndex(index - 1);
  };

  // Swipe op og ned bruges til at skifte mellem intro-skærmene
  const handlers = useSwipeable({
    onSwipedUp: goNext,
    onSwipedDown: goPrev,
    trackMouse: true,
    preventScrollOnSwipe: true,
  });

  const CurrentScreen = SCREENS[index];

  // Styrer hvordan ny og gammel skærm glider ind/ud lodret
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

  return (
    <div className={styles.wrapper} {...handlers}>
      <AnimatePresence custom={direction}>
        <motion.div
          // key på index gør at Framer Motion opdager skift mellem skærmene
          key={index}
          custom={direction}
          variants={slideVariants}
          initial={index === 0 ? false : "enter"}
          animate="center"
          exit="exit"
          transition={{ duration: 0.35, ease: "easeInOut" }}
          className={styles.screen}
        >
          <CurrentScreen
            styles={styles}
            onSelectCharacter={onSelectCharacter}
            onRestart={onRestart}
          />
        </motion.div>
      </AnimatePresence>

      {/* Progress bar skjules på første og sidste skærm */}
      {index > 0 && index < SCREENS.length - 1 && (
        <ProgressBar total={SCREENS.length - 2} currentIndex={index - 1} />
      )}
    </div>
  );
}
