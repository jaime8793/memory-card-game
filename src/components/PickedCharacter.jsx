function PickedCharacters({
  highScore,
  score,
  pickedCharacters,
  setScore,
  setHighScore,
}) {
  console.log(
    `This are the picked characters pickedCharacters`,
    pickedCharacters
  );
    

  return (
    <div>
      score:{score} highScore:{highScore}
    </div>
  );
}

export default PickedCharacters;
