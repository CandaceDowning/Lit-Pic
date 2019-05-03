import React from "react";

//returns a 'tray' of colors to select from
const Controls = props => {
  const on = props.light ? "lightOn light-switch" : "lightOff light-switch";
  return (
    <div className='controls-main'>
      <div className='btn-box'>
        <div>
          <p>On/Off</p>
          <button onClick={props.onOrOff} className={on}>
            <div className='flipper' />
            {/* {props.light ? "OFF" : "ON"} */}
          </button>
        </div>

        <button onClick={() => props.reset()} className='reset'>
          RESET
        </button>
      </div>
    </div>
  );
};

export default Controls;
