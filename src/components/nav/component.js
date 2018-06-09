import React, { Component } from 'react';

class Nav extends Component {
  render() {
    return (
      <div className="hero-head">
        <nav className="navbar">
          <div className="container">
            <div className="navbar-brand">
              <a className="navbar-item" href="../..">
                <img src="http://bulma.io/images/bulma-type-white.png" alt="Logo" />
              </a>
              <span className="navbar-burger burger" data-target="navbarMenu">
                <span></span>
                <span></span>
                <span></span>
              </span>
            </div>
            <div id="navbarMenu" className="navbar-menu">
              <div className="navbar-end">
                <span className="navbar-item">
                  <a className="button is-white is-outlined" href="#">
                    <span className="icon">
                      <i className="fa fa-home"></i>
                    </span>
                    <span>DAPPS</span>
                  </a>
                </span>
                <span className="navbar-item">
                  <a className="button is-white is-outlined" href="#">
                    <span className="icon">
                      <i className="fa fa-book"></i>
                    </span>
                    <span>About</span>
                  </a>
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
