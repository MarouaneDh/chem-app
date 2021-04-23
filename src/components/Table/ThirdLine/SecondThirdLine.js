import React from "react";
import { Link } from "react-router-dom";

const FirstSecondLine = ({ elements }) => {
  return elements ? (
    <div style={{ display: "flex" }}>
      {elements.map((element) =>
        element.Z > 12 && element.Z < 19 ? (
          element.group === "Noble Gas" ? (
            <Link
              to={{ pathname: `/${element.Z}`, props: element }}
              style={{
                border: "2px solid black",
                padding: "10px",
                backgroundColor: "pink",
              }}
              className="element"
              key={element.Z}
            >
              <p style={{ padding: "5px" }}>{element.Z}</p>
              <h4>{element.symbol}</h4>
            </Link>
          ) : element.group === "Nonmetal" ? (
            <Link
              to={{ pathname: `/${element.Z}`, props: element }}
              style={{
                border: "2px solid black",
                padding: "10px",
                backgroundColor: "orange",
              }}
              className="element"
              key={element.Z}
            >
              <p style={{ padding: "5px" }}>{element.Z}</p>
              <h4>{element.symbol}</h4>
            </Link>
          ) : element.group === "Alkali Metal" ? (
            <Link
              to={{ pathname: `/${element.Z}`, props: element }}
              style={{
                border: "2px solid black",
                padding: "10px",
                backgroundColor: "green",
              }}
              className="element"
              key={element.Z}
            >
              <p style={{ padding: "5px" }}>{element.Z}</p>
              <h4>{element.symbol}</h4>
            </Link>
          ) : element.group === "Alkaline Earth Metal" ? (
            <Link
              to={{ pathname: `/${element.Z}`, props: element }}
              style={{
                border: "2px solid black",
                padding: "10px",
                backgroundColor: "yellow",
              }}
              className="element"
              key={element.Z}
            >
              <p style={{ padding: "5px" }}>{element.Z}</p>
              <h4>{element.symbol}</h4>
            </Link>
          ) : element.group === "Metalloid" ? (
            <Link
              to={{ pathname: `/${element.Z}`, props: element }}
              style={{
                border: "2px solid black",
                padding: "10px",
                backgroundColor: "violet",
              }}
              className="element"
              key={element.Z}
            >
              <p style={{ padding: "5px" }}>{element.Z}</p>
              <h4>{element.symbol}</h4>
            </Link>
          ) : element.group === "Halogen" ? (
            <Link
              to={{ pathname: `/${element.Z}`, props: element }}
              style={{
                border: "2px solid black",
                padding: "10px",
                backgroundColor: "turquoise",
              }}
              className="element"
              key={element.Z}
            >
              <p style={{ padding: "5px" }}>{element.Z}</p>
              <h4>{element.symbol}</h4>
            </Link>
          ) : element.group === "Post-Transition Metal" ? (
            <Link
              to={{ pathname: `/${element.Z}`, props: element }}
              style={{
                border: "2px solid black",
                padding: "10px",
                backgroundColor: "tomato",
              }}
              className="element"
              key={element.Z}
            >
              <p style={{ padding: "5px" }}>{element.Z}</p>
              <h4>{element.symbol}</h4>
            </Link>
          ) : element.group === "Transition Metal" ? (
            <Link
              to={{ pathname: `/${element.Z}`, props: element }}
              style={{
                border: "2px solid black",
                padding: "10px",
                backgroundColor: "grey",
              }}
              className="element"
              key={element.Z}
            >
              <p style={{ padding: "5px" }}>{element.Z}</p>
              <h4>{element.symbol}</h4>
            </Link>
          ) : element.group === "Lanthanide" ? (
            <Link
              to={{ pathname: `/${element.Z}`, props: element }}
              style={{
                border: "2px solid black",
                padding: "10px",
                backgroundColor: "yellowgreen",
              }}
              className="element"
              key={element.Z}
            >
              <p style={{ padding: "5px" }}>{element.Z}</p>
              <h4>{element.symbol}</h4>
            </Link>
          ) : (
            <Link
              to={{ pathname: `/${element.Z}`, props: element }}
              style={{
                border: "2px solid black",
                padding: "10px",
                backgroundColor: "yellowgreen",
              }}
              className="element"
              key={element.Z}
            >
              <p style={{ padding: "5px" }}>{element.Z}</p>
              <h4>{element.symbol}</h4>
            </Link>
          )
        ) : null
      )}
    </div>
  ) : null;
};

export default FirstSecondLine;
