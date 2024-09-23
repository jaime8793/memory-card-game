import { useEffect, useState } from "react";
import FetchCharacters from "./components/FetchCaracters";
import PickedCharacters from "./components/PickedCharacter";

function App() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [characters, setCharacters] = useState([]);
  const [pickedCharacters, setPickedCharacters] = useState([]);

  // Function to handle character click
  function onClick(character, score, highScore) {
    setPickedCharacters((prevPickedCharacters) => [
      ...prevPickedCharacters,
      {
        id: character._id,
        name: character.name,
      },
    ]);
    if (pickedCharacters.includes(character)) {
      setHighScore(0);
      setScore(0);
    } else {
      score = score + 1;
      highScore = highScore + 1;
      console.log(score,highScore)
    }
  }

  // Log the updated pickedCharacters whenever it changes
  useEffect(() => {
    console.log("Updated pickedCharacters:", pickedCharacters);
  }, [pickedCharacters]);

  return (
    <>
      <PickedCharacters
        score={score}
        setScore={setScore}
        highScore={highScore}
        setHighScore={setHighScore}
        pickedCharacters={pickedCharacters}
        setPickedCharacters={setPickedCharacters}
        onClick={onClick}
      />
      <FetchCharacters
        characters={characters}
        setCharacters={setCharacters}
        pickedCharacters={pickedCharacters}
        onClick={onClick}
      />
    </>
  );
}

export default App;
