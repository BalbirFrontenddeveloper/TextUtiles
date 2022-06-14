import React from "react";

const Navbar = (props) => {
  return (
    <>
      <div className="nav-div" style={{color: `${'red'}`, backgroundColor: `${'yellow'}`}}>
        <nav>
          <div className="logo">
            <h1>TextUtiles</h1>
          </div>
          <div className="menu-list">
            <ul className="menu-link">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
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
