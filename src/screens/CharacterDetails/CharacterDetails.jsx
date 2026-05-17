import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
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
import Sidequest from "../Sidequest/Sidequest";

const CHARACTER_SCREENS = {
  hanne: [HanneDetail1, HanneDetail2, Sidequest],
  niels: [NielsDetail1, NielsDetail2, Sidequest],
  holger: [HolgerDetail1, HolgerDetail2, Sidequest],
  jytte: [JytteDetail1, JytteDetail2, Sidequest],
};

export default function CharacterDetails({
  character,
  onNext,
  onBack,
  onOpenGuide,
  startAt = 0,
}) {
  const screens = CHARACTER_SCREENS[character] || [];
  const [index, setIndex] = useState(startAt ?? 0);
  const [direction, setDirection] = useState(1);

  const hasMounted = useRef(false);

  const goNext = () => {
    setDirection(1);

    if (index < screens.length - 1) {
      setIndex(index + 1);
    } else {
      onNext();
    }
  };

  const goPrev = () => {
    setDirection(-1);

    if (index > 0) {
      setIndex(index - 1);
    } else {
      onBack();
    }
  };

  const handlers = useSwipeable({
    onSwipedUp: goNext,
    onSwipedDown: goPrev,
    trackMouse: true,
    preventScrollOnSwipe: true,
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

  const shouldSkipInitialSlide = !hasMounted.current && index === 0;

  return (
    <div className={styles.wrapper} {...handlers}>
      <AnimatePresence initial={true} custom={direction}>
        <motion.div
          key={`${character}-${index}`}
          custom={direction}
          variants={slideVariants}
          initial={shouldSkipInitialSlide ? false : "enter"}
          animate="center"
          exit="exit"
          transition={{ duration: 0.35, ease: "easeInOut" }}
          className={styles.screen}
          onAnimationComplete={() => {
            hasMounted.current = true;
          }}
        >
          <CurrentScreen
            character={character}
            onNext={onNext}
            onBack={onBack}
            onOpenGuide={onOpenGuide}
          />
        </motion.div>
      </AnimatePresence>

      <ProgressBar total={screens.length} currentIndex={index} />
    </div>
  );
}