import React from "react";
import "./Board.css";
import BoardList from "./BoardList";
function Board() {
  return (
    <div className="Board_app">
      <BoardList />
      <BoardList />
    </div>
  );
}

export default Board;
