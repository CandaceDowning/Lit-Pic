import React, { Component } from "react";
import Colors from "../Colors/Colors";
import PegBoard from "../PegBoard/PegBoard";

class Main extends Component {
  constructor(props) {
    super(props);
    //current color tracked here
    //array holds the color of the holes
    this.state = this.getInitialState();
  }

  getInitialState = () => {
    const initialState = {
      onOrOff: false,
      currentColor: "g",
      holes: [
        "g",
        "g",
        "g",
        "g",
        "g",
        "g",
        "g",
        "g",
        "g",
        "g",
        "g",
        "g",
        "g",
        "g",
        "g",
        "g",
        "g",
        "g",
        "g",
        "g",
        "g",
        "g",
        "g",
        "g",
        "g",
        "g",
        "g",
        "g",
        "g",
        "g",
        "g",
        "g",
        "g",
        "g",
        "g",
        "g",
        "g",
        "g",
        "g",
        "g",
        "g",
        "g",
        "g",
        "g",
        "g",
        "g",
        "g",
        "g",
        "g",
        "g",
        "g",
        "g",
        "g",
        "g",
        "g",
        "g",
        "g",
        "g",
        "g",
        "g",
        "g",
        "g",
        "g",
        "g",
        "g",
        "g",
        "g",
        "g",
        "g",
        "g",
        "g",
        "g",
        "g",
        "g",
        "g",
        "g",
        "g",
        "g",
        "g",
        "g",
        "g",
        "g",
        "g",
        "g",
        "g",
        "g",
        "g",
        "g",
        "g",
        "g",
        "g",
        "g",
        "g",
        "g",
        "g",
        "g",
        "g",
        "g",
        "g",
        "g"
      ]
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

  //resets the array to all gray
  reset = () => {
    this.setState(this.getInitialState());
  };

  render() {
    return (
      <div className='main'>
        <div className='pegs-btns'>
          <Colors colorSelect={this.colorSelect} />
          <button onClick={this.reset}>Reset</button>
        </div>
        <PegBoard holes={this.state.holes} punch={this.punch} />
      </div>
    );
  }
}

export default Main;
