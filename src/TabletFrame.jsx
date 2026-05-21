import { useState, useEffect } from "react";
import styles from "./TabletFrame.module.css";

// Tablet-formatet prototypen altid vises i.
// 820 x 1180 = iPad Air 11" (M3) i portrait (logiske CSS-pixels).
// Ser noget forskudt ud på den rigtige iPad, er det TABLET_H der finjusteres.
const TABLET_W = 820;
const TABLET_H = 1180;

export default function TabletFrame() {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const update = () =>
      setScale(
        Math.min(window.innerWidth / TABLET_W, window.innerHeight / TABLET_H)
      );
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // Samme URL + ?embed=1, så index.jsx ved den skal rendere <App/> direkte.
  const src = `${import.meta.env.BASE_URL}?embed=1`;

  return (
    <div className={styles.backdrop}>
      <div
        className={styles.stage}
        style={{
          width: TABLET_W,
          height: TABLET_H,
          transform: `scale(${scale})`,
        }}
      >
        <iframe className={styles.frame} src={src} title="Arbejderboligerne" />
      </div>
    </div>
  );
}
