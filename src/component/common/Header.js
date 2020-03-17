import React, { useEffect, useState, Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators as actions } from "../../reducers/Reducer";

const Header = props => {
  const { loginFlg, logout } = props;
  if (!loginFlg) {
    return null;
  }

  const clickBurger = () => {
    const el = document.getElementById("headerMenu");
          // Get the target from the "data-target" attribute
          const target = el.dataset.target;
          const $target = document.getElementById(target);

          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle("is-active");
          $target.classList.toggle("is-active");
    }

  return (
    <nav
      className="navbar is-dark is-transparent"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <Link to="/main" className="navbar-item">
          <h2>Sahara</h2>
        </Link>

        <Link
          onClick={clickBurger}
          role="button"
          className="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicItems"
          id="headerMenu"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </Link>
      </div>

      <div id="navbarBasicItems" className="navbar-menu">
        <div className="navbar-start">
          <Link to="/main" className="navbar-item">
            Home
          </Link>

          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link">More</a>

            <div className="navbar-dropdown">
              <Link to="/timeCard" className="navbar-item">
                TimeCard
              </Link>
              <Link to="" className="navbar-item">
                Photo
              </Link>
              <Link to="" className="navbar-item">
                Recipe
              </Link>
              <hr className="navbar-divider" />
              <Link to="" className="navbar-item">
                Travel
              </Link>
            </div>
          </div>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <Link to="/" className="button is-primary" onClick={logout}>
                <strong>Log Out</strong>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

function mapStateToProps(state) {
  const { loginFlg } = state;
  return {
    loginFlg
  };
}

function mapDisPatchToProps(dispatch) {
  return {
    logout: bindActionCreators(actions.logout, dispatch)
  };
}

export default connect(mapStateToProps, mapDisPatchToProps)(Header);
