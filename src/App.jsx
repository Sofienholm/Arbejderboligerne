import { useState } from "react";
import styles from "./App.module.css";

import Start from "./screens/Start/start";
import FamilyIntroScreens from "./screens/FamilyIntro/FamilyIntroScreens";
import CharacterSelect from "./screens/CharacterSelect/CharacterSelect";
import CharacterDetails from "./screens/CharacterDetails/CharacterDetails";
import Sidequest from "./screens/Sidequest/Sidequest";


export default function App() {
  const [currentScreen, setCurrentScreen] = useState("start");
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [subScreen, setSubScreen] = useState(null);

  const goToScreen = (screen) => {
    setCurrentScreen(screen);
    setSubScreen(null);
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
            onBack={() => goToScreen("characterDetails")}
            onQrBack={() => goToScreen("characterSelect")}
          />
        );

      default:
        return <Start onNext={() => goToScreen("familyIntroScreens")} />;
    }
  };

  return <div className={styles.appContainer}>{renderScreen()}</div>;
}
