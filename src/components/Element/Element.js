import React from "react";

const Element = ({ location }) => {
  const element = location.props;
  console.log(element.image);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "crimson",
        padding: "40px",
        borderRadius: "50px",
      }}
    >
      <img style={{ width: "600px" }} src={element.image} />
      <h1>{element.name}</h1>
      <h2>Symbol : {element.symbol}</h2>
      <h3>Group : {element.group}</h3>
      <h3>Atomic Mass : {element.atomicmass}</h3>
    </div>
  );
};

export default Element;
