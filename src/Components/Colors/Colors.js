import React from "react";
// import "../Colors/colors.css";

const Colors = props => {
  return (
    <div className='colors-main'>
      <div onClick={() => props.colorSelect("w")} className='w-peg peg' />
      <div onClick={() => props.colorSelect("r")} className='r-peg peg' />
      <div onClick={() => props.colorSelect("o")} className='o-peg peg' />
      <div onClick={() => props.colorSelect("y")} className='y-peg peg' />
      <div onClick={() => props.colorSelect("gn")} className='gn-peg peg' />
      <div onClick={() => props.colorSelect("b")} className='b-peg peg' />
      <div onClick={() => props.colorSelect("p")} className='p-peg peg' />
      <div onClick={() => props.colorSelect("g")} className='g-peg peg' />
    </div>
  );
};

export default Colors;
