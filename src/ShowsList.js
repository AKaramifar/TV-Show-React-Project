import React, { useState, useEffect } from "react";
import "./ShowsList.css";

function ShowsList() {
  const [allShows, setAllShows] = useState([]);
  useEffect(() => {
    fetchData();
  });
  async function fetchData() {
    const result = await fetch("https://api.tvmaze.com/shows");
    const data = await result.json();
    setAllShows(data);
  }
  return (
    <div id="Div_Shows_JSX" className="Div_Shows_CSS">
      <div id="ParnetDiv_Shows_JSX" className="ParnetDiv_Shows_CSS">
        <p
          id="P_SelectedShows_JSX"
          className="P_SelectedShows_CSS"
          onClick={() => {
            const allShowsDiv = document.getElementById("Div_AllShows_JSX");
            allShowsDiv.style.display == "block" ?
            allShowsDiv.style.display = "none" :
            allShowsDiv.style.display = "block";
            allShowsDiv.scrollTop = 0;
          }}
        >
          All Show's
        </p>
        <i
          className="I_Shows_Symbol_CSS fas fa-sort-down"
          aria-hidden="true"
          onClick={() => {
            document.getElementById("Div_AllShows_JSX").style.display = "block";
          }}
        ></i>
      </div>
      <div id="Div_AllShows_JSX" className="Div_AllShows_CSS">
        {allShows
          .sort((a, b) => a.name.localeCompare(b.name))
          .map((show, index) => {
            return (
              <p
                id={"P_Show_" + index + "_JSX"}
                className="P_Show_CSS"
                key={index}
                onClick={(e) => {
                  document.getElementById("Div_AllShows_JSX").style.display = "none";
                  document.getElementById("P_SelectedShows_JSX").textContent = document.getElementById(
                    "P_Show_" + index + "_JSX"
                  ).textContent;
                }}
              >
                {show.name}
              </p>
            );
          })}
      </div>
    </div>
  );
}

export default ShowsList;
