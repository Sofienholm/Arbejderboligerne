export default function CharacterSelect({ onSelectCharacter }) {
  return (
    <div>
      <h1>Vælg Karakter</h1>
      <button onClick={() => onSelectCharacter("jytte")}>Jytte</button>
      <button onClick={() => onSelectCharacter("holger")}>Holger</button>
      <button onClick={() => onSelectCharacter("niels")}>Niels</button>
      <button onClick={() => onSelectCharacter("hanne")}>Hanne</button>
    </div>
  );
}
