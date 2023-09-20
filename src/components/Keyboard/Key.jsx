import React, { useContext } from "react";
import { AppContext } from "../../App";

import { IconContext } from "react-icons";
import { MdOutlineBackspace } from "react-icons/md";

function Key({ keyVal, bigKey, disabled, correct, almost }) {
  const { gameOver, onSelectLetter, onDelete, onEnter } =
    useContext(AppContext);

  const selectLetter = () => {
    if (gameOver.gameOver) return;
    if (keyVal === "Enter") {
      onEnter();
    } else if (keyVal === "Delete") {
      onDelete();
    } else {
      onSelectLetter(keyVal);
    }
  };
  return (
    <>
      {keyVal == "Delete" ? (
        <IconContext.Provider value={{ size: "26px" }}>
          <div className='key' id={"bigKey"} onClick={selectLetter}>
            <MdOutlineBackspace width={25} />
          </div>
        </IconContext.Provider>
      ) : (
        <div
          className='key'
          id={
            bigKey
              ? "bigKey"
              : disabled
              ? "disabled"
              : correct
              ? "correct"
              : almost
              ? "almost"
              : null
          }
          onClick={selectLetter}>
          {keyVal}
        </div>
      )}
    </>
  );
}

export default Key;
