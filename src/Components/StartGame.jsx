import React from "react";

const StartGame = () => {
  const playNow = () => {
    alert(`Lets Begin the game All the best`);
    console.log(`Game Started`);
  };
  return (
    <div className="overscroll-none">
      <div className="box-border border-2 border-black p-[7%] ] mt-[7%] ml-[12%] mr-[12%]">
        <div className="grid gap-2  grid-cols-2">
          <div>
            <img className="h-50" src="images/Dice.png" alt="" srcset="" />
          </div>
          <div>
            <h1 className="text-center font-serif font-bold text-3xl ">
              DICE GAME
            </h1>

            <button
              onClick={playNow}
              className="ml-[55%] mt-[14%] bg-black text-white p-3 w-[65%] rounded-lg"
            >
              PlayNow
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartGame;
