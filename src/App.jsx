import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./App.module.css";

import InaktivReset from "./components/Inaktiv/InaktivReset";
import Start from "./screens/Start/start";
import FamilyIntroScreens from "./screens/FamilyIntro/FamilyIntroScreens";
import CharacterSelect from "./screens/CharacterSelect/CharacterSelect";
import CharacterDetails from "./screens/CharacterDetails/CharacterDetails";
import Guide from "./screens/Guide/Guide";
import QRScreen from "./screens/QRScreen/QRScreen";

// Styrer hele app-flowet: start → intro → vælg karakter → detaljer → QR
export default function App() {
  // Holder styr på hvilken hovedskærm brugeren er på
  const [currentScreen, setCurrentScreen] = useState("start");
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [showGuide, setShowGuide] = useState(false);

  // Sender brugeren helt tilbage til start (bruges af InaktivReset)
  const nulstilOplevelse = () => {
    setCurrentScreen("start");
    setSelectedCharacter(null);
    setShowGuide(false);
    window.scrollTo(0, 0);
  };

  const goToScreen = (screen) => {
    setCurrentScreen(screen);
    window.scrollTo(0, 0);
  };

  const handleCharacterSelect = (character) => {
    setSelectedCharacter(character);
    goToScreen("characterDetails");
  };

  // Guiden vises som overlay oven på den aktuelle skærm
  const openGuide = () => {
    setShowGuide(true);
  };

  // Lukker guiden og sender brugeren videre til QR-skærmen
  const handleGuideNext = () => {
    setCurrentScreen("qrScreen");
    setShowGuide(false);
    window.scrollTo(0, 0);
  };

  // Vælger hvilken skærm der skal vises ud fra currentScreen
  const renderScreen = () => {
    switch (currentScreen) {
      case "start":
        return <Start onNext={() => goToScreen("familyIntroScreens")} />;

      case "familyIntroScreens":
        return (
          <FamilyIntroScreens
            onSelectCharacter={(characterId) => {
              setSelectedCharacter(characterId);
              setCurrentScreen("characterDetails");
            }}
            onRestart={nulstilOplevelse}
          />
        );
      // Bruges når brugeren går tilbage og vil vælge et andet familiemedlem
      case "characterSelect":
        return <CharacterSelect
          onSelectCharacter={handleCharacterSelect}
          onRestart={nulstilOplevelse}
        />;

      case "characterDetails":
        return (
          <CharacterDetails
            character={selectedCharacter}
            onNext={() => goToScreen("qrScreen")}
            onBack={() => goToScreen("characterSelect")}
            onOpenGuide={openGuide}
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
    <main className={styles.appContainer}>
      {renderScreen()}

      {/* Guide-overlay glider op nedefra og lægger sig oven på skærmen */}
      <AnimatePresence>
        {showGuide && (
          <motion.div
            className={styles.guideOverlay}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.45, ease: "easeInOut" }}
          >
            <Guide onNext={handleGuideNext} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Inaktivitetstimer skal ikke køre på startskærmen */}
      {currentScreen !== "start" && (
        <InaktivReset onNulstil={nulstilOplevelse} />
      )}
    </main>
  );
}