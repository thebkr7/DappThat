import React, { Component } from 'react';
import './style.css';

class Nav extends Component {
  render() {
    return (
      <div className="hero-head nav-position">
        <nav className="navbar">
          <div className="container">
            <div className="navbar-brand">
              <a className="navbar-item">
                <h1 class="title is-2 hp-title has-text-centered has-text-light">
                  dAppThat
                </h1>
              </a>
              <span className="navbar-burger burger" data-target="navbarMenu">
                <span></span>
                <span></span>
                <span></span>
              </span>
            </div>
            <div id="navbarMenu" className="navbar-menu">
              <div className="navbar-end">
                {/* <span className="navbar-item">
                  <a className="button is-white is-outlined" href="#">
                    <span className="icon">
                      <i className="fa fa-home"></i>
                    </span>
                    <span>DAPPS</span>
                  </a>
                </span> */}
                <span className="navbar-item">
                  <div className="button is-white is-outlined">
                    <span className="icon">
                      <i className="fas fa-rocket"></i>
                    </span>
                    <span>We Build dApps</span>
                  </div>
                </span>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Nav;
