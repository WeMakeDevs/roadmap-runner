import React, { useEffect } from "react";

const ConsistencyGraph = () => {
  useEffect(() => {
    const squares = document.querySelector(".squares");
    for (var i = 1; i < 365; i++) {
      const level = Math.floor(Math.random() * 3);
      squares.insertAdjacentHTML(
        "beforeend",
        `<li data-level="${level}"></li>`
      );
    }
  }, []);

  return (
    <div>
      <div className="graph">
        <ul className="squares"></ul>
      </div>
    </div>
  );
};

export default ConsistencyGraph;
