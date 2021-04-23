import { useEffect, useState } from "react";
import "./App.css";
import Table from "./components/Table/Table";

function App() {
  const [elements, setElements] = useState();
  const API =
    "https://periodic-table-api-marouane.herokuapp.com/chemical-elements?fbclid=IwAR2s-quVl_Y7123V9TkESQDeOuRNsdDvC2Pia1Iv5KrBjr3ENBgQTowyJz0";

  const getElements = async () => {
    const response = await fetch(API);
    const data = await response.json();
    setElements(data);
  };
  useEffect(() => {
    getElements();
  }, []);
  return (
    <div className="App">
      {elements ? <Table elements={elements} /> : "spinner"}
    </div>
  );
}

export default App;
