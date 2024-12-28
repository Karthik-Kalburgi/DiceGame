import { React, useState } from "react";

const NumberSelector = () => {
  const [selectedNumber, setselectedNumber] = useState();
  const selectNumber = [1, 2, 3, 4, 5, 6];

  console.log(selectedNumber);

  return (
    <>
      <div>
        <p className="text-end p-2 mx-20 font-bold ">Select any Number</p>
      </div>
      <div className="display flex gap-5 ml-[65%] p-6 ">
        {selectNumber.map((value, i) => (
          <div
            key={i}
            onClick={() => setselectedNumber(value)}
            className={`box-border h-15 w-[6%] p-4 border-4 ${
              selectedNumber === value ? "bg-green-400 text-white" : "bg-white"
            }  `}
          >
            {value}
          </div>
        ))}
      </div>
    </>
  );
};

export default NumberSelector;
