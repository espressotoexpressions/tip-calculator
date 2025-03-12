import { React, useState, useEffect } from "react";

const TipCalculatorComponent = () => {
  const [bill, setBill] = useState(0);
  const [tipPercent, setTipPercent] = useState(0);
  const [numPeople, setNumPeople] = useState(0);
  const [tipAmt, setTipAmt] = useState("0.00");
  const [totalAmtPerPerson, setTotalAmtPerPerson] = useState("0.00");
 
  const ResetValues = () => {
    setBill(0);
    setTipPercent(0);
    setNumPeople(0);
    setTipAmt("0.00");
    setTotalAmtPerPerson("0.00");
  };

  const calculateTip = () => {
    if (numPeople > 0 && tipPercent > 0) {
      const newTipAmt = ((bill * (tipPercent * 0.01)) / numPeople).toFixed(2);
      setTipAmt(newTipAmt);
      setTotalAmtPerPerson(
        (bill / numPeople + parseFloat(newTipAmt)).toFixed(2)
      );
    }
  };
  useEffect(() => {
    calculateTip();
    console.log("BILL" + bill);
    console.log("TIP %" + tipPercent);
    console.log("PEOPLE #" + numPeople);
    console.log("TIP AMT " + tipAmt);
    console.log("TOTAL per person" + totalAmtPerPerson);
  }, [bill, tipPercent, numPeople]);

  return (
    <div className="bg-white gap-10 flex rounded-2xl w-[800px] justify-center p-10 ">
      <div id="billSection" className=" flex flex-col gap-10">
        <div className="w-full ">
          <p className="mb-2  text-darkgrayishcyan text-sm">Bill</p>
          <div className=" bg-gray-100 border-none rounded-md w-full flex justify-between items-center ps-5  ">
            <img src="./images/icon-dollar.svg" className="" alt=" $ icon" />
            <input
              type="text"
              onChange={(e) => setBill(e.target.value)}
              value={bill}
              className="text-right w-full  bg-gray-100 border-none  rounded-md focus:ring-0 text-verydarkcyan text-2xl text-bold"
            />
          </div>
        </div>
        <div>
          <p className="mb-3   text-darkgrayishcyan text-sm"> Select Tip %</p>
          <div className="grid grid-cols-3  grid-rows-2 gap-3">
            <button
              className={` rounded-md hover:text-verydarkcyan hover:bg-strongcyan font-bold  ${
                tipPercent == 5
                  ? "bg-strongcyan text-verydarkcyan"
                  : "bg-verydarkcyan text-white"
              } `}
              value="5"
              onClick={(e) => setTipPercent(e.target.value)}
            >
              5%
            </button>
            <button
          className={` rounded-md hover:text-verydarkcyan hover:bg-strongcyan font-bold  ${
            tipPercent == 10
              ? "bg-strongcyan text-verydarkcyan"
              : "bg-verydarkcyan text-white"
          } `}
              value="10"
              onClick={(e) => setTipPercent(e.target.value)}
            >
              10%
            </button>
            <button
            className={` rounded-md hover:text-verydarkcyan hover:bg-strongcyan font-bold  ${
              tipPercent == 15
                ? "bg-strongcyan text-verydarkcyan"
                : "bg-verydarkcyan text-white"
            } `}
              value="15"
              onClick={(e) => setTipPercent(e.target.value)}
            >
              15%
            </button>
            <button
              className={` rounded-md hover:text-verydarkcyan hover:bg-strongcyan font-bold  ${
                tipPercent == 25
                  ? "bg-strongcyan text-verydarkcyan"
                  : "bg-verydarkcyan text-white"
              } `}
              value="25"
              onClick={(e) => setTipPercent(e.target.value)}
            >
              25%
            </button>
            <button
             className={` rounded-md hover:text-verydarkcyan hover:bg-strongcyan font-bold  ${
              tipPercent == 50
                ? "bg-strongcyan text-verydarkcyan"
                : "bg-verydarkcyan text-white"
            } `}
              value="50"
              onClick={(e) => setTipPercent(e.target.value)}
            >
              50%
            </button>
            <input
              type="text"
              placeholder="Custom"
              className="bg-gray-100 placeholder-verydarkcyan text-center text-verydarkcyan rounded-md font-bold focus:ring-2 focus:ring-strongcyan border-none"
              onChange={(e) => setTipPercent(e.target.value)}
            />
          </div>
        </div>
        <div id="numPeopleSection">
          <p className=" text-darkgrayishcyan text-sm mb-2">Number of People</p>
          <div className=" bg-gray-100 border-none rounded-md w-full flex justify-between items-center ps-5  ">
            <img src="./images/icon-person.svg" className="" alt="" />
            <input
              type="text"
              className="text-right w-full  bg-gray-100 border-none  rounded-md focus:ring-0 text-verydarkcyan text-1xl text-bold"
              value={numPeople}
              onChange={(e) => setNumPeople(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div
        id="tipSection"
        className="bg-verydarkcyan w-full rounded-2xl p-10 flex flex-col justify-between"
      >
        <div className="flex flex-col gap-10">
          <div className="flex justify-between">
            <div>
              <p className="text-white text-sm ">Tip Amount</p>
              <p className="text-grayishcyan  text-xs">/ person</p>
            </div>
            <p className="text-4xl text-strongcyan">{tipAmt}</p>
          </div>

          <div className="flex justify-between">
            <div>
              <p className="text-white text-sm">Total Amount</p>
              <p className="text-grayishcyan  text-xs">/ person</p>
            </div>
            <p className="text-4xl text-strongcyan">{totalAmtPerPerson}</p>
          </div>
        </div>
        <button
          className="w-full bg-strongcyan text-verydarkcyan p-2 rounded-md font-bold text-md"
          onClick={ResetValues}
        >
          RESET
        </button>
      </div>
    </div>
  );
};

export default TipCalculatorComponent;
