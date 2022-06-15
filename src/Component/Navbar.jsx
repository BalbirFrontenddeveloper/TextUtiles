import React from "react";

const Navbar = (props) => {


  return (
    <>
      <div className="nav-div" style={{color: `${props.mode==='white' ? 'black' : 'white'}`, backgroundColor: `${props.mode==='white' ? 'white' : 'black'}`}}>
        <nav>
          <div className="logo">
            <h1>TextUtiles</h1>
          </div>
          
          <div className="toggle-switch">
            <input type="checkbox" id="switch" name="switch" onClick={() => {props.toggleMode()}}/>
            <label htmlFor="switch">{props.toggleText}</label>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
