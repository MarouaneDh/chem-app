import React from "react";

const FirstSecondLine = ({ elements }) => {
  return elements ? (
    <div style={{ display: "flex" }}>
      {elements.map((element) =>
        element.Z > 10 && element.Z < 13 ? (
          element.group === "Noble Gas" ? (
            <div
              style={{
                border: "2px solid black",
                padding: "10px",
                backgroundColor: "pink",
              }}
              className="element"
            >
              <p style={{ padding: "5px" }}>{element.Z}</p>
              <h4>{element.symbol}</h4>
            </div>
          ) : element.group === "Nonmetal" ? (
            <div
              style={{
                border: "2px solid black",
                padding: "10px",
                backgroundColor: "orange",
              }}
              className="element"
            >
              <p style={{ padding: "5px" }}>{element.Z}</p>
              <h4>{element.symbol}</h4>
            </div>
          ) : element.group === "Alkali Metal" ? (
            <div
              style={{
                border: "2px solid black",
                padding: "10px",
                backgroundColor: "green",
              }}
              className="element"
            >
              <p style={{ padding: "5px" }}>{element.Z}</p>
              <h4>{element.symbol}</h4>
            </div>
          ) : element.group === "Alkaline Earth Metal" ? (
            <div
              style={{
                border: "2px solid black",
                padding: "10px",
                backgroundColor: "yellow",
              }}
              className="element"
            >
              <p style={{ padding: "5px" }}>{element.Z}</p>
              <h4>{element.symbol}</h4>
            </div>
          ) : element.group === "Metalloid" ? (
            <div
              style={{
                border: "2px solid black",
                padding: "10px",
                backgroundColor: "violet",
              }}
              className="element"
            >
              <p style={{ padding: "5px" }}>{element.Z}</p>
              <h4>{element.symbol}</h4>
            </div>
          ) : element.group === "Halogen" ? (
            <div
              style={{
                border: "2px solid black",
                padding: "10px",
                backgroundColor: "turquoise",
              }}
              className="element"
            >
              <p style={{ padding: "5px" }}>{element.Z}</p>
              <h4>{element.symbol}</h4>
            </div>
          ) : element.group === "Post-Transition Metal" ? (
            <div
              style={{
                border: "2px solid black",
                padding: "10px",
                backgroundColor: "tomato",
              }}
              className="element"
            >
              <p style={{ padding: "5px" }}>{element.Z}</p>
              <h4>{element.symbol}</h4>
            </div>
          ) : element.group === "Transition Metal" ? (
            <div
              style={{
                border: "2px solid black",
                padding: "10px",
                backgroundColor: "grey",
              }}
              className="element"
            >
              <p style={{ padding: "5px" }}>{element.Z}</p>
              <h4>{element.symbol}</h4>
            </div>
          ) : element.group === "Lanthanide" ? (
            <div
              style={{
                border: "2px solid black",
                padding: "10px",
                backgroundColor: "yellowgreen",
              }}
              className="element"
            >
              <p style={{ padding: "5px" }}>{element.Z}</p>
              <h4>{element.symbol}</h4>
            </div>
          ) : (
            <div
              style={{
                border: "2px solid black",
                padding: "10px",
                backgroundColor: "yellowgreen",
              }}
              className="element"
            >
              <p style={{ padding: "5px" }}>{element.Z}</p>
              <h4>{element.symbol}</h4>
            </div>
          )
        ) : null
      )}
    </div>
  ) : null;
};

export default FirstSecondLine;
