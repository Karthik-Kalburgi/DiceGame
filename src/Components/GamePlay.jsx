import React, { useState } from "react";
import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import RollDice from "./RollDice";


const GamePlay = () => {
    const [selectedNumber, setselectedNumber] = useState();
     const [currentDice, setcurrentDice] = useState(1);
  return (
    <main>
      <NumberSelector selectedNumber={selectedNumber} setselectedNumber={setselectedNumber} />
      <TotalScore />
      <RollDice currentDice={currentDice} setcurrentDice={setcurrentDice}/>
    </main>
  );
};

export default GamePlay;
