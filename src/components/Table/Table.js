import React, { useEffect, useState } from "react";
import FirstLine from "./FirstLine/FirstLine";
import FirstSecondLine from "./SecondLine/FirstSecondLine";
import SecondSecondLine from "./SecondLine/SecondSecondLine";
import FirstThirdLine from "./ThirdLine/FirstThirdLine";
import SecondThirdLine from "./ThirdLine/SecondThirdLine";
import FourthLine from "./FourthLine/FourthLine";
import FifthLine from "./FifthLine/FifthLine";
import FirstSixthLine from "./SixthLine/FirstSixthLine";
import SecondSixthLine from "./SixthLine/SecondSixthLine";
import FirstSeventhLine from "./SeventhLine/FirstSeventhLine";
import SecondSeventhLine from "./SeventhLine/SecondSeventhLine";
import FirstAppendedLine from "./AppendedLines/FirstAppendedLine";
import SecondAppendedLine from "./AppendedLines/SecondAppendedLine";
import "./Table.css";

const Table = () => {
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
  return elements ? (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h1 style={{ color: "white", textAlign: "center" }}>Periodic Table</h1>
      <FirstLine elements={elements} />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <FirstSecondLine elements={elements} />
        <SecondSecondLine elements={elements} />
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <FirstThirdLine elements={elements} />
        <SecondThirdLine elements={elements} />
      </div>
      <FourthLine elements={elements} />
      <FifthLine elements={elements} />
      <div style={{ display: "flex" }}>
        <FirstSixthLine elements={elements} />
        <div className="space">57-71</div>
        <SecondSixthLine elements={elements} />
      </div>
      <div style={{ display: "flex" }}>
        <FirstSeventhLine elements={elements} />
        <div className="space">89-103</div>
        <SecondSeventhLine elements={elements} />
      </div>
      <div className="appended">
        <FirstAppendedLine elements={elements} />
        <SecondAppendedLine elements={elements} />
      </div>
      <div className="groups">
        <p className="group" style={{ backgroundColor: "orange" }}>
          Nonmetals
        </p>
        <p className="group" style={{ backgroundColor: "green" }}>
          Alkali Metal
        </p>
        <p className="group" style={{ backgroundColor: "yellow" }}>
          Alkaline Earth Metal
        </p>
        <p className="group" style={{ backgroundColor: "gray" }}>
          Transition Metal
        </p>
        <p className="group" style={{ backgroundColor: "violet" }}>
          Metalloid
        </p>
        <p className="group" style={{ backgroundColor: "tomato" }}>
          Post-Transition Metal
        </p>
        <p className="group" style={{ backgroundColor: "turquoise" }}>
          Halogen
        </p>
        <p className="group" style={{ backgroundColor: "yellowgreen" }}>
          Lanthanide
        </p>
        <p className="group" style={{ backgroundColor: "yellowgreen" }}>
          Nonmetals
        </p>
        <p className="group" style={{ backgroundColor: "pink" }}>
          Noble Gas
        </p>
      </div>
    </div>
  ) : null;
};

export default Table;
