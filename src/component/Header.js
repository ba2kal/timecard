import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    
    <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <Link to="/" className="navbar-item">
        <h2>Sahara</h2>
      </Link>
  
      <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
  
    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        <Link to="/" className="navbar-item">
          Home
        </Link>
  
        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link">
            More
          </a>
  
          <div class="navbar-dropdown">
            <Link to="" className="navbar-item">
              TimeCard
            </Link>
            <Link to="" className="navbar-item">
              Photo
            </Link>
            <Link to="" className="navbar-item">
              Recipe
            </Link>
            <hr class="navbar-divider"/>
            <Link to="" className="navbar-item">
              Travel
            </Link>
          </div>
        </div>
      </div>
  
      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <a class="button is-primary">
              <strong>Log Out</strong>
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>

  );
}

export default Header;
