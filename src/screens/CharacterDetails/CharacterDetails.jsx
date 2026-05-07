export default function CharacterDetails({ character, onNext, onBack }) {
  return (
    <div>
      <h1>{character} Detaljer</h1>
      <button onClick={onBack}>Tilbage</button>
      <button onClick={onNext}>Næste</button>
    </div>
  );
}
