import React from "react";

const Navbar = () => {


  return (
    <>
      <div className="nav-div">
        <div className="logo">
          <h1>TextUtils</h1>
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
          <input type="checkbox" id="switch" name="switch" />
          <label htmlFor="switch">Enable dark mode</label>
        </div>
      </div>
    </>
  );
};

export default Navbar;
