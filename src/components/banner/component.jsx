import React from 'react';

class Banner extends React.Component {
  render() {
    return(
      <div className="hero-body">
        <div className="container has-text-centered">
          <div className="column is-6 is-offset-3">
            <h1 className="title has-text-light">
              DappThat
            </h1>
            <h2 className="subtitle has-text-light">
              We break things, build things, and break more things. We do this on the blockchain so that it is
              irreversable. Use our service :)
            </h2>
            <div className="box">

              <div className="field is-grouped">
                <p className="control is-expanded">
                  <input className="input" type="text" placeholder="Enter your email"/>
                </p>
                <p className="control">
                  <a className="button is-info">
                    Notify Me
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Banner;
