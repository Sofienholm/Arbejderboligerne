import styles from "./QRScreen.module.css";
import { sideQuests } from "../../data/sideQuests";

export default function QRScreen({ character }) {
  const content = sideQuests[character];

  if (!content) return null;

  return (
    <section className={styles.screen}>
      <h1 className={styles.title}>
        HAR DU <br />
        MULIGHED <br />
        FOR AT <br />
        HJÆLPE <br />
        MIG?
      </h1>

      <img
        className={styles.characterImage}
        src={content.qr.characterImage}
        alt={character}
      />

      <img
        className={styles.qrCode}
        src={content.qr.qrCodeImage}
        alt="QR-kode"
      />
    </section>
  );
}