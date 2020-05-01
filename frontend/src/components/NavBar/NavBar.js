import React from 'react';
import './NavBar.scss';

const NavBar = () => {
  return (
    <>
      <div className="navbar">
        {/* <span className="nav-title">Recipe Book</span> */}

        <ul>
          <li>
            <a href="/">Recipes</a>
          </li>
          <li>
            <a href="/">Healthy</a>
          </li>
          <li>
            <a href="/">Comfort</a>
          </li>
          <li>
            <a href="/">Dessert</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default NavBar;
