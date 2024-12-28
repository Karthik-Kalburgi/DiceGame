import {React, useState} from "react";

const RollDice = () => {
  const [currentDice, setcurrentDice] = useState(1);

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);

  };

  const rollDice =()=>{
   const randomNumber = generateRandomNumber(1,7);
   setcurrentDice(()=>randomNumber)
   
  };
 
  
  

  return (
    <>
      <div className="flex flex-col items-center mt-10">
        <div    onClick={rollDice} className="items-center cursor-pointer">
          <img src={`images/dice_${currentDice}.png`} alt="" srcset="" />
        </div>
        <div>
          <h3 className="font-bold ">
            Click on Dice Roll
          </h3>
        </div>
        <button className="bg-black  text-white rounded-md w-[22%]  mt-4">
          Reset Score
        </button>
        <button className="bg-black text-white rounded-md w-[22%] mt-4">
          Show Rules
        </button>
      </div>
    </>
  );
};

export default RollDice;
