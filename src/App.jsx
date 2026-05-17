import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./App.module.css";

import Start from "./screens/Start/start";
import FamilyIntroScreens from "./screens/FamilyIntro/FamilyIntroScreens";
import CharacterSelect from "./screens/CharacterSelect/CharacterSelect";
import CharacterDetails from "./screens/CharacterDetails/CharacterDetails";
import Sidequest from "./screens/Sidequest/Sidequest";
import Guide from "./screens/Guide/Guide";
import QRScreen from "./screens/QRScreen/QRScreen";

export default function App() {
  const [currentScreen, setCurrentScreen] = useState("start");
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [subScreen, setSubScreen] = useState(null);
  const [showGuide, setShowGuide] = useState(false);

  const goToScreen = (screen) => {
    setCurrentScreen(screen);
    setSubScreen(null);
    window.scrollTo(0, 0);
  };

  const handleCharacterSelect = (character) => {
    setSelectedCharacter(character);
    goToScreen("characterDetails");
  };

  const openGuide = () => {
    setShowGuide(true);
  };

  const handleGuideNext = () => {
    setCurrentScreen("qrScreen");
    setShowGuide(false);
    setSubScreen(null);
    window.scrollTo(0, 0);
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case "start":
        return <Start onNext={() => goToScreen("familyIntroScreens")} />;

      case "familyIntroScreens":
        return (
          <FamilyIntroScreens
            startAt={subScreen}
            onSelectCharacter={(characterId) => {
              setSelectedCharacter(characterId);
              setCurrentScreen("characterDetails");
            }}
          />
        );

      case "characterSelect":
        return <CharacterSelect onSelectCharacter={handleCharacterSelect} />;

      case "characterDetails":
        return (
          <CharacterDetails
            character={selectedCharacter}
            startAt={subScreen}
            onNext={() => goToScreen("sidequest")}
            onBack={() => goToScreen("characterSelect")}
          />
        );

      case "sidequest":
        return (
          <Sidequest
            character={selectedCharacter}
            startAt={subScreen}
            onOpenGuide={openGuide}
            onBack={() => goToScreen("characterDetails")}
          />
        );

      case "qrScreen":
        return (
          <QRScreen
            character={selectedCharacter}
            onBack={() => goToScreen("characterSelect")}
          />
        );

      default:
        return <Start onNext={() => goToScreen("familyIntroScreens")} />;
    }
  };

  return (
    <div className={styles.appContainer}>
      {renderScreen()}

      <AnimatePresence>
        {showGuide && (
          <motion.div
            className={styles.guideOverlay}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.45, ease: "easeInOut" }}
          >
            <Guide character={selectedCharacter} onNext={handleGuideNext} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
