import { useState } from "react";
import styles from "./DevMenu.module.css";

// Midlertidig navigationsmenu — fjernes når swipe-flowet er færdigt.
// Lister alle skærme og undersider så vi kan hoppe direkte ind under udvikling.

const TOP_LEVEL = [
  { label: "Start", screen: "start" },
  { label: "Character Select", screen: "characterSelect" },
  { label: "Guide", screen: "guide" },
];

const FAMILY_INTRO = [1, 2, 3, 4, 5].map((n) => ({
  label: `Family Intro — Screen ${n}`,
  screen: "familyIntroScreens",
  subScreen: `screen${n}`,
}));

const CHARACTERS = ["hanne", "niels", "holger", "jytte"];

const CHARACTER_DETAILS = CHARACTERS.flatMap((c) =>
  [1, 2].map((n) => ({
    label: `${capitalize(c)} — Detail ${n}`,
    screen: "characterDetails",
    character: c,
    subScreen: `${c}Detail${n}`,
  }))
);

const SIDEQUESTS = CHARACTERS.map((c) => ({
  label: `${capitalize(c)} — Sidequest`,
  screen: "sidequest",
  character: c,
  subScreen: `sidequest${capitalize(c)}`,
}));

const QR_SCREENS = CHARACTERS.map((c) => ({
  label: `${capitalize(c)} — QR Screen`,
  screen: "qrScreen",
  character: c,
}));

function capitalize(s) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

export default function DevMenu({ onGoTo, currentScreen, currentSubScreen }) {
  const [open, setOpen] = useState(false);

  const handleClick = (item) => {
    onGoTo({
      screen: item.screen,
      character: item.character ?? null,
      subScreen: item.subScreen ?? null,
    });
  };

  const isActive = (item) => {
    if (item.subScreen) return currentSubScreen === item.subScreen;
    return currentScreen === item.screen && !currentSubScreen;
  };

  return (
    <div className={styles.devMenu}>
      <button
        className={styles.toggle}
        onClick={() => setOpen((o) => !o)}
        aria-label="Toggle dev menu"
      >
        {open ? "×" : "☰"} DEV
      </button>

      {open && (
        <div className={styles.panel}>
          <p className={styles.warning}>⚠ Midlertidig nav — fjern før release</p>

          <Section title="Hovedskærme">
            {TOP_LEVEL.map((item) => (
              <NavBtn
                key={item.label}
                item={item}
                onClick={handleClick}
                active={isActive(item)}
              />
            ))}
          </Section>

          <Section title="Family Intro">
            {FAMILY_INTRO.map((item) => (
              <NavBtn
                key={item.label}
                item={item}
                onClick={handleClick}
                active={isActive(item)}
              />
            ))}
          </Section>

          <Section title="Character Details">
            {CHARACTER_DETAILS.map((item) => (
              <NavBtn
                key={item.label}
                item={item}
                onClick={handleClick}
                active={isActive(item)}
              />
            ))}
          </Section>

          <Section title="Sidequests">
            {SIDEQUESTS.map((item) => (
              <NavBtn
                key={item.label}
                item={item}
                onClick={handleClick}
                active={isActive(item)}
              />
            ))}
          </Section>

          <Section title="QR Screens">
            {QR_SCREENS.map((item) => (
              <NavBtn
                key={item.label}
                item={item}
                onClick={handleClick}
                active={isActive(item)}
              />
            ))}
          </Section>
        </div>
      )}
    </div>
  );
}

function Section({ title, children }) {
  return (
    <div className={styles.section}>
      <h4 className={styles.sectionTitle}>{title}</h4>
      <div className={styles.buttons}>{children}</div>
    </div>
  );
}

function NavBtn({ item, onClick, active }) {
  return (
    <button
      className={`${styles.navBtn} ${active ? styles.active : ""}`}
      onClick={() => onClick(item)}
    >
      {item.label}
    </button>
  );
}
