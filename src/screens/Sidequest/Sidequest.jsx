import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Sidequest.module.css";
import { sideQuests } from "../../data/sideQuests";
import Guide from "../Guide/Guide";

export default function Sidequest({ character, onNext }) {
  const [showGuide, setShowGuide] = useState(false);

  const content = sideQuests[character];

  if (!content) return null;

  const openGuide = () => {
    setShowGuide(true);
  };

  const closeGuideAndGoToQr = () => {
    setShowGuide(false);
    onNext();
  };

  return (
    <section className={styles.screen}>
      <h1 className={styles.title}>{content.title}</h1>
      <h2 className={styles.subtitle}>{content.subtitle}</h2>

      <img
        className={styles.dilemmaImage}
        src={content.dilemmaImage}
        alt={content.title}
      />

      <button className={styles.button} onClick={openGuide}>
        {content.buttonText}
      </button>

      <AnimatePresence>
        {showGuide && (
          <motion.div
            className={styles.guideOverlay}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.45, ease: "easeInOut" }}
          >
            <Guide character={character} onNext={closeGuideAndGoToQr} />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
