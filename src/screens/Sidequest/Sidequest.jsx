export default function Sidequest({ character, onNext, onBack }) {
  return (
    <div>
      <h1>Sidequest - {character}</h1>
      <button onClick={onBack}>Tilbage</button>
      <button onClick={onNext}>Næste</button>
    </div>
  );
}
