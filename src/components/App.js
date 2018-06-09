import React, { Component } from 'react';
import logo from '../logo.svg';
import 'bulma/css/bulma.css';
import './App.css';
import NavComponent from './nav/component.js';
import Norway from '../assets/Norway.jpg';
import BannerComponent from './banner/component';
import ServicesComponent from './services/component';
import AboutComponent from './about/component';
import ContactComponent from './contact/component';

class App extends Component {
  render() {
    return (
      <div className="hero is-fullheight">
        <div className='background'>
          <img src={Norway} />
        </div>
        <NavComponent />
        <BannerComponent />
        <ServicesComponent />
        <AboutComponent />
        <ContactComponent />
      </div>
    );
  }
}

export default App;
