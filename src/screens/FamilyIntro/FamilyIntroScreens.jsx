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

// alle intro screens samlet, så vi kan skifte mellem dem med index
const SCREENS = [Screen0, Screen1, Screen2, Screen3, Screen4, Screen5, Screen6];

export default function FamilyIntroScreens({
  onNext,
  onSelectCharacter,
  startAt = 0,
}) {
  const [index, setIndex] = useState(startAt ?? 0); // hvilken screen der vises
  const [direction, setDirection] = useState(1); // 1 = frem, -1 = tilbage

  const goNext = () => {
    setDirection(1); // animationen skal gå fremad

    if (index < SCREENS.length - 1) {
      setIndex(index + 1); // næste intro screen
    } else {
      onNext(); // videre til næste hovedscreen
    }
  };

  const goPrev = () => {
    setDirection(-1); // animationen skal gå tilbage

    if (index > 0) setIndex(index - 1); // stopper ved første screen
  };

  // registrerer swipe op/ned
  const handlers = useSwipeable({
    onSwipedUp: goNext,
    onSwipedDown: goPrev,
    trackMouse: true, // muligt at teste med mus
    preventScrollOnSwipe: true, // stopper scrolling på siden mens man swiper
  });

  const CurrentScreen = SCREENS[index]; // den screen der vises lige nu

  // animationen til når screens glider ind og ud
  const slideVariants = {
    enter: (direction) => ({
      y: direction === 1 ? "100%" : "-100%", // ny screen kommer nedefra/oppefra
    }),
    center: {
      y: 0, // screen ender i midten
    },
    exit: (direction) => ({
      y: direction === 1 ? "-100%" : "100%", // gammel screen glider ud modsat vej
    }),
  };

  return (
    <div className={styles.wrapper} {...handlers}>
      {/* animationen omkring intro screen */}
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={index} // gør at framer motion opdager screen-skift
          custom={direction} // sender direction ind i animationen
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.35, ease: "easeInOut" }}
          className={styles.screen}
        >
          <CurrentScreen
            styles={styles}
            onSelectCharacter={onSelectCharacter}
          />
        </motion.div>
      </AnimatePresence>

      {/* progressionbar */}
      <ProgressBar total={SCREENS.length} currentIndex={index} />
    </div>
  );
}
