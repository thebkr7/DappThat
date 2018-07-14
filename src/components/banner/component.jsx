import React from 'react';
import NavComponent from '../nav/component';
import './style.css';

import Norway from '../../assets/Norway.jpg';

class Banner extends React.Component {
  render() {
    return(
      <div>


      <section class="hero background-blue is-fullheight centered">

        <img src={Norway} className='img-size'/>
        <NavComponent />

          <div class="container see-through-me">
          <h1 class="title is-2 hp-title has-text-centered has-text-light">
            dAppThat
          </h1>
          <p class="subtitle is-5 has-text-centered has-text-light">
            DappThat is a <strong className="has-text-light">One Stop Shop</strong> for blockchain application development. We have a skillful team of fullstack and blockchain engineers that build quality, secure, decentralized applications for a brighter tomorrow.
          </p>


            <div className="field is-grouped">
              <p className="control is-expanded">
                <input className="input" type="text" placeholder="Enter your email" />
              </p>
              <p className="control">
                <a className="button is-info">
                  Get In Touch
                </a>
              </p>
            </div>

        </div>
      </section>

      </div>
    )
  }
}

export default Banner;
