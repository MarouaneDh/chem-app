import React from "react";

const Table = ({ elements }) => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
      }}
    >
      {elements.map((element) =>
        element.group === "Noble Gas" ? (
          <div
            style={{
              border: "2px solid black",
              padding: "10px",
              backgroundColor: "pink",
            }}
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
          >
            <p style={{ padding: "5px" }}>{element.Z}</p>
            <h4>{element.symbol}</h4>
          </div>
        )
      )}
    </div>
  );
};

export default Table;
