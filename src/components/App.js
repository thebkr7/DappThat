import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import './App.css';
import NavComponent from './nav/component';
import BannerComponent from './banner/component';
import ServicesComponent from './services/component';
import AboutComponent from './about/component';
import ContactComponent from './contact/component';

class App extends Component {
  render() {
    return (
      <div className="App">
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
