import { useEffect } from "react";

function PickedCharacters({
  highScore,
  score,
  pickedCharacters,
  setScore,
  setHighScore,
}) {
  console.log("These are the picked characters:", pickedCharacters);

  return (
    <div className="flex space-x-1">
      <h2>Score: {score}</h2>
      <h2>HighScore: {highScore}</h2>
    </div>
  );
}

export default PickedCharacters;
