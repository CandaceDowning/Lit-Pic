import React, { Component } from "react";
// import "../PegBoard/peg-board.css";

class PegBoard extends Component {
  constructor() {
    super();
    this.state = {
      onOrOff: false
    };
  }

  onOrOff = () => {
    console.log(this.state.onOrOff);
    this.setState({ onOrOff: !this.state.onOrOff });
  };

  render() {
    let board = this.props.holes.map((color, i) => {
      const getGlow =
        color !== "g" && this.state.onOrOff === true ? "on" : "off";
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
      <div>
        <div className='grid'>{board}</div>
        <button onClick={this.onOrOff}>On/Off</button>
      </div>
    );
  }
}

export default PegBoard;
