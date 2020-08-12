import React, { useState, useEffect } from "react";
import styled from "styled-components";

import Token from "./Token";
import TokenPicked from "./TokenPicked";
import Result from "./Result";

import evaluateGame from "./../functions/evaluateGame";

const TableStyled = styled.div`
  padding: 2rem 0;
  display: grid;
  grid-gap: 2rem;
  max-width: 25rem;
  width: 100%;

  &.bg-pentagon {
    background-image: url("./images/bg-pentagon.svg");
    background-position: center center;
    background-size: 18rem;
    background-repeat: no-repeat;
  }

  &:hover {
    animation-play-state: paused;
  }

  & .row:nth-child(1) {
    margin-bottom: -3rem;
    display: flex;
    justify-content: center;
  }
  & .row:nth-child(2) {
    display: flex;
    justify-content: space-between;
  }
  & .row:nth-child(3) {
    display: flex;
    justify-content: center;
    grid-gap: 2rem;
  }

  .in-game {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

function Table() {
  //const [score, setScore] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [userPicked, setUserPicked] = useState("");
  const [housePicked, setHousePicked] = useState("");
  const [gameResult, setGameResult] = useState("you win");

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  const availabeTokens = ["rock", "paper", "scissors", "lizard", "spock"];

  function updateStatus(name) {
    setHousePicked(availabeTokens[getRandomInt(0, availabeTokens.length)]);
    setUserPicked(name);
    setPlaying(true);
  }

  function handleTryAgainClick() {
    setUserPicked("");
    setHousePicked("");
    setPlaying(false);
  }

  useEffect(() => {
    if (userPicked !== "" && housePicked !== "") {
      setGameResult(evaluateGame(userPicked, housePicked));
    }
  }, [userPicked, housePicked]);

  return (
    <TableStyled className={!playing ? "bg-pentagon" : ""}>
      {!playing ? (
        <>
          <div className="row">
            <Token name="rock" onClick={updateStatus} />
          </div>
          <div className="row">
            <Token name="spock" onClick={updateStatus} />
            <Token name="paper" onClick={updateStatus} />
          </div>
          <div className="row">
            <Token name="lizard" onClick={updateStatus} />
            <Token name="scissors" onClick={updateStatus} />
          </div>
        </>
      ) : (
        <>
          <section className="in-game">
            <TokenPicked token={userPicked} title="you picked" />
            <TokenPicked token={housePicked} title="the house picked" />
          </section>
          <Result title={gameResult} handleClick={handleTryAgainClick} />
        </>
      )}
    </TableStyled>
  );
}

export default Table;
