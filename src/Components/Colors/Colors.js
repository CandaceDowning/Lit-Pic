import React from "react";

//returns a 'tray' of colors to select from
const Colors = props => {
  return (
    <div className='colors-main'>
      <div className='directions'>
        <h3>Lit-Pic</h3>
        <p>Click a color!</p>
        <p>Pick a spot!</p>
        <p>Flip the light!</p>
      </div>
      <div className='colors-box'>
        <div onClick={() => props.colorSelect("w")} className='w-peg peg' />
        <div onClick={() => props.colorSelect("r")} className='r-peg peg' />
        <div onClick={() => props.colorSelect("o")} className='o-peg peg' />
        <div onClick={() => props.colorSelect("y")} className='y-peg peg' />
        <div onClick={() => props.colorSelect("gn")} className='gn-peg peg' />
        <div onClick={() => props.colorSelect("b")} className='b-peg peg' />
        <div onClick={() => props.colorSelect("p")} className='p-peg peg' />
        <div onClick={() => props.colorSelect("pi")} className='pi-peg peg' />
        <div onClick={() => props.colorSelect("g")} className='g-peg peg'>
          Eraser
        </div>
      </div>
    </div>
  );
};

export default Colors;
