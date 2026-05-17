import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Sidequest.module.css";
import { sideQuests } from "../../data/sideQuests";
import Guide from "../Guide/Guide";
import QRScreen from "../QRScreen/QRScreen";

export default function Sidequest({ character, onNext, onQrBack }) {
  const [showGuide, setShowGuide] = useState(false);
  const [showQrBehindGuide, setShowQrBehindGuide] = useState(false);

  const content = sideQuests[character];

  if (!content) return null;

  const openGuide = () => {
    setShowGuide(true);
  };

  const closeGuideAndShowQr = () => {
    setShowQrBehindGuide(true);
    setShowGuide(false);
  };

  return (
    <section className={styles.screen}>
      {showQrBehindGuide ? (
        <QRScreen character={character} onBack={onQrBack} />
      ) : (
        <>
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
        </>
      )}

      <AnimatePresence onExitComplete={showQrBehindGuide ? onNext : undefined}>
        {showGuide && (
          <motion.div
            className={styles.guideOverlay}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.45, ease: "easeInOut" }}
          >
            <Guide character={character} onNext={closeGuideAndShowQr} />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
