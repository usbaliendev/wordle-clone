import React, { useState, useContext, useEffect } from "react";
import { AppContext } from "../../App";

function Letter({ letterPos, attemptVal }) {
  const { board, setDisabledLetters, currAttempt, correctWord } =
    useContext(AppContext);
  const letter = board[attemptVal][letterPos];
  const [typedL, setTypedL] = useState("");
  const correct = correctWord.toUpperCase()[letterPos] === letter;
  const almost =
    !correct && letter !== "" && correctWord.toUpperCase().includes(letter);
  const letterState =
    currAttempt.attempt > attemptVal &&
    (correct ? "correct" : almost ? "almost" : "error");

  useEffect(() => {
    if (letter !== "" && !correct && !almost) {
      setDisabledLetters((prev) => [...prev, letter]);
    }
  }, [currAttempt.attempt]);

  useEffect(() => {
    if (letter !== "") {
      setTypedL("current");
    }
  }, [letter]);

  // console.log(letterState);
  return (
    <div className='letter' id={letterState !== false ? letterState : typedL}>
      {letter}
    </div>
  );
}

export default Letter;
