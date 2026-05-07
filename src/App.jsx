import { useState } from "react";
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

  const goToScreen = (screen) => {
    setCurrentScreen(screen);
    window.scrollTo(0, 0);
  };

  const handleCharacterSelect = (character) => {
    setSelectedCharacter(character);
    goToScreen("characterDetails");
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case "start":
        return <Start onNext={() => goToScreen("familyIntroScreens")} />;
      case "familyIntroScreens":
        return (
          <FamilyIntroScreens onNext={() => goToScreen("characterSelect")} />
        );
      case "characterSelect":
        return <CharacterSelect onSelectCharacter={handleCharacterSelect} />;
      case "characterDetails":
        return (
          <CharacterDetails
            character={selectedCharacter}
            onNext={() => goToScreen("sidequest")}
            onBack={() => goToScreen("characterSelect")}
          />
        );
      case "sidequest":
        return (
          <Sidequest
            character={selectedCharacter}
            onNext={() => goToScreen("guide")}
            onBack={() => goToScreen("characterDetails")}
          />
        );
      case "guide":
        return (
          <Guide
            character={selectedCharacter}
            onNext={() => goToScreen("qrScreen")}
            onBack={() => goToScreen("sidequest")}
          />
        );
      case "qrScreen":
        return (
          <QRScreen
            character={selectedCharacter}
            onReset={() => goToScreen("splash")}
          />
        );
      default:
        return <Start onNext={() => goToScreen("familyIntro")} />;
    }
  };

  return <div className={styles.appContainer}>{renderScreen()}</div>;
}
