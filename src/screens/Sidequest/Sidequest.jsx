import styles from "./Sidequest.module.css";
import { sideQuests } from "../../data/sideQuests";

export default function Sidequest({ character, onOpenGuide }) {
  const content = sideQuests[character];

  if (!content) return null;

  return (
    <section className={styles.screen}>
      <h1 className={styles.title}>{content.title}</h1>
      <h2 className={styles.subtitle}>{content.subtitle}</h2>

      <img
        className={styles.dilemmaImage}
        src={content.dilemmaImage}
        alt={content.title}
      />

      <button
        className={styles.button}
        onClick={() => {
          console.log("onOpenGuide:", onOpenGuide);
          onOpenGuide();
        }}
      >
        {content.buttonText}
      </button>
    </section>
  );
}
