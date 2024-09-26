import { useEffect, useState } from "react";
import FetchCharacters from "./components/FetchCaracters";
import PickedCharacters from "./components/PickedCharacter";

function App() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [characters, setCharacters] = useState([]);
  const [pickedCharacters, setPickedCharacters] = useState([]);

  
  function onClick(character) {
    const alreadyPicked = pickedCharacters.some(
      (pickedCharacter) => pickedCharacter.id === character._id
    );

    if (alreadyPicked) {
      // Reset the score if the character was already picked
      setScore(0);
      setPickedCharacters([]);
    } else {
      // Add new character to picked list and increment score
      setPickedCharacters((prevPickedCharacters) => [
        ...prevPickedCharacters,
        { id: character._id, name: character.name },
      ]);
      setScore((prevScore) => prevScore + 1);
      setHighScore((prevHighScore) => Math.max(prevHighScore, score + 1));
    }
  }

  
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
