import React from "react";
import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import RollDice from "./RollDice";

const GamePlay = () => {
  return (
    <main>
      <NumberSelector />
      <TotalScore />
      <RollDice />
    </main>
  );
};

export default GamePlay;
