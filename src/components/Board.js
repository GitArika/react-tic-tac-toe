import React from "react";
import Square from "./Square";

export default class Board extends React.Component {
  renderSquare(i) {
    return (
      <Square
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  renderBoard(row, col) {
    const board = [];
    let cellCounter = 0;

    for (let i = 0; i < row; i += 1) {
      const columns = [];
      for (let j = 0; j < col; j += 1) {
        columns.push(this.renderSquare(cellCounter++));
      }
      board.push(
        <div key={i} className="board-row">
          {columns}
        </div>
      );
    }

    return board;
  }

  render() {
    return <div>{this.renderBoard(3, 3)}</div>;
  }
}
