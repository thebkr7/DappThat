import React, { Component } from 'react';
import logo from './logo.svg';
import 'bulma/css/bulma.css';
import './App.css';
import NavBar from './components/navBar.js';
import Norway from './assets/Norway.jpg';

class App extends Component {
  render() {
    return (
      <section class="hero is-fullheight">

        <div class='background'>
          <img src={Norway} />
        </div>

        <div class='backgroundOverlay' />

        <NavBar />

        <div class="hero-body">
          <div class="container has-text-centered">
            <div class="column is-6 is-offset-3">
              <h1 class="title has-text-light">
                DappThat
              </h1>
              <h2 class="subtitle has-text-light">
                We break things, build things, and break more things. We do this on the blockchain so that it is irreversable. Use our service :)
              </h2>
              <div class="box">

                <div class="field is-grouped">
                  <p class="control is-expanded">
                    <input class="input" type="text" placeholder="Enter your email" />
                  </p>
                  <p class="control">
                    <a class="button is-info">
                      Notify Me
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

    </section>
    );
  }
}

export default App;
