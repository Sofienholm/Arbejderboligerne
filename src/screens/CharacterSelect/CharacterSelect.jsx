import styles from "./CharacterSelect.module.css";

import holger from "../../assets/images/familie/holger-cirkel.svg";
import jytte from "../../assets/images/familie/jytte-cirkel.svg";
import niels from "../../assets/images/familie/niels-cirkel.svg";
import hanne from "../../assets/images/familie/hanne-cirkel.svg";

const characters = [
  { id: "holger", image: holger, className: "holger" },
  { id: "niels", image: niels, className: "niels" },
  { id: "jytte", image: jytte, className: "jytte" },
  { id: "hanne", image: hanne, className: "hanne" },
];

export default function CharacterSelect({ onSelectCharacter }) {
  return (
    <section className={styles.screen}>
      <h1 className={styles.title}>
        VÆLG ET FAMILIE MEDLEM AT <br />
        LÆRE MERE OM
      </h1>

      {characters.map((character) => (
        <button
          key={character.id}
          className={`${styles.characterButton} ${styles[character.className]}`}
          onClick={() => onSelectCharacter(character.id)}
        >
          <img src={character.image} alt={character.id} />
        </button>
      ))}
    </section>
  );
}