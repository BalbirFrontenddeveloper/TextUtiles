import React from "react";

const Navbar = (props) => {


  return (
    <>
      <div className="nav-div" style={{color: `${''}`, backgroundColor: `${''}`}}>
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
