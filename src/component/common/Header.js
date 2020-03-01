import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators as actions } from "../../reducers/Reducer";

const Header = props => {
  const { loginFlg, logout } = props;
  if (!loginFlg) {
    return null;
  }

  return (
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <Link to="/main" className="navbar-item">
          <h2>Sahara</h2>
        </Link>

        <a
          role="button"
          class="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
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
            <a class="navbar-link">More</a>

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
              <hr class="navbar-divider" />
              <Link to="" className="navbar-item">
                Travel
              </Link>
            </div>
          </div>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <Link to="/" class="button is-primary" onClick={logout}>
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
