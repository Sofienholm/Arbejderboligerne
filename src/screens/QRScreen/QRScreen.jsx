export default function QRScreen({ character, onReset }) {
  return (
    <div>
      <h1>QR Code - {character}</h1>
      <button onClick={onReset}>Start Over</button>
    </div>
  );
}
