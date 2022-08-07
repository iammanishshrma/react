import React from "react";

const App = () => {
  const divClickHandler = (event) => {
    alert("div");
  };
  const buttonClickHandler = (event) => {
    event.stopPropagation();
    alert("button");
  };

  return (
    <div
      style={{
        background: "red",
        width: "200px",
        height: "200px",
      }}
      onClick={divClickHandler}
    >
      <button onClick={buttonClickHandler}>add to cart</button>
    </div>
  );
};

export default App;
