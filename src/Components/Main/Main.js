import React, { Component } from "react";
import Colors from "../Colors/Colors";
import PegBoard from "../PegBoard/PegBoard";
import Controls from "../Controls/Controls";

class Main extends Component {
  constructor(props) {
    super(props);
    //current color tracked here
    //array holds the color of the holes
    this.state = this.getInitialState();
  }

  getInitialState = () => {
    let holeGen = Array(900).fill("g");
    const initialState = {
      onOrOff: false,
      currentColor: "g",
      holes: holeGen,
      light: false
    };
    return initialState;
  };

  //Lite Brite had pegs that you would punch through a paper template, so this function 'punches' the 'pegs' into place
  punch = i => {
    let colors = this.state.holes;
    colors.splice(i, 1, this.state.currentColor);
    this.setState({ holes: colors });
  };

  //sets color clicked to the current color for punching into the peg board
  colorSelect = color => {
    this.setState({ currentColor: color });
  };

  //turns the 'light' on and off which modifies the selector to include a box shadow and lightens the color of the 'pegs'
  onOrOff = () => {
    this.setState({ light: !this.state.light });
  };

  //resets the array to all gray
  reset = () => {
    this.setState(this.getInitialState());
  };

  // pointerChange = () => {
  //   document.body.style.cursor = "pointer";
  // };

  render() {
    return (
      <div className='main'>
        <div className='pegs-btns'>
          <Colors colorSelect={this.colorSelect} />
        </div>
        <PegBoard
          holes={this.state.holes}
          light={this.state.light}
          punch={this.punch}
        />
        <Controls
          reset={this.reset}
          onOrOff={this.onOrOff}
          light={this.state.light}
        />
      </div>
    );
  }
}

export default Main;
