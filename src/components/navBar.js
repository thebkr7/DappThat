import React, { Component } from 'react';

class NavBar extends Component {
  render() {
    return (
      <div class="hero-head">
        <nav class="navbar">
          <div class="container">
            <div class="navbar-brand">
              <a class="navbar-item" href="../">
                <img src="http://bulma.io/images/bulma-type-white.png" alt="Logo" />
              </a>
              <span class="navbar-burger burger" data-target="navbarMenu">
                <span></span>
                <span></span>
                <span></span>
              </span>
            </div>
            <div id="navbarMenu" class="navbar-menu">
              <div class="navbar-end">
                <span class="navbar-item">
                  <a class="button is-white is-outlined" href="#">
                    <span class="icon">
                      <i class="fa fa-home"></i>
                    </span>
                    <span>DAPPS</span>
                  </a>
                </span>
                <span class="navbar-item">
                  <a class="button is-white is-outlined" href="#">
                    <span class="icon">
                      <i class="fa fa-book"></i>
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

export default NavBar;