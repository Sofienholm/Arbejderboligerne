export default function Guide({ character, onNext, onBack }) {
  return (
    <div>
      <h1>Guide</h1>
      <button onClick={onBack}>Tilbage</button>
      <button onClick={onNext}>Næste</button>
    </div>
  );
}
