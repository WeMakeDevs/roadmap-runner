import React, { useEffect, useState } from "react";
import { getProgressByDayNumber } from "./utils";

const ConsistencyGraph = ({ progress = [] }) => {
  const [levelsData, setLevelsData] = useState();

  useEffect(() => {
    const data = getProgressByDayNumber(progress);
    setLevelsData(data);
  }, [progress]);

  useEffect(() => {
    if (levelsData) {
      const squares = document.querySelector(".squares");
      squares.innerHTML = "";
      for (let i = 1; i < 365; i++) {
        const level = levelsData[i];

        squares.insertAdjacentHTML(
          "beforeend",
          `<li data-level="${level}"></li>`
        );
      }
    } else  {
      const squares = document.querySelector(".squares");
      squares.innerHTML = "";
      for (let i = 1; i < 365; i++) {

        squares.insertAdjacentHTML(
          "beforeend",
          `<li data-level="${0}"></li>`
        );
      }
    }
  }, [progress, levelsData]);

  return (
    <div>
      <div className="graph">
        <ul className="squares"></ul>
      </div>
    </div>
  );
};

export default ConsistencyGraph;
