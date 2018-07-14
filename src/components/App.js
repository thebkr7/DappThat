import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import './App.css';
import BannerComponent from './banner/component';
// import ServicesComponent from './services/component';
// import AboutComponent from './about/component';
// import ContactComponent from './contact/component';

class App extends Component {
  render() {
    return (
      <div>
        <BannerComponent />
        {/* <ServicesComponent />
        <AboutComponent />
        <ContactComponent /> */}
      </div>
    );
  }
}

export default App;
