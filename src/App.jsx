import { useState } from "react";
import styles from "./App.module.css";

import Start from "./screens/Start/start";
import FamilyIntroScreens from "./screens/FamilyIntro/FamilyIntroScreens";
import CharacterSelect from "./screens/CharacterSelect/CharacterSelect";
import CharacterDetails from "./screens/CharacterDetails/CharacterDetails";
import Sidequest from "./screens/Sidequest/Sidequest";
import QRScreen from "./screens/QRScreen/QRScreen";
import DevMenu from "./components/DevMenu/DevMenu";

export default function App() {
  const [currentScreen, setCurrentScreen] = useState("start");
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [subScreen, setSubScreen] = useState(null); // midlertidig — bruges af DevMenu

  const goToScreen = (screen) => {
    setCurrentScreen(screen);
    setSubScreen(null);
    window.scrollTo(0, 0);
  };

  const handleCharacterSelect = (character) => {
    setSelectedCharacter(character);
    goToScreen("characterDetails");
  };

  // DevMenu kan hoppe direkte til en specifik skærm + underskærm + karakter
  const handleDevGoTo = ({ screen, character, subScreen: sub }) => {
    if (character) setSelectedCharacter(character);
    setCurrentScreen(screen);
    setSubScreen(sub);
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
            onNext={() => goToScreen("qrScreen")}
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
      <DevMenu
        onGoTo={handleDevGoTo}
        currentScreen={currentScreen}
        currentSubScreen={subScreen}
      />
    </div>
  );
}
