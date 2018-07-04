import React, { Component } from 'react';

import Slider from './Slider';
import TypedComponent from './typed/TypedComponent';

class HomePage extends Component {

  render() {
    return (
      <div>
        <section className="home-slider">
          <Slider />
          <div className="home-slider--container">
            <div className="container">
              <TypedComponent
                loop
                strings={[
                  'Helps protect your <strong>Family</strong> from risks',
                  'Helps protect your <strong>Property</strong> from risks',
                  'Aims to become the your first point of contact when it comes to Insurance Brokerage',
                  'Believes strongly in Innovation'
                ]}
              >
                <p>Helps protect your <strong>Family</strong> from risks</p>
                <p>Helps protect your <strong>Property</strong> from risks</p>
                <p>Aims to become the major insurance brokerage firm globally</p>
                <p>Believes strongly in Innovation</p>
              </TypedComponent>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
export default HomePage;
