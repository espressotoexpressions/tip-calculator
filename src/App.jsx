import "./App.css";
import TipCalculatorComponent from "./components/TipCalculatorComponent";

function App() {
  return (
    <div className="h-screen bg-lightgrayishcyan flex flex-col justify-center items-center  gap-10 pt-10 sm:p-10  ">
      <div>
        <img src="./images/logo.svg" alt="Splitter logo" />
      </div>
      <TipCalculatorComponent />
    </div>
  );
}

export default App;
