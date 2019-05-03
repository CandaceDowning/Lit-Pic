import React, { Component } from "react";

class PegBoard extends Component {
  render() {
    let board = this.props.holes.map((color, i) => {
      const getGlow = color !== "g" && this.props.light === true ? "on" : "off";
      return (
        <div key={i} className='hole-border'>
          <div
            className={getGlow}
            id={color}
            onClick={() => this.props.punch(i)}
          />
        </div>
      );
    });
    return (
      <div className='peg-board'>
        <div className='grid'>{board}</div>
      </div>
    );
  }
}

export default PegBoard;
