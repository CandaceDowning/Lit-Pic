import React, { Component } from "react";

class PegBoard extends Component {
  constructor() {
    super();
    this.state = {
      onOrOff: false
    };
  }

  //turns the 'light' on and off which modifies the selector to include a box shadow and lightens the color of the 'pegs'
  onOrOff = () => {
    this.setState({ onOrOff: !this.state.onOrOff });
  };

  render() {
    const on = this.state.onOrOff ? "lightOn" : "lightOff";
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
      <div className='peg-board'>
        <div className='grid'>{board}</div>
        <div className='btn-box'>
          <button onClick={this.onOrOff} className={on}>
            {this.state.onOrOff ? "OFF" : "ON"}
          </button>
          <button onClick={() => this.props.reset()} className='reset'>
            RESET
          </button>
        </div>
      </div>
    );
  }
}

export default PegBoard;
