import { useState } from "react";
import { useSwipeable } from "react-swipeable";
import styles from "./FamilyIntroScreens.module.css";

import Screen1 from "./screens/Screen1";
import Screen2 from "./screens/Screen2";
import Screen3 from "./screens/Screen3";
import Screen4 from "./screens/Screen4";
import Screen5 from "./screens/Screen5";

const SCREENS = [Screen1, Screen2, Screen3, Screen4, Screen5];

export default function FamilyIntroScreens({ onNext, startAt = 0 }) {
  const [index, setIndex] = useState(startAt ?? 0);

  const goNext = () => {
    if (index < SCREENS.length - 1) {
      setIndex(index + 1);
    } else {
      onNext();
    }
  };

  const goPrev = () => {
    if (index > 0) setIndex(index - 1);
  };

  const handlers = useSwipeable({
    onSwipedUp: goNext,
    onSwipedDown: goPrev,
    trackMouse: true,
    preventScrollOnSwipe: true,
  });

  const CurrentScreen = SCREENS[index];

  return (
    <div className={styles.wrapper} {...handlers}>

      {/* ── Skærm-indhold ── */}
      <div className={styles.screen}>
        <CurrentScreen styles={styles} />
      </div>

      {/* ── Progress bar (orange dots, højre side) ── */}
      <div className={styles.progressBar}>
        {SCREENS.map((_, i) => (
          <div
            key={i}
            className={`${styles.dot} ${i === index ? styles.dotActive : ""} ${i < index ? styles.dotPast : ""}`}
          />
        ))}
      </div>

    </div>
  );
}